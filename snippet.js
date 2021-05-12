var express = require("express");
let cron = require('node-cron');
let nodemailer = require('nodemailer');

app = express();

var transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'mail.mysmtpserver.com',
    // port: 465,
    // pool: true, // This is the field you need to add
    // secure: true,
    auth: {
        user: 'srkrao547@gmail.com',
        pass: 'srkvshiva87'
    },
    authMethod:'NTLM',
    secure:false,
    tls: {rejectUnauthorized: false},
    debug:true
});

var mailOptions = {
    from: 'srkrao547@gmail.com',
    to: 'dixithmaram1@gmail.com, srkvodnala547@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

cron.schedule('* * * * * *', () => {
    // Send e-mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});


app.listen(3000);