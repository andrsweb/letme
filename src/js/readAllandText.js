document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	checkTextSymbols()
	setupReadAllButtons()
})

const checkTextSymbols = () => {
	const userTexts = document.querySelectorAll('.user__text')

	if (!userTexts.length) return

	userTexts.forEach((text) => {
		if (text.textContent.length > 550) {
			text.classList.add('big')

			const readAllButton = text.parentElement.querySelector('.read__all')
			if (readAllButton) {
				readAllButton.classList.add('visible')
			}
		}
	})
}

const setupReadAllButtons = () => {
	const readAllButtons = document.querySelectorAll('.read__all')

	readAllButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const text = button.parentElement.querySelector('.user__text')
			const buttonText = button.querySelector('span')
			
			if (text.classList.contains('more')) {
				text.classList.remove('more')
				buttonText.textContent = 'Читать далее'
				button.classList.remove('clicked')
			} else {
				text.classList.add('more')
				buttonText.textContent = 'Свернуть'
				button.classList.add('clicked')
			}
		})
	})
}
