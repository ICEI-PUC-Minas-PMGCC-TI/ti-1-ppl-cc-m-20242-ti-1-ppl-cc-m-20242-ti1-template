document.getElementById('atualizarButton').addEventListener('click', function() {
    const nome = document.querySelector('input[placeholder="Nome do usuário"]').value;
    const dataNascimento = document.querySelector('input[placeholder="Data de nascimento"]').value;
    const senha = document.querySelector('input[placeholder="Senha"]').value;
    const endereco = document.querySelector('input[placeholder="Endereço"]').value;

    if (!nome || !dataNascimento || !senha || !endereco) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const usuarioAtualizado = {
        nome: nome,
        data_nascimento: dataNascimento,
        senha: senha,
        endereco: endereco
    };

    console.log('Atualizando usuário:', usuarioAtualizado); 

    fetch('http://localhost:3000/usuarios/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarioAtualizado)
    })
    .then(response => {
        console.log('Resposta do servidor:', response);
        if (response.ok) {
            return response.json();
        }
        throw new Error('Falha ao atualizar os dados');
    })
    .then(data => {
        console.log('Dados atualizados:', data);
        alert('Dados atualizados com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao atualizar os dados');
    });
});
