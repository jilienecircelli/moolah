var saveExpenseBtn = $("#save-expense");
var expenseNameInput = $("#expense-name");
var expenseAmountInput = $("#expense-amount");
var expenseMonthSelect = $("#expense-month");
var expenseCategorySelect = $("#expense-category");
var editExpenseBtn = $("#table-edit");
var deleteExpenseBtn = $("#table-delete");
var expenseTableElement = $("#table-body");
var userExpenses = [];


//get expense data for the user when loading the page
$.get("/api/user_data")
    .then(function (user) {
        var userID = user.id;
        getExpenses(userID);
    });


//when user saves a new expense, submit to database, then get all expenses from database        
$(saveExpenseBtn).on("click", function handleSubmit(e) {
    e.preventDefault();

    $.get("/api/user_data")
        .then(function (user) {
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
        .then(function () {
            console.log("this is the expense I am posting" + JSON.stringify(expense))
        });
}


function getExpenses(id) {
    $.get("/api/expenses/user/" + id, function (data) {
        userExpenses = data;
        console.log(JSON.stringify(data))
        renderExpenseRows()
    });
}


$("#filterMonth").on("click", "li", function handleFilter(e) {
    e.preventDefault();
    var clickedFilter = $(this).text();
    console.log(clickedFilter)

    $.get("/api/user_data")
        .then(function (user) {
            var userID = user.id;

            switch(clickedFilter){
                case "All Expenses":
                    $.get("/api/expenses/user/" + id, function (data) {
                        userExpenses = data;
                        console.log(JSON.stringify(data));
                        renderExpenseRows();
                    });
                    break;
                default:
                    $.get("/api/expenses/month/" + userID + "/" + clickedFilter, function (response) {
                    expenseTableElement.empty();
                    userExpenses = response;
                    renderExpenseRows();
                });
            }
        });


});


function renderExpenseRows() {
    userExpenses.forEach(function (expenseData) {
        console.log("CreatExpenseRow" + JSON.stringify(expenseData));
        var newTr = $("<tr>");
        // newTr.data("expense", expenseData);
        newTr.append("<td class='pt-3-half' id='expense-month'>" + expenseData.month + "</td>");
        newTr.append("<td class='pt-3-half' id='expense-category'>" + expenseData.category + "</td>");
        newTr.append("<td class='pt-3-half' id='expense-name'>" + expenseData.expenseName + "</td>");
        newTr.append("<td class='pt-3-half' id='expense-name'>" + expenseData.amount + "</td>");
        newTr.append("<td> <span class='table-edit'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0'><i class='fa fa-pencil-alt'></i></button></span> <span class='table-remove'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0'><i class='fas fa-trash'></i></button></span></td>");
        expenseTableElement.append(newTr);
    });
}

function renderNewRow(expense) {
        console.log("CreatExpenseRow" + JSON.stringify(expense));
        var newTr = $("<tr>");
        // newTr.data("expense", expenseData);
        newTr.append("<td class='pt-3-half' id='expense-month'>" + expense.month + "</td>");
        newTr.append("<td class='pt-3-half' id='expense-category'>" + expense.category + "</td>");
        newTr.append("<td class='pt-3-half' id='expense-name'>" + expense.expenseName + "</td>");
        newTr.append("<td class='pt-3-half' id='expense-name'>" + expense.amount + "</td>");
        newTr.append("<td> <span class='table-edit'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0'><i class='fa fa-pencil-alt'></i></button></span> <span class='table-remove'><button type='button' class='btn btn-secondary btn-rounded btn-sm my-0'><i class='fas fa-trash'></i></button></span></td>");
        var expenseID = expense.id;
        newTr.attr("id", expenseID)
        expenseTableElement.append(newTr);
    }



function updateExpense(expense) {
    $.ajax({
        method: "PUT",
        url: "/api/expenses/"+ expense.id,
        data: expense
    })
        .then(function () {
            renderExpenses()
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

$(deleteExpenseBtn).on("click", function handleDelete(e){
    e.preventDefault();


})

function deleteExpenseData(id) {
    $.ajax({
        method: "DELETE",
        url: "/api/expenses/" + id
    })
        .then(function () {
            //what do we do with the data?
        });
}


// function renderExpenses(expense) {
//     console.log(expense);
// }

// // for creating table elements: 
