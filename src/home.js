function home(that) {
    const homeCard1 = document.createElement('homeCard');
    homeCard1.setAttribute('style', 'white-space: pre;');
  homeCard1.classList.add('homeCard1');
  homeCard1.textContent = "\r\n\r\nWelcome to the most hipster Smoothie and Food joint in the World!\r\n\r\n\r\n\r\n";
  homeCard1.textContent += 'We offer great smoothies made from organic organisms.\r\n\r\n\r\n\r\n';
  homeCard1.textContent += "We're organic and proud of it.";
  that.pageContent.appendChild(homeCard1);
  let pic1 = document.createElement('img');
  pic1.src = "images/360_F_223081950_xpv1HmEJAyxxhWFXS4d0djt33fXyUzhH.jpg";
  pic1.setAttribute("height", "768");
  pic1.setAttribute("width", "1024");
  pic1.setAttribute("alt", "test");
  that.pageContent.appendChild(pic1);
  }

  export default home;
  