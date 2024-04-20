// Refresh page every 10 minutes
setTimeout(function(){
  window.location.reload(1);
}, 600000);

document.getElementById("SGS").addEventListener("click", function() {
  // Navigate to the desired webpage
  window.location.href = "https://www.smallgoalsoccer.com/seattle-redmond-adult-soccer/";
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