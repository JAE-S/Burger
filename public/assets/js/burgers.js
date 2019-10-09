
$(".create-form").on("sumbit", function(event){
    event.preventDefault(); 
    var newBurger = {
        name: $('#flavor').val().trom(),
        devoured: $(this.val() = 0)
    };

    $.ajax("/api/burgers", {
        type: "POST", 
        data: newBurger
    }).then(function() {
        console.log("Created a new burger");
        // Reload the page to get the updated list 
        location.reload();
    })
})