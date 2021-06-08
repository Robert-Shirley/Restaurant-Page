function home(that) {
    const homeCard1 = document.createElement('homeCard');
    homeCard1.setAttribute('style', 'white-space: pre;');
  homeCard1.classList.add('homeCard1');
  homeCard1.textContent = "\r\n\r\nWelcome to the most hipster Smoothie and Food joint in the World!\r\n\r\n\r\n\r\n";
  homeCard1.textContent += 'We offer great smoothies made from organic organisms.\r\n\r\n\r\n\r\n';
  homeCard1.textContent += "We're organic and proud of it.";
  that.pageContent.appendChild(homeCard1);
  }

  export default home;