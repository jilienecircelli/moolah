var APIKey = "2bc1d4a81a2d4c66923810a1e539ad0d";
var queryURL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" + APIKey;

$.ajax({
        url: queryURL,
        method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
        // Transfer content to HTML
        for (var i = 0; i < 5; i++) {
            var article = response.articles[i];
            console.log(article)
            var title = article.title;
            var url = article.url;
            var img = article.urlToImage;
            var description = article.description;

            console.log("title is: ", title);

            var $articleTitle = $(`<h8> ${title}</h8> <br>`);
            $articleTitle.addClass("card-title");
            $(".financeNews-col").append($articleTitle);

            // var $articleDescription = $(`<h7> ${description}</h7> <br>`);
            // $articleDescription.addClass("card-text");
            // $(".financeNews-col").append($articleDescription);

            var $articleURL = $(`<a href="${url}" target="_blank"> Read Article </a> <br><br>`);
            $articleURL.addClass("card-link");
            $(".financeNews-col").append($articleURL);

        }
    })

//     <div class="card" style="width: 18rem;">
//   <img src="https://www.newsbtc.com/wp-content/uploads/2019/12/shutterstock_1525578740-1200x780.jpg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>