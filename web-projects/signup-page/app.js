// Requiring Required Modules

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


















app.listen(3000, function()
{
  console.log("Server is Up and Running on Port 3000"); 
})
