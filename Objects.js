



var plan1Name="Basic";
var plan1Price=3.99;
var plan1Space=100;
var plan1Data=1000;
var plan1Pages=10;



var plan2Name="Professional";
var plan2Price=5.99;
var plan2Space=100;
var plan2Data=1000;
var plan2Pages=10;



var plan1={
	name:"Basic",
	price:3.99,
	space:100,
	data:1000,
	pages:10
};
console.log("The cost of the " + plan1.name + "package is $" + plan1.price + "per month");



//Task:Check if the mileage is less than 5000 and makes is Fiat. If it is display " buy it" otherwise display "do not buy it".


//var car={
//	make: "Fiat",
//	model:500,
//	year:1957,
//	color:"Medium blue",
//	passengers:2,
//	convertable:false,
//	mileage:8800
//};
//
//
//if(car.mileage<5000 && car.make="Fiat"){
//	console.log(" Buy it");
//}else{
//	console.log("Do not buy it");
//}


// Task: CHECK IF JOHN'S SALARY IS LESS THAN OR EQUAL TO 100. IF IT IS INCREASE IT TO 120. ALSO, CHECK IF ADAM SALARY IS INCLUDED. IF NOT, ADD NEW SALARY TOO.


var salaries={
	John:100,
	Ann:160,
	Pete:130
};


if(salaries.John<=100){
	salaries.John=120;
}
if("Adam" in salaries==false){
	salaries.Adam=150;
}
console.log(salaries);




// TASK: DISPLAY " MY HONDA ENGINE SIZE IS 2.2 AND HP IS 500"


var myHonda={
	color:"red",
	wheels:4,
	engine:{
		cylinders:4,
		size:2.2
	},
	hp:[300,500,1000]
};

console.log("My honda engine size is " + myHonda.engine.size + " and hp is " + myHonda.hp[1]);


//--------------ADDING BEHAVIOR TO OBJECT---------------------


var plan1={
    name:"Basic",
    price:3.99,
    space:100,
    data:1000,
    pages:10,
	discountMonth:[7,8,12]
};

// if user sign up in certain month, he gets discount for the entire year.
// if user signs up for basic plan in July, or August he gets 20 percent off 


function calcAnnual(){
	var bestPrice=plan1.price;
	for(var i=0;i<plan1.discountMonth.length;i++){
		if(plan1.discountMonth[i]==7 || plan1.discountMonth[i]==8){
			bestPrice=plan1.price*0.8;
		}
	}
	return bestPrice*12;
}
var annualPrice=calcAnnual();
console.log(annualPrice);




//var plan1={
//    name:"Basic",
//    price:3.99,
//    space:100,
//    data:1000,
//    pages:10,
//	discountMonth:[7,8,12],
//	calcAnnual:function (percentDiscount){
//	var bestPrice=plan1.price;
//	for(var i=0;i<plan1.discountMonth.length;i++){
//		if(plan1.discountMonth[i]==7 || plan1.discountMonth[i]==8){
//			bestPrice=plan1.price*0.8;
//
//		}
//	}
//	return bestPrice*12;
//}
//var annualPrice=calcAnnual(0.75);
//console.log(annualPrice);

	//---------------How "this" works?----------------------
	
//	
//var car={
//	make:"Honda",
//	model:"Civic",
//	year:2000,
//	color:"Red",
//	mileage:75000,
//	started:false,
//	start:function(){
//	  started=true;
//},
//	stop:function(){
//		started=false;
//	},
//		drive:function(){
//			if (started){
//				console.log("it is running");
//			}else{
//				console.log("you need to start the engine first.")
//			}
//		}
//};
//
//car.drive();
//car.start();
//car.drive();
//car.stop();



//TASK: FIND THE ERROR IN THE CODE

var song={
	name:"Walk This Way",
	artist:"Run-D.M.C",
	minutes:4,
	seconds:3,
	genre:"80s",
	playing:false,
play:function(){
	if(!this.playing){
		 this.playing=true;
		console.log("Playing " + this.name + " by " + this.artist);
	}
},
	pause:function(){
		if(this.playing){
			this.playing=false;
		}
	}
};
song.play();
song.pause();



//-----------------------------------------------
//TASK CREATE AN OBJECT INCLUDES FOLLOWING PROPERTIES AND METHODS:
//name(string)
//lastName(string)
//yearOfBirth(number)
//job(string)
//isMarried(Boolean)
//family(array)
//calculateAge(function)

//Output:console.log(objectName.calculateAge());


var person={
name:"Kanybek",
lastName:"Toktosunov",
yearOfBirth:1988,
job:"SDET",
isMarried:true,
family:["Murat","Turat","Bahajon","Muratjon"],
calculateAge:function(){
	var age=2018-this.yearOfBirth;
	return age;	
  }
};
var KanybekAge=person.calculateAge();
console.log(KanybekAge);


//TASK FOR IN STATEMENT ITERATES OVER THE PROPERTIES OF AN OBJECT. FOR EACH DISTINCT PROPERTY, STATEMENTS CAN BE EXECUTED.



//---------------------FOR IN STATEMENT-----------------------

var car={
	make: "Ford",
	model:"Mustang",
	year:1955,
	color:"black",
	mileage:281341
}
for(x in car){
	console.log(x + ":" + car[x]);
}

//TASK: WRITE A PROGRAM TO DISPLAY IN THE CONSOLE 123


var object={a:1,b:2,c:3};
var str="";
for ( x in object ){
	str=str+object[x];
}
	console.log(str);


//-----------------EXAMPLE FROM CLASS-------------------------
var car = {
   
    make:"Honda",
    model:"Civic",
    year:2000,
    mileage:[35000,20000,10000],
    started:false,
    
    start: function(){
       this.started=true;
    },
    
    drive:function(){
        
        if(this.started){
            console.log("I am driving");
        }else{
            console.log("I am not driving");
        }
    }
    
};

console.log(car.make);
console.log(car.mileage[2]);

car.year=2018;
console.log(car);

car.color="Red";
console.log(car);

delete car.color;
console.log(car);

car.start();
car.drive();


//------------------CONTINUE OBJECTS---------------------



var car = {};
   
   car.make="Honda",
    car.model="Civic",
    car.year=2000,
    car.mileage=[35000,20000,10000],
		car.color="red";
console.log(car);

//-------------------------------


//--------------OBJECT CONSTRUCTOR FUNCTION-------------------


function Hotel(name, rooms,booked){
	this.name=name;
	this.rooms=rooms;
	this.booked=booked;
	this.checkAvailability= function(){
		return this.rooms-this.booked;
		
	};
}


//----------- CREATING MANY OBJECTS---------------------------

function Person (name, lastName,age){
	this.name=name;
	this.lastName=lastName;
	this.age=age;
	
}

var Person0=new Person("Kanybek","Tursunbaev",30);
var Person1=new Person("Aisulluu","Kyzy",20);
var Person2=new Person("Altynai","Suuitbekova",22);
var Person4=new Person("Edil","Statham",30);

console.log(Person0.name + " " +Person0.lastName + " " + Person0.age);

//-----------------------------------------------------

// TASK CREATE A FUNCTION CONSTRUCTON NAMED RECTANGLE THAT ACCPETS 2 PARAMETERS: WIDTH AND HEIGHT
//CONSTRUCTOR SHOULD HAVE A METHOD THAT CALCULATERS ADN RETURNS THE AREA OF THE RECTANGLE.
// CREATE DIFFERENT RECTANGLE OBJECTS AND FIND THE AREAS OF THEM.



function rectangle (width,height){
	this.width=width;
	this.heigth=height;
	this.area=function(){
	return this.width*this.height;
}
}
var area1= new rectangle( 13,14);
var area2= new rectangle( 33,13);
var area3= new rectangle( 23,15);

console.log( area1);
console.log( area2);
console.log( area3);

//----------TASK HOSTING PLANS----------------------------

function Plan(name,price,space,transfer,pages,discountMonths){
    
    this.name=name;
    this.price=price;
    this.space=space;
    this.transfer=transfer;
    this.pages=pages;
    this.discountMonths=discountMonths;
    
    this.calcAnnual=function(percentOfDisc){
        var bestPrice=this.price;
        for(var i=0;i<this.discountMonths.length;i++){
            if(this.discountMonths[i]==7 || this.discountMonths[i]==8 || this.discountMonths[i]==12){
               bestPrice=this.price*percentOfDisc;
                break;
            }
        }
        
        return bestPrice*12;
    }
}


var p1=new Plan("Basic",3.99,100,1000,10,[7,8]);
var p2=new Plan("Professional",5.99,500,5000,50,[7,8,12]);
var p3=new Plan("Ultimate",9.99,2000,20000,500,[7,8]);

var annualPrice1=p1.calcAnnual(0.8);
console.log(annualPrice1);

var annualPrice2=p2.calcAnnual(0.8);
console.log(annualPrice2);


var annualPrice3=p3.calcAnnual(0.8);
console.log(annualPrice3);




//-------isNAN Method---------------------------


var a="apple";
console.log(isNaN(a));//true

var b="23";
console.log(isNaN(b));//false

var c="abc23";
console.log(isNaN(c)); //true

var d=" ";
console.log(isNaN(d));//false

var e=23;
console.log(isNaN(e));//false



//-----------HOW TO INSTANTIATE A DATE-----------------



var d=new Date();
console.log(d);


var d=new Date(1000000000000);
console.log(d);

var d=new Date("October 13,2018, 11:11:00");
console.log(d);


var d=new Date(99,5,24,11,33,30,0);
console.log(d);

//--------------GET FULL YEAR METHOD--------------------

var moonLanding=new Date('July 20,69 00:20:18');
console.log(moonLanding.getFullYear())//1969

var today=new Date();
var year=today.getFullYear();
console.log(year);//2018



//--------------GET FULL MONTH METHOD--------------------

var moonLanding=new Date('July 20,69 00:20:18');
console.log(moonLanding.getMonth())//6

var today=new Date();
var year=today.getMonth();
console.log(year);//7




//--------------GET HOURS METHOD--------------------

var moonLanding=new Date('July 20,69 00:20:18');
console.log(moonLanding.getHours())//6

var today=new Date();
var year=today.getTime();
console.log(year);//7


//---------------setTime Method-----------------------

//set Time Method sets the Date object to the time represented by a number if milliseconds January


//WRITE A PROGRAM TO CALCULATE YOUR AGE
//NOTE:IF YOUR BIRTHDAY NOT HAPPENED YET, DO NOT INCLUDE THAT YEAR.

//
//
//var birthDay="08/29/1987";
//var today=new Date();
//
//var years=today.getFullYear()-birthDay.getFullYear();
//birthDay.setFullYear(today.getFullYear());
//
//if(today<birthDay){
//	years--;
//}
//console.log(years);



//TASK: DISPLAY "MY AUDI ENGINE SIZE IS 3.0 AND HP IS 500


var car3={
	make:"Audi",
	model:"Black",
	engine:{
		cylinders:4,
		size:3.0,
		turbo: true
			},
	hp:[350,400,550]
	
};
console.log("My " +" "+ car3.make +" "+ "engine size is" +" "+ car3.engine.size+" "+ "and hp is " + car3.hp[2]);

console.log(`My ${car3.make} Engine size is ${car3.engine.size} and hp is ${car3.hp[2]}`)







	