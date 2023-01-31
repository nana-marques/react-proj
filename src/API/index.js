const bodyParser = require('body-parser');
const express = require('express')
const cors = require('cors');

const app = express();
const User = require('./model/model')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());



app.get("/api", async (req, res) => {

    return res.send("Página Inicial, FUNCIONANDO!");

});

app.post('/login', async (req,res)=>{
    console.log(req.body)
    var query = await User.findAll({
        where: {
            email: req.body.email
          }
    })
    if(query.length > 0){
        if(query[0].dataValues.password == req.body.password){
            console.log('chegou aqui!')
            return res.status(200).json({
                id:query[0].dataValues.id,
                name:query[0].dataValues.name
            })
        }
    }else{
        return res.status(420).json(
            {msg:'email não existe'}
        )
    }
})


app.post('/add', async (req, res) => {
    console.log(req.body.email);
    var query = await User.findAll({
        // attributes: ['email'],
        where: {
            email: req.body.email
          }
      });
    
    if(query.length > 0 ){
        return res.status(435).json({
            msg:'email já existe no sistema.'
        })
    }else{
        await User.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuario cadastrado com sucesso!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro!"
            });
        })
    }
})

app.post('/test', (req, res) => {
    console.log(req.body)
})

app.listen(3030, () => {
    console.log('API OK!')
})