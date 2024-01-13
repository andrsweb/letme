document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	fillStars()
})

const fillStars = () => {
	const stars = document.querySelectorAll('.main__stars svg')

	const handleStarClick = (index) => {
		for (let i = stars.length - 1; i >= 0; i--) {
			const star = stars[i]
			if (i >= index) {
				star.classList.add('active')
			} else {
				star.classList.remove('active')
			}
		}
	}

	stars.forEach((star, index) => {
		star.addEventListener('click', () => handleStarClick(index))
	})
}
