var db = require("../config/db")
const nodemailer = require("../config/nodemailer")
const bcrypt = require('bcrypt');
const passport = require("passport")

module.exports = (app, db, nodemailer) => {
    /* Get users */
    app.get("/api/users", 

    passport.authenticate("local-signup", {
        successRedirect: '/',
        failureRedirect: '/login',
    }),



    function(req, res) {
        db.users.findAll({
        }).then(function (data) {
            res.send(data)
        })

    });

    app.get("/api/userGroups", function(req, res) {
        db.userGroups.findAll({
          }).then(function (data) {
            res.send(data)
          });
    });
    

    /* Create user */
    app.post("/api/users", function(req, res) {
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            db.users.create({
                email: req.body.email,
                // categoryID: req.body.categoryID,
                password: hash,
            });
        });
    });

    /* Get applications */
    app.get("/api/applications", function(req, res) {
        db.applications.findAll({
            }).then(function (data) {
            res.send(data)
            });
    });

    /* Create application */
    app.post("/api/applications", function(req, res) {
        db.applications.create({
            projectName: req.body.projectName,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            description: req.body.description,
            environmentalImpact: req.body.environmentalImpact,
            totalImpacted: req.body.totalImpacted,
            fundsRequested: req.body.fundsRequested,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            status: req.body.status
        });
    });




    /* Get bank account */
    app.get("/api/bankAccounts", function(req, res) {
        db.bankAccounts.findAll({
            }).then(function (data) {
            res.send(data)
            });
    });

    /* Create bank account */
    app.post("/api/bankAccounts", function(req, res) {
        bcrypt.hash(req.body.account, 10, function(err, hash) {
            db.bankAccounts.create({
                bankName: req.body.bankName,
                routing: req.body.routing,
                account: hash,
                contactName: req.body.contactName,
                contactPhone: req.body.contactPhone
            });
        });
    });


    /* Get disbursement requests */
    app.get("/api/disbursementRequests", function(req, res) {
        db.disbursementRequests.findAll({
            }).then(function (data) {
            res.send(data)
            });
    });

    /* Create disbursement request */
    app.post("/api/disbursementRequests", function(req, res) {
        db.disbursementRequests.create({
            name: req.body.name,
            fundsRequested: req.body.fundsRequested,
            finalDisbursement: req.body.finalDisbursement,
            date: req.body.date,
            signature: req.body.signature,
            status: req.body.status
        });
    });


    /* Get profiles */
    app.get("/api/profiles", function(req, res) {
        db.profiles.findAll({
            }).then(function (data) {
            res.send(data)
            });
    });

    /* Create profile */
    app.post("/api/profiles", function(req, res) {
        db.profiles.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            organization: req.body.organization,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        });
    });
    

}