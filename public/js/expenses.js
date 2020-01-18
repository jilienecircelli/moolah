var saveExpenseBtn = $("#save-expense");
var expenseNameInput = $("#expense-name");
var expenseAmountInput = $("#expense-amount");
var expenseMonthSelect = $("#expense-month");
var expenseCategorySelect = $("#expense-category");
var editExpenseBtn = $("#table-edit");
var deleteExpenseBtn = $("#table-delete");
var expenseTableElement = $("#table-body");
var userID =[];


$.get("/api/user_data").then(function(user) {
    userID.push(user.id)
    console.log("USER ID: " + userID)
});

getExpenses();



$(saveExpenseBtn).on("click", function handleSubmit(e) {
    e.preventDefault();

    console.log(expenseNameInput.val());
    console.log(expenseAmountInput.val());
    console.log(expenseMonthSelect.val());
    console.log(expenseCategorySelect.val());


    var newExpense = {
        category: expenseCategorySelect.val(),
        expenseName: expenseNameInput.val(),
        amount: expenseAmountInput.val(),
        month: expenseMonthSelect.val(),
        userID: userID,
    };

    console.log(newExpense);

    submitExpense(newExpense);
});

function getExpenses() {
    var queryURL ="/api/expenses/user/" + userID
    $.get(queryURL, function(data) {
        console.log("Get expenses: " + data)
        
    //   var rowsToAdd = [];
    //   for (var i = 0; i < data.length; i++) {
    //     rowsToAdd.push(createExpenseRow(data[i]));
    //   }
    //   renderExpenses(rowsToAdd);
    });
  }

function submitExpense(expense) {
    $.ajax({
      method: "POST",
      url: "/api/expenses/",
      data: expense
    })
      .then(function() {
        console.log("this is the expense I am posting" + expense)
  });
}

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

function createExpenseRow(expense) {
    console.log(expense);
    var newTr = $("<tr>");
    newTr.data("expense", expense);
    newTr.append("<td id='expense-category'>" + expense.category + "</td>");
    newTr.append("<td># of posts will display when we learn joins in the next activity!</td>");
    newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }







function updateExpense(expense) {
    $.ajax({
        method: "PUT",
        url: "/api/expenses",
        data: expense
    })
        .then(function () {
            renderExpenses()
        });
}


function getExpenseData(id) {
    $.get("/api/posts/" + id, function (data) {
        if (data) {
            expenseNameInput.val(data.expenseName);
            bodyInput.val(data.body);
            expenseCategorySelect.val(data.category);
        }
    });
}

function deleteExpenseData(id) {
    $.ajax({
        method: "DELETE",
        url: "/api/expenses/" + id
    })
        .then(function () {
            //what do we do with the data? 
        });
}


function renderExpenses(expense) {
    console.log(expense);
}

// for creating table elements: 
