document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("edit-btn");
    const saveButton = document.getElementById("saveProfile");

    if (editButton) {
        editButton.addEventListener("click", function () {
            $('#editProfileModal').modal('show');
            loadSelectedGames(); // Carrega os jogos selecionados ao abrir o modal
        });
    }

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

    saveButton.addEventListener("click", function () {
        const nome = document.getElementById("nome").value;
        const bio = document.getElementById("bio-text").value;

        // Verifica quais categorias foram selecionadas
        const categoriaCasual = document.getElementById("categoria-casual").checked;
        const categoriaCompetitivo = document.getElementById("categoria-competitivo").checked;

        // Define o texto de categoria de acordo com as seleções
        let categoriasSelecionadas = "";
        if (categoriaCasual) categoriasSelecionadas += "Casual";
        if (categoriaCompetitivo) categoriasSelecionadas += (categoriasSelecionadas ? ", " : "") + "Competitivo";

        // Atualiza os elementos no perfil
        document.getElementById("nome-usuario").innerText = nome || "Nome do Usuário";
        document.getElementById("bio").innerText = bio || "Biografia do usuário.";
        document.getElementById("categoria-jogo").innerText = `Categoria: ${categoriasSelecionadas || ""}`;

        // Seleciona os checkboxes marcados
        const selectedGames = Array.from(document.querySelectorAll(".jogo-checkbox:checked")).map(checkbox => {
            const label = checkbox.nextElementSibling;
            return {
                imgSrc: label.querySelector(".jogo-imagem").src,
                name: label.querySelector("p").innerText
            };
        });

        // Atualiza o carrossel na página de perfil apenas se houver jogos selecionados
        const carrosselContainer = document.getElementById("jogos-carrossel");
        if (selectedGames.length > 0) {
            carrosselContainer.innerHTML = ""; // Limpa o carrossel se houver jogos selecionados
            selectedGames.forEach(game => {
                const carrosselItem = document.createElement("div");
                carrosselItem.className = "carrossel-item";
                carrosselItem.innerHTML = `
                    <img src="${game.imgSrc}" alt="${game.name}" class="carrossel-jogo-imagem">
                    <p>${game.name}</p>
                `;
                carrosselContainer.appendChild(carrosselItem);
            });
        }

        // Fecha o modal
        $('#editProfileModal').modal('hide');
    });

    function loadSelectedGames() {
        // Obtenha os jogos atualmente no carrossel
        const carrosselItems = document.querySelectorAll("#jogos-carrossel .carrossel-item");

        // Limpe todos os checkboxes
        const checkboxes = document.querySelectorAll(".jogo-checkbox");
        checkboxes.forEach(checkbox => checkbox.checked = false);

        // Marque os checkboxes que correspondem aos jogos no carrossel
        carrosselItems.forEach(item => {
            const imgSrc = item.querySelector(".carrossel-jogo-imagem").src;
            const checkbox = Array.from(checkboxes).find(checkbox => {
                const label = checkbox.nextElementSibling;
                return label.querySelector(".jogo-imagem").src === imgSrc;
            });
            if (checkbox) {
                checkbox.checked = true; // Marca o checkbox correspondente
            }
        });
    }
});
