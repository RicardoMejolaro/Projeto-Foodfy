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
routes.get("/admin/receitas/create", recipesManager.create); // Cadastrar nova receita
routes.get("/admin/receitas/:id", recipesManager.show); // Exibir detalhes de uma receita
routes.get("/admin/receitas/:id/edit", recipesManager.edit); // Mostrar formulário de edição de receita

routes.post("/admin/receitas", recipesManager.post);//Criar uma receita
routes.put("/admin/receitas", recipesManager.put); // Editar uma receita

module.exports = routes;