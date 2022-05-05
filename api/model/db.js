const {Sequelize} = require('sequelize');
const connection = new Sequelize('fisioterapia', 'root', '@Python123', {dialect: 'mysql', host: 'localhost'});
 
module.exports = connection;