// Função para carregar e exibir os livros do JSON
async function carregarLivros() {
    try {
        const response = await fetch('/codigo/db/db.json'); // Faz a requisição para o arquivo JSON
        const data = await response.json(); // Converte a resposta em JSON
        const listaLivros = document.getElementById('lista-livros'); // Elemento onde os livros serão exibidos

        // Limpa a lista de livros antes de adicionar novos
        listaLivros.innerHTML = '';

        // Para cada livro no JSON, cria um bloco com as informações
        data.livros.forEach(livro => {
            const livroElement = document.createElement('div');
            livroElement.classList.add('livro');
            livroElement.innerHTML = `
                <h3>${livro.titulo}</h3>
                <p><strong>Matéria:</strong> ${livro.materia}</p>
                <p><strong>Editora:</strong> ${livro.editora}</p>
                <p><strong>Descrição:</strong> ${livro.descricao}</p>
            `;
            listaLivros.appendChild(livroElement); // Adiciona o livro à lista
        });
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
    }
}

// Função para cadastrar um novo livro
function cadastrarLivro(event) {
    event.preventDefault(); // Evita o recarregamento da página
    const titulo = document.getElementById('titulo-livro').value;
    const materia = document.getElementById('materia-livro').value;
    const editora = document.getElementById('editora-livro').value;
    const descricao = document.getElementById('descricao-livro').value;

    // Aqui, você pode fazer uma requisição POST ao servidor ou apenas manipular localmente
    const novoLivro = {
        titulo: titulo,
        materia: materia,
        editora: editora, 
        descricao: descricao
    };

    // Adiciona o novo livro à lista de livros cadastrados
    const listaLivros = document.getElementById('lista-livros');
    const livroElement = document.createElement('div');
    livroElement.classList.add('livro');
    livroElement.innerHTML = `
        <h3>${novoLivro.titulo}</h3>
        <p><strong class = "mini-titulo" >Matéria:</strong> ${novoLivro.materia}</p>
        <p><strong class = "mini-titulo" >Editora:</strong> ${novoLivro.editora}</p>
        <p><strong class = "mini-titulo" >Descrição:</strong> ${novoLivro.descricao}</p>
    `;
    listaLivros.appendChild(livroElement);

    // Limpa os campos do formulário
    document.getElementById('titulo-livro').value = '';
    document.getElementById('descricao-livro').value = '';
    document.getElementById('materia-livro').value = '';
    document.getElementById('editora-livro').value = '';    
}

// Chama a função quando a página carrega
window.onload = carregarLivros;


