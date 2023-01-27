btn = document.querySelectorAll("button");

for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", function ()
{
  var clicked = this.innerHTML;
  sound(clicked);
  animation(clicked);
})
}


document.addEventListener("keydown", function(event)
{
  console.log(event.key);
  sound(event.key);
  animation(event.key);
})


function sound(key) {

  switch (key) {

    case "w":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;

    case "a":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;

    case "s":
      var tom_1 = new Audio("sounds/tom-3.mp3");
      tom_1.play();
      break;

    case "d":
      var tom_2 = new Audio("sounds/tom-4.mp3");
      tom_2.play();
      break;

    case "j":
      var tom_1 = new Audio("sounds/crash.mp3");
      tom_1.play();
      break;

    case "k":
      var tom_2 = new Audio("sounds/kick.mp3");
      tom_2.play();
      break;

    case "l":
      var tom_2 = new Audio("sounds/snare.mp3");
      tom_2.play();
      break;

    default: 
      break;
  }
}

function animation(currentKey)
{
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");

  setTimeout(function (){
    activeBtn.classList.remove("pressed")
  }, 100);
}