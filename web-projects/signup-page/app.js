// Requiring Required Modules

const express = require('express');
const https = require("https");
const bodyParser = require("body-parser");
const { json } = require('body-parser');
const { post } = require('request');
const { request } = require('http');
const { response } = require('express');
const app = express();


// Initializing Modules

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));


// Get Method

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
})



// Post Method

app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {

    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields:
        {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]

  }

  const jsonData = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/c5168ea44e"

  const option = {
    method: "POST",
    auth: "Brother:0e8ac881a38c288edffcb1c604addb91-us21"
  }

  const request = https.request(url, option, function (responce) {

    if (responce.statusCode == 200)
    {
      res.sendFile(__dirname + "/signup.html");
    }
    else
    {
      res.sendFile(__dirname + "/failure.html")
    }
    responce.on("data", function (data) {
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData);
  request.end(); 
  // console.log(firstName);
  // console.log(lastName);
  // console.log(email);

})



app.post("/failure", function(req,res)
{
  res.redirect("/");
})











app.listen(3000, function () {
  console.log("Server is Up and Running on Port 3000");
})



// 0e8ac881a38c288edffcb1c604addb91-us21
