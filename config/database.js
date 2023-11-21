// config/database.js 
const { Sequelize } = require('sequelize'); 
const sequelize = new Sequelize('mvc_sequelize', 'Pichau', "29032004eC!", { 

  host: 'localhost', 
  dialect: 'mysql', 

}); 

 sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
 }).catch(function(erro){
    console.log("Falha ao seu conectar" + erro)
 })

module.exports = sequelize; 