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
//Post
exports.post = (req, res) => {
  //Validação todos os campos obrigatórios
  const keys = Object.keys(req.body)

  for (const key of keys) {
    if (req.body[key] == "")
      return res.send("Por gentileza preencha todos os campos!")
  }

  let { image, title, author, ingredients, preparation, information } = req.body;

  let id = 1;
  const lastMember = data.members[data.members.length - 1];

  if (lastMember) {
    id = Number(lastMember.id + 1);
  }  

  data.recipes.push({
    id,
    image, 
    title, 
    author, 
    ingredients, 
    preparation, 
    information
  });

  fs.writeFile('file-system/data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return res.send('Erro ao salvar o arquivo!');

    return res.redirect(`admin/receitas/${id}`);
  });

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