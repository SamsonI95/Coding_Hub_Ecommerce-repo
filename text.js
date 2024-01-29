document.addEventListener("DOMContentLoaded", function() {
  // JavaScript code

// Select the banner elements
const bannerContainer = document.getElementById("bannerContainer");
const bannerRightBtn = document.getElementById("bannerRightBtn");
const bannerLeftBtn = document.getElementById("bannerLeftBtn");
const bannerItems = document.getElementById("bannerItems");
const bannerShowBtns = document.getElementById("bannerShowBtns");

// Get the number of banner items and show buttons
let bannerCount = bannerItems.children.length;
let showBtnCount = bannerShowBtns.children.length;

// Create a variable to store the index of the current banner item and show button
let currentIndex = 0;

function updateBannerShowBtns() {
  bannerShowBtns.innerHTML = "";
  for (let i = 0; i < bannerCount; i++) {
    const btn = document.createElement("div");
    btn.className = "banner-show-btn";
    btn.addEventListener("click", () => showBanner(i));
    bannerShowBtns.appendChild(btn);
  }
}

// Function to calculate the number of banners
function calculateBannerCount() {
  bannerCount = bannerItems.children.length;
  updateBannerShowBtns();
}

// Call the function initially and whenever banners are added or removed dynamically
calculateBannerCount();

// Create a function to update the active banner item and show button
function updateBanner() {
  // Remove the active class from the previous banner item and show button
  bannerItems.children[currentIndex].classList.remove("active");
  bannerShowBtns.children[currentIndex].classList.remove("active");

  // Update the index of the current banner item and show button
  currentIndex = (currentIndex + 1) % bannerCount;

  // Add the active class to the current banner item and show button
  bannerItems.children[currentIndex].classList.add("active");
  bannerShowBtns.children[currentIndex].classList.add("active");

  // Update the transform property of the banner items container
  bannerItems.style.transform = `translateX(-${currentIndex * 20}%)`;
}

// Create a variable to store the timer id
let timerId = null;

// Create a function to start the timer
function startTimer() {
  // Set the timer interval to 5 seconds
  timerId = setInterval(updateBanner, 5000);
}

// Create a function to stop the timer
function stopTimer() {
  // Clear the timer interval
  clearInterval(timerId);
}

// Add an event listener to the banner right button
bannerLeftBtn.addEventListener("click", function () {
  // Stop the timer
  stopTimer();

  // Update the banner
  updateBanner();

  // Start the timer
  startTimer();

  // Toggle the clicked class
  bannerContainer.classList.add("clicked");
});

// Add an event listener to the banner left button
bannerRightBtn.addEventListener("click", function () {
  // Stop the timer
  stopTimer();

  // Remove the active class from the previous banner item and show button
  bannerItems.children[currentIndex].classList.remove("active");
  bannerShowBtns.children[currentIndex].classList.remove("active");

  // Update the index of the current banner item and show button
  currentIndex = (currentIndex - 1 + bannerCount) % bannerCount;

  // Add the active class to the current banner item and show button
  bannerItems.children[currentIndex].classList.add("active");
  bannerShowBtns.children[currentIndex].classList.add("active");

  // Update the transform property of the banner items container
  bannerItems.style.transform = `translateX(-${currentIndex * 20}%)`;

  // Start the timer
  startTimer();

  // Toggle the clicked class
  bannerContainer.classList.add("clicked");
});

// Add an event listener to the banner show buttons
for (let i = 0; i < showBtnCount; i++) {
  bannerShowBtns.children[i].addEventListener("click", function () {
    // Stop the timer
    stopTimer();

    // Remove the active class from the previous banner item and show button
    bannerItems.children[currentIndex].classList.remove("active");
    bannerShowBtns.children[currentIndex].classList.remove("active");

    // Update the index of the current banner item and show button
    currentIndex = i;

    // Add the active class to the current banner item and show button
    bannerItems.children[currentIndex].classList.add("active");
    bannerShowBtns.children[currentIndex].classList.add("active");

    // Update the transform property of the banner items container
    bannerItems.style.transform = `translateX(-${currentIndex * 20}%)`;

    // Start the timer
    startTimer();
  });
}

// Start the timer when the page loads
startTimer();
})