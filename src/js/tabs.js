document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    changeTab('.payment__button', '.payment__content')
    findContainerHeight()
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

const findContainerHeight = () => {
    const arrowsList = document.querySelectorAll('.payment__arrow')
    const buttonsList = document.querySelectorAll('.payment__buttons')
    const hiddenButtonsList = document.querySelectorAll('.payment__hidden')

    arrowsList.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            const hiddenButtons = hiddenButtonsList[index]
            const buttons = buttonsList[index]

            if (!hiddenButtons.classList.contains('showed')) {
                hiddenButtons.style.height = `${buttons.getBoundingClientRect().height}px`
                hiddenButtons.classList.add('showed')
                arrow.classList.add('clicked')
            } else {
                hiddenButtons.classList.remove('showed')
                hiddenButtons.style.height = '0'
                arrow.classList.remove('clicked')
            }
        })
    })
}
