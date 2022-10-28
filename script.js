const $cards = document.querySelectorAll('.js-card');
const $menu = document.querySelector('.js-menu');

$menu.addEventListener('click', ({ target }) => {
  if (target.classList.value.includes('js-button')) {
    activateCard(target.parentElement);
  }
});

function activateCard(el) {
  const planet = el.dataset.planetName;
  $cards.forEach(($card) => {
    $card.classList.remove('is-active');
    if ($card.classList.value.includes(planet)) {
      $card.classList.add('is-active');
    }
  });
}
