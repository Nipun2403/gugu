const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req,res)
{
  res.sendFile(__dirname + "/bmi.html");
})

app.post("/", function (req,res)
{
  var height = req.body.height;
  var weight = req.body.weight;

  bmi = weight / (height**2);

  res.send("Your BMI : " + bmi);
})

app.listen(3000, function()
{
  console.log("Server Started at port 3000");
})