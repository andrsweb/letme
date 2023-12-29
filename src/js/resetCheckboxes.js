document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	resetCheckboxes()
})

const resetCheckboxes = () => {
	const resetButton = document.querySelector('.reset')
    
    if (resetButton) {
        resetButton.addEventListener('click', function () {
            const checkboxes = document.querySelectorAll('.checkbox')
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = false
            })
        })
    }
}