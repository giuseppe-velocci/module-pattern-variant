module.exports =  function(app) {
    'use strict';

    app.use(function (req, res, next) {
        console.log(req.method, req.path, res.statusCode); // must check if it works
        next();
    });
};
