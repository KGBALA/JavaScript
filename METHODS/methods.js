


//--------------USING A METHODS IN CODE----------------------------





//---------------SPLICE TASK------------------


/*TASK;

var scores =[1,2,3,4,5];
scores.splice(0,3);
console.log(scores);
 
var myFish=["angel", "clown","mandarin","sturgeon"];
//"angel", "clown","drum","mandarin","sturgeon"
myFish.splice(2,0,"drum");
console.log(myFish);
//"angel", "clown","drum","sturgeon"
myFish.splice(3,1);
console.log(myFish);
//"angel", "clown","trumpet","sturgeon"
myFish.splice(2,1,"trumpet");
console.log(myFish);
//"parot","anemone","blue","trumpet","sturgeon"
myFish.splice(0,2,"parot","anemone","blue");
console.log(myFish);
//"parot","anemone","sturgeon"
myFish.splice(2,2);
console.log(myFish);
//"parot","anemone"
myFish.splice(1,1)	
console.log(myFish);*/ // REMOVE AND ADD ELEMENTS



//--------------SLICE METHODS------------


/*// sliceMethod-extracts a section of a string and returns it as a new string.

var str="The morning is upin us.";
console.log( str.slice(1,8));
console.log( str.slice(2,-6));
console.log( str.slice(4,9));*/  //sliceMethod-extracts a section of a string and returns it as a new string.

/*// TASK; WRITE THE CORRECT SLICE() method to able to get the mentioned outputs.


//"dog","cat","monkey","donkey","dino","elephant"
var animals =["dog","cat","monkey","donkey","dino","elephant"];
console.log(animals);
//"cat","monkey","donkey","dino","elephant"
console.log(animals.slice(1));
//"elephant"
console.log(animals.slice(5));
//"dino", "elephant"
console.log(animals.slice(4,6));
//"dog"
console.log(animals.slice(0,1));
//"dog", "cat"
console.log(animals.slice(0,2));
//"monkey"
console.log(animals.slice(2,3));
//"monkey", "donkey", "dino"
console.log(animals.slice(2,5));*/ //TASK; WRITE THE CORRECT SLICE() 



//--------------INDEX OF() METHOD------------

/*var scores=[10,20,30,10,40,20];

console.log(scores.indexOf(10,2));//3
console.log(scores.indexOf(30,3));//-1
console.log(scores.indexOf(20,-1));//5(fromIndex=6+(-1)=5)
console.log(scores.indexOf(20,-5));//1(fromIndex=6+(-5)=1)*/ // TASK INDEX OF


/*var beasts= ["ant","bison","camel","duck","bison"];

console.log(beasts.indexOf("bison"));
console.log(beasts.indexOf("bison",2));
console.log(beasts.indexOf("giraffe"));
console.log(beasts.indexOf("camel"-3));*/ //// TASK WHAT WILL BE THE EXPECTED OUTPUTS


//----------------lastIndexOf()Method------------


/*var numbers=[2,5,9,2];
console.log(numbers.lastIndexOf(2));
console.log(numbers.lastIndexOf(7));
console.log(numbers.lastIndexOf(2,3));
console.log(numbers.lastIndexOf(2,2));
console.log(numbers.lastIndexOf(2,-2));
console.log(numbers.lastIndexOf(2,-1));*/ //TASK WHAT WILL BE THE EXPETED OUTPUTS



//--------------Sort()Method---------------------


/*var month=["March","Jan","Feb","Dec"];
month.sort();
console.log(month);


var array1=[1,30,4,21];
array1.sort();
console.log(array1);

var animals=["Cat","Ant","Bee","Elephant"];
animals.sort();
console.log(animals);

var mixArray=["Cat", "Ant", 3,"elephant",45, "bee",45];
mixArray.sort();
console.log(mixArray);*/ //TASK THE SORT ( METHOD SORTS THE ELEMENTS OF AN ARRAY IN PLACE AND RETURNS THE ARRAY).



//--------SearchMethod------------

/*//searchMethod -Method searches a string for specified value, and returns the posititon of the match.

var str="I want to be number 1 test automation developer.";
console.log(str.search( "automation")); //27
console.log(str.search( "1"));//20*/ //searchMethod -Method searches a string for specified value, and returns the posititon of the match.


/*// TASK VAR STR="IN ORDER TO BE GOOD TEST AUTOMATION DEVELOPER, I NEED TO PRACTICE AT LEAST 2 TO 3 HOURS A DAY". 
// WRITE A PROGRAM TO TEST IF" AUTOMATION" IS PRESENT IN THE STRING. IF FOUND, TELL THE USER IT IS FOUND . IF NOT, TELL USER THAT IT IS NOT FOUND.

var str="IN ORDER TO BE GOOD TEST AUTOMATION DEVELOPER, I NEED TO PRACTICE AT LEAST 2 TO 3 HOURS A DAY";

if(str.search("AUTOMATION")>-1){
	console.log(" found it");
}
else{
	console.log("Not found");
}


var str="IN ORDER TO BE GOOD TEST AUTOMATION DEVELOPER, I NEED TO PRACTICE AT LEAST 2 TO 3 HOURS A DAY";

if(str>=0){
	console.log(" found it");
}else{
	console.log("Not found");
}

var str="IN ORDER TO BE GOOD TEST AUTOMATION DEVELOPER, I NEED TO PRACTICE AT LEAST 2 TO 3 HOURS A DAY";

var x=str.slice(25,35);
if(x=="automation"){
console.log("found it");
}else{
	console.log (" Not found it");
}*/ //TASK VAR STR="IN ORDER TO BE GOOD TEST AUTOMATION DEVELOPER, I NEED TO PRACTICE AT LEAST 2 TO 3 HOURS A DAY". 




//-------------------SPLIT METHOD--------------------


/*//var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup";


var array = str.split(" ");

console.log(array.length);
console.log(array.length-1);

var array=str.split(" ");
for (var i=0;i<array.length;i++){
if(array[i]=="Netscape"){
console.log("found it");
	break;
}else if(i==array.length-1){
	console.log(" Not found")
}
} // TASK USING SPLIT METHOD


//--------------------New example-------------------
var array = str.split(" ");
var count=0;
for(var i=0; i<array.length; i++){
   if(array[i]=="Netscape"){
       count++;
   }
}
if(count>=1){
       console.log("It is found " + count + " times");
   }else{
       console.log("Not founded");
   }*/ //EXAMPLE



//-----------------substrMethod------------------

//substr-METHOD RETURNS THE PART OF A STRING BETWEEN THE START INDEX AND NUMBER OF CHARACTERS AFTER IT.

/*//SYNTAX: string.substr(start,length)


var str="JavaScript";
console.log(str.substr(0,1));
console.log(str.substr(1,0));
console.log(str.substr(-1,1));
console.log(str.substr(1,-1));
console.log(str.substr(-3));
console.log(str.substr(1));
console.log(str.substr(-20,2));
console.log(str.substr(20,2));


var str="Hello world!";

console.log(str.substring(0,1));
console.log(str.substring(1,0));
console.log(str.substring(0,6));
console.log(str.substring(4,7));
console.log(str.substring(7,4));
console.log(str.substring(0,7));
console.log(str.substring(0,10));
console.log(str.substring(0,9));


// TASK 

var str="JavaScript";

console.log(str.substring(str.length-4,2));
console.log(str.substring(2,3));
console.log(str.substring(str.length,2));*/ //SYNTAX: string.substr(start,length)



//-----------------toLowerCase Method--------------

//toLowerCase-method returns the calling string value converted to lower case.


//var str="JavaScript";
//console.log(str.toLowerCase());


//------------------toUpperCase method--------------

//toUpperCase-method returns the calling string value converted to uppercase.

/*// TASK Write a program that converts second and fifth character of the string to uppercase.



var str = "Javascript";

for(var i=0; i<str.length; i++){
    if(i == 2){
        var a = str[i].toUpperCase();
    }
    if(i == 5){
        var b = str[i].toUpperCase();
    }
}

console.log(str.substr(0,2) + a + str.substr(3,2) + b + str.substr(6));*/ // TASK Write a program that converts second and fifth character of the string to uppercase.



//----------------OZZY EXAMPLE------------------

/*var str = "Javascript";
var a ="";
for(var i=0; i<str.length; i++){
    if(i == 2 || i==5){
        var x=str.charAt(i).toUpperCase();
    }else{
		x=str.charAt(i);
}
	a=a+x;
}
console.log(a);*/
 

//----------------trim Method------------------------

/*// trim method removes whitespases from both ends of a string.

var str=" JavaScript";
console.log(str.trim());

var str="JavaScript ";
console.log(str.trim());

var str="  JavaScript  ";
console.log(str.trim());

var str=" Jav aS cri pt";
console.log(str.trim());


// TASK WRITE A PROGRAM TO DISPLAY |342| FROM GIVEN STRING.

var str=" 342 ";
console.log("|"+str.trim()+"|");

var str=" 4545 ";
console.log("|"+str.trim()+"|");*/// trim method removes whitespases from both ends of a string.



//--------------TO STRING METHOD-------------------------



/*var num=15;
var str=num.toString();
console.log(typeof(num));//number
console.log(typeof(str));//string




//TASK WRITE A PROGRAM TO TEST EACH CHARACTER IN THE S1 VARIABLE THEN DISPLAY NUMBER OF NUMERIC AND NON NUMERIC VALUES SEPARETELY.

	//var S1="dfgsdA08awq #23423wefa^$#saaag5345sfs";

var counterChar=0;
var counterNum=0;
	var S1="dfgsdA08awq #23423wefa^$#saaag5345sfs";
for (var i=0;i<S1.length;i++){
	if(isNaN(S1.charAt(i))){
		counterChar++;
	}else if(isNaN(S1.charAt(i))==false){
		counterNum++;
	}
	}console.log(counterChar);
console.log(counterNum);*/

