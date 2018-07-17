/* Initialize Sequelize */
var env = process.env.NODE_ENV;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
host: process.env.MYSQL_HOST,
dialect: 'mysql',
operatorsAliases: false,

pool: {
	max: 5,
	min: 0,
	acquire: 30000,
	idle: 10000
}
});

/* Sequelize authentication/connection testing */
sequelize
.authenticate()
.then(() => {
	console.log("Sequelize connection to MYSQL established");
})
.catch(err => {
	console.error("Sequelize connection to MYSQL failed:", err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require('../models/users.js')(sequelize, Sequelize);
db.profiles = require('../models/profiles.js')(sequelize, Sequelize);
db.bankAccounts = require('../models/bankAccounts.js')(sequelize, Sequelize);
db.applications = require('../models/applications.js')(sequelize, Sequelize);
db.disbursementRequests = require('../models/disbursementRequests.js')(sequelize, Sequelize);

/* Associations */
db.bankAccounts.belongsTo(db.users)
db.applications.belongsTo(db.users);
db.profiles.hasMany(db.applications);
db.disbursementRequests.belongsTo(db.applications);
db.applications.hasMany(db.disbursementRequests);

//Relations
/* db.pets.belongsTo(db.owners);
db.owners.hasMany(db.pets); */

module.exports = db;