var numberOfSquares=6;
var colors = gRandomColors(numberOfSquares);

var squares =document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hradBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numberOfSquares=3;
  colors =gRandomColors(numberOfSquares);
  pickedColor =pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.backgroundColor=colors[i];
    }
    else{
      squares[i].style.display="none";
    }
  }
});
hardBtn.addEventListener("click",function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numberOfSquares =6;
  colors =gRandomColors(numberOfSquares);
  pickedColor =pickColor();
  colorDisplay.textContent=pickedColor;
  for(var i=0;i<squares.length;i++){
      squares[i].style.backgroundColor=colors[i];
      squares[i].style.display="block";
  
  }
});


reset.addEventListener("click",function(){
  colors=gRandomColors(numberOfSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  this.textContent="New Colors";
  messageDisplay.textContent="";
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
    //הוספה של צבע למלבן
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        messageDisplay.textContent="Correct!";
        reset.textContent = "Play Again ?";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;

      }
      else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent="Try Again";
      }
    });
}

function changeColor(color){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color;
  }

}

function pickColor(){
 var random = Math.floor(Math.random()*colors.length);
 return colors[random];
}

function gRandomColors(num){
  var arr=[];
  for(var i=0;i<num;i++){
    arr.push(randomColors());
  }
  return arr;
}

function randomColors(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}