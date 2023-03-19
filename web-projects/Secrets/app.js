// Requiring Modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { stringify } = require("querystring");

// Defining App
const app = express();

// Setting Up express App
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mongoose Connection
mongoose.connect("mongodb://127.0.0.1:27017/userDB", { useNewUrlParser: true });

// Defining User Schema
const userSchema = {
  email: String,
  password: String
};

// Construction User Model
const User = new mongoose.model("User", userSchema);









// Route Method for Home page
app.route("/")

  .get(function (req, res) {
    res.render('home');
  })
  ;

// Route Method For "/Login" Route
app.route("/login")


  .get(function (req, res) {
    res.render("login")
  })

  .post(function(req, res)
  {
    User.findOne({email: req.body.username}, function(err, foundUser)
    {
      if (foundUser && foundUser.password === req.body.password)
      { 
        res.render("secrets")
      }
      else{
        res.send("Not a registered User")
      }
    })
  })



// Route Method for "/Register" Route
app.route("/register")

  .get(function (req, res) {
    res.render("register")
  })

  .post(function (req, res) {
    const newUser = new User(
      {
        email: req.body.username,
        password: req.body.password
      }
    );
    newUser.save(function (err) {
      if (!err) {
        res.render("secrets");
      }
      else {
        res.send("Fatal Error, Recheck Your Code");
      }
    });

  })

  ;












// Starting the server 
app.listen(3000, function () {
  console.log("Server Up and Running on port 3000");
})