async function carregarLivros() {
    try {
        const response = await fetch('http://localhost:3000/livros', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const livros = await response.json();

        const listaLivros = document.getElementById('lista-livros');

        listaLivros.innerHTML = '';

        livros.forEach(livro => {
            const livroElement = document.createElement('div');
            livroElement.classList.add('livro');
            livroElement.innerHTML = `
                <h3>${livro.titulo}</h3>
                <p><strong>Matéria:</strong> ${livro.materia}</p>
                <p><strong>Editora:</strong> ${livro.editora}</p>
                <p><strong>Descrição:</strong> ${livro.descricao}</p>
                <div class="botoes"
                    <button class="botao" onclick="excluirLivro(${livro.id})">Excluir</button>
                    <button class="botao" onclick="editarLivro(${livro.id}, '${livro.titulo}', '${livro.materia}', '${livro.editora}', '${livro.descricao}')">Editar</button>
                </div>
            `;
            listaLivros.appendChild(livroElement);
        });
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
    }
}

async function cadastrarLivro(event) {
    event.preventDefault();
    const id = document.getElementById('livro-id').value;
    const titulo = document.getElementById('titulo-livro').value;
    const materia = document.getElementById('materia-livro').value;
    const editora = document.getElementById('editora-livro').value;
    const descricao = document.getElementById('descricao-livro').value;

    const novoLivro = {
        id: id ? parseInt(id) : Date.now(),
        titulo: titulo,
        materia: materia,
        editora: editora,
        descricao: descricao
    };

    let method = 'POST';
    let url = 'http://localhost:3000/livros';
    if (id) {
        method = 'PUT';
        url += `/${id}`;
    }

    try {
        await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoLivro)
        });
        carregarLivros();
    } catch (error) {
        console.error('Erro ao salvar o livro:', error);
    }

    document.getElementById('livro-id').value = '';
    document.getElementById('titulo-livro').value = '';
    document.getElementById('materia-livro').value = '';
    document.getElementById('editora-livro').value = '';
    document.getElementById('descricao-livro').value = '';
}

async function excluirLivro(id) {
    try {
        await fetch(`http://localhost:3000/livros/${id}`, {
            method: 'DELETE'
        });
        carregarLivros();
    } catch (error) {
        console.error('Erro ao excluir o livro:', error);
    }
}

function editarLivro(id, titulo, materia, editora, descricao) {
    document.getElementById('livro-id').value = id;
    document.getElementById('titulo-livro').value = titulo;
    document.getElementById('materia-livro').value = materia;
    document.getElementById('editora-livro').value = editora;
    document.getElementById('descricao-livro').value = descricao;
}

window.onload = carregarLivros;


