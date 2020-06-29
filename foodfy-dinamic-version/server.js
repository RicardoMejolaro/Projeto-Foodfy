const express = require('express');
const nunjucks = require('nunjucks');

//Importando arquivos com as info das receitas
const revenues = require("./data");

//Iniciando o servidor
const server = express();

//Definindo os arquivos estáticos da aplicação
server.use(express.static('public'));

//Definindo o formato do motor e fotmato das views
server.set('view engine', 'njk');

//Configurações da template engine nunjucks
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

//Rotas
server.get('/', (req, res) => {
  return res.render('index', { revenues });
})

server.get('/sobre', (req, res) => {
  return res.render('about');
})

server.get('/receitas', (req, res) => {
  return res.render('revenue', { revenues });
})

server.get("/receitas/:id", function (req, res) {
  const recipeIndex = req.params.id;

  const recipe = revenues.find( recipe => recipe.id == recipeIndex );

  if(!recipe) {
   return res.send("Receita não encontrada!");
  } 

  return res.render('watch-recipe-details', { recipe })
})

//Definindo a porta da aplicação
server.listen(5000, () => {
  console.log("Server is running!")
})