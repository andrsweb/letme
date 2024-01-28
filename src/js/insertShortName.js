document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    insertLetter('.swiper-slide', '.swiper__name', '.swiper__name_short')
    insertLetter('.user__feedback', '.user__name', '.user__img .letter')
})

const insertLetter = (selector, name, target) => {
    const elements = document.querySelectorAll(selector)

    if (!elements.length) return

    elements.forEach((element) => {
        const nameElement = element.querySelector(name)
        const targetElement = element.querySelector(target)

        if (nameElement && targetElement) {
            const firstLetter = nameElement.textContent.trim().charAt(0)

            if (firstLetter) {
                targetElement.textContent = firstLetter
            }
        }
    })
}
