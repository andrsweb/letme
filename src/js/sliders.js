import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Thumbs, EffectCreative, EffectFade } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperWithNav('.testimonials-swiper', '.testimonials__next',  '.testimonials__prev' )
	swiperCarousel()
})

const swiperWithNav = (selector, next, prev) => {
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

	if (!swiper) return
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