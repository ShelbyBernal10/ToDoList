const toDoCont = document.querySelector('.to-do-cont')
const list = document.querySelector('.list')
const addBtn = document.querySelector('.add-btn')
const deleteBtn = document.querySelector('.delete-btn')
const refreshBtn = document.querySelector('.refresh-btn')
const nada = document.querySelector('.nada')

let i = 0


addBtn.addEventListener('click', () => {
    nada.classList.add('nada-hidden')
    i++

    let addTask = prompt('What would you like to add?')
    let newTask = document.createElement('h3')
    newTask.innerHTML = `${i}: ${addTask}`
    list.append(newTask)
})


deleteBtn.addEventListener('click', () => {
    let deleteTask = parseInt(prompt('Which number would you like to delete?'));
    deleteTask--

    list.removeChild(list.childNodes[deleteTask])

})

refreshBtn.addEventListener('click', () => {
    toDoCont.innerText = ''
    i = 0
})

