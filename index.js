const express = require('express');
const path = require("path");
const env = require('node-env-file');
env(__dirname + '/.env');

const app = express();
const port = process.env.MODULE_APP_PORT || 3000;

app.use(express.static(path.resolve('./public')));

// require all controllers
const modules = [];
var normalizedPath = path.join(__dirname, "controllers");
require("fs").readdirSync(normalizedPath).forEach(function(folder) {
    modules.push(require(`./controllers/${folder}`));
});
// sort them by priority (lower is executed first)
const modulesWithPriority = modules.sort(function(a,b) { 
    return parseFloat(a.priority) - parseFloat(b.priority)
});
// and execute them
for (module of modulesWithPriority) {
    module.code(app);
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
