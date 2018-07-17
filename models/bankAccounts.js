module.exports = function(sequelize, Sequelize) {
    const BankAccount = sequelize.define("bankaccount", {
        bankName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        routing: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        account: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        contactName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        contactPhone: {
            type: Sequelize.STRING,
            allowNull: false,

        }
    });
    return BankAccount;
}