import { reCalculateDropdownHeight } from "./common/global"

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	toogleDropdown('.dropdown', '.dropdown__open', '.dropdown__open', '.dropdown__inner')
})

const toogleDropdown = (selector, open, innerOpen, inner) => {                                    //Function for smooth dropdown opening
	const dropdowns = document.querySelectorAll(selector)

	if (!dropdowns.length) return

	dropdowns.forEach(dropdown => {
		if (dropdown.classList.contains('opened'))
			reCalculateDropdownHeight(dropdown, innerOpen, inner)
	})

	dropdowns.forEach(dropdown => {
		dropdown.addEventListener('click', () => {
			const dropdownOpen = dropdown.querySelector(open)

			if (!dropdownOpen) return

			if (!dropdown.classList.contains('opened')) {
				dropdown.classList.add('opened')
				reCalculateDropdownHeight(dropdown, innerOpen, inner) //Height conversion, taking the height of the inner as a value
			}
			else {
				dropdown.classList.remove('opened')
				dropdownOpen.style.height = '0'
			}
		})
	})
}

window.addEventListener('resize', () => {
	const dropdowns = document.querySelectorAll('.dropdown.opened')

	if (!dropdowns.length) return

	dropdowns.forEach(dropdown => reCalculateDropdownHeight(dropdown))
})