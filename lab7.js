/*
Task-1 Level: EXTRA SWEET
Write a function that accepts a string and a non-negative number, and prints a larger string that is number copies of the original String*/

//function stringTimes(string,number){
//       var str="";
//
//    for(var i=0;i<number;i++){
//        str=str+string;
//    }
//    console.log(str);
//}
//
//stringTimes("test", 2);
//stringTimes("Hi", 3);
//stringTimes("Hi", 40);



//Task-9 Level:EXTRA SWEET
//The number 6 is a truly great number. Write a function that accepts num1 and num2, prints true if either one is 6. Or if their sum or difference is 6. 
//
//love6(6, 4) → true
//love6(4, 5) → false
//love6(1, 5) → true
//love6(12, 6); ->true

//function love6(num1,num2){
//    if(num1==6 || num2==6 || num1+num2==6 || num1-num2==6 || num2-num1==6){
//        console.log(true);
//    }else{
//        console.log("false");
//    }
//}
//
//love6(6, 4);
//love6(4, 5);
//love6(1, 5);
//love6(12, 6);



/*

Task Level:EXTRA SWEET

We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Write a function that accepts a number and prints true if the given number is special.

specialEleven(22) → true
specialEleven(23) → true
specialEleven(24) → false*/


function specialEleven(number){
    if(number%11==0 || (number-1)%11==0||number%11==1){
        console.log("true");
    }else{
        console.log("false");
    }
}

specialEleven(22);
specialEleven(23);
specialEleven(24);
//
//The deers in VA spend most of the day playing. In particular, they play if the temperature is between 60 and 90. Unless it is summer, then the upper limit is 100 instead of 90.
//Write a function that accempts temperature and a boolean isSummer, prints true if the deers play and false otherwise.

function deerPlay(temp,isSummer){
    if(isSummer){
        if(temp>60 && temp<100){
            console.log("true");
        }else{
            console.log("false");
        }
    }else{
        if(temp>60 && temp<90){
            console.log("true");
        }else{
            console.log("false");
        }
        
    }
}

deerPlay(70, false);
deerPlay(95, false);
deerPlay(95, true);


/*
Task-3 Level: EXTRA SWEET
Write a function that accepts an array and prints the number of 9 s in the array

arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3*/

//function arrayCount9(array){
//    var counter=0;
//    for(var i=0;i<array.length;i++){
//        if(array[i]==9){
//            counter++;
//        }
//    }
//    console.log(counter);
//}
//
//arrayCount9([1, 2, 9]);
//arrayCount9([1, 9, 9]);
//arrayCount9([1, 9, 9, 3, 9]);


function arrayCount9(array){
    var counter=0;
    for(var i=0;i<array.length;i++){
        if(array[i]==9){
            counter++;
        }
    }
    console.log(counter);
}

arrayCount9([1, 2, 9,9,9,9]);





















