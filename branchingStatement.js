


//----------BRANCHING STATEMENT----------------------------




/*// TASK 
//Break a loop as example use numbers.


var i =0;

while(i<6){
	
	if (i==3){
		continue;
		
	}
	i++;
	console.log(i);
	
}


//---------------------------

for (var i=1; i<10, i++){
	if(i%2==0){
		continue;
	}
console.log(i + "");
}


//---------------------------

var a="";
for (var i=1; i<10; i++){
	if (i%2==0){
		continue;
	}
	a=a+i+" ";
}
console.log(a);*/ //TASK  Break a loop as example use numbers.


/*//TASK
// WRITE A PROGRAM THAT CALCULATES THE SUM OF NUMBERS ENTERED BY THE USER UNTIL USER ENTERS A NEGATIVE NUMBER.

var number;
var sum=0;

while (true ){
	
	   number=parseInt(prompt("Enter your number"));
	   
	   if(number<0){
		   break;
	   }
        sum=sum+number;
}
console.log(sum);*/ // TASK UNTIL USER ENTERS A NEGATIVE NUMBER


/*// TASK WRITE A PROGRAM THAT CALCULATES THE SUM OF MAXIMUM OF 5 POSITIVE NUMBERS ENTERED BY THE USER. IF THE USER ENTERS NEGATIVE NUMBER OR ZERO, IT IS SKIPPED FROM CALCULATION.



var sum=0;
for (var i=0; i<6;i++ ){
	
	    var number=parseInt(prompt("Enter your number"));
	   console.log(number);
	  
if(number<=0){
		   continue;
	   }
        sum=sum+number;
}
console.log(sum)*/ //TASK WRITE A PROGRAM THAT CALCULATES THE SUM OF MAXIMUM O


/*var start=1;
var sum=0;

do{
	if(start%2==0){
		continue;
	}
	sum+=start;
}while(++start<=10);
console.log(sum);*/ //TASK 
