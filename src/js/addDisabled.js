document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	addOrRemoveDisabled()
})

const addOrRemoveDisabled = () => {
	const checkboxWrappers = document.querySelectorAll('.checkbox__wrapper')

	checkboxWrappers.forEach((checkboxWrapper) => {
		const labelValue = checkboxWrapper.querySelector('.label__value')

		if (labelValue && labelValue.textContent.trim() !== "") {
			const checkbox = checkboxWrapper.querySelector('.checkbox')

			if (parseInt(labelValue.textContent, 10) === 0) {
				checkbox.checked = false
				checkbox.disabled = true
				checkboxWrapper.classList.add('disabled')
			} else {
				checkbox.disabled = false
				checkboxWrapper.classList.remove('disabled')
			}
		}
	})
}

