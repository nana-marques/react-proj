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