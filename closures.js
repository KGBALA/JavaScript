



//CLOSURES

function calculateRectangularArea(length,width){
	return length*width;
}
var room=calculateRectangularArea(10,10);
function youSayGoodBye(){
	console.log("Good Bye");
	function andISayHello(){
		console.log("Hello")
	}
	return andISayHello;
}

var something = youSayGoodBye();
console.log(something);


something();


//Closures get involved when the returned inner fucntion is not SELF-CONTAINED.

function stopWatch(){
	var startTime=Date.now();
	
	function getDelay(){
		var elepsedTime=Date.now()-startTime;
		console.log(elepsedTime);
	}
	return getDelay;

}

var timer = stopWatch();
timer();
//function getDelay(){
//		var elepsedTime=Date.now()-startTime;
//		console.log(elapsedTime);
//	}

//CLOSURES
//JavaScript runtime keeps track of all of your variables, memory usage, references, adn so on. When it detects that an inner fcuntion relies on variables stored by an outer fucntion, it ensures those variables are available even if the outer fucntion goes on.


var x=2;
function (){
	var y=x+2;
	console.log(y);
}