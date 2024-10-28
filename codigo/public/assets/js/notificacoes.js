fetch('../db/db.json')
  .then(response => response.json())
  .then(data => {
    exibirNotificacoes(data); 
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error)); 


function notif (){
    let nome = document.getElementById("txtNome").value;
    let horario = document.getElementById("txtHorario").value;
    let situacao = document.getElementById("txtSituacao").value;

    let notificacoes = `
        <div class="content">
            <h2>${ nome }</h2>
            <p>${ horario } </p>
            <p>${ situacao } </p>
        </div>
        `;

    document.getElementById("container").innerHTML += notificacoes;
}

function exibirNotificacoes(data){
    const notificacoes = data.notificacoes;
    let notificacoesHTML = '';

    for (let i = 0; i < notificacoes.length; i++){
        let nome = notificacoes[i].nome;
        let horario = notificacoes[i].horario;
        let situacao = notificacoes[i].situacao;

        notificacoesHTML += `
        <div class="content">
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

window.addEventListener('load', init);

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


var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})
