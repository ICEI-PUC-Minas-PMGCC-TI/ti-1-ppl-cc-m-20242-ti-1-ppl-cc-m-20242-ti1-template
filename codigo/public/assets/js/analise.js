// Selecionar o item que for clicado
var menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

// Expandir o menu
menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
);

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir');
});

// Gráfico geral
fetch('db.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ao acessar o JSON: ${response.statusText}`);
        }
        return response.json();
    })
    .then(parsedData => {
        const graficoGeral = parsedData.graficoGeral?.[0];

        if (graficoGeral) {
            const { habitosRealizadosGeral, habitosTotais, dias } = graficoGeral;

            if (habitosRealizadosGeral && habitosTotais && dias) {
                console.log("Dados do gráfico geral carregados:", graficoGeral);

                const porcentagensRealizadas = habitosRealizadosGeral.map(habito =>
                    (habito / habitosTotais) * 100
                );

                const ctx = document.getElementById('lineChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: dias,
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
            } else {
                console.error("Campos faltando em 'graficoGeral'. Verifique o JSON.");
            }
        } else {
            console.error("'graficoGeral' não encontrado. Verifique o caminho no JSON.");
        }
    })
    .catch(error => {
        console.error("Erro ao carregar os dados do gráfico geral:", error);
    });

// Gráfico específico
document.addEventListener("DOMContentLoaded", () => {
    const habitsContainer = document.getElementById("habitsContainer");

    fetch('db.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao acessar o JSON: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.graficoExpecifico) {
                const habits = data.graficoExpecifico;
                habits.forEach((habit, index) => {
                    createHabitCard(habit, index);
                });
            } else {
                console.error("Dados do gráfico específico não encontrados no JSON.");
            }
        })
        .catch(error => {
            console.error("Erro ao carregar os hábitos específicos:", error);
        });

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
