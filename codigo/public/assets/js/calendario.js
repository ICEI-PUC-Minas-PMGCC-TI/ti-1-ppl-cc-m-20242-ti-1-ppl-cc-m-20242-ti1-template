
async function loadLocalData() {
  try {
    const response = await fetch('./db.json'); // Caminho relativo ao index.html
    const data = await response.json();

    // Separar os dados
    const usuarios = data.usuarios;
    const habitos = data.habitos;
    const historicoHabito = data.historico_habito;

    // Exemplo de uso dos dados
    console.log("Usuários:", usuarios);
    console.log("Hábitos:", habitos);
    console.log("Histórico de Hábitos:", historicoHabito);

    // Chamar a função que renderiza o calendário aqui
    renderizarCalendario(historicoHabito);
  } catch (error) {
    console.error("Erro ao carregar o arquivo JSON:", error);
  }
}

// Chamada para carregar os dados
loadLocalData();

// Função de exemplo para renderizar o calendário
function renderizarCalendario(historicoHabito) {
  // Exemplo: exibir o histórico no console
  historicoHabito.forEach((item) => {
    console.log(
      `Data: ${item.data}, Hábito: ${item.idHabito}, Nota: ${item.nota}`
    );
  });
}
// Dados JSON simulados
const db = {
  "usuarios": [
      { "id": 1, "nome": "Tiago Morais Costa" }
  ],
  "habitos": [
      { "id": 15, "nome": "Exercício", "status": "completo" }
  ],
  "historico_habito": [
      {
          "id": 1,
          "data": "2024-11-01",
          "idUsuario": 1,
          "idHabito": 15,
          "nota": "Correu 5 km",
          "horaConcluida": "08:00"
      }
  ]
};

// Elementos do DOM
const calendarGrid = document.getElementById("calendar-grid");
const currentMonthDisplay = document.getElementById("current-month");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

let currentDate = new Date();

// Função para obter o nome do mês e ano
function getMonthYearString(date) {
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Função para renderizar o calendário
function renderCalendar() {
  console.log("Renderizando calendário...");
  calendarGrid.innerHTML = ""; // Limpar o calendário

  // Atualizar o mês exibido
  currentMonthDisplay.textContent = getMonthYearString(currentDate);

  // Dias da semana
  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  daysOfWeek.forEach(day => {
      const header = document.createElement("div");
      header.classList.add("calendar-header-day");
      header.textContent = day;
      calendarGrid.appendChild(header);
  });

  // Dias vazios antes do início do mês
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  for (let i = 0; i < firstDayIndex; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.classList.add("calendar-day", "empty");
      calendarGrid.appendChild(emptyDay);
  }

  // Dias do mês
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("calendar-day");
      dayElement.textContent = day;

      // Verificar se há histórico para o dia
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const habitHistory = db.historico_habito.find(entry => entry.data === dateStr);

      if (habitHistory) {
          dayElement.classList.add("completed");
          dayElement.title = `${habitHistory.nota} às ${habitHistory.horaConcluida}`;
      }

      calendarGrid.appendChild(dayElement);
  }

  // Preencher dias vazios no final
  const totalCells = firstDayIndex + daysInMonth;
  const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let i = 0; i < remainingCells; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.classList.add("calendar-day", "empty");
      calendarGrid.appendChild(emptyDay);
  }
}

// Eventos de navegação
prevMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Inicializar o calendário
document.addEventListener("DOMContentLoaded", () => {
  renderCalendar();
});




