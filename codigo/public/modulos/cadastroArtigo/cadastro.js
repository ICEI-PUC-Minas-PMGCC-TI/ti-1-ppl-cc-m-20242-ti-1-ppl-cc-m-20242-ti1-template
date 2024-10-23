// Mostra a Imagem que está sendo inserida
function mostrarImagem(event) {
    const imagemPreview = document.getElementById('imagemPreview');
    const arquivo = event.target.files[0];

    if (arquivo) {
        const leitor = new FileReader();
        leitor.onload = function(e) {
            imagemPreview.src = e.target.result; // Define a imagem da prévia
            imagemPreview.style.display = 'block'; // Mostra a prévia
        }
        leitor.readAsDataURL(arquivo); // Lê o arquivo como URL
    }
}

// Função para salvar dados no localStorage
function salvarDados() {
    const dados = {
        titulo: document.getElementById('titulo').value,
        subTitulo: document.getElementById('subTitulo').value,
        contAp: document.getElementById('contAp').value,
        contIn: document.getElementById('contIn').value,
        autoria: document.getElementById('autoria').value,
        data: document.getElementById('data').value,
        imagem: document.getElementById('imagemPreview').src
    };

    const db = leDados(); // Lê os dados existentes
    db.artigos.push(dados); // Adiciona o novo artigo
    salvaDados(db); // Salva os dados atualizados
}

// Função para ler dados do localStorage
function leDados() {
    let strDados = localStorage.getItem('db');
    if (strDados) {
        return JSON.parse(strDados);
    } else {
        return { artigos: [] }; // Retorna um array vazio se não houver dados
    }
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

// Função do botão mostrar, quando acionado mostra tudo o que foi inserido
document.getElementById('btnMostrar').addEventListener('click', function() {
    const db = leDados(); // Lê os dados
    let resultado = `<h2>Artigos Inseridos</h2>`;
    
    db.artigos.forEach((artigo, index) => {
        resultado += `
            <div id="mostra">
                <h3>Artigo ${index + 1}</h3>
                <p><strong>Título:</strong> ${artigo.titulo}</p>
                <p><strong>Sub-título:</strong> ${artigo.subTitulo}</p>
                <p><strong>Conteúdo de Apresentação:</strong> ${artigo.contAp}</p>
                <p><strong>Conteúdo Informativo:</strong> ${artigo.contIn}</p>
                <p><strong>Autoria:</strong> ${artigo.autoria}</p>
                <p><strong>Data:</strong> ${artigo.data}</p>
                <img src="${artigo.imagem}" alt="Imagem Inserida" class="img-fluid border border-light" style="max-width: 300px;">
                <hr>
            </div>
        `;
    });

    // Insere os dados no elemento "resultado"
    document.getElementById('resultado').innerHTML = resultado;
});

// Ajusta o tamanho do campo de texto conforme é preenchido
function ajustarAlturaTextarea(textarea) {
    textarea.style.height = 'auto'; // Reseta a altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta para o conteúdo
}

// Associa a função de ajuste de altura a todos os textareas
const textareas = document.querySelectorAll('textarea');
textareas.forEach(textarea => {
    textarea.addEventListener('input', () => ajustarAlturaTextarea(textarea));
});

// Adiciona evento para salvar dados ao clicar em "Salvar"
document.getElementById('btnSalvar').addEventListener('click', function() {
    salvarDados();
    alert('Dados salvos no localStorage!');
});
