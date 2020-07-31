const { date } = require('../../lib/utils');
const Recipes = require('../models/Recipes');

module.exports = {
  index(req, res) {  
    Recipes.all(function(recipes) {
      return res.render('manager/recipes/index', { recipes });
    });
  },
  create(req, res) {
    Recipes.chefsSelectOptions((options) => {
      return res.render('manager/recipes/create', { chefOptions: options });
    });
    
  },
  post(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)
  
    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

    const { chef_id, image, title, ingredients, preparation, information } = req.body;

    const data = [
      chef_id,
      image,
      title,
      ingredients,
      preparation,
      information,
      date(Date.now()).iso
    ];
    
    Recipes.create(data, (recipe) => {
      return res.redirect(`/foodfy/admin/receita/${recipe.id}`);
    });
  
  },
  show(req, res) {
    Recipes.find(req.params.id, (recipe) => {
      if (!recipe) return res.send('Receita não localizada!');

      return res.render('manager/recipes/show', { recipe });
    });   
  },
  edit(req, res) {
    Recipes.find(req.params.id, (recipe) => {
      if (!recipe) return res.send('Receita não localizada!');

      Recipes.chefsSelectOptions((options) => {
        return res.render('manager/recipes/edit', { recipe, chefOptions: options });;
      });

    });   
  },
  put(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

    const { chef_id, image, title, ingredients, preparation, information, id } = req.body;

    const data = [
      chef_id,
      image,
      title,
      ingredients,
      preparation,
      information,
      id
    ];

    Recipes.update(data, () => {
      return res.redirect(`/foodfy/admin/receita/${id}`);
    });
  },
  delete(req, res) {
    Recipes.delete(req.body.id, () => {
      return res.redirect('/foodfy/admin/receitas');
    });
  }
}