setInterval(function(){
  var end = 1363676400;
  var now = (new Date()).getTime() / 1000;
  remaining = end - now

  console.log(remaining);

  if (remaining < 0) {
    remaining = 0;
  }

  hours = Math.floor(remaining / (60 * 60));
  minutes = Math.floor((remaining % (60 * 60)) / 60);
  seconds = Math.floor(remaining % 60);

  var s = "";

  s += hours.toString();
  if (hours == 1) {
    s += " hour, ";
  } else {
    s += " hours, ";
  }

  s += minutes.toString();
  if (minutes == 1) {
    s += " minute ";
  } else {
    s += " minutes ";
  }

  document.getElementById('time-remaining').innerHTML = s;
}, 1000);
