document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    document.body.addEventListener('click', e => {
        const target = e.target
        const feedbackElement = target.closest('.user__feedback')

        if (feedbackElement) {
            const showCommentsBtn = feedbackElement.querySelector('.show__comments')
            const innerFeedback = feedbackElement.querySelector('.inner__feedback')

            if (showCommentsBtn && innerFeedback) {
                showCommentsBtn.classList.toggle('clicked')
                innerFeedback.classList.toggle('showed')
            }
        }
    })
})
