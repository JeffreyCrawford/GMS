/* NodeMailer setup and configuration */
const nodemailer = require("nodemailer")

let poolConfig = {
pool: true,
host: process.env.NODEMAILER_HOST,
port: 465,
secure: true,
auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
}
};

let transporter = nodemailer.createTransport(poolConfig)

// Verify connection configuration
transporter.verify(function(error, success) {
if (error) {
    console.log("Nodemailer connection failed: " + error);
} else {
    console.log("Nodemailer connection established");
}
});

/* Test message */
     var message = {
    sender: "Grant Management System",
    from: "GrantProgramFinalProject@gmail.com",
    to: 'jeffrey.a.crawford@gmail.com',
    subject: 'new test',
    text: 'hello',
  };
/* transporter.sendMail(message) */ 

module.exports = nodemailer;