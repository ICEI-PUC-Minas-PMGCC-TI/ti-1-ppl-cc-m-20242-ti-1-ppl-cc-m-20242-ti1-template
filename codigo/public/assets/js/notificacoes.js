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
        `

    document.getElementById("container").innerHTML += notificacoes
}

function init (){
    let btnNovaNotif = document.getElementById("btnNovaNotif");
    btnNovaNotif.addEventListener('click', notif);
}

window.addEventListener('load', init)