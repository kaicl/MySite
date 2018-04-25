
var numOFsquare = 6;
var colors= [];
var goalcolor = [];

var squares = document.querySelectorAll(".mysquare");
var colorname = document.getElementById("colorname");

var answermessage = document.getElementById("answer");
var header = document.querySelector("#container1");

// get the mode control buttons
var mode =document.querySelectorAll(".mode");
var reset = document.getElementById("reset");

init();


function init(){
  // set up mode buttons
  for(var m = 0; m< mode.length; m++){
    mode[m].addEventListener("click", function(){
      deselectButton();
      this.classList.add("selected");
      this.textContent === "EASY" ? numOFsquare = 3: numOFsquare = 6;

      resetmode();
    });
  }

  // set up squares
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click",function(){
      // get color selected by click
      var pickedcolr = this.style.backgroundColor;

      // display correct/wrong message
      if(goalcolor === pickedcolr){
        answermessage.textContent = "Correct!";
        changeAllBlockColor(goalcolor);
        reset.textContent = "Play Again?";
      }
      else {
        answermessage.textContent = "Try Again!";
        //hide the wrong/picked block
        this.style.backgroundColor = "#f7f7f7";
      }
    });
  }

  resetmode();
}


// deselect all mode buttons
function deselectButton(){
  for(var m = 0; m< mode.length; m++){
    mode[m].classList.remove("selected");
  }
}

// reset the color blocks based on given number of blocks
function resetmode(){
  colors= generateRandomColor(numOFsquare);
  goalcolor = colors[pickRandom()];
  colorname.textContent = goalcolor;

  for(var i = 0; i< squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
    else{
      squares[i].style.display = "none";
    }
  }

  /// reset displays to origional
  header.style.backgroundColor = "rgb(119, 119, 119)";
  answermessage.textContent = "";
  reset.textContent = "New Color";

}

// restare the gamg if "reset" button is clicked
reset.addEventListener("click",function(){
  resetmode();
});

// change all other blocks to the correct selected color
function changeAllBlockColor(corrcetColor){
  for(var j = 0; j < squares.length; j++){
    squares[j].style.backgroundColor = corrcetColor;
    header.style.backgroundColor = corrcetColor;
  }
}

// pick random color fron array-colors
function pickRandom(){
  var randomNum = Math.floor(Math.random() * colors.length);
  return randomNum;
}

// generate random rgb string for blocks
function generateRandomColor(total){
  var numArray=[];

  for(var t = 0; t < total; t++){
    // generate 3 random string fot r, g, b
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // add to array
    numArray.push("rgb("+ r + ", "+ g +", "+ b +")");
  }

  return numArray;
}
