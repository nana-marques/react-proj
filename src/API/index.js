const express = require('express')

const app = express();
const User = require('./model/model')

app.use(express.json())

app.get("/api", async (req,res)=>{
    
    return res.send("Página Inicial, FUNCIONANDO!");

});

app.post('/add', async (req,res)=>{

    await User.create(req.body)
   .then(()=>{
    return res.json({
        erro:false,
        mensagem:"Usuario cadastrado com sucesso!"
    })
   }).catch(()=>{
    return res.status(400).json({
        erro:true,
        mensagem:"Erro:Usuario NÃO cadastrado com sucesso!"
        });
   });
})

app.listen(3000,()=>{
    console.log('API OK!')
})