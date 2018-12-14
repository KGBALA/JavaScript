// variable Declaration with let and constr

//ES5
//
//var name5="Mike Smith";
//var age5=23;
//name5="Mike MIller";
//console.log(name5);

//ES5

///interview question ////////////////////////
//const name6="MIke Smith";
//let age6=23;
//name6="Mike Miller";
//
//console.log(name6);
//console.log(age6);
//
//
//const: if value is not changing 
//let: if value is changing

//2 

//Variables declared with var in ES5 is function scoped,  and the variables declared with let and constr in ES6 are block-scoped.

///////////////////////////////////////////

//ES5

//function driverLicense5(passedTest){
//	if(passedTest){
//var firstName="Mike"
//var yearOfBirth=1970;
//}
//	console.log(firstName+", born in " + yearOfBirth+ " is now officially allowed to drive a car");
//}
//driverLicense5(true);



//ES6

//function driverLicense6(passedTest){
//	if(passedTest){
//let firstName="Mike"
//const yearOfBirth=1970;
//
//	console.log(firstName+", born in " + yearOfBirth+ " is now officially allowed to drive a car");
//	}
//}
//driverLicense6(true);
//
//
//
//let i=23;
//for ( let i=0;  i<5;i++){
//	let sum=0;
//	let i=10
//	console.log(i);
//	sum=sum+i;
//	console.log(sum);
//}
//console.log(i);

////////////////////////////////////////


//strings

//var a=10;
//var b=10; 
//console.log("JavaScript first appeared "+" " +(a+b)+" years age.")
//
////Template String
//
//console.log(`JavaScript first appeared ${a+b} years ago.`);




//Task 
//let firstName="Mike";
//let lastName="Smith";
//const yearOfBirth=1970;
//function calcAge(year){
//	return 2018-year;
//}
//
//This is Mike Smith.He was born in 1970.Today, he is 48 years old.


//
//function Person1 (personAge){
//let firstName="Mike";
//let lastName="Smith";
//const yearOfBirth=1970;
//function calcAge(year){
//	return 2018-year;
//	
//}
//console.log("This is "+ firstName + lastName+"."+ "He was born in " + yearOfBirth+"."+"Today, he is "+ calcAge(yearOfBirth) + "years old.")
//}
//
//Person1(true);




//String Methods

//
//let fName="Mike";
//let lName="Smith";
//
//const n=`${fName} $ {lName}`;
//
//console.log(n.startsWith("m"));
//console.log(n.endsWith("Sm"));
//console.log(n.endsWith("th"));
//console.log(n.includes("ik"));
//console.log(n.includes("M"));
//console.log(fName.repeat(5));

//ES5

//var x=function(a){
//	return a;
//}

//ES6
//
//let x = a => a;
//console.log(x(2));
//
////ES5
//var y = function(){
//	console.log("Hello");
//}

//ES6
//let y = () =>{console.log("Hello")}
//y();

//If we have multiple parameters

//ES5

//var z = function (a,b,c){
//	return a+b+c;
//}
//console.log(z(1,2,4));


//ES6


//let k=(a,b,c)=>a+b+c;
//console.log(k(1,2,4));


//map () method

//var array1=[1,4,9,14];
//let map1=array1.map(x=>x*2);
//console.log(map1)



// Arrow funcitons CAN NOT be used as a constructor adn will throw an error when used with new.
//var Foo=()=>{};
//var Foo=new Foo();

// Arrow functions do not have a prototype property

//var Foo =()=>{};
//console.log


/////////////////////////////////



//Destructuring 
//Destructuring is a JS expression that makes it possible to unpack values from array, or properties from objects, into distinct variables.


//ES5

//var john=["john",26];
//var name=john[0];
//var age john[1];

//ES6

//let [name, age]=["John",26];
//console.log(name);
//console.log(age);
//
//
//const obj={
//	firstName:"MIke",
//	lastName:"Smith",
//}
//const {firstName,lastName}=obj;
//console.log(firstName);


//
//function calcAgeRetirement(year){
//	const age=new Date().getFullYear()-year;
//	return [age,65-age];
//}
//const[age2,retirement]=calcAgeRetirement(1990);
//
//console.log(age2);
//console.log(retirement)
//
//
//for(var i=0;i<2;i++){
//}
//console.log(i)



//ARRAYS 


//ES5
//var x=Array.from("JavaScript");
//console.log(x)
//
//
//var ages=[12,17,8,23,34,45];
//var full=ages.map(function(cur){
//return cur>=18;
//})
//console.log(full);	
//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);


//ES6

//findIndex()=returns the index of the first element in the array that satisfies the provided testing function.
//
//find()=returns the value of the first element in the array that satisfies the provided testing function.


//var ages =[12,17,23,345,45,45];
//console.log(ages.findIndex(cur=> cur >=18));
//console.log(ages.find(cur=>cur>=18));

//FOR OF LOOP

//let myArray=[10,20,30];
//for(let x of myArray){
//	x+=1;
//	console.log(x);
//}


//
//let myObj={
//	y:1,
//	x:2,
//	z:3
//}
//for(let a in myObj){
//	console.log(a);
//	console.log(myObj[a]);
//}
//
//let list =[4,5,6];
//for(let i in list){
//	console.log(i);
//}
//
//
////Spread operator
//
//let mid=[44,45];
//let arr=[42,43,mid,46,47,];
//console.log(arr);
//
//
//let arr2=[44,45,...mid,46,47]
//console.log(arr2)

//
//function addFourAges(a,b,c,d){
//	return a+b+c+d;
//}
//let sum1=addFourAges(10,20,30,40);
//console.log(sum1)


// if i have those ages in an array, how can I pass it to fucntion?

//function addFourAges(a,b,c,d){
//	return a+b+c+d;
//}
//
//let ages =[10,20,30,40];
//
//let sum=addFourAges(ages);
//console.log(sum)
//
////REST OPERATOR
//
//
//function sumAll(...args){
//	let sum=0;
//	for (let arg of args){
//		sum+=arg;
//}
//return sum;
//}
//console.log(sumAll(1));
//console.log(sumAll(1,2));
//console.log(sumAll(1,2,3));
//
//
////The big difference between spread and rest operator is the place in which we use each of them
//
////Spread operator is used in the function call.While the rest operator is used in the function declaration to exact an arbitrary number of parameters.
//
//
////TASK 
//
//function multiply(multiplier,...theArgs){
//	return theArgs.map(function(element){
//		return multiplier*element;
//		});
//}
//var arr =multiply(2,1,2,3);
//console.log(arr)
//
////The map object hold key-value pairs.Any value (both object and primitive values) may be used as either a key or a value.
//
//var myMap=new Map();
//
//myMap.set("keyString","valueAssociated with a string");
//myMap.set("keyObj","valueAssociated with a keyObj");
//myMap.set("keyFunct","valueAssociated with a keyFunct");
//
//
//console.log(myMap.size);
//console.log(myMap.get("keyString"));
//console.log(myMap.get("keyObj"));
//console.log(myMap.get("keyFunct"))
//
//
//let question=new Map();
//question.set("question","what is the protocol name of the latest major JS");
//question.set(1,"ES5");
//question.set(2,"ES6");
//question.set(3,"ES2015");
//question.set("correct",3);
//question.set(true,"Correct answer is D");
//question.set(false,"Wrong try again");
//
//console.log(question.get("question"));
//console.log(question.size);
//
//for (let [key,value] of question.entries()){
//	console.log('This is ${key}, and it is set to ${value}');
//}




var Person5=function(name, yearOfBirth,job){
	this.name=name;
	this.yearOfBirth=yearOfBirth;
	this.job=job;
}
Person5.prototype.calculateAge=function(){
	var age=new Date().getFullYear()-this.yearOfBirth;
	console.log(age);
}


