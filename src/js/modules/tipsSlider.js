export const swiperTips = () => {
	new Swiper('.slider-tips__body', {
		// Optional parameters
		// observer: true, //auto update slider
		// observeParents: true,
		loop: true,
		// loopPreventsSliding: true,
		// slidesPerView: 3,
		// spaceBetween: 32,
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

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.1,
				spaceBetween: 15
			},
			// when window width is >= 480px
			767: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 3,
				spaceBetween: 32
			}
		}

		// And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	});
}