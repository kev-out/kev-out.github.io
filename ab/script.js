// Custom JS

// Get the elements
var mainHallBtn = document.getElementById("main-hall-btn");
var clubBtn = document.getElementById("club-btn");
var mainHallImg = document.getElementById("main-hall-img");
var clubImg = document.getElementById("club-img");
var dropdownItems = document.getElementsByClassName("dropdown-item");
var infoBoxes = document.getElementsByClassName("info-box");

// Add event listeners to the buttons
mainHallBtn.addEventListener("click", function() {
  // Show the main hall image and hide the club image
  mainHallImg.style.display = "block";
  clubImg.style.display = "none";
});

clubBtn.addEventListener("click", function() {
  // Show the club image and hide the main hall image
  clubImg.style.display = "block";
  mainHallImg.style.display = "none";
});

// Add event listeners to the dropdown items
for (var i = 0; i < dropdownItems.length; i++) {
  dropdownItems[i].addEventListener("click", function() {
    // Get the selected language
    var lang = this.dataset.lang;
    // Loop through the info boxes
    for (var j = 0; j < infoBoxes.length; j++) {
      // Get the info box id
      var id = infoBoxes[j].id;
      // Check if the id matches the language
      if (id.endsWith(lang)) {
        // Show the info box
        infoBoxes[j].style.display = "block";
      } else {
        // Hide the info box
        infoBoxes[j].style.display = "none";
      }
    }
  });
}

// Refresh the images every minute
setInterval(function() {
  // Get the current time in milliseconds
  var now = Date.now();
  // Add a query parameter to the image sources with the current time
  mainHallImg.src = "https://decibel.abconcerts.be/images/10Eazy-Mainhall.png?" + now;
  clubImg.src = "https://decibel.abconcerts.be/images/10Eazy-Club.png?" + now;
}, 60000); // 60000 milliseconds = 1 minute
