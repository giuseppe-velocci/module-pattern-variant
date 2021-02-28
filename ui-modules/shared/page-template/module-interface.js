module.exports = function() {
    const module = require('./module');

    return {
        displayTemplate: (head, body) => module.displayTemplate(head, body)
    }
}();
