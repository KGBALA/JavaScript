



//CALL APPLY BIND


// CALL

var obj={
	num:2
}

obj3={
	num:10
}

var addToThis=function (a){
	return this.num+a;
}

var x =addToThis.call(obj,3);
console.log(x);


var y=addToThis.call(obj3,3);
console.log(y)

var addToThis2=function(a,b,c){
	return this.num+a+b+c;
}
var z =addToThis2.call(obj3,1,2,3);// fcuntionName.call(objectName, functionArguments)
console.log(z)


var obj4={
	num:10
}
var arr=[1,2,3];
var x=addToThis.apply(obj4,arr);
console.log(x);



var obj5={
	num:5
}

var addToThis3=function(a,b,c){
	return this.num+a+b+c;
}
var arr2=[1,2,3];

var k=addToThis.bind(obj5);
console.log(k(1,2,3));
console.log(k(...arr2));
