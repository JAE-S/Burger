
$(function() {

  // Add a flavor
  $("#addFlavor").on("click", function(event) {
    event.preventDefault();
    
    var newFlavor = {
      name: $('#flavor').val().trim(),
      devoured: 0
    };

    // Sends the POST request. 
    $.ajax("/api/icecream", {
      type: "POST", 
      data: newFlavor
    }).then( 
      function() {
          console.log("New flavor added successfully")
          // Reload the page to get the updated list 
          setTimeout(function(){
            location.reload(true); 
          }, 0200);
      }
    );
  });
  // Change devour state from menu
  $(".change-devour").on('click', function(event) {
    event.preventDefault();
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour"); 
      console.log(newDevour)
      console.log(id)

      var newDevourState = {
        devoured: "false"
      };

      // Sends the put request 
      $.ajax("/api/icecream/" + id, {
        type: "PUT", 
        data: newDevourState
      }).then( 
          function() {
            console.log("Changed devour to: ", newDevour);
            // Reload the page to get the updated list 
            setTimeout(function(){
              location.reload(true); 
            }, 0200);
          }
      );
  });
  // Change devour state from flavors
  $(".change-devoured").on('click', function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour"); 
      console.log(newDevour)
      console.log(id)

      var newDevourState = {
        devoured: "true"
      };

      // Sends the put request 
      $.ajax("/api/icecream/" + id, {
        type: "PUT", 
        data: newDevourState
      }).then( 
          function() {
            console.log("Changed devour to: ", newDevour);
            // Reload the page to get the updated list 
            setTimeout(function(){
              location.reload(true); 
            }, 0200);
          }
      );
  });

});