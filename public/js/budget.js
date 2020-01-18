$(document).ready(function() {
    $.get("/api/user_data").then(function(user) {
        console.log("USER NAME USER NAME  " +
            user[0])
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