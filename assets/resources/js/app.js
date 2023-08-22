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

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5,
});

// Function to handle intersection changes
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    const sectionId = entry.target.getAttribute("id");
    console.log(sectionId);
    const header = document.querySelector("header");

    if (sectionId === "first-section") {
      // Always show header in the first section
      if (entry.isIntersecting) {
        header.style.display = "block";
      } else {
        header.style.display = "none";
      }
    } else {
      if (entry.isIntersecting) {
        // Hide header in other sections when they're in the viewport
        header.style.display = "none";
      }
    }
  });
}

function selectSectionsExceptFirst() {
  // Select the main element
  const mainElement = document.querySelector("main");

  // Select all section elements inside the main element
  const sectionElements = mainElement.querySelectorAll("section");

  // Convert NodeList to an array for easier manipulation
  const sectionArray = Array.from(sectionElements);

  // You can manipulate or use the remaining section elements here
  sectionArray.forEach((section) => {
    observer.observe(section);
  });

  // Always show the header for the first section
  const header = document.querySelector("header");
  header.style.display = "block";
}

// Call the function to execute
selectSectionsExceptFirst();
