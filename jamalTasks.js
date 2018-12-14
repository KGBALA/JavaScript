


// --------------LABS DURING THE CLASS------------





//------------------LAB-1------------------------


/*//1-Create 5 variables for 5 vegetables and print them on the console
Expected Result ;

1 Cucumber is 2.5 dollars
1 Tomatoes is 3 dollars
1 Onion is 1.5 dollars
1 Pepper is 2 dollars
1 Carrot is 4 dollars





var vegetables_1,vegetables_2,vegetables_3,vegetables_4,vegetables_5;

vegetables_1 = "Cucumber",
vegetables_2 = "Tomatoes",
vegetables_3 = "Onion",
vegetables_4 = "Pepper",
vegetables_5 = "Carrot";



console.log("list of vegetables");
console.log(vegetables_1);
console.log(vegetables_2);
console.log(vegetables_3);
console.log(vegetables_4);
console.log(vegetables_5);*/ //1-Create 5 variables for 5 vegetables and print them on the console


/*//2- Create a program that asks user to enter amount for each //vegetables and make sure results are number

var amountOfVegetables_1,amountOfVegetables_2,amountOfVegetables_3,amountOfVegetables_4,amountOfVegetables_5;

amountOfVegetables_1 = parseInt(prompt("Please enter the amount of " + vegetables_1));
amountOfVegetables_2 = parseInt(prompt("Please enter the amount of " + vegetables_2));
amountOfVegetables_3 = parseInt(prompt("Please enter the amount of " + vegetables_3));
amountOfVegetables_4 = parseInt(prompt("Please enter the amount of " + vegetables_4));
amountOfVegetables_5 = parseInt(prompt("Please enter the amount of " + vegetables_5));*/ //2- Create a program that asks user to enter amount for each



/*//3-Create price for each product 

var price_1,price_2,price_3,price_4,price_5;

price_1 = 2.5;
price_2 = 3;
price_3 = 1.5;
price_4 = 2;
price_5 = 4;*/ //3-Create price for each product 


/*//4- calculate and show price of each vegetables with following format

// 1 Cucember is 2.5 dollars
// 2             5 

var totalVegetables_1,totalVegetables_2,totalVegetables_3,totalVegetables_4,
totalVegetables_5;

totalvegetables_1 =amountOfVegetables_1*price_1;
totalvegetables_2 =amountOfVegetables_2*price_2;
totalvegetables_3 =amountOfVegetables_3*price_3;
totalvegetables_4 =amountOfVegetables_4*price_4;
totalvegetables_5 =amountOfVegetables_5*price_5;

console.log(amountOfVegetables_1+" "+vegetables_1+" is "+ totalvegetables_1+ " Dollars");
console.log(amountOfVegetables_2+" "+vegetables_2+" is "+ totalvegetables_2+ " Dollars");
console.log(amountOfVegetables_3+" "+vegetables_3+" is "+ totalvegetables_3+ " Dollars");
console.log(amountOfVegetables_4+" "+vegetables_4+" is "+ totalvegetables_4+ " Dollars");
console.log(amountOfVegetables_5+" "+vegetables_5+" is "+ totalvegetables_5+ " Dollars");*/ //4- calculate and show price of each vegetables with following format



//----------------------LAB-2-------------------------



/*Question-1:
Create a variable TodaysDate and assign todays date and display in a pop up box


//1-declare a variable todaysDate
//2- assign value which is todays date to the todaysDate variable
//3- alert

var todaysDate;

todaysDate =" 07/19/2018";

alert(todaysDate);*/ //Question-1: Create a variable TodaysDate and assign todays date and display in a pop up box


/*Question-2

Declare 4 variables

Assign different datatypes

Display value of variables

Display data type of variables



var var1,var2,var3,var4;

var1 = 123;
var2 = "FirstName";
var3 = true;
var4 = null; 

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);*/ //Question-2 Declare 4 variables Assign different datatypes


/* Question-3

Declare 2 variables (num1, num2)

Swap values between num1 and num2

Display new values of num1 and num2



var num1,num2,temp;

num1 = 50;
num2 = 60;

temp = num2;
num2 = num1;
num1 = temp;

console.log("Num1 value is " + num1);
console.log("Num2 value is " + num2);*/ //Question-3 Declare 2 variables (num1, num2)



//----------------------LAB-3---------------------------


/*
 * Question 1:
 * Write a javascript program for following logic.
 *	if marks < 60, then print "Failed"
 *	if marks >= 60 but less than 90 , then print "Passed"
 *	if marks >= 90, then print "Passed with Distinction"
 *
 * This solution uses if, else if and else statements, logic is similar to Ques1_Soln2
 * but it is more readable.
 * 
 *

var marks = parseInt(prompt("please enter value"));

if(marks<60){
    console.log("failed");
}else if(marks<90){
    console.log("Pass");
}else{
    console.log("Pass with distinction");
}*/ //Question 1: * Write a javascript program for following logic.



/*

Question-2
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



var userName,password,expectedUserName,expectedPassword;


userName =prompt("Please enter your username");
password =prompt("Please enter your password");

expectedUserName = "admin";
expectedPassword = "abc123";

if((userName =="")&& (password=="")){
    console.log("UserName and Password Fields cannot be empty");
}else if((userName =="") && (password !="")){
    console.log("UserName cannot be empty");
}else if((userName !="")&&(password=="")){
    console.log("Password cannot be empty");
}else if((userName !=expectedUserName)||(password!=expectedPassword)){
         console.log("UserName or password is not valid. Please verify");
}else if(userName==expectedUserName && password==expectedPassword){
    console.log("User Logged in successfully");
}*/ //Question-2 Login Functionality Logic  UserName,Password



/*
Question-3
Calculator Logic with 2 numbers
    User is able to enter 2 numbers
    User is able to enter one of these operators:
        +,-,/,*
    Program needs to perform the operation and display the result
    If either number1 or number2 is blank:
        "Please enter valid numbers"
   




var num1, num2, operators;
num1=prompt("enter your first number");
num2=prompt("enter your second number");
operators=prompt("enter the operator");

if(num1==""||num2==""){
    console.log("enter valid number please!");
}else{
    num1=parseInt(num1);
    num2=parseInt(num2);
if(operators=="*"){
    console.log(num1*num2);
} else if (operators=="/"){
    console.log(num1/num2);
} else if (operators=="+"){
    console.log(num1+num2);
} else if (operators=="-"){
    console.log(num1-num2);
}else{
    console.log("invalid operator");
}}*/ //Question-3 Calculator Logic with 2 numbers



/*//Tax Calculator:

    - Let user enter his income 

    - Let user enter his income

    - Calculate the tax amount according to below table

    - Print the tax amount

Income	Tax Ratio
income ≤150,000,000	 %25
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

var income,tax,t1,t2,t3,t4;


t1 = 150*0.25;
t2 = 150*0.30;
t3 = 300*0.35;
t4 = 600*0.40;
income=parseInt(prompt("Please enter your income million"));

if(income<150){
    tax= income*0.25;
}else if(income<=300){
    tax = t1+(income-150)*0.30;
}else if(income<=600){
    tax = t1+t2+(income-300)*0.35;
}else if(income<=1200){
    tax = t1+t2+t3+(income-600)*0.40;
}else{
    tax = t1+t2+t3+t4+(income-1200)*0.50;
}

console.log("your income is: "+ income);
console.log("your tax is: "+tax);*/ //Question-4 Tax Calculator:


/*//Question-5
Any year is input by the user. Write a program to determine whether the year is a leap year or not.
Leap Years are any year that can be evenly divided by 4.  A year that is evenly divisible by 100 is a leap year only if it is also evenly divisible by 400.

Example : 
1992      Leap Year
2000      Leap Year
1900      NOT a Leap Year

A leap year is exactly divisible by 4 except for century years (years ending with 00). The century year is a leap year only if it is perfectly divisible by 400.

 if year is not dividable 100 and dividable by 4 - leap
if year is dividable by 100 and dividable by 400 than - leap

var year=parseInt(prompt("Please enter year"));


if((year%4==0 && year%100!=0)||(year%400==0)){
    console.log("Year"+year+"is a leap year");
}else{
    console.log("year"+year+"is not a leap year")
}*/ //Question-5 Any year is input by the user.
 


/*

Question-6

Write a JS program to calculate the monthly telephone bills as per the following rule: 
Minimum $200 for up to 100 calls. 
Plus $0.60 per call for next 50 calls. 
Plus $0.50 per call for next 50 calls. 
Plus $0.40 per call for any call beyond 200 calls.



var calls,bill;

calls =parseInt(prompt("please enter call numbers"));

if(calls<=100){
    bill=200;
}else if(calls<=150){
    calls=calls-100;
    bill=200+(calls*0.6);
}else if(calls<=200){
    calls=calls-150;
    bill=200+(50*0.6)+(calls*0.5);
}else{
    calls=calls-200;
    bill=200+(50*0.6)+(50*0.5)+(calls*0.4);
}

console.log("your total bill:"+ bill);*/ //Question-6 Write a JS program to calculate the monthly telephone bills as per the following rule:




//-----------------------LAB-4--------------------------



/*//User should be able to enter 3 values and program should display which number is largest.
if numbers are equal, it should display numbers are equal 
Above steps need to repeated to number of times that is also inputted by user.

get 3 numbers
if statements
ask user how many times
loop


var num1,num2,num3,times;

times=parseInt(prompt("how many times do you want to try?"));


for(var i=0;i<times;i++){
    
num1=parseInt(prompt("Enter first number"));
num2=parseInt(prompt("Enter second number"));
num3=parseInt(prompt("Enter third number"));

if(num1>num2 && num1>num3){
    console.log(num1+ "is the largest");
}else if(num2>num1 && num2>num3){
    console.log(num2+ "is the largest");

}else if(num3>num1 && num3>num2){
    console.log(num3+ "is the largest");

}else{
    console.log("all numbers are equal");
}
    
}*/ //User should be able to enter 3 values and program should display which number is largest.
    

/*//User should be able to enter 3 values and program should display(alert) which number is largest.
//if numbers are equal, it should display numbers are equal 
//after each result program should ask user "Do you want to continue 1.Yes 2.No", if user enter 1 it should ask again, if user enter 2 it should stop and display"Thank you!". 
    

do{
var num1,num2,num3,askAgain;
   
num1=parseInt(prompt("Enter first number"));
num2=parseInt(prompt("Enter second number"));
num3=parseInt(prompt("Enter third number"));

if(num1>num2 && num1>num3){
    alert(num1+ "is the largest");
}else if(num2>num1 && num2>num3){
    alert(num2+ "is the largest");

}else if(num3>num1 && num3>num2){
    alert(num3+ "is the largest");

}else{
    alert("all numbers are equal");
}
  askAgain=parseInt(prompt("Do you want to continue \n1.Yes \n2.No"));
    if(askAgain==1){
        continue;
    }else{
        break;
    }
    
}while(true);*/ //User should be able to enter 3 values and program should display(alert) which number is largest.


/* without break and continue
do{
var num1,num2,num3,askAgain;
   
num1=parseInt(prompt("Enter first number"));
num2=parseInt(prompt("Enter second number"));
num3=parseInt(prompt("Enter third number"));

if(num1>num2 && num1>num3){
    alert(num1+ "is the largest");
}else if(num2>num1 && num2>num3){
    alert(num2+ "is the largest");

}else if(num3>num1 && num3>num2){
    alert(num3+ "is the largest");

}else{
    alert("all numbers are equal");
}
  askAgain=parseInt(prompt("Do you want to continue \n1.Yes \n2.No"));
   
    
}while(askAgain==1);

    alert("Thank you");*/ //User should be able to enter 3 values and program should display(alert) which number is largest.
    


/*
Task:

User should be able to enter 3 values and program should display(alert) which number is largest.
if numbers are equal, it should display numbers are equal 
after each step program should ask user "Do you want to continue 1.Yes 2.No", if user enter 1, program should ask again, if user enter 2, it should stop and display"Thank you!, you have tried .. times". 

    //
var num1,num2,num3,askAgain,count;
count = 1;

do{ 
      
num1=parseInt(prompt("Enter first number"));
num2=parseInt(prompt("Enter second number"));
num3=parseInt(prompt("Enter third number"));

if(num1>num2 && num1>num3){
    alert(num1+ "is the largest");
}else if(num2>num1 && num2>num3){
    alert(num2+ "is the largest");

}else if(num3>num1 && num3>num2){
    alert(num3+ "is the largest");

}else{
    alert("all numbers are equal");
}
  askAgain=parseInt(prompt("Do you want to continue \n1.Yes \n2.No"));
    
    if(askAgain==1){
        count++;
        continue;
    }else{
        alert("Thank you. you have tried "+ count +" times");
        break;
    }
    
}while(true);*/ //Task: User should be able to enter 3 values and program should display(alert) which number is largest.
    



//-------------------------LAB-5---------------------------


/*//Question-1

Write JavaScript statements that do the following:
a) Declare an array numArray of 15 elements.
b) Output the value of the tenth element of the array numArray. 
c) Set the value of the fifth element of the array numArray to 35. 
d) Set the value of the ninth element of the array numArray to the sum of the sixth and thirteenth elements of the array numArray.


var numArray= Array(15);
numArray[0] = 10;
numArray[1] = 20;
numArray[2] = 30;
numArray[3] = 40;
numArray[4] = 50;
numArray[5] = 60;
numArray[6] = 70;
numArray[7] = 80;
numArray[8] = 90;
numArray[9] = 100;
numArray[10] = 110;
numArray[11] = 120;
numArray[12] = 130;
numArray[13] = 140;
numArray[14] = 150;

console.log(numArray[9]);

numArray[4]=35;

numArray[8]=numArray[5]+numArray[12];*/ //Question-1 Write JavaScript statements that do the following:


/*//Question-2
a) Write a statement that declares an array initialized with the following strings: 
"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" and "Saturday". 
b) Write a loop that displays the contents of each element in the array that you declared.


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for(var i=0;i<days.length;i++){
    console.log(days[i]);
}*/ //Question-2 Write a statement that declares an array initialized with the following strings: 



/*Q3
Write a program that creates an array of 10 elements size. Your program should prompt the user to input numbers in array and then display the sum of all array elements.


var myArray=Array(10);
for(var i=0;i<myArray.length;i++){
    myArray[i]=parseInt(prompt("Enter your number"));
}

var sum=0;
for(var i=0;i<myArray.length;i++){
    sum=sum+myArray[i];
}
console.log("Sum of numbers: " + sum);*/ //Question-2 Write a program that creates an array of 10 elements size



/*// Add new product in to Array using PUSH
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
alert("Thank you");*/ // Add new product in to Array using PUSH


//--------------LAB-8------------------------

/*// QUESTION -1
//Write a function that accepts an array and return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
//Sample Output:
//firstLast6([1, 2, 6]) → true
//firstLast6([6, 1, 2, 3]) → true
//firstLast6([13, 6, 1, 2, 3]) → false


function firstLast6(array){
	if (array.indexOf(6)==0||array.lastIndexOf(6)==array.length-1){
		console.log("true");
	}else{
		console.log("false");
	}
}

firstLast6([1,2,6])
firstLast6([3,2,6])
firstLast6([1,14,6])
firstLast6([1,14,8])*/ //QUESTION -1  Write a function that accepts an array and return true if 6



/*//Write a function that accepts an array and check the length of the array first. If the length is more than one, check if the first element and last element are equal. if it is print true, if not print false. If the length is not more than 1, print not valid an array
//Sample Output:
//sameFirstLast([1, 2, 3]) → false
//sameFirstLast([1, 2, 3, 1]) → true
//sameFirstLast([1, 2, 1]) → true
//sameFirstLast([1]); → not a valid array


function sameFirstLast(array){
	if(array.length>1){
		if(array[0]==array[length-1]){
	   console.log("true ");
	   }else{
		   console.log("false");
	   }
	   }else{
		console.log("Not valid")
	   }
	 
}
sameFirstLast([1,2,3]);
sameFirstLast([1,2,3,1]);
sameFirstLast([1,2,1]);
sameFirstLast([1]);*/ // QUESTION-2 Write a function that accepts an array and check the length of the array first.


/*//Question-3
//Write a function that accepts 2 arrays and checks the lengths of the arrays first. If lengths are more than 1, it prints true if the arrays have the same first element or they have the same last element. If the length of the array is not more than 1, it prints the "array1 is not a valid array " or "array2 is not a valis array"
//Sample Output:
//commonEnd([1, 2, 3], [7, 3]); - >true
//commonEnd([1, 2, 3], [7, 3, 2]); - >false
//commonEnd([1, 2, 3], [1, 3]); - >true
//commonEnd([1], [7, 3]); - >array1 is not a valid array
//commonEnd([1, 2, 3], [1]); - >array2 is not a valid array
	

function commonEnd(array1,array2){
if((array1.length>1) && (array2.length>1)){
	console.log("True");
		if(array1[0]==array2[length-1]){	
}else{
	console.log("false");
}
}else {
	if(array1.length<1){
	console.log( "array1 is not a valid array ");
	}else{
		console.log("array2 is not a valid array")}
	}
}

commonEnd([1, 2, 3], [7, 3]); //- >true
commonEnd([1, 2, 3], [7, 3, 2]); //- >false
commonEnd([1, 2, 3], [1, 3]); //- >true
commonEnd([1], [7, 3]); //- >array1 is not a valid */ //Question-3 Write a function that accepts 2 arrays and checks the lengths of the arrays first.



/*//Question-4
//Write a function that accepts an array and prints the sum of all elements in the array
//Sample Output:
//sum([1, 2, 3]); - >6
//sum([5, 11, 2]); - > 18
//sum([7, 0, 0]); - >7
//sum([3, -2, 10,4]); - >15

function sum(array){
	var sum=0;
	for(i=0;i<array.length;i++){
		sum=sum+array[i];
		
	}
	console.log(sum);
}

sum([1, 2, 3])//- >6
sum([5, 11, 2])//- > 18
sum([7, 0, 0])//- >7
sum([3, -2, 10,4])//- >15*/ //Question-4 Write a function that accepts an array and prints the sum of all elements in the array


/*//Question-5
//Write a function that accepts an array and prints an array with the elements "rotated left"
//so [1,2,3] yields [2,3,1]
//Sample Output:
//rotateLeft([1, 2, 3]);  - >[2,3,1]
//rotateLeft([5, 11, 9]); - >[11,9,5]
//rotateLeft([7, 0, 0]); - >[0,0,7]
//rotateLeft([17, 12, 10, 8]); - >[12,10,8,17]

function rotateLeft(array){
	var newArray=array.slice(1);
newArray.push(array[0]);
console.log(newArray)
}

rotateLeft([1, 2, 3]); // - >[2,3,1]
rotateLeft([5, 11, 9]); //- >[11,9,5]
rotateLeft([7, 0, 0]);// - >[0,0,7]
rotateLeft([17, 12, 10, 8]);// - >[12,10,8,17]*/ //Question-5 Write a function that accepts an array and prints an array with the elements "rotated left"


/*//Question-6
//Write a function that accepts an array and figure out which is greatest element in the array, and set all the other elements to be that value. Print the changed array.
//Sample Output:
//maxEnd([1,2,3]); - > [3,3,3]
//maxEnd([11,5,9]); - > [11,11,11]
//maxEnd([2,11,17]); - > [17,17,17]

function maxEnd(array){
	var greaterNum;
	for(var i=0;i<array.length;i++){
		for(var j=0;j<array.length;j++){
			if(array[j]>array[i]){
			greaterNum=array[j];
		}
	}
}
for(var i=0;i<array.length;i++){
	array[i]=greaterNum;
}
console.log(array);
}
maxEnd([1,2,3]); //- > [3,3,3]
maxEnd([11,5,9]); //- > [11,11,11]
maxEnd([2,11,17]); //- > [17,17,17]
maxEnd([22, 11, 33, 77]);
//-----------------------------------------------
//---------------OZZY EXAMPLE--------------------
//function maxEnd(array){
//	var max=array[0];
//	for(var i=0;i<array.length;i++){
//			if(array[i]>max){
//			max=array[i];
//		}
//	}
//}
//for(var i=0;i<array.length;i++){
//	array[i]=max;
//}
//console.log(array);
//}
//maxEnd([1,2,3]); //- > [3,3,3]
//maxEnd([11,5,9]); //- > [11,11,11]
//maxEnd([2,11,17]); //- > [17,17,17]
//maxEnd([22, 11, 33, 77]);*/ //Question-6  Write a function that accepts an array and figure out which is greatest element in the array


/*//Question-7
//Write a function that accepts 2 arrays and prints the second array containing the first and last elements from the first array.
//Sample Output:
//makeEnds([1,2,3],[]);  - >[1,3]
//makeEnds([1,2,3,4],[]); - >[1,4]
//makeEnds([7,4,6,2],[]); - >[7,2]

function makeEnds(array, indices){
	indices.push(array[0]);
	indices.push(array[array.length-1])
	console.log(indices);
}

makeEnds([1,2,3],[]); // - >[1,3]
makeEnds([1,2,3,4],[]);// - >[1,4]
makeEnds([7,4,6,2],[]);// - >[7,2]*/ //Question-7 Write a function that accepts 2 arrays and prints the second array containing the first and last elements from the first array.



/*//Question-10
//Write a function that accepts an array and prints true if the array contains 2 twice or 3 twice.
//Sample Output:
//double23([2,2]); - >true
//double23([3,3]); - >true
//double23([2,3]); - >false
//double23([12,20,42]); - >false
//double23([2,2,2]); - >false



function double23(array){
	var counter1=0;
	var counter2=0;
	
	for (var i=0;i<array.length;i++){
		if(array[i]==2){
			counter1++;
		}else if(array[i]==3){
			counter2++;
		}
	}
	if(counter1==2 || counter2==2){
		console.log("true");	
	}else{
		console.log("false");
	}
}
double23([2,2]);// - >true
double23([3,3]);// - >true
double23([2,3]);//- >false
double23([12,20,42]);// - >false
double23([2,2,2]);//- >false*/ //Question-10 Write a function that accepts an array and prints true if the array contains 2 twice or 3 twice.



//-----------Assignment 15- Recap Tasks--------------


/*//Question-1
//
//Write a function that accepts an array, and if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Print the changed Array
//Sample Output:
//fix23([1,2,3]); - > [1,2,0]
//fix23([2,0,5]); - > [2,0,5]
//fix23([1,2,1]); - > [1,2,1]
//fix23([11,2,13,3,2]); - >[11,2,13,3,2]


function fix23(array){
	for(var i=0; i<array.length;i++){
		if(array[i]==2 && array[i+1]==3){
			array[i+1]=0;
			
		}
	}
		console.log(array);
}


fix23([1,2,3]);//- > [1,2,0]
fix23([2,0,5]);//- > [2,0,5]
fix23([1,2,1]);//- > [1,2,1]
fix23([11,2,13,3,2]);// - >[11,2,13,3,2]*/ //Question-1 Write a function that accepts an array, and if there is a 2 in the array immediately followed by a 3, set the 3 element to 0.*/



/*//Question-2
//Write a function that accepts two arrays and prints how many of the arrays have 1 as their first Element
//Sample Output:
//start1([1,2,3],[1,3]); - >2
//start1([7,2,3],[1]); - >1
//start1([1,2],[]); - >1
//start1([3,2,4],[4,3,4]); - >0

function start1(array1, array2){
	var counter1=0;
	if(array1[0]==1){
		counter1++;
	}if(array2[0]==1){
			counter1++;
		}
		console.log(counter1);
	
}

start1([1,2,3],[1,3]);// - >2
start1([7,2,3],[1]); //- >1
start1([1,2],[]);// - >1
start1([3,2,4],[4,3,4]);// - >0*/ //Question-2
//Write a function that accepts two arrays and prints how many of the arrays have 1 as their first Element




/*//Question-3
//Write a function that accepts 2 arrays and consider the sum of the values in each array. Print the array which has the largest sum. In event of a tie, print "equal"
//Sample Output:
//biggerTwo([1, 2], [3, 4]); - >[3,4]
//biggerTwo([5, 6], [3, 8]); - >equal
//biggerTwo([1, 1], [1, 0]); - >[1,1]

function biggerTwo(array1,array2){
	var sum1=0;
	var sum2=0;
	for(var i=0;i<array1.length;i++){
			sum1+=array1[i];
	          sum2+=array2[i];
	}
	if(sum1>sum2){
	console.log(array1);
}if (sum2>sum1){
		console.log(array2);
	}else if(sum1==sum2){
		console.log("equal");
	}
}



biggerTwo([1, 2], [3, 4]);// - >[3,4]
biggerTwo([5, 6], [3, 8]);//- >equal
biggerTwo([1, 1], [1, 0]);// - >[1,1]*/ //Question-3
//Write a function that accepts 2 arrays and consider the sum of the values in each array. Print the array which has the largest sum. 



/*//Question-4
//Write a function that accepts 2 arrays and prints a new array containing all their elements
//Sample Output:
//plusTwo([1, 2], [3, 4]); - >[1,2,3,4]
//plusTwo([4, 4], [2, 2]); - >[4,4,2,2]
//plusTwo([9, 2], [3, 4]); - >[9,2,3,4]


function plusTwo(array1, array2){
	var newArray=[];
newArray=array1.concat(array2)
	console.log(newArray);
}

plusTwo([1, 2], [3, 4]); //- >[1,2,3,4]
plusTwo([4, 4], [2, 2]); //- >[4,4,2,2]
plusTwo([9, 2], [3, 4]); //- >[9,2,3,4]

//-----------------OZZY EXAMPLE-----------------------

function plusTwo(array1, array2){
	var indices=[];
	for( var i=0; i<array1.length;i++){
		indices.push(array1[i]);	
	}
	for( var i=0; i<array1.length;i++){
	indices.push(array2[i]);
	}
	console.log(indices);
}
plusTwo([1, 2], [3, 4]); //- >[1,2,3,4]
plusTwo([4, 4], [2, 2]); //- >[4,4,2,2]
plusTwo([9, 2], [3, 4]); //- >[9,2,3,4]*/ //Question-4
//Write a function that accepts 2 arrays and prints a new array containing all their elements





/*//Question-5
//Write a function that accepts an array and swap the first and last element in the array. Print the modified array
//Sample Output:
//swapEnds([1, 2, 3, 4]) -> [4,2,3,1];
//swapEnds([1, 2, 3]) -> [3,2,1]
//swapEnds([8, 6, 7, 9, 5]) -> [5,6,7,9,8]


function swapEnds(array){
	var x=array[0];
	for( var i=0; i<array.length;i++){}
	array[0]=array[i-1];
		for(j=0;j<array.length;j++){
		}array[j-1]=x;
			console.log(array);
		}
	

swapEnds([1, 2, 3, 4])// -> [4,2,3,1];
swapEnds([1, 2, 3])// -> [3,2,1]
swapEnds([8, 6, 7, 9, 5])// -> [5,6,7,9,8]

//----------------------OZZY EXAMPLE-----------------
function swapEnds(array){
	var x=array[0];
	array[0]=array[array.length-1];
	array[array.length-1]=x;
			console.log(array);
		}
	

swapEnds([1, 2, 3, 4])// -> [4,2,3,1];
swapEnds([1, 2, 3])// -> [3,2,1]
swapEnds([8, 6, 7, 9, 5])// -> [5,6,7,9,8]*/ //Question-5 Write a function that accepts an array and swap the first and last element in the array.


/*//Question-6
//Write a function that accepts an array and prints the number of even numbers in the array.

//Sample Output:
//Sample Output:
//countEvens([2, 1, 2, 3, 4]) ->3
//countEvens([2, 2, 0]) ->3
//countEvens([1, 3, 5]) ->0

function countEvens (array){
	var counter=0;
	for( i=0; i<array.length;i++){
		if(array[i]%2==0){
		counter++;
	}
	}
		console.log(counter);
}

countEvens([2, 1, 2, 3, 4])// ->3
countEvens([2, 2, 0])// ->3
countEvens([1, 3, 5])// ->0*/ //Question-6 Write a function that accepts an array and prints the number of even numbers in the array.


/*//Question-7
//Write a function that accepts an array and print the difference between the largest and smallest values in the array.
 
Sample Output:
bigDiff([10, 3, 5, 6]); → 7
bigDiff([7, 2, 10, 9]); → 8
bigDiff([2, 10, 7, 2]); → 8

function bigDiff(array){
	for(i=0;i<array.length;i++){
		var value=
 if(array[i])
	}
}

bigDiff([10, 3, 5, 6]); //→ 7
bigDiff([7, 2, 10, 9]); //→ 8
bigDiff([2, 10, 7, 2]); //→ 8*/ //Question-7 Write a function that accepts an array and print the difference between the largest and smallest values in the array.


//----------------AUGUST 9------------------------


/*// TASK WRITE A FUNCTION THAT ACCEPTS AN ARRAY AND PRINTS TRUE IF THE SUM OF ALL 2'S IN THE ARRAY IS EXACTLY 8.

// SAMPLE OUTPUT:
// sum28([2,3,2,2,4,2]);//-true
// sum28([2,3,2,2,4,2,2]);//-false
// sum28([2,3,2,2,4,]);//-false


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
}*/ // TASK WRITE A FUNCTION THAT ACCEPTS AN ARRAY AND PRINTS TRUE IF THE SUM OF ALL 2'S IN THE ARRAY IS EXACTLY 8.


/*//Question-2
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
//
//
//
//modThree([2, 1, 3, 5]);// ->true
//modThree([2, 1, 2, 5]);// ->false
//modThree([2, 4, 2, 5]);// ->true


//----------------ASSIGMENT 18---------------------------
//Question 1=============================================
//Create a function that accepts 1 string, e.g. "Bob", return a greeting of the form "Hello Bob!".
//helloName("Bob") → "Hello Bob!"
//helloName("Alice") → "Hello Alice!"
//helloName("X") → "Hello X!"



function helloName(name){
  
  console.log("Hello " + name + "!");
  
  
}

helloName("Bob");
helloName("Alice");
helloName("X");

//-------------------------------------
function helloName(string){
  var str="Hello"
  console.log(str.concat(" ").concat(string).concat("!"));
}
helloName("Bob"); 
helloName("Alice"); 
helloName("X"); 


//Question 2=============================================
//Create a function that accepts two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
//makeAbba("Hi", "Bye") → "HiByeByeHi"
//makeAbba("Yo", "Alice") → "YoAliceAliceYo"
//makeAbba("What", "Up") → "WhatUpUpWhat"


function makeAbba(str1, str2){
console.log(str1+str2+str2+str1);
}


function makeAbba(str1, str2){
console.log(str1.concat(str2).concat(str2).concat(str1));
}



makeAbba("Hi", "Bye")// → "HiByeByeHi"
makeAbba("Yo", "Alice")// → "YoAliceAliceYo"
makeAbba("What", "Up")// → "WhatUpUpWhat"

//
//Question 3=============================================
//Create a function return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
//extraEnd("Hello") → "lololo"
//extraEnd("ab") → "ababab"
//extraEnd("Hi") → "HiHiHi"


function extraEnd(string){
	var a=string.substr(-2,2);
	console.log(a.concat(a).concat(a));
}

extraEnd("Hello")// → "lololo"
extraEnd("ab")// → "ababab"
extraEnd("Hi")// → "HiHiHi"



//Question 4=============================================
//Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.
//firstTwo("Hello") → "He"
//firstTwo("abcdefg") → "ab"
//firstTwo("ab") → "ab"


function firstTwo(string){
	var x=string.substr(0,2)
	console.log(x)
}


firstTwo("Hello")// → "He"
firstTwo("abcdefg")// → "ab"
firstTwo("ab")// → "ab"


//Question 5==============================================
//Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
//firstHalf("WooHoo") → "Woo"
//firstHalf("HelloThere") → "Hello"
//firstHalf("abcdef") → "abc"

function firstHalf(string){
   if(string.length%2==0){
       var result="";
       for(var i=0; i<string.length/2; i++){
           result=result+string.charAt(i);
       }
       console.log(result);
   }
}
firstHalf("WooHoo");            //"Woo"
firstHalf("HelloThere");        //"Hello"
firstHalf("abcdef");            //"abc"
console.log("\n");

firstHalf("WooHoo")// → "Woo"
firstHalf("HelloThere")// → "Hello"
firstHalf("abcdef")// → "abc"



//Question 6===============================================
//Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.
//withoutEnd("Hello") → "ell"
//withoutEnd("java") → "av"
//withoutEnd("coding") → "odin"


function withoutEnd(string){
   if(string.length>=2){
       string=string.replace(string.charAt(0),"");
       string=string.replace(string.charAt(string.length-1), "");
       console.log(string);
   }
}
withoutEnd("Hello");       //"ell"
withoutEnd("java");        //"av"
withoutEnd("coding");      //"odin"
console.log("\n");

//
//Question 7===============================================
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. 
//comboString("Hello", "hi") → "hiHellohi"
//comboString("hi", "Hello") → "hiHellohi"
//comboString("aaa", "b") → "baaab"

function comboString(str1, str2){
   var short,
       long;
   if(str1.length!=str2.length){
      if(str1.length>str2.length){
       long=str1;
       short=str2;
       }else{
       long=str2;
       short=str1;
       }
   var result=short+long+short;
   console.log(result);
   }
}
comboString("Hello", "hi")// → "hiHellohi"
comboString("hi", "Hello")// → "hiHellohi"
comboString("aaa", "b")// → "baaab"

//
//Question 8================================================
//Given 2 strings, return their concatenation, except omit the first char of each.
//nonStart("Hello", "There") → "ellohere"
//nonStart("java", "code") → "avaode"
//nonStart("shotl", "java") → "hotlava"

function nonStart(str1, str2){
str1=str1.replace(str1.charAt(0),"");
str2=str2.replace(str2.charAt(0),"");
	var result=str1+str2;
	console.log(result);
}


nonStart("Hello", "There")// → "ellohere"
nonStart("java", "code")// → "avaode"
nonStart("shotl", "java")// → "hotlava"

//
//Question 9================================================
//Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.
//left2("Hello") → "lloHe"
//left2("java") → "vaja"
//left2("Hi") → "Hi"
//
//
//function left2(){
//	
//}
//
//left2("Hello") → "lloHe"
//left2("java") → "vaja"
//left2("Hi") → "Hi"



//---------Assignment 19 - String Manipulation Tasks----------


//Question 1
//Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".
//
//frontAgain("edited") → true
//
//frontAgain("edit") → false
//
//frontAgain("ed") → true


function frontAgain(str){
	
	var first2, last2
	first2=str.substr(0,2);
	last2=str.substr(-2)
	if (first2==last2){
	console.log("True");	
}else{
	console.log("False")
}
}

frontAgain("edited")// → true

frontAgain("edit")// → false

frontAgain("ed")// → true
	
	
	
//	var str = "Apple, Banana, Kiwi";
//var res = str.substr(0,2);
//console.log(res)


//Question 2
//
//Return the number of times that the string "hi" appears anywhere in the given string.
//
//countHi("abc hi ho") → 1
//
//countHi("ABChi hi") → 2
//
//countHi("hihi") → 2

function countHi(str){
	var counter=0;
	for( var i=0;i<str.length;i++){
		if(str[i]=="h"&& str[i+1]=="i"){
			counter++;
		}
}
		console.log(counter);
}
countHi("abc hi ho")// → 1

countHi("ABChi hi")// → 2

countHi("hihi")// → 2




//Question 3
//
//Return true if the string "cat" and "dog" appear the same number of times in the given string.
//
//catDog("catdog") → true
//
//catDog("catcat") → false
//
//catDog("1cat1cadodog") → true


function catDog(str){
	var counter1=0;
	var counter2=0;
	for(var i=0;i<str.length;i++){
	if(str.substring(i,i+3)=="cat"){
		counter1++
	}else if(str.substring(i,i+3)=="dog"){
		counter2++
	}
	}
		if(counter1==counter2){
			console.log(true)
}else{
console.log("false")
	}
		
	}
	

catDog("catdog")// → true

catDog("catcat")// → false

catDog("1cat1cadodog")// → true




	
	
//-------------------AISULUU EXAMPLE----------------------

function catDog(str){
   var c1=0,
       c2=0;
   for(var i=0; i<str.length; i++){
       if(str.charAt(i)=="c" && str.charAt(i+1)=="a" && str.charAt(i+2)=="t"){
           c1++;
       }
       if(str.charAt(i)=="d" && str.charAt(i+1)=="o" && str.charAt(i+2)=="g"){
           c2++;
       }
   }
   if(c1==c2){
       console.log(true);
   }else{
        console.log(false);
   }
}




//Question 4
//
//Given a string, return a string where for every char in the original, there are two chars.
//
//doubleChar("The") → "TThhee"
//
//doubleChar("AAbb") → "AAAAbbbb"
//
//doubleChar("Hi-There") → "HHii--TThheerree"


//
//function doubleChar(){
//	
//}
//
//doubleChar("The") → "TThhee"
//
//doubleChar("AAbb") → "AAAAbbbb"
//
//doubleChar("Hi-There") → "HHii--TThheerree"


