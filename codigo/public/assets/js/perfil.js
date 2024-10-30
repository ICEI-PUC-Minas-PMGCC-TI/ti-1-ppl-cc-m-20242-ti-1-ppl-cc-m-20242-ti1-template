document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("edit-btn");
    const saveButton = document.getElementById("saveProfile");

    // Abrir o modal de edição ao clicar no botão
    if (editButton) {
        editButton.addEventListener("click", function () {
            $('#editProfileModal').modal('show');
        });
    }

    // Manipuladores de eventos para upload de imagens
    const bannerUpload = document.getElementById("banner-upload");
    const fotoUpload = document.getElementById("foto-upload");

    bannerUpload.addEventListener("change", function (e) {
        const banner = document.getElementById("banner-usuario");
        const file = e.target.files[0];
        if (file) {
            banner.src = URL.createObjectURL(file);
        }
    });

    fotoUpload.addEventListener("change", function (e) {
        const foto = document.getElementById("foto-usuario");
        const file = e.target.files[0];
        if (file) {
            foto.src = URL.createObjectURL(file);
        }
    });

    // Função para salvar os dados do perfil
    saveButton.addEventListener("click", async function () {
        console.log("Botão de salvar clicado"); // Debug

        const nome = document.getElementById("nome").value;
        const bio = document.getElementById("bio-text").value;

        const categoriaCasual = document.getElementById("categoria-casual").checked;
        const categoriaCompetitivo = document.getElementById("categoria-competitivo").checked;

        let categoriasSelecionadas = "";
        if (categoriaCasual) categoriasSelecionadas += "Casual";
        if (categoriaCompetitivo) categoriasSelecionadas += (categoriasSelecionadas ? ", " : "") + "Competitivo";

        // Atualiza os elementos no perfil
        document.getElementById("nome-usuario").innerText = nome || "Nome do Usuário";
        document.getElementById("bio").innerText = bio || "Descrição breve do jogador";
        document.getElementById("categoria-jogo").innerText = `Categoria: ${categoriasSelecionadas || "N/A"}`;

        // Seleciona os jogos marcados
        const selectedGames = Array.from(document.querySelectorAll(".jogo-checkbox:checked")).map(checkbox => {
            const label = checkbox.nextElementSibling;
            return {
                imgSrc: label.querySelector(".jogo-imagem").src,
                name: label.querySelector("p").innerText
            };
        });

        // Atualiza o carrossel na página de perfil
        const carrosselContainer = document.getElementById("jogos-carrossel");
        selectedGames.forEach(game => {
            const carrosselItem = document.createElement("div");
            carrosselItem.className = "carrossel-item";
            carrosselItem.innerHTML = `
                <img src="${game.imgSrc}" alt="${game.name}" class="carrossel-jogo-imagem">
                <p>${game.name}</p>
            `;
            carrosselContainer.appendChild(carrosselItem);
        });

        // Prepara os dados do perfil para enviar
        const profileData = {
            nome: nome || "Nome do Usuário",
            bio: bio || "Descrição breve do jogador",
            imagePath: document.getElementById("foto-usuario").src,
            categorias: categoriasSelecionadas || "N/A"
        };

        console.log("Dados do perfil preparados:", profileData); // Debug

        // Salvar os dados do perfil
        try {
            const response = await fetch("http://localhost:3000/perfils", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profileData)
            });
            if (response.ok) {
                console.log("Perfil salvo com sucesso!");
            } else {
                console.error("Erro ao salvar perfil:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao salvar o perfil:", error);
        }

        // Fecha o modal
        $('#editProfileModal').modal('hide');
    });

    // Função para carregar os dados do perfil ao iniciar
    async function loadProfileData() {
        try {
            const response = await fetch("http://localhost:3000/perfils/1");
            const data = await response.json();

            document.getElementById("nome-usuario").innerText = data.nome;
            document.getElementById("bio").innerText = data.bio;
            document.getElementById("foto-usuario").src = data.imagePath;
            document.getElementById("categoria-jogo").innerText = `Categoria: ${data.categorias}`;
        } catch (error) {
            console.error("Erro ao carregar os dados do perfil:", error);
        }
    }

    // Carregar os dados do perfil ao iniciar
    loadProfileData();
});
