



//1. slice() method task: Create  1 array and create 2nd array using slice() method and in should start with the last element of 1st array . Print two arrays.
//[1, 2, 3, 4] > [4,1,2,3]

//
//var number=[1,2,3,4];
//var newNumber=number.slice(0);
//var last=[newNumber.pop()];
//console.log(last.concat(newNumber));


//2. slice() method task: Create  1 array and create 2nd array using slice() method and  do not include 1st and last elements. Print 2nd array.


//var numbers=([1,2,3,4],[]);
//var newNumber=numbers.slice[1,numbers.length-1];
//console.log(newNumber);

//
//var info= [
//   ["John","Miller", 29],
//   ["Matt", "Jordan", 30],
//   ["Nick","Watson", 21],
//   ["Mary", "Matson", 40]
//   ]


//Please print them line by line;
// It should show number of index and the result of it. Like this: 
// 0 and 0 = John
// 0 and 1 = Miller
// 0 and 2 = 29

//
//var info= [
//   ["John","Miller", 29],
//   ["Matt", "Jordan", 30],
//   ["Nick","Watson", 21],
//   ["Mary", "Matson", 40]
//   ];
//
//for (var i=0; i<info.length; i++){
//   for (var j=0; j<info[i].length; j++){
// console.log([i] +" and "+[j]+ " is "+ info[i][j])
//   }
//} 
//
//var info= [
//   ["John","Miller", 29],
//   ["Matt", "Jordan", 30],
//   ["Nick","Watson", 21],
//   ["Mary", "Matson", 40]
//   ];
//
//for (var i=0; i<info.length; i++){
//for (var j=0; j<info[i].length; j++){
//	var newInfo=info[i].toString();
//}
//		console.log(newInfo);
//}
	
 var arr = [[1,2], [3,4], [5,6]];
 for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

var arr = [  [1,2], [3,4], [5,6]];
for (var i=0; i < arr.length; i++) {
 console.log(arr[i]);}



var arr = [  [1,2], [3,4], [5,6]];
 for (var i=0; i < arr.length; i++) {  
  for (var j=0; j < arr[i].length; j++) { 
	  for(var p=0;p<arr[i].length;p++){
   console.log(arr[j][p]);  }}}

