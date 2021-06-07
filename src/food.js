function food(that){
  console.log ('food');
  const foodCard1 = document.createElement('foodCard');
  foodCard1.classList.add('foodCard1');
  foodCard1.textContent = 'Hmm';
  that.pageContent.appendChild(foodCard1);
}

export default food;