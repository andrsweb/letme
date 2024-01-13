document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	const menus = document.querySelectorAll('.bookmaker__menu')
	menus.forEach(menu => {
		showBookmakerMenu(menu)
	})
})

const showBookmakerMenu = (menu) => {
	const buttons = menu.querySelectorAll('.bookmaker__menu_start')
	const links = menu.querySelectorAll('.bookmaker__aside_item a')

	if (!buttons.length && !links.length) return

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			if (!menu.classList.contains('opened')) menu.classList.add('opened')
			else menu.classList.remove('opened')
		})
	})

	links.forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('opened')
		})
	})

	window.addEventListener('resize', () => {
		if (window.innerWidth >= 1200) {
			menu.classList.remove('opened')
		}
	})
}
