document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	updateTextarea()
})

const updateTextarea = () => {
	document.addEventListener('input', e => {
		if (event.target.tagName.toLowerCase() === 'textarea') {
			autoExpand(e.target)
		}
	})

	const autoExpand = (textarea) => {
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}
}


