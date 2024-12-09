let habitCount = 0;

document.getElementById('habitForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.getElementById('habitName').value;
    const frequencia = document.getElementById('frequency').value;
    const motivo = document.getElementById('motivo').value;

    if (nome && frequencia && motivo) {
        habitCount++;

        const habitList = document.getElementById('habitList');
        const habitItem = document.createElement('li');

        habitItem.id = `habit-${habitCount}`;
        habitItem.innerHTML = `
            <h2>Hábitos Criados</h2>   
            <div class="container2">
                <div>
                    <strong>ID:</strong> ${habitCount} <br>
                    <strong>Nome:</strong> ${nome} <br>
                    <strong>Frequência:</strong> ${frequencia} <br>
                    <strong>Motivo:</strong> ${motivo}
                </div>
                <button onclick="concluirHabit(this)">Concluído</button>
            </div>
        `;

        habitList.appendChild(habitItem);

        // Mostrando mensagem de sucesso
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('hidden');

        // Limpar os campos após adicionar o hábito
        document.getElementById('habitForm').reset();

        // Escondendo a mensagem de sucesso após alguns segundos
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);

    } else {
        alert('Preencha todos os campos antes de adicionar um hábito.');
    }
});

function concluirHabit(button) {
    const habitItem = button.parentElement;
    habitItem.style.textDecoration = "line-through";
    button.disabled = true;
}
