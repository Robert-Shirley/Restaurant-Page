function drink(that) {
    const drinkCard = document.createElement("drinkCard");
    drinkCard.classList.add("drinkCard");
    drinkCard.setAttribute("style", "white-space: pre;");
    for (let i = 0; i < drinkItems.length; i++) {
      const drinkName = document.createElement("h2");
      drinkName.textContent = drinkItems[i].name + "\r\n\r\n";
  
      const imageSRC = document.createElement("img");
      imageSRC.classList.add("imgFood");
      imageSRC.src = drinkItems[i].img;
  
      drinkName.textContent += drinkItems[i].ingredients;
      drinkName.textContent += drinkItems[i].price;
  
      drinkCard.appendChild(imageSRC);
      drinkCard.appendChild(drinkName);
    }
    that.pageContent.appendChild(drinkCard);
  }
  
  const cherrie = {
    name: "The Red Devil",
    img: "images/Cherrie and Banana Smoothie.jpg",
    ingredients: "Organic Cherries, Blueberries, Bananas, Almond Milk",
    price: "\r\n\r\n\r\n$4.99",
  };
  const coffee = {
    name: "Godsent Coffee",
    img: "images/coffee.jpg",
    ingredients: "Organic Kona Blend",
    price: "\r\n\r\n\r\n$2.99",
  };
  const KiwiMango = {
    name: "Hello Sweetness My Old Friend",
    img: "images/Kiwi mango.jpeg",
    ingredients: "Organic Kiwis, Mangoes, Almond Milk",
    price: "\r\n\r\n\r\n$5.99",
  };
  const Strawberry = {
    name: "Try Me, I dare you",
    img: "images/Strawberry Smoothie.jpg",
    ingredients:
      "Organic Raspberries, Blueberries, Strawberries, Almond Milk,\r\nand our special ingredient",
    price: "\r\n\r\n$7.99",
  };
  
  let drinkItems = [cherrie, KiwiMango, Strawberry, coffee];
  
  export default drink;
  