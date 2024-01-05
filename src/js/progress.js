document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	changeProgress()
})

const changeProgress = () => {
	const progressItems = document.querySelectorAll('.users__rate_item')

	if (!progressItems.length) return

	if (progressItems.length > 0) {
		let totalProgress = 0
		
		progressItems.forEach(item => {
			totalProgress += parseInt(item.querySelector('.progress__num').textContent)
		})

		progressItems.forEach(item => {
			const progressBarInner = item.querySelector('.progress__bar_inner')
			const progressNum = parseInt(item.querySelector('.progress__num').textContent)
			const widthPercentage = (progressNum / totalProgress) * 100
			progressBarInner.style.width = `${widthPercentage}%`
		})
	}
}
