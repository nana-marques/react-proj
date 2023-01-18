const Sequelize = require('Sequelize')
// const db= new Sequelize('u316289084_teste','u316289084_guilhermeCardo','5t?EPMh!irZ',{
//     host:'82.180.153.52',
//     dialect: 'mysql'
// })

const db= new Sequelize('teste','root','',{
    host:'localhost',
    dialect: 'mysql'
})   


db.authenticate().then(()=>{
    console.log('conecto')
}).catch(()=>{
    console.log('nao conecto')
})
module.exports = db;