import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperWithNav('.testimonials-swiper', '.testimonials__next', '.testimonials__prev')
	swiperWithNav('.other-swiper', '.other__next', '.other__prev')
	swiperCarousel()
	swiperScrollbar()
	fixedWidthSwiper('.bookmaker-feedback-swiper')
	simpleSwiper('.types-swiper1')
	simpleSwiperWithReverse('.types-swiper2')
	swiperWithNavAndPag('.dropdown-swiper1', '.dropdown__next', '.dropdown__prev')
	swiperWithNavAndPag('.dropdown-swiper2', '.dropdown__next', '.dropdown__prev')
})

const swiperWithNavAndPag = (selector, next, prev) => {

	if (!selector) return

	const swiper = new Swiper(selector, {
		spaceBetween: 20,
		slidesPerView: 1,
		modules: [Navigation, Pagination],

		navigation: {
			nextEl: next,
			prevEl: prev,
		},

		pagination: {
			el: '.swiper-pagination'
		},

		speed: 2000
	})
}

const simpleSwiper = (selector) => {
	if (!selector) return

	const swiper = new Swiper(selector, {
		spaceBetween: 24,
		loop: true,

		modules: [Autoplay],

		breakpoints: {
			320: {
				slidesPerView: 1
			},

			480: {
				slidesPerView: 2
			},

			768: {
				slidesPerView: 3,
			},

			992: {
				slidesPerView: 4,
			},

			1200: {
				slidesPerView: 3
			},

			1366: {
				slidesPerView: 4
			},

			1700: {
				slidesPerView: 5
			}
		},

		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},

		speed: 15000
	})
}

const simpleSwiperWithReverse = (selector) => {
	if (!selector) return

	const swiper = new Swiper(selector, {
		spaceBetween: 24,
		slidesPerView: 5,
		loop: true,

		modules: [Autoplay],

		breakpoints: {
			320: {
				slidesPerView: 1
			},

			480: {
				slidesPerView: 2
			},

			768: {
				slidesPerView: 3,
			},

			992: {
				slidesPerView: 4,
			},

			1200: {
				slidesPerView: 3
			},

			1366: {
				slidesPerView: 4
			},

			1700: {
				slidesPerView: 5
			}
		},

		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			reverseDirection: true
		},

		speed: 15000
	})
}

const fixedWidthSwiper = (selector) => {

	if (!selector) return

	const swiper = new Swiper(selector, {
		spaceBetween: 10,
		slidesPerView: 'auto',

		speed: 2000
	})
}

const swiperWithNav = (selector, next, prev) => {

	if (!selector) return

	const swiper = new Swiper(selector, {
		spaceBetween: 20,
		modules: [Navigation],

		navigation: {
			nextEl: next,
			prevEl: prev,
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
			},

			480: {
				slidesPerView: 2,
			},


			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},

			992: {
				slidesPerView: 3,
				spaceBetween: 40,
			},

			1600: {
				slidesPerView: 4
			}
		},

		speed: 2000
	})
}

const swiperCarousel = () => {
	const swiper = new Swiper('.footer-swiper', {
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		modules: [Autoplay],

		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},

		breakpoints: {
			320: {
				slidesPerView: 3,
			},


			768: {
				slidesPerView: 5,
				spaceBetween: 40,
			},

			992: {
				slidesPerView: 10
			}
		},

		speed: 8000
	})

	if (!swiper) return
}

const swiperScrollbar = () => {
	const swiper = new Swiper('.swiper.team-swiper', {
		spaceBetween: 10,

		modules: [Scrollbar],

		scrollbar: {
			el: '.swiper-scrollbar',
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
			},

			480: {
				slidesPerView: 2,
			},

			768: {
				slidesPerView: 3,
				spaceBetween: 64,
			},

			1366: {
				spaceBetween: 88,
				slidesPerView: 4
			},

			1760: {
				slidesPerView: 6
			}
		},

		speed: 1000
	})

	if (!swiper) return
}