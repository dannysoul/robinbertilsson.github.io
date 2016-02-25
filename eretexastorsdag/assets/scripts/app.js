$(document).ready(function() {
  var date = new Date();
  var day = date.getDay();

  // Är TT
  if(day == 4) {
    yes();
  }

  function yes() {
    $('.answer').text("YEEEES!");
  }
});
