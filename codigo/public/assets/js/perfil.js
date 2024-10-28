document.addEventListener("DOMContentLoaded", function () {
    // Confirma o carregamento do JavaScript
    console.log("JavaScript carregado.");

    // Referência ao botão "Editar Perfil"
    const editButton = document.getElementById("edit-btn");
    if (editButton) {
        editButton.addEventListener("click", function () {
            console.log("Botão 'Editar Perfil' clicado.");
            $('#editProfileModal').modal('show'); // Mostra o modal ao clicar
        });
    } else {
        console.error("Botão 'Editar Perfil' não encontrado.");
    }

    // Referência ao botão de salvar no modal
    const saveButton = document.getElementById("saveProfile");
    if (saveButton) {
        saveButton.addEventListener("click", function () {
            console.log("Botão 'Salvar' clicado."); // Verificação do clique no botão Salvar
            
            // Captura os valores dos campos de entrada
            const nome = document.getElementById("nome").value;
            const bio = document.getElementById("bio-text").value;
            const categoria = document.getElementById("categoria").value;
            const jogos = document.getElementById("jogos").value;

            // Cria um objeto JSON com os dados do usuário
            const perfilUsuario = {
                nome: nome,
                bio: bio,
                categoria: categoria,
                jogos: jogos
            };

            // Atualiza o perfil na página com os dados salvos
            document.getElementById("nome-usuario").innerText = perfilUsuario.nome || "Nome do Usuário";
            document.getElementById("bio").innerText = perfilUsuario.bio || "Descrição breve do jogador";
            document.getElementById("categoria-jogo").innerText = `Categoria: ${perfilUsuario.categoria || "N/A"}`;
            document.getElementById("jogos").innerText = `Jogos Preferidos: ${perfilUsuario.jogos || ""}`;

            // Fecha o modal após salvar as alterações
            $('#editProfileModal').modal('hide');
        });
    } else {
        console.error("Botão 'Salvar' não encontrado.");
    }
});
