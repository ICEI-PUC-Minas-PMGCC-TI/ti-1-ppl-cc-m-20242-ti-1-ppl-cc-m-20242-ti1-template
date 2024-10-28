let habitData = {
    "habitos": []
};

document.getElementById('habitForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('habitName').value;
    const frequencia = document.getElementById('frequency').value;
    const motivo = document.getElementById('motivo').value;

    if (nome && frequencia && motivo) {
        const newHabit = {
            "id": getNextId(),
            "nome": nome,
            "frequencia": frequencia,
            "motivo": motivo,
            "data_inicio": new Date().toISOString().slice(0, 10),
            "tempo_total": "00:00:00",
            "historico": []
        };

        habitData.habitos.push(newHabit);

        addHabitToList(newHabit);
        displaySuccessMessage();
        document.getElementById('habitForm').reset();
    } else {
        alert('Preencha todos os campos antes de adicionar um hábito.');
    }
});

function getNextId() {
    const ids = habitData.habitos.map(habit => parseInt(habit.id) || 0);
    return (ids.length > 0 ? Math.max(...ids) : 0) + 1;
}

function addHabitToList(habit) {
    const habitList = document.getElementById('habitList');
    const habitItem = document.createElement('li');
    habitItem.id = `habit-${habit.id}`;

    habitItem.innerHTML = `
        <div class="habit-info">
            <strong>ID:</strong> ${habit.id}<br>
            <strong>Nome:</strong> ${habit.nome}<br>
            <strong>Frequência:</strong> ${habit.frequencia}<br>
            <strong>Motivo:</strong> ${habit.motivo}
        </div>
        <div class="habit-controls">
            <img src="img/habit-icon.png" id="icon-${habit.id}" class="habit-icon" style="width: 40px; height: 40px;">
            <span id="timer-${habit.id}" class="timer">00:00:00</span>
            <button onclick="concluirHabit(this, ${habit.id})">Concluído</button>
            <button onclick="resetHabitColor(${habit.id})">Falha</button>
            <button onclick="interactHabit(${habit.id})">Interagir</button>
        </div>
    `;

    habitList.appendChild(habitItem);
    startTimer(habit.id);
    monitorIconColor(habit.id);
}

function displaySuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
    setTimeout(() => successMessage.classList.add('hidden'), 3000);
}

const timers = {};
const interactTimers = {};

function startTimer(habitId) {
    let seconds = 0;
    timers[habitId] = setInterval(() => {
        seconds++;
        document.getElementById(`timer-${habitId}`).textContent = formatTime(seconds);
        changeIconColor(habitId, seconds);
    }, 1000);
}

function formatTime(totalSeconds) {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function changeIconColor(habitId, seconds) {
    const days = Math.floor(seconds / 86400);
    const icon = document.getElementById(`icon-${habitId}`);

    if (days >= 100) {
        icon.style.backgroundColor = "red";
    } else if (days >= 60) {
        icon.style.backgroundColor = "orange";
    } else if (days >= 30) {
        icon.style.backgroundColor = "yellow";
    }
}

function resetHabitColor(habitId) {
    const icon = document.getElementById(`icon-${habitId}`);
    icon.style.backgroundColor = "yellow";
}

function interactHabit(habitId) {
    clearTimeout(interactTimers[habitId]);

    const icon = document.getElementById(`icon-${habitId}`);
    icon.style.filter = "none";

    interactTimers[habitId] = setTimeout(() => {
        icon.style.filter = "grayscale(100%)";
        iconDisappear(habitId, 24 * 60 * 60 * 1000);
    }, 24 * 60 * 60 * 1000);
}

function iconDisappear(habitId, timeout) {
    setTimeout(() => {
        const icon = document.getElementById(`icon-${habitId}`);
        if (icon.style.filter === "grayscale(100%)") {
            icon.style.display = "none";
        }
    }, timeout);
}

function concluirHabit(button, habitId) {
    clearInterval(timers[habitId]);
    document.getElementById(`timer-${habitId}`).textContent = '00:00:00';
    button.closest('li').style.textDecoration = "line-through";
    button.disabled = true;
}
