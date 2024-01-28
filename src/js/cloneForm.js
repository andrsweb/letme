document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    cloneForm()
})

const cloneForm = () => {
    document.body.addEventListener('click', e => {
        const target = e.target

        if (target.classList.contains('reply')) {
            const userFeedback = target.closest('.user__feedback')

            if (userFeedback) {
                const clonedForm = userFeedback.querySelector('.cloned')

                if (!clonedForm) {
                    const feedbackForm = document.querySelector('.feedback__form')

                    if (feedbackForm) {
                        const clonedForm = feedbackForm.cloneNode(true)
                        clonedForm.classList.add('cloned')
                        userFeedback.appendChild(clonedForm)

                        const cancelButton = clonedForm.querySelector('.cancel')
                        cancelButton.addEventListener('click', () => {
                            clonedForm.remove()
                        })
                    }
                }
            }
        }
    })
}
