// mostra concursos cadastrados no JSON

async function mostrarConcursos(){
   try{
        const response = await fetch('/codigo/db/db.json');
        const data = await response.json();
        const listaConcursos = document.getElementById('lista-concursos');

        listaConcursos.innerHTML = '';

        data.concursos.forEach(concurso => {
            const concursoElement = document.createElement('div');
            concursoElement.classList.add('concurso');
            concursoElement.innerHTML = `
                <h3>${concurso.nome}</h3>
                <p><strong>Inscrição:</strong> ${concurso.inscricao}</p>
                <p><strong>Prova:</strong> ${concurso.provaData}</p>
                <p><strong>Nível de Ensino:</strong> ${concurso.nivelEnsino}</p>
                <p><strong>Localização:</strong> ${concurso.localizacao}</p>
                
            `;
            listaConcursos.appendChild(concursoElement);
        });

   } catch(error){
       console.error('Erro ao carregar o JSON:', error);
   }

}


// Função para cadastrar um novo concurso
function cadastrarConcurso(event){

    event.preventDefault();
    const nome = document.getElementById('concurso-nome').value;
    const inscricao = document.getElementById('concurso-inscricao').value;
    const provaData = document.getElementById('concurso-prova').value;
    const nivelEnsino = document.getElementById('concurso-Ensino').value;
    const localizacao = document.getElementById('concurso-localizacao').value;
    
    const novoConcurso = {
        nome: nome,
        inscricao: inscricao,
        provaData: provaData,
        nivelEnsino: nivelEnsino,
        localizacao: localizacao
    }

    const listaConcursos = document.getElementById('lista-concursos');
    const concursoElement = document.createElement('div');
    concursoElement.classList.add('concurso');
    concursoElement.innerHTML = `
        <h3>${novoConcurso.nome}</h3>
        <p><strong>Inscrição:</strong> ${novoConcurso.inscricao}</p>
        <p><strong>Prova:</strong> ${novoConcurso.provaData}</p>
        <p><strong>Nível de Ensino:</strong> ${novoConcurso.nivelEnsino}</p>
        <p><strong>Localização:</strong> ${novoConcurso.localizacao}</p>
    `;
    listaConcursos.appendChild(concursoElement);

    document.getElementById('concurso-nome').value = '';
    document.getElementById('concurso-inscricao').value = '';
    document.getElementById('concurso-prova').value = '';
    document.getElementById('concurso-Ensino').value = '';
    document.getElementById('concurso-localizacao').value = '';

    window.onload = mostrarConcursos;

}