const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema(
  {
    name: String,
    rating: Number,
    review: String
  }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Very Nice"
});

const kiwi = new Fruit({
  name:"Kiwi",
  rating: 6,
  review:"Weird Taste"
});

const banana = new Fruit({
  name: "banana",
  rating: 10,
  review: "Lovely"
})

// Fruit.insertMany([kiwi, banana], function(err)
// {
//   if (err)
//   {
//     console.log(err)
//   }
//   else
//   {
//     console.log("Success")
//   }
// });


Fruit.deleteOne({name: "Kiwi"}, function(err)
{
  if (err)
  {
    console.log(err);
  }
  else
  {
    console.log("Succesfully Deleted");
  }

});

Fruit.find(function(err, fruit)
{
  if (err)
  {
    console.log(err);
  }
  else
  {
    fruit.forEach(function(fruit)
    {
      console.log(fruit.name);
      mongoose.connection.close();
    })
  }
})