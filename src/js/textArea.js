document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	updateTextarea()
})

const updateTextarea = () => {
	document.addEventListener('input', e => {
		const target = e.target
		if (target.tagName.toLowerCase() === 'textarea') {
			autoExpand(target)
		}
	})

	const autoExpand = (textarea) => {
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}
}


