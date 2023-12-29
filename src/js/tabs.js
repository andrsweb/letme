document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	changeTab('.payment__button', '.payment__content')
	initShowHidden()
})

const changeTab = (button, contents) => {
	const tabsHeadersList = document.querySelectorAll(button)
	const tabsContentsList = document.querySelectorAll(contents)

	if (!tabsHeadersList.length || !tabsContentsList.length) return

	tabsHeadersList.forEach((tab, i, tabs) => {
		tab.addEventListener('click', () => {
			const id = tab.dataset.id

			if (!id || tab.classList.contains('active')) return

			tabs.forEach(tabsItem => tabsItem.classList.remove('active'))
			tab.classList.add('active')

			tabsContentsList.forEach(content => content.classList.remove('active'))
			document.querySelectorAll(`${contents}[data-id="${id}"]`).forEach(item => item.classList.add('active'))
		})
	})
}
const initShowHidden = () => {
	const showArrows = document.querySelectorAll('.payment__arrow')

	showArrows.forEach(showArrow => {
		showArrow.addEventListener('click', () => {
			showArrow.classList.toggle('clicked')
			const buttonsBlock = showArrow.closest('.payment__tabs').querySelector('.payment__buttons')
			const hiddenButtons = buttonsBlock.querySelectorAll('.payment__button.hidden')

			hiddenButtons.forEach(button => {
				button.classList.toggle('showed')
			})
		})
	})
}


