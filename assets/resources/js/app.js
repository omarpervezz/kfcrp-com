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
$(document).ready(function () {
  function initializeSlider() {
    $("#homepage").fullpage({
      scrollingSpeed: 700, // Faster scrolling speed
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 2000,
      anchors: [
        "banner",
        "about-us",
        "stuff-team",
        "join-our-server",
        "community-feedback",
        "join-us-today",
        "sponsor-footer",
      ],
      verticalCentered: false,
      navigation: true,
      responsiveWidth: 768, // Adjust to your desired breakpoint
      easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1.000)", // Smooth scrolling
      onLeave: function (index, nextIndex, direction) {
        // Your section transition logic
      },
    });
  }

  function destroySlider() {
    $.fn.fullpage.destroy("all");
  }

  function handleSliderBasedOnScreenSize() {
    if (window.innerWidth > 768) {
      // Adjust the breakpoint as needed
      initializeSlider();
    } else {
      destroySlider();
    }
  }

  handleSliderBasedOnScreenSize();
  $(window).resize(handleSliderBasedOnScreenSize);
});
