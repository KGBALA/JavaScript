
//
//
//var fruits= ["Kiwi","Apple","Mango","Orange"];
//fruits[fruits.length]="alma";
//console.log(fruits);
//
//
//
//var fruits=["Kiwi","Apple","Mango","Orange"];
//fruits.push("LEMON");
//console.log(fruits);
//
//
//var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//var citrus = fruits.slice(1);
//console.log("fruits");
//
//var cars=[["bmw", "e34",1996], 
//["toyota","corola",2011],
//		  ["fiat",2013,"RJ5"],
//		  ["honda",2012,"accrod"]];
//cars[1][2]=2013
////		  console.log(cars[1][2]);
//
//var num=[];
//var count=0;
//var str="";
//for(var i=1; i<=1000; i++){
//   num.push(i);
//   count++;
//   str=str+i+" ";
//   if(count==10){
//       console.log(str);
//	     count=0;
//       str="";
//           
//   }
//}

//
//var usern,password, expusern,exppass;
// var usern=prompt("Please enter your data");
//var password=prompt("Please enter your ")
//var expusern="ABC"
//var exppass="123"
//
//if ((usern==expusern) && (password==exppass)){
//	console.log("Welcome Admin" + expusern);
//}
//if((usern!=expusern) || (password!=exppass)){
//	console.log("Username or password not correct")
//}
//
//var num=[];
//var count =0;
//var str="";
//for (var i=0; i<=100;i++){
//num.push(i);
//count++;
//str=str+i+" ";
//if (count==10){
//	console.log(str);
//	count=0;
//	str="";
//}
//}
//
//var letter=["a","r","t","e","y","p","d"];
//var count=0;
//var str="";
//for(var i=0;i<8;i++){
//	letter.push(i);
//	count++;
//	str=str+i+" ";
//	if(count==3){
//		console.log(str);
//		count=0;
//		str="";
//		
//	}
//}
//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var x = fruits.pop();  
//console.log(fruits);
//
//
//var music="R&B",volume="loud";
//var listen=prompt("what kind of music you like to listen? ")
//var level=prompt("How loud you wanna listen?")
//
//if ((music==listen)&&(volume==level)){
//	console.log("Dance until you fall asleep");
//}else{
//	console.log("Not enough for dancing")
//}


///Question-1
//
//Write a function that accepts an array, and if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Print the changed Array
//Sample Output:


//function fix23(array){
//for( var i=0; i<array.length;i++){
//if(array[i]==2 && array[i+1]==3){
//	array[i+1]=0;
//}
//}
//console.log(array);
//}
//
//
//fix23([1,2,3]);// - > [1,2,0]
//fix23([2,0,5]);// - > [2,0,5]
//fix23([1,2,1]);// - > [1,2,1]
//fix23([11,2,13,3,2]);// - >[11,2,13,3,2]



//var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup";

//var array=str.split(" ");
//for (var i=0;i<array.length;i++){
//	if(array[i]=="Netscape"){
//		console.log("Found it");
//		break;
//	}else if(i==array.length-1){
//	console.log("Not found");
//}
//}
//
//
//var cars = ["BMW", "Volvo", "Saab", "Ford"];
//var i = 0;
//var text = "";
//for (;cars[i];) {
//    text += cars[i] + "\n";
//    i++;
//}
//console.log(cars)
//
//
//var cars = ["BMW", "Volvo", "Saab", "Ford"];
//var i = 0;
//var text = "";
//
//while (cars[i]) {
//    text += cars[i] + "\n";
//    i++;
//}
//console.log(cars)
//
//var text="";
//for (i = 0; i < 10; i++) {
//    if (i === 3) { break; }
//    text += "The number is " + i + "\n";
//}
//console.log(text+i)
//
//
//
//var text="";
//for( var i=0; i<=10; i++){
//	if (i===3){
//		continue;
//	}
//	text+="The number is "+i+"\n"
//} 
//console.log(text+i)





//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var newFruits=fruits.toString();
//console.log(newFruits);
//
//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.pop(); 
//var x = fruits.pop(); 
//console.log(fruits);
//
//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var x = fruits.pop(); 
//console.log(fruits);
//
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits[0] = "Kiwi";
//console.log(fruits);


//var str="";
//for (var i = 0; i <= 6; i++) {
//for (var j = 1; j <= 3; j++) {
//console.log("How many times");
//}
//		
//	
//	
//}
//
//
//
//
//var cars=[["Audi", 100],["BMW", 320],["Mers",500],["Honda", "EuroR"]];
//cars[0][1]='540i';
//console.log(cars[0],[1]);
//
//
//var num=0;
//for(var i=1;i<5;i++){
//	var str=0;
// for(j=1;j<50;j++){
//	 console.log((i*j)+str)
// }	
//}


// for ( var i=1; i<=7; i++){
//	str="";
//	for(var p=0; p<i; p++){
//	str=str+i;
//		}
//		console.log(str);
// }
//
//
//
//// This loop repeats 10 times with i from 1 to 10 // This loop repeats 10 times, with i from 1 to 10.
//for (var  i = 1; i <= 10; i++) {
//for (var  j = 1; j <= 5; j++) { // loop goes 5 times
//console.log(j); // print the j
//}
//console.log();
//}
////– Better:
//// Prints 12345 ten times on ten separate lines.
//for (var i = 1; i <= 10; i++) {
//for (var j = 1; j <= 5; j++) {
//console.log(j);
//}
//console.log("\n"); // end the line of output
//}
//	
//
//var colors=["blue","Yellow","White"];
//var newColor=colors.splice(1,0,"Purple");
//console.log(newColor);
//
//
//
//
////concat() method:
////Join three strings:
//var str1 = "Hello ";
//var str2 = "world!";
//var str3 = " Have a nice day!"
//
////split() method:
////Separate each character, including white-space:
//var str = "How are you doing today?"
//
//
//
//var str1 = "Hello ";
//var str2 = "world!";
//var str3 = " Have a nice day!"; 

//console.log(str1.concat()+str2.concat()+str3.concat());
//
//
//
//var str = "How are you doing today?"
//console.log(str.length);
//var x=str.split("")
//console.log(x);
//
//
//var str = "Aisuluu has prepared this task";
//console.log(str.length);
//console.log(str.slice(1, 8));     //isuluu
//console.log(str.slice(4, -2));    //luu has prepared this task
//console.log(str.slice(12));       //prepared this task
//console.log(str.slice(30));       //
//console.log(str.slice(-33));      //Aisuluu has prepared this task
//console.log(str.slice(-7));       //is task
//console.log(str.slice(-7, 28));   //is ta
//console.log(str.slice(10, 14))    //s pr
//
//console.log("\n");

// *TASK*
 //repalce() and toLowerCase() METHODS.
//‘JOHN HAS VERY BAD PERSONALLITY AND YOU HAVE RESPONSEBILITY TO HELP HIM TO BECOME A BETTER PERSON’ >>> change” John” to your name and replace “bad” to  “good” and ‘HAS ’ to “HAVE”...;

//OUTPUT: “I have very good personallity and I am responsable to help myself to become better person”
	




//
//
//var str = "We are code hunters and we are working hard";
//
//var str1=str.search("hard");
//if(str=="hard"){
//	console.log("found it")
//}else if(str=="hards"){
//console.log("Not found it")	
//}
//
//
//var scores=[10,20,30,10,40,20];
//console.log(scores.indexOf(10,2));
//console.log(scores.indexOf(30,3));
//console.log(scores.indexOf(20,-1));
//console.log(scores.indexOf(20,-5));
//
//
//var str = "Nerijus, Kanybek, Aisuluu, Kamol";
//var res = str.substr(7,6);
//console.log(res);
//
//
//
//var first= "Edil";
//var lastName="Masimov";
//console.log(first.length+lastName.length);




//var lang="Java Script";
//for (i=0;i<lang.length;i++){
//	var str="";
//console.log(str+i);
//}
//
//var lang="Java Script";
//var str=""
//for(i=0;i<lang.length;i++){
//	str+=lang.charAt(i)+"-";
//}console.log(str);
//
//
//var text="Learn coding Java Script";
//var str="";
//for ( var i=0;i<text.length;i++){
//	str+=text.charAt(i)+"-";
//	
//}console.log(str);
//	
//
//var string="Java Script";
//console.log(string.charAt(2,5));
//
//
//var a1="Kara";
//var a2="Kol";
//var a3=a1.concat(a2)
//console.log(a3);



//
//Task:Create a function called passwordCreate(string1,string2). String1 and String2 should be able to entered by user in runtime. Password should be first 3 characters of String1 and concatof second strings length.Display the password in the console.


//
//var a="";
//var string1="";
//var string2="";
//function passwordCreate(string1,string2){
//var string1=prompt("Please enter your String1");
//var string2=prompt("Please enter your String2");
//for(i=0;i<string1.length;i++){
//		a=a.concat(string1.charAt(i));
//		if(i==2){
//			break;
//		}
//	}
//	return a.concat(string2.length);
//}
//var password=passwordCreate(string1,string2);
//	console.log(password);
//	
//	
//	
//function passwordCreate(string1,string2){
//    var x="";
//    for(i=0;i<3;i++){
//        x+=string1.charAt(i);
//    }
//    var password=x.concat(string2.length);
//    console.log(string2.length);
//    return password;
//}
//
//console.log(passwordCreate("Vepa","1984"));
//
//
//function passCreate(str1, str2){
//	var y="";
//	for( var i=0;i<3;i++){
//		y+=str1.charAt(i);
//	}
//	var password=y.concat(str2.length);
//	console.log(str2.length);
//	return password;
//}
//console.log(passCreate("edil","Masimov"));
//
//
//
//var str="World is so big";
//var str1=str.includes(",");
//console.log(str1)



//var str="What is feel  like to be a good tester?";
//var str1=str.search("tester");
//console.log(str1)
//
//
//
// var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup";
//
//var str1=str.split(" ");
//console.log(str1)


//Question-1
//
//Write a function that accepts an array and prints true if the sum of all 2's in the array is exactly 8
 

//function sum28(array){
//	var sum=0;
//	for( var i=0;i<array.length;i++){
//		if(array[i]==4){
//			sum+=array[i];
//			
//		}		
//	}if(sum==16){
//		console.log("true");
//	
//}else{
//	console.log("false")
//}
//}
////Sample Output:
//sum28([4, 3, 4, 4, 4, 2]);// - >true
//sum28([2, 4, 2, 4, 4, 2, 4]);// - >false
//sum28([1, 2, 3, 4]);// - >false



//Question-2
//Write a function that accepts an array and prints true if the number 1's is greater than the number 4's


//more14([1, 4, 1]);// ->true
//more14([1, 4, 1, 4]);// ->false
//more14([1, 1]);// ->true

//function more14(array){
//     var counter1=0;
//	var counter2=0;
//	for(var i=0;i<array.length;i++){
//		if(array[i]==1){
//			counter1++;
//		}else if(array[i]==4){
//			counter2++;
//		}
//	}if(counter1>counter2){
//		console.log("true");
//	}else{
//		console.log("False")
//	}
//}
// 
//more14([1, 4, 1]);// ->true
//more14([1, 4, 1, 4]);// ->false
//more14([1, 1]);// ->true


//Write a function that acccepts a number and create and prints a new array of length number, containing the numbers 0,1,2,...number-1.
 
//Sample Output:
//fizzArray(4) → [0, 1, 2, 3]
//fizzArray(1) → [0]
//fizzArray(10) →[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



//
//function fizzArray(num){
//var array1=Array(num);
//	for( var i=0;i<array1.length;i++){
//		array1[i]=i;
//	
//		}
//	console.log(array1)
//	}
//	
//	
//
//
//
//fizzArray(4)// → [0, 1, 2, 3]
//fizzArray(1)// → [0]
//fizzArray(10)// →[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


//
//function fizzArray(num1){
//	var array2=Array(num1)
//	for(var i=0;i<array2.length;i++){
//		array2[i]=i;
//	}
//	console.log(array2)
//}
//
//
//
//
//fizzArray(7)// → [0, 1, 2, 3]
//fizzArray(9)// → [0]
//fizzArray(8)// →[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]




//Question-4
//A value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. 
//Write a function that accepts an array and a number, and prints true if the given number is everywhere in the array.
// 
//
//Sample Output:
//isEveryWhere([1, 2, 1, 3], 1); - >true
//isEveryWhere([1, 2, 1, 3], 2); - >false
//isEveryWhere([1, 2, 1, 3, 4], 1); - >true
//isEveryWhere([1, 2, 4, 3, 1], 1); - >false

//
//function isEveryWhere(array,num){
//	for(var i=0;i<array.length;i++){
//		if(array[0]==num&&(array[i+1]==num||array[i+2]==num)){
//			console.log("true")
//			break;
//		}else{
//		console.log("false")
//			break;
//	}
//	
//}
//}
//
//isEveryWhere([1, 2, 1, 3], 1);// - >true
//isEveryWhere([1, 2, 1, 3], 2);// - >false
//isEveryWhere([1, 2, 1, 3, 4], 1);// - >true
//isEveryWhere([1, 2, 4, 3, 1], 1);// - >false


//Question-5
//Write a function that accepts two arrays of the same length. For every element in array1, consider the corresponding element in array2 (at the same index). Return the count of the number of times that two elements differ by 2 or less, but are not equal.
// 
//Sample Output:
//matchUp([1, 2, 3], [2, 3, 10]); ->2
//matchUp([1, 2, 3], [2, 3, 5]); ->3
//matchUp([1, 2, 3], [2, 3, 3]); ->2


//
//function matchUp(array1,array2){
//	var count=0;
//	for (var i=0;i<array1.length;i++){
//		if(array2[i]-array1[i]<=2&&array1[i]!=array2[i]){
//		   count++;
//		   
//		   }
//	}	console.log(count)
//
//}
//matchUp([1, 2, 3], [2, 3, 10]);// ->2
//matchUp([1, 2, 3], [2, 3, 5]);// ->3
//matchUp([1, 2, 3], [2, 3, 3]);// ->2
//
////
//Question-6
//Write a function that accepts an array and prints true if the array contains 3 even or 3 odd values all next to each other.
// 
//Sample Output:

//
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
//	if(count1==3||count2==2){
//	console.log("true");
//	}else{
//		console.log("false");
//	}
//
//}
//
//
//modThree([2, 1, 3, 5]);// ->true
//modThree([2, 1, 2, 5]);// ->false
//modThree([2, 4, 2, 5]);// ->true
//
//
//var num=2;
//num=5%2;
//console.log(num)



//
//Question-7
//Write a function that accepts an array and prints true if the array contains,somewhere,three increasing adjacent numbers like 4,5,6,... or 23,24,25.
// 
//Sample Output:
//tripleUp([1, 4, 5, 6, 2]); ->true
//tripleUp([1, 2, 3]); ->true
//tripleUp([1, 2, 4]); ->false
//tripleUp([1, 2, 4, 5, 8, 9]); ->fals



//
//function tripleUp(array){
//   var result;
//   for(var i=0; i<array.length; i++){
//       var number;
////	   var Num=number;
//       if(array[i]==number&&array[i+1]==number+1 && array[i+2]==number+2){
//           result=true;
//           break;
//       }else{
//           result=false;
//       }
//   }
////	console.log(Num)
//   console.log(result);
//
//}
//
//tripleUp([1, 4, 5, 6, 2]);// ->true
//tripleUp([1, 2, 3]);// ->true
//tripleUp([1, 2, 4]); //->false
//tripleUp([1, 2, 4, 5, 8, 9]); //->false

//
//var nums = ['100','300','400','60','40'];
//
//for(var i=0; i < nums.length; i++){
//	
//	      
//        var num = nums[i+2] + nums[i+2];
//
//        console.log(num);
//}
//
//
//
//function tripleUp(array){
//   var result;
//   for(var i=0; i<array.length; i++){
//       var number=array[i];
//	   var Num=number+2;
//	   console.log(Num);
//   }
//	
//}
////tripleUp([1, 4, 5, 6, 2]);// ->true
////tripleUp([1, 2, 3]);// ->true
//tripleUp([1, 2, 4]); //->false
//tripleUp([1, 2, 4, 5, 8, 9]); //->false


//
//function greatest(n1,n2,n3){
//	
//	if(n1>n2&&n1>n3){
//		return n1;
//	}else if(n2>n1&&n2>n3){
//		return n2;
//	}else if(n3>n1&&n3>n2){
//		return n3;
//	}else{
//		return "error";
//	}
//}
//
////var x=greatest(5,2,6);
//console.log (greatest(5,7,9));
//
//var x="JavaScript";
//for(var i=0;i<x.length;i++){
//	console.log(x.charAt(i));
//}
//
//var num, a,b, result;
//num=parseInt(prompt("Please enter ending from 0 to N..  to display febinacci sequence?"));
//b=1;
//a=0;
// result=b;
//for (var i=1;i<num;i++){
//	console.log(result)
//	result=a+b;
//a=b;
//b=result;
//}

//
//function Question(question, answers, correctAnswer){
//    this.question=question;
//    this.answers=answers;
//    this.correctAnswer=correctAnswer;
//    this.log=function(){
//        console.log(this.question);
//        for(var i=0;i<this.answers.length;i++){
//            console.log(i+1+":"+this.answers[i]);
//        }
//    };
//    this.checkAnswer=function(){
//        var select=prompt("Please select the correct answer:");
//        if(select==this.correctAnswer){
//            console.log("Correct");
//        }else{
//            console.log("Not correct. Try again!");
//        }
//    }
//};
//var answers1=["Yes", "No"];
//var answers2=["Mike","John","Ozzy"];
//var answers3=["Boring","Hard","Fun","Tedious"];
//
//var Question1=new Question("Is JavaScript the coolest programming language in the world?",answers1,1);
//var Question2=new Question("What is the name of this course's teacher?",answers2,3);
//var Question3=new Question("What does best describe coding?",answers3,3);
//
//var questions=[Question1,Question2,Question3];
//var x=Math.floor(Math.random()*questions.length);
//
//questions[x].log();
//questions[x].checkAnswer();


//var i=1, j=8;
//do{
//	if(i<j){
//		i=i*2
//	};
//}while(i<3);
//console.log("i="+i+"j="+j)
//
//
//
//var i=2, j=4,k=0;
//i=k=j/4;
//console.log(i)
//
//
//function switchString(input){
//	switch(input){
//		case "a": console.log("s");
//		default: console.log("n");
//		case "b": console.log("b")
//			break;
//		case "B": console.log("B B")
//	}
//}
//switchString("A")
//
//
//var myStr="g";
//var myCharArr=["g,","d"];
// var newStr="";
//for(var i=0; i<myCharArr.length;i++){
//	newStr=newStr+myCharArr[i];
//}
//console.log((newStr==myStr))+ " " +(newStr.includes(myStr));
//
//
//
//
//function testInts(str1,str2){
//	str1=str2++;
//	str1++;
//	return str1+str2;
//}
//var val1=5;
//var val2=9;
//testInts(val1--,++val2);
//console.log(val1+" "+val2);
//
//
//
//
//var abc="abc";
//abc.concat("abc");
//abc.concat("def");
//console.log(abc);
//
//
//var str="Virginia Students";
//console.log(str.substr(-8,5));
//
//
//
//var str="Cubertek Javascript Course";
//strArray=str.split("r")
//
//for (var i=0;i<strArray.length;i++){
//	console.log(strArray[i].length);
//}
//
//
//var str="Online Students";
//console.log(str.substr(-6,2));
//
//
//var i=2;
//var j=-3;
//for( i=1,j=0;j<i;++j,i--){
//	console.log(i+ " " +j);
//}
//console.log(i+ " " +j );
//
//
//function xyz(str1){
//	if(klm(str1)>4){
//		return"true";
//	}else{
//		return "false";
//	}
//}
//function klm(str2){
//	var z=(str2+str2)%3;
//	return z;
//}
//console.log(xyz(3));



//Question 1:
//Write a javascript program to create an array of 8 * 8 size and initialize all the array elements starting from 1 till 64 (using for loop) as follows:
//1 2 3 4 5 6 7 8
//9 10 11 12 13 14 15 16
//17 18 19 20 21 22 23 24
//25 26 27 28 29 30 31 32
//33 34 35 36 37 38 39 40
//41 42 43 44 45 46 47 48
//49 50 51 52 53 54 55 56
//57 58 59 60 61 62 63 64
//
//Write a nested for loop to print all the elements of 2-Dimensional array in above format.



//var num=[1,2,3,4,5,6,7,8,];
//for(i=0;i<num.length;i++){
//	for(j=0;j<i.length;i++){		
//	}
//  num[i]=(num[j]);
//  console.log(num[i]);
//}


//Question 3:

//var numbers = [
//[90, 10, 231],
//[-20, 80, 100, 23, 54],
//[45, 22],
//[87, 98, -100, 49, 73, 35, 19]
//];


////question1
//var myArray = Array(8);
////created inner array (columns)
//for (var i=0; i<myArray.length; i++){
//myArray[i]= Array(8)
//}
//var ctr = 1
////assign value to your array
//for (var i=0;i<myArray.length; i++){
//for (var j=0; j<myArray[i].length; j++){
//myArray[i][j]=ctr++;
//}
//}
////printing
//for (var i=0;i<myArray.length; i++){
//var str="";
//for (var j=0; j<myArray[i].length; j++){
//str=str+myArray[i][j];
//}
//console.log(str);
//}

//Write logic to find out highest number in above array.

//var numbers = [
//[90, 10, 231],
//[-20, 80, 100, 23, 54],
//[45, 22],
//[87, 98, -100, 49, 73, 35, 19]
//];
//
//
//for(var i=0;i<numbers.length;i++){
//	if(numbers[i]>250 || numbers[i]<240){
//		console.log(numbers[i]);
//	}
//}




//var myArray = Array(8);
//for (var i=0; i<myArray.length; i++){
//myArray[i]= Array(8)
//}
//for (var i=0;i<myArray.length; i++){
//for (var j=0; j<myArray[i].length; j++){
//if((i+j)%2==0){
//myArray[i][j]="W ";
//}else{
//myArray[i][j]="B ";
//}
//}
//}
//for (var i=0;i<myArray.length; i++){
//var str="";
//for (var j=0; j<myArray[i].length; j++){
//str=str+myArray[i][j];
//}
//console.log(str);
//}
//
//
//var array = [[90, 10, 231,400],[-20, 80, 100, 23, 54],
//[45, 22],[87, 98, -100, 49, 73, 35, 19]];
//var max=array[0][0];
//for(i=0;i<array.length;i++){
//for(j=0;j<array[i].length;j++){
//if(array[i][j]>max){
//max=array[i][j];
//}
//}
//} console.log(max);



//var c=0;
//var flag=true;
//for(var i=0;i<8;i++){
//	while(flag){
//		c++;
//		if(i>c||c>3){
//			flag=false;
//		}
//	}
//}
//console.log(c)
//
//
//var a=[1,2,3,4,];
//var b=[2,[3,1,0],[[4,7,8],[9,0,2,1]],"true","apple"];
//console.log(b[a.length-2][0][b.length-4]);
//
//
//var k=2;
//do{
//	console.log(k);
//	
//}while(k-->0)
//	
//	
//	var values =[10,30,50,100];
//for(var i=0;i<values.length;i++){
//	var x=0;
//	while(x<values.length){
//		console.log(x+ " " +values[i]);
//		x++;
//	}
//}
//
//
//
//
//var dog={
//	name: "Kiel",
//	weigth: "40",
//	color: "Black",
//	medals:[1,2,3,4,5,6,5]
//};
//
//console.log(dog.weigth+" "+ dog.name+" "+ [5])
//	
//
//
//
//var plane={
//	make: "Airbus",
//	model: "Boeing777",
//	seats: [100,230,250,290],
//	year:2017,
//	flying: false,
//	
//	
//	
//	takeOff: function (){
//		this.flying=true;
//	},
//	
//	autopilot: function(){
//		if (this.flying){
//			console.log("I am flying in the sky");
//     }else{
//		 console.log("Not flying yet");
//	   }
//	}
//};
//
//console.log(plane.model);
//console.log(plane.seats[2]);
//
//
//console.log(plane.year);
//
//plane.takeOff();
//plane.autopilot()
//
//
//
//var plane = new Object();
//	plane.make="Airbus";
//	plane.model="Boeing777";
//	plane.seats= [100,230,250,290];
//	plane.year=2017;
//	plane.flying= false;
//
//console.log (plane)
//
////function Rectangle(Width,Heigth){
////	
////}
//
//
//
//function calculateArea(width,heigth){
//	var area=width*heigth
//	return area;
//}
//function isChecked(){
//	if(calculateArea(5,8)>40){
//		console.log("valid");
//	}else{
//		console.log("No valid");
//	}
//}
//isChecked();
//
//
//
//function gasCalculate(mileage,tank,gasPrice){
//	var average=(mileage/tank)*gasPrice;
//	return average;
//}
//function calculate(){
//	if (gasCalculate(400,15,3.16)<100){
//		console.log("Too expensive");
//		
//	}else{
//		console.log("It's good money saver");
//	}
//}
//console.log(this.average)
//gasCalculate();
//
//
//
//function Employee(){}
//var emp=new Employee();
//
//emp.prop="Employee";
//emp.__proto__.parentProp="Parent of Employer";
//
//console.log(emp.__proto__.__proto__===Object.prototype)
//
//
//
//
//function Manager(name, depth){
//this.name=name;
//this.dept=dept;
//}
//
//Manager.prototype.detDept=function(){
//	return this.dept;
//}
//
//var mgr=new Manager("Michael","Sales");
//console.log(mgr.getDept());
//console.log(mgr.get());

//
//label1: for (var i=0; i<10;i++){
//	for (var j=0; j<10;j++){
//		if(i+j-1>10){
//			break label1;
//		}
//	}
//	console.log("Hello")
//}
//
//
//
//let i=23;
//let sum=0;
//for ( let i=0; i<5;i++){
//	sum=sum+i;
//	console.log(i);
//}
//console.log(i);
//console.log(sum);



//
//let firstName="Mike";
//let lastName="Smith";
//const yearofBirth=1970;
//function calcAge(year){
//	return 2018-year;
//}
//
// console.log(`This is ${firstName+" "+ lastName}.He was born in ${yearofBirth}.Today, he is ${calcAge(yearofBirth)} years old. `)
//
//
//let x=a=>a;
//console.log(x(2));
//
//
//var y=()=>{console.log("Helloo")};
//y( )
//
//
//const years =[1990,1965,1982,1957];
//
//let ages6=years.map(el=>2018-el);
//console.log(ages6)
//
//
//var materials=[ "Hydrogen","Helium","Lithium","Beryllium"];
//var count=0;
//for (var i=0;i<materials.length;i++){
//	count++;
//}
//console.log(count)
//
//
//console.log(materials.map(material=>material.length));


//
//var car={
//	make:"Audi",
//	model:"R8",
//	year:"2018",
//	engine:5.5,
//	color:"Black"
//		
//	};
//	
//for ( x in car){
//	if(x=="year"){
//		yearofMan=car[x]
//	}
//	console.log(x+":"+car[x])
//}
//
//console.log(car.make) 
//
//console.log (yearofMan)
//
//
//
//function Person(DOB,Heigth,Weigth,Race,Education){
//	this.DOB=DOB;
//	this.Heigth=Heigth;
//	this.Weigth=Weigth;
//	this.Race=Race;
//	this.Education=Education;
//	this.ID=function(){
//		console.log("This Person have " + this.Education + " Degree");
//	}
//}
//
//let Jamal =new Person(1985,180,200,"Turkish","Bachelor");
//let Ozzy= new Person(1987,170,180,"Turkmen","MasterDegree");
//
//let Eddie=new Person(1987,189,190,"Kyrgyz","Doctor");
//console.log(Jamal.Weigth)
//
//
//for (x in Person){
//	console.log(x+"="+x)
//}
//Eddie.ID();

//
//
//var car1={
//	make:"BMW",
//	model:"M6",
//	year:2016,
//	engine:{
//		cylinder:6,
//		size:3.3,
//		turbo:true
//	},
//	hp:[300,400],
//	started:false,
//	start:function(){
//	this.started=true;
//},
//	stop:function(){
//		this.started=false;
//	},
//		drive:function(){
//			if(this.started){
//				return " Engine is on, lets drive";
//			}else{
//				return "You need to start engine first"
//			}
//		}
//};
//
//car1.engine.oilChange=false;
//
//console.log(car1.engine)

//
//var person1={firstName:'John',lastName:'KuperMan'};
//var person2={firstName:'Kelly',lastName:'King'};
//
//function say(){
//	console.log('Hello '+ this.firstName+ ' ' + this.lastName);
//}
//
//var sayHelloJohn=say.bind(person1);
//var sayHelloKelly=say.bind(person2);
//
//sayHelloJohn();
//sayHelloKelly();
//
//
//
//
//
//function prepareCoffee(){
//	setTimeout(function(){
//		console.log("1.Find Vessel");
//		
//		setTimeout(function(){
//			console.log("2.Pour water, milk and Coffe");
//			
//			setTimeout(function(){
//				console.log("3.Bring the mixture toa boil");
//				
//				setTimeout(function(){
//					console.log("4.Filter the coffe");
//					setTimeout(function(){
//						console.log("5.Serve the cofee")
//					},2000)
//				},2000)
//			},2000)
//		},2000)
//	},2000)
//}
//prepareCoffee();


//let squares =[2,4,6].map(x=>x*x);
//[a, b]=squares;
//console.log(a+b);
//
//
//function foo(){
//	if(true){
//		let x=5
//	}
//	console.log(x)
//}
//foo();
//
//
//const speed='quick';
//console.log('The ${speed} brown');
//
////
//let a, b;
//[a=1,b=2]=[10];
//console.log('${a}|${b}');

//
//let SumElement=(...arr)=>{
//let sum=0;
//for (let element of arr){
//	sum+=element;
//}
//	console.log(sum);
//}
//SumElement(10,20,40,60,90);

//
//let args=[5,6];
//function x(a,b,c,d){
//	for (let i=0; i<3;i++){
//		a=a+b+c+d;
//	}
//	return a;
//}
//console.log(x(2,3,...args))
//
//
//function MoneyTransfer(Amount){
//	alert('Does amount is correct?'+Amount);
//}
//
//function processUserInput(callback){
//	var Quantity=prompt('Please enter your amount');
//	callback(Quantity);
//}
//processUserInput(MoneyTransfer);
//console.log()



//
//function matchCar(model,make){
//	var carIntro="Your name is ";
//
//function makeFullmatch(){
//	return carIntro + model + " " + model;
//}
//return makeFullmatch();
//}
//matchCar("Porshe",911);
//
//
//console.log(matchCar()+makeFullmatch)





//var result1,result2,result3;
//function bigNum(){
//	 var num1=parseInt(prompt("Please enter your num1"));
//	var num2=parseInt(prompt("Please enter your num2"));
//	var num3=parseInt(prompt("Please enter your num3"));
//
//if(num1>num2 && num1>num3){
//result1=num1;
//console.log(result1);
////break:
//}else if(num2>num1 && num2>num3){
//result=num2;
//console.log(result2);
////break;
//}else if(num3>num1 && num3>num2){
//	console.log(result3);
//	//break;
//}
//
//}
//bigNum();

//
//const promise=getNewCar();
//const promise2=promise.then(showAnewCar,withHoldNewCar);
//const promise2=getNewCar().then()



//var promise1= new Promise(function(resolve){
//	resolve ('Daddy is buying a new car!!!');
//});
//promise1.then(function(value){
//	//console.log(value,value1);
//	return value;
//})
//
//var promise2= new Promise(function(resolve2){
//	resolve2 ('Showing your car to your friends!!!')
//});
//promise2.then(function(value2){
//	console.log(value2);
//})



//for( var i=0;i<2;i++){
//	setTimeout(function(){
//		console.log(i);
//	},i*1000);
//}


//var favColor=("color","")
//
//
//
//var arr=[3,4,7,9,1];
//for (var i=0;i<arr.length;i++){
//  var numbers=Math. max. apply(null, numbers);
//	console.log(numbers);
//}



//var array = [3,4,7,9,1];
//var largest= 0;
//
//for (i=0; i<=largest;i++){
//    if (array[i]>largest) {
//        var largest=array[i];
//		
//    }
//}
//
//
//
//
//console.log(largest);

//second largest number
//var arr=[3,4,6,7,48,89];
//arr.sort(function(a,b){
//	return b-a;
//})
//
//console.log(arr[1])
//
//
//
//
//
//var array = [3,4,7,9,1];
//var a=Math.max(...arr);
//
//arr.splice(arr.indexOf(a))
//
//
//
//
//console.log(arr);
//
//
//function calculateArea(width,height){
//	var area =width*height;
//	return area;
//}
//var wallOne=calculateArea(34,56);
//var wallTwo=calculateArea(45,45);
//calculateArea(5,5);
//console.log(wallOne,wallTwo,calculateArea);
//
//
//
//function calculateArea(r){
//	var area;
//	if(r<=0){
//		return 0;
//	}else{
//		area=Math.PI*r*r;
//		return area;
//	}
//}
//
//var radius=5.2;
//var theArea=calculateArea(radius);
//console.log("the area is:" + theArea);
//
//
//
//function addNum(num1,num2){
//var result=num1+num2;
//	return result;
//}
//
//var optionOne=addNum(54,56);
//var optionTwo=addNum(34,23);
//console.log(optionOne,optionTwo)
//
//
//
//
//
//
//function lastDigit(num1,num2){
//	var x=true;
//	var y=false;
//	if(num1%2==1 && num2%2==1){
//		return x;
//	}else{
//		return y;
//	}
//}
//	
//	lastDigit(7,17);
//	lastDigit(6,17);
//	lastDigit(3,113);
//	console.log(x,y)
//
//
//    var dimension = 10;
//    var edge = '*';
//    var inside = ' ';
//    var printLine;



//var str="CyberTek School";
//console.log(str.charAt(2));
//
//for(let i=0; i<str.length;i++){
//	console.log(str. charAt(i));
//}
//
//
//var s1='hello ';
//var s2='Eddie';
//var s3=s1.concat(s2);
//console.log(s3);
//
//
//var firstname, lastname;
//
//firstname='Adam';
//lastname='Smith ';
//console.log(firstname.concat(" ").concat(lastname).concat('123'));
//
//
//var str="Hello sdfsCybertek school";
//var find=str. includes("Cybertek");
//console.log(find)

//var ask=['YourName', 
//   'Programming Language You are Learning',
//   'The School You Are Going',
//   'Start Date at School to Study',
//   'Company Name',
//   'Work Start Date',
//   'Job Title',
//   'Salary','fwsfe'];
//for (var i=0;i<ask.length;i++){
//	var ask2=prompt(ask.length)
//	//console.log(i)
//}

//var ask1=prompt('Please enter Your Name?');
//var ask2=prompt('What Programming Language You are Learning?');
//var ask3=prompt('The School You Are Going?');
//var ask4=prompt('Start Date at School to Study');	
//var ask5=prompt('Company Name');
//var ask6=prompt('Work Start Date');
//var ask7=prompt('Job Title');
//var ask8=prompt('Salary');
//console.log('My name is ' + ask1+'. '+'I started to study '+ask2+' '+'in '+ask3+' '+ask4+'. '+'I will start working in '+ ask5+' '+'on '+ask6+' '+'as a '+ask7 +' '+'with a salary of '+ask8+'.');

//
//	var userWeigth=parseInt(prompt('What is your weight in LB?'));
//	var userHeigth=parseInt(prompt('What is your heightin Inches?'))
//	var convertWeight=userWeigth*0.453592;
//	var convertHeigth=userHeigth*0.0254;
//	var BMI=convertWeight/convertHeigth*convertHeigth;
//  
//	console.log('Your BMI is ' + BMI)



//var askNum=parseInt(prompt('Please enter a number'));
//  var odd=askNum%2;
// if(odd==)
//if(add)
	 
//var num, x, y;
//num=parseInt(prompt("Enter your number"));
//x=num%2;
//y = x==1 && "odd" || "even";
//console.log(num + " is " + y + " number");


//
//function calculateAge(birthYear){
//	var age=2018-birthYear;
//	console.log(age);
//
//}
//calculateAge(1980);
////calculateAge(2000)
//
//
////
//function divisibleBy(num){
//	var userNum=parseInt(prompt("Please enter your number"));
//	var divide2=userNum/divisibleBy;
//	console.log(divide2)
//	
//}
//divisibleBy(2)
//divisibleBy(3)

//function divisibleBy(){
//	userNum=parseFloat(prompt("Please enter your number"));
//    if(userNum%2==0 && userNum%3==0){
//       console.log('ok')
//	}else if(userNum%2==0){
//		console.log('This number is divisible only by 2')
//	}else if(userNum%3==0){
//		console.log('This number is divisible only by 3')
//    }else{
//        console.log('not divisible by 2 or 3');
//    }
//	
//}
//divisibleBy();
//
//
//function divisibleBy(){
//	userNum=parseFloat(prompt("Please enter your number"));
//    if(userNum%4==0 && userNum%5==0 && userNum%6==0){
//       console.log('ok')
//    }else{
//        console.log('"It is not a good number"');
//    }
//	
//}
//divisibleBy();



//function divisibleBy(){
//	userNum=parseFloat(prompt("Please enter your number"));
//	if(userNum>=0 && userNum<=100 && userNum%2==0 ){
//	
//       console.log('It is  a good number')
//    }else{
//        console.log('It is not a good number');
//    }
////}
//divisibleBy()


//var num1=parseInt(prompt('Please enter your first number '));
//var num2=parseInt(prompt('Please enter your second number '));
//var num3=parseInt(prompt('Please enter your third number '));
//
//if(num1>50 || num2>50 || num3>50){
//	console.log('It is a good number')
//	}else{
//		console.log('It is not good number')
//	}


//var num1=parseInt(prompt('Please enter your first number '));
//var num2=parseInt(prompt('Please enter your second number '));
//var num3=parseInt(prompt('Please enter your third number '));
//
//if((num1>0 && num1%2==0)  && (num2>0 && num2%2==0)&& (num3>0 &&  num3%2==0)){
//	console.log('It is a good number')
//	}else{
//		console.log('It is not good number')
//	}



//var car1={
//	make:'Honda',
//	model:'Civic',
//	mileage:7000,
//	year:2015,
//	color:'Grey',
//	engine:2.5
//};
//
//
//function checkCar(car){
//  if(car.mileage<=20000 && car.year>=2016){
//	  return true;
//
//  }else{
//	  return false;
//  }	
//}
//console.log(checkCar(car1))



//
//function reverseString(str) {
//    // Step 1. Use the split() method to return a new array
//    var splitString = str.split(""); // var splitString = "hello".split("");
//    // ["h", "e", "l", "l", "o"]
// 
//    // Step 2. Use the reverse() method to reverse the new created array
//    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//    // ["o", "l", "l", "e", "h"]
// 
//    // Step 3. Use the join() method to join all elements of the array into a string
//    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//    // "olleh"
//    
//    //Step 4. Return the reversed string
//   // return joinArray; // "olleh"
//	 console.log(joinArray)
//}
//
//reverseString("EDDIE")
			  
			  
			  
//			  
//			  
//function reversing(str){
//	
//var split1= str.split("");
//	
//var reverse2=split1.reverse();
//	
//var join3=reverse2.join("");
//	console.log(join3)
//}
//reversing("EDDIE")
//
//
//function rev1(str){
//	var split$=str.split("");
//	
//	var reverse$=split$.reverse();
//	
//	var join$=reverse$.join("")
//	console.log(join$)
//}
//rev1("TUDASUDA");
//
//
//function reverseString(str) {
//    return str.split("").reverse().join("");
//}
//reverseString("hello");
//console.log(reverseString())




//
//var car={
//	make:"toyota",
//	model:"Camry",
//	year:2018,
//	color:"Black",
//	engine:2.5,
//	drive:function(){
//		 return "I am driving Toyota"
//	}
//};
// 
//console.log(car.drive())
//
//
//
//var car1="TOYOTA"
//
//console.log(car1.toLowerCase())
//
//var str="JavaScript";
//console.log(str.toLowerCase());
//
//
//for(let i=30; i<=200; i++){
//if(i%6==0 && i%4==0){
//console.log(i);
//}
//}

//
//function  Dog(type,age,height,weight,color,price){
//	this.type=type;
//	this.age=age;
//	this.height=height;
//	this.weight=weight;
//	this.color=color;
//	this.price=price;
//	this.run=function(){
//		console.log("I like this type of "+this.type)
//		
//	}
//}
//
//var Avcharka=new Dog("Avcharka","8","145","160","black","1000");
//
//var Pitbull=new Dog("Pitbull","7","122","145","brown","900");
//
//var Haski=new Dog("Haski","4","133","155","white","2000");
//
//var Buldog=new Dog("Bulldog","6","123","132","blue","660");
//
//var Bulti=new Dog("Bulti","2","100","120","darkbrown","550");
//
//for (x in Pitbull){
//	console.log(x+":"+Pitbull[x])
//}
//Pitbull.run();



//function car(model,color,year,engine,gas,made){
//	this.model=model;
//	this.color=color;
//	this.year=year;
//	this.engine=engine;
//	this.gas=gas;
//	this.made=made;
//	this.drive=function(){
//		console.log("I am driving this nice "+this.model )
//		console.log("I am driving this nice "+this.model +this.year)
//	}
//}
//
//var toyota=new car("camry","black","2018","3.5","true","japan");
//
//var mercedes=new car("S600","blue","2018","6.0","true","germany");
//
//var ferrari=new car("f30","blue","2018","3.5","true","italy");
//
//var lada=new car("7","white","2018","2.0","true","russia");
//
//mercedes.drive();
//
//ferrari.drive();


//let numbers =[343,45,4534,2,32,3121,21];
//
//function sumAll(...numbers){
//    let sum=0;
//    for(let num of numbers){
//        sum+=num;
//    }
//    return sum;
//}
//console.log(sumAll(232,45,4,23,2,23,12,1343,546));


//
//for (var i=0; i<50;i++){
//	if(i%2==1){
//console.log(i+" "+'Odd numbers');
//	}
//}
//
//
//
//var students=10;
//
//while(students>0){
//	console.log("Eating apples");
//	students--;
//	console.log("No more students");
//
//}



//for(var students=10;students>0;apples--){
//	console.log("Graduating Students")
//}
//  console.log("No more Students")


//var username,password,inputUsername,InputPassword;
//
//username="Admin";
//password=123;
//
//do{
//	var askAgain=true;
//	
//	inputUsername=prompt("Please enter your username");
//	inputPassword=prompt("Please enter your password ");
//	
//	if(username==inputUsername && password==inputPassword){
//		alert("Access granted welcome");
//		//askAgain=false;
//		
//	}else{
//		alert("Invalid username or password");
//		
//	}
//	
//	
//}while(askAgain);


//
//var num1,num2,num3;
//
//num1=3;
//
//num2=5;
//
//num3=8;
//
//
//
//if(num1>num2 && num1>num3){
//
//console.log(num1+ "is the greatest number");
//
//}else if(num2>num1 && num2>num3){
//
//console.log(num2+ "is the greatest number");
//
//}else if( num3>num1 && num3>num2){
//
//console.log(num3+ "is the greatest number");
//
//}


//var anyValue=[1,2,4,5];
//
//for(i=0;i<anyValue.length;i++){
//console.log(anyValue[i])
//}

//
//function remainder1(num1){
//	return num1%3;
//
//}
//
//console.log(remainder1(10));
//console.log(remainder1(20));

//
//var student ={
//
//              fname: "Mike",
//
//              lName: "Smith",
//
//              age: 20,
//
//              languages:{
//
//                             b8:"Java",
//
//                             b9:"JavaScript"
//
//              },
//
//              offers:["capitalOne","Geico","accenture"]
//
//};
//
//
//console.log(student.fname+" "+ "knows "+student.languages.b8+" "+"and he got an offer from "+student.offers[1]);


//var str1,str2,password;
//
//str1=javascript;
//str2=java;
//password="";


//num1=0;
//do{
//var num1=parseInt(prompt("Please enter a number "));
//
//}while(num1>0 && num1<30);
//   count ++;
//alert(num1);

// var arrayHour=[];
//var hoursSleep=parseInt(prompt("Please enter hours slept in 5 days"));
//
//arrayHour=hoursSleep.push();
//
// var num=[1,24,43,56,7,65,67];
//
////for(i=0;i<num.length;i++){
////	if(num[i]%3==0 ){
////		console.log
////	}
////}
//
//
//var max = -Infinity, argmax = [];
//for(var i=0; i<num.length; ++i)
//  if(num[i] > max) max = num[i], argmax = [i];
//  else if(num[i] === max) argmax.push(i);
//argmax; // [2,3,4]
//
//console.log(argmax)


var array = [3,4,7,9,1];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest ){
		
        var largest=array[i];
		
    }
}




console.log(largest);

//second largest number
var arr=[3,4,6,7,48,89];
arr.sort(function(a,b){
	return b-a;
})

console.log(arr[1])