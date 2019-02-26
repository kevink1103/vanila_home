const body = document.querySelector('body')

const IMG_NUMBER = 5

function paintImage(imgNumber) {
    const image = new Image()
    image.src = `img/${imgNumber + 1}.jpg`
    image.classList.add("bgImage")
    image.addEventListener("load", () => {
        console.log("Image Loaded")
    })
    body.prepend(image)
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER)
    return number
}

function init() {
    const randomNumber = getRandom()
    paintImage(randomNumber)
}

init()