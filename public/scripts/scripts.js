//Lógica link selecionado
const currentPage = location.pathname;
const menuItems = document.querySelectorAll('header .links a');

  for (const item of menuItems) {
    if (currentPage.includes(item.getAttribute('href'))) {
      item.classList.add("active")
    }
  }

const menuManager = document.querySelectorAll('header .links-manager a');

  for (const item of menuManager) {
    if (currentPage.includes(item.getAttribute('href'))) {
      item.classList.add("active")
    }
  }


//Lógica clica no card da página revenue e redireciona para uma nova página
//com os detalhes da receita clicada
const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('click', () => {
    const recipeId = card.getAttribute('id');
    window.location.href = `receita/${recipeId}`;
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

//Lógica confirmação de deletar
const formDelete = document.querySelector("#form-delete");

if (formDelete) {
  formDelete.addEventListener("submit", (event) => {
    const confirmation = confirm("Deseja realmente deletar?");
    if(!confirmation) {
      event.preventDefault();
    }
  });
}

//Função de adicionar novo input nos ingredients
function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");

  // Realiza um clone do último preparo adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

const clickIngredient = document.querySelector(".add-ingredient")

if (clickIngredient) {
  clickIngredient.addEventListener("click", addIngredient);
}
  

//Função de adicionar novo input nos itens modo de preparo
function addPreparo() {
  const preparos = document.querySelector("#preparos");
  const fieldContainer = document.querySelectorAll(".preparo");

  // Realiza um clone do último preparo adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  preparos.appendChild(newField);
}

const clickPreparo = document.querySelector(".add-preparo")
if (clickPreparo) {
  clickPreparo.addEventListener("click", addPreparo);
}
  









