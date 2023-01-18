const Sequelize=require('sequelize')
const db = require('./connectionDB')

const User = db.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false,
    }
})
//Cria a tabela caso não tenha
User.sync();

module.exports = User;