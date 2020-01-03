const express = require('express');
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars")
const path = require("path")

const PORT = process.env.PORT || 3000;

let app = express();

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
    });