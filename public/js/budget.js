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

    //January 
    var $janHousingBdgt = $("#janHousingBdgt");
    var $janUtilitiesBdgt = $("#janUtilitiesBdgt");
    var $janTransportationBdgt = $("#janTransportationBdgt");
    var $janFoodBdgt = $("#janFoodBdgt");
    var $janShoppingBdgt = $("#janShoppingBdgt");
    var $janLeisureBdgt = $("#janLeisureBdgt");
    var $janMiscBdgt = $("#janMiscBdgt");
    var $janTotalSpent = $("#janTotalSpent");

    //February
    var $febHousingBdgt = $("#febHousingBdgt");
    var $febUtilitiesBdgt = $("#febUtilitiesBdgt");
    var $febTransportationBdgt = $("#febTransportationBdgt");
    var $febFoodBdgt = $("#febFoodBdgt");
    var $febShoppingBdgt = $("#febShoppingBdgt");
    var $febLeisureBdgt = $("#febLeisureBdgt");
    var $febMiscBdgt = $("#febMiscBdgt");
    var $febTotalSpent = $("#febTotalSpent");

    //March
    var $marHousingBdgt = $("#marHousingBdgt");
    var $marUtilitiesBdgt = $("#marUtilitiesBdgt");
    var $marTransportationBdgt = $("#marTransportationBdgt");
    var $marFoodBdgt = $("#marFoodBdgt");
    var $marShoppingBdgt = $("#marShoppingBdgt");
    var $marLeisureBdgt = $("#marLeisureBdgt");
    var $marMiscBdgt = $("#marMiscBdgt");
    var $marTotalSpent = $("#marTotalSpent");

    //April
    var $aprHousingBdgt = $("#aprHousingBdgt");
    var $aprUtilitiesBdgt = $("#aprUtilitiesBdgt");
    var $aprTransportationBdgt = $("#aprTransportationBdgt");
    var $aprFoodBdgt = $("#aprFoodBdgt");
    var $aprShoppingBdgt = $("#aprShoppingBdgt");
    var $aprLeisureBdgt = $("#aprLeisureBdgt");
    var $aprMiscBdgt = $("#aprMiscBdgt");
    var $aprTotalSpent = $("#aprTotalSpent");

    //May
    //April
    var $mayHousingBdgt = $("#mayHousingBdgt");
    var $aprUtilitiesBdgt = $("#aprUtilitiesBdgt");
    var $aprTransportationBdgt = $("#aprTransportationBdgt");
    var $aprFoodBdgt = $("#aprFoodBdgt");
    var $aprShoppingBdgt = $("#aprShoppingBdgt");
    var $aprLeisureBdgt = $("#aprLeisureBdgt");
    var $aprMiscBdgt = $("#aprMiscBdgt");
    var $aprTotalSpent = $("#aprTotalSpent");

    $addBudgetBtn.on("click", function () {

    })
