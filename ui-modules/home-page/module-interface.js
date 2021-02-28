module.exports = function() {
    const module = require('./module');

    return {
        displayHome: () => module.displayHome()
    }
}();
