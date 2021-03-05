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

    const sendMail = (params) => {
        const mailOptions = {
            from: user,
            to: params.to,
            subject: params.subject,
            text: params.body
        };

        return transporter.sendMail(mailOptions).then(
            (_) => {
               return 'Sent!';
            },
            (err) => {
                return err.message;
            }
        );
    };

    return {
        sendMail: sendMail
    };
};

module.exports = { ...methods() };
