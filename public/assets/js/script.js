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

  document.getElementById("report").addEventListener("click", function() {
    // Navigate to the desired webpage
    window.location.href = "4_20Report.html";
  });
  /* 
  // Change fixture image every 10 seconds
  let fixtureImages = ['./assets/img/Week1.png', './assets/img/Week2.png', './assets/img/Week3.png','./assets/img/Week4.png','./assets/img/Week5.png','./assets/img/Week6.png','./assets/img/Week7.png']; // Add more fixture images
  let currentFixture = 0;
  setInterval(() => {
     document.getElementById('fixture-image').src = fixtureImages[currentFixture];
     currentFixture = (currentFixture + 1) % fixtureImages.length;
  }, 10000);
  
  // Add event listener for fixture image click
 
  document.getElementById('fixture-image').addEventListener('click', () => {
    currentFixture = (currentFixture + 1) % fixtureImages.length;
    document.getElementById('fixture-image').src = fixtureImages[currentFixture];
  });
  
  // Add the Player Bios to the Page
  function updatePage(response) {
      let textName = document.createElement("h2");
      textName.textContent = response.name;
      var src = document.getElementById("player-bio");
      src.appendChild(textName);
  
      var img = document.createElement("img");
      img.src = response.imagefile;
      src.appendChild(img); 
  
      let age = document.createElement("div");
      age.textContent = "Age: " + response.age;
      src.appendChild(age);
  
      let textPosition = document.createElement("div");
      textPosition.textContent = "Position: " + response.position;
      src.appendChild(textPosition);
  
      let textGoals = document.createElement("div");
      textGoals.textContent = "Goals: " + response.goals;
      src.appendChild(textGoals);
  
      let textAssists = document.createElement("div");
      textAssists.textContent = "Assists: " + response.assists;
      src.appendChild(textAssists);
      
      let textSaves = document.createElement("div");
      textSaves.textContent = "Saves: " + response.saves;
      src.appendChild(textSaves);
  
  }
  
  // Clear the player bio section before adding the data for the newly clicked player 
  function clearBio() {
    const playerBio = document.getElementById('player-bio'); 
    while(playerBio.firstChild) {
      playerBio.removeChild(playerBio.firstChild)
    }
  }
  
  // Display player bio on click
  document.getElementById('PlayerOne').addEventListener('click', (event) => {
    clearBio();
    let P1 = document.getElementById('PlayerOne').innerHTML;
    let jsonFile = "PlayerOne" + ".json";
  
    fetch(jsonFile)
      .then(res => res.json())
      .then(updatePage)
      .catch((error) =>
        console.log("failed"));
  });
  
  document.getElementById('PlayerTwo').addEventListener('click', (event) => {
    clearBio();
    let P2 = document.getElementById('PlayerTwo').innerHTML;
    let jsonFile = "PlayerTwo" + ".json";
  
    fetch(jsonFile)
      .then(res => res.json())
      .then(updatePage)
      .catch((error) =>
        console.log("failed"));
  });
  */
//video display

    // Array of video URLs
    var videos = [
        "https://youtube.com/embed/KqW25P5uS4w?si=tT1rNUmjwZROgm4i",
        "https://youtube.com/embed/8mKVIswcHj8?si=Sh3iW3Xfadle7VFY",
        "https://youtube.com/embed/hsXlXJQM5E8?si=n2n0m5dO9gbRe_NK",
        "https://www.youtube.com/embed/dUq60HNgoVM?si=OZK5cPs1WBhYD6Tk",
        "https://youtube.com/embed/HRR-EeK6_R0?feature=share",
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
        var frame2 = document.getElementById('video2');
        var frame3 = document.getElementById('video3');
        var frame4 = document.getElementById('video4');
        var frame5 = document.getElementById('video5');
        var frame6 = document.getElementById('video6');
        var frame7 = document.getElementById('video7');

        frame1.src = videos[currentIndex];
        frame2.src = videos[(currentIndex + 1) % videos.length];
        frame3.src = videos[(currentIndex + 2) % videos.length]; 
        frame4.src = videos[(currentIndex + 3) % videos.length];
        frame5.src = videos[(currentIndex + 4) % videos.length]; 
        frame6.src = videos[(currentIndex + 5) % videos.length];
        frame7.src = videos[(currentIndex + 6) % videos.length]; 
    }