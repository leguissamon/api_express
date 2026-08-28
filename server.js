import express from 'express';

const app = express();
const PORT = 3000;

const usuarios = [
    {id:1, nome: 'pedro'},
    {id:2, nome: 'sarah'}
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);

});

app.post('/usuario', (req, res) =>{
const novoUsuario = {
    id: usuarios.length +1,
    nome: 'joao'
};

usuarios.push(novoUsuario);
res.status(201).json(usuarios);

})

app.listen(PORT, () =>{
    console.log('servidor rodando em http://localhost:${PORT}');

});