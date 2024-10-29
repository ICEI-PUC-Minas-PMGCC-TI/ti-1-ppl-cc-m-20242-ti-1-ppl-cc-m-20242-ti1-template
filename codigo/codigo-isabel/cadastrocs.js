// Mostra concursos cadastrados no JSON
async function mostrarConcursos() {
  try {
      const response = await fetch('/codigo/db/db.json'); // Faz a requisição para o arquivo JSON
      const data = await response.json(); // Converte a resposta em JSON
      const listaConcursos = document.getElementById('lista-concursos'); // Elemento onde os concursos serão exibidos

      listaConcursos.innerHTML = ''; // Limpa a lista de concursos

      data.concursos.forEach(concurso => {
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
              <div class="botoes">
                  <button class="botao" onclick="excluirConcurso('${concurso.nome}')">Excluir</button>
                  <button class="botao" onclick="editarConcurso('${concurso.nome}', '${concurso.dataInscricao}', '${concurso.dataProva}', '${concurso.categoria}', '${concurso.nivelEnsino}', '${concurso.banca}', '${concurso.localizacao}', '${concurso.horario}', '${concurso.descricao}', '${concurso.link}', '${concurso.materiais}')">Editar</button>
              </div>
          `;
          listaConcursos.appendChild(concursoElement); // Adiciona o concurso à lista
      });
  } catch (error) {
      console.error('Erro ao carregar o JSON:', error);
  }
}

// Função para cadastrar um novo concurso
async function cadastrarConcurso(event) {
  event.preventDefault(); // Evita o recarregamento da página

  const nome = document.getElementById('nome').value;
  const dataInscricao = document.getElementById('data-inscricao').value;
  const dataProva = document.getElementById('data-prova').value;
  const categoria = document.getElementById('categoria').value;
  const nivelEnsino = document.getElementById('nivel-ensino').value;
  const banca = document.getElementById('banca').value;
  const localizacao = document.getElementById('localizacao').value;
  const horario = document.getElementById('horario').value;
  const descricao = document.getElementById('descricao').value;
  const link = document.getElementById('link').value;
  const materiais = document.getElementById('materiais').value;

  const novoConcurso = {
      nome,
      dataInscricao,
      dataProva,
      categoria,
      nivelEnsino,
      banca,
      localizacao,
      horario,
      descricao,
      link,
      materiais
  };

  // Adiciona o novo concurso à lista
  const listaConcursos = document.getElementById('lista-concursos');
  const concursoElement = document.createElement('div');
  concursoElement.classList.add('concurso');
  concursoElement.innerHTML = `
      <h3>${novoConcurso.nome}</h3>
      <p><strong>Data Inscrição:</strong> ${novoConcurso.dataInscricao}</p>
      <p><strong>Data Prova:</strong> ${novoConcurso.dataProva}</p>
      <p><strong>Categoria:</strong> ${novoConcurso.categoria}</p>
      <p><strong>Nível de Ensino:</strong> ${novoConcurso.nivelEnsino}</p>
      <p><strong>Banca:</strong> ${novoConcurso.banca}</p>
      <p><strong>Localização:</strong> ${novoConcurso.localizacao}</p>
      <p><strong>Horário:</strong> ${novoConcurso.horario}</p>
      <p><strong>Descrição:</strong> ${novoConcurso.descricao}</p>
      <p><strong>Link:</strong> <a href="${novoConcurso.link}" target="_blank">${novoConcurso.link}</a></p>
      <p><strong>Materiais:</strong> ${novoConcurso.materiais}</p>
      <div class="botoes">
          <button class="botao" onclick="excluirConcurso('${novoConcurso.nome}')">Excluir</button>
          <button class="botao" onclick="editarConcurso('${novoConcurso.nome}', '${novoConcurso.dataInscricao}', '${novoConcurso.dataProva}', '${novoConcurso.categoria}', '${novoConcurso.nivelEnsino}', '${novoConcurso.banca}', '${novoConcurso.localizacao}', '${novoConcurso.horario}', '${novoConcurso.descricao}', '${novoConcurso.link}', '${novoConcurso.materiais}')">Editar</button>
      </div>
  `;
  listaConcursos.appendChild(concursoElement);

  // Limpa os campos do formulário
  document.getElementById('cadastro-form').reset();

  // Recarrega a lista de concursos
  await mostrarConcursos();
}

// Função para excluir um concurso
function excluirConcurso(nome) {
  const listaConcursos = document.getElementById('lista-concursos');
  const concursos = Array.from(listaConcursos.children);
  const concursoParaExcluir = concursos.find(concurso => concurso.querySelector('h3').innerText === nome);

  if (concursoParaExcluir) {
      listaConcursos.removeChild(concursoParaExcluir);
  }
}

// Função para editar um concurso
function editarConcurso(nome, dataInscricao, dataProva, categoria, nivelEnsino, banca, localizacao, horario, descricao, link, materiais) {
  document.getElementById('nome').value = nome;
  document.getElementById('data-inscricao').value = dataInscricao;
  document.getElementById('data-prova').value = dataProva;
  document.getElementById('categoria').value = categoria;
  document.getElementById('nivel-ensino').value = nivelEnsino;
  document.getElementById('banca').value = banca;
  document.getElementById('localizacao').value = localizacao;
  document.getElementById('horario').value = horario;
  document.getElementById('descricao').value = descricao;
  document.getElementById('link').value = link;
  document.getElementById('materiais').value = materiais;

  // Armazena o nome do concurso a ser editado para referência
  document.getElementById('nome').dataset.editar = nome;
}

// Adiciona o evento de submit ao formulário
document.getElementById('cadastro-form').addEventListener('submit', cadastrarConcurso);

// Chama a função para mostrar concursos ao carregar a página
window.onload = mostrarConcursos;
