console.log('hello there, Obiwan');

(function init() {
  let page = document.getElementById('content');
  page.classList.add('header');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('rest-name');
  restaurantName.textContent = 'Smoothies and Stuff';
  page.appendChild(restaurantName);

  const selectMenu = document.createElement('h2');
  selectMenu.classList.add('buttonMenu');
  selectMenu.textContent = 'Home' + 'Food' + 'Smoothies' + 'Contact us';
  page.appendChild(selectMenu);
})();
