// Requiring Modules
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// setting Express App
const app = express();

// Initializing Body-parser, ejs,etc
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Moongoose Connection
mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {
  useNewUrlParser: true
});

// Defining Article Schema
const articleSchema = new mongoose.Schema(
  {
    title: String,
    content: String
  }
);

// Defining Article
const Article = mongoose.model("Article", articleSchema);


// All Methods for "/Articles" Route
app.route("/articles")

  .get(function (req, res) {
    Article.find(function (err, article) {
      if (err) {
        res.send(err);
      }
      else {
        res.send(article);
      }

    })
  })

  .post(function (req, res) {
    let title = req.body.title;
    let content = req.body.content;

    const newArticle = new Article(
      {
        title: title,
        content: content
      }
    );
    newArticle.save(function (err) {
      if (!err) {
        res.send("successfully Added");
      }
      else {
        res.send(err);
      }
    });
  })


  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully Deleted All Articles")
      }
      else {
        res.send(err);
      }
    })
  });



app.route("/articles/:articleTitle")

  .get(function (req, res) {
    Article.findOne({ title: req.params.articleTitle }, function (err, foundArticle) {
      if (foundArticle) {
        res.send(foundArticle);
      }
      else {
        res.send("No Articles with Matching Title was Found");
      }
    })
  })

  .put(function(req,res)
  {
    Article.replaceOne(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      function(err)
      {
        if (!err)
        {
          res.send("Succefully Updated Info");
        }
        else{
          res.send("Article Not Found");
        }
      }

    );
  })

  .patch(function(req,res)
  {
    Article.updateOne(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      function(err)
      {
        if (!err)
        {
          res.send("Succefully Updated Info");
        }
        else{
          res.send("Article Not Found");
        }
      }

    );
  })

  .delete(function (req, res) {

    Article.deleteOne({title:req.params.articleTitle}, function (err) {
      if (!err) {
        res.send("Successfully Deleted Article")
      }
      else {
        res.send(err);
      }
    })
  });



// Starting Server on Port
app.listen(3000, function () {
  console.log("Connection up and running at port 3000");
})