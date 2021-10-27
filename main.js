'use strict';

const header = document.querySelector(".logo_and_nav");
const backToTopButton = document.getElementById("backToTopBtn");
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("nav");
const logoNav = document.querySelector(".logo_and_nav");
const navIcons = document.querySelectorAll(".fa");
const navLink = document.querySelectorAll('li');

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  };
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


navToggle.addEventListener("click", () => {
  
  nav.classList.toggle("menuOpened");  // mobile nav is unhidden

  logoNav.classList.toggle("logoNavBg"); // background color add behind logo and nav

  switchIcon(navIcons);

})


// cross icon is hidden by default in HTML
function switchIcon(icons) {
  icons.forEach(icon => {  
    if (icon.getAttribute("id") === "hiddenIcon" ) {
      icon.removeAttribute("id", "hiddenIcon");  
    } else {
      icon.setAttribute("id", "hiddenIcon");
    }
  })
}

// clicking a link in navbar closes the mobile nav menu and switches hamburger and cross icons
navLink.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("menuOpened");
    switchIcon(navIcons);
  })
})