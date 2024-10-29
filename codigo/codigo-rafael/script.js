let events = [];

fetch('dados.json')
  .then(response => response.json())
  .then(data => {
    events = data.concursos.map(concurso => ({
      date: formatDate(concurso.data), 
      event: `${concurso.nome} - ${concurso.localizacao}`
    }));
    events.sort((a, b) => new Date(a.date) - new Date(b.date));
    generateCalendar(currentMonth, currentYear); 
    loadEvents(); 
  })
  .catch(error => console.error('Erro ao carregar os dados dos concursos:', error));

function formatDate(dateStr) {
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month}-${day}`; 
  }

  function generateCalendar(month, year) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
    const calendarHeader = document.createElement('div');
    calendarHeader.className = 'calendar-header';
    calendarHeader.innerHTML = `
      <span onclick="changeMonth(-1)">&#10094;</span>
      <span>${monthNames[month]} ${year}</span>
      <span onclick="changeMonth(1)">&#10095;</span>
    `;
    calendar.appendChild(calendarHeader);
    
    const dayNames = document.createElement('div');
    dayNames.className = 'day-names';
    dayNames.innerHTML = `<div>D</div><div>S</div><div>T</div><div>Q</div><div>Q</div><div>S</div><div>S</div>`;
    calendar.appendChild(dayNames);

    const days = document.createElement('div');
    days.className = 'days';

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'empty';
    days.appendChild(emptyDiv);
    }

    for (let day = 1; day <= lastDate; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const eventDetails = events.find(e => e.date === dateStr);
    const dayDiv = document.createElement('div');
    dayDiv.className = eventDetails ? 'highlight' : '';
    dayDiv.innerText = day;

    if (eventDetails) {
      dayDiv.title = eventDetails.event;
    }

    days.appendChild(dayDiv);
  }

    calendar.appendChild(days);
  }

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  function changeMonth(offset) {
    currentMonth += offset;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    } else if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
  }

  function loadEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = "<h4>Concursos Futuros (" + events.length + ")</h4>";
    events.forEach(event => {
      const eventDate = new Date(event.date);
      const eventItem = document.createElement('div');
      eventItem.className = 'event-item';
      eventItem.innerHTML = `<strong>${eventDate.getUTCDate()} de ${new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(eventDate)}</strong><br>${event.event}`;
      eventList.appendChild(eventItem);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentMonth, currentYear);
    loadEvents();
  });
