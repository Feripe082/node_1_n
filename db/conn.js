const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('rel_1_n', 'root', 'senai',{
    host: 'localhost',
    dialect:'mysql'
})

sequelize.authenticate()

.then(()=>{
    console.log('funciona')
})

.catch((err)=>{
    console.error('não funciona',err)
})

module.exports = sequelize