document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    sortFunc()
})

const sortFunc = () => {
    const sortBtn = document.querySelector('.sort__button')
    const hiddenSort = document.querySelector('.sort__hidden_items')

    if (!hiddenSort) return

    sortBtn.addEventListener('click', () => {
        if (!sortBtn) return

        hiddenSort.classList.toggle('showed')
    })

    document.addEventListener('click', e => {
        const target = e.target

        if (!target.closest('.sort__button_wrapper') && hiddenSort.classList.contains('showed')) {
            hiddenSort.classList.remove('showed')
        }
    })

    const hiddenItems = document.querySelectorAll('.sort__hidden_item')

    hiddenItems.forEach((item) => {
        item.addEventListener('click', () => {
            hiddenItems.forEach((otherItem) => {
                otherItem.classList.remove('active')
            })

            item.classList.add('active')
            hiddenSort.classList.remove('showed')
        })
    })
}
