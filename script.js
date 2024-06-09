// Get the navbar
var navbar = document.getElementById("navbar");

// When the user scrolls down, add the "scrolled" class to the navbar
window.onscroll = function() {
  if (window.pageYOffset > 100) { // Adjust the offset as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
