const express = require('express');
const routes = express.Router();
const recipes = require('../../src/app/controllers/recipes-aplication');
const recipesManager = require('../../src/app/controllers/recipes-manager');
const chefsManager = require('../../src/app/controllers/chefs-manager');


//Rotas Aplicação
routes.get('/', recipes.index);
routes.get('/sobre', recipes.about);
routes.get('/receitas', recipes.recipes);
routes.get("/receitas/:id", recipes.recipe);

//Rotas Administrador da aplicação - Receitas
routes.get("/admin/receitas", recipesManager.index); // Mostrar a lista de receitas
routes.get("/admin/receitas/create", recipesManager.create); // Cadastrar nova receita
routes.get("/admin/receitas/:id", recipesManager.show); // Exibir detalhes de uma receita
routes.get("/admin/receitas/:id/edit", recipesManager.edit); // Mostrar formulário de edição de receita
routes.post("/admin/receitas", recipesManager.post);//Criar uma receita
routes.put("/admin/receitas", recipesManager.put); // Editar uma receita
routes.delete("/admin/receitas", recipesManager.delete); // Deletar uma receita

//Rotas Administrador da aplicação -Chefs
routes.get("/admin/chefs", chefsManager.index); // Mostrar a lista de chefs
routes.get("/admin/chefs/create", chefsManager.create); // Cadastrar novo chef
routes.get("/admin/chefs/:id", chefsManager.show); // Exibir detalhes do chef
routes.get("/admin/chefs/:id/edit", chefsManager.edit); // Mostrar formulário de edição de chef

module.exports = routes;