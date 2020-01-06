$(document).ready(function () {

    $(".burger-form").on("submit", function (event) {
        event.preventDefault();

        let addedBurger = {
            burger_name: $("#addedBurger").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: addedBurger
        }).then(function () {
            console.log("burger added");
            location.reload();
        })
    })

    $(".devouredBurger").on("click", function(event) {
        event.preventDefault(); 

        let id = $(this).data("id"); 
        let burgerStatus = {
            devoured: 1 
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT", 
            data: burgerStatus
        }).then(function() {
            console.log("burger devoured"); 
            location.reload(); 
        });
    });

    
});