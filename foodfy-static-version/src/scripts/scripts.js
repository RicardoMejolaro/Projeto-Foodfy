const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');
const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('click', () => {
    const srcImage = card.querySelector('img').getAttribute('src');
    const titleRecipe = card.querySelector('span').innerText;
    const authorRecipe = card.querySelector('p').innerText;

    modalOverlay.classList.add('active');

    modalContent.querySelector('img').src = srcImage;
    modalContent.querySelector('span').innerHTML = titleRecipe;
    modalContent.querySelector('p').innerHTML = authorRecipe;
  })
  
}

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');

  modalContent.querySelector('img').src = "";
  modalContent.querySelector('span').innerHTML = "";
  modalContent.querySelector('p').innerHTML = "";
});
