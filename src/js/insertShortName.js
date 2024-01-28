document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    insertLetterToName('.swiper-slide', '.swiper__name', '.swiper__name_short')
})

const insertLetterToName = (selector, name, short) => {
    const slides = document.querySelectorAll(selector)

    if(!slides.length) return

    slides.forEach((slide) => {
      const nameElement = slide.querySelector(name)
      const shortNameElement = slide.querySelector(short)
  
      if (nameElement && shortNameElement) {
        const firstLetter = nameElement.textContent.trim().charAt(0)
  
        if (firstLetter) {
          shortNameElement.textContent = firstLetter
        }
      }
    })
}