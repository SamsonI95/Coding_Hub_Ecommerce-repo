// Toggle Navbar Logic
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const displayStyle = window
    .getComputedStyle(mobileMenu)
    .getPropertyValue("display");
  if (displayStyle === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
}
