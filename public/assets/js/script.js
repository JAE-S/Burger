$(document).foundation()
$(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else{
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });
  
  
  $(function() {
    var $yeti = $('#yeti');
    var $transitionList = $('#transitionList');
  
    $('#transitioner').click(function() {
      MotionUI.animateIn($yeti, $transitionList.val());
    });
  });