// Refresh page every 10 minutes
  /* 
setTimeout(function(){
    window.location.reload(1);
  }, 600000);
  */
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
  window.location.href = "rosterSummer2024.html";
});

document.getElementById("seasonStats").addEventListener("click", function() {
  // Navigate to the desired webpage
  window.location.href = "statsSummer2024.html";
});

var videos = [
//WFC vs KBBQ Summer 2024 Week 2
        //Jose Goal 1
        "https://www.youtube.com/embed/oBs5lmK0kRs?si=qqTV1mg0xDSH-CmA",
        //John W Goal
        "https://www.youtube.com/embed/56t_7kKmeM4?si=ZuT9V4JjWdETfDch",
        //Baki Goal
        "https://www.youtube.com/embed/TTEwDRBwpKU?si=8l_xrn11rINtfIj4",
        //John N Save 1
        "https://www.youtube.com/embed/0bCb88xO-D8?si=iajBiB28VAMDFo1Z",
        //Jose Goal 2
        "https://www.youtube.com/embed/BNOFqF-iJsU?si=WoAqYUxn7F6NdL19",
        //Thong Goal
        "https://www.youtube.com/embed/oqp8c0ArWJ4?si=U8xJCkNoQ1WPPne7",
        //John N Save 2
        "https://www.youtube.com/embed/HeTIpKRIzR0?si=PocHnny0S5d4vAbC",
        //John N Save 3
        "https://www.youtube.com/embed/BzyFPai-1pg?si=Os5HnJLaltvj09Jw",
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