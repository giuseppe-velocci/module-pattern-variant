'use strict';

const methods = () => {
    const displayTemplate = (head, body) => {
        return `<head>
                ${head}
            </head>
            <body>
                ${body}
            </body>`;
    };

    return {
        displayTemplate: displayTemplate
    }
}

module.exports = { ...methods() };
