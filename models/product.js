// models/product.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        listPrice: DataTypes.FLOAT,
    });

    return Product;
};
