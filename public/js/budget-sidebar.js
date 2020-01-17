var APIKey = "2bc1d4a81a2d4c66923810a1e539ad0d";
var queryURL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
        // Transfer content to HTML
        for (var i = 0; i < 3; i++) {
        var article = response.articles[i];
        console.log(article)
        var title = article.title;
        var url = article.url;
        var description = article.description;

        console.log('title is: ', title);

        var $articleTitle = $('<h8> ${title}</h8> <br>');
        $articleTitle.addClass('card-title');
        $('.financeNews-col').append($articleTitle); 

        // var $articleDescription = $(`<h7> ${description}</h7> <br>`);
        // $articleDescription.addClass("card-text");
        // $(".financeNews-col").append($articleDescription);

        var $articleURL = $(`<a href="${url}" target="_blank"> news link </a> <br><br>`);
        $articleURL.addClass("card-link");
        $(".financeNews-col").append($articleURL);
        
    }})