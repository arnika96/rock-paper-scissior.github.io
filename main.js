const image = document.getElementById("rightSide");
const image2 = document.getElementById("leftSide");

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

const result = document.getElementById("result");

const randomGif = new Array("rockmirror.gif", "papermirror.gif", "scissorsmirror.gif");

const text = ["You lose!", "You win!", "It's a draw!", ""];

var computerwins = "0";
var playerwins = "0";


// const audio = ["win.mp3", "lose.mp3"];

function handleGame(type){
   image.src = "rockmirror2.png";
   image2.src = "rockmirror2.png";
   
   document.getElementById("rightSidePng").style.display = "none";
   document.getElementById("leftSidePng").style.display = "none";

   image.src = type + ".gif";
   image.style.display = "block";

   var num = Math.floor(randomGif.length * Math.random());
   image2.src = randomGif[num];
   image2.style.display = "block";
   
   const computerChoice = randomGif[num].split(".")[0];

   
   
   if (type == "rock") {
      if(computerChoice == "papermirror"){
         computerwins++;
         handleGameOver(text[0]);playAudio("lose");
      }
      else if(computerChoice == "rockmirror"){
         handleGameOver(text[2]);playAudio("draw");
      }
      else if(computerChoice == "scissorsmirror"){
         playerwins++;
         handleGameOver(text[1]);playAudio("win");
      }
      
   }

   else if (type == "paper") {
      if(computerChoice == "papermirror"){
         handleGameOver(text[2]);playAudio("draw");
      }
      else if(computerChoice == "rockmirror"){
         playerwins++;
         handleGameOver(text[1]);playAudio("win");
      }
      else if(computerChoice == "scissorsmirror"){
         computerwins++;
         handleGameOver(text[0]);playAudio("lose");
      }

   }

   else if (type == "scissors") {
      if(computerChoice == "papermirror"){
         playerwins++;
         handleGameOver(text[1]);playAudio("win");
      }
      else if(computerChoice == "rockmirror"){
         computerwins++;
         handleGameOver(text[0]);playAudio("lose");
      }
      else if(computerChoice == "scissorsmirror"){
         handleGameOver(text[2]);playAudio("draw");
      }
   }
}




buttonRock.addEventListener("pointerdown", ()=> {
   handleGame("rock");disableButtons();
});

buttonPaper.addEventListener("pointerdown", ()=> {
   handleGame("paper");disableButtons();
});

buttonScissors.addEventListener("pointerdown", ()=> {
   handleGame("scissors");disableButtons();
});

function clear() {
   document.getElementById("result").innerHTML = "";
 }

function handleGameOver(text){
   clear();

   setTimeout(()=>{
      result.innerHTML = text;

      if(image.src.includes("scissors")) {
         document.getElementById("rightSidePng").src = "scissors2.png";
      }
      else if(image.src.includes("rock")) {
         document.getElementById("rightSidePng").src = "rock2.png";
      }
      else if(image.src.includes("paper")) {
         document.getElementById("rightSidePng").src = "paper.png";
      }

      if(image2.src.includes("scissors")) {
         document.getElementById("leftSidePng").src = "scissorsmirror2.png";
      }
      else if(image2.src.includes("rock")) {
         document.getElementById("leftSidePng").src = "rockmirror2.png";
      }
      else if(image2.src.includes("paper")) {
         document.getElementById("leftSidePng").src = "papermirror.png";
      }
      
      document.getElementById("leftSidePng").style.display = "block";
      document.getElementById("rightSidePng").style.display = "block";

      image2.style.display = "none";
      image.style.display = "none";

      document.getElementById("player").innerHTML = playerwins;
      document.getElementById("computer").innerHTML = computerwins;
      
   }, 1360);
   
}


var buttons = [
   document.getElementById("rock"),
   document.getElementById("paper"),
   document.getElementById("scissors")
 ];

function disableButtons(){
   for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
   }
   setTimeout(()=>{
      for (var i = 0; i < buttons.length; i++) {
         buttons[i].disabled = false;
      }
   }, 1700);
}

function playAudio(type) { 

var audio = document.getElementById("myAudio");

audio.src = type + ".mp3";

  setTimeout(()=>{

  audio.play(type);
  
   
}, 1400);
}





