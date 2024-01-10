//arrow toggle control
const arrowElement = document.getElementById("myArrow");

function flipArrow() {
  arrowElement.classList.toggle("flipped");
}

// Bind the flipArrow function to a click event or another trigger
document.getElementById("myArrow").addEventListener("click", flipArrow);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".fa-angle-down")) {
    var dropdowns = document.getElementsByClassName("categories-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//carosuel controller
const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector(".carousel-controls ul");

var sectionIndex = 0;
// carousel indicator controller
document
  .querySelectorAll(".carousel-controls li")
  .forEach(function (indicator, ind) {
    indicator.addEventListener("click", function () {
      sectionIndex = ind;
      document
        .querySelector(".carousel-controls .selected")
        .classList.remove("selected");
      indicator.classList.add("selected");
      slider.style.transform = "translate(" + sectionIndex * -100 + "%)";
    });
  });

// carousel arrows controller

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document
    .querySelector(".carousel-controls .selected")
    .classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -100 + "%)";
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
  document
    .querySelector(".carousel-controls .selected")
    .classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -100 + "%)";
});

//Product card carousel controller

const cardSlider = document.querySelector(".item-carousel-container-slider");
const rightCardSlider = document.querySelector(
  ".right-item-carousel-container-slider"
);
const cardLeftArrow = document.querySelector(".circle-arrow-left");
const cardRightArrow = document.querySelector(".circle-arrow-right");
const focusedIndicators = document.querySelector(".left-panel-nav-bar");

var cardSectionIndex = 0;
var rightCardSectionIndex = 0;

// Product card carousel focused controller

document
  .querySelectorAll(".left-panel-nav-bar a")
  .forEach(function (highlited, hgl) {
    highlited.addEventListener("click", function () {
      cardSectionIndex = hgl;
      document
        .querySelector(".left-panel-nav-bar .highlighted")
        .classList.remove("highlighted");
      highlited.classList.add("higlighted");
      cardSlider.style.transform =
        "translate(" + cardSectionIndex * -100 + "%)";
    });
  });

// Product card carousel arrows controller

cardLeftArrow.addEventListener("click", function () {
  cardSectionIndex = cardSectionIndex > 0 ? cardSectionIndex - 1 : 0;
  document
    .querySelector(".left-panel-nav-bar .highlighted")
    .classList.remove("highlighted");
  focusedIndicators.children[cardSectionIndex].classList.add("highlighted");
  cardSlider.style.transform = "translate(" + cardSectionIndex * -100 + "%)";
  rightCardSlider.style.transform =
    "translate(" + cardSectionIndex * -100 + "%)";
});

cardRightArrow.addEventListener("click", function () {
  cardSectionIndex = cardSectionIndex < 1 ? cardSectionIndex + 1 : 1;
  document
    .querySelector(".left-panel-nav-bar .highlighted")
    .classList.remove("highlighted");
  focusedIndicators.children[cardSectionIndex].classList.add("highlighted");
  cardSlider.style.transform = "translate(" + cardSectionIndex * -100 + "%)";
  rightCardSlider.style.transform =
    "translate(" + cardSectionIndex * -100 + "%)";
});
