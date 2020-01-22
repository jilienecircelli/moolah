var saveExpenseBtn = $("#save-expense");
var expenseNameInput = $("#expense-name");
var expenseAmountInput = $("#expense-amount");
var expenseMonthSelect = $("#expense-month");
var expenseCategorySelect = $("#expense-category");
// var deleteTarget = $("#tableRowDelete")
var removeBtn = $("#removeBtn");
var expenseEdit = $(".edit");
var expenseTableElement = $("#table-body");
var userExpenses = [];


//get expense data for the user when loading the page
$.get("/api/user_data")
    .then(function(user) {
        var userID = user.id;
        getExpenses(userID);
    });


//when user saves a new expense, submit to database, then get all expenses from database        
$(saveExpenseBtn).on("click", function handleSubmit(e) {
    e.preventDefault();

    $.get("/api/user_data")
        .then(function(user) {
            var userID = user.id;

            console.log("USER ID: " + userID);
            console.log(expenseNameInput.val());
            console.log(expenseAmountInput.val());
            console.log(expenseMonthSelect.val());
            console.log(expenseCategorySelect.val());


            var newExpense = {
                category: expenseCategorySelect.val(),
                expenseName: expenseNameInput.val(),
                amount: expenseAmountInput.val(),
                month: expenseMonthSelect.val(),
                userID: user.id,
            };

            console.log(newExpense);
            console.log(userID);

            submitExpense(newExpense);
            renderNewRow(newExpense);
        });
});



function submitExpense(expense) {
    $.ajax({
            method: "POST",
            url: "/api/expenses/",
            data: expense
        })
        .then(function() {
            console.log("this is the expense I am posting" + JSON.stringify(expense));
        });
}


function getExpenses(id) {
    $.get("/api/expenses/user/" + id, function(data) {
        userExpenses = data;
        console.log(JSON.stringify(data))
        renderExpenseRows()
    });
}

$("#allExpenses").on("click", function() {
    $.get("/api/user_data")
        .then(function(user) {
            var userID = user.id;

            getExpenses(userID);
        });

});


$("#filterMonth").on("click", "li", function handleFilter(e) {
    e.preventDefault();
    var clickedFilter = $(this).text();
    console.log(clickedFilter)

    $.get("/api/user_data")
        .then(function(user) {
            var userID = user.id;

            switch (clickedFilter) {
                case "All Expenses":
                    $.get("/api/expenses/user/" + id, function(data) {
                        userExpenses = data;
                        console.log(JSON.stringify(data));
                        renderExpenseRows();
                    });
                    break;
                default:
                    $.get("/api/expenses/month/" + userID + "/" + clickedFilter, function(response) {
                        expenseTableElement.empty();
                        userExpenses = response;
                        renderExpenseRows();
                    });
            }
        });


});


function renderExpenseRows() {
    userExpenses.forEach(function(expenseData) {
        console.log("CreatExpenseRow" + JSON.stringify(expenseData));
        var newTr = $('<tr id="' + expenseData.id + '">');
        // newTr.data("expense", expenseData);
        newTr.append("<td class='pt-3-half' id='expense-month'>" + expenseData.month + "</td>");
        newTr.append("<td class='pt-3-half' id='expense-category'>" + expenseData.category + "</td>");
        newTr.append("<td class='pt-3-half' id='expense-name'>" + expenseData.expenseName + "</td>");
        newTr.append("<td class='pt-3-half' id='expense-amount'>" + expenseData.amount + "</td>");
        newTr.append("<td> <span class='table-edit'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0 editBtn'><i class='fa fa-pencil-alt'></i></button></span> <span class='table-remove'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0 deleteBtn'><i class='fas fa-trash'></i></button></span></td>");
        // newTr.attr("data-id", expenseData.id);
        expenseTableElement.append(newTr);
    });
}

function renderNewRow(expense) {
    console.log("CreatExpenseRow" + JSON.stringify(expense));
    var newTr = $('<tr id="' + expense.id + '">');
    // newTr.data("expense", expenseData);
    newTr.append('<td class="pt-3-half">' + expense.month + '</td>');
    newTr.append('<td class="pt-3-half">' + expense.category + '</td>');
    newTr.append('<td class="pt-3-half">' + expense.expenseName + '</td>');
    newTr.append('<td class="pt-3-half">' + expense.amount + '</td>');
    newTr.append("<td> <span class='table-edit'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0 editBtn'><i class='fa fa-pencil-alt'></i></button></span> <span class='table-remove'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0 deleteBtn'><i class='fas fa-trash'></i></button></span></td>");
    // newTr.attr("data-id", expense.id);
    expenseTableElement.append(newTr);
}



function updateExpense(expense) {
    $.ajax({
            method: "PUT",
            url: "/api/expenses/" + expense.id,
            data: expense
        })
        .then(function() {
            renderExpenseRows();
        });
}


// function getExpenseData(id) {
//     $.get("/api/posts/" + id, function (data) {
//         if (data) {
//             expenseNameInput.val(data.expenseName);
//             bodyInput.val(data.body);
//             expenseCategorySelect.val(data.category);
//         }
//     });
// }


function deleteExpenseData(id) {
    $.ajax({
            method: "DELETE",
            url: "/api/expenses/" + id
        })
        .then(function() {
            // alert("You have successfully deleted this expense");
            window.location.href = "/addexpenses";
            getExpenses();
        });
}

$("#table").on("click", ".deleteBtn", function(event) {
    console.log('event: ', $(event.target));
    var id = $(event.target).closest("tr").attr("id");
    console.log('id: ', id);
    deleteExpenseData(id);
});