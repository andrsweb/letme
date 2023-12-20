document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	toggleCheckboxes()
})

const toggleCheckboxes = () => {
	const showMoreButtons = document.querySelectorAll('.show__more');

	showMoreButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const hiddenCheckboxes = button.previousElementSibling;
			hiddenCheckboxes.classList.toggle('visible');

			const buttonText = hiddenCheckboxes.classList.contains('visible') ? 'Скрыть' : 'Показать все';
			button.textContent = buttonText;
		});
	});

}
