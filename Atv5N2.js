const express = require('express');
const app = express();

// Lista de alunos
const alunos = [
    { RA: '111', nome: 'Julia', email: 'julia@example.com' },
    { RA: '222', nome: 'Alisson', email: 'alisson@example.com' },
    { RA: '333', nome: 'Felipe', email: 'felipe@example.com' }
];

// Rota para obter a lista de alunos
app.get('/alunos', (req, res) => {
    res.json(alunos);
});

// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});