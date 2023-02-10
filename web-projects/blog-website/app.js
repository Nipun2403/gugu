// Requiring Modules

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash")
const mongoose = require("mongoose");

// Sample Text
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// Initializing app
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Decalring Variables and Functions
let posts = [];

// String Truncating Function
function truncateString(str, num) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}


mongoose.connect("mongodb://127.0.0.1:27017/blogsDB", {
  useNewUrlParser: true
});

const blogSchmea = new mongoose.Schema(
  {
    title: String,
    content: String
  }
);

const Blog = mongoose.model("Blog", blogSchmea);



Blog.find(function(err,blog)
  {
    if (err)
    {
      console.log(err);
    }
    else
    {
      blog.forEach(function(blogs)
      {
        let postO = 
        {
          title: blogs.title,
          content: blogs.content
        };

        posts.push(postO);

      })
    }
  })



// Home Route
app.get("/", function (req, res) {
  
  res.render('home', { homeContent: homeStartingContent, posts: posts });

});

// About Route
app.get("/about", function (req, res) {
  res.render('about', { aboutContent: aboutContent })

});

// Contact Route
app.get("/contact", function (req, res) {
  res.render('contact', { contactContent: contactContent })

});

// Compose Route
app.get("/compose", function (req, res) {
  res.render('compose')
});


// New Post Request
app.post("/compose", function (req, res) {

  // defining post json
  // const post = {
  //   title: req.body.postTitle,
  //   body: req.body.postBody
  // };  

  const post = new Blog(
    {
      title: req.body.postTitle,
      content: req.body.postBody
    });

  posts.push(post);

  // pusing json post into global posts array
  // posts.push(post)


  // console.log(posts);
  // compose.push(composeItem);
  post.save();
  res.redirect("/compose");
});

app.get('/:id', function (req, res) {

  let requestedTitle = _.lowerCase(req.params.id);

  Blog.find(function(err,blog)
  {
    if (err)
    {
      console.log(err);
    }
    else{
      blog.forEach(function(blogs)
      {
        let actualTitle = _.lowerCase(blogs.title);
        if ( actualTitle === requestedTitle)
        {

          res.render('post', { title: blogs.title, body: blogs.content })

        }
      })
    }
  })




});






  // posts.forEach(function (post) {
  //   let actualTitle = _.lowerCase(post.title)
  //   if (actualTitle === requestedTitle) {
  //     res.render('post', { title: post.title, body: post.body })
  // console.log("Match Found"); 

// }
//     else {
//     res.redirect("/")

//   }
//   })

  // res.redirect("/")
// })


// Blog.find(function (err, blog) {
//   if (err) {
//     console.log(err);
//   }
//   else {

//     fruit.forEach(function (blogs) {
//       // let title = blogs.title;
//       // let content = blogs.content;

//       if (blog.title === requestedTitle) {
//         res.render('post', { title: blog.title, body: blog.content })
//         // console.log("Match Found"); 


//       }
//       else {
//         console.log("Not found");
//       }
//     })
//   }
//   mongoose.connection.close();
// })






app.listen(3000, function () {
  console.log("Server up and running on port 3000");
});
