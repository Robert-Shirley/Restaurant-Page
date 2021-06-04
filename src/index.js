console.log('hello there, obiwan');


(function init(){
let page = document.getElementById('content');
page.classList.add('header');

const restaurantName = document.createElement('h1');
restaurantName.classList.add('rest-name');
restaurantName.textContent = 'Smoothies and Stuff'
page.appendChild(restaurantName);

})();