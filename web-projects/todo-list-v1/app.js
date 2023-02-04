const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
var items = [];
let workItems = [];

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));





app.get("/", function (req, res) {

  let dayjs = date.getDate()


  res.render('index', { list: items, heading: dayjs });
}
);


app.post("/", function (req, res) {
  var newItem = req.body.newItem;
  
  // console.log(req.body.listBtn);
  if (req.body.listBtn ==="Work")
  {
    workItems.push(newItem);
    res.redirect("/work");
  }
  else{
    
    items.push(newItem);
    res.redirect("/");
  }


})


app.get("/work", function (req, res)
{
  var title = "Work List";


  res.render('index', {list:workItems, heading: title});
}
);

app.get("/about", function(req, res)
{

  res.render('about.ejs')

});



app.listen(3000, function () {
  console.log("Server up and running on port 3000");
})