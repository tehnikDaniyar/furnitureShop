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
					if (response.ok) {
						let result = await response.json();
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
							<div class="item-products__price">Rp 500.000</div>
						</div>
						<div class="item-products__actions actions-product">
							<div class="actions-product__body">
								<a href="#" class="actions-product__button btn btn_white">Add to cart</a>
								<a href="" class="actions-product__link _icon-share"><span>Share</span></a>
								<a href="" class="actions-product__link _icon-favorite"><span>Like</span></a>
							</div>
						</div>
					</div>
				</article > `;
					parent.innerHTML += template;
				})
			}
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
};