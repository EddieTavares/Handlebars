const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

const bodyParser = require('body-parser');
const Resumos = require('./Resumos');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/css', express.static('views/layouts/css'));

app.get('/',
    function(req, res){
        Resumos.findAll()
        .then(
            function(resumos){
                res.render("home", {resumos:resumos})
            }            
        )
    }
);

app.get('/cad',
    function(req, res){
        res.render("formulario");
    }
);

app.post('/add',
    function(req, res){
        Resumos.create({
            titulo: req.body.titulo,
            resumo: req.body.resumo
        }).then(
            function(){res.redirect("/")}
        ).catch(
            function(){res.send('Erro ao cadastrar')}
        );  
    }
);

app.engine('handlebars', engine({defaultLayout: "main"}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.listen(8081,
    function(){console.log('Servidor rodando!')}
);