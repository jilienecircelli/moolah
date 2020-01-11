var db = require("../models");

module.exports = function(app) {
  app.get("/api/expenses", function(req, res) {
    db.Expenses.findAll({}).then(function(dbExpenses) {
      res.json(dbExpenses);
    });
  });

  app.get("/api/expenses/:month", function(req, res) {
    db.Expenses.findAll({
        where: {
            month: req.params.month
          }
    }).then(function(dbExpenses) {
      res.json(dbExpenses);
    });
  });

  app.get("/api/expenses/:category", function(req, res) {
    db.Expenses.findAll({
        where: {
            category: req.params.category
          }
    }).then(function(dbExpenses) {
      res.json(dbExpenses);
    });
  });


//   app.get("/api/authors/:id", function(req, res) {
//     db.Author.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.post("/api/authors", function(req, res) {
//     db.Author.create(req.body).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.delete("/api/authors/:id", function(req, res) {
//     db.Author.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

};
