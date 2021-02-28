'use strict';

const methods = () => {
    const displayNavbar = () => {
        return `<ul class="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/mail">Mail</a></li>
      </ul>`;
    };

    return {
        displayNavbar: displayNavbar
    }
}

module.exports = { ...methods() };
