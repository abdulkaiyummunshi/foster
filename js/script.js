document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq_question');

    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            const isAlreadyActive = this.classList.contains('active');

            faqQuestions.forEach(function (q) {
                q.classList.remove('active');
                const answer = q.nextElementSibling;
                if (answer && answer.classList.contains('faq_answer')) {
                    answer.classList.remove('expanded');
                }
            });

            if (!isAlreadyActive) {
                this.classList.add('active');
                const answer = this.nextElementSibling;
                if (answer && answer.classList.contains('faq_answer')) {
                    answer.classList.add('expanded');
                }
            }
        });
    });
});