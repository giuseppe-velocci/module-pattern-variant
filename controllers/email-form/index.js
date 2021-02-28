module.exports = function(app) {
    const mailServer = require('../../modules/email-sender/module-interface');
    const mailUi = require('../../ui-modules/email-form/module-interface');

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
