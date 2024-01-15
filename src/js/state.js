document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	setTextState()
})

const setTextState = () => {
	const textareaBlocks = document.querySelectorAll('.main__feedback')

	if (!textareaBlocks.length) return

	textareaBlocks.forEach((textareaBlock) => {
		const textarea = textareaBlock.querySelector('textarea[name="textarea"]')
		const textareaState = textareaBlock.querySelector('.textarea__state')

        if(!textareaState) return

		const textareaStateText = textareaBlock.querySelector('.textarea__state_text')
		const submitButton = textareaBlock.querySelector('.button')

		if (textarea && submitButton) {
			textarea.addEventListener('input', () => {
				updateTextareaState(textarea, textareaState, textareaStateText)
				toggleSubmitButton(textarea, submitButton)
			})

			updateTextareaState(textarea, textareaState, textareaStateText)
			toggleSubmitButton(textarea, submitButton)
		}
	})
}

const updateTextareaState = (textarea, textareaState, textareaStateText) => {
	const textLength = textarea.value.length

	if (textLength === 0) {
		textareaState.classList.remove('few', 'normal', 'good')
		textareaStateText.textContent = ''
	} else if (textLength < 30) {
		textareaState.classList.add('few')
		textareaState.classList.remove('normal', 'good')
		textareaStateText.textContent = 'Слишком мало'
	} else if (textLength >= 30 && textLength < 60) {
		textareaState.classList.remove('few', 'good')
		textareaState.classList.add('normal')
		textareaStateText.textContent = 'Уже лучше'
	} else if (textLength >= 60) {
		textareaState.classList.remove('few', 'normal')
		textareaState.classList.add('good')
		textareaStateText.textContent = 'Неплохо'
	}
}

const toggleSubmitButton = (textarea, submitButton) => {
	submitButton.disabled = textarea.value.length < 60
}
