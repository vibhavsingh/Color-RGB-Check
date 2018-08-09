var colors= generateRandomColors(6);
var heading1= document.getElementById("heading");
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var message=document.getElementById("message");
var resetButton=document.getElementById("reset");
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
});



resetButton.addEventListener("click",function(){
	colors=generateRandomColors(6);//generate all new colors
	pickedColor = pickColor();//pick a new random color from array
	colorDisplay.textContent=pickedColor;
	//change color of numbers
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor =colors[i];
	}
	heading1.style.backgroundColor= "#232323";
});
colorDisplay.textContent= pickedColor;
for(var i=0;i<squares.length;i++)
{  //Add colors to squares
	squares[i].style.backgroundColor=colors[i];
	//Add click listeners to square
	squares[i].addEventListener("click",function(){
	//grab color of a clicked square
	var clickedColor= this.style.backgroundColor;
	// console.log(clickedColor);
	// console.log(pickedColor);
		if(clickedColor===pickedColor){
			message.textContent="Correct!";
			changeColor(clickedColor);
			heading1.style.backgroundColor=clickedColor;
			resetButton.style.textContent="Play Again?"		
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Wrong";
		}});
		}

		function changeColor(color){
			//loop through all squares
			for(var j=0;j<squares.length;j++)
			{
			//change each color	
			squares[j].style.background=color;
			}
			
		}
		function pickColor()
		{
			var random = Math.floor(Math.random()*colors.length);
			return colors[random];
		}

		function generateRandomColors(num)
		{
			//make an array
			var arr=[];
			//generate an array with random numbers
			for(var i=0;i<num;i++){
				//genearate random number and push into array
			arr.push(randomColor());
			}
			//return the array
			return arr;

		}
			function randomColor()
			{
				
				var r= Math.floor(Math.random()*256);//pick a random "red"
				var g= Math.floor(Math.random()*256);//pick a random "green"
				var b= Math.floor(Math.random()*256);//pick a random "blue"
				return "rgb(" + r +", " + g +", "+ b +")";

			}
