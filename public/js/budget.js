// Global Variables
var saveBudgetBtn = $("#save-budget");
var budgetMonthSelect = $("#budget-month");
var budgetCategorySelect = $("#budget-category");
var expenseAmtInput = $("#expense-amount");
var userBudgets = [];
var budgetTableElement = $("#budget-table");
var deleteBtn = $("#deleteBtn");
var editBtn = $("#editBtn");


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
        newTr.append("<td> <span class='table-edit'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0'><i class='fa fa-pencil-alt' id='editBtn'></i></button></span> <span class='table-remove'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0' id='deleteBtn'><i class='fas fa-trash'></i></button></span></td>");
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
            newTr.append("<td> <span class='table-edit'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0 editBtn' id='" + budgetData.id + "'><i class='fa fa-pencil-alt'></i></button></span> <span class='table-remove'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0 deleteBtn' id='" + budgetData.id + "'><i class='fas fa-trash'></i></button></span></td>");
            // newTr.attr("data-id", expenseData.id);
            budgetTableElement.append(newTr);
        });
    }



    // For updating budgets
    function updateBudget(id) {
        $.ajax({
                method: "PUT",
                url: "/api/budget/" + id
            })
            .then(function() {
                // renderBudget();
            });
    }

    $("#table").on("click", ".editBtn", function(event) {
        console.log('event: ', $(event.target));
        var id = $(event.target).closest("tr").attr("id");
        console.log('id: ', id);
        updateBudget(id);
    });

    function deleteBudget(id) {
        // $(this).closest("tr").remove();
        $.ajax({
                method: "DELETE",
                url: "/api/budget/" + id
            })
            .then(function() {
                alert("You have successfully deleted this budget");
                window.location.href = "/budget";
            });
    }

    //deleteBtn.on("click", "button", deleteBudget);

    $("#table").on("click", ".deleteBtn", function(event) {
        console.log('event: ', $(event.target));
        var id = $(event.target).closest("tr").attr("id");
        console.log('id: ', id);
        deleteBudget(id);
    });

    getBudgets();
});