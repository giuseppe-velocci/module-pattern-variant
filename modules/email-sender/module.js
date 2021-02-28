'use strict';

const nodemailer = require('nodemailer');
const config = require('../../config.json');

const methods = () => {
    const transporter = nodemailer.createTransport({
        service: config.mail.service,
        auth: {
          user: config.mail.user,
          pass: config.mail.password
        }
    });

    const sendMail = (to, subject, body) => {
        const mailOptions = {
            from: config.mail.user,
            to: to,
            subject: subject,
            text: body
        };

        return transporter.sendMail(mailOptions);
        
        /* transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                const successMessage = 'Email sent: ' + info.response;
                console.log(successMessage)
            }
        }); */
    };

    return {
        sendMail: sendMail
    };
};

module.exports = { ...methods() };