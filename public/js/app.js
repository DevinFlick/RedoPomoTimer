$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var pauseBtn = $('#pause');
  var breakBtn = $('#breakBtn');
  var resetTime = $('#resetTime');
  var resetCycle = $('#cycleButton')
  var countdown;
  var cycleNum = $('#cycleNum');
  var yay = document.getElementById('yay');

  start.on('click', startCountdown);
  breakBtn.on('click', startBreak);
  pauseBtn.on('click', pauseCountdown);
  resetTime.on('click', resetProductivityTimer);
  resetCycle.on('click', resetCycleCounter);

function resetCycleCounter(){
  cycleNum.text(1);
  alert('Productivity Cycle Counter Reset!')
}

  function resetProductivityTimer(){
    resetTime.addClass('disabled');
    resetTime.attr('disabled', true);
    start.removeClass('disabled');
    start.removeAttr('disabled');
    clearInterval(countdown);
    minutes.text("25");
    seconds.text("00");
    cycleNum.text(+cycleNum.text() + 1);
    }

  function pauseCountdown(){
    clearInterval(countdown);
    pauseBtn.addClass('disabled');
    pauseBtn.attr('disabled', true);
    start.removeClass('disabled');
    start.removeAttr('disabled');
    resetTime.removeAttr('disabled');
    resetTime.removeClass('disabled');
  }

  function startBreak(){
    clearInterval(countdown);
    if (+cycleNum.text() >= 4){
      minutes.text("15");
      seconds.text("00");
      cycleNum.text('1');
    } else {
      minutes.text("05");
      seconds.text("00");
    }
    startCountdown();
  }
  function startCountdown(){
    start.addClass('disabled');
    start.attr('disabled', true);
    resetTime.removeAttr('disabled');
    resetTime.removeClass('disabled');
    pauseBtn.removeClass('disabled');
    pauseBtn.removeAttr('disabled');
    breakBtn.removeClass('disabled');
    breakBtn.removeAttr('disabled');
    countdown = setInterval(function(){
      var secondsVal = +seconds.text();
      var minutesVal = +minutes.text();
        if (minutesVal === 0 && secondsVal === 0){
        clearInterval(countdown);
        yay.play();
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
