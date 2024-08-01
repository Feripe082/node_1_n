const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const Fabricante = require('./model/Fabricante')
const Produto = require ('./model/Produto')

const PORT = 3000
const hostname = 'localhost'
//---------------------------------------------------
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
//---------------------------------------------------

app.get('/fabricante', async(req,res)=>{
    const valores = req.query
    console.log(valores)

    try{
        const pesq = await Fabricante.findOne({where:{marca: valores.marca}, raw:true})
        if(pesq === null){
            console.log('Nenhum dado encontrado')
            res.status(404).json({message:'Dados não encontrados'})
        }else if(pesq.marca == valores.marca){
            console.log(pesq.marca)
            res.status(200).json(pesq.marca)

        }
    }catch(err){
        console.error('Deu errado',err)
        res.status(500).json({message:'Deu errado'})
    }
})

app.post('/fabricante', async(req,res)=>{
    const valores = req.body 
    console.log(valores)
    res.status(200).json({message:'Valores recebidos'})

    try{
    const pesq = await Fabricante.create(valores, {raw:true})
    console.log(valores)
    res.status(201).json(pesq)
    }catch(err){
        console.error('Deu errado',err)
        res.status(500).json({message:'Deu errado'})
    }
})


app.get('/', (req, res)=>{
    console.log('Rodando')
    res.status(200).json({message:'Rodando'})
})

//---------------------------------------------------

conn.sync()

.then(()=>{
    app.listen(PORT,hostname,()=>{
        console.log(`Rodando em ${PORT}:${hostname}`)
    })
})

.catch((err)=>{
    console.error('deu err',err)
})