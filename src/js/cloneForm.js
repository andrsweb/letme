document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    cloneForm()
})

const cloneForm = () => {
    const replyButtons = document.querySelectorAll('.reply')

    if (!replyButtons.length) return

    replyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const userFeedback = button.closest('.user__feedback')

            if (!userFeedback.querySelector('.cloned')) {
                const feedbackForm = document.querySelector('.feedback__form')
                const clonedForm = feedbackForm.cloneNode(true)
                clonedForm.classList.add('cloned')
                userFeedback.appendChild(clonedForm)

                const cancelButton = clonedForm.querySelector('.cancel')
                cancelButton.addEventListener('click', () => {
                    clonedForm.remove()
                })
            }
        })
    })
}
