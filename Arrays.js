


//------------------------Arrays Variables-----------




 /*//CREATING ARRAYS IN DIFFERENT WAYS


var scores1 = new Array();

var scores2 = Array(10);

var scores3 = new Array(9,10,5,8);

var scores4 = ["red", "green", 1, false];

var scores5 = [];



var names = ["Mike", "Smith", "John", "Tedd"];

console.log(names[0]);

console.log(names[1]);

console.log(names[2]);

console.log(names[3]);

console.log( names[0] + "," + names[1]);*/ //CREATING ARRAYS IN DIFFERENT WAYS


/*TASK CREATE AN ARRAY THAT HOLDS 12 MONTH NAMES
USER SHOULD BE ABLE TO ENTER MONTH INDEX AND OUTPUT SHOULD BE;
 " THE MONTH NAME IS <MonthName>


var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
var x=prompt("Please enter month number from 0 to 11 to display");
console.log( "The month you entered is " + month[x])

var myArray = Array(11);
 myArray[0]="jan";
myArray[1]="feb";
myArray[2]="mar";
myArray[3]="apr";
myArray[4]="may";
myArray[5]="jun";
myArray[6]="jul";
myArray[7]="aug";
myArray[8]="sep";
myArray[9]="oct";
myArray[10]="nov";
myArray[11]="dec";

var index;
index = prompt("Enter your month index");

console.log ("The month is " + myArray[index]);*/ //TASK CREATE AN ARRAY THAT HOLDS 12 MONTH


 /*TASK CREATE AN ARRAY THAT HOLDS THE DAYS 
 USER SHOULD BE ABLE TO ENTER THE DAY INDEX AND OUTPUT SHOULD BE;
" TODAY IS MONDAY"



var days=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
var x=prompt("Please enter month number from 0 to 6 to display");
console.log( "The day you entered is " + days[x])

var myArray = Array(6);
myArray[0]="MONDAY";
myArray[1]="TUESDAY";
myArray[2]="WEDNESDAY";
myArray[3]="THURSDAY";
myArray[4]="FRIDAY";
myArray[5]="SATURDAY";
myArray[6]="SUNDAY";

var index;
index = prompt("Enter your DAY index");

console.log ("The DAY is " + myArray[index]);*/ //TASK CREATE AN ARRAY THAT HOLDS THE DAYS


/*TASK 
 DISPLAY EACH ARRAY ELEMENT IN THE CONSOLE BY USING FOR LOOP.

var shoppingList=["cheese", "pumpkin","bread","eggs","milk","almonds"];

for( var i=0; i<shoppingList.lenght; i++){
console.log(shoppingList[i])	
}*/ //TASK DISPLAY EACH ARRAY ELEMENT IN THE CONSOLE BY USING FOR LOOP.


/* TASK 
 CREATE A CAR ARRAY THAT HOLDS 6 CARS NAMES INSIDE
 CHECK IS YOUR ARRAY HAS THE CAR NAME "HONDA"
 IF IT IS, PRINT " I FOUND YOUR CAR HONDA IN THIS ARRAY"
 IF IT IS NOT, PRINT " I COULD NOT FIND YOUR CAR HONDA IN THIS ARRAY"


var carArray= ["Mercedes", "Toyota","Jeep", "Maseratti", "Honda","Ferrari"];

for(i=0; i<carArray.length;i++){
	if(carArray[i]=="Honda"){
		console.log("I found your car Honda in this Array");
       break;
	}else if (i==carArray.length-1){
		console.log("Not found it")
	}
	} //TASK CREATE A CAR ARRAY THAT HOLDS 6 CARS NAMES INSIDE

////---------------------

var carArray= ["Mercedes", "Toyota","Jeep", "Maseratti", "Honda","Ferrari"];
var bool=false;
for(i=0; i<carArray.length;i++){
		if(carArray[i]=="Honda"){
			bool=true;
		}
}
if(bool==true){
	console.log("found it")}
else{
	console.log(" Not found it")
}*/ //TASK CREATE A CAR ARRAY THAT HOLDS 6 CARS 


/*// TASK 
// CHECK IF SHOPPING VARIABLE IS AN ARRAY AND IF IT IS, DISPLAY COMMA-SEPRATED LIST OF ELEMENTS IN THE CONSOLE.

var shoppingList=["cheese", "pumpkin","bread","eggs", "milk","almonds"];

console.log(Array.isArray(shoppingList)); //TASK 
console.log(shoppingList.toString());*/ //TASK


/*//TASK
 //WRITE A PROGRAM THAT ASKS USER TO ENTER HIS/HER SELECTION AND BASED ON THE SELECTION ADD OR REMOVE ELEMENTS FROM THE ARRAY
//SELECTIONS
// 1- ADD A NEW ELEMENTS TO THE ARRAY
// 2- REMOVE AN ELEMENT FROM THE ARRAY
// 3-PRINT EACH ELEMENT FROM ARRAY 
// 4-EXIT THE PROGRAM


var selection=parseInt(prompt("Please select one of them; \n 1- ADD A NEW ELEMENTS TO THE ARRAY \n  2- REMOVE AN ELEMENT FROM THE ARRAY \n  3-PRINT EACH ELEMENT FROM ARRAY \n 4-EXIT THE PROGRAM"));
var stack=[];
while (true){

if(selection==1){
   var input=prompt("Enter your element");
	stack.push(input);
	}else if(selection==2){1
		stack.pop();
	}else if(selection==3){
		console.log(stack);
	}else if (selection==4){
		console.log("Bye");
		break;
	}
	}*/ //TASK WRITE A PROGRAM THAT ASKS USER TO ENTER HIS/HER SELECTION 


/*//TASK 
var num1, num2, num3;
var num1=parseInt(prompt("Please enter a number1"));
var num2=parseInt(prompt("Please enter a number2"));
var num3=parseInt(prompt("Please enter a number3"));
 if (num1>num2 && num1>num3){
console.log("Number1 " + num1 + " is largest");

}else if (num2>num1 && 	num2>num3);
console.log("Number2 " + num2 + " is largest" );

}else if(num3>num1 && num3>num2){
	console.log("Number3 " + num3 + " is largest");
}else{
	console.log("all numbers are equal");
}*/ //TASK 


/*//TASK
var A= parseInt(prompt("Enter first number: "));
var B =parseInt(prompt("Enter second number: "));
var C = parseInt(prompt("Enter third number: "));

if ((A<=B) && (B>=C)){
	console.log("The greater number is:" + B)
}

if ((B<=A) && (A>=C)){
	console.log("The greater number is:" + A)
}

if ((A<=C) && (C>=B)){
	console.log("The greater number is:" + C)
}

}else if (A=B=C){
	console.log("All numbers are equal!");
	break;
}
}*/ // TASK




/*TASK 
// TYPE EACH ELEMENT ONE BY ONE USING LOOP
var myFish=["angel","clown","mandarin","surgean" ];

for(var i=0;i<myFish.length;i++){
	console.log(myFish[i]);
}*/ //TASK TYPE EACH ELEMENT ONE BY ONE USING LOOP

	
/*//TASK 
// WRITE A LOOP THAT EVERY ITERATION WILL REMOVE THE NEXT ELEMENT FROM ARRAY, UNTIL IT IS EMPTY;

var names = ["Andrew", "Edward", "Paul", "Cris", "Jhon"];
while(names.length>0){
  names.shift();
    console.log(names);
}*/ //TASK WRITE A LOOP THAT EVERY ITERATION WILL REMOVE THE NEXT ELEMENT FROM ARRAY


/
/*// TASK; FINDING ALL THE OCCURENCES OF AN ELEMENTS

var indices =[];
var array = ["a","b","a","c","a","d"];
var element="a";
 for (var i=0;i<=array.length;i++){
       if (array[i]==element){
		   element.indexOf[i]
		   indices.push(i);}
}console.log(indices);*/ // TASK; FINDING ALL THE OCCURENCES OF AN ELEMENTS

 /*//TASK; FINDING ALL THE OCCURENCES OF AN ELEMENTS


var apples=10;
 while( apples>0){
	 console.log("eating apples");
 apples--;
	 }
console.log("No more apples");



var count=0;
for (i=0;i<10;i++){
	count--;
	console.log(count+ " Eating apples");
}
console.log("No more apples");*/ //TASK; FINDING ALL THE OCCURENCES OF AN ELEMENTS


/*//TASK WRITE A FUNCTION THAT ACCEPTS 2 STRINGS(STR1,STR2) AND PRINTS THE LEGTH OF THE STR2 IF STR2 IS EXISTING IN STR1. IF IT DOESN'T EXIST, PRINT NOT FOUND.

//checkedString("You order confirmation number XYZ", "confirmation")->12


function checkedString(str1,str2){
	if(str1.includes(str2 )){
		console.log(str2.length);
	}else{
		console.log("not found");
	}
}
checkedString("Your order confirmation number is XYZ "," confirmation");


function checkedString(str1,str2){
	if(str1.includes(str2 )){
		console.log(str1.indexOf(str2));
	}else{
		console.log("not found");
	}
}
checkedString("Your order confirmation number is XYZ "," confirmation");*/ //TASK WRITE A FUNCTION THAT ACCEPTS 2 STRINGS STR1,STR2;


/*// TASK CREATE 2 STRING VARIABLES AND REPLACE FIRST 2 LETERS OF STRING1 WITH LAST 2 LETTERS OF STRING2.
//var s1="Orcun":
//var s2="Cancilar"
//console.log(replaced);// CanlilOr

var s1="Orcun";
var s2="Canlilar";
var replaced=s1.replace("cun","Canlil","Or")
console.log(replaced);// CanlilOr



var s1="Orcun";
var s2="Canlilar";
var st1 = s1.charAt(0)+(s1.charAt(1));//Or
var st2 = s2.charAt(s2.length-2)+(s2.charAt(s2.length-1));//ar
console.log(s2.replace(st2,st1));



var s1="Edil";
var s2="Masimov";
var st1 = s1.charAt(0)+(s1.charAt(1));//Or
var st2 = s2.charAt(s2.length-2)+(s2.charAt(s2.length-1));//ar
console.log(s2.replace(st2,st1));

// MasimEd

var s1="Coding";
var s2="JavaScripting";
var str1=s1.charAt(0)+(s1.charAt(1)+s1.charAt(2))
var str2=s2.charAt(s2.length-3)+(s2.charAt(s2.length-2)+s2.charAt(s2.length-1));
console.log(s2.replace(str2,str1));*/ // TASK CREATE 2 STRING VARIABLES AND REPLACE FIRST 2 LETERS OF STRING1 WITH LAST 2 LETTERS OF STRING2.


/*// For Loop class discussion
//Priting numbers 

//1 2 3 4 5 6 7 8 
//Arrays.js:407 9 10 11 12 13 14 15 16 
//Arrays.js:407 17 18 19 20 21 22 23 24 
//Arrays.js:407 25 26 27 28 29 30 31 32 
//Arrays.js:407 33 34 35 36 37 38 39 40 
//Arrays.js:407 41 42 43 44 45 46 47 48 
//Arrays.js:407 49 50 51 52 53 54 55 56 
//Arrays.js:407 57 58 59 60 61 62 63 64

var myArray=Array(8); // length of array

//Created innerr array(Columns)
for(var i=0;i<myArray.length;i++){
	myArray[i]=Array(8);
}

	var ctr=1;
	//Assign value to your array
	for(var i=0;i<myArray.length;i++){
			for(var j=0;j<myArray[i].length;j++){
		myArray[i][j]=ctr++;
	}
}

//Printing
	for( var i=0;i<myArray.length;i++){
		var str="";
			for(var j=0;j<myArray[i].length;j++){
		str=str+myArray[i][j]+ " ";
	}
		console.log(str);
}

///////////////////////////////
	

var myArray=Array(8); // length of array

//Created innerr array(Columns)
for(var i=0;i<myArray.length;i++){
	myArray[i]=Array(8);
}

	var ctr=1;
	//Assign value to your array
	for(var i=0;i<myArray.length;i++){
			for(var j=0;j<myArray[i].length;j++){
				if((i+j)%2==0){
		myArray[i][j]="W";
	}else{
		myArray[i][j]="B";
}
	}
	}

//Printing
	for( var i=0;i<myArray.length;i++){
		var str="";
			for(var j=0;j<myArray[i].length;j++){
		str=str+myArray[i][j]+ " ";
	}
		console.log(str);
}*/ // For Loop class discussion
























