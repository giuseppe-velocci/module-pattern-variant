'use strict';

const methods = () => {
    const fetch = require('node-fetch');
    const env = require('node-env-file');

    const buildLocalUrl = (url) => {
        return `${env.MODULE_APP_URL}:${env.MODULE_APP_PORT}/${url}`;
    }
    
    const fetchApi = (url, data) => {
        console.log("go go ");
        const urlWithParams = url + JSON.stringify(data); // should convert to get params
        return fetch(urlWithParams, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })
        .then(
            response => {
                return response.json();
            },
            reject => {
                return reject
            }
        );
    };

    const postApi = (url, data) => {
        console.log("post go ");
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(
            response => {
                return response.json();
            },
            reject => {
                return reject;
            }
        );
    };

    return {
        buildLocalUrl: buildLocalUrl,
        fetchApi: fetchApi,
        postApi: postApi
    };
};

module.exports = { ...methods() };
