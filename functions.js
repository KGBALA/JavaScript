


//----------FUNCTIONS------------------------






//function calculateSum(){
//var num1=4;
//var num2=6;
//var num3=8;
//	console.log(num1+num2+num3);
//}
//calculateSum()
//
//
//function convert(){
//var mile=parseInt(prompt("Please enter mileage"));
//	var km=1.6*mile;
//	console.log(km);
//}
//convert()


/*// write a function that shows the greater number from 2 numbers

function greaterNum(){
	var num1=parseInt(prompt("Please enter number 1"));
	var num2=parseInt(prompt("Please enter number 2"));
if(num1>num2){
	console.log("Number 1 is greater");
}else{ 
	console.log("Number 2 is greater");
}
}
greaterNum();*/ //write a function that shows the greater number from 2 numbers


/*// TASK CALCULATE SALARY
function calculateArea(width,height){
	var area=width*height;
console.log(area);
}
calculateArea(9,7);


function calSalary(hours,rate){
	var salary=hours*rate;
	console.log(salary);
}
calSalary(40,55);
calSalary(33,60);
calSalary(20,80);*/ // TASK CALCULATE SALARY


/*//TASK CREATE A FUNCTION THAT ACCEPTS 3 PARAMETRS:
// 1-Number
//2-Number
//3-Operator(-,+,*,/);
//		   
//Sample output:
//calculator (6,3"+")-->9
//calculator (6,3"-")-->3
//calculator (6,3"*")-->18
//calculator (6,3"/")-->2


var num1=5;
var num2=10;
var oper="+";
function calculator(num1, num2, oper){
if(oper=="+"){
	console.log(num1+num2);
}else if (oper=="-"){
	console.log(num1-num2);
}else if(oper=="*"){
	console.log(num1*num2);
}else if (num1/num2){
	console.log(num1/num2);
}
}
calculator(5,10,"+");
calculator(50,10,"-");
calculator(500,10,"*");
calculator(5000,10,"/");*/ //TASK CREATE A FUNCTION THAT ACCEPTS 3 PARAMETRS:


/*// TASK WRITE A FUNCTION THAT ACCEPTS BIRTHYEAR AND DISPLAYS THE AGE IN THE CONSOLE.
// SAMPLE OUTPUT: calculateAge(2000)-->18;


var birthYear=1980;
function calculateAge(birthYear){
	var age=2018-birthYear;
	console.log(age);

}
calculateAge(1980);
calculateAge(2000);*/ //TASK WRITE A FUNCTION THAT ACCEPTS BIRTHYEAR


/*// TASK WRITE A FUNCTION THAT ACCEPTS 3 NUMBERS AND DISPLAYS THE GREATEST ONE IN THE CONSOLE.
//SAMPLE OUTPUT: calculateGretest(5,2,3)-->

var num1=67;
var num2=88;
var num3=54;
function greatNum(num1,num2,num3){
if (num1>num2&&num1>num3){
	console.log("Number one is greatest");
}else if (num2>num1&&num2>num3){
	console.log("Number two is greatest");
}else if (num3>num1&&num3>num2){
		console.log("Number three is greatest");
}
}
greatNum(10,43,66);
greatNum(54,45,67);*/ // TASK WRITE A FUNCTION THAT ACCEPTS 3 NUMBERS


/*// TASK WRITE A FUNCTION THAT ACCEPTS FAHRENHEIT AND DISPLAYS THE CELCIUS IN THE CONSOLE.

//SAMPLE OUTPUT:calculateCelcius(32)-->0
//SAMPLE OUTPUT:calculateCelcius(50)-->10


function converterToCelcius(Fahrenheit){
    Celcius =(Fahrenheit-32)*5/9;
    console.log(Celcius);
}
converterToCelcius(75);
converterToCelcius(95);
converterToCelcius(50);*/ //TASK WRITE A FUNCTION THAT ACCEPTS FAHRENHEIT


/*//TASK WRITE A FUNCTION THAT ACCEPTS 3 GRADES AND PRINTS THE GRADE ACCORDING TO THE BELOW TABLE:

// SAMPLE OUTPUT: calculateGrade(100,100,100)->A, calculateGrade(50,50,50)->F;

		
	function gradeAverage(grade1,grade2,grade3) {
    var average = (grade1+grade2+grade3)/3

    if (average>0&&average<=59) {
        console.log("average is "+average+", grade is F");
    } else if (average <=69) {
        console.log("average is "+average+", grade is D");
    } else if (average <=79) {
        console.log("average is "+average+", grade is C");
    }else if (average <=89) {
        console.log("average is "+average+", grade is B");
    }else if (average <=100) {
        console.log("average is "+average+", grade is A");
    }
}

gradeAverage(50,60,70);
gradeAverage(90,90,100);
gradeAverage(80,80,70);
gradeAverage(50,30,50)
gradeAverage(85,88,80)*/ //TASK WRITE A FUNCTION THAT ACCEPTS 3 GRADES 


/*//TASK WRITE A FUNCTION THAT ACCEPTS 2 PARAMETERS WHICH ARE ARRAY AND ELEMENT. IF ELEMENT IS INCLUDED IN THE ARRAY, PRINT IT "FOUND IT". IF NOT INCLUDED IN THE ARRAY, ADD THE ELEMENT INTO ARRAY AND PRINT THE FINAL ARRAY IN THE CONSOLE.

// SAMPLE OUTPUT: findElement(myArray,element);

    var myArray=['Mehmet','Cybertek','STED','JavaScript'];
    var myArray1=['Hello','There','How','Are','You'];


function FindElement(arr,element){

    if(arr.indexOf(element)!=-1){
        console.log('I found '+ element + ' !')
    }
    else{
        arr.push(element);
        console.log('There is no '+ element + 'element in array. I added it in array for you! Here is your array! \n'+arr);
    }
}

FindElement(myArray,'Cybertek');
FindElement(myArray1,'Does it Exist?');*/ //TASK WRITE A FUNCTION THAT ACCEPTS 2 PARAMETERS WHICH ARE ARRAY AND ELEMENT.






//----------------------------RETURN IN FUNCTIONS----------------------------------------------


//function calculateArea(width,heigth){
//	var area=width*heigth
//	return area;
//}
//function isChecked(){
//	if(calculateArea(5,8)>15){
//		console.log("valid");
//	}else{
//		console.log("No valid");
//	}
//}
//isChecked();

//
//
//function sum (num1,num2){
//	var x=num1+num2;
//	return x;
//}
//var v1=sum(5,8);
//var v2=sum(15,58);
//console.log(v1);
//console.log(v2);


/*//TASK WRITE TWO FUNCTIONS:
// 1- calculateAge(yearBirth);and returns the age
//2- yearsUntilRetirement(name,year); and displays in the console following:"John retires in 37 years"
//Example: yearsUntilRetirement("John",1990);


function calculateAge(yearBirth){
	var age=2018-yearBirth;
	return age;
}
function yearsUntilRetirement(name,year){
	var retirement= 65-calculateAge(year);
		console.log(name + " retires in " + retirement+" years");
	}
yearsUntilRetirement("John",1990);*/ //TASK WRITE TWO FUNCTIONS:

/*//TASK 
function addTen(a){
	return a+10;
}
function addTen(a,b){
	return a+b+10;
}
 var result=addTen(100);
console.log(result);



function multiply(length,width){
	return length*width;
}
var result=multiply(10,20);
console.log(result);*/ //TASK 


/*// TASK DECLARE 2 VARIABLES AND ASSIGN YOUR NAME AND LAST NAME. DISPLAY IN THE CONSOLE TOTAL NUMBER S OF CHARACTERS.

var myName="Ozzy";
var lastName="Can";
console.log(myName.length+lastName.length)


var string= "Java Script";
console.log(string.charAt(2));
console.log(string.charAt(5));
console.log(string.charAt(9));*/ // TASK DECLARE 2 VARIABLES AND ASSIGN YOUR NAME AND LAST NAME.



/*// TASK 
//var x="Java Script";
//Display each character in the console.

var x='Java Script';
for(i=0;i<x.length;i++){
console.log(x.charAt(i));
}*/ // TASK




//-------------concat() Method-------------------


/*//concat() method specified string at the end of this string. It returns combined string. It is like appending another string.
var s1="Hello";
var s2="World";
var s3=s1.concat(s2);
console.log(s3);*/ //concat() method specified string at the end of this string.



//TASK CREATE A FUNCTION CALLED passwordCreate(string1, string2). String1 and String2 should be able to entered by user in runtime. Password should be first 3 characteres of String1 and concat of second strings length. Display the password in the console.


var a="";
var string1="";
var string2="";
function passwordCreate(string1,string2){
var string1=prompt("Please enter your String1");
var string2=prompt("Please enter your String2");
for(i=0;i<string1.length;i++){
		a=a.concat(string1.charAt(i));
		if(i==2){
			break;
		}
	}
	return a.concat(string2.length);
}
var password=passwordCreate(string1,string2);
	console.log(password);
	
	
	
function passwordCreate(string1,string2){
    var x="";
    for(i=0;i<3;i++){
        x+=string1.charAt(i);
    }
    var password=x.concat(string2.length);
    console.log(string2.length);
    return password;
}

console.log(passwordCreate("Vepa","1984"));



