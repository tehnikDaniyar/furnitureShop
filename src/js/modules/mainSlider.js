import Swiper from "swiper"
export const mainSlider = () => {
	const swiper = new Swiper('.slider-main__body', {
		// Optional parameters
		observer: true, //auto update slider
		observeParents: true,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		parallax: true,

		// If we need pagination
		pagination: {
			el: '.controls-slider-main__dotts',
			clickable: true
		},

		// Navigation arrows
		navigation: {
			nextEl: '.slider-main .slider-arrow_next',
			prevEl: '.slider-main .slider-arrow_prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
}