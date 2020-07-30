const { date } = require('../../lib/utils');
const Recipes = require('../models/Recipes');

module.exports = {
  index(req, res) {  
    Recipes.all(function(recipes) {
      return res.render('manager/recipes/index', { recipes });
    });
  },
  create(req, res) {
    return res.render('manager/recipes/create');
  },
  post(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)
  
    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

    const { chef_id, image, title, ingredients, preparation, information, author } = req.body;

    const data = [
      chef_id,
      image,
      title,
      ingredients,
      preparation,
      information,
      author,
      date(Date.now()).iso
    ];
    
    Recipes.create(data, (recipe) => {
      return res.redirect(`/admin/receitas/${recipe.id}`);
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

      return res.render('manager/recipes/edit', { recipe });
    });   
  },/*
  put(req, res) {
    //Validação todos os campos obrigatórios
    const keys = Object.keys(req.body)

    for (const key of keys) {
      if (req.body[key] == "")
        return res.send("Por gentileza preencha todos os campos!")
    }

    const { chef_id, image, title, ingredients, preparation, information, author, id } = req.body;
    console.log(ingredients)

    const data = [
      chef_id,
      image,
      title,
      ingredients,
      preparation,
      information,
      author,
      id
    ];

    console.log(ingredients)
    
    Recipes.update(data, () => {
      return res.redirect(`/admin/receitas/${id}`);
    });
  },*/
}








/*
//Delete
exports.delete = (req, res) => {
  const { id } = req.body

  const filteredRecipes = data.recipes.filter((recipe) => {
    return recipe.id != id;
  });

  data.recipes = filteredRecipes;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect('/admin/receitas');

  });
}*/