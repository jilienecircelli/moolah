var saveExpenseBtn = $("save-expense");
var expenseNameInput = $("expense-name");
var expenseAmountInput = $("expense-amount");
var expenseMonthSelect = $("expense-month");
var expenseCategorySelect = $("expense-category");
var userIdPassport = //figure out how to get user id

    saveExpenseBtn.on("click", function handleSubmit(e) {
        e.preventDefault();

        var newExpense = {
            category: expenseCategorySelect.val(),
            expenseName: expenseNameInput.val(),
            amount: expenseAmountInput.val(),
            month: expenseMonthSelect.val(),
            userId: userIdPassport,
        };

        console.log(newExpense);

    });


function submitExpense(expense) {
    $.post("/api/expenses/", expense, function () {
        renderExpenses();
    });
}


function renderExpenses() {
    //render expense to table
}