// Adicionar novo artigo
document.getElementById('artigoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const link = document.getElementById('link').value;
    const assunto = document.getElementById('assunto').value;

    const novoArtigo = {
        titulo : titulo,
        autor : autor,
        link : link,
        assunto : assunto
    };

    fetch('http://localhost:3000/artigos', {
        method: 'POST',
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(novoArtigo)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Artigo adicionado: ', data);
        alert("Artigo adicionado com sucesso!");
        document.getElementById('artigoForm').reset();
    })
    .catch(error => {
        console.error("Erro ao adicionar artigo: ", error)
        alert("Erro ao adicionar artigo!")
    });
});
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