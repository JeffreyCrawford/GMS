module.exports = function(sequelize, Sequelize) {
    const UserGroup = sequelize.define("userGroup", {

        groupId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        group: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    
    });

    return UserGroup;
}