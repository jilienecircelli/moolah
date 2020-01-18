$(document).ready(function () {
    $.get("/api/user_data").then(function (user) {
        $(".user-name").text(user.firstName);
    });

    // $('.dropdown-toggle').dropdown()
    //     //we need to display the persons current expenses and the news in a card to the right
    //     // AJAX call for API
    // var queryURL = "";

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {

    // })
    // Update Budget Table //
    const $addBudgetBtn = $("#submitBudget");
    const $categoryChoice = $("#categoryChoice");
    const $budgetAmount = $("#budgetAmount");

    var $janHousingBdgt = $("#janHousingBdgt");
    var $janUtilitiesBdgt = $("#janUtilitiesBdgt");
    var $janTransportationBdgt = $("#janTransportationBdgt"); 
    var $janFoodBdgt = $("#janFoodBdgt"); 
    var $janShoppingBdgt =$("#janShoppingBdgt"); 
    var $janLeisureBdgt = $("#janLeisureBdgt"); 
    var $janMiscBdgt = $("#janMiscBdgt");
    var $janTotalSpent = $("#janTotalSpent"); 
    


    $addBudgetBtn.on("click", function () {

    })
