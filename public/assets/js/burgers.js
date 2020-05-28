//Add new burger on submit
$(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("this was submitted")

        var addBurger = {
            name: $("#newBurger").val().trim()
        };

        // Send the POST request.
        $.ajax("api/burgers", {
            type: "POST",
            data: addBurger
        }).then(
            function () {
                console.log("made new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".devourButton").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var isDevoured = $(this).data("devoured");

        var changeToDevoured = {
            devour: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: changeToDevoured
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".trashButton").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Burger deleted", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})