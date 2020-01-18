$(document).ready(function() {
    $.get("/api/user_data").then(function(user) {
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
    var saveBudgetBtn = $("#save-budget");
    var budgetMonthSelect = $("#budget-month");
    var budgetCategorySelect = $("#budget-category");
    var expenseAmtInput = $("#expense-amount");


    saveBudgetBtn.on("click", function submitNewBudget(e) {
        e.preventDefault();
        console.log("Budget Month: " + budgetMonthSelect.val());
        console.log("Budget Category: " + budgetCategorySelect.val());
        console.log("Budget Expense: " + expenseAmtInput.val());
    });


    // For creating a budget
    function createBudget(id) {
        $.ajax({
                method: "POST",
                url: "/api/budget/" + id
            })
            .then(function() {

            });
    }

    // For updating budgets
    function updateBudget(id) {
        $.ajax({
                method: "PUT",
                url: "/api/budget/" + id
            })
            .then(function() {
                getBudget();
            });
    }
    // For getting all budgets
    function getBudget(id) {
        $.ajax({
                method: "GET",
                url: "/api/budget/" + id
            })
            .then(function() {

            });
    }

});

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
var $mayHousingBdgt = $("#mayHousingBdgt");
var $mayUtilitiesBdgt = $("#mayUtilitiesBdgt");
var $mayTransportationBdgt = $("#mayTransportationBdgt");
var $mayFoodBdgt = $("#mayFoodBdgt");
var $mayShoppingBdgt = $("#mayShoppingBdgt");
var $mayLeisureBdgt = $("#mayLeisureBdgt");
var $mayMiscBdgt = $("#mayMiscBdgt");
var $mayTotalSpent = $("#mayTotalSpent");

//June
var $junHousingBdgt = $("#junHousingBdgt");
var $junUtilitiesBdgt = $("#junUtilitiesBdgt");
var $junTransportationBdgt = $("#junTransportationBdgt");
var $junFoodBdgt = $("#junFoodBdgt");
var $junShoppingBdgt = $("#junShoppingBdgt");
var $junLeisureBdgt = $("#junLeisureBdgt");
var $junMiscBdgt = $("#junMiscBdgt");
var $junTotalSpent = $("#junTotalSpent");

//July 
var $julHousingBdgt = $("#julHousingBdgt");
var $julUtilitiesBdgt = $("#julUtilitiesBdgt");
var $julTransportationBdgt = $("#julTransportationBdgt");
var $julFoodBdgt = $("#julFoodBdgt");
var $julShoppingBdgt = $("#julShoppingBdgt");
var $julLeisureBdgt = $("#julLeisureBdgt");
var $julMiscBdgt = $("#julMiscBdgt");
var $julTotalSpent = $("#julTotalSpent");

//August
var $augHousingBdgt = $("#augHousingBdgt");
var $augUtilitiesBdgt = $("#augUtilitiesBdgt");
var $augTransportationBdgt = $("#augTransportationBdgt");
var $augFoodBdgt = $("#augFoodBdgt");
var $augShoppingBdgt = $("#augShoppingBdgt");
var $augLeisureBdgt = $("#augLeisureBdgt");
var $augMiscBdgt = $("#augMiscBdgt");
var $augTotalSpent = $("#augTotalSpent");

//September
var $sepHousingBdgt = $("#sepHousingBdgt");
var $sepUtilitiesBdgt = $("#sepUtilitiesBdgt");
var $sepTransportationBdgt = $("#sepTransportationBdgt");
var $sepFoodBdgt = $("#sepFoodBdgt");
var $sepShoppingBdgt = $("#sepShoppingBdgt");
var $sepLeisureBdgt = $("#sepLeisureBdgt");
var $sepMiscBdgt = $("#sepMiscBdgt");
var $sepTotalSpent = $("#sepTotalSpent");

//October
var $octHousingBdgt = $("#octHousingBdgt");
var $octUtilitiesBdgt = $("#octUtilitiesBdgt");
var $octTransportationBdgt = $("#octTransportationBdgt");
var $octFoodBdgt = $("#octFoodBdgt");
var $octShoppingBdgt = $("#octShoppingBdgt");
var $octLeisureBdgt = $("#octLeisureBdgt");
var $octMiscBdgt = $("#octMiscBdgt");
var $octTotalSpent = $("#octTotalSpent");

//November
var $novHousingBdgt = $("#novHousingBdgt");
var $novUtilitiesBdgt = $("#novUtilitiesBdgt");
var $novTransportationBdgt = $("#novTransportationBdgt");
var $novFoodBdgt = $("#novFoodBdgt");
var $novShoppingBdgt = $("#novShoppingBdgt");
var $novLeisureBdgt = $("#novLeisureBdgt");
var $novMiscBdgt = $("#novMiscBdgt");
var $novTotalSpent = $("#novTotalSpent");

//December
var $decHousingBdgt = $("#decHousingBdgt");
var $decUtilitiesBdgt = $("#decUtilitiesBdgt");
var $decTransportationBdgt = $("#decTransportationBdgt");
var $decFoodBdgt = $("#decFoodBdgt");
var $decShoppingBdgt = $("#decShoppingBdgt");
var $decLeisureBdgt = $("#decLeisureBdgt");
var $decMiscBdgt = $("#decMiscBdgt");
var $decTotalSpent = $("#decTotalSpent");

$addBudgetBtn.on("click", function() {})