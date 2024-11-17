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

//Gráfico

fetch('data.json')
    .then(response => response.json())
    .then(parsedData => {
        const porcentagensRealizadas = parsedData.habitosRealizadosGeral.map(habito => (habito / parsedData.habitosTotais) * 100);

        const ctx = document.getElementById('lineChart').getContext('2d');
        const lineChart = new Chart(ctx, {
            type: 'line', 
            data: {
                labels: parsedData.dias, 
                datasets: [{
                    label: 'Porcentagem de Hábitos Realizados',
                    data: porcentagensRealizadas,
                    fill: false,
                    borderColor: 'rgba(25, 196, 99, 1)', 
                    tension: 0.1 
                }]
            },
            options: {
                responsive: true, 
                maintainAspectRatio: false, 
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 100, 
                        title: {
                            display: true,
                            text: 'Porcentagem (%)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Dias da Semana'
                        }
                    }
                }
            }
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));


//Gráfico expecifico por hábito

document.addEventListener("DOMContentLoaded", () => {
    const habitsContainer = document.getElementById("habitsContainer");

    fetch('data1.json')
        .then(response => response.json())
        .then(habits => {
            habits.forEach((habit, index) => {
                createHabitCard(habit, index);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));

    function createHabitCard(habit, index) {

        const habitCard = document.createElement('div');
        habitCard.classList.add('custom-habit-card');
        habitCard.innerHTML = `
            <h3>${habit.nomeHábito}</h3>
            <p>Frequência: ${habit.frequencia} vezes por semana</p>
        `;

        const chartContainer = document.createElement('div');
        chartContainer.classList.add('custom-chart-container');
        chartContainer.style.display = 'none'; 
        chartContainer.innerHTML = `<canvas id="customLineChart-${index}"></canvas>`;

        habitCard.addEventListener('click', () => {
            if (chartContainer.style.display === 'none') {
                chartContainer.style.display = 'block';
                loadCustomChart(habit, index);
            } else {
                chartContainer.style.display = 'none';
            }
        });

        habitsContainer.appendChild(habitCard);
        habitsContainer.appendChild(chartContainer);
    }

    function loadCustomChart(habit, index) {
        const porcentagensRealizadas = habit.habitosRealizados.map(h => h * 100);

        const ctx = document.getElementById(`customLineChart-${index}`).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: habit.dias,
                datasets: [{
                    label: 'Hábito Realizado (%)',
                    data: porcentagensRealizadas,
                    fill: false,
                    borderColor: 'rgba(25, 196, 99, 1)',
                    tension: 0.1,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMax: 100,
                        title: {
                            display: true,
                            text: 'Porcentagem (%)',
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Dias da Semana',
                        }
                    }
                }
            }
        });
    }
});

//Check List

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-box");

let tasks = [];

function loadTasks() {
    fetch('tasks.json')
        .then(response => response.json())
        .then(data => {
            tasks = data;
            renderTasks();
        })
        .catch(error => console.error('Erro ao carregar tarefas:', error));
}

function renderTasks() {
    listContainer.innerHTML = ''; 
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = task.name;
        li.dataset.id = task.id;

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
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        name: inputBox.value,
        done: false
    };

    tasks.push(newTask);
    renderTasks();
    inputBox.value = ''; 
    saveTasks();
}

listContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (e.target.tagName === "LI") {
        const task = tasks.find(task => task.id == id);
        task.done = !task.done;
    } else if (e.target.tagName === "SPAN") {
        const index = tasks.findIndex(task => task.id == id);
        tasks.splice(index, 1); 
    }

    renderTasks();
    saveTasks();
}, false);


function saveTasks() {
    fetch('save-tasks-endpoint', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tasks)
    })
    .then(response => {
        if (response.ok) {
            console.log('Tarefas salvas com sucesso.');
        } else {
            console.error('Erro ao salvar tarefas.');
        }
    })
    .catch(error => console.error('Erro ao enviar tarefas:', error));
}
loadTasks();
