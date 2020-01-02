const form = document.querySelector('.quiz-form');
const rightAns = ['B', 'B', 'B', 'B'];
const output = document.querySelector('.output')

form.addEventListener('submit', e => {
    e.preventDefault();
    const asnwers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0;
    asnwers.forEach((ans, index) => {
        if (rightAns[index] == ans) {
            score += 25;
        }
    })
    output.classList.remove('d-none');
    scrollTo(0, 0);

    show = 0;
    const timer = setInterval(() => {
        output.querySelector('span').textContent = `${show}%`;

        if (show == score) {
            clearInterval(timer);
        } else {
            show++;
        }

    }, 10)


})