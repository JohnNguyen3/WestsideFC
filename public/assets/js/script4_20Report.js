// Refresh page every 10 minutes
setTimeout(function(){
  window.location.reload(1);
}, 600000);

document.getElementById("SGS").addEventListener("click", function() {
  // Navigate to the desired webpage
  window.location.href = "https://thesportclub.org/schedule/sgs";
});

document.getElementById("WestsideLogo").addEventListener("click", function() {
  // Navigate to the desired webpage
  window.location.href = "index.html";
});

document.getElementById("home").addEventListener("click", function() {
  // Navigate to the desired webpage
  window.location.href = "index.html";
});

document.getElementById("about").addEventListener("click", function() {
  // Navigate to the desired webpage
  window.location.href = "about.html";
});

document.getElementById("teamHistory").addEventListener("click", function() {
  // Navigate to the desired webpage
  window.location.href = "teamHistory.html";
});

document.getElementById("roster").addEventListener("click", function() {
  // Navigate to the desired webpage
  window.location.href = "rosterSpring2024.html";
});

document.getElementById("seasonStats").addEventListener("click", function() {
  // Navigate to the desired webpage
  window.location.href = "statsSpring2024.html";
});

var videos = [
  "https://www.youtube.com/embed/dUq60HNgoVM?si=OZK5cPs1WBhYD6Tk",
  "https://www.youtube.com/embed/Fzxp1nwOU68?si=ZQUV5ksdX62zkQ04",
  "https://www.youtube.com/embed/7hD-_Zk6TBo?si=Au0Y8Jayyph8EWfY"
];

// Index of the currently displayed video
var currentIndex = 0;

// Function to shift videos to the left
function shiftLeft() {
  currentIndex--;
  if (currentIndex < 0) {
      currentIndex = videos.length - 1;
  }
  updateVideoFrames();
}

// Function to shift videos to the right
function shiftRight() {
  currentIndex++;
  if (currentIndex >= videos.length) {
      currentIndex = 0;
  }
  updateVideoFrames();
 
}

// Function to update the video frames based on the currentIndex
function updateVideoFrames() {
  var frame1 = document.getElementById('video1');
  frame1.src = videos[currentIndex];
}