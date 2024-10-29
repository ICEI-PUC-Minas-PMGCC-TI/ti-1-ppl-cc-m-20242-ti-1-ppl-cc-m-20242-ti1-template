fetch('../db/db.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    exibirNotificacoes(data); 
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error)); 

function exibirNotificacoes(data){
    const notificacoes = data.notificacoes;
    let notificacoesHTML = '';

    for (let i = 0; i < notificacoes.length; i++){
        let nome = notificacoes[i].nome;
        let horario = notificacoes[i].horario;
        let situacao = notificacoes[i].situacao;

        let classeSituacao = situacao === "Lido" ? "lido" : "nlido";

        notificacoesHTML += `
        <div class="content ${classeSituacao}">
            <h2>${ nome }</h2>
            <p>${ horario } </p>
            <p>${ situacao } </p>
        </div>
        `;

        
    }
    document.getElementById("container").innerHTML += notificacoesHTML;
}

function init (){
    let btnNovaNotif = document.getElementById("btnNovaNotif");
    btnNovaNotif.addEventListener('click', exibirNotificacoes);
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
);

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

/*btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
});*/   

console.log("teste")

const mostrarTudoButton = document.getElementById('tudo');
const mostrarNLidoButton = document.getElementById('nlido');
function mostrarTudo() {
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => {
        content.style.display = 'block';
    });
    console.log("Mostrar Tudo")
}


function mostrarNLido() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if(content.classList.contains("nlido")) {
            content.style.display = 'block';
        } else {
            content.style.display = "none";
        }
    });
    console.log("Mostrar não lido")
}

document.addEventListener("DOMContentLoaded", function() {

    console.log("Botão TUDO:", mostrarTudoButton);
    console.log("Botão N. LIDO:", mostrarNLidoButton);

    

    mostrarTudoButton.addEventListener("click", mostrarTudo);
    mostrarNLidoButton.addEventListener("click", mostrarNLido);

    mostrarTudo();
})

window.addEventListener('load', init);
window.addEventListener('load', mostrarTudo)