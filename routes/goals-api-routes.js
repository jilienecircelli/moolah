var db = require("../models");

module.exports = function(app) {
  app.get("/api/goals", function(req, res) {
    db.Goals.findAll({}).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });

  app.get("/api/goals/:month", function(req, res) {
    db.Goals.findAll({
        where: {
            month: req.params.month
          }
    }).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });

  app.get("/api/goals/:category", function(req, res) {
    db.Goals.findAll({
        where: {
            category: req.params.category
          }
    }).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });

  app.post("/api/goals", function(req, res) {
    db.Goals.create(req.body).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });

  app.delete("/api/budget/:id", function(req, res) {
    db.Goals.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });

  app.put("/api/goals", function(req, res) {
    db.Goals.update(
      req.body,
      {
      where: {
        id: req.body.id
      }
    }).then(function(dbGoals) {
      res.json(dbGoals);
    });
  });

};
