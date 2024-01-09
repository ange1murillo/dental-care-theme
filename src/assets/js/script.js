const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    // document.getElementById("secondaryNav").style.transform =
    //   "translateY(-100%)";

    document.getElementById("mainNav").style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    // document.getElementById("secondaryNav").style.transform =
    //   "translateY(0)";
    document.getElementById("mainNav").style.transform = "translateY(0)";
  }

  lastScrollPosition = currentScrollPosition;
});

// document.addEventListener("DOMContentLoaded", function () {
//   var hero = document.getElementById("hero");
//   var initialMarginTop = getComputedStyle(hero).marginTop;

//   window.addEventListener("scroll", function () {
//     // Check if the user has scrolled down
//     if (window.scrollY > 0) {
//       hero.style.marginTop = "0px";
//     } else {
//       // Reset to the initial margin when the user scrolls to the top
//       hero.style.marginTop = initialMarginTop;
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var hero = document.getElementById("hero");

  window.addEventListener("scroll", function () {
    // Check if the user has scrolled down
    if (window.scrollY > 0) {
      hero.style.marginTop = "0px";
    } else {
      // Reset to the initial margin when the user scrolls to the top
      hero.style.marginTop = "80px";
    }
  });
});
