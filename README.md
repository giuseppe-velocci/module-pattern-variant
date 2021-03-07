# module-pattern-variant
A playground to tinker with modular pattern adding controllers

# Installation:
Install [node](https://nodejs.org/en/download/). To test installation open a console and input:

```node -v```

It should return version installed. Also ```npm``` is needed (it will be shipped together with node).
Copy the ```.env.example``` file in the /server folder and rename it as ```.env```.

Open 2 console teminal windows, one pointing at ```/server``` folder, the other to ```/client``` folder inside this repository. In both terminal install modules with the command:

```npm install```

Then you can test the app starting dev servers. Start the server first from the terminal pointing to server folder running the command:

```npm run start```

then start client app from the other terminal with the command:

```npm run dev```

Since this app uses [nodemon](https://www.npmjs.com/package/nodemon) each change to local file will automatically restart server.

Then open your briwser at http://localhost:3200 to navigate it. The port can be different depending on the ```.env``` file parameters.