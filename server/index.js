const express = require('express');
const path = require("path");
const env = require('node-env-file');
env(__dirname + '/.env');

const app = express();
const port = process.env.MODULE_APP_PORT || 3000;

app.use('/', express.static(path.resolve('../client/public')));

const install = (app, baseFolder) => {
    // require all modules
    const modules = [];
    baseFolder = `./src/${baseFolder}`;
    const normalizedPath = path.join(__dirname, baseFolder);
    require("fs").readdirSync(normalizedPath).forEach(function(folder) {
        modules.push(require(`${baseFolder}/${folder}`));
    });

    // sort them by priority --> higher priority goes first
    const sortedModules = modules.sort((x, y) => x.priority < y.priority);
    
    // and execute them
    for (module of sortedModules) {
        module.installer(app);
    }
}

install(app, 'middlewares');
install(app, 'installers');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
