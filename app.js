/*//categories dropdown toggler
const select = document.querySelectorAll(".nav-right");
const ctgDrop = document.querySelector(".categories-dropdown");

//show & hide options list
select.addEventListener("click", () => {
  ctgDrop.toggle("active");
  select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  
});*/

//user profile dropdown function
function toggleDropdown() {
  const dropdownList = document.querySelector(".categories-dropdown");
  dropdownList.style.display =
    dropdownList.style.visibility === "visible" ? "hidden" : "visible";
}

/*// Ensures the dropdown is closed when the page loads
window.addEventListener("load", function () {
  var dropdown = document.querySelector(".categories-dropdown");
  dropdown.style.display = "none";
});*/

