// controllers/productController.js
const { product }  = require('../models/product');

module.exports = {
  // Gravar os dados do produto no banco de dados
  async createProduct(req, res) {
    try {
      const { name, category, listPrice } = req.body;
      const product = await Product.create({ name, category, listPrice });
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar o produto' });
    }
  },

  // Consultar produtos a partir do ID
  async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar o produto' });
    }
  },

  // Consultar todos os produtos na base de dados
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os produtos' });
    }
  },
};
