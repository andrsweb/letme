document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	fillStars()
})

const fillStars = () => {
	const starsContainer = document.querySelector('.main__stars')
	const stars = starsContainer.querySelectorAll('svg')

	starsContainer.addEventListener('click', e => {
		const clickedStar = e.target
		const clickedIndex = Array.from(stars).indexOf(clickedStar)

		stars.forEach((star, index) => {
			if (index > clickedIndex) {
				star.classList.remove('active')
			} else {
				star.classList.add('active')
			}
		})
	})
}
