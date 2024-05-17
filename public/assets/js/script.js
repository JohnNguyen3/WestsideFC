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

  document.getElementById("report").addEventListener("click", function() {
    // Navigate to the desired webpage
    window.location.href = "5_16Report.html";
  });

// Get the element with the ID 'report'
const reportElement = document.getElementById("report");

// Add a mouseover event listener to add the 'match-hover' class
reportElement.addEventListener("mouseover", function() {
  reportElement.classList.add("match-hover");
});

// Add a mouseout event listener to remove the 'match-hover' class
reportElement.addEventListener("mouseout", function() {
  reportElement.classList.remove("match-hover");
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

        //WFC vs FC Quetzal Summer 2024 Week 1
        //Jose Goal
        "https://www.youtube.com/embed/GiM5beybVo8?si=x6uUG5zlpR0DUwJF",

        //WFC vs SGBH Spring 2024 Consolation
        //Niko Goal 2 
        "https://www.youtube.com/embed/Fzxp1nwOU68?si=ZQUV5ksdX62zkQ04",
        //DJ Game-Saving Save 
        "https://www.youtube.com/embed/dUq60HNgoVM?si=OZK5cPs1WBhYD6Tk",

        //WFC vs Soccer Boys Spring 2024 Preseason
        //John N Goal 
        "https://youtube.com/embed/HRR-EeK6_R0?feature=share",

        //WFC vs. FC Queztal Winter 2024 Championship
        //Daniel Goal
        "https://youtube.com/embed/KqW25P5uS4w?si=tT1rNUmjwZROgm4i",

        //WFC vs Wrecking Crew Winter 2024 Week 7
        //John W Goal 
        "https://youtube.com/embed/hsXlXJQM5E8?si=n2n0m5dO9gbRe_NK",

        //WFC vs SGBH Winter 2024 Week 3
        //Kaz Save 
        "https://youtube.com/embed/8mKVIswcHj8?si=Sh3iW3Xfadle7VFY"
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