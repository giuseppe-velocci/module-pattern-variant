const Installer = require("../../Installer");

module.exports = new Installer(function(app) {
    const mailServer = require('../../modules/email-api/module-interface');

    'use strict';

    const mailResult = async (req, _) => {
        return await mailServer.sendMail(req);
    };

    //
    app.post('/api/mail', (req, res) => {
            res.send(mailResult(req, res));
    });

    app.get('/api/mail', (_, res) => {
        res.send('mail v0.1');
    });
});
