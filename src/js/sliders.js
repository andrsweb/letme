import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Thumbs, EffectCreative, EffectFade } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperWithNav('.testimonials-swiper', '.testimonials__next',  '.testimonials__prev' )
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


			768: {
				slidesPerView: 4,
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