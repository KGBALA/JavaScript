

//
//Functions are First Class Objects.
//1-Be assigned to variable
//2-Have other functions in them 
//3-Return other functions to be called clearInterval
//
//
//
//a call back Functiontion is a function passed into another fucntion as an argument

//let x=function(){
//	console.log("I am called from inside a function");
//}
//
//let y =function (callback){
//console.log("do smthg");
//	callback();
//}
//
//y(x);


//let calc=function(num1, num2,calcType){
//	if(calcType=="add"){
//		return num1+num2;
//	}else if (calcType=="multiply"){
//	return num1*num2;
//}
//}
//console.log(calc(2,3,"add"))

//let add=function(a,b){
//	return a+b;
//}
//
//let division=function(a,b){
//	return a/b;
//	}
//
//let multiply=function(a,b){
//	return a*b;
//	}
//
//let calc =function (num1,num2,callback){
//	return callback(num1,num2);//return add(2,3)
//	
//}
//console.log(calc(2,3,add));
//console.log(calc(2,3,multiply));
//console.log(calc(2,3,division))
//
//
//console.log(calc(2,3,function(a,b){//anonymous fucntion
//				 return a-b;
//				 }));



let students=[
	{name:"Mary",score:90,school:"East"},
	{name:"James",score:100,school:"east"},
	{name:"Steve",score:40,school:"East"},
	{name:"Gabe",score:90,school:"West"},
	{name:"Rachael",score:85,school:"East"},
	{name:"Smith",score:95,school:"West"},
];

let processStudents=function (data,callBack){
	for (let i =0;i<data.length;i++){
		if (data[i].school.toLowerCase()=="east"){
			if(typeof callBack=="function"){
				callBack(data[i]);
			}
		}
	}
}
processStudents(students,function(x){
if(x.score>60){
	console.log (x.name+"passed");
}
	
})


//write a fucntion that computes the total of all the scores together for east and also acoount so how many students are in our east.


let determineTotal=function(){
	let total=0;
	let count=0;
	processStudents(students,function(x){
		total=total+x.score;
		count++;
	})
	console.log(`Total score: ${total}-Total count: ${count}`)			   
}
determineTotal();