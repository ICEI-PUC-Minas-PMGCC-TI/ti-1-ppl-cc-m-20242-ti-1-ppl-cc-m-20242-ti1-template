// Função para carregar os dados do usuário
function loadUserData(user) {
    // Carrega a foto de perfil
    const profileImage = document.getElementById('profileImage');
    profileImage.src = user.photo || 'default-profile.png';

    // Carrega o nome e email do usuário
    document.getElementById('name').value = user.nome;
    document.getElementById('email').value = user.email;

    // Manipula o envio do formulário de edição
    const editForm = document.getElementById('editForm');
    editForm.addEventListener('submit', function(event) {
        event.preventDefault();
        user.nome = document.getElementById('name').value;
        user.email = document.getElementById('email').value;
        saveUserData(user);
    });

    // Manipula o upload da foto de perfil
    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const photoInput = document.getElementById('photo');
        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
                user.photo = e.target.result;
                saveUserData(user);
            }
            reader.readAsDataURL(photoInput.files[0]);
        }
    });

    // Manipula o botão de logout
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function() {
        // Implementar a funcionalidade de logout conforme necessário
        alert('Logout realizado com sucesso!');
    });
}

// Função para carregar os hábitos do usuário
function loadHabits(habits) {
    const habitsList = document.getElementById('habitsList');
    habitsList.innerHTML = ''; // Limpa a lista
    habits.forEach(function(habit) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${habit.descricao}</strong> - Data: ${habit.data}
                        <p>Feito: ${habit.feito ? 'Sim' : 'Não'}</p>`;
        habitsList.appendChild(li);
    });
}

// Função para salvar os dados do usuário (usando localStorage)
function saveUserData(user) {
    localStorage.setItem('userData', JSON.stringify(user));
    alert('Dados do usuário salvos com sucesso!');
}

// Carrega os dados do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Tenta obter os dados do usuário do localStorage
    let user = JSON.parse(localStorage.getItem('userData'));

    if (user) {
        // Se os dados estiverem no localStorage, carrega-os
        loadUserData(user);
        loadHabits(user.habits);
    } else {
        // Caso contrário, busca do db.json
        fetch('../db/db.json')
            .then(response => response.json())
            .then(data => {
                user = data.usuarios[0]; // Supondo que o primeiro usuário esteja logado
                loadUserData(user);
                loadHabits(user.habits);
            })
            .catch(error => console.error('Erro ao carregar dados do usuário:', error));
    }
});

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