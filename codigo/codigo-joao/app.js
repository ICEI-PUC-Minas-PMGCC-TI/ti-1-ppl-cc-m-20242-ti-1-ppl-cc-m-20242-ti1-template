// app.js
// Função para navegar para outra página
function navigateTo(page) {
    alert(`Navegando para: ${page}`);
    window.location.href = page; // Redireciona para a página especificada
}
// Função para voltar à página anterior
document.getElementById('seta').addEventListener('click', function() {
    window.history.back(); // Volta para a página anterior
});