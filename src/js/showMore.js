document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	toggleCheckboxes()
})

const toggleCheckboxes = () => {
	const showMoreButtons = document.querySelectorAll('.show__more')

	showMoreButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const hiddenCheckboxes = button.previousElementSibling

			if (!hiddenCheckboxes.classList.contains('visible')) {
				recalculateHeight(hiddenCheckboxes)
				button.classList.add('reverse')
				hiddenCheckboxes.classList.add('visible')
			} else {
				hiddenCheckboxes.classList.remove('visible')
				button.classList.remove('reverse')
				hiddenCheckboxes.style.height = '0'
			}

			const buttonTextElement = button.querySelector('.show__more_text')
			const buttonText = hiddenCheckboxes.classList.contains('visible') ? 'Скрыть' : 'Показать все'
			buttonTextElement.textContent = buttonText
		})
	})
}

const recalculateHeight = (element) => {
	const hiddenCheckboxesInner = element.querySelector('.hidden__checkboxes_inner')
	element.style.height = hiddenCheckboxesInner.clientHeight + 'px'
}
