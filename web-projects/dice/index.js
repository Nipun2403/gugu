rand_num_1 = Math.floor(Math.random() * 6 + 1);
rand_num_2 = Math.floor(Math.random() * 6 + 1);

document
	.querySelector(".img1")
	.setAttribute("src", "images/dice" + rand_num_1 + ".png");
document
	.querySelector(".img2")
	.setAttribute("src", "images/dice" + rand_num_2 + ".png");

if (rand_num_1 > rand_num_2) {
	document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (rand_num_1 == rand_num_2) {
	document.querySelector("h1").innerHTML = "🚩  Tie 🚩";
} else {
	document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
