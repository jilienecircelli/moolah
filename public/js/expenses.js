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

// for creating table elements: 
{/* <td class="pt-3-half" id="expense-category">
</td>
    <td class="pt-3-half" id="expense-name">
    </td>
    <td class="pt-3-half" id="expense-amount">
    </td>
    <td>
        <span class="table-edit"><button type="button"
            class="btn btn-secondary btn-rounded btn-sm my-0"><i
                class="fa fa-pencil-alt"></i></button></span>
        <span class="table-remove"><button type="button"
            class="btn btn-secondary btn-rounded btn-sm my-0"><i
                class="fas fa-trash"></i></button></span>
    </td> */}