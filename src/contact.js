function contact(that) {
    const contactCard = document.createElement('contactCard');
    contactCard.setAttribute('style', 'white-space: pre;');
    contactCard.classList.add('contactCard');
    contactCard.textContent = "\r\nHours: Mon-Sat: 7am-4pm\r\n\r\n";
    contactCard.textContent += 'Address: 69 Hippie Hill\r\nSan Francisco, CA 94117\r\n\r\n';
    contactCard.textContent += 'Phone: 867-5309\r\n\r\n';
    contactCard.textContent += "Email: helloworld@helloworld.com\r\n\r\n";
  that.pageContent.appendChild(contactCard);
  let map1 = document.createElement('img');
  map1.classList.add('map');
  map1.src = "images/map.png";
  map1.setAttribute("alt", "test");
  that.pageContent.appendChild(map1);
  }

  export default contact;
  