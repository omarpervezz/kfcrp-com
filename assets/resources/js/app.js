// Get the DOM element with the class "push__bar"
const push__bar = document.querySelector(".push__bar");

// Function to add animation classes to the push__bar element
function addAnimation() {
  // Add the "animate__backInRight" class for entry animation
  push__bar.classList.add("animate__backInRight");

  // Remove the "animate__backOutRight" class to ensure it's not active
  push__bar.classList.remove("animate__backOutRight");
}

// Function to remove animation classes from the push__bar element
function removeAnimation() {
  // Add the "animate__backOutRight" class for exit animation
  push__bar.classList.add("animate__backOutRight");

  // Remove the "animate__backInRight" class to ensure it's not active
  push__bar.classList.remove("animate__backInRight");
}
