import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toggleBurgerMenu()
} )

const toggleBurgerMenu = () => {
	const burgerButton       = document.querySelector('.burger__button')
	const header             = document.querySelector('.header')
	setTargetElement(document.querySelector('#menu-lock'))

	if(!header && !burgerButton) return

	burgerButton.addEventListener('click', () => {
		if (!header.classList.contains('opened')) {
			header.classList.add('opened')
			burgerButton.classList.add('opened')
			header.classList.remove('closed')
			disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
		} else {
			header.classList.add('closed')
			setTimeout(() => header.classList.remove('opened'), 350);
			burgerButton.classList.remove('opened')
			setTimeout(() => header.classList.remove('closed'), 350);
			enableBodyScroll(getTargetElement())
		}
	})

	window.addEventListener('resize', () => {
		if(window.innerWidth >= 1200) {
			if(header.classList.contains('opened'))
			header.classList.remove('opened')
			burgerButton.classList.remove('opened')
			enableBodyScroll(getTargetElement())
		}
	})
}