module.exports = function(sequelize, Sequelize) {
    const Application = sequelize.define("application", {
        projectName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        zip: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        environmentalImpact: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        totalImpacted: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        fundsRequested: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        startDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        endDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "Pending",
            validate: {
                isIn: ["Pending", "Approved", "Denied"]
            }
        }

    
    });

    return Application;
}