// mostra concursos cadastrados no JSON
async function mostrarConcursos() {
  try {
      const response = await fetch('/codigo/db/db.json');
      const data = await response.json();
      const listaConcursos = document.getElementById('lista-concursos');

      listaConcursos.innerHTML = '';

      data.concursos.forEach(concurso => {
          adicionarConcursoNaLista(concurso);
      });

  } catch (error) {
      console.error('Erro ao carregar o JSON:', error);
  }
}

// Função para cadastrar um novo concurso
async function cadastrarConcurso(event) {
  event.preventDefault();

  const novoConcurso = obterDadosDoFormulario();

  // Adiciona o novo concurso ao JSON (simulação)
  adicionarConcursoNaLista(novoConcurso);

  // Limpa os campos do formulário
  document.getElementById('cadastro-form').reset();
}

// Função para obter dados do formulário
function obterDadosDoFormulario() {
  return {
      nome: document.getElementById('nome').value,
      dataInscricao: document.getElementById('data-inscricao').value,
      dataProva: document.getElementById('data-prova').value,
      categoria: document.getElementById('categoria').value,
      nivelEnsino: document.getElementById('nivel-ensino').value,
      banca: document.getElementById('banca').value,
      localizacao: document.getElementById('localizacao').value,
      horario: document.getElementById('horario').value,
      descricao: document.getElementById('descricao').value,
      link: document.getElementById('link').value,
      materiais: document.getElementById('materiais').value
  };
}

// Função para adicionar concurso na lista
function adicionarConcursoNaLista(concurso) {
  const listaConcursos = document.getElementById('lista-concursos');
  const concursoElement = document.createElement('div');
  concursoElement.classList.add('concurso');
  concursoElement.innerHTML = `
      <h3>${concurso.nome}</h3>
      <p><strong>Data Inscrição:</strong> ${concurso.dataInscricao}</p>
      <p><strong>Data Prova:</strong> ${concurso.dataProva}</p>
      <p><strong>Categoria:</strong> ${concurso.categoria}</p>
      <p><strong>Nível de Ensino:</strong> ${concurso.nivelEnsino}</p>
      <p><strong>Banca:</strong> ${concurso.banca}</p>
      <p><strong>Localização:</strong> ${concurso.localizacao}</p>
      <p><strong>Horário:</strong> ${concurso.horario}</p>
      <p><strong>Descrição:</strong> ${concurso.descricao}</p>
      <p><strong>Link:</strong> <a href="${concurso.link}" target="_blank">${concurso.link}</a></p>
      <p><strong>Materiais:</strong> ${concurso.materiais}</p>
      <button class="editar-btn">Editar</button>
      <button class="excluir-btn">Excluir</button>
  `;
  
  listaConcursos.appendChild(concursoElement);

  // Adiciona eventos aos botões
  concursoElement.querySelector('.editar-btn').addEventListener('click', () => editarConcurso(concursoElement, concurso));
  concursoElement.querySelector('.excluir-btn').addEventListener('click', () => excluirConcurso(concursoElement));
}

// Função para editar concurso
function editarConcurso(concursoElement, concurso) {
  document.getElementById('nome').value = concurso.nome;
  document.getElementById('data-inscricao').value = concurso.dataInscricao;
  document.getElementById('data-prova').value = concurso.dataProva;
  document.getElementById('categoria').value = concurso.categoria;
  document.getElementById('nivel-ensino').value = concurso.nivelEnsino;
  document.getElementById('banca').value = concurso.banca;
  document.getElementById('localizacao').value = concurso.localizacao;
  document.getElementById('horario').value = concurso.horario;
  document.getElementById('descricao').value = concurso.descricao;
  document.getElementById('link').value = concurso.link;
  document.getElementById('materiais').value = concurso.materiais;

  // Remove o concurso editado
  listaConcursos.removeChild(concursoElement);
}

// Função para excluir concurso
function excluirConcurso(concursoElement) {
  listaConcursos.removeChild(concursoElement);
}

// Adiciona o evento de submit ao formulário
document.getElementById('cadastro-form').addEventListener('submit', cadastrarConcurso);

// Chama a função para mostrar concursos ao carregar a página
window.onload = mostrarConcursos;
