const Recipes = require('../models/Recipes');
const Chefs = require('../models/Chefs');

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
    let { page, limit } = req.query;


    page = page || 1;
    limit = limit || 6;
    let offset = limit * (page - 1);

    
    const params = {
      page,
      limit,
      offset,
      callback(recipes) {
        
        const pagination = {
          total: recipes[0] ? Math.ceil(recipes[0].total / limit) : 0,
          page
        }
        
        return res.render('aplication/revenue', { recipes, pagination });
      }
    }

    Recipes.paginate(params);

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
  },
  chefs(req, res) {
    Chefs.all(function(chefs) {
        return res.render('aplication/chefs', { chefs });
    });
  }
}

