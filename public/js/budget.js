$(document).ready(function() {
    $.get("/api/user_data").then(function(data) {
        $(".user-name").text(data.firstName);
    });
    //we need to display the persons current expenses and the news in a card to the right
});