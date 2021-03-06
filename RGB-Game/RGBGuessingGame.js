//Initialize numSquares to 6 
//to generate full random color array 
var numSquares              = 6;
var colors                  = generateRandomColors(numSquares);
var CorrectIncorrectDisplay = document.querySelector("#CorrectIncorrectDisplay");
var pickedColor  			= pickColor();
var colorDisplay 			= document.getElementById("colorDisplay");
var squares 	 			= document.querySelectorAll(".square");
var h1 						= document.querySelector("#h1");
var resetButton             = document.getElementById("reset");
var modeButtons 		    = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++)
{
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		//Tertiary operator to check if easy mode is selected vs hard mode
		// and change numSquares to appropriate mode
		this.textContent === "Easy" ?  numSquares  = 3: numSquares = 6;
		reset();
	});
}
//Reset UI
function reset(){
		CorrectIncorrectDisplay.textContent = "";
		colors 								= generateRandomColors(numSquares);
	pickedColor 			 			    = pickColor();
	colorDisplay.textContent 			    = pickedColor;
	resetButton.textContent 			    ="New Colors";
	for(var i = 0; i < squares.length; i++)
		{
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}else{
				squares[i].style.display = "none";
			}
		}
	h1.style.backgroundColor			 = "steelblue";	
}

resetButton.addEventListener("click", function()
{
reset();
});
//**************************Main UI Logic***************************
for(var i= 0; i < squares.length; i++)
{     
	//Assign each square a color from color array
	squares[i].style.backgroundColor = colors[i];
    //Check if clicked square is correct upon click
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(this.style.backgroundColor === pickedColor)
		{
			CorrectIncorrectDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			
			resetButton.textContent ="PLAY AGAIN?";
				h1.style.backgroundColor = this.style.backgroundColor;
		}
		else
		{
			this.style.backgroundColor = "#232323";
			CorrectIncorrectDisplay.textContent = "Try Again!";
		}
	});		
}
//******************************************************************
//Reset colors of squares to new random colors
function changeColors(color)
{
	 for(var i =0; i< squares.length; i++)
	 {
	squares[i].style.backgroundColor = color;
	 }
}
//Picks a random color to be the "picked" color to be found
function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];	
}
//Generate random colors array
function generateRandomColors(num)
{
	var arr = [];

	for( var i = 0; i < num; i++)
	{
		arr[i] = randomColor();
	}
	return arr;
}
//Generate random color
function randomColor()
{
	var R = Math.floor(Math.random() * 256);
	var G = Math.floor(Math.random() * 256);
	var B = Math.floor(Math.random() * 256);
	return("rgb(" + R + ", " + G + ", " + B + ")");
}


//************REFACTORED CODE********************
// easyButton.addEventListener("click", function(){
// numSquares = 3;
// h1.style.backgroundColor = "steelblue";
// CorrectIncorrectDisplay.textContent = "";
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	colors = generateRandomColors(numSquares);
// 	pickedColor 			 			= pickColor();
// 	colorDisplay.textContent 			= pickedColor;

// 	for(var i = 0; i < squares.length; i++)
// 	{
// 		if(colors[i])
// 		{
// 		squares[i].style.backgroundColor = colors[i];	
// 	    }
// 	    else
// 	    {
// 	    	squares[i].style.display = "none";
// 	    }	
// 	}
// 	resetButton.textContent 			="New Colors";

// });

// hardButton.addEventListener("click", function(){
// 	numSquares =6;
// h1.style.backgroundColor = "steelblue";
// CorrectIncorrectDisplay.textContent = "";
// 	hardButton.classList.add("selected");
// 	easyButton.classList.remove("selected");
// 	colors = generateRandomColors(numSquares);
// 	pickedColor 			 			= pickColor();
// 	colorDisplay.textContent 			= pickedColor;

// 	for(var i = 0; i < squares.length; i++)
// 	{
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// resetButton.textContent 			="New Colors";

// });