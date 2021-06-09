import home from "./home";
import food from "./food";
import drink from "./drinks";
import contact from "./contact";

(function start() {
  let display = {
    activeTab: {
      home: 1,
      smoothies: 0,
      food: 0,
      contact: 0,
    },

    init: function () {
      this.cache();
      this.title();
      this.tabButtons();
      this.content();
      this.bindEvents();
      home(this);
    },

    cache: function () {
      this.wBody = document.getElementById("body");
      this.page = document.getElementById("content");
      this.home = document.getElementsByClassName("home");
      this.smoothies = document.getElementsByClassName("drink");
      this.food = document.getElementsByClassName("food");
      this.contact = document.getElementsByClassName("contactUs");
    },

    bindEvents: function () {
      document
        .getElementById("content")
        .addEventListener("click", this.tabSwitch.bind(this));
    },

    title: function () {
      this.page.classList.add("header");
      this.restaurantName = document.createElement("button");
      this.restaurantName.classList.add("rest-name");
      this.restaurantName.textContent = "Smoothies and Stuff";
      this.page.appendChild(this.restaurantName);
    },

    tabButtons: function () {
      this.homeButton = document.createElement("button");
      this.homeButton.classList.add("home");
      this.homeButton.textContent = "Home";
      this.page.appendChild(this.homeButton);
      this.drinkButton = document.createElement("button");
      this.drinkButton.classList.add("drink");
      this.drinkButton.textContent = "Smoothies";
      this.page.appendChild(this.drinkButton);
      this.foodButton = document.createElement("button");
      this.foodButton.classList.add("food");
      this.foodButton.textContent = "Food";
      this.page.appendChild(this.foodButton);
      this.contactButton = document.createElement("button");
      this.contactButton.classList.add("contactUs");
      this.contactButton.textContent = "Contact Us";
      this.page.appendChild(this.contactButton);
    },

    content: function () {
      this.pageContent = document.createElement("div");
      this.pageContent.classList.add("pageContent");
      this.page.appendChild(this.pageContent);
    },

    tabSwitch: function (event) {
      let classname = event.target.closest("button").className;
      let elems = document.querySelectorAll(".underline");
      [].forEach.call(elems, function (el) {
        el.classList.remove("underline");
      });
      event.target.closest("button").classList.add("underline");
      if (classname === "home") {
        if (this.activeTab.home === 0) {
          this.clearPage();
          this.setActive("home");
          home(this);
        }
      } else if (classname === "food") {
        if (this.activeTab.food === 0) {
          this.clearPage();
          this.setActive("food");
          food(this);
        }
      } else if (classname === "drink") {
        if (this.activeTab.smoothies === 0) {
          this.clearPage();
          this.setActive("smoothies");
          drink(this);
        }
      } else if (classname === "contactUs") {
        if (this.activeTab.contact === 0) {
          this.clearPage();
          this.setActive("contact");
          contact(this);
        }
      }
    },

    setActive: function (selected) {
      this.activeTab.home = 0;
      this.activeTab.smoothies = 0;
      this.activeTab.food = 0;
      this.activeTab.contact = 0;
      this.activeTab[selected] = 1;
    },
    clearPage: function () {
      document
        .querySelectorAll("img")
        .forEach((e) => e.parentNode.removeChild(e));
      document
        .querySelectorAll("homecard")
        .forEach((e) => e.parentNode.removeChild(e));
      document
        .querySelectorAll("foodcard")
        .forEach((e) => e.parentNode.removeChild(e));
      document
        .querySelectorAll("drinkcard")
        .forEach((e) => e.parentNode.removeChild(e));
      document
        .querySelectorAll("contactcard")
        .forEach((e) => e.parentNode.removeChild(e));
    },
  };
  display.init();
})();
