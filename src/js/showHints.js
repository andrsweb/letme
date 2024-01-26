document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    showHints('.hero-main_question', '.hero-main_hidden')
})

const showHints = (questions, hint) => {
    const buttons = document.querySelectorAll(questions)

    if (!buttons.length) return

    const outsideClickHandler = e => {  
        buttons.forEach(button => {
            const hiddenTip = button.querySelector(hint)
            const target = e.target
            if (!button.contains(target) && !hiddenTip.contains(target)) {
                hiddenTip.classList.remove('showed')
            }
        })
    }

    document.addEventListener('click', outsideClickHandler)

    buttons.forEach(button => {
        const hiddenTip = button.querySelector(hint)

        button.addEventListener('click', e => {
            if (!hiddenTip.classList.contains('showed')) {
                hiddenTip.classList.add('showed')
            } else {
                hiddenTip.classList.remove('showed')
            }

            e.stopPropagation()
        })
    })
}
