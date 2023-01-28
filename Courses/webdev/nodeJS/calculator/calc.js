const express = require("express");

const app = express();

app.get("/", function (req,res)
{
  res.send("");
})

app.listen(4000, function()
{
  console.log("Server Started at port 4000");
})