console.log("CONNECTED");

var Player1Button = document.querySelector(".Player1Button");
var Player2Button = document.querySelector(".Player2Button");

var HasWon		  = false;

var Player1Score  =0;
var P1ScoreDisplay=document.querySelector(".Player1Score");
var Player2Score  =0;
var P2ScoreDisplay=document.querySelector(".Player2Score");

var GoalScoreText = document.querySelector(".Goal");
var GoalInput     = document.querySelector("#GoalInput")
var Goal          =0;

var ResetButton   = document.querySelector(".ResetButton");


			GoalInput.addEventListener("change",function(){
				GoalScoreText.textContent = GoalInput.value;
				Goal = GoalInput.value;
			});




			Player1Button.addEventListener("click", function(){	
				if(HasWon === true)
				{
					alert("Game is Over!");
				}
				else if (Goal == 0)
				{
				  alert("Goal Must Be Set First!");
				}
				else
				{
						Player1Score += 1;
				P1ScoreDisplay.textContent = Player1Score;
					if (Player1Score == Goal)
					{
						alert("Player One Wins!")
						P1ScoreDisplay.style.color = "Green";
						P2ScoreDisplay.style.color = "Red";
						HasWon= true;
					}
				}
					
			});	

			Player2Button.addEventListener("click", function(){
					if(HasWon === true)
				{
					alert("Game is Over!");
				}
				else if (Goal == 0)
				{
				  alert("Goal Must Be Set First!");
				}
				else
				{
					Player2Score += 1;
				P2ScoreDisplay.textContent = Player2Score;
					if (Player2Score == Goal)
					{
						alert("Player Two Wins!")
						P2ScoreDisplay.style.color = "Green";
						P1ScoreDisplay.style.color = "Red";
						HasWon = true;
					}
				}
			});	

			ResetButton.addEventListener("click", function(){
				Player1Score        	   = 0;
				Player2Score               = 0;
				P1ScoreDisplay.textContent = "0";
				P1ScoreDisplay.style.color = "black";
				P2ScoreDisplay.textContent = "0";				
				P2ScoreDisplay.style.color = "black";
				Goal                       = 0;
				HasWon					   = false;
				GoalInput.value			   = 0;
				GoalScoreText.textContent  = 0;
			});

