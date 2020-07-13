const express = require('express');
const routes = express.Router();
const recipes = require('../controllers/revenue-aplication');


//Rotas Aplicação
routes.get('/', recipes.index);
routes.get('/sobre', recipes.about);
routes.get('/receitas', recipes.recipes);
routes.get("/receitas/:id", recipes.recipe);

module.exports = routes;