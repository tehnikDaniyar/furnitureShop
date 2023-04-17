export const swiperTips = () => {
	new Swiper('.slider-tips__body', {
		// Optional parameters
		// observer: true, //auto update slider
		// observeParents: true,
		loop: true,
		// loopPreventsSliding: true,
		slidesPerView: 3,
		spaceBetween: 32,
		// watchOverflow: true,
		speed: 800,
		parallax: true,
		// preloadImages: false,
		// loopedSlides: 4,

		// If we need pagination
		pagination: {
			el: '.slider-tips__dotts',
			clickable: true
		},

		// Navigation arrows
		navigation: {
			nextEl: '.tips__slider .slider-arrow_next',
			prevEl: '.tips__slider .slider-arrow_prev',
		},

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	});
}