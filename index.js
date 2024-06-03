// var router = require('./src/routes/index');
// const path = require('path');
// var config = require("./config")
var bodyParser = require('body-parser');
var cors = require('cors')
const fs = require('fs');
require('dotenv').config()
const https = require("https");
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
require('./src/routes/index')(app);

// const certPath = path.join(__dirname, 'src', 'certificate', 'localhost.pem');
// const keyPath = path.join(__dirname, 'src', 'certificate', 'localhost-key.pem');

const certPath = process.env.PATH_CER;
const keyPath = process.env.PATH_CER_KEY;

// const certPath = "./src/certificate/localhost.pem";
// const keyPath = "./src/certificate/localhost-key.pem";

const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
};

const server = https.createServer(options, app);

server.listen(parseInt(process.env.PORT, 10) || 8889, () => {
    console.log(`Server listen ${process.env.PORT}`);
});


// app.listen(parseInt(process.env.PORT, 10) || 8889, function () {
//     console.log(`Server listen ${parseInt(process.env.PORT, 10)}`)
// });