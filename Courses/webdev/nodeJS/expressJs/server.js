const express = require("express");
const app = express();

app.get("/", function (request, response)
{
  // console.log(request);
  response.send('server.html');
})

app.listen(3000, function ()
{
  console.log("Server Started on port 3000");
});