document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	navHighlighter()
})


const navHighlighter =() => {
	const sections = document.querySelectorAll('section[id]')

	if(!sections.length) return

	let scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if (
			scrollY > sectionTop &&
			scrollY <= sectionTop + sectionHeight
		) {
			document.querySelector(".bookmaker__aside_item a[href*=" + sectionId + "]").classList.add('active')
		} else {
			document.querySelector(".bookmaker__aside_item a[href*=" + sectionId + "]").classList.remove('active')
		}
	})
}

window.addEventListener("scroll", navHighlighter)
