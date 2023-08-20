// Add an event listener to the window that listens for the "scroll" event
window.addEventListener("scroll", (event) => {
  // Get the current vertical scroll position using window.scrollY
  const scroll = window.scrollY;

  // Select the header element using its "header" tag name
  const header = document.querySelector("header");

  // Check if the scroll position is greater than 20 pixels
  if (scroll > 20) {
    // If the condition is true, add the "backDrop & animate__fadeInDownBig" class to the header element
    header.classList.add("backDrop", "animate__fadeInDownBig");
  } else {
    // If the condition is false, remove the "backDrop & animate__fadeInDownBig" class from the header element
    header.classList.remove("backDrop", "animate__fadeInDownBig");
  }
});

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
  $("#homepage").fullpage({
    scrollingSpeed: 1000,
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
    sectionsColor: [
      "#f2f2f2",
      "#1BBC9B",
      "#7E8F7C",
      "#C63D0F",
      "#C63D0F",
      "#C63D0F",
      "#C63D0F",
    ],
    verticalCentered: false,
    navigation: true,
    responsiveWidth: 500,
    onLeave: function (index, nextIndex, direction) {
      if (direction == "up") {
        $(".section").removeClass("down");
        $(".section").removeClass("next");
        $(".section").removeClass("prev");
        $("#homepage .section:nth-child(" + nextIndex + ")").addClass("up");
        $("#homepage .section:nth-child(" + nextIndex + ")")
          .next()
          .addClass("next up");
        $("#homepage .section:nth-child(" + nextIndex + ")")
          .prev()
          .addClass("prev up");
      } else {
        $(".section").removeClass("up");
        $(".section").removeClass("next");
        $(".section").removeClass("prev");
        $("#homepage .section:nth-child(" + nextIndex + ")").addClass("down");
        $("#homepage .section:nth-child(" + nextIndex + ")")
          .next()
          .addClass("next down");
        $("#homepage .section:nth-child(" + nextIndex + ")")
          .prev()
          .addClass("prev down");
      }
    },
  });
});
