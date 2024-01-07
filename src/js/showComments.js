document.addEventListener('DOMContentLoaded', () => {
	'use strict'  

	showComments()
})

const showComments = () => {
	const showCommentsBtns = document.querySelectorAll('.show__comments')

	if(!showCommentsBtns.length) return

	showCommentsBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			const innerFeedback = btn.closest('.user__feedback').querySelector('.inner__feedback')
			btn.classList.toggle('clicked')
			innerFeedback.classList.toggle('showed')
		})
	})
}