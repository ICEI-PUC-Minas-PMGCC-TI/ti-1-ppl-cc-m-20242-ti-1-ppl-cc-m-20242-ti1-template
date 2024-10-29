document.addEventListener('DOMContentLoaded', function() {
    const config = { 
        "configurações": [
            {
                "botões": [
                    {
                        "id": 1,
                        "nome": "Voltar",
                        "icone": "oi oi-chevron-left",
                        "acao": "voltar-pagina-home",
                        "rota": "/homepage.html",
                        "clicavel": true,
                        "tipo": "seta"
                    },
                    {
                        "id": 2,
                        "nome": "Sua conta",
                        "icone": "oi oi-person",
                        "acao": "ir-para-sua-conta",
                        "rota": "/suaconta.html",
                        "clicavel": true
                    },
                    {
                        "id": 3,
                        "nome": "Notificações",
                        "icone": "oi oi-bell",
                        "acao": "ir-para-notificacoes",
                        "rota": "/notificacao.html",
                        "clicavel": true
                    },
                    {
                        "id": 4,
                        "nome": "Aparência",
                        "icone": "oi oi-eye",
                        "acao": "ir-para-aparencia",
                        "rota": "/aparencia.html",
                        "clicavel": true
                    },
                    {
                        "id": 5,
                        "nome": "Privacidade e Segurança",
                        "icone": "oi oi-lock-locked",
                        "acao": "ir-para-privacidade-seguranca",
                        "rota": "/privacidadeseguranca.html",
                        "clicavel": true
                    },
                    {
                        "id": 6,
                        "nome": "FAQ",
                        "icone": "oi oi-question-mark",
                        "acao": "ir-para-faq",
                        "rota": "/faq.html",
                        "clicavel": true
                    },
                    {
                        "id": 7,
                        "nome": "Sobre",
                        "icone": "oi oi-info",
                        "acao": "ir-para-sobre",
                        "rota": "/sobre.html",
                        "clicavel": true
                    }
                ]
            }
        ]
    };

    const buttonContainer = document.getElementById('button-container');

    // Função para criar um botão com base nos dados JSON
    config.configurações[0].botões.forEach(button => {
        if (button.clicavel) {
            const buttonDiv = document.createElement('div');
            buttonDiv.classList.add('button-container');

            const icon = document.createElement('span');
            icon.classList.add(...button.icone.split(" "));
            icon.classList.add('icon');

            const buttonLink = document.createElement('a');
            buttonLink.href = button.rota;
            buttonLink.classList.add('section');
            
            if (button.tipo === "seta") {
                // Botão "Voltar" com ícone apenas
                document.getElementById('seta').addEventListener('click', function() {
                    window.history.back();
                });
            } else {
                // Adiciona o texto ao botão normal
                buttonLink.textContent = button.nome;
                buttonDiv.appendChild(icon);
                buttonDiv.appendChild(buttonLink);
                buttonContainer.appendChild(buttonDiv);
            }
        }
    });
});


