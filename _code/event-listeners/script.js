// document.getElementById("buttonID").addEventListener("click", function () {
//   console.log("Button clicked");
// });

// Mitigation
const button = document.getElementById("buttonID");
button.addEventListener("click", function () {
  console.log("Button clicked");
});

// Remove the event listener when it's no longer needed
button.removeEventListener("click", function () {
  console.log("Button clicked");
});

// If button is removed from the DOM but listener is not removed, it causes a leak.
