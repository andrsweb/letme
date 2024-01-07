import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperWithNav('.testimonials-swiper', '.testimonials__next', '.testimonials__prev')
	swiperCarousel()
	swiperScrollbar()
	fixedWidthSwiper('.bookmaker-feedback-swiper')
})

const fixedWidthSwiper = (selector) => {

	if(!selector) return

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
		slidesPerView: 4,
		modules: [Navigation],

		navigation: {
			nextEl: next,
			prevEl: prev,
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
			},

			576: {
				slidesPerView: 2,
			},


			768: {
				slidesPerView: 3,
				spaceBetween: 40,
			},

			992: {
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