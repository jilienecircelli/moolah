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

  app.post("/api/expenses", function(req, res) {
    db.Expenses.create(req.body).then(function(dbExpenses) {
      res.json(dbExpenses);
    });
  });

  app.delete("/api/expenses/:id", function(req, res) {
    db.Expenses.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExpenses) {
      res.json(dbExpenses);
    });
  });

  app.put("/api/expenses", function(req, res) {
    db.Expenses.update(
      req.body,
      {
      where: {
        id: req.body.id
      }
    }).then(function(dbExpenses) {
      res.json(dbExpenses);
    });
  });

};
