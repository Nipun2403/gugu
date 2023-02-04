
module.exports.getDate = function()
{
  
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  
  var title = new Date();

  return title.toLocaleDateString("en-US", options);
};

module.exports.getDay = function()
{
    
  var options = {
    weekday: "long"
  };
  
  var title = new Date();

  return title.toLocaleDateString("en-US", options);
}