$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var pauseBtn = $('#pause');
  var breakBtn = $('#breakBtn');
  var resetTime = $('#resetTime');
  var resetCycle = $('#cycleButton')
  var countdown;

  start.on('click', startCountdown);
  breakBtn.on('click', startBreak);
  pauseBtn.on('click', pauseCountdown);
  resetTime.on('click', resetProductivityTimer);

  function resetProductivityTimer(){
    start.removeClass('disabled');
    clearInterval(countdown);
    minutes.text("25");
    seconds.text("00");
    resetTime.addClass('disabled');
  }

  function pauseCountdown(){
    clearInterval(countdown);
    pauseBtn.addClass('disabled');
    start.removeClass('disabled');
  }

  function startBreak(){
    pauseBtn.removeClass('disabled');
    start.addClass('disabled');
    clearInterval(countdown);
    minutes.text("05");
    seconds.text("00");
    startCountdown();
  }
  function startCountdown(){
    pauseBtn.removeClass('disabled');
    resetTime.removeClass('disabled');
    start.addClass('disabled');
    countdown = setInterval(function(){
      var secondsVal = +seconds.text();
      var minutesVal = +minutes.text();
        if (minutesVal === 0 && secondsVal === 0){
        clearInterval(countdown);
        return;
        }
      if(secondsVal === 0){
        minutes.text(minutesVal - 1);
        seconds.text(59);
      } else {
        if(secondsVal <= 10){
          seconds.text("0" + (secondsVal-1));
        } else {
          seconds.text(secondsVal-1);
        }
      }
    }, 1000);
  }
});
