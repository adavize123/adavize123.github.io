
var numSquares = 6;
var colors = generateRandomcolors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomcolors(numSquares);
    pickedcolor = pickcolor();
    colorDisplay.textContent = pickedcolor;
    for( var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display ="none";
        }
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomcolors(numSquares);
    pickedcolor = pickcolor();
    colorDisplay.textContent = pickedcolor;
    for( var i = 0; i < squares.length; i++){
       
            squares[i].style.background = colors[i];
      
            squares[i].style.display ="block";
        }
    });
resetButton.addEventListener("click",function(){
   colors = generateRandomcolors(6);
   pickedcolor = pickcolor();
     colorDisplay.textContent = pickedcolor;
     this.textContent = "New colors"
     messageDisplay.textContent = "";
     for( var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    
    } 
    h1.style.background = "steelblue";      
})
colorDisplay.textContent = pickedcolor;

for( var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];

     squares[i].addEventListener("click", function(){
          
       var clickedcolor = this.style.background;
       
       if(clickedcolor === pickedcolor){
        messageDisplay.textContent = "Correct!";
        changecolors(clickedcolor);
        h1.style.background = clickedcolor;
        resetButton.textContent = "Play Again?"
       }else {
           this.style.background = "#232323"; 
           messageDisplay.textContent = "Try Again"

           } 
        });
    }
            function changecolors(color){
                for(var i = 0; i <squares.length; i++){
                    squares[i].style.background = color; 
                }
            }
       function pickcolor(){
            var random = Math.floor(Math.random() * colors.length);
       
             return colors[random]; 

            }
    function generateRandomcolors(num){
        var arr = []

         for (var i = 0; i < num ; i++){
          arr.push(randomcolor())

         }

        return arr;
    }
   function randomcolor(){
    var r =  Math.floor(Math.random()* 256) ;
    var g =  Math.floor(Math.random()* 256) ;
    var b =  Math.floor(Math.random()* 256) ;  
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
  