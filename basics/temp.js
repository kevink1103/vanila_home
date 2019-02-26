const kevin = {
    name: "Kevin",
    age: 25,
    gender: "Male",
    nationality: "South Korea"
}

function greeting(name, age) {
    return `Hello ${name} you are ${age} years old`
}

const calculator =  {
    plus: function(a, b) {
        return a + b
    }
}

console.log(kevin)

const greetKevin = greeting('Kevin', 25)
console.log(greetKevin)
const result = calculator.plus(5, 10)
console.log(result)

const title = document.querySelector("#title")

console.log(title)

title.innerHTML = 'HIIIII'
title.style.color = 'red'
document.title = 'STEVE'

console.dir(document)

const title = document.querySelector("#title")

function handleClick(event) {
    title.style.color = 'blue'
}

title.addEventListener("click", handleClick)
