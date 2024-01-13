document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	const navigations = document.querySelectorAll('.bookmaker__aside_item')
	navigations.forEach(nav => {
		navHighlighter(nav)
	})
})

const navHighlighter = (navigation) => {
	const sections = document.querySelectorAll('section[id]')

	if (!sections.length || !navigation) return

	window.addEventListener("scroll", () => {
		let scrollY = window.pageYOffset

		sections.forEach(current => {
			const sectionHeight = current.offsetHeight
			const sectionTop = current.offsetTop - 50
			const sectionId = current.getAttribute('id')
			const navLink = navigation.querySelector(`a[href="#${sectionId}"]`)

			if (
				scrollY > sectionTop &&
				scrollY <= sectionTop + sectionHeight
			) {
				if (navLink) {
					navLink.classList.add('active')
				}
			} else {
				if (navLink) {
					navLink.classList.remove('active')
				}
			}
		})
	})
}