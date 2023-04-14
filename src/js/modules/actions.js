import { removeClasses } from './functions.js'
export const actions = () => {
	window.onload = function () {
		document.addEventListener("click", documentActions);

		function documentActions(e) {
			const targetElement = e.target;
			console.log(targetElement);

			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover')
			};

			if (!targetElement.classList.contains('menu__arrow')) {
				removeClasses(document.querySelectorAll('.menu__item'), '_hover');
			};

			if (targetElement.classList.contains('search-form__icon')) {
				document.querySelector('.search-form').classList.toggle('_active')
			}
			else
				if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
					document.querySelector('.search-form').classList.remove('_active');
				};

			if (targetElement.closest('.icon-menu')) {
				document.querySelector('.menu__body').classList.toggle('_active');
				document.querySelector('.icon-menu').classList.toggle('_active');
			}

			if (targetElement.closest('.menu-footer__arrow')) {
				targetElement.classList.toggle('open');
				let parent = targetElement.parentElement;
				let menu = parent.querySelector('.menu-footer__list');
				menu.classList.toggle('open');
				// targetElement.parentElement.querySelector('.menu-footer__list').toggle('open');
			};

			if (targetElement.classList.contains('products__more')) {
				e.preventDefault();
				getProduct(targetElement);
			};

			async function getProduct(button) {
				if (!button.classList.contains('_hold')) {
					button.classList.add('_hold');
					let file = "json/products.json";
					let response = await fetch(file, { method: "GET" });
					console.log(response);
					if (response.ok) {
						let result = await response.json();
						console.log(result);
						loadProducts(result, button);
						button.classList.remove('_hold');
						button.remove();
					} else {
						console.error("error");
					};
				}
			};

			function loadProducts(data, button) {
				// let parent = button.parentElement.previousElementSibling;
				let parent = document.querySelector('.products__items');
				let products = data.products;

				function getLabels(product) {
					if (!product.labels) {
						return "";
					} else {
						let res = "";
						product.labels.forEach(elem => {
							elem.type === "sale" ? res += `<div class="item-products__label item-products__label_sale">${elem.value}</div>` : null;
							elem.type === "new" ? res += `<div class="item-products__label item-products__label_new">New</div>` : null;
						});
						return res;
					}
				};

				function getOldPrice(product) {
					if (product.priceOld) {
						return `<div class="item-products__price item-products_old">Rp ${product.priceOld}</div>`
					} else {
						return "";
					}
				}

				products.forEach(product => {
					let template = `			<article class="products__item item-products" data-pid="${product.id}">
					<div class="item-products__labels">
						${getLabels(product)}
					</div >
					<a href="" class="item-products__image _ibg">
						<img src="./img/products/${product.image}" alt="img01products">
					</a>
					<div class="item-products__body">
						<div class="item-products__content">
							<h5 class="item-products__title">${product.title}</h5>
							<div class="item-products__text">Minimalist fan</div>
						</div>
						<div class="item-products__prices">
							<div class="item-products__price">Rp ${product.price}</div>
							${getOldPrice(product)}
						</div>
						<div class="item-products__actions actions-product">
							<div class="actions-product__body">
								<a href="#" class="actions-product__button btn btn_white">Add to cart</a>
								<a href="" class="actions-product__link _icon-share"><span>Share</span></a>
								<a href="" class="actions-product__link _icon-favorite"><span>Like</span></a>
							</div>
						</div>
					</div>
				</article >`;
					parent.innerHTML += template;
				})
			}

			if (targetElement.classList.contains("actions-product__button")) {
				e.preventDefault();
				const productId = targetElement.closest('.products__item').dataset.pid;
				addToCart(targetElement, productId);
			}

			function addToCart(targetElement, productId) {
				if (!targetElement.classList.contains('_hold')) {
					targetElement.classList.add('_hold');
					targetElement.classList.add('_fly');

					const cart = document.querySelector('.cart-header__icon');
					const product = document.querySelector(`[data-pid="${productId}"]`);
					const productImage = product.querySelector('.item-products__image');
					const productButton = product.querySelector('.actions-product__button');

					const productImageFly = productImage.cloneNode(true);
					const productImageFlyWidth = productImage.offsetWidth;
					const productImageFlyHeight = productImage.offsetHeight;
					const productImageFlyTop = productImage.getBoundingClientRect().top;
					const productImageFlyLeft = productImage.getBoundingClientRect().left;
					console.log(productImageFlyWidth, productImageFlyHeight, productImageFlyTop, productImageFlyLeft);

					productImageFly.setAttribute('class', '_flyimage _ibg');
					productImageFly.style.cssText =
						`
					border-radius: 0;
					left: ${productImageFlyLeft}px;
					top: ${productImageFlyTop}px;
					width: ${productImageFlyWidth}px;
					height: ${productImageFlyHeight}px;
					`;

					document.body.append(productImageFly);

					const cartLeft = cart.getBoundingClientRect().left;
					const cartTop = cart.getBoundingClientRect().top;

					productImageFly.style.cssText =
						`
					border-radius: 100%;
					left: ${cartLeft}px;
					top: ${cartTop}px;
					width: 0px;
					height: 0px;
					opacity: 0;
				`;
					productImageFly.addEventListener('transitionend', function () {
						if (productButton.classList.contains('_fly')) {
							productImageFly.remove();
							updateCart(productButton, productId);
							productButton.classList.remove('_fly');
						}
					}
					)
				}
			};

			function updateCart(productButton, productid, productAdd = true) {
				const cart = document.querySelector('.cart-header__body');
				const cartIcon = document.querySelector('.cart-header__icon');
				const cartQuantiti = cartIcon.querySelector('span');
				const cartProduct = document.querySelector(`[data-cart-pid="${productid}"]`);
				const cartList = document.querySelector('.cart-list');
				console.log('updateCart');

				//====add========
				if (productAdd) {
					if (cartQuantiti) {
						cartQuantiti.innerHTML = ++cartQuantiti.innerHTML;
					} else {
						cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
					};

					if (!cartProduct) {
						const product = document.querySelector(`[data-pid="${productid}"]`);
						const cartProductImage = product.querySelector('.item-products__image').innerHTML;
						const srcImage = product.querySelector('.item-products__image img').getAttribute("src");
						const cartProductTitle = product.querySelector('.item-products__title').innerHTML;
						const cartProductContent = `
							<a href="#" class="cart-list__image _ibg"><img src="${srcImage}" alt="img"></a>
							<div class="cart-list__body">
								<a href="#" class="cart-list__title">${cartProductTitle}</a>
								<div class="cart-list__quantiti">Quantiti:<span>1</span></div>
								<a href="#" class="cart-list__delele">Delete</a>
							</div>`;


						cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productid}" class="cart-list__item">` + cartProductContent + "</li>");


						const renderedImage = document.querySelector(".cart-list__image");
						console.log(renderedImage);
					} else {
						const cartProductQuantiti = cartProduct.querySelector('.cart-list__quantiti span');
						cartProductQuantiti.innerHTML = ++cartProductQuantiti.innerHTML;
					};
					productButton.classList.remove('_hold')

					//=====delete=======
				} else {
					const cartProductQuantiti = cartProduct.querySelector(".cart-list__quantiti span");
					cartProductQuantiti.innerHTML = --cartProductQuantiti.innerHTML;
					--cartQuantiti.innerHTML;

					if (!parseInt(cartProductQuantiti.innerHTML)) {
						cartProduct.remove();
					};

					if (!parseInt(cartQuantiti.innerHTML)) {
						cartQuantiti.remove();
						cart.classList.remove("_active");
					}
				};

			};

			let body = document.querySelector(".cart-header__body");


			//================hidden/visible cart-body===================================
			if (targetElement.classList.contains("cart-header__icon") || targetElement.closest(".cart-header__icon")) {
				e.preventDefault();
				body.querySelector(".cart-list__item") ? body.classList.toggle("_active") : null;
			} else if (!targetElement.closest(".cart-header") && !targetElement.classList.contains("actions-product__button")) {
				body.classList.remove("_active");
			};
			//-------------------------------------------------------------------

			//================delete product on cart=============================
			if (targetElement.classList.contains("cart-list__delele")) {
				e.preventDefault();
				const productId = targetElement.closest(".cart-list__item").dataset.cartPid;
				updateCart(targetElement, productId, false);
			}
			//--------------------------------------------------------------------



		};



	};

	//==========for header observer=============
	let header = document.querySelector('.header');

	function callback(entries, observer) {
		if (entries[0].isIntersecting) {
			entries[0].target.classList.remove("_scroll");
		} else {
			entries[0].target.classList.add("_scroll");
		}
	}

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(header);
};
