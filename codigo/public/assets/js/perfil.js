document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("edit-btn");
    const saveButton = document.getElementById("saveProfile");

    if (editButton) {
        editButton.addEventListener("click", function () {
            $('#editProfileModal').modal('show');
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
        const categoria = document.getElementById("categoria").value;
        const jogos = document.getElementById("jogos").value;

        document.getElementById("nome-usuario").innerText = nome || "Nome do Usuário";
        document.getElementById("bio").innerText = bio || "Descrição breve do jogador";
        document.getElementById("categoria-jogo").innerText = `Categoria: ${categoria || "N/A"}`;
        document.getElementById("jogos").innerText = `Jogos Preferidos: ${jogos || ""}`;

        $('#editProfileModal').modal('hide');
    });
});
