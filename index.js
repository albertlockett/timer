var clear = require('clear');

var time = 0;

function displayTime() {
  var now = new Date();

  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();

  var quittingTime = new Date(year, month, day, 17, 0, 0);
  
  var diff = quittingTime - now;

  var hours = Math.floor(diff / 1000 / 3600);
  var minutes = Math.floor((diff / 1000) % 3600 / 60);
  var seconds = Math.floor((diff / 1000) % 3600 % 60);
  var ms = diff % 1000;
  var hundreths = Math.floor((diff % 1000) / 10);

  console.log("" + hours + "h " + minutes + "m " + seconds + "s");
}

function clearAndDisplay() {
  clear();
  displayTime();
}

//setInterval(clearAndDisplay, 1000);
displayTime();
