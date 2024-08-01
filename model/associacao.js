const Fabricante = require('./Fabricante')
const Produto = require('./Produto')

Produto.hasMany(Produto,{
    foreignKey: 'codFabricante',
    as: 'produtos',
    onDelete:'CASCADE'
})

Produto.belongsTo(Fabricante,{
    foreignKey:'codFabricante',
    as:'fabricante',
    allowNull:false
})

module.exports = (Fabricante, Produto)