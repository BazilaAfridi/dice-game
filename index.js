var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src","dice"+randomVariable1+".png");
document.querySelector(".img2").setAttribute("src","dice"+randomVariable2+".png");
if (randomVariable1>randomVariable2)
  document.querySelector("h1").innerHTML="Player 1 Wins <i class='fas fa-flag'></i>" ;
else if (randomVariable2>randomVariable1) {
  document.querySelector("h1").innerHTML="Player 2 Wins <i class='fas fa-flag'>";
}
else
  document.querySelector("h1").textContent="Draw! ";
