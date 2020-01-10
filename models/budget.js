module.exports = function(sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(13,2),
        allowNull: false,
      },
      month: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Budget;
  };