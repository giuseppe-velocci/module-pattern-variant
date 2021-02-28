module.exports = {
    priority: 2,
    code: function(app) {
        const navbar = require('../../ui-modules/shared/navbar/module-interface');
        const template = require('../../ui-modules/shared/page-template/module-interface');

        'use strict';

        const pathsToExclude = [];

        app.use(function (req, res, next) {
            if (req.method != 'GET' || pathsToExclude.includes(req)) {
                return next();
            }

            // https://github.com/expressjs/express/issues/1583
            const send = res.send;
            res.send = function (string) {
                var body = string instanceof Buffer ? string.toString() : string;
                body = template.displayTemplate(
                    `<link rel="stylesheet" href="site.css" />`,
                    `${navbar.displayNavbar()} ${body}`
                );
                send.call(this, body);
            };
            
            next();
        });
    }
};
