const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mvc_sequelize', 'Pichau', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
});

// Testar a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Falha ao conectar ao banco de dados:', error);
  });

module.exports = sequelize;
