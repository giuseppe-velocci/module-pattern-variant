module.exports =  function() {
    const module = require('./module');

    return {
        displayForm: (action) => module.displayForm(action),
        emailResultPage: (message, backUrl) => module.emailResultPage(message, backUrl) 
    };
}();
