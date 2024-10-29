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

        const campoPesquisa = document.getElementById('search-input');
        const contResultados = document.createElement('div');
        contResultados.className = 'cont-resultados';
        nav.appendChild(contResultados);

        campoPesquisa.addEventListener('input', () => {
            const busca = campoPesquisa.value.toLowerCase();
            contResultados.innerHTML = '';

            const concursosFiltrados = data.concursos.filter(concurso =>
                concurso.nome.toLowerCase().includes(busca) ||
                concurso.instituicao.toLowerCase().includes(busca) ||
                concurso.cargo.toLowerCase().includes(busca)
            );

            concursosFiltrados.forEach(concurso => {
                const divConcurso = document.createElement('div');
                divConcurso.className = 'concurso';
                divConcurso.innerHTML = `
                    <h3>${concurso.nome}</h3>
                    <p><strong>Instituição:</strong> ${concurso.instituicao}</p>
                    <p><strong>Cargo:</strong> ${concurso.cargo}</p>
                    <p><strong>Salário:</strong> R$${concurso.salario.toLocaleString('pt-BR')}</p>
                    <p><strong>Data de Inscrição:</strong> ${concurso.dataInscricao}</p>
                    <p><strong>Localidade:</strong> ${concurso.localidade}</p>
                `;
                contResultados.appendChild(divConcurso);
            });
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
