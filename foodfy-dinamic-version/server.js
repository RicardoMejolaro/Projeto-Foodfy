const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes/routes');
const methodOverride = require('method-override');

//Importando arquivos com as info das receitas
const revenues = require("./file-system/data");

//Iniciando o servidor
const server = express();server.use(express.urlencoded({ extended: true}));
//Definindo os arquivos estáticos da aplicação
server.use(express.static('public'));
//Configurando método override
server.use(methodOverride('_method'));
//Utilizando as rotas externas
server.use(routes);

//Definindo o formato do motor e fotmato das views
server.set('view engine', 'njk');

//Configurações da template engine nunjucks
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

//Definindo a porta da aplicação
server.listen(5000, () => {
  console.log("Server is running!")
})