const title = document.querySelector('#title')

const BASE_COLOR = 'rgb(52, 73, 94)'
const OTHER_COLOR = '#ffffff'

function handleClick() {
    const currentColor = title.style.color

    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR
    }
    else {
        title.style.color = BASE_COLOR
    }
}

function handleOffLine() {
    console.log('Offline!')
}

function handleOnLine() {
    console.log('Online!')
}

function init() {
    title.style.color = BASE_COLOR
    title.addEventListener('click', handleClick)
    window.addEventListener('offline', handleOffLine)
    window.addEventListener('online', handleOnLine)
}

init()
