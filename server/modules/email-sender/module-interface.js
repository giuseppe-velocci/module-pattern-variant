'use strict';

module.exports = {
    ...function () {
        const module = require('./module');

        return {
            sendMail: (req) => module.sendMail(req.params)
        }
    }()
};
