module.exports = {
    priority: 10,
    code: function(app) {
        const mailServer = require('../../modules/email-sender/module-interface');
        const mailUi = require('../../ui-modules/email-form/module-interface');

        'use strict';

        const handleEmailResult = (req, res) => {
            return mailServer.sendMail(req).then(
                (_) => {
                    res.send(mailUi.emailResultPage('Sent!', './'));
                },
                (err) => {
                    res.send(mailUi.emailResultPage(err.message, './'));
                }
            );  
        };

        //
        app.get('/mail', (_, res) => {
            res.send(mailUi.displayForm('./mail'));
        });
        
        app.post('/mail', (req, res) => {
            handleEmailResult(req, res);  
        });
    }
};
