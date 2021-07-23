const toDoCont = document.querySelector('.to-do-cont')
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
    toDoCont.append(newTask)
})


deleteBtn.addEventListener('click', () => {
    let deleteTask = parseInt(prompt('Which number would you like to delete?'));
    deleteTask--

    toDoCont.removeChild(toDoCont.childNodes[deleteTask])

})

refreshBtn.addEventListener('click', () => {
    toDoCont.innerText = ''
    i = 0
})

