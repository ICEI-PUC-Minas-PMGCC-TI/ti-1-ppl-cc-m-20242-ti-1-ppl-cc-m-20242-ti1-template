document.getElementById('cadastro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
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
  });