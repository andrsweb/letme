document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    showHiddenMenu()
})

const showHiddenMenu = () => {
    const buttons = document.querySelectorAll('.header__item svg')

    if(!buttons.length) return

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const headerItem = button.closest('.header__item')

            if (headerItem) {
                headerItem.classList.toggle('opened')
            }
        })
    })
}
