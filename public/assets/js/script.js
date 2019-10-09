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

$(function() {
  //   $(".change-devoured").on('click', (event) => {
  //     var id = $(this).data("newDevour");
  //     var newDevour = $(this).data("newdevour"); 

  //     var newDevourState = {
  //       devoured: newDevour
  //     };

  //     // Sends the put request 
  //     $.ajax("/api/burgers/" + id, {
  //       type: "PUT", 
  //       data: newDevourState
  //     }).then( () => {
  //       console.log("Changed devour to: ", newDevour);
  //       // Reload the page to get the updated list 
  //       location.reload(); 
  //       }
  //     );
  //  });

   // Form details 
   $(".create-form").on("submit", (event) => {
     event.preventDefault();

     var newBurger = {
       name: $('#flavor').val().trim(),
       devoured: 0
     };

     // Sends the POST request. 
     $.ajax("/api/burgers", {
       type: "POST", 
       data: newBurger
     }).then( () => {
        console.log("New flavor added successfully ", newBurger)
        // Reload the page to get the updated list 
        location.reload();
      }
     );
   });
});
