# cloudcode-template

A cloudcode template project used for managing the Parse server code.

# Setup

## Install MongoDB

TODO

## Install express, typescript, parse-server and parse-dashboard

### In the project folder:

```bash
npm install express;
sudo npm install -g typescript; # installs the typescript compiler
npm install parse-server;
npm install parse-dashboard;
npm install mongodb-runner;
```

## Setup your project

Edit the `dashboard.js` and `server.js` files to meet your needs. Don't forget to change the project name and database connection URL.

# Running

Run MongoDB:

```bash
mongod
```

Compile your typescript code into JavaScript:

```bash
tsc main.ts
```

Run the server:

```bash
node server.js
```

Run the dashboard:

```bash
node dashboard.js
```

Go to http://localhost:4040/dashboard
