


 // ----------TASKS FROM CLASS---------------------






/*var variable1, variale2,variable3;
var variable1=prompt("Enter your First name");
var variable2=prompt("Enter your Last name");
var variable3=prompt("Enter your age");

console.log("Hi, my name is " + variable1 + variable2 + " and my age is " +variable3+ ".Nice to meet you!");*/ // FIRST LAST NAME & AGE  (CONCATINATION)


 /*Create a program that asks users to enter the radius of circle (r) and calculate the area.
 Sample output: Your circle radius is 6 and the area of the circle is 113.1

var PI, R,Area ;
R=prompt("Enter your radius");
PI=3.14;
Area=PI*R*R;
console.log("Your circle radius is " + R + " and the area of the circle is " + Area);*/ // RADIUS & CIRCLE ( CONCATINATION)


/*write a program that let2 users to enter their hourly wage and the amount of hours they worked for this week. And print which user earned more money.
output: user_1 earning more than user_2: true/false.

user_1 $10*40=400
user_2 $20*100=400

var user1,user2,user1H, user2W,user2H,user2W,user1Earn,user2Earn;
var user1W = parseInt(prompt("enter your hourly wage"));
var user1H = parseInt(prompt("enter your hours worked"));
var user2W = parseInt(prompt("enter your hourly wage"));
var user2H = parseInt(prompt("enter your hours worked"));
user1Earn=user1W*user1H;
user2Earn=user2W*user2H;
var bool= user1Earn>user2Earn||user1Earn<user2Earn;

console.log(" user1 earning is more than user 2 " + bool);*/ // HOURLY WAGE (BOOLEAN)


/*The marks obtained by a student in 3 different subjects are input by the user.Your program should calculate the average of subject. The student gets a grade as per the following rules:


var average, subject1, subject2, subject3;


var subject1=parseInt(prompt("What is your score for subject1 ?"));
var subject2= parseInt(prompt("What is your score for subject2 ?"));
var subject3=parseInt(prompt("What is your score subject3 ?"));
if ((subject1<0 || subject1>100)||(subject2<0 || subject2>100)||(subject3<0 || subject3>100)){
	console.log("enter a valid point");
}else{
var average=(subject1+subject2+subject3)/3;

if((average>=90)&&(average<=100)){
	console.log("A");
}else if((average>=80) && (average<=90)){
	console.log("B");
}else if((average>=70) && (average<=80)){
	console.log("C");
}else if ((average>=60) && (average<=70)){
	console.log("D")
}else if ((average>=0) && (average<=60)){
	console.log("F");
}
}*/ //SUBJECT AND AVERAGE POINT (&& AND ||)


/*var foodType;
foodType = prompt("enter your favorite food");

switch(foodType){
	case "Turkish":
		console.log("You love kebab");
		break;
	case "Italian":
		conbsole.log("You love pizza");
		break;
	case "Uygur":
		console.log("You love laghman");
	break;
	default:
		console.log("no more options");
		break;
}*/ // TYPE OF FOOD ( SWITCH && CASE )


/*var laptopType;
laptopType= prompt("What kind brand of laptop you like? ");
switch(laptopType){
     case "Apple":
       console.log("Apple-no virus");
		break;
		case"Dell":
		console.log("Tough one");
		break;
		case"Acer":
		console.log("Cheap one");
		break;
		default:
		console.log("do not buy that one");
		break;
}*/ // LAPTOP TYPE ( CASE && SWITCH )


/*var Days;
Days = prompt("What day is today? ");
switch(Days){
     case "1":
       console.log("Today is Monday");
		break;
		case"2":
		console.log("Today is Tuesday");
		break;
		case"3":
		console.log("Today is Wednesday");
		break;
		case"4":
		console.log("Today is Thursday");
		break;
	    case"5":
		console.log("Today is Friday");
		break;
		case"6":
		console.log("Today is Saturday");
		break;
		default:
		console.log("Sunday is party day");
		break;
}*/ // WHAT DAY IS TODAY  ( CASE && SWITCH )


/*Kanybek example
var num1=parseInt(prompt("please, enter your 1st number"));
var num2=parseInt(prompt("please, enter your 2nd number"));
var oper=prompt("please, enter your operator");
var result;
switch(oper){
       case"+":result=num1+num2;
       console.log(result);
       break;
       case"-":result=num1-num2;
       console.log(result);
       break;
       case"*":result=num1*num2;
       console.log(result);
       break;
       case"/":result=num1/num2;
       console.log(result);
       break;
default:
       console.log("enter valid number");
	   }
	   
	   
//--------------ANOTHER EXAMPLE--------------------





var num1=parseInt(prompt("please, enter your 1st number"));
var num2=parseInt(prompt("please, enter your 2nd number"));
var oper=prompt("please, enter your operator");
var result;
switch(oper){
       case"+":result=num1+num2;
       console.log(result);
       break;
       case"-":result=num1-num2;
       console.log(result);
       break;
       case"*":result=num1*num2;
       console.log(result);
       break;
       case"/":result=num1/num2;
       console.log(result);
       break;
default:
       console.log("enter valid number");
}
	   
	   
*/ //EXAMPLE OF (-,+,/,*) (CASE && SWITCH )
			

 /*//TASK 
Write a program that asks user to enter his/her username and password until user enters correctly

var UserName, Password, CorrectUN, CorrectPS;

var UserName= prompt("Please enter your user name ");
CorrectUN=" ABC";
var Password= prompt( " Please enter your Password");
CorrectPS="QWERTY";

do{
	UserName=prompt("Please enter your user name");
	Password= prompt(" Please enter your Password");
	
}
while(UserName!=CorrectUN || Password!=CorrectPS)
	
	console.log("You are right ");


--------------------------------------
Mehmet example
var userName = 'Mehmet';
var userPass = '123456';

do{
  var userName1 = prompt('Please enter your username');
  var userPass1 = prompt('Please enter your password');

  
  
}
while(userName !== userName1 && userPass !== userPass1)*/ // Write a program that asks user to enter his/her username and password until user enters correctly


/*// TASK 
// WRITE A GUIESSING GAME WHERE THE USER HAS TO GUESS A SECRET NUMBER BETWEEN 1-20. AFTER EVERY GUESS, THE PROGRAM TELLS THE USER WHETHER THEIR NUMBER WAS TOO LARGE OR TOO SMALL. THE PROGRAM WILL KEEP ASKING THE USER TO ENTER THE NUMBER UNTIL HE FINDS THE CORRECT NUMBER. WHEN THE CORRECT ANSWER IS FOUND, THE PROGRAM WILL DSIPLAY " CONGRAT, YOU GOT IT"


var s;
var sr=8;

do{
	s=parseInt(prompt("Enter your number between 1 and 20"));
	if(s<sr){
		console.log("Enter a bigger number ");
	}else if (s>sr){
		console.log("Enter a smaller number");
	}else{
		console.log("Congrat, you got it");
	}

} while(s!=sr)


//-----------------------------------------------



var secretNum=8, num;
 while(num!=secretNum){
	 num=prompt("Guess a secret number");
		 if (num<secretNum){
			 console.log("Too low");
		 }
		 else if(num>secretNum){
			 console.log(" Too high");
				 
			 }
		 } console.log("you got it");*/ // TASK  WRITE A GUIESSING GAME

		 

