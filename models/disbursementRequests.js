module.exports = function(sequelize, Sequelize) {

    const DisbursementRequest = sequelize.define("disbursementrequest", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fundsRequested: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        finalDisbursement: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        signature: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "Pending",
            validate: {
                isIn: ["Pending", "Approved", "Denied"]
            }
        },
   });

   return DisbursementRequest;
}