


//TASKS JUST USING IF ELSE STATEMENTS





/*var firstName = "Mike";
var status = "Single";

if (status=="Married"){
	console.log("Mike is Married");
	
}else{
	console.log("Mike is Single");
}*/ // MARRIED OR SINGLE "TASK"


/* WHAT WILL BE THE OUTPUT OF THIS CODE?
var numberofWaterMelon;
var lotsofWaterMelon;
lotsofWaterMelon = false;

numberofWaterMelon=prompt("Please enter your number of WaterMelon");
if(numberofWaterMelon>=20){
	console.log("I have more than 20 watermelon");
	lotsofWaterMelon=true
}

if(lotsofWaterMelon){
console.log("Good job");
}

if(lotsofWaterMelon==false){
	console.log("I need more Watermelons")
}*/ // QUANTITY OF WATERMELON "TASK"


/*We are checking if we can have free shipping from amazon or not when we order.
//you have membership -> yes
//order amount > $40 - > yes

 var orderAmount, is AmazonMember;
orderAmount = 40;
isAmazonMember=true;

if((isAmazonMember==true)||(orderAmount>40))*/ // FREE SHIPPING AMAZON
	

/*Declare 2 variable
	Let user enter 2 numbers
	Program should tell which number is bigger
	
	ex: "Number1 number is greater than Number2 number".
	
	
	
var X, Y;
var X=parseInt(prompt("PLease enter any Number1?"));
var Y=parseInt(prompt("Please enter any Number2?"));
if (X>Y){
	console.log(X +" is greater than" + Y);
	
}else{
	console.log(X + "is not greater than " + Y)	
}*/ // WHICH NUMBER GREATER "TASK"


/*WHICH NUMBER IS GREATER TASK 
var A,B,C;
var A=parseInt(prompt("Please enter any number A?"));
var B=parseInt(prompt("Please enter any number B?"));
var C=parseInt(prompt("Please enter any number C?"));
 if((A>B) && (A>C)){
	 console.log("Number " + A + " is gretater than other numbers");
 }else if((B>A)&&(B>C)){
	console.log("Number " + B + " is gretater than other numbers");
 }else if ((C>A)&&(C>B)){
	console.log("Number " + C + " is gretater than other numbers");
 }else{
	console.log("NUmbers are equal");
}*/ // WHICH NUMBER IS GREATER TASK


/*Task
 Write a program to implement following logic using if-else statement;
1. if hour is less than 12 noon, greet with Good morning
2. if hour is greater than or equal 12 noon but less than 3 pm, greet with Good afternoon,
3. if hour is greater than or equal to 3 pm, greet with Good evening

var Time;
var Time=parseInt(prompt("Please enter current time ?"));
if(Time<12){
	console.log("Good morning")
}else{ 
	if(Time<15){
	console.log("Good afternoon");
	}else{
	console.log("Good evening");
   }
   
//-----------DIFFERENT EXAMPLE
}

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
greeting = 'Good afternoon';
} else if (hourNow > 0) {
greeting = 'Good morning';
} else {
    greeting = 'Welcome';
}
document.write(greeting);





*/// Time Greeting "TASK"


/*var x1=50, x2=75;
var b = x1>=x2;

if (b=true){
	console.log("Success");
}else{
	console.log("Failure")
}*/ //SUCCESS AND FAILURE "TASK"


/*var num1=parseInt(prompt("please, enter your a number"));
var num2=parseInt(prompt("please, enter your a number"));
var oper=prompt("please, enter your operator");

if ((num1!="") && (num2!="")) {
if (oper==="+"){
  num = num1+num2;
console.log("Your result is " + num);
} else if (oper === "-"){
       num = num1 - num2;
       console.log("Your result is "+num);
} else if (oper === "*"){
       num = num1 * num2;
       console.log("Your result is "+num);
} else if (oper === "/"){
       num = num1 / num2;
       console.log("Your result is "+num);
   }
}else {
   console.log("Please enter valid numbers");
}*/ // DISPLAYING A RESULTS USING OPERATOR (+,-,/,*)


/*Nerijus example
var num1, num2, oper, num;
num1 = prompt("Please enter number 1");
oper = prompt("Please enter + for plus;  - for minus; / for division; * for substaction");
num2 = prompt("Please enter number 2");

if ((num1!="") && (num2!="")) {
   num1=parseInt(num1);
   num2=parseInt(num2);
if (oper==="+"){
  num = num1+num2;
   console.log("You added both numbers and your result is " + num);
   } else if (oper === "-"){
       num = num1 - num2;
       console.log("You minused both numbers and your result is "+num);
   } else if (oper === "*"){
       num = num1*num2;
       console.log("You substracted both numbers and the result is "+num);
   } else if (oper === "/"){
       num=num1/num2;
       console.log("You divided both numbers and the result is "+num);
   }
}else {
   console.log("Please enter valid numbers");
}*/ // DISPLAYING A RESULTS USING OPERATOR (+,-,/,*) NEYO EXAMPLE


/*
Login Functionality Logic
   UserName,Password
   --- > Program will ask to enter username and password
   --- > If both username and password are blank
       -- > "UserName and Password Fields cannot be empty"
   --- > If userName is blank and password is not blank
       -- > "UserName cannot be empty"
   --- > If userName is not blank and password is blank
       -- > "Password cannot be empty"
   --- > If the username or password is not valid
       -- > "UserName or password is not valid. Please verify"
   --- > If the username and password are both valid
       -- > "User Logged in successfully"

var userName, passWord, correctUN, correctPS;

var userName= prompt("Please enter your username");
correctUN="EDDIE"
var passWord=prompt("Please enter your password");
correctPS="QWERTY"

if( passWord!="" && userName!=""){
if(correctUN==userName){
	if(correctPS==passWord){
	console.log("User Logged in successfully");
}else{
	console.log("User Name or password is not valid");
    }
}else{
		console.log("User Name cannot be empty");
}
		
	}*/ //LOGIN  FUNCTIONALITY  LOGIC
