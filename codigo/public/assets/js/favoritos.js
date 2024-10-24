async function fetchUserName() {
    try{
        const response = await fetch('/codigo/db/db.json')
        const data = await response.json();

        const userName = data.usuarios.nome;
        document.getElementById('user-name').textContent = `Olá, ${userName}`
    } catch (error){
        console.error('Erro ao buscar o nome do usuário:', error)
    }
}

document.addEventListener('DOMContentLoaded', fetchUserName);