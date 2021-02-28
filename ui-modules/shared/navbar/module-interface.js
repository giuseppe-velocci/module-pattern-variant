module.exports = function() {
    const module = require('./module');

    return {
        displayNavbar: () => module.displayNavbar()
    }
}();
