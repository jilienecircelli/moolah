$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    var postCategorySelect = $("#goal-category");
    var goalName = $("#goalName");
    var goalMonthlyContribution = $("#goalMonthlyContribution");
    var goalDescription = $("#goalDescription");
    var goalAmount = $("#goalAmount");
    var goalSubmitBtn = $("#goal-submit");

    function getGoals(id) {
        $.get("/api/goals-sidebar/user" + id, function(data) {
            userGoals = data;
            console.log(JSON.stringify(data));
    });
    }

    //get goals data for the user when loading the page
    $.get("/api/user_data")
    .then(function(user) {
    userID = user.id;
    console.log("user id " + userID);
    getGoals(userID);
    });

    function submitGoal(newGoal) {
        $.ajax({
            method: "POST",
            url: "/api/goals/",
            data: newGoal
        })
        .then(function () {
            console.log("this is the goal i am posting" + JSON.stringify(newGoal))
        });
    }



    // Adding an event listener for when the form is submitted
    $(goalSubmitBtn).on("submit", function handleFormSubmit(event) {
        event.preventDefault();

        var newGoal = {
            category: postCategorySelect.val(),
            goalName: goalName.val(),
            monthlyContribution: goalMonthlyContribution.val(),
            description: goalDescription.val().trim(),
            amount: goalAmount.val().trim(),
            userID: user.id,
        };
        console.log(newGoal);
        console.log("user id" + user.id);

        submitGoal(newGoal);
        getGoal(userID);
        // getGoals(userID);
    });



});







// function handleCategoryChange() {
//     var newGoalCategory = $(this).val();
//     getPosts(newGoalCategory);
// }

// function createNewRow(goal) {
//     var newGoalCard = $("<div>");
//     newGoalCard.addClass("card");
//     var newGoalCardHeading = $("<div>");
//     newGoalCardHeading.addClass("card-header");

//     // NO BUTTONS IN OUR HTML

//     // var deleteBtn = $("<button>");
//     // deleteBtn.text("x");
//     // deleteBtn.addClass("delete btn btn-danger");
//     // var editBtn = $("<button>");
//     // editBtn.text("EDIT");
//     // editBtn.addClass("edit btn btn-default");

//     var newGoalTitle = $("<h2>");
//     var newGoalDate = $("<small>");
//     var newGoalCategory = $("<h5>");
//     newGoalCategory.text(goal.category);
//     newGoalCategory.css({
//         float: "right",
//         "font-weight": "700",
//         "margin-top":
//             "-15px"
//     });
//     var newGoalCardBody = $("<div>");
//     newGoalCardBody.addClass("card-body");
//     var newGoalBody = $("<p>");
//     newGoalTitle.text(goal.title + " ");
//     newGoalBody.text(goal.body);
//     var formattedDate = new Date(goal.createdAt);
//     formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
//     newGoalDate.text(formattedDate);
//     newGoalTitle.append(newGoalDate);
//     newGoalCardHeading.append(deleteBtn);
//     newGoalCardHeading.append(editBtn);
//     newGoalCardHeading.append(newGoalTitle);
//     newGoalCardHeading.append(newGoalCategory);
//     newGoalCardBody.append(newGoalBody);
//     newGoalCard.append(newGoalCardHeading);
//     newGoalCard.append(newGoalCardBody);
//     newGoalCard.data("Goal", goal);
//     return newGoalCard;
// }
// function initializeRows() {
//     goalsContainer.empty();
//     var goalsToAdd = [];
//     for (var i = 0; i < goals.length; i++) {
//         goalsToAdd.push(createNewRow(goals[i]));
//     }
//     goalsContainer.append(goalsToAdd);
// }
// // This function constructs a goals' HTML

// $(document).ready(function () {
//     // blogContainer holds all of our posts
//     var goalsContainer = $(".goalz-col");
//     var goalCategorySelect = $("#category");
//     goalCategorySelect.on("change", handleCategoryChange);
//     var goals;

//     // This function grabs posts from the database and updates the view
//     function getGoals(category) {
//         var categoryString = category || "";
//         if (categoryString) {
//             categoryString = "/category/" + categoryString;
//         }
//         $.get("/api/goals" + categoryString, function (data) {
//             console.log("Goals", data);
//             goals = data;
//             if (!goals || !goals.length) {
//                 displayEmpty();
//             } else {
//                 initializeRows();
//             }
//         });
//     }
//     getGoals();

// });