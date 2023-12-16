//categories dropdown toggler

function toggleDropdown() {
  const dropdownElement = document.getElementsByClassName("categories-dropdown");
  dropdownElement.classList.toggle("active");
}

//carosuel controller

const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

var sectionIndex = 0;

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

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  slider.style.transform = "translate(" + sectionIndex * -100 + "%)";
});

rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
  slider.style.transform = "translate(" + sectionIndex * -100 + "%)";
});
