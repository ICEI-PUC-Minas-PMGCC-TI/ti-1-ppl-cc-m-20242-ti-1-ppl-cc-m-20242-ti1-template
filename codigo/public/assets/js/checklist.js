//Selecionar o item que for clicado

var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem .forEach((item) =>
        item.classList.remove('ativo')
)
this.classList.add('ativo')
}

//Espandir o menu

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

// Check List

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-box");

let tasks = []; 
let tempTasks = []; 

function loadTasks() {
    fetch('../db/db.json')
        .then(response => response.json())
        .then(data => {
            tasks = data.habitosCheckList;
            renderTasks();
        })
        .catch(error => {
            console.error("Erro ao carregar as tarefas:", error);
            renderTasks();
        });
}

function renderTasks() {
    listContainer.innerHTML = '';

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task.name;
        li.dataset.id = task.id;
        li.dataset.permanent = true;

        if (task.done) {
            li.classList.add("checked");
        }

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    });

    tempTasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task.name;
        li.dataset.id = task.id;
        li.dataset.permanent = false;

        if (task.done) {
            li.classList.add("checked");
        }

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    });
}

function addTask() {
    if (inputBox.value === '') {
        alert("Escreva algo primeiro!");
        return;
    }

    const newTask = {
        id: tempTasks.length ? tempTasks[tempTasks.length - 1].id + 1 : 1,
        name: inputBox.value,
        done: false
    };

    tempTasks.push(newTask);
    renderTasks();
    inputBox.value = '';

    saveTempTasks();
}

function saveTempTasks() {
    localStorage.setItem('tempTasks', JSON.stringify(tempTasks));
    console.log("Tarefas temporárias salvas no LocalStorage.");
}

function updateTempTask(task) {
    const index = tempTasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
        tempTasks[index].done = task.done;
        saveTempTasks();
        console.log("Tarefa temporária atualizada no LocalStorage.");
    }
}

function deleteTempTask(id) {
    tempTasks = tempTasks.filter(task => task.id !== parseInt(id));
    saveTempTasks();
    renderTasks();
}

function deletePermanentTask(id) {
    tasks = tasks.filter(task => task.id !== parseInt(id));
    savePermanentTasks(); 
    renderTasks();
}

function savePermanentTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log("Tarefas do dia salvas no LocalStorage.");
}

listContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    const isPermanent = e.target.closest("li").dataset.permanent === 'true';

    if (e.target.tagName === "SPAN") {
        const taskId = e.target.closest("li").dataset.id;

        if (isPermanent) {
            alert("Não é possível excluir tarefas do dia!");
        } else {
            deleteTempTask(taskId);
        }
    } 
    else if (e.target.tagName === "LI") {
        if (isPermanent) {
            const task = tasks.find(task => task.id == id); 
            if (task) {
                task.done = !task.done;
                savePermanentTasks();
                renderTasks();
            }
        } else {
            const tempTask = tempTasks.find(task => task.id == id);
            if (tempTask) {
                tempTask.done = !tempTask.done;
                updateTempTask(tempTask);
                renderTasks();
            }
        }
    }
}, false);

loadTasks();
