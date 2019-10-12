$(document).foundation()
$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      // console.log(winTop)    
      $("#intro-content").removeClass("introContent");
      $("body").addClass("sticky-shrinknav-wrapper");
    } else{
      $("body").removeClass("sticky-shrinknav-wrapper");
      $("#intro-content").addClass("introContent");
    }
  });


  
  // shows and hides filtered items
  $(".filter-simple-button").click(function() {
    var value = $(this).attr('data-filter');
    if(value === "all") {
      $('.filter-simple-item').show('1000');
    } else {
      $(".filter-simple-item").not('.'+value).hide('3000');
      $('.filter-simple-item').filter('.'+value).show('3000');
    }
  });

  // changes active class on filter buttons
  $('.filter-simple-button').click(function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });

});