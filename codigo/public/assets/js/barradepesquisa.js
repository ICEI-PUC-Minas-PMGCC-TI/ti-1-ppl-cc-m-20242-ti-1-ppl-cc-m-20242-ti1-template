fetch('dados.json')
    .then(response => response.json())
    .then(data => {
        const nav = document.getElementById('nav-pesquisa');
        const container = document.createElement(data.caixaDePesquisa.tipo);
        container.className = data.caixaDePesquisa.classe;

        data.caixaDePesquisa.elementos.forEach(elemento => {
            const el = document.createElement(elemento.tipo);
            if (elemento.id) el.id = elemento.id;
            if (elemento.classe) el.className = elemento.classe;
            if (elemento.conteudo) el.textContent = elemento.conteudo;
            if (elemento.atributos) {
                for (const [key, value] of Object.entries(elemento.atributos)) {
                    el.setAttribute(key, value);
                }
            }
            container.appendChild(el);
        });

        nav.appendChild(container);
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
