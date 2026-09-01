import express from 'express';
const app = express();
const PORT = 3000;

const usuarios = [
    { id: 1, nome: 'Pedro' },
    { id: 2, nome: 'Sarah' }
];

const produtos = [
    { id: 1, nome: 'Alcool', categoria: 'higiene' },
    { id: 2, nome: 'Shampoo', categoria: 'higiene' },
    { id: 3, nome: 'guarda-roupa', categoria: 'moveis' },
    { id: 4, nome: 'sofá', categoria: 'moveis' }
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);

});

app.post('/usuario', (req, res) => {

    const novoUsuario = {
        id: usuarios.length + 1,
        nome: 'João'
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.get('/produtos', (req, res) => {
    const { categoria } = req.query;

    if (!categoria) {
        return res.json(produtos);
    }

    const produtosFiltrados = produtos.filter(p => p.categoria === categoria);
    res.json(produtosFiltrados);
});

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado' });
    }

    res.json(produto);
});

app.listen(PORT, () => {
    console.log(
        'Servidor rodando em http://localhost:${PORT}'
    );
});
