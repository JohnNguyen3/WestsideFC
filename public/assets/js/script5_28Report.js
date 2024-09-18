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
  //WFC vs Redmonk United Summer 2024 Week 3
          //John N Save 4
          "https://www.youtube.com/embed/RrK6q6Tw8g8?si=ASrjtUi7Akz4MjyV",
          //Baki Goal
          "https://www.youtube.com/embed/2mWMKACqMfU",
          //Luis Goal
          "https://www.youtube.com/embed/gzKF1piCFmg",
          //John N Sweeper Keeper Defense
          "https://www.youtube.com/embed/QnUY1rujO00",
          //John W Solo Run
          "https://www.youtube.com/embed/BgPec41-om0",
          //John N Save 5
          "https://www.youtube.com/embed/ZEeBeR2lV0w",
          //Redmonk United Own Goal
          "https://www.youtube.com/embed/AriNvonnD8A",
          //Westside FC Great Team Play
          "https://www.youtube.com/embed/2WrYV9jfgss",
          //John N Solo Run
          "https://www.youtube.com/embed/t4HN39d82PU",
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