var db = require("../models");

module.exports = function(app) {
  app.get("/api/budget", function(req, res) {
    db.Budget.findAll({}).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });

  app.get("/api/budget/:month", function(req, res) {
    db.Budget.findAll({
        where: {
            month: req.params.month
          }
    }).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });

  app.get("/api/budget/:category", function(req, res) {
    db.Budget.findAll({
        where: {
            category: req.params.category
          }
    }).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });

  app.post("/api/budget", function(req, res) {
    db.Budget.create(req.body).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });

  app.delete("/api/budget/:id", function(req, res) {
    db.Budget.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });

};
