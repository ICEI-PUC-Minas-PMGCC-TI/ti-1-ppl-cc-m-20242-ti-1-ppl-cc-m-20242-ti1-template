// Elementos da interface
const userInfo = document.getElementById('user-info');
const calendarBody = document.getElementById('calendar-body');
const monthTitle = document.getElementById('month-title');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

// Data atual
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

// Função para obter os dados do usuário
async function getUserInfo(userId) {
  try {
    const response = await fetch(`http://localhost:5000/usuarios/${userId}`);
    const user = await response.json();
    userInfo.textContent = `ID do Usuário: ${user.id} - ${user.nome}`;
  } catch (error) {
    console.error('Erro ao carregar dados do usuário', error);
  }
}

// Função para obter os hábitos
async function getHabits() {
  try {
    const response = await fetch("http://localhost:5000/habitos");
    const habits = await response.json();
    return habits;
  } catch (error) {
    console.error('Erro ao carregar hábitos', error);
  }
}

// Função para obter o histórico de hábitos
async function getHabitHistory() {
  try {
    const response = await fetch("http://localhost:5000/historico_habito");
    const history = await response.json();
    return history;
  } catch (error) {
    console.error('Erro ao carregar histórico de hábitos', error);
  }
}

// Função para renderizar o calendário
function renderCalendar(year, month, habits, history) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  calendarBody.innerHTML = ''; // Limpa o conteúdo do calendário

  // Define o primeiro dia do mês
  const firstDay = new Date(year, month, 1).getDay();
  let dayCount = 1;

  // Preenche os dias do calendário
  for (let i = 0; i < 6; i++) { // Máximo de 6 linhas para o calendário
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      
      // Adiciona os dias do mês
      if ((i === 0 && j >= firstDay) || (i > 0 && dayCount <= daysInMonth)) {
        cell.textContent = dayCount;
        cell.classList.add('calendar-day');
        
        // Verifica se o dia tem hábito registrado
        const dayString = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;
        const habitHistoryForDay = history.filter(item => item.data === dayString);

        // Se tiver histórico de hábitos, exibe no dia
        if (habitHistoryForDay.length > 0) {
          cell.classList.add('has-habit');
          cell.title = habitHistoryForDay.map(item => `${item.nota} às ${item.horaConcluida}`).join('\n');
        }

        // Quando o usuário clica em um dia, exibe o histórico de hábitos
        cell.addEventListener('click', () => showHabitDetails(dayString, habitHistoryForDay, habits));

        dayCount++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
    if (dayCount > daysInMonth) break;
  }
}

// Função para mostrar detalhes do hábito
function showHabitDetails(dayString, habitHistoryForDay, habits) {
  const habitDetails = document.getElementById('habit-details');
  habitDetails.innerHTML = `<h3>Histórico de hábitos para ${dayString}</h3>`;
  
  if (habitHistoryForDay.length === 0) {
    habitDetails.innerHTML += '<p>Nenhum hábito registrado para esse dia.</p>';
  } else {
    habitHistoryForDay.forEach(habitRecord => {
      const habit = habits.find(h => h.id === habitRecord.idHabito);
      habitDetails.innerHTML += `
        <p><strong>Hábito:</strong> ${habit ? habit.nome : 'Desconhecido'}</p>
        <p><strong>Nota:</strong> ${habitRecord.nota}</p>
        <p><strong>Hora concluída:</strong> ${habitRecord.horaConcluida}</p>
        <hr>`;
    });
  }
}

// Função para atualizar o título do mês
function updateMonthTitle() {
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  monthTitle.textContent = `${monthNames[currentMonth]} ${currentYear}`;
}

// Função para navegar entre os meses
function changeMonth(delta) {
  currentMonth += delta;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateMonthTitle();
  renderCalendar(currentYear, currentMonth, habits, habitHistory);
}

// Inicialização do aplicativo
async function initializeApp() {
  // Carrega dados do usuário
  await getUserInfo(1);

  // Carrega hábitos e histórico de hábitos
  habits = await getHabits();
  habitHistory = await getHabitHistory();

  // Renderiza o calendário com os hábitos e histórico
  renderCalendar(currentYear, currentMonth, habits, habitHistory);
  updateMonthTitle();
}

// Adicionando eventos de navegação entre os meses
prevMonthButton.addEventListener("click", () => changeMonth(-1));
nextMonthButton.addEventListener("click", () => changeMonth(1));

// Inicializa o app
initializeApp();
