


//-------------------PROJECT ONE-------------------------------------

//Project Requirements
//
//1. Build a function constructor called Question to describe a question. A question should include:
//   a)Question itself
//   b)The answer from which the player can choose the correct one (choose an adequate data structure here, array, object,etc)
//   c)Correct answer(I would use a number for this)
//
//2. Create a couple of questions using the constructor
//
//   Question 1-Is JavaScript the coolest programming language in the world?
//   Answers 1-Yes,No
//   Correct Answer1-Yes
//
//   Question 2-What is the name of this course's teacher?
//   Answers 2-Mike,John,Ozzy
//   Correct Answer2-Ozzy
//
//   Question 3-What does best describe coding?
//   Answers 3-Boring,Hard,Fun,Tedious
//   Correct Answer3-Fun
//
//3. Store them all inside an array
//
//4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint:write a method for the question objects for this task)
//
//5. Use the prompt function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4
//
//6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this)

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



//----------------------------------PROJECT TWO------------------------------



//Main Screen has two main products
//            1.Vegetables 2.Fruits
// 
//
//if user enter 1 (vegetables ) , list 5 vegetables with price
//if user enter 2 (fruit) list 5 fruits with price
//if user enter different input from 1 and 2,
//-alert "Please enter valid option"
//Accepts 1-5 for vegetables or fruits selection,
//if user enter different input, show "Please enter valid option"
//after product selection,  user should enter amount between 1 to 100.
//if different than this range show "Please enter amount between 1 to 100"
//after amount entrance,  show total price and ask "do you want to shop more ?"
//if user enter 1 (yes) start from main product, at the same time keep previous total and add new total it
//if no (2) show total price say thank you
//first selection only accepts 1 or 2, if not ask again
//second selection only accept 1-5 ,if not ask again
//amount only accept numbers 1 to 100, if not ask again
//continue selection only accept 1 or 2 if not ask again
//Vegetables
//Cucumber   $2.5
//Tomatoes    $3
//Onion          $1.5
//Pepper        $2
//Carrot         $4
//Fruits
//Orange         $3.5
//Banana         $4
//WaterMelon  $7
//Apple             $8  
//Cherry            $4
//


do{
	var boolean=true;
var mainScreen=parseInt(prompt("Please choose product "+"\n"+ "1.Vegetables"+"\n"+"2.Fruits"));
var repeat;// for repeating prompt 

if (mainScreen==1){
	var Vegetables=["1.Cucumber $2.5 ", "2.Tomatoes $3 ", "3.Onion $1.5 ", "4.Pepper $2 ", "5.Carrot $4 "];
var priceVegetables=[2.5,3,1.5,2,4];
var str="";
	for(var i=0;i<Vegetables.length;i++){
		str=str+Vegetables[i]+"\n";
	}
	var ask1=parseInt(prompt("Which vegetable do you want? \n"+str))
	
}else if(mainScreen==2){
var Fruits=["1.Orange $3.5 ", "2.Banana $4 ", "3.Watermelon $7 ", "4.Apple $8 ", "5.Cherry $4 "];
var priceFruits=[3.5,4,7,8,4];
	var str="";
	for(var j=0;j<Fruits.length;j++){
		str=str+Fruits[j]+"\n";
	}
  var ask2=parseInt(prompt("Which fruit do you want? \n"+str));
}else{
	alert("Enter number 1 or 2");
}
	var productVegetables=parseInt(prompt(Vegetables[0]+"\n"+"How much Cucumber do you want?"));
if((productVegetables==1) || (productVegetables<=100)){
	var sumCucumber=productVegetables*priceVegetables[0];
	alert(sumCucumber);
}
	repeat=prompt("Would you like to shop more"+"\n"+"1.Yes" +"\n"+"2.No")
	var answer=["1.Yes","2.No"];
}while(true);
		if(repeat==answer[0]){
			 var x=mainScreen;
		}else if(repeat==answer[1]){
			alert(sumCucumber+"Thank you for shopping wtih us!")
		}

//}else{
//	productVegetables=prompt("Please enter amount between 1 to 100");
//	}





