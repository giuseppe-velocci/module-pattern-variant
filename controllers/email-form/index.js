module.exports = function(app) {
    const mailServer = require('../../modules/email-sender/module-listener');
    const mailUi = require('../../ui-modules/email-form/module-listener');

    'use strict';

    app.get('/', (req, res) => {
        res.send(mailUi.displayForm('./'));
    });
    
    app.post('/', (req, res) => {
        mailServer.sendMail(req).then(
            (_) => {
                res.send(mailUi.emailResultPage('Sent!', './'));
            },
            (err) => {
                res.send(mailUi.emailResultPage(err.message, './'));
            }
        );        
    });
};