// config/database.js 

const { Sequelize } = require('sequelize'); 

 

const sequelize = new Sequelize('aplicacao_1', 'edu', "12345678" , { 

  username: 'edu',
  password: 12345678,
  database: 'mvc-sequelize',  
  host: 'localhost', 
  dialect: 'mysql', 

}); 

 

module.exports = sequelize; 