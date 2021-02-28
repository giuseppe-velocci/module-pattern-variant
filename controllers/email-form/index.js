module.exports = {
    priority: 10,
    code: function(app) {
        const mailServer = require('../../modules/email-sender/module-interface');
        const mailUi = require('../../ui-modules/email-form/module-interface');

        'use strict';

        app.get('/mail', (req, res) => {
            res.send(mailUi.displayForm('./'));
        });
        
        app.post('/mail', (req, res) => {
            mailServer.sendMail(req).then(
                (_) => {
                    res.send(mailUi.emailResultPage('Sent!', './mail'));
                },
                (err) => {
                    res.send(mailUi.emailResultPage(err.message, './mail'));
                }
            );        
        });
    }
};
