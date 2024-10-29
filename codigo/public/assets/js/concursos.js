document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;

    fetch(`http://localhost:3000/concursos?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';

            if (data.length > 0) {
                data.forEach(concurso => {
                    const div = document.createElement('div');
                    div.textContent = concurso.nome;
                    resultsDiv.appendChild(div);
                });
            } else {
                resultsDiv.textContent = 'Nenhum concurso encontrado.';
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});