// controllers/productController.js
const { Product } = require('../models/product');

module.exports = {
  async createProduct(req, res, ProductModel) {
    try {
      const { name, category, listPrice } = req.body;
      const product = await ProductModel.create({ name, category, listPrice });

      return res.status(201).json(product); // 201 Created
    } catch (error) {
      console.error(error);

      // Verifica se é um erro de validação do Sequelize
      if (error.name === 'SequelizeValidationError') {
        return res.status(400).json({ error: 'Erro de validação ao criar o produto', details: error.errors });
      }

      return res.status(500).json({ error: 'Erro ao criar o produto', details: error.message });
    }
  },

  async getProductById(req, res, ProductModel) {
    try {
      const { id } = req.params;
      const product = await ProductModel.findByPk(id);

      if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      return res.json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar o produto', details: error.message });
    }
  },

  async getAllProducts(req, res, ProductModel) {
    try {
      const products = await ProductModel.findAll();
      return res.json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar os produtos', details: error.message });
    }
  },
};

