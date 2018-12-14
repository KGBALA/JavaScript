


 // -------------NESTED FOR LOOP--------------------




/*// TASK INNER AND OUTER LOOPS
for( var i=0; i<5;i++){
	console.log("Outer Loop at state: " + i + "\n");
	for(var p=0; p<2; p++){
		console.log("Inner Loop at state: " + p);
		if(p==1){
			console.log("\n")
		}
	}
}*/ //SHOWING INNER AND OUTER LOOPS




// ---------------TEST FROM CLASS JULY 27--------------
 

/*// MULTIPLICATION ENTERED NUMBERS FROM PROMPT

 var num=parseInt(prompt("Please enter your number?"));
for(var i=1; i<11;i++){
	console.log(num + "*" + i + "=" + (num*i));
}*/ //MULTIPLICATION ENTERED NUMBERS FROM PROMPT


/*// NESTED LOOP FOR MULTIPLICATION ENTERED NUMBERS FROM PROMPT

 var num=parseInt(prompt("Please enter your number?"));
for(var i=1; i<11;i++){
	for(var p=1; p<10;p++){
	console.log(num + "*" + p + "=" + (num*i));
    }
}*/ //NESTED LOOP FOR MULTIPLICATION ENTERED NUMBERS FROM PROMPT






var str =""
for (var i = 1; i <= 5; i++) {
for (var j = 1; j <= 10; j++) {
console.log((i * j) + " ");
}
console.log (str);
}
