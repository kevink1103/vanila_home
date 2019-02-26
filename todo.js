const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList")

const TODOS_LS = "toDos"

let toDos = []

function deleteToDo(event) {
    const btn = event.target
    const li = btn.parentNode
    toDoList.removeChild(li)
    const cleanToDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id)
    })
    cleanToDos.forEach((toDo) => {
        if (toDo.id > parseInt(li.id)) {
            toDo.id -= 1
        }
    })
    toDos = cleanToDos
    console.log(toDos)
    saveToDos()
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function printToDo(text) {
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    const span = document.createElement("span")
    const newId = toDos.length + 1
    delBtn.innerHTML = "❌"
    delBtn.addEventListener('click', deleteToDo)
    span.innerText = text
    li.appendChild(delBtn)
    li.appendChild(span)
    li.id = newId
    toDoList.appendChild(li)

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj)
    saveToDos()
}

function handleSubmit(event) {
    event.preventDefault()
    const currentValue = toDoInput.value
    printToDo(currentValue)
    toDoInput.value = ""
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach((toDo) => {
            printToDo(toDo.text)
        })
    }
}

function init() {
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmit)
}

init()