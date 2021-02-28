'use strict';

const methods = () => {
    const displayForm = (action) => {
        return `<div style="width: 450px">
        <form method="POST" action="${action}">
        <label> To: <input type="text" id="to" name="to" size="50" /> </label>
        <label> Subject: <input type="text" id="subject" name="subject" size="50"  /> </label>
        <label> Body: <textarea rows="3" cols="50" id="body" name="body" /> </textarea> </label>
        <input type="submit" value="Send" />
        </form>
        </div>`;
    }

    const emailResultPage = (message, backUrl) => {
        return `<div style="width: 450px">
        <p>${message}</p>
        <a href="${backUrl}">Back</a>
        </div>`;
    }

    return {
        displayForm: displayForm,
        emailResultPage: emailResultPage
    };
};

module.exports = { ...methods() };
