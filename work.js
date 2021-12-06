var player1,p1,player2,p2;
function players(){
player1=Math.floor(Math.random()*6)+1;
p1="images/dice"+player1+".png";
player2=Math.floor(Math.random()*6)+1;
p2="images/dice"+player2+".png";

document.querySelectorAll("img")[0].setAttribute("src",p1)
document.querySelectorAll("img")[1].setAttribute("src",p2)

if(player1>player2)
{
    document.querySelector("h1").innerHTML="🥇 Player 1 Wins";
}
else if(player1<player2) {
    document.querySelector("h1").innerHTML="Player 2 Wins 🥇";
}
else
{
    document.querySelector("h1").innerHTML="TIE 🤣 Refresh again";
}
}players();

