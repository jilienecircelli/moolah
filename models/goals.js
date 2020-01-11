module.exports = function (sequelize, DataTypes) {
    var Goals = sequelize.define("Goals", {
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        goalName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        monthlyContribution: {
            type: DataTypes.DECIMAL(13, 2),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        amount: {
            type: DataTypes.DECIMAL(13, 2),
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    
    });
    return Goals;
};

//create association - belong to a user - foreign key will be user Id 