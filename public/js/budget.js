// Global Variables
var saveBudgetBtn = $("#save-budget");
var budgetMonthSelect = $("#budget-month");
var budgetCategorySelect = $("#budget-category");
var expenseAmtInput = $("#expense-amount");
var userBudgets = [];
var budgetTableElement = $("#budget-table");
var deleteBtn = $("#deleteBtn");
var expenseEdit = $("#editBtn");

$.get("/api/user_data").then(function(user) {
    $(".user-name").text(user.firstName).attr("id", user.id);


    // Saving Budgets via on click //
    saveBudgetBtn.on("click", function handleSubmit(e) {
        e.preventDefault();

        $.get("/api/user_data")
            .then(function(user) {
                console.log("Budget Month: " + budgetMonthSelect.val());
                console.log("Budget Category: " + budgetCategorySelect.val());
                console.log("Budget Expense: " + expenseAmtInput.val());
                console.log("User ID: " + user.id);

                var newBudget = {
                    category: budgetCategorySelect.val(),
                    amount: expenseAmtInput.val(),
                    month: budgetMonthSelect.val(),
                    userID: user.id
                };
                submitNewBudget(newBudget);
            });
    });

    // Submitting new budget to database
    function submitNewBudget(budget) {
        $.ajax({
                method: "POST",
                url: "/api/budget/",
                data: budget
            })
            .then(function() {
                console.log("this is the new budget " + budget);
                renderSubmittedBudgetRow(budget);
            });
    }

    function getBudgets() {
        $.get("/api/budget/", function(data) {
            userBudgets = data;
            console.log(JSON.stringify(data));
            renderBudgetRows(data);
        });
    }

    function renderSubmittedBudgetRow(newBudget) {
        var newTr = $('<tr id="' + newBudget.id + '">');
        // newTr.data("expense", expenseData);
        newTr.append("<td class='pt-3-half' id='budget-month'>" + newBudget.month + "</td>");
        newTr.append("<td class='pt-3-half' id='budget-category'>" + newBudget.category + "</td>");
        newTr.append("<td class='pt-3-half' id='budget-amount'>" + newBudget.amount + "</td>");
        newTr.append("<td> <span class='table-edit'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0'><i class='fa fa-pencil-alt'></i></button></span> <span class='table-remove'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0'><i class='fas fa-trash'></i></button></span></td>");
        // newTr.attr("data-id", expenseData.id);
        budgetTableElement.append(newTr);
    }


    function renderBudgetRows(userBudgets) {
        userBudgets.forEach(function(budgetData) {
            console.log("CreatBudgetRow" + JSON.stringify(budgetData));
            var newTr = $('<tr id="' + budgetData.id + '">');
            // newTr.data("expense", expenseData);
            newTr.append("<td class='pt-3-half' id='budget-month'>" + budgetData.month + "</td>");
            newTr.append("<td class='pt-3-half' id='budget-category'>" + budgetData.category + "</td>");
            newTr.append("<td class='pt-3-half' id='budget-amount'>" + budgetData.amount + "</td>");
            newTr.append("<td> <span class='table-edit'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0' id='editBtn'><i class='fa fa-pencil-alt'></i></button></span> <span class='table-remove'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0' id='deleteBtn'><i class='fas fa-trash'></i></button></span></td>");
            // newTr.attr("data-id", expenseData.id);
            budgetTableElement.append(newTr);
        });
    }

    getBudgets()
        // // Get Month & Category for looping through
        // function getMonthData(month, category) {
        //     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //     var categories = ["Housing", "Utilities", "Transportation", "Food", "Shopping", "Leisure", "Miscellaneous"];
        //     for (var i = 0; i < months.length; i++) {
        //         for (var j = 0; j < categories.length; j++) {
        //             $.ajax({
        //                 method: "GET",
        //                 url: "/api/budget/" + months[i] + "/" + categories[j],
        //             }).then(function(response) {
        //                 // console.log("GET MONTH DATA: ", response)
        //                 renderBudget(response);
        //             });
        //         }
        //     }

    // }

    // function renderBudget(response) {
    //     //console.log("Render Budget Response: ", response);
    //     for (var i = 0; i < response.length; i++) {
    //         if (response[i].month === "January") {
    //             if (response[i].category === "Housing") {
    //                 console.log("**** Response i : **** ", response[i].month, response[i].category, response[i].amount);
    //                 var janHousingBdgt = $("#janHousingBdgt");
    //                 $(janHousingBdgt).replaceWith(response[0].amount);
    //             } else if (response[i].category == "Utilities") {
    //                 console.log("**** Response i : **** ", response[i].month, response[i].category, response[i].amount);
    //                 var janUtilitiesBdgt = $("#janHousingBdgt");
    //                 janUtilitiesBdgt.replaceWith(response[i].amount);
    //             }
    //         }
    //         // getMonthData(budgetMonth)
    //         //sortCategory(januaryItems)

    //     }
    // }

    // For updating budgets
    function updateBudget(id) {
        $.ajax({
                method: "PUT",
                url: "/api/budget/" + id
            })
            .then(function() {
                renderBudget();
            });
    }

    $("#deleteBtn").on("click", "button", function deleteBudgetData(e) {
        e.preventDefault();
        var clickedBudget = $(this).id();
        $.ajax({
                method: "DELETE",
                url: "/api/budget/" + clickedBudget
            })
            .then(function() {
                alert("You have successfully deleted this expense");
                window.location.href = "/budget";
            });

        console.log("You clicked this Budget", clickedBudget);
    });
});