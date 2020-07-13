//Lógica clica no card da página revenue e redireciona para uma nova página
//com os detalhes da receita clicada
const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('click', () => {
    const recipeId = card.getAttribute('id');
    window.location.href = `receitas/${recipeId}`;
  });
}

//Lógica que mostra os esconde os detalhes de ingredientes, modo de preparo e
//informações adicionais da página watch recipe details
const linkView = document.querySelectorAll('div .head a');
const divView = document.querySelectorAll('div .content-recipe-details');

let linkId = 0;
let divId = 0;
for (const link of linkView) {
  link.addEventListener('click', () => {
    linkId = link.getAttribute('id');

    for (const div of divView) {
      divId = div.getAttribute('id')
      const linkSelected = document.querySelector(`a#${divId}`);

      if (linkId == divId) {
        if (div.classList.contains(linkId)) {
          div.classList.remove(linkId);
          linkSelected.innerHTML = "Esconder";
        } else {
          div.classList.add(linkId);
          linkSelected.innerHTML = 'Mostrar';
        }
      } 
    }
  });
}

//Lógica de abertura de página de edição de receita no gerenciador de receitas
const viewRecipes = document.querySelectorAll('.info-card-manager a');

for (const viewRecipe of viewRecipes) {
  viewRecipe.addEventListener('click', () => {
    const recipeId = viewRecipe.getAttribute('id');
    window.location.href = `receitas/${recipeId}`;
  });
}








