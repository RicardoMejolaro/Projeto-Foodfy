const express = require('express');
const routes = express.Router();
const recipes = require('../controllers/recipes-aplication');
const recipesManager = require('../controllers/recipes-manager');


//Rotas Aplicação
routes.get('/', recipes.index);
routes.get('/sobre', recipes.about);
routes.get('/receitas', recipes.recipes);
routes.get("/receitas/:id", recipes.recipe);

//Rotas Administrador da aplicação
routes.get("/admin/receitas", recipesManager.index); // Mostrar a lista de receitas

module.exports = routes;