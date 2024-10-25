document.addEventListener('DOMContentLoaded', function() {
    const tipoUsuario = document.getElementById('tipo');
    const camposAnalista = document.getElementById('campos-analista');
    const camposInvestidor = document.getElementById('campos-investidor');

    // Função para exibir ou ocultar os campos
    function exibirCampos() {
        const tipoSelecionado = tipoUsuario.value;
        
        if (tipoSelecionado === 'an') {
            camposAnalista.style.display = 'block';
            camposInvestidor.style.display = 'none';
        } else if (tipoSelecionado === 'in') {
            camposAnalista.style.display = 'none';
            camposInvestidor.style.display = 'block';
        } else {
            camposAnalista.style.display = 'none';
            camposInvestidor.style.display = 'none';
        }
    }

    // Executa a função sempre que o tipo de usuário for alterado
    tipoUsuario.addEventListener('change', exibirCampos);

    // Executa ao carregar a página para garantir que os campos comecem ocultos
    exibirCampos();
});
