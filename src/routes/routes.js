const express = require('express');
const routes = express.Router();
const recipes = require('../../src/app/controllers/recipes-aplication');
const recipesManager = require('../../src/app/controllers/recipes-manager');
const chefsManager = require('../../src/app/controllers/chefs-manager');


//Rotas Aplicação
routes.get('/', (req, res) => {
  res.redirect('/foodfy')
})
routes.get('/foodfy', recipes.index);
routes.get('/foodfy/sobre', recipes.about);
routes.get('/foodfy/receitas', recipes.recipes);
routes.get('/foodfy/receita/:id', recipes.recipe);
routes.get('/foodfy/search', recipes.search);
routes.get('/foodfy/chefs', recipes.chefs);

//Rotas Administrador da aplicação - Receitas
routes.get("/foodfy/admin/receitas", recipesManager.index); // Mostrar a lista de receitas
routes.get("/foodfy/admin/receita/create", recipesManager.create); // Cadastrar nova receita
routes.get("/foodfy/admin/receita/:id", recipesManager.show); // Exibir detalhes de uma receita
routes.get("/foodfy/admin/receita/:id/edit", recipesManager.edit); // Mostrar formulário de edição de receita
routes.post("/foodfy/admin/receita", recipesManager.post);//Criar uma receita
routes.put("/foodfy/admin/receita", recipesManager.put); // Editar uma receita
routes.delete("/foodfy/admin/receita", recipesManager.delete); // Deletar uma receita

//Rotas Administrador da aplicação -Chefs
routes.get("/foodfy/admin/chefs", chefsManager.index); // Mostrar a lista de chefs
routes.get("/foodfy/admin/chef/create", chefsManager.create); // Cadastrar novo chef
routes.get("/foodfy/admin/chef/:id", chefsManager.show); // Exibir detalhes do chef
routes.get("/foodfy/admin/chef/:id/edit", chefsManager.edit); // Mostrar formulário de edição de chef
routes.post("/foodfy/admin/chef", chefsManager.post);//Criar novo chef
routes.put("/foodfy/admin/chef", chefsManager.put); // Editar um chef
routes.delete("/foodfy/admin/chef", chefsManager.delete); // Deletar um chef

module.exports = routes;