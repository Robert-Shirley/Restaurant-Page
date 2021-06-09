function food(that) {
  const foodCard = document.createElement('foodCard');
  foodCard.classList.add('foodCard');
  foodCard.setAttribute('style', 'white-space: pre;');
  for (let i = 0; i < foodItems.length; i++) {
    const foodName = document.createElement('h2');
    foodName.textContent = foodItems[i].name + '\r\n\r\n';

    const imageSRC = document.createElement('img');
    imageSRC.classList.add('imgFood');
    imageSRC.src = foodItems[i].img;

    foodName.textContent += foodItems[i].ingredients;
    foodName.textContent += foodItems[i].price;

    foodCard.appendChild(imageSRC);
    foodCard.appendChild(foodName);
  }
  that.pageContent.appendChild(foodCard);
}

const bagel = {
  name: 'Bagel',
  img: 'images/Bagel.jpeg',
  ingredients: 'Whole Wheat, Garlic, Sesame',
  price: '\r\n\r\n\r\n$4.99'
};
const muffin = {
  name: 'Chocolate Chip Muffin',
  img: 'images/muffin.jpg',
  ingredients: 'Chocolate Chips, Whole Grain Flour, Almond Milk',
  price: '\r\n\r\n\r\n$3.99'
};
const Veggies = {
  name: 'Veggie Platter',
  img: 'images/Veggie Platter.jpg',
  ingredients:
    'Carrots, Tomatoes, Cucumber, Potatoes,\r\nEggplant, Broccoli, Cauliflower',
  price: '\r\n\r\n$9.99'
};
const FishOil = {
  name: 'Fish Oil Pills',
  img: 'images/Fish Oil.jpg',
  ingredients:
    'Fish Oil, and IDK? \r\nWho even really knows man. \r\nYou know what im sayin',
  price: '\r\n$19.99'
};
const Dirt = {
  name: 'Whole Food Organic Dirt',
  img: 'images/dirt.jpeg',
  ingredients: 'Organic Dirt,\r\nstraight from the dirt pile out back',
  price: '\r\n\r\n$49.99'
};

let foodItems = [bagel, muffin, Veggies, FishOil, Dirt];

export default food;