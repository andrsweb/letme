document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	clickedThumbs()
})

const clickedThumbs = () => {
	const toggleThumbs = (thumbsElem) => {
		const thumbsValueElem = thumbsElem.querySelector('.thumbs_value')
		const isClicked = thumbsElem.classList.toggle('clicked')
		const currentValue = parseInt(thumbsValueElem.innerText)

		thumbsValueElem.innerText = isClicked ? currentValue + 1 : currentValue - 1

		const siblingThumbs = thumbsElem.classList.contains('thumbs__up')
			? thumbsElem.nextElementSibling
			: thumbsElem.previousElementSibling

		if (siblingThumbs && siblingThumbs.classList.contains('clicked')) {
			siblingThumbs.classList.remove('clicked')
			const siblingValueElem = siblingThumbs.querySelector('.thumbs_value')
			siblingValueElem.innerText = parseInt(siblingValueElem.innerText) - 1
		}
	}

	const thumbsBtns = document.querySelectorAll('.thumbs__up, .thumbs__down')

	thumbsBtns.forEach((btn) => {
		btn.addEventListener('click', () => toggleThumbs(btn))
	})
}