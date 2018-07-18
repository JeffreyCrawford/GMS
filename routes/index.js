const routes = [
	require('./routes'),
];


/* Route connections */
module.exports = function router(app, passport, db, nodemailer) {
	return routes.forEach((route) => {
	route(app, passport, db, nodemailer);
	});
};