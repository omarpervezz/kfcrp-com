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
// // Scroll animation
// (function ($) {
//   var uniqueCntr = 0;
//   $.fn.scrolled = function (waitTime, fn) {
//     if (typeof waitTime === "function") {
//       fn = waitTime;
//       waitTime = 200;
//     }
//     var tag = "scrollTimer" + uniqueCntr++;
//     this.scroll(function () {
//       var self = $(this);
//       clearTimeout(self.data(tag));
//       self.data(
//         tag,
//         setTimeout(function () {
//           self.removeData(tag);
//           fn.call(self[0]);
//         }, waitTime)
//       );
//     });
//   };

//   $.fn.AniView = function (options) {
//     //some default settings. animateThreshold controls the trigger point
//     //for animation and is subtracted from the bottom of the viewport.
//     var settings = $.extend(
//       {
//         animateClass: "animated",
//         animateThreshold: 0,
//         scrollPollInterval: 20,
//       },
//       options
//     );

//     //keep the matched elements in a variable for easy reference
//     var collection = this;

//     //cycle through each matched element and wrap it in a block/div
//     //and then proceed to fade out the inner contents of each matched element
//     $(collection).each(function (index, element) {
//       $(element).wrap('<div class="av-container"></div>');
//       $(element).css("opacity", 0);
//     });

//     /**
//      * returns boolean representing whether element's top is coming into bottom of viewport
//      *
//      * @param HTMLDOMElement element the current element to check
//      */
//     function EnteringViewport(element) {
//       var elementTop = $(element).offset().top;
//       var viewportBottom = $(window).scrollTop() + $(window).height();
//       return elementTop < viewportBottom - settings.animateThreshold
//         ? true
//         : false;
//     }

//     /**
//      * cycle through each element in the collection to make sure that any
//      * elements which should be animated into view, are...
//      *
//      * @param collection of elements to check
//      */
//     function RenderElementsCurrentlyInViewport(collection) {
//       $(collection).each(function (index, element) {
//         var elementParentContainer = $(element).parent(".av-container");
//         if (
//           $(element).is("[data-av-animation]") &&
//           !$(elementParentContainer).hasClass("av-visible") &&
//           EnteringViewport(elementParentContainer)
//         ) {
//           $(element).css("opacity", 1);
//           $(elementParentContainer).addClass("av-visible");
//           $(element).addClass(
//             [settings.animateClass, $(element).attr("data-av-animation")].join(
//               " "
//             )
//           );
//         }
//       });
//     }

//     //on page load, render any elements that are currently/already in view
//     RenderElementsCurrentlyInViewport(collection);

//     //enable the scrolled event timer to watch for elements coming into the viewport
//     //from the bottom. default polling time is 20 ms. This can be changed using
//     //'scrollPollInterval' from the user visible options
//     $(window).scrolled(settings.scrollPollInterval, function () {
//       RenderElementsCurrentlyInViewport(collection);
//     });
//   };
// })(jQuery);

// $(document).ready(function () {
//   $(".aniview").AniView({
//     animateClass: "animate__animated",
//     animateThreshold: 105,
//     scrollPollInterval: 55,
//   });
// });
