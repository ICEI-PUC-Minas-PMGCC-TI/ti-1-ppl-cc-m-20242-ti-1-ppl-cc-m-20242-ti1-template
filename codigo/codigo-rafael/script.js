const events = [
    { "date": "2024-09-04", "event": "Concurso Petrobras" },
    { "date": "2024-09-24", "event": "Concurso Banco do Brasil" }
  ];

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
      days.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= lastDate; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isEventDay = events.some(e => e.date === dateStr);
      days.innerHTML += `<div class="${isEventDay ? 'highlight' : ''}">${day}</div>`;
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
      const eventItem = document.createElement('div');
      eventItem.className = 'event-item';
      eventItem.innerHTML = `<strong>${new Date(event.date).getDate()} de ${new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(new Date(event.date))}</strong><br>${event.event}`;
      eventList.appendChild(eventItem);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentMonth, currentYear);
    loadEvents();
  });
