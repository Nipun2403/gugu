const express = require('express');
const { read } = require('fs');
const app = express();
const https = require("https");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get("/", function(req,res)
{

  res.render('index');

});


app.post("/", function(req,res)
{

const query = req.body.cityName;
const unit = "metric";
const apiKey = "a4586d6ca1cb1a0db33a44ddbfe97366";

const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + apiKey + "&units=" + unit ;
https.get(url, function(responce)
{
  console.log(responce.statusCode);

  responce.on("data", function(data)
  {

    
    const weatherData = JSON.parse(data);
    // console.log(weatherData);
    const temp = weatherData.main.temp;
    const feelsLike = weatherData.main.feels_like;
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;
    const imgUrl = "http://openweathermap.org/img/wn/"+ icon+"@2x.png";

    // res.write("<h1>The weather is " + description + "</h1> ");
    // res.write("<p>Current Temprature is : " + temp + "</p>");
    // res.write("<p>Feels like : " + feelsLike + "</p>");
    // res.write("<img src = " + imgUrl + ">");

    // console.log("about : " + description );
    // console.log(icon);
    // console.log(temp);
    // console.log("Feels like : " + feelsLike);

    let result = {
      cityName: query,
      weather: description,
      temprature: temp,
      feels: feelsLike,
      src:imgUrl
    }


    res.render('result', {result})
  })

});

})





// const query = "London";
// const unit = "metric";
// const apiKey = "a4586d6ca1cb1a0db33a44ddbfe97366";

// const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + apiKey + "&units=" + unit ;
// https.get(url, function(responce)
// {
//   console.log(responce.statusCode);

//   responce.on("data", function(data)
//   {

    

//     const weatherData = JSON.parse(data);
//     const temp = weatherData.main.temp;
//     const feelsLike = weatherData.main.feels_like;
//     const description = weatherData.weather[0].description;
//     const icon = weatherData.weather[0].icon;
//     const imgUrl = "http://openweathermap.org/img/wn/"+ icon+"@2x.png";

//     res.write("<h1>The weather is " + description + "</h1> ");
//     res.write("<p>Current Temprature is : " + temp + "</p>");
//     res.write("<p>Feels like : " + feelsLike + "</p>");
//     res.write("<img src = " + imgUrl + ">");
//     console.log("about : " + description );
//     console.log(icon);
//     console.log(temp);
//     console.log("Feels like : " + feelsLike);

//     res.send();
//   })

// });







app.listen(3000, function()
{
  console.log("Server Started on Port 3000");
})