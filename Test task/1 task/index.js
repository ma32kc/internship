const inputEl = document.querySelector ('input')
const buttonEl = document.querySelector ('button')
const timerEl = document.querySelector ('span')

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
    return async (seconds, ms) => {
        let minutes = 1
        let hours = 1
        while (seconds >= 0 || minutes > 0 || hours > 0) {
            hours = ~ ~ (seconds / 3600)
            minutes = ~ ~ (seconds % 3600 / 60)
            timerEl.innerText =
                `${hours.toString ().length > 1 ? hours : '0' + hours}:${minutes.toString ().length > 1 ? minutes : '0' + minutes}:${(seconds % 60).toString ().length > 1 ? seconds % 60 : '0' + seconds % 60}`
            seconds --
            await delay (ms)
        }
    }
}

let animateTimer = createTimerAnimator ()

inputEl.addEventListener ('input', (e) => {

    // Очистите input так, чтобы в значении
    // оставались только числа

    const regex = /[^0-9]/
    e.target.value = e.target.value.replace (regex, '')
})

buttonEl.addEventListener ('click', () => {
    const seconds = Number (inputEl.value);
    animateTimer (seconds, 1000)
    inputEl.value = ''
})

const delay = (ms) => {
    return new Promise (resolve => setTimeout (resolve, ms))
}

