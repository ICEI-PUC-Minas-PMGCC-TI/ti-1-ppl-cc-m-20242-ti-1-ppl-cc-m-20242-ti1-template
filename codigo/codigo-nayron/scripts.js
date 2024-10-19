// scripts.js

// Função para limpar as notificações
function clearNotifications() {
    const notificationList = document.getElementById('notificationList');
    notificationList.innerHTML = '<p id="noNotification">NADA POR AQUI!</p>';
}

// Função para adicionar uma notificação
function addNotification(message) {
    const notificationList = document.getElementById('notificationList');
    const noNotificationText = document.getElementById('noNotification');

    // Remove o texto "NADA POR AQUI!" se houver notificações
    if (noNotificationText) {
        noNotificationText.remove();
    }

    // Cria uma nova notificação
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;

    // Adiciona a notificação na lista
    notificationList.appendChild(notification);
}

// Função para criar lembretes de estudo a cada dois dias
function studyReminder() {
    addNotification('Lembrete de estudo: Está na hora de revisar o conteúdo!');
}

// Função para lembrar do concurso dois dias antes
function contestReminder() {
    addNotification('Lembrete: O concurso será em dois dias!');
}

// Simulando notificações de dois em dois dias
setInterval(studyReminder, 2 * 24 * 60 * 60 * 1000); // A cada dois dias (em milissegundos)

// Simulando notificação de concurso 2 dias antes (para fins de teste, pode ser agendado para uma data específica)
setTimeout(contestReminder, 10000); // Simulando após 10 segundos para fins de teste