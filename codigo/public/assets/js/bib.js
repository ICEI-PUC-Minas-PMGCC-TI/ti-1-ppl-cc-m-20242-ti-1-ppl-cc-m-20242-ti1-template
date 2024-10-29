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
                <div class = "botoes">
                    <button  class = "botao" onclick="excluirLivro('${livro.titulo}')">Excluir</button> <!-- Botão de exclusão -->
                    <button class = "botao" onclick="editarLivro('${livro.titulo}', '${livro.materia}', '${livro.editora}', '${livro.descricao}')">Editar</button>
                </div>    
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

function excluirLivro(titulo) {
    // Aqui você deve implementar a lógica para excluir o livro
    // Por exemplo, remover o livro do JSON localmente, se você não estiver usando um backend
    const listaLivros = document.getElementById('lista-livros');
    
    // Localiza o livro na lista e remove
    const livros = Array.from(listaLivros.children);
    const livroParaExcluir = livros.find(livro => livro.querySelector('h3').innerText === titulo);
    
    if (livroParaExcluir) {
        listaLivros.removeChild(livroParaExcluir);
    }
}

function editarLivro(titulo, materia, editora, descricao) {
    // Preencher o formulário de edição com os dados do livro
    document.getElementById('titulo-livro').value = titulo;
    document.getElementById('materia-livro').value = materia;
    document.getElementById('editora-livro').value = editora;
    document.getElementById('descricao-livro').value = descricao;

    // Armazenar o título do livro a ser editado para referência
    document.getElementById('titulo-livro').dataset.editar = titulo;
}

// Atualizar a função de cadastro para tratar a edição
function cadastrarLivro(event) {
    event.preventDefault();
    const titulo = document.getElementById('titulo-livro').value;
    const materia = document.getElementById('materia-livro').value;
    const editora = document.getElementById('editora-livro').value;
    const descricao = document.getElementById('descricao-livro').value;

    const listaLivros = document.getElementById('lista-livros');
    const livroElement = document.createElement('div');

    if (document.getElementById('titulo-livro').dataset.editar) {
        // Editar livro existente
        const tituloOriginal = document.getElementById('titulo-livro').dataset.editar;

        // Atualiza os dados no elemento
        const livroParaEditar = Array.from(listaLivros.children).find(livro => livro.querySelector('h3').innerText === tituloOriginal);
        if (livroParaEditar) {
            livroParaEditar.querySelector('h3').innerText = titulo;
            livroParaEditar.querySelector('p:nth-child(2)').innerHTML = `<strong>Matéria:</strong> ${materia}`;
            livroParaEditar.querySelector('p:nth-child(3)').innerHTML = `<strong>Editora:</strong> ${editora}`;
            livroParaEditar.querySelector('p:nth-child(4)').innerHTML = `<strong>Descrição:</strong> ${descricao}`;
        }

        // Remove a referência de edição
        delete document.getElementById('titulo-livro').dataset.editar;

    } else {
        // Adiciona novo livro
        livroElement.classList.add('livro');
        livroElement.innerHTML = `
            <h3>${titulo}</h3>
            <p><strong>Matéria:</strong> ${materia}</p>
            <p><strong>Editora:</strong> ${editora}</p>
            <p><strong>Descrição:</strong> ${descricao}</p>
            <div class = "botoes">
                <button class = "botao" onclick="excluirLivro('${titulo}')">Excluir</button>
                <button class = "botao" onclick="editarLivro('${titulo}', '${materia}', '${editora}', '${descricao}')">Editar</button>
            </div>
        `;
        listaLivros.appendChild(livroElement);
    }

    // Limpa os campos do formulário
    document.getElementById('titulo-livro').value = '';
    document.getElementById('descricao-livro').value = '';
    document.getElementById('materia-livro').value = '';
    document.getElementById('editora-livro').value = '';    
}



// Chama a função quando a página carrega
window.onload = carregarLivros;


