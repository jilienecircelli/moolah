// $(document).ready(function() {
//     //get the userID number- come back later because it doesnt have any data.
//     $.get("/api/goals").then(function(goals) {
//     userID = goals.userID;
//     console.log("user id " + userID);
//     });

//     var goalsContainer = $(".goals-col");
//     var postCategorySelect = $("#category");
//     postCategorySelect.on("change",handleCategoryChange);
//     var goals;

//     //here we are getting the goals from database
//     function getGoals(category) {
//         var categoryString = category || "";
//         if (categoryString) {
//             categoryString = "/category/" + categoryString;
//         }
//         $.get("/api/goals" + categoryString, function(data) {
//             console.log("Goals", data);
//             goals = data;
//             if (!goals || !goals.length) {
//                 displayEmpty();
//             }
//             else {
//                 initializeRows();
//             }
//         });
//     }
//     getGoals();

//     function initializeRows() {
//         goalsContainer.empty();
//         var goalsToAdd = [];
//         for (var i = 0; i < goals.length; i++) {
//             goalsToAdd.push(createNewRow(goals[i]));
//         }
//         goalsContainer.append(goalsToAdd);
//     }

//     function createNewRow(goal) {
//         var newGoalCard = $("<div>");
//         newGoalCard.addClass("card");
//         var newGoalCardHeading = $("<div>");
//         newGoalCardHeading.addClass("card-header");
//         var newGoalTitle = $("<h2>");
//         var newGoalDate = $("<small>");
//         var newGoalCategory = $("<h5>");
//         newGoalCategory.text(goal.category);
//         newGoalCategory.css({
//         float: "right",
//         "font-weight": "700",
//         "margin-top":
//         "-15px"
//         });
//         var newGoalCardBody = $("<div>");
//         newGoalCardBody.addClass("card-body");
//         var newGoalBody = $("<p>");
//         newGoalTitle.text(goal.title + " ");
//         newGoalBody.text(goal.body);
//         // var formattedDate = new Date(goal.createdAt);
//         // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
//         // newGoalDate.text(formattedDate);
//         newGoalTitle.append(newGoalDate);
//         newGoalCardHeading.append(newGoalTitle);
//         newGoalCardHeading.append(newGoalCategory);
//         newGoalCardBody.append(newGoalBody);
//         newGoalCard.append(newGoalCardHeading);
//         newGoalCard.append(newGoalCardBody);
//         newGoalCard.data("goal", goal);
//         return newGoalCard;
//     }

//     function handleCategoryChange() {
//         var newGoalCategory = $(this).val();
//         getGoals(newGoalCategory);
//     }
// });




    // Getting jQuery references to the post body, title, form, and author select
    var postCategorySelect = $("#goal-category");
    var goalName = $("#goalName");
    var goalMonthlyContribution = $("#goalMonthlyContribution");
    var goalDescription = $("#goalDescription");
    var goalAmount = $("#goalAmount");
    var goalSubmitBtn = $("#goal-submit");

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