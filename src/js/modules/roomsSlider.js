export const swiperRooms = () => {
	new Swiper('.slider-rooms__body', {
		// Optional parameters
		// observer: true, //auto update slider
		// observeParents: true,
		// loop: true,
		// loopPreventsSliding: true,
		slidesPerView: 'auto',
		spaceBetween: 24,
		// watchOverflow: true,
		speed: 1200,
		parallax: true,
		// preloadImages: false,
		// loopedSlides: 4,

		// If we need pagination
		pagination: {
			el: '.slider-rooms__dotts',
			clickable: true
		},

		// Navigation arrows
		navigation: {
			nextEl: '.rooms__slider .slider-arrow_next',
			prevEl: '.rooms__slider .slider-arrow_prev',
		},

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	});
}