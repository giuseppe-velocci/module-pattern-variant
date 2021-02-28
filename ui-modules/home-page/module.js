'use strict';

const methods = () => {
    const displayHome = () => {
        return `<h1>Welcome!</h1>
        <div>
            <ul>
                <li> <a href="/mail">Send mail</a> </li>
            </ul>
        </div>`;
    };

    return {
        displayHome: displayHome
    }
}

module.exports = { ...methods() };
