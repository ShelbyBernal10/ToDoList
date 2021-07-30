const list = document.querySelector('.list')
const addBtn = document.querySelector('.add-btn')
const deleteBtn = document.querySelector('.delete-btn')
const refreshBtn = document.querySelector('.refresh-btn')
const nada = document.querySelector('.nada')

let i = 0
let tasks = [];

function pushTask() {
    let addTask = prompt('What would you like to add?')
    tasks.push(`${i}. ${addTask}`)
    list.innerHTML = tasks.map(task => `<li>${task}</li>`).join('');
}

function fixLiS() {
    const liS = document.querySelectorAll('li')
    liS.forEach((li) => {
        li.style.listStyleType = 'none'
        li.style.fontWeight = '700'
        li.style.fontSize = '20px'
    })
}

addBtn.addEventListener('click', () => {
    nada.classList.add('nada-hidden')

    if (tasks.length > 1) {
        i = tasks.length
    } else if (tasks.length === 0) {
        i = 0
    }
    i++

    pushTask()
    fixLiS()
})

refreshBtn.addEventListener('click', () => {
    tasks.splice(0, tasks.length)
    list.innerHTML = ''
    i = 0
})

deleteBtn.addEventListener('click', () => {
    let deleteTask = parseInt(prompt('Which number would you like to delete?'));
    deleteTask--
    tasks.splice(deleteTask, 1)

    for (let i = 0; i < tasks.length; i++) {
        tasks[i] = tasks[i].replace(`${tasks[i][0]}`, `${i + 1}`)
    }

    list.innerHTML = tasks.map(task => `<li>${task}</li>`).join('');

    fixLiS()
})



// let newTask = document.createElement('h3')
    // newTask.innerHTML = `${i}: ${addTask}`
    // list.append(newTask)
    // newTask.classList.add('.child-node')


// list.removeChild(list.childNodes[deleteTask])
