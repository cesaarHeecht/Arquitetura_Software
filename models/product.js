// models/product.js
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      listPrice: DataTypes.FLOAT,
    });
  
    return Product;
  };
  