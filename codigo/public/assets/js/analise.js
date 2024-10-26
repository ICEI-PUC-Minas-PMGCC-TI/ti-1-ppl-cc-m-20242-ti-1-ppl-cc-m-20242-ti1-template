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
        const porcentagensRealizadas = parsedData.habitosRealizados.map(habito => (habito / parsedData.habitosTotais) * 100);

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
        const customHabitCard = document.getElementById('customHabitCard');
        const customChartContainer = document.getElementById('customChartContainer');
    
        customHabitCard.addEventListener('click', () => {
            customChartContainer.style.display = customChartContainer.style.display === 'none' || customChartContainer.style.display === '' ? 'block' : 'none';
            if (customChartContainer.style.display === 'block') {
                loadCustomChart();
            }
        });
    
        function loadCustomChart() {
            fetch('data1.json')
                .then(response => response.json())
                .then(parsedData => {
                    const porcentagensRealizadas = parsedData.habitosRealizados.map(habito => habito * 100);
    
                    const ctx = document.getElementById('customLineChart').getContext('2d');
                    new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: parsedData.dias,
                            datasets: [{
                                label: 'Hábito Realizado (%)',
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
        }
    });
