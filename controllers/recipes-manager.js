const fs = require("fs");
const data = require('../file-system/data.json');

//Index
exports.index = (req, res) => {
  return res.render('manager/index', { recipes: data.recipes });
}
//Create
exports.create = (req, res) => {
  return res.render('manager/create');
}
//Post
exports.post = (req, res) => {
  //Validação todos os campos obrigatórios
  const keys = Object.keys(req.body)

  for (const key of keys) {
    if (req.body[key] == "")
      return res.send("Por gentileza preencha todos os campos!")
  }

  let id = 1;
  const lastRecipe = data.recipes[data.recipes.length - 1];

  if (lastRecipe) {
    id = Number(lastRecipe.id + 1);
  }

  data.recipes.push({
    id,
    ...req.body
  });

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar o arquivo!');

    return res.redirect(`/admin/receitas/${id}`);
  });

}
//Show
exports.show = (req, res) => {
  const { id } = req.params

  const foundRecipe = data.recipes.find((recipe) => {
    return recipe.id == id;
  });

  if (!foundRecipe) return res.send('Receita não encontrada!');

  const recipe = {
    ...foundRecipe
  }

  return res.render('manager/show', { recipe });
}
//Edit
exports.edit = (req, res) => {
  const { id } = req.params

  const foundRecipe = data.recipes.find((recipe) => {
    return recipe.id == id;
  });

  if (!foundRecipe) return res.send('Receita não encontrada!');

  const recipe = {
    ...foundRecipe,
  }

  return res.render('manager/edit', { recipe });
}
//Put
exports.put = (req, res) => {
  const { id } = req.body;
  let index = 0;

  const foundRecipe = data.recipes.find((recipe, foundIndex) => {
    if (recipe.id == id) {
      index = foundIndex;

      return true
    }
  });

  if (!foundRecipe) return res.send('Receita não encontrada!');

  const recipe = {
    ...foundRecipe,
    ...req.body,
    id: Number(req.body.id)
  }

  data.recipes[index] = recipe;

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar dados no arquivo!');

    return res.redirect(`/admin/receitas/${id}`);
  });
}
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
}