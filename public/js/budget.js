$(document).ready(function() {
    $.get("/api/user_data").then(function(user) {
        $(".user-name").text(user.email);
    });

    $('.dropdown-toggle').dropdown()
        //we need to display the persons current expenses and the news in a card to the right
        // AJAX call for API
    var queryURL = "";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

    })

    // Budget Main section
    var categoryCol = $(".category-col");
    var amountCol = $("amount-col");
    var monthCol = $("month-col");



});