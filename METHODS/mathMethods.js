


//-------------------------MATH METHODS------------------------------






//-----------------Math. Round Method------------------



var a=Math.round(2.60);
console.log(a);//3


var b=Math.round(2.50);
console.log(b);// 3


var c=Math.round(2.49);
console.log(c);// 2


var d=Math.round(-2.50);
console.log(d);// -2



var e=Math.round(-2.49);
console.log(d);// -2

var d=Math.round(-2.60);
console.log(d);// -3




//------------Math.sqrt--------------------------------


var a=Math.sqrt(0);
console.log(a);//0

var b=Math.sqrt(1);
console.log(b);//1

var d=Math.sqrt(64);
console.log(d);//8


var e=Math.sqrt(-9);
console.log(a)//0

var c=Math.sqrt(9);
			   
console.log(c)//3



//---------------Math floor----------------------------

// Rounds number down to the nearest integer

var a=Math.floor(0.60);
console.log(a);//0

var a=Math.floor(0.40);
console.log(a);//0

var a=Math.floor(5);
console.log(a);//5

var a=Math.floor(-5.1);
console.log(a);//-6

var a=Math.floor(-5.9);
console.log(a);//-6

var a=Math.floor(5.1);
console.log(a);//5


//-----------------Math.ceil---------------------------


var a=Math.ceil(0.60);
console.log(a);//1

var b=Math.ceil(0.40);
console.log(b);//1

var b=Math.ceil(5);
console.log(b);//5

var b=Math.ceil(5.1);
console.log(b);//6

var b=Math.ceil(-5.1);
console.log(b);//-5

var b=Math.ceil(-5.9);
console.log(b);//-5

//-------------------Math.random-----------------------


//Return a random number between 0 and 1 

var a=Math.random();
console.log(a);//0.7263653848377019

//Return a random number between 1 and 10;


var b=Math.random()*10+1;
console.log(b);//6.6003697646592006

//Return a random number between 1 and 100;
 
var c=Math.random()*100+1;
console.log(c);//61.97618674345276


//TASK CREATE A RANDOM NUMBER BETWEEN 0 AND 200 AND CHECK IF THIS NUMBER IS GREATER THAN 100.


var x=Math.random()*200+0;
var y=Math.round(x)
console.log(x); 
 if(x>100){
	console.log("true");
 }else{
	 console.log("false");
 }

//var a="";
//var string1,
//    string2;
//function passwordCreate(string1,string2){
//    string1=prompt("your first name:");
//    string2=prompt("your last name:");
//    
//    for(var i=0; i<string1.length;i++){
//        a=a+string1.charAt(i);                  // a=a.concat(string1.charAt(i));
//        if(i==2){
//            break;
//        }
//    }
//    return a.concat(string2.length);
//}
//var passwd = passwordCreate(string1,string2);
//console.log(passwd);

