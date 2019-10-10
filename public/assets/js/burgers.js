
// $(function() { 
// $(".change-devoured").on('click', () => {
//     console.log( $(this).data("id"))
//    console.log($(this).data("newdevour"))
// })
// })
// $(document).foundation();
$(function() {

     // Form details 
     $("#addFlavor").on("click", function(event) {
        event.preventDefault();
        
        var newBurger = {
          name: $('#flavor').val().trim(),
          devoured: 0
        };
   
        // Sends the POST request. 
        $.ajax("/api/burgers", {
          type: "POST", 
          data: newBurger
        }).then( 
          
            function() {
              
                console.log("New flavor added successfully")
                // Reload the page to get the updated list 
                location.reload();
            }
        );
      });

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
        $.ajax("/api/burgers/" + id, {
          type: "PUT", 
          data: newDevourState
        }).then( 
            function() {
                console.log("Changed devour to: ", newDevour);
                // Reload the page to get the updated list 
                location.reload(); 
            }
        );
     });
  

  });