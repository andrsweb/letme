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

		if (siblingThumbs?.classList.contains('clicked')) {
			siblingThumbs.classList.remove('clicked')
			const siblingValueElem = siblingThumbs.querySelector('.thumbs_value')
			siblingValueElem.innerText = parseInt(siblingValueElem.innerText) - 1
		}
	}

	document.body.addEventListener('click', e => {
		const target = e.target
		const thumbsUp = target.closest('.thumbs__up')
		const thumbsDown = target.closest('.thumbs__down')

		if (thumbsUp || thumbsDown) {
			toggleThumbs(thumbsUp || thumbsDown)
		}
	})
}
