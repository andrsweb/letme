import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from './common/global'


document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	showPopup('.popup-wrapper.filter-modal', '.call-filter1', '#wrapper-lock')
	showPopup('.popup-wrapper.filter-modal2', '.call-filter2', '#wrapper-lock')
	showPopup('.popup-wrapper.filter-modal3', '.call-filter3', '#wrapper-lock')
} )

const showPopup = ( selector, btn, lock) => {
	const popupWrapper    = document.querySelector( selector )
	const popButtons       = document.querySelectorAll( btn )
	const closeButtons     = document.querySelectorAll('.cancel')
	setTargetElement( document.querySelector( lock ) )

	if( ! popupWrapper ) return
	popButtons.forEach( button => {
		button.addEventListener('click', () => {
			if(!popupWrapper.classList.contains('showed')) {
				popupWrapper.classList.add('showed')
				popupWrapper.classList.remove('closed')
				disableBodyScroll(getTargetElement(), { reserveScrollBarGap: true })
			}
		})
	})

	closeButtons.forEach( closeBtn => {
		closeBtn.addEventListener( 'click', () => {
				popupWrapper.classList.add('closed')
				setTimeout(() => popupWrapper.classList.remove('showed'), 350);
				setTimeout(() => popupWrapper.classList.remove('closed'), 350);
				enableBodyScroll(getTargetElement())
		} )
	})

	window.addEventListener('resize', () => {
		if(window.innerWidth >= 1200) {
			popupWrapper.classList.add('closed')
			setTimeout(() => popupWrapper.classList.remove('showed'), 350);
			setTimeout(() => popupWrapper.classList.remove('closed'), 350);
			enableBodyScroll(getTargetElement())
		}
	})
}