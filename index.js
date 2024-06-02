var router = require('./src/routes/index');
var bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config()
// var config = require("./config")
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
require('./src/routes/index')(app);

app.listen(parseInt(process.env.PORT, 10) || 8889, function () {
    console.log(`Server listen ${parseInt(process.env.PORT, 10)}`)
});