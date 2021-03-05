'use strict';

module.exports = {
    ...function () {
        const module = require('./module');

        return {
            buildLocalUrl: (url) => module.buildLocalUrl(url),
            fetchApi: (url, data) => module.fetchApi(url, data),
            postApi: (url, data) => module.postApi(url, data)
        }
    }()
};
