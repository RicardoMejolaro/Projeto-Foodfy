const data = require('../file-system/data.json');

//Index Gerenciador
exports.index = (req, res) => {
  return res.render('manager/index', { recipes: data.recipes });
}

exports.show = (req, res) => {
  const { id } = req.params

  const foundRecipe = data.recipes.find((recipe) => {
    return recipe.id == id;
  });

  if (!foundRecipe) return res.send('Instrutor não encontrado!');

  const recipe = {
    ...foundRecipe
  }

  return res.render('manager/show', { recipe });
}
