


//---------------EULER TASK-----------------





/* TASK If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.



Find the sum of all the multiples of 3 or 5 below 1000.

var summ5 = 0;
var summ3 = 0;
for (var i = 5; i < 1000; i++) {
if (i % 5 != 0) continue;
summ5 += i;
}
for (var i = 3; i < 1000; i++) {
if (i % 3 != 0) continue;
summ3 += i;
}
console.log(summ5 + summ3);  //Find the sum of all the multiples of 3 or 5 below 1000.

//------------------------------------------------

//
//  var amount = 0;  // сума чисел кратных 3 и 5
//
//  for (var i=0; i<1000; i++)
//  {
//    if (!(i%3) || !(i%5))
//    {
//        amount += i;
//    }
//  }
//
//  console.log(amount)*/ //TASK If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.





function tripleUp(array){
   var result;
   for(var i=0; i<array.length; i++){
       var number=array[i];

       if(array[i]==number&&array[i+1]==number+1 && array[i+2]==number+2){
           result=true;
           break;
       }else{
           result=false;
       }
   }

   console.log(result);

}

tripleUp([1, 4, 5, 6, 2]);// ->true
tripleUp([1, 2, 3]);// ->true
tripleUp([1, 2, 4]); //->false
tripleUp([1, 2, 4, 5, 8, 9]); //->false