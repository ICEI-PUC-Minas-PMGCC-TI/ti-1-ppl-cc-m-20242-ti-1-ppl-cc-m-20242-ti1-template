fetch('../db/db.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    exibirArtigos(data);
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));

function exibirArtigos(data) {
  const artigos = data.artigos;
  let artigosHTML = '';

  for (let i = 0; i < artigos.length; i++) {
    let titulo = artigos[i].titulo;
    let autor = artigos[i].autor;
    let link = artigos[i].link;
    let assunto = artigos[i].assunto;
    let id = artigos[i].id;

    artigosHTML += `
      <div class='content' id='artigo-${id}'>
          <h2> ${titulo} </h2>
          <p> Autor: ${autor} </p>
          <p> Link de acesso: <a href='${link}' target='_blank'> Link </a> </p>
          <p> Assunto: ${assunto} </p>
          <button class="delete-btn" data-id="${id}" style="border-radius:10px;padding:5px">Deletar</button>
      </div>
    `;
  }
  document.getElementById("container").innerHTML += artigosHTML;
  document.getElementById("container").innerHTML += '<a href="novoartigo.html"><input type="button" value="Adicionar artigo" class="field" style="cursor:pointer"></input></a>';

  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
      const id = this.getAttribute('data-id');
      deleteArtigo(id);
    });
  });
}

function deleteArtigo(id) {
  fetch(`http://localhost:3000/artigos/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        document.getElementById(`artigo-${id}`).remove();
      } else {
        console.error('Erro ao deletar o artigo');
      }
    })
    .catch(error => console.error('Erro ao deletar o artigo:', error));
}

var menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
  menuItem.forEach((item) => item.classList.remove('ativo'));
  this.classList.add('ativo');
}

menuItem.forEach((item) =>
  item.addEventListener('click', selectLink)
);

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function () {
  menuSide.classList.toggle('expandir');
});
