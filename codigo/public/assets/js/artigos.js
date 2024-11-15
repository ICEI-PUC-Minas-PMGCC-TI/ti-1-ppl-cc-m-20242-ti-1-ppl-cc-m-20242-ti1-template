fetch('../db/db.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    exibirArtigos(data); 
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error)); 

function exibirArtigos(data){
    const artigos = data.artigos;
    let artigosHTML = '';

    for (let i = 0; i < artigos.length; i++){
        let titulo = artigos[i].titulo;
        let autor = artigos[i].autor;
        let link = artigos[i].link;
        let assunto = artigos[i].assunto;

        artigosHTML += `
        <div class='content'>
            <h2> ${ titulo }</h2>
            <p> Autor: ${ autor } </p>
            <p> Link de acesso: ${ link } </p>
            <p> Assunto: ${ assunto } </p>
        </div>
        `;
    }
    document.getElementById("container").innerHTML += artigosHTML
    document.getElementById("container").innerHTML += '<a href="novoartigo.html"><input type="button" value="Adicionar artigo" class="field" style="cursor:pointer"></input></a>'
}

  //Selecionar o item que for clicado

var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem .forEach((item) =>
        item.classList.remove('ativo')
)
this.classList.add('ativo')
}

//Espandir o menu

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})


