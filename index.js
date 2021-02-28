const express = require('express');
const config = require('./config.json');

const app = express();
const port = config.port;

// require all controllers and execute them
var normalizedPath = require("path").join(__dirname, "controllers");
require("fs").readdirSync(normalizedPath).forEach(function(folder) {
    require(`./controllers/${folder}`)(app);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});