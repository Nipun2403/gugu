const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", function (request, response)
{
  // console.log(request);
  response.send('server.html');
})

app.get("/about", function(req, res)
{
  res.send("About Me")
})

app.listen(3000, function ()
{
  console.log("Server Started on port 3000");
});