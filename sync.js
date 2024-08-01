const conn = require('./db/conn')
const {Produto, Fabricante} = require('./model/associacao')

async function syncDataBase(){
    try{
        await conn.sync({force:true})
        console.log('funcionou')
    }catch(err){
        console.error('deu erro',err)
    }finally{
        console.log('fechando banco de dados')
    }
}

syncDataBase()