    var postCategorySelect = $("#goal-category");
    var goalName = $("#goalName");
    var goalMonthlyContribution = $("#goalMonthlyContribution");
    var goalDescription = $("#goalDescription");
    var goalAmount = $("#goalAmount");
    var submitGoalBtn = $("#submit-goal");
    var userGoals = [];

    $.get("/api/user_data")
        .then(function(user) {
            var userID = user.id;
            console.log(userID);
            getGoals(userID);
        });

    $(submitGoalBtn).on("click", function handleFormSubmit(event) {
        event.preventDefault();
                    
        $.get("api/user_data")
            .then(function (user) {
                var userID = user.id;

                console.log(userID)

                var newGoal = {
                    category: postCategorySelect.val(),
                    goalName: goalName.val(),
                    monthlyContribution: goalMonthlyContribution.val(),
                    description: goalDescription.val().trim(),
                    amount: goalAmount.val().trim(),
                    userID: user.id,
                };
                console.log(newGoal);
                submitGoal(newGoal);
                renderGoalsRows(newGoal);
            });
    });

    function submitGoal(goal) {
        $.ajax({
            method: "POST",
            url: "/api/goals/",
            data: goal
        })
            .then(function () {
                console.log("trying thousand times" + JSON.stringify(goal));
            });
    }

    function getGoals(id) {
        $.get("/api/goals/" + id, function (data) {
            userGoals = data;
            console.log(JSON.stringify(data));
            renderGoalsRows();
        })
    }

    function renderGoalsRows (goals) {
        console.log("createnewgoalrow" + JSON.stringify(goals));
        var newGoalName = goals.goalName;
        var newGoalDescription = goals.description;
        var newGoalCategory = goals.category;
        var newGoalAmount = goals.amount;
        var newGoalContribution = goals.monthlyContribution;
        
        console.log(newGoalName);

        var $newGoalHeading = $(`<h5> ${newGoalName}</h5>`);
        $newGoalHeading.addClass("card-header");
        $(".goals-col").append($newGoalHeading);

        var $newGoalDescription = $(`<h9> Description: ${newGoalDescription}</h9> <br>`);
        $newGoalDescription.addClass("card-text");
        $(".goals-col").append($newGoalDescription);

        var $newGoalCategory = $(`<h9> Category: ${newGoalCategory}</h9> <br>`);
        $newGoalCategory.addClass("card-text");
        $(".goals-col").append($newGoalCategory);

        var $newGoalAmount = $(`<h9> Goal amount: ${newGoalAmount}</h9> <br>`);
        $newGoalAmount.addClass("card-text");
        $(".goals-col").append($newGoalAmount);

        var $newGoalContribution = $(`<h9> Monthly Contribution: ${newGoalContribution}</h9> <br>`);
        $newGoalContribution.addClass("card-text");
        $(".goals-col").append($newGoalContribution);
    }