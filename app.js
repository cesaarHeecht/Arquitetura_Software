// app.js
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const productController = require('./controllers/productController');
const ProductModel = require('./models/product');

const app = express();
const port = 5000;

app.use(express.json());

// Configuração do banco de dados
const dbConfig = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'Pichau',
  password: '12345678',
  database: 'mvc_sequelize'
};

// Cria uma instância do Sequelize e do modelo do produto
const sequelize = new Sequelize(dbConfig);
const Product = ProductModel(sequelize, DataTypes);

// Adiciona as rotas
app.post('/products', async (req, res) => productController.createProduct(req, res, Product));
app.get('/products/:id', async (req, res) => productController.getProductById(req, res, Product));
app.get('/products', async (req, res) => productController.getAllProducts(req, res, Product));

// Inicia o servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincroniza o modelo do produto com o banco de dados e inicia o servidor
    sequelize.sync().then(() => {
      app.listen(port, () => {
        console.log(`Servidor está rodando na porta ${port}`);
      });
    });
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });
