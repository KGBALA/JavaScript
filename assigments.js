


//BEGINNING OF ALL ASSIGMENTS FROM CANVAS


//ASSIGMENT-1/variables,data types



/*Question-1

Create a variable TodaysDate and assign todays date and display in a pop up box

var TodaysDate;
TodaysDate=prompt("Enter todays date: mm/date/yy?");
alert(TodaysDate);

127.0.0.1:52222 says 12/12/2018*/ // Question-1 Create a variable TodaysDate


/*Question-2

Declare 6 variables

Assign different datatypes

Display value of variables

Display data type of variables

var Make,Display,Processor,Storage,Ram,Camera;
var Make=("MacBook Pro");
var Display=("Retina display 15.4-inch");
var Processor=("2.8GHz quad-core Intel Core i7");
var Storage=("512GB PCIe-based onboard SSD");
var Ram=("16-GB");
var Camera=("720p FaceTime HD camera");
console.log(Make,Display,Processor,Storage,Ram,Camera);

MacBook Pro Retina display 15.4-inch 2.8GHz quad-core Intel Core i7 512GB PCIe-based onboard SSD 16-GB 720p FaceTime HD camera*/ // Question-2 Declare 6 variables


/*Question-3

Declare 2 variables (Num1, Num2)

Swap values between Num1 and Num2

Display new values of Num1 and Num2

var Num1,Num2;
Num1=20;
Num2=30;
console.log(Num2,Num1);

30 20*/  //Question-3 Declare 2 variables (Num1, Num2)

//--------------------------------------------

//ASSIGMENT-2/prompt(),concatenation,arithmetic operators




/*Question-1 

Write a program to convert gallons into Liters and display it.

var gall, lit;
var gall=prompt("enter how much Gallons");
gall=parseInt(gall);
lit=3.78541;
lit=gall*3.78541;
console.log(lit + " liters's " + " in " + gall + " gallons ");

3 liters's  in 1 gallons */ // Question-1 convert gallons into Liters


/*Question-2  

Declare a variable MyFruit and assign your favorite fruit into it and display as follows:
“My Fav Fruit is My Fruit”

var MyFruit;
var Myfruit=prompt("Enter what is your favorite fruit?");
console.log(" My favorite fruit is " + Myfruit);

 My favorite fruit is Kiwi*/ //Question-2   Declare a variable MyFruit


/*Question-3

Write a program - > Let user enter his name and birth year, and program will display:

     " Hello Ozzy ! Based on your input, your age is 15 :) " 


var Name, Age;
var name=prompt('Please enter your name?');
var Age=prompt('Please enter your age?');
console.log(" Hello " + name + "!" + " your age " + Age);

Hello Kany! your age 34*/ // Question-3 Let user enter his name and birth year



/*Question-4

How can you find if a number is odd or even in javascript. Please give an example/write syntax


var number, odd, even;
number = parseInt(prompt("Put your number"));
odd = (number%2 != 0);
even = number%2==0;
console.log("Number " + number + " is odd - " + odd);
console.log("Number " + number + " is even - " + even);

var number, a, b;
number=parseInt(prompt("Enter your number"));
a=number%2;
b = a==1 && "odd" || "even";
console.log(number + " is " + b);*/ //Question-4 How can you find if a number is odd or even in javascript

//-------------------------------------------
 


 //ASSIGMENT-3/logical,comparison operators, selection statements(if,if-else,if-elseif-else)



/*Question-1

Write a javascript program for following logic.
    if marks < 60, then print "Fail"
    if marks >= 60 but less than 90 , then print "Pass"
    if marks >= 90, then print "Passed with Distinction"

You are free to use any combination of if - else statements.
You can either use if statements OR if - else statements OR if - else if - else statements.

Extra marks if you can solve using all 3 combinations :)

var marks;
var marks=parseInt(prompt(" Please enter your Mark score? "));
if(marks>=90){
	console.log("Passed with distinction");
}else
	if(marks>=60){
		console.log("Pass");
	}else
	if(marks<60){
	console.log("Fail");	
	}else{
		console.log("Invalid score");
	}*/   //Question-1  if marks < 60, then print "Fail"



/*Question-2

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

if((userName=="") && (passWord=="")){
	console.log("User Name and Password can not be empty");
}else if((userName!="") && (passWord=="")){
	console.log("User Name can not be empty");
}else if((userName!="") && (passWord=="")){
	console.log("UserName can not be empty");
}else if((userName!=correctUN) || (passWord!=correctPS)){
	console.log("User Name or Password is  Invalid");
}else if((userName==correctUN) || (passWord==correctPS)){
	console.log("User Logged in successfully");
}*/ // Question-2 Login Functionality Logic UserName,Password


/*Question-3

Calculator Logic with 2 numbers


    User is able to enter 2 numbers
    User is able to enter one of these operators:
        +,-,/,*;
    Program needs to perform the operation and display the result
    If either number1 or number2 is blank:
        "Please enter valid numbers"
		
var num1, num2,result;
var num1=parseInt(prompt("please enter a number"));
var operator=prompt("please enter an operator?");
var num2=parseInt(prompt("please enter a number"));

if (num1==""||num2==""){
	console.log ("Please enter a valid number!");
}else if (operator=="*"){
	console.log(num1*num2);
}else if ( operator=="/"){
    console.log(num1/num2);
}else if (operator=="+"){
    console.log(num1+num2);
}else if (operator=="-"){
	console.log(num1-num2);
}else{
	console.log(" Enter a valid number and operator")
}


var num1=parseInt(prompt("please, enter your a number"));
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
}*/ // Question-3 Calculator Logic with 2 numbers



 /* Question-4 

Tax Calculator:

    - Let user enter his income

    - Calculate the tax amount according to below table

    - Print the tax amount

Income	Tax Ratio
income ≤150,000,000	%25
income ≤ 300,000,000	%30
income ≤ 600,000,000	%35
income ≤ 1,200,000,000	%40
income > 1,200,000,000	%50
Sample Output-1

Your Income : 1500

The tax amount you have to pay : 375.0

Sample Output-2

Your Income : 1200000

The tax amount you have to pay : 300000.0

Note: IF Your Income is 200,000,000, your tax will be calculated this way: %25 for 150,000,000 and %30 for the rest of the amount which is 50,000,000


var income, tax;

t1= 150*0.25;
t2= 150*0.30;
t3=300*0.35;
t4=600*0.40;
income=parseInt(prompt("Please enter your income"));

if (income<150){
	tax=income*0.25;
}else if (income<=300){
		tax=t1+(income-150)*0.30;
}else if (income<=600){
	tax=t1+t2+(income-300)*0.35;
}else if (income<=1200){
     tax=t1+t2+t3+(income-600)*0.40;
}else{
	  tax=t1+t2+t3+t4+(income-600)*0.50;
}
console.log("your income is " + income);
console.log( "you tax is " + tax);*/ //Question-4  Tax Calculator: - Let user enter his income


/*Question-6

Telephone Bill
Write a JS program to calculate the monthly telephone bills as per the following rule: 
Minimum $200 for up to 100 calls. 
Plus $0.60 per call for next 50 calls. 
Plus $0.50 per call for next 50 calls. 
Plus $0.40 per call for any call beyond 200 calls.



var calls, bill;
 calls=parseInt(prompt("please enter your call numbers"));
 if(calls<=100){
	 bill=200;
 }else if (calls<=150){
	 calls=calls-100;
	 bill=200+(calls*0.6);
 }else if (calls<=200){
	  calls=calls-150;
	 bill=200+(50*0.6)+(calls*0.5);
 }else{
	 calls=calls-200;
	 bill=200+(50*0.6)+(50*0.5)+(calls*0.4);
 }
console.log("your total bill:" + bill);*/ //Question-6  Telephone Bill


//-----------------------------------------------------


 //ASSIGMENT-4/switch statements


/*Question 1:
Write a logic using switch-case to print "EVEN" / "ODD" for the numbers. 
Numbers divisible by 2 are even and numbers not divisible by 2 are odd.

var num, num1;
var num = parseInt(prompt("please enter a number"));
var num1=num%2;

switch (num1){
	case 0:
		console.log("number is even ");
		break;
	default:
		console.log("NUMBER is odd");
		break;
} */  //Question 1: "EVEN" / "ODD" 

 
/*Question 2:

Write a switch-case program that accepts a number from user.

IF number is 0,1 or 2 print "Low Number. IF number is 3,4,5 print "Medium Number". IF number is is not between 0-5 then print "Other Number"

 var num=parseInt(prompt("please enter a number"));
	 
switch(num){
	case 0:
	case 1:
	case 2:
		console.log("Low number");
		break;
	case 3:
	case 4:
	case 5:
		console.log("Medium number");
		break;
	default:
		console.log("Other number");
		break;
}*/ //Question 2: IF number is 0,1 or 2 print "Low Number.
	

/*Question 3:

Write a switch-case program that accepts the total cost of shopping from user and apply discount ratio according the below table. Print the total amount that user needs to pay after discount

var totalAmount1,totalAmount2,totalCost;
var totalCost=parseInt(prompt("Please enter Totalcost of customer shoping?"));
var totalAmount1=1000-(1000/100*5);
var totalAmount2=10000-(10000/100*8);
switch(totalCost){
	case 1000:
		console.log("Your total amount after discount " + totalAmount1);
		break;
	case 10000:
		console.log("Your total amount after discount " + totalAmount2);
		break;
	default:
		console.log("other");
		break;
}*/ //Question 3: Write a switch-case program that accepts the total cost of shopping 


/*Question 4:

Write a program to display traffic light colors using following logic:
if code (R/r)-->"Red"
if code (O/o)-->"Orange"
if code (G/g)-->"Green

var light,code;
var code=prompt("Please enter your code to display traffic light?");
light=code;
				
switch(light){
	case "R":
	case "r":
	console.log("Red");
	break;
	case "O":
	case "o":
	console.log("Orange");
	break;
	case "G":
	case "g":
	console.log("Green");
	break;
	default:
	console.log ("Flashing orange");
	break;
}*/ //Question 4: traffic light colors using following logic:

//--------------------------------------------------------


//ASSIGMENT-5/while,do-while loop


 /*Question-1
Use pre-decrement operator in while's boolean_expression to print HELLO 5 times on to the console.

var i=5;
while(i-->0){
   console.log("HELLO");
}*/ // Question-1 Print HELLO 5 times on to the console


/*Question-2
Write a program to calculate the sum of the numbers from 1 till upper bound. 
If upper bound is 5, sum should be 1 + 2 + 3 + 4 + 5 = 15.
If upper bound is 11, sum should be 1 + 2 + ... + 11 = 66.
If upper bound is 100, sum should be 1 + 2 + ... + 100 = 5050.

You should use while loop.

var sum=0,num=0,upperBound=0;
while(upperBound<11){
   num++;
   sum=sum+num;
   upperBound++;}
console.log(sum);*/ //Question-2 Write a program to calculate the sum of the numbers from 1 till upper bound.



/*Question-4
Write a program using while loop to print Even numbers from 1 to 100.
var num=1;
while(num<100){
   num++;
   if(num%2==0){
   console.log(num);}}
   */ //Question-3 Write a program using while loop to print Even numbers from 1 to 100.


/*Question-4
Write a program for following logic:
Print all the odd numbers in comma separated form from 1 till end (you may change it):
if end = 10, OUTPUT = 1, 3, 5, 7, 9
if end = 11, OUTPUT = 1, 3, 5, 7, 9, 11

You should use while loop and if - else statements. Note that, there should not be any comma after last digit.


var num=0;
var s = "";
var i = 10;
while(num<i-1){
   ++num;
   if(num%2==0){
       s+=",";}
   else if(num%2==1){;
       s += num ;}
   }
console.log(s);
----------------------

var num=0;
var s = "";
var i = 10;
while(num<i){
    ++num;
    if(num%2==0&&num<i){
    s+=",";}
    if(num%2==1){;
    s += num ;}
}
console.log(s);


*/ //Question-4 if end = 10, OUTPUT = 1, 3, 5, 7, 9
//if end = 11, OUTPUT = 1, 3, 5, 7, 9, 11


//------------------------------------------------ 
 
 //ASSIGMENT-6/for loop
 
 
 /*Question-1

Print the table of 12 using for loop.
Output should be in following format:
12 X 1 = 12
12 X 2 = 24
12 X 3 = 36
12 X 4 = 48
12 X 5 = 60
12 X 6 = 72
12 X 7 = 84
12 X 8 = 96
12 X 9 = 108
12 X 10 = 120
 
 var num=12;
for(var i=1; i<11;i++){
	console.log(num + "*" + i + "=" + (num*i));
}*/ // Question-1 Print the table of 12 using for loop
 
 
/*Question-2 Febinacci series
var num, a,b, result;
num=parseInt(prompt("Please enter ending from 0 to N..  to display febinacci sequence?"));
b=1;
a=0;
 result=b;
for (var i=1;i<num;i++){
	console.log(result)
	result=a+b;
a=b;
b=result;
} */// Question-2 Febinacci series


 /*Question-3
Write a JavaScript program to print all the numbers between 1 and 100 (including 1 and 100)
which are divisible by 5.
 
for(var a=0; a<101; a+=5){
 console.log(a);
}


for ( i=1; i<101;i++){
	if(i%5==0)
	console.log(i);
}*/ //Question-3 Numbers between 1 and 100 (including 1 and 100)  divisible by 5.
 
 
 /**Question-4
Print the multiples of 5 starting from 200 to 5 with following restrictions:
1. Use for loop
2. Don't use modulus (%) operator to check whether number is divisible by 5 or not.

for(var x=0; x<201; x+=5){
	console.log(x)
} */ //Question-4 Multiples of 5 starting from 200 to 5 with following restrictions:
 


//-------------------------------------------------------

 //ASSIGMENT-7/nested for loop

 /*Question-1
Print following output using nested for loops:
1
22
333
4444
55555
666666
7777777
 
 
 
 for ( var i=1; i<=7; i++){
	str="";
	for(var p=0; p<i; p++){
	str=str+i;
		}
		console.log(str);
		
		
	
}

12345
1234
123
12
1

for (var i=5; i>0; i--){
for( var j=1; j<=i; j++){
    console.log(j);
   }
console.log("");
}

*/ //Question-1 Print following output using nested for loops:
 
 
 /** Question-2

Print following output using nested for loops.

4     3     2     1

   3     2      1

      2      1
	        1
		  
		  
 for (var i=1; i<=4; i++){
	 str="";
	 for (var p=0; p<2; p++){
		 str=str+i+"\t";
	 }
	 console.log(str) 
    console.log("\n");
}*/ //Question-2 Print following output using nested for loops.



// /** Question
//
//Print following output using nested for loops.
//1 
//1 2 
//1 2 3 
//1 2 3 4 
//1 2 3 4 5 
//1 2 3 4 5 6 
//1 2 3 4 5 6 
//1 2 3 4 5 
//1 2 3 4 
//1 2 3 
//1 2 
//1




for(var i=1;i<=7;i++){
	str=" ";
	for(var j=1;j<=i;j++){
		str=str+j+" ";
	}
	console.log(str);
}
for(var i=1;i<=6;i++){
	str=" ";
	for (var j=1;j<=(7-i);j++){
		str=str+j+" ";		
	}
	console.log(str);
}

/*Question-3
Print following output using nested for loops.
1    2    3    4    5    6    7    8    9    10    
2    4    6    8    10    12    14    16    18    20    
3    6    9    12    15    18    21    24    27    30    
4    8    12    16    20    24    28    32    36    40    
5    10    15    20    25    30    35    40    45    50    
6    12    18    24    30    36    42    48    54    60    
7    14    21    28    35    42    49    56    63    70    
8    16    24    32    40    48    56    64    72    80    
9    18    27    36    45    54    63    72    81    90    
10    20    30    40    50    60    70    80    90    100    

NOTE: 
1. 1st row is table of 1, 2nd row is table of 2 and so on.
2. You can use space between the digits on the same row.



for (var i=1; i<=10; i++){
    str="";
	   str="\n";
    for(j=1; j<=10; j++){
        str=str+(i*j)+"\t"	
  } console.log(str)
}

 console.log("\n");*/ // Question-3 PRINT NUMBER LIKE TABLE FROM 1 TO 100


//-------------------------------------------------------
// ASSIGMENT-8/Branching Statements(break,continue,labeled statements)



/*Question-1

What will be the output of this code? (Please do it without using brackets)-(Level:MILD)


var counter=10;
while (counter>=0)
{
if (counter==7)
{
counter--;
continue;
}
console.log(counter+" ");
counter--;
}*/ //Question-1 What will be the output of this code?


/*Question-2

What will be the output of this code? (Please do it without using brackets)-(Level:MILD)

var num=15;
var val=0;
OUTER_LOOP:
for (var i=0; i<num; i++)
{
	for (var j=0; j<num;j++)
		{
			if (i+j>=2*val)
				break OUTER_LOOP;
			val=val/2;
		}
}
console.log(val);*/ //Question-2 What will be the output of this code? 


/*Question-3 - (Optional, Challenging Question, Level: EXTRA SPICY) 

What will be the output of this code? (Please do it without using brackets)


var i=0;
outer:
while(true){
	console.log("Outer while loop");
	while(true){
		i++;
		console.log("i= " + i);
		if( i== 1){
			console.log("continue");
			continue;
		}
		if (i==3){
			console.log("continue outer");
			continue outer;
			}
		if(i==5){
			console.log("break");
		break;
		}
		if(i==7){
			console.log("break outer");
			break outer;
		}
	}
}*/ //Question-3 What will be the output of this code? 


/*Question-4 -(Optional, Challenging Question, Level: SPICY) 

What will be the output of this code? (Please do it without using brackets
for ( var i= 1; i<5; i++){
	for( var j=1;j<3; j++){
		if(i==1 && j==1){
			continue;
		}else if (i==2 && j==2){
			break;
		}else if (i==3 && j==2){
			continue;
		}else if(i ==4 && j==2){
			break; 
		}
		console.log(i, " ", j)
	}
}*/ //Question-4 -(Optional, Challenging Question, Level: SPICY) 

//------------------------------------------

//Lab 6 - Shopping List


/*//1-Add a new product
//2-Remove a product
//3-Edit a product
//4-Print the shopping list
//5-Exit the program
//default list should include "Orange","Apple"

var shopList=["Tea", "apples","Juice","Chocolate"];

var newList=prompt("Currently you have: " + shopList + " what you want to add?" );

shopList.push(newList); 
alert("Your new list: " + shopList.toString());


var remove=prompt("Currently you have: " + shopList + " " + " what do you want to remove?" );
var removed=false;

for (i=0; i<shopList.length;i++){
	
if(shopList[i]==remove){
	shopList.splice(i,1);
	removed=true;
}
}
if (removed==true){
	alert(remove +" "+"succesfully removed")
}else{
		alert(remove+ "could not be found")
}


var change=prompt("Currently you have: " + shopList +" "+"what do you want to change?" );
var edited=false;

var add=prompt("What new product you want to add?" );

for (i=0; i<shopList.length;i++){
	
if(shopList[i]==change){
	shopList.splice(i,1,add);
	edited=true;
}
} 
if (edited==true){
	alert(change +" "+"succesfully changed");
	alert("New list ");
}else{
		alert(change + "could not be found")
}
for(i=0;i<shopList.length;i++){
alert(shopList[i]);
}
alert("Thank you");*/ //TASK Create a shopping list program that asks user following options


//------------------------------------------

//Assignment-10/One-Dimensional Array

//var num=[];
//var count=0;
//var str="";
//for(var i=1; i<=1000; i++){
//   num.push(i);
//   count++;
//   str=str+i+" ";
//   if(count==10){
//       console.log(str);
//       str="";
//       count=0;      
//   }
//}
///
//question 2
//var num=[1,2,3,4,5,6,7,8,9,10];
//for(i=0;i<num.length;i++){
//  num[i]=(num[i]*19);
//  console.log(num[i]);
//}
///
//question 3
/*var num=["A", "Z", "B", "N", "P", "T", "X", "C"];
var num1=prompt("search");
for(i=0;i<num.length;i++){
   if(num1==num[i]){
       console.log(num1+" is found");
       break;
   }else{
       console.log(num1+" is not found");
       break;
   }
}
*/
//question 4
/*var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
for (var i=0;i<scores.length;i++){
   if(scores[i]>=50&&scores[i]<100){
       console.log("half century");
   }
   else if(scores[i]>=100&&scores[i]<200){
       console.log("century");
   }
   else if(scores[i]>=200){
       console.log("double century");
   }
}

//=========================================ASSIGMENT-12=========================================


Question 1:
Write a javascript program to create an array of 8 * 8 size and initialize all the array elements starting from 1 till 64 (using for loop) as follows:
1 2 3 4 5 6 7 8
9 10 11 12 13 14 15 16
17 18 19 20 21 22 23 24
25 26 27 28 29 30 31 32
33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48
49 50 51 52 53 54 55 56
57 58 59 60 61 62 63 64

Write a nested for loop to print all the elements of 2-Dimensional array in above format.






Question 2:
Write a javascript program to create following 2-Dimensional array of 8 * 8 size [to resemble chess board] using Data instantiation:

W B W B W B W B
B W B W B W B W
W B W B W B W B
B W B W B W B W
W B W B W B W B
B W B W B W B W
W B W B W B W B
B W B W B W B W

Write a nested for loop to print all the elements of 2-Dimensional array in above format.


Question 3:

var numbers = [
[90, 10, 231],
[-20, 80, 100, 23, 54],
[45, 22],
[87, 98, -100, 49, 73, 35, 19]
];


Write logic to find out highest number in above array.


/----------Assignment 15- Recap Tasks------------



Question-1

Write a function that accepts an array, and if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Print the changed Array
Sample Output:
fix23([1,2,3]); - > [1,2,0]
fix23([2,0,5]); - > [2,0,5]
fix23([1,2,1]); - > [1,2,1]
fix23([11,2,13,3,2]); - >[11,2,13,3,2]




==============================================================================================
Question-2
Write a function that accepts an array and prints true if the number 1's is gretaer than the number 4's
 
Sample Output:
more14([1, 4, 1]); ->true
more14([1, 4, 1, 4]); ->false
more14([1, 1]); ->true
==============================================================================================Question-3
Write a function that acccepts a number and create and prints a new array of length number, containing the numbers 0,1,2,...number-1.
 
Sample Output:
fizzArray(4) → [0, 1, 2, 3]
fizzArray(1) → [0]
fizzArray(10) →[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
==============================================================================================
Question-4
A value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. 
Write a function that accepts an array and a number, and prints true if the given number is everywhere in the array.
 
Sample Output:
isEveryWhere([1, 2, 1, 3], 1); - >true
isEveryWhere([1, 2, 1, 3], 2); - >false
isEveryWhere([1, 2, 1, 3, 4], 1); - >true
isEveryWhere([1, 2, 4, 3, 1], 1); - >false
==============================================================================================
Question-5
Write a function that accepts two arrays of the same length. For every element in array1, consider the corresponding element in array2 (at the same index). Return the count of the number of times that two elements differ by 2 or less, but are not equal.
 
Sample Output:
matchUp([1, 2, 3], [2, 3, 10]); ->2
matchUp([1, 2, 3], [2, 3, 5]); ->3
matchUp([1, 2, 3], [2, 3, 3]); ->2
==============================================================================================
Question-6
Write a function that accepts an array and prints true if the array contains 3 even or 3 odd values all next to each other.
 
Sample Output:
modThree([2, 1, 3, 5]); ->true
modThree([2, 1, 2, 5]); ->false
modThree([2, 4, 2, 5]); ->true
==============================================================================================
Question-7
Write a function that accepts an array and prints true if the array contains,somewhere,three increasing adjacent numbers like 4,5,6,... or 23,24,25.
 
Sample Output:
tripleUp([1, 4, 5, 6, 2]); ->true
tripleUp([1, 2, 3]); ->true
tripleUp([1, 2, 4]); ->false
tripleUp([1, 2, 4, 5, 8, 9]); ->false
==============================================================================================
Question-8
Write a function that accepts start and end numbers. 
Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields [5, 6, 7, 8, 9].
 
Sample Output:
fizzArray3(5, 10) → [5, 6, 7, 8, 9]
fizzArray3(11, 18) → [11, 12, 13, 14, 15, 16, 17]
fizzArray3(1, 3) → [1, 2]
==============================================================================================
Question-9
Write a function that accepts and array. For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10.
 
Sample Output:
tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]




==============================================================================================
Question-10
It is said that an element in array is alone if there are values before and after it, and those values are different from it. Write a function that accepts an array and a number and prints the given array where every instance of the given value which is alone is replaced by whichever value to its left or rigth is larger.
 
Sample Output:
notAlone([1, 2, 3], 2) → [1, 3, 3]
notAlone([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
notAlone([3, 4], 3) → [3, 4]


//-----------Assignment 16/Recap Tasks------------------




 TASK WRITE A FUNCTION THAT ACCEPTS AN ARRAY AND PRINTS TRUE IF THE SUM OF ALL 2'S IN THE ARRAY IS EXACTLY 8.

 SAMPLE OUTPUT:
 sum28([2,3,2,2,4,2]);//-true
 sum28([2,3,2,2,4,2,2]);//-false
 sum28([2,3,2,2,4,]);//-false


function sum28(array){
	var sum=0;
	for (var i=0;i<array.length;i++){
		if(array[i]==2){
			sum+=array[i];
		}
		}if(sum==8){
		console.log("true");
	}else{
	console.log("false");
}
}
 sum28([2,3,2,2,4,2]);//-true
 sum28([2,3,2,2,4,2,2]);//-false
 sum28([2,3,2,2,4,]);//-false
// TASK WRITE A FUNCTION THAT ACCEPTS AN ARRAY AND PRINTS TRUE IF THE SUM OF ALL 2'S IN THE ARRAY IS EXACTLY 8.


/* //Question-2
//Write a function that accepts an array and prints true if the number 1's is gretaer than the number 4's
// 
//Sample Output:
//more14([1, 4, 1]); ->true
//more14([1, 4, 1, 4]); ->false
//more14([1, 1]);->true

function more14(array){
   var counter=0;
   var counter1=0;
   for(var i=0;i<array.length;i++){
       if(array[i]==1){
           counter++;
       }else if(array[i]==4){
           counter1++
       }
   }if(counter>counter1){
       console.log("true");
   }else{
       console.log("false");
   }
}
more14([1, 4, 1])
more14([1, 4, 1, 4])
more14([1, 1])*/ //Question-2 Write a function that accepts an array and prints true if the number 1's is gretaer than the number 4's

/*//Question-3
//Write a function that acccepts a number and create and prints a new array of length number, containing the numbers 0,1,2,...number-1.
//Sample Output:
//fizzArray(4) → [0, 1, 2, 3]
//fizzArray(1) → [0]
//fizzArray(10) →[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function fizzArray(number){
	var array1=Array(number);
	for( var i=0;i<array1.length;i++){
		array1[i]=i;
	}
	console.log(array1);
}


fizzArray(4)// → [0, 1, 2, 3]
fizzArray(1)// → [0]
fizzArray(10)// →[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]*/ //Question-3 Write a function that acccepts a number and create and prints a new array of length number, containing the numbers 0,1,2,...number-1.



/*//Question-4
//A value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. 
//Write a function that accepts an array and a number, and prints true if the given number is everywhere in the array.

//Sample Output:
//isEveryWhere([1, 2, 1, 3], 1); - >true
//isEveryWhere([1, 2, 1, 3], 2); - >false
//isEveryWhere([1, 2, 1, 3, 4], 1); - >true
//isEveryWhere([1, 2, 4, 3, 1], 1); - >false


function isEveryWhere(array,num){
	for( var i=0; i<array.length;i++){
if(array[0]==num&&(array[i+1]==num||array[i+2]==num)){
		console.log("True");
	break;

}else{
	console.log("False");
	break;
}
	}


}
isEveryWhere([1, 2, 1, 3], 1); //- >true
isEveryWhere([1, 2, 1, 3], 2); //- >false
isEveryWhere([1, 2, 1, 3, 4], 1);//- >true
isEveryWhere([1, 2, 4, 3, 1], 1);// - >false*/ ///*//Question-4 A value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. 



/*//Question-5
//Write a function that accepts two arrays of the same length. For every element in array1, consider the corresponding element in array2 (at the same index). Return the count of the number of times that two elements differ by 2 or less, but are not equal.
// 
//Sample Output:
//matchUp([1, 2, 3], [2, 3, 10]); ->2
//matchUp([1, 2, 3], [2, 3, 5]); ->3
//matchUp([1, 2, 3], [2, 3, 3]); ->2

function matchUp (array1,array2){
	var  count=0;
	for(var i=0;i<array1.length;i++){
			if (array2[i]-array1[i]<=2 && array1[i]!=array2[i]){
				count++;
			}
		
	}
	console.log(count);
}

matchUp([1, 2, 3], [2, 3, 10]);// ->2
matchUp([1, 2, 3], [2, 3, 5]);// ->3
matchUp([1, 2, 3], [2, 3, 3]);// ->2*/ //Question-5 Write a function that accepts two arrays of the same length. For every element in array1, consider the corresponding element in array2 (at the same index).


//Question-6
//Write a function that accepts an array and prints true if the array contains 3 even or 3 odd values all next to each other.

//Sample Output:
//modThree([2, 1, 3, 5]); ->true
//modThree([2, 1, 2, 5]); ->false
//modThree([2, 4, 2, 5]); ->true

//
//function modThree (array){
//	var count1=0;
//	var count2=0;
//	for( var i=0;i<array.length;i++){
//		if(array[i]%2==0){
//			count1++;
//		}else if(array[i]%2==1){
//			count2++;
//		}	
//		}
//	if(count1==2||count2==3){
//	console.log("true");
//	}else{
//		console.log("false");
//	}
//
//}

//modThree([2, 1, 3, 5]);// ->true
//modThree([2, 1, 2, 5]);// ->false
//modThree([2, 4, 2, 5]);// ->true


//Question-7
//Write a function that accepts an array and prints true if the array contains,somewhere,three increasing adjacent numbers like 4,5,6,... or 23,24,25.
// 
//Sample Output:
//tripleUp([1, 4, 5, 6, 2]); ->true
//tripleUp([1, 2, 3]); ->true
//tripleUp([1, 2, 4]); ->false
//tripleUp([1, 2, 4, 5, 8, 9]); ->false

//function tripleUp(array){
//   var result;
//   for(var i=0; i<array.length; i++){
//       var number;
//       if(array[i]==number&&array[i+1]==number+1 && array[i+2]==number+2){
//           result=true;
//           break;
//       }else{
//           result=false;
//       }
//   }
//   console.log(result);
//}
//
//tripleUp([1, 4, 5, 6, 2]);// ->true
//tripleUp([1, 2, 3]);// ->true
//tripleUp([1, 2, 4]); //->false
//tripleUp([1, 2, 4, 5, 8, 9]); //->false


//Question-8
//Write a function that accepts start and end numbers. 
//Given start and end numbers, return a new array containing the sequence of integers from start up to but not including end, so start=5 and end=10 yields [5, 6, 7, 8, 9].
// 
//Sample Output:
//fizzArray3(5, 10) → [5, 6, 7, 8, 9]
//fizzArray3(11, 18) → [11, 12, 13, 14, 15, 16, 17]
//fizzArray3(1, 3) → [1, 2]

//function fizzArray3(num1,num2){
//    var array=new Array(num2-num1);
//    var array1=[];
//    for(var i=0;i<array.length;i++){
//        array[i]=num1;
//        array1.push(array[i]);
//        num1++;
//    }console.log(array1);
//}
//
//fizzArray3(5, 10)// → [5, 6, 7, 8, 9]
//fizzArray3(11, 18)// → [11, 12, 13, 14, 15, 16, 17]
//fizzArray3(1, 3)// → [1, 2]


//Question-9
//Write a function that accepts and array. For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10.

//Sample Output:
//tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
//tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
//tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]

//function tenRun(array){
//	for(var i=0;i<array.length;i++){
//	if(array[i]%10==0){
//for(var j=i+1;j<array.length && (array[j])%10!=0;j++){
//			array[j]=array[i];
//		}
//	}
//	
//}
//	console.log(array);
//
//}
//
//
//tenRun([2, 10, 3, 4, 20, 5])// → [2, 10, 10, 10, 20, 20]
//tenRun([10, 1, 20, 2])// → [10, 10, 20, 20]
//tenRun([10, 1, 9, 20])// → [10, 10, 10, 20]


//Question-10
//It is said that an element in array is alone if there are values before and after it, and those values are different from it. Write a function that accepts an array and a number and prints the given array where every instance of the given value which is alone is replaced by whichever value to its left or rigth is larger.
// 
//Sample Output:
//notAlone([1, 2, 3], 2) → [1, 3, 3]
//notAlone([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
//notAlone([3, 4], 3) → [3, 4]
//
// function notAlone(array,num){
//    if(array.length<=2){
//        console.log(array);
//    }else{
//        for(var i=0;i<array.length-1;i++){
//            if(array[i]==num){
//                if(array[i-1]<array[i+1]){
//                    array.splice(i,1,array[i+1]);
//                    continue;
//                }else{
//                    array.splice(i,1,array[i-1]);     
//                }
//            }
//        }console.log(array);
//    }
//}
//
//notAlone([1, 2, 3], 2)// → [1, 3, 3]
//notAlone([1, 2, 3, 2, 5, 2], 2)// → [1, 3, 3, 5, 5, 2]
//notAlone([3, 4], 3)// → [3, 4]


//--------Assignment 17/String Manipulation Methods-------

//var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."
//
//1) Display how many sentences in the string.
//
//2) Display how many words in the string.
//
//3) Display todays date.
//
//4) Pick today's weather from the string and convert to Celsius and display the result.
//
//5) Separate Numbers and non numerical characters to 2 separate variables and display the result.
//
//         Please use isNaN() = is not a number method to check if it is a number or not.
//         console.log(isNaN(1));  -- >false 
//         console.log(isNaN("apple")); -- >true
//
//        Output Should Be:
//            InordertoBecomeaNumberTestAutomationDeveloper,ineedtopracticeatleasttohoursaday.Todayis//.WeatherisFdegrees.
//           1230811201870
//
//6) in the String instead of '2 to 3 hours' , display '3 to 4 hours'.
//
//7) Display first sentence in Uppercase and other sentences in Lowercase.
//
//8) Remove all spaces from the string and display the result.
//
//9) Reverse all words order in the string and replace all "." and "," with ""
//
//      Output Should Be:
//      degrees F 70 is Weather 08/11/2018 is Today day a hours 3 to 2 least at practice to need i Developer Automation Test 1 Number a Become to order In
//
//


//var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."


//1) Display how many sentences in the string.
//
//function strVar(str){
//
//var counter=0;
//for(var i=0;i<str.length;i++){
//	if(str.charAt(i)=="."){
//		counter++;
//
//	}
//		
//}	console.log(counter);
//}
//strVar ("In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees.");


//2) Display how many words in the string.


//function strVar(str){
//	var counter=0;
//	for ( var i=0; i<str.length;i++){
//        if(str.charAt(i)==" "){
//			counter++;
//		}
//	}console.log(counter);
//}
//strVar ("In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees.");
//
//var str="In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees.";
//var array=str.split(' ');
//console.log(array.length);




//---------------------Assignment 18 - String Manipulation Tasks--------------------------------

//Question 1=============================================
//Create a function that accepts 1 string, e.g. "Bob", return a greeting of the form "Hello Bob!".
//helloName("Bob") → "Hello Bob!"
//helloName("Alice") → "Hello Alice!"
//helloName("X") → "Hello X!"
//
//function helloName(str){
//	console.log("hello".concat(str));
//}
//
//helloName("Bob");
//helloName("Alice");
//helloName("Eddie");

//Question 2=============================================
//Create a function that accepts two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
//makeAbba("Hi", "Bye") → "HiByeByeHi"
//makeAbba("Yo", "Alice") → "YoAliceAliceYo"
//makeAbba("What", "Up") → "WhatUpUpWhat"


//function makeAbba(str1,str2){
//	console.log(str1.concat(str2)+str2.concat(str1));
//	
//}
//makeAbba("Hi", "Bye")// → "HiByeByeHi"
//makeAbba("Yo", "Alice")// → "YoAliceAliceYo"
//makeAbba("What", "Up")// → "WhatUpUpWhat"



//Question 3=============================================
//Create a function return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
//extraEnd("Hello") → "lololo"
//extraEnd("ab") → "ababab"
//extraEnd("Hi") → "HiHiHi"


//
//function extraEnd(str){
//    var len=str.length;
//    var x = str.substring(len-2,len); 
//    console.log(x.concat(x).concat(x));
//}
//
//extraEnd("Hello");
//extraEnd("ab");
//extraEnd("Hi");



//Question 4=============================================
//Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.
//firstTwo("Hello") → "He"
//firstTwo("abcdefg") → "ab"
//firstTwo("ab") → "ab"


//
//function firstTwo(str){
//	
//	var y=str.substring(0,2)
//	console.log(y)
//}
//
//firstTwo("Hello")// → "He"
//firstTwo("abcdefg")// → "ab"
//firstTwo("ab")// → "ab"
//Question 5==============================================
//Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
//firstHalf("WooHoo") → "Woo"
//firstHalf("HelloThere") → "Hello"
//firstHalf("abcdef") → "abc"



//function firstHalf(str){
//	var x=str.length/2
//	console.log(str.substring(0,x))
//	
//}
//
//firstHalf("WooHoo")// → "Woo"
//firstHalf("HelloThere")// → "Hello"
//firstHalf("abcdef")// → "abc"



//Question 6===============================================
//Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.
//withoutEnd("Hello") → "ell"
//withoutEnd("java") → "av"
//withoutEnd("coding") → "odin"
//
//function withoutEnd(str){
//var z=str.substring(1,str.length-1);
//	console.log(z)
//	
//}
//
//withoutEnd("Hello")// → "ell"
//withoutEnd("java")// → "av"
//withoutEnd("coding")// → "odin"


//Question 7===============================================
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 
//comboString("Hello", "hi") → "hiHellohi"
//comboString("hi", "Hello") → "hiHellohi"
//comboString("aaa", "b") → "baaab"


//function comboString(str1,str2){
//    if(str1.length>str2.length){
//         console.log(str2+str1+str2);
//    }else{
//        console.log(str1+str2+str1);
//    }
//}
//
//comboString("Hello", "hi");
//comboString("hi", "Hello");
//comboString("aaa", "b");


//Question 8================================================
//Given 2 strings, return their concatenation, except omit the first char of each.
//nonStart("Hello", "There") → "ellohere"
//nonStart("java", "code") → "avaode"
//nonStart("shotl", "java") → "hotlava"
//Question 

//function nonStart(str1, str2){
//	var x =str1.substring(1)+str2.substring(1);
//	console.log(x);
//	
//}
//nonStart("Hello", "There")// → "ellohere"
//nonStart("java", "code")// → "avaode"
//nonStart("shotl", "java")// → "hotlava"

//9================================================
//Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.
//left2("Hello") → "lloHe"
//left2("java") → "vaja"
//left2("Hi") → "Hi"
////
//function left2(str){
//	var x =str.substring(2)+str.substring(0,2);
//	console.log (x)
//}
//left2("Hello")// → "lloHe"
//left2("java")// → "vaja"
//left2("Hi")// → "Hi"


//Question 10===============================================
//Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.
//right2("Hello") → "loHel"
//right2("java") → "vaja"
//right2("Hi") → "Hi"




//
//function right2(str){
//    var len = str.length-2;
//	console.log(str.substring(len) + str.substring(0, len));
//
//}
//
//right2("Hello");
//right2("java");
//right2("Hi");








//---------Assignment 19 - String Manipulation Tasks----------


//Question 1
//
//Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".
//
//frontAgain("edited") → true
//
//frontAgain("edit") → false
//
//frontAgain("ed") → true

//function frontAgain(str){
//    var x = str.substring(0,2);
//	//console.log(x)
//    if(x==str.substring(str.length-2)){
//		console.log(x)
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}
//
//frontAgain("edited");
//frontAgain("edit");
//frontAgain("ed");

//============================================
//Question 2
//
//Return the number of times that the string "hi" appears anywhere in the given string.
//
//countHi("abc hi ho") → 1
//
//countHi("ABChi hi") → 2
//
//countHi("hihi") → 2

//function countHi(str){
//	var counter=0;
//	for(var i=0;i<str.length;i++){
//		if (str.charAt(i)=="h"&&str.charAt(i+1)=="i"){
//			counter++;
//		}
//		
//	}
//	
//		console.log(counter)
//}
//
//
//
//
//countHi("abc hi ho")// → 1
//
//countHi("ABChi hi")// → 2
//
//countHi("hihi")// → 2


//================================================


//Question 3
//
//Return true if the string "cat" and "dog" appear the same number of times in the given string.
//
//catDog("catdog") → true
//
//catDog("catcat") → false
//
//catDog("1cat1cadodog") → true


//function catDog(str){
//    var counter1=0;
//    var counter2=0;
//    for(var i=0;i<str.length;i++){
//        if(str.charAt(i)=="c" && str.charAt(i+1)=="a" && str.charAt(i+2)=="t"){
//            counter1++;
//        }else if(str.charAt(i)=="d" && str.charAt(i+1)=="o" && str.charAt(i+2)=="g"){
//            counter2++;
//        }
//    }
//    
//    if(counter1==counter2){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}




//catDog("catdog")// → true
//
//catDog("catcat")//→ false
//
//catDog("1cat1cadodog")// → true



//==================================================


//Question 4
//
//Given a string, return a string where for every char in the original, there are two chars.
//
//doubleChar("The") → "TThhee"
//
//doubleChar("AAbb") → "AAAAbbbb"
//
//doubleChar("Hi-There") → "HHii--TThheerree"


//function doubleChar(str){
//	var x="";
//	for(var i=0;i<str.length;i++){
//		 x=x.concat(str.charAt(i)).concat(str.charAt(i));
//	}
//	console.log(x)
//}
//
//
//
//doubleChar("The")// → "TThhee"
//
//doubleChar("AAbb")// → "AAAAbbbb"
//
//doubleChar("Hi-There") //→ "HHii--TThheerree"


//=============================================


//Question 5
//
//Given a string, return true if it ends in "ly".
//
//endsLy("oddly") → true
//
//endsLy("y") → false
//
//endsLy("oddy") → false



//function endsLy(str){
//    var x = str.substring(str.length-3);
//	console.log(x)
//    if(x=="ly"){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//    
//}
//
//endsLy("oddly");
//endsLy("y");
//endsLy("oddy");


//==================================================
//Question 6
//
//Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.
//
//withouEnd2("Hello") → "ell"
//
//withouEnd2("abc") → "b"
//
//withouEnd2("ab") → ""



//
//function withouEnd2(str){
//	var x=str. substring(1,str.length-1);
//		console.log(x)
//	}
//	
//
//withouEnd2("Hello")// → "ell"
//
//withouEnd2("abc")// → "b"
//
//withouEnd2("ab")// → ""



//=============================================

//Question 7
//
//Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.
//
//hasBad("badxx") → true
//
//hasBad("xbadxx") → true
//
//hasBad("xxbadxx") → false


//function hasBad(str){
//    if(str.search("bad")==0 || str.search("bad")==1){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}
//
//hasBad("badyy")// → true
//
//hasBad("xbadxx")// → true
//
//hasBad("xxbadxx")// → false


//--------Assignment 21 - String Manipulation Tasks-------


//Question1
//
//Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.

//sameStarChar("xy*yzz") → true
//
//sameStarChar("xy*zzz") → false
//
//sameStarChar("*xa*az") → true
//function sameStarChar(str){
//    var result=false;
//    for(var i=0;i<str.length;i++){
//        if(str.charAt(i)=="*" && str.charAt(i-1)==str.charAt(i+1)){
//           result=true;
//        }
//    }
//    if(result){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}  
//
//sameStarChar("xy*yzz"); //→ true
//
//sameStarChar("xy*zzz"); //→ false
//
//sameStarChar("*xa*az"); //→ true


//Question2
//
//We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

//countTriple("abcXXXabc") → 1
//
//countTriple("xxxabyyyycd") → 3
//
//countTriple("a") → 0

//function countTriple(str){
//    var counter=0;
//    for(var i=0;i<str.length;i++){
//        if(str.charAt(i)==str.charAt(i+1) && str.charAt(i)==str.charAt(i+2)){
//            counter++;
//            continue;
//        }
//    }console.log(counter);
//}
//
//
//
//countTriple("abcXXXabc")// → 1
//
//countTriple("xxxabyyyycd")// → 3
//
//countTriple("a")// → 0


//Question3
//
//We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.
//
//gHappy("xxggxx") → true
//
//gHappy("xxgxx") → false
//
//gHappy("xxggyygxx") → false

//function gHappy(str){
// for( var i=0;i<str.length;i++){
//		if(str.substring(i,i+1)=="g"){
//			var boolean=false;
//			if(str.substring(i,i+2)=="g" || str.substring(i-1,i)=="g" ){
//				boolean=true;
//			}
//        }
//    }
//    if(boolean){
//        console.log("true");
//    }else{
//        console.log("false");
//    }
//}  
//gHappy("xxggxx")// → true
//
//gHappy("xxgxx")// → false
//
//gHappy("xxggyygxx")// → false

//----------------Altynai Example-------------------------

//function gHappy(str){
//    var result;
//    for(var i=0;i<str.length;i++){
//        if(str.charAt(i)=="g"){
//            if((str.charAt(i-1)=="g") || (str.charAt(i+1)=="g")){
//                result=true;
//            }else if((str.charAt(i-1)!="g") || (str.charAt(i+1)!="g")){ 
//                result=false;
//                break;
//            }else{
//            result=false;
//            }
//        }
//	
//    }
//    	console.log(result);
//}
//	gHappy("xxggxx")// → true
//
//gHappy("xxgxx")// → false
//
//gHappy("xxggyygxx")// → false


//Question4
//
//Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

//equalIsNot("This is not") → false
//
//equalIsNot("This is notnot") → true
//
//equalIsNot("noisxxnotyynotxisi") → true

//function equalIsNot(str){
//	var result=false;
//	for( var i=0;i<str.length;i++){
//		if(str.chatAt(i)=="not" )
//	}
//}
//
//
//
//equalIsNot("This is not")// → false
//
//equalIsNot("This is notnot")// → true
//
//equalIsNot("noisxxnotyynotxisi")// → true
	
//	
//Given an object with  properties inside:
//var dataTypes{
//   number:"decimals and intergers",
//   char:"some char",
//   boolean:true,
//   null:"non-existed"
//};
//remove properties that not related to JavaScript data types and add other missing ones to the dataTypes objective and print all the properties in the console.
	
//var dataTypes={
//    number:"decimals and intergers",
//    char:"some char",
//    boolean:true,
//    Null:"non-existed"
//};
//    delete dataTypes.char;
//    dataTypes.undefined="no value";
//    dataTypes.string="string";
//    console.log(dataTypes);
//for(x in dataTypes){
//    console.log(x + ": " + dataTypes[x])
//}
//
//
//var str="   I love      Java        Script  because    it is super   easy    ";
//
//var z= str.replace(/\s+/g, " ");
//console.log(z)  
//
//
//
//for(var i = 10; i <= 40; i += 1){
//	if(i % 2 === 0) {
//		console.log(i);
//	}
//}
//
//
//
//    var str = "HELLOWorld!";
//    var res = str.toLowerCase();
//    console.log(res);
//
//var str = "HOME SWEET HOME!";
//    var res = str.split(" ");
//    console.log(res);
//
//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//    fruits.splice( 0,1,"Lemon", "Kiwi");
//console.log(fruits);



//----------------------------------Assignment-20/Objects-----------------------------

//Question-1
//For Mark and John:
//1. For each of them, create an object with properties for their full name,mass,and height 
//2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
//3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Do not forget they might have the same BMI 
//Remember: BMI = mass/(height*height);
//
////
//var Person1={
//	firstName: "Mark",
//	lastName:"Brown", 
//	mass:200,
//	heigth:1.95,
//	BMI:function (){
//	var result = this.mass/(this.heigth*this.heigth);
//	return result;
//    }
//}
// var Person2={
//	firstName: "John",
//	lastName:"Hansen", 
//	mass:230,
//	heigth:1.80,
//	BMI:function (){
//	var result = this.mass/(this.heigth*this.heigth);
//	return result;
//}
//}
//if(Person1.BMI()>Person2.BMI()){
//	console.log(Person1.firstName+ " has highest BMI " + Person1.BMI());
//}else if(Person2.BMI()>Person1.BMI()){
//	console.log(Person2.firstName+ " has highest BMI " + Person2.BMI());
//}else{
//	console.log("Perso1 & Person2 have same BMI");
//}


//Question-2
//
//1. Build a function constructor called Salary to calculate the average salary of Cybertek Student. Salary constructor should include:
//
//    - First Name of the student
//
//    - Last Name of the student
//
//    - Gender of the student
//
//    - Age of the student
//
//    - Studying Hours of the student
//
//2. Ask student to enter how many hours he/she studied for 5 weeks and store these hours in the array. (Weekly hours should be 0-10 hours max)
//
//3. Create a method in your constructor to calculate your average studying hours for 5 weeks.
//
//4. Create another method to calculate the salary.
//
//        - if average hours is less than 4 hours, you need to tell student: "Not eligible to go to market, and study more"
//
//        - if average hours is between 4 and 6(included) , salary for that person will be 10 percent more than base salary
//
//        - if average hours is between 6 and 8(included) , salary for that person will be 20 percent more than base salary
//
//        - if average hours is between 8 and 10(included) , salary for that person will be 50 percent more than base salary      
//
//        base salary will be a parameter of the salaryCalculate method. 
//
//5- Print the student salary with his name:  "Mike Smith Salary is $150000"

	
	
//function Salary(firstName,lastName,gender,age,studyinghours){
//    this.firstName=firstName;
//    this.lastName=lastName;
//    this.gender=gender;
//    this.age=age;
//    this.studyinghours=studyinghours;
//    
//    this.calcAverage=function(){
//        var sum=0;
//        for(var i=0;i<this.studyinghours.length;i++){
//            sum=sum+this.studyinghours[i];
//        }
//        
//        var average = sum / this.studyinghours.length;
//        return average;
//    }
//    
//    this.calcSalary=function(baseSalary){
//        if(this.calcAverage()>5 && this.calcAverage()<=7){
//             return baseSalary=Math.floor(baseSalary*1.1);
//        }else if(this.calcAverage()>7 && this.calcAverage()<=9){
//             return baseSalary=Math.floor(baseSalary*1.2);
//        }else if(this.calcAverage()>9 && this.calcAverage()<=10){
//             return baseSalary=Math.floor(baseSalary*1.5);
//        }else{
//            return "Not eligible";
//        }
//    }
//}
//
//var hours=[];
//for(var i=0;i<5;i++){
//    hours[i]=parseInt(prompt("Enter your hours for week" + (i+1)));
//}
//
//
//var s1=new Salary("Mike","Smith","M","20",hours);
//console.log(s1.calcSalary(100000));



//--------------Assignment-22/Objects--------------------------

//
//CAR GAS PRICE CALCULATOR
//
//1-Ask user to enter min and max mileage and create 4 random mileage between max and min and store them into an array
//
//2-Ask user to enter the gas prices for regular, premium and supper and put them into an object with key and values
//
//3-Create a constructor called Car which includes properties:
//make,model,year,mileage,level,tank
//
//4-Add a method to calculate the average mileage
//
//5-Add a method to calculate the how much gas comsume:
//if average mileage is between 0 and 500, car comsumes 10 percent more than full tank
//if average mileage is between 500 and 1000, car comsumes 20 percent more than full tank
//if average mileage is between 1000 and 5000, car comsumes 30 percent more than full tank
//if average mileage is between 5000 and 10000, car comsumes 40 percent more than full tank
//otherwise car consumes 50 percent more than full tank
//
//
//6-Add a method to calculate the cost of the gas:
//if car year is 2018, that car needs super level gas
//if car year is between 2010 and 2018, that car needs premium level gas
//if car year is between 2000 and 2010, that car needs regular gas
//
//cost of the gas = gas price * tank
//
//7-Create couple of car objects and console the cost of the gas


//var min = parseInt(prompt("Enter min mileage"));
//var max = parseInt(prompt("Enter max mileage"));
//
//var mileage = [];
//
//for(var i=0;i<4;i++){
//    mileage[i]= Math.floor(Math.random()*(max-min)+min);
//}
//
//var regular = parseFloat(prompt("Enter regular price"));
//var premium = parseFloat(prompt("Enter premium price"));
//var supper = parseFloat(prompt("Enter super price"));
//
//var gasPrice = {
//    regular : regular,
//    premium : premium,
//    supper : supper
//};
//
//function Car(make,model,year,mileage,level,tank){
//    this.make=make;
//    this.model=model;
//    this.year=year;
//    this.mileage=mileage;
//    this.level=level;
//    this.tank=tank;
//    
//    this.averageMileageCalc=function(){
//        var sum=0;
//        for(var i=0;i<this.mileage.length;i++){
//            sum=sum+this.mileage[i];
//        }
//        return sum/this.mileage.length;
//        
//    }
//    
//    this.consumeGasCalc=function(){
//        if(this.averageMileageCalc()>0 && this.averageMileageCalc()<=500){
//            return this.tank *1.1;
//        }else if(this.averageMileageCalc()>500 && this.averageMileageCalc()<=1000){
//            return this.tank *1.2;
//        }else if(this.averageMileageCalc()>1000 && this.averageMileageCalc()<=5000){
//            return this.tank *1.3;
//        }else if(this.averageMileageCalc()>5000 && this.averageMileageCalc()<=10000){
//            return this.tank *1.4;
//        }else{
//            return this.tank *1.5;
//        }
//    }
//    
//    this.gasPriceCalc=function(){
//        if(this.year==2018){
//            return this.level.supper * this.consumeGasCalc();
//        }else if(this.year<2018 && this.year>=2010){
//            return this.level.premium * this.consumeGasCalc();
//        }else if(this.year<2010 && this.year>=2000){
//            return this.level.regular * this.consumeGasCalc();
//        }
//            
//    }
//    
//}
//
//var car1=new Car("Honda","Civic",2010,mileage,gasPrice,40);
//
//var cost=car1.gasPriceCalc();
//
//console.log(cost);



//var employeeHours=parseInt(prompt("Please enter hours he/she worked for 4 weeks?"))
//var forWeeks=[];
//if(employeeHours>0 && employeeHours<=70){
//forWeeks.push(employeeHours);
//}
//var wage=0;
//var employeeWage=parseInt(prompt("Please enter your wage?"));
//if(employeeWage>0){
//	var wage=employeeWage;
//}
//
//function employeeConstr(fName,iName,birthYear){
//	//this.employeeID=employeeID;// add employee ID method
//	this.birthYear=2018-birthYear;
//	this.fName=fName;
//	this.iName=iName;
//	this.employeeID=function(){
//		////////add method
//	}
//}
//
//var newEmployee= new employeeConstr("Mike","Smith",1987);
//console.log(newEmployee)
//
//var Payroll1=0;
//function Payroll(hours,insurance){
//	this.hours=forWeeks;
//	this.insurance=insurance;
//	this.totalHoursWorked=function(){
//		Payroll1=forWeeks*wage;
//		return Payroll1;	
//	}	
//}console.log(Payroll1)
//
//
//var plusInsurance=prompt("Do you have an insurance? \n 1.Yes \n 2.No");
//if (plusInsurance==1){
//	
//}
//console.log()


