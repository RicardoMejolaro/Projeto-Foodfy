const Recipes = require('../models/Recipes');

module.exports = {
  index(req, res) {
      let recipes = [];
  
      Recipes.all(function(recipesNew) {
        for (let i = 0; i < 6; i++) { 
          recipes.push(recipesNew[i])
        }   
        return res.render('aplication/index', { recipes });
      });
  },
  about(req, res) {
    return res.render('aplication/about');
  },
  recipes(req, res) {
    Recipes.all(function(recipes) {
       return res.render('aplication/revenue', { recipes });
    });
  },
  recipe(req, res) {
    Recipes.find(req.params.id, (recipe) => {
      if (!recipe) return res.send('Receita não localizada!');

      return res.render('aplication/watch-recipe-details', { recipe })
    });   
  
  },
  search(req, res) {
    const { filter } = req.query;

      Recipes.findBy(filter, (recipes) => {
          return res.render('aplication/search', {recipes, filter })
      });
  }
}

