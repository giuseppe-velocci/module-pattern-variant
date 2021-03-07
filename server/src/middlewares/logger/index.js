const Installer = require("../../Installer");

module.exports = new Installer(function(app) {
    'use strict';

    app.use(function (req, res, next) {
        console.log(Date(), req.method, req.path, res.statusCode);
        next();
    });
}, 100);
