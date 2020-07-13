const data = require('../file-system/data.json');

//Index Aplicação
exports.index = (req, res) => {
  return res.render('aplication/index', { recipes: data.recipes });
}
//Página Sobre Aplicação
exports.about = (req, res) => {
  return res.render('aplication/about');
}
//Página Receitas Aplicação
exports.recipes = (req, res) => {
  return res.render('aplication/revenue', { recipes: data.recipes });
}
//Página Detalhes Receita Aplicação
exports.recipe = function (req, res) {
  const recipeIndex = req.params.id;

  const recipe = data.recipes.find( recipe => recipe.id == recipeIndex );

  if(!recipe) {
   return res.send("Receita não encontrada!");
  } 

  return res.render('aplication/watch-recipe-details', { recipe })
}