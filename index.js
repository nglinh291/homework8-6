$(function () {
    $(".detail1").slideUp();
    $(".title1 h2").click(function (e) {
      $(".detail1").slideToggle();
    });
});

$(function () {
    $(".detail2").slideUp();
    $(".title2 h2").click(function (e) {
      $(".detail2").slideToggle();
    });
});

$(function () {
    $(".detail3").slideUp();
    $(".title3 h2").click(function (e) {
      $(".detail3").slideToggle();
    });
});

$(function () {
    $(".detail4").slideUp();
    $(".title4 h2").click(function (e) {
      $(".detail4").slideToggle();
    });
});

// Clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

