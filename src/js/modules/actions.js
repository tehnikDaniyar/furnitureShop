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
				console.log('burger');
				document.querySelector('.menu__body').classList.toggle('_active');
			}

		};
	};
};