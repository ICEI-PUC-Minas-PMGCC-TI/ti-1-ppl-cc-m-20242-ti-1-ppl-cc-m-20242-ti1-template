const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const concursos = [
    { id: 1, nome: 'Concurso A' },
    { id: 2, nome: 'Concurso B' },
    { id: 3, nome: 'Concurso C' },
];

app.get('/concursos', (req, res) => {
    const query = req.query.q || '';
    const resultados = concursos.filter(concurso => 
        concurso.nome.toLowerCase().includes(query.toLowerCase())
    );
    res.json(resultados);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});