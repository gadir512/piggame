let currentPlayer=0;
let score=[0,0];
let currentscore=0;
function findplayer(){
  if(document.querySelector(".player--0").classList.contains("player--active")){
    return 0;
  }
  else{
    return 1;
  }
}
function switchplayer(currentPlayer){
  document.querySelector(".player--"+currentPlayer).classList.toggle("player--active");
  currentPlayer==1? currentPlayer=0: currentPlayer=1;
  document.querySelector(".player--"+currentPlayer).classList.toggle("player--active");
}
function iswin( score, currentPlayer){
  if(score>=100){
    document.querySelectorAll(".player")[currentPlayer].classList.add("player--winner");
    document.querySelector("#name--"+currentPlayer).textContent="Player"+(currentPlayer+1)+"wins";
  }
}
document.querySelector(".btn--roll").addEventListener("click",function(){
  document.querySelector("img").classList.remove("hidden");
  let randomnumber=Math.floor(Math.random()*6)+1
  let dicepicture='images/dice-'+randomnumber+'.png';
  document.querySelector(".dice").setAttribute("src",dicepicture);
  currentPlayer=findplayer();
  if(randomnumber !==1){
    currentscore+=randomnumber;
    document.querySelectorAll(".current-score")[currentPlayer].textContent=currentscore;
  }
  else{
    currentscore=0;
    document.querySelectorAll(".current-score")[currentPlayer].textContent=currentscore;
    switchplayer(currentPlayer);
  }
})
document.querySelector(".btn--hold").addEventListener("click",function(){
  currentPlayer=findplayer();
  score[currentPlayer]+=Number(document.querySelectorAll(".current-score")[currentPlayer].textContent);
  iswin(score[currentPlayer],currentPlayer);
  currentscore=0;
  document.querySelectorAll(".current-score")[currentPlayer].textContent=currentscore;
  document.querySelectorAll(".score")[currentPlayer].textContent=score[currentPlayer];
  switchplayer(currentPlayer);
})
document.querySelector(".btn--new").addEventListener("click",function(){
  document.querySelectorAll(".player")[currentPlayer].classList.remove("player--winner");
  score=[0,0]
  currentscore=0;
  currentPlayer=0;
  document.querySelector("img").classList.add("hidden");
  document.querySelector("#current--0").textContent=0;
  document.querySelector("#current--1").textContent=0;
  document.querySelector("#score--0").textContent=0;
  document.querySelector("#score--1").textContent=0;
  

})