'use strict';

const nodemailer = require('nodemailer');

const methods = () => {
    const user = process.env.MAIL_USER || '';

    const transporter = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE || '',
        auth: {
          user: user,
          pass: process.env.MAIL_PWD || ''
        }
    });

    const sendMail = (to, subject, body) => {
        const mailOptions = {
            from: user,
            to: to,
            subject: subject,
            text: body
        };

        return transporter.sendMail(mailOptions);
    };

    return {
        sendMail: sendMail
    };
};

module.exports = { ...methods() };
