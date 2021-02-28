const express = require('express');
const env = require('node-env-file');

env(__dirname + '/.env');

const app = express();
const port = process.env.MODULE_APP_PORT || 3000;

// require all controllers and execute them
var normalizedPath = require("path").join(__dirname, "controllers");
require("fs").readdirSync(normalizedPath).forEach(function(folder) {
    require(`./controllers/${folder}`)(app);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
