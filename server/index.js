const express = require('express');
const path = require("path");
const env = require('node-env-file');
env(__dirname + '/.env');

const app = express();
const port = process.env.MODULE_APP_PORT || 3000;

app.use(express.static(path.resolve('./public')));

const install = (app, baseFolder) => {
    // require all modules
    const modules = [];
    const normalizedPath = path.join(__dirname, baseFolder);
    require("fs").readdirSync(normalizedPath).forEach(function(folder) {
        modules.push(require(`./${baseFolder}/${folder}`));
    });
    
    // and execute them
    for (module of modules) {
        module(app);
    }
}

install(app, 'middlewares');
install(app, 'installers');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
