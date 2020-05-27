$(function () {
    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("Burger was demolished");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});