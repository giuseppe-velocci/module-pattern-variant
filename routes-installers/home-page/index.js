module.exports = {
    priority: 10,
    code: function(app) {
        const ui = require('../../ui-modules/home-page/module-interface');

        'use strict';

        app.get('/', (req, res) => {
            res.send(ui.displayHome());
        });
    }
};
