// app.js
const express = require('express');
const app = express();
const port = 3307;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Importa o controller
const productController = require('./controllers/productController');

// Rota para criar um produto
app.post('/products', async (req, res) => productController.createProduct(req, res));

// Rota para buscar um produto por ID
app.get('/products/:id', async (req, res) => productController.getProductById(req, res));

// Rota para buscar todos os produtos
app.get('/products', async (req, res) => productController.getAllProducts(req, res));

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
