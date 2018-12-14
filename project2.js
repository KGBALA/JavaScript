

//do{
//	var answer;
//var mainScreen=parseInt(prompt("Please choose product "+"\n"+ "1.Vegetables"+"\n"+"2.Fruits"));
//	
//var repeat;// for repeating prompt 
//	
//var Vegetables=(["1.Cucumber $2.5 ", "2.Tomatoes $3 ", "3.Onion $1.5 ", "4.Pepper $2 ", "5.Carrot $4 "]);
//	
//var Fruits=(["1.Orange $3.5 ", "2.Banana $4 ", "3.Watermelon $7 ", "4.Apple $8 ", "5.Cherry $4 "]);
//	
//var priceFruits=([3.5,4,7,8,4]);
//		
//var priceVegetables=[2.5,3,1.5,2,4];
//
//if (mainScreen==1){
//var str="";
//	for(var i=0;i<Vegetables.length;i++){
//		str=str+Vegetables[i]+"\n";
//	}
//		 var vegChoise=parseInt(prompt("Which vegetable would you like?\n"+str));
//		
//	}
//
//
//if (vegChoise==1&&(vegAmount1=>1 || vegAmount1<=100)){
//	var vegAmount1=parseInt(prompt("How much Cucumber do you want?"));
//	var sumCucumber=vegAmount1*priceVegetables[0];
//	alert(sumCucumber);
//	}else if(vegChoise==2&&(vegAmount2=>1||vegAmount2<=100)){
//	var vegAmount2=parseInt(prompt("How much Tomatoes do you want"));
//	var sumTomatoes=vegAmount2*priceVegetables[1];
//	alert(sumTomatoes);
//    }else if(vegChoise==3&&(vegAmount3=>1||vegAmount3<=100)){
//	var vegAmount3=parseInt(prompt("How much Onion do you want"));
//	var sumOnion=vegAmount3*priceVegetables[2];
//	alert(sumOnion);
//	}else if(vegChoise==4&&(vegAmount4=>1||vegAmount4<=100)){
//	var vegAmount4=parseInt(prompt("How much Pepper do you want"));
//	var sumPepper=vegAmount4*priceVegetables[3];
//	alert(sumPepper);
//	}else if(vegChoise==5&&(vegAmount5=>1||vegAmount5<=100)){
//	var vegAmount5=parseInt(prompt("How much Carrot do you want"));
//	var sumCarrot=vegAmount5*priceVegetables[4];
//	alert(sumCarrot);
//     var twoProduct1=parseInt(prompt("Would you like to shop more"+"\n"+"1.Yes" +"\n"+"2.No"));
//     if(twoProduct1==1){
//		 var x=mainScreen;
//	 }
//	}
//-------------------------------------------------------
//
//if (mainScreen==2){
//var str="";
//	for(var i=0;i<Fruits.length;i++){
//		str=str+Fruits[i]+"\n";
//	}
//	var fruitChoise=parseInt(prompt("Which fruit would you like?\n"+str));
//}
//	 
//if(fruitChoise==1&&(fruitAmount1=>1 || fruitAmount1<=100)){
//	var fruitAmount1=parseInt(prompt("How many Oranges do you want?"));
//	var sumOrange=fruitAmount1*priceFruits[0];
//	alert(sumOrange);
//}else if(fruitChoise==2&&(fruitAmount2=>1||fruitAmount2<=100)){
//	var fruitAmount2=parseInt(prompt("How many Bananas do you want"));1
//	var sumBananas=fruitAmount2*priceFruits[1];
//	alert(sumBananas);
//}else if(fruitChoise==3&&(fruitAmount3=>1||fruitAmount3<=100)){
//	var fruitAmount3=parseInt(prompt("How many Watermelon do you want"));
//	var sumWatermelons=fruitAmount3*priceFruits[2];
//	alert(sumWatermelons);
//}else if(fruitChoise==4&&(fruitAmount4=>1||fruitAmount4<=100)){
//	var fruitAmount4=parseInt(prompt("How many Apples do you want"));
//	var sumApples=fruitAmount4*priceFruits[3];
//	alert(sumApples);
//}else if(fruitChoise==5&&(fruitAmount5=>1||fruitAmount5<=100)){
//	var fruitAmount5=parseInt(prompt("How many Cherrys do you want"));
//	var sumCherrys=fruitAmount5*priceFruits[4];
//	alert(sumCherrys);
//}
//	
// var twoProduct1=prompt("Would you like to shop more"+"\n"+"Yes" +"\n"+"No");
//	
//	 }while(twoProduct1=="Yes");
//		var x=mainScreen;
//		if(twoProduct1=="No"){
//		
//		}
//var totalSum=(sumCucumber+sumTomatoes+sumOnion+sumPepper+sumCarrot+sumOrange+sumBananas+sumWatermelons+sumApples+sumCherrys);
//alert("Your total price is " + totalSum + " Thank you for shopping");
//	 





//-----------------------------JAMAL EXAMPLE-------------------------------------




// v = vegetable
// pv = price of vegi
// f = fruits
// pf = price of fruits
//var v1,v2,v3,v4,v5,pv1,pv2,pv3,pv4,pv5,f1,f2,f3,f4,f5,pf1,pf2,pf3,pf4,pf5,mainProduct,vegiProduct,amountV,totalV,total,askAgain;
//
////Vegetables
//v1="Cucumber";
//v2="Tomatoes";    
//v3="Onion";          
//v4="Pepper";        
//v5="Carrot";
////price of vegies
//
//pv1=2.5;
//pv2=3;
//pv3=1.5;
//pv4=2;
//pv5=4;
////fruits
//f1="Orange";        
//f2="Banana";        
//f3="WaterMelon";  
//f4="Apple";              
//f5="Cherry";
////price of fruits
//pf1=3.5;
//pf2=4;
//pf3=7;
//pf4=8;
//pf5=4;
//
//total=0;
//
//
//mainLoop:   
//do{
//mainProduct = prompt("What type of product you want to buy ? \n1-Vegetables \n2-Fruits");
//
//if(mainProduct==1){
//    vegiLoop:
//    do{
//    vegiProduct=prompt("1-"+v1+" $"+pv1+"\n2-"+v2+" $"+pv2+"\n3-"+v3+" $"+pv3+"\n4-"+v4+" $"+pv4+"\n5-"+v5+" $"+pv5);
//    if(vegiProduct==1){
//       do{
//        amountV=prompt("Please enter the amount of "+v1);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv1;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//        
//    }
//    else if(vegiProduct==2){
//        
//        do{
//        amountV=prompt("Please enter the amount of "+v2);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv2;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//        
//    }
//    else if(vegiProduct==3){
//               do{
//        amountV=prompt("Please enter the amount of "+v3);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv3;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//    }
//    else if(vegiProduct==4){
//               do{
//        amountV=prompt("Please enter the amount of "+v4);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv4;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//    }
//    else if(vegiProduct==5){
//               do{
//        amountV=prompt("Please enter the amount of "+v5);
//        if(amountV>0&&amountV<=100){
//           amountV=parseInt(amountV);
//           totalV=amountV*pv5;
//            break vegiLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//    }
//    else{
//        alert("please enter valid option");
//    }
//    //vegiLoop
//    }while(true);
//    
//    total+=totalV;
//    alert("you cart total is: "+total);
// 
//    //asking again after showing the total  
//    do{
//    askAgain=prompt("Do you want to continue shopping ? \n1-Yes \n2-No");
//    if(askAgain==1){
//        continue mainLoop;
//    }else if(askAgain==2){
//        break mainLoop;
//    }else{
//        alert("Please enter the valid option")
//    }
//    }while(true);
//    
//    
//    
//}else if(mainProduct==2){
//    fruitLoop:
//    do{
//    fruitProduct=prompt("1-"+f1+" $"+pf1+"\n2-"+f2+" $"+pf2+"\n3-"+f3+" $"+pf3+"\n4-"+f4+" $"+pf4+"\n5-"+f5+" $"+pf5);
//    if(fruitProduct==1){
//       do{
//        amountF=prompt("Please enter the amount of "+f1);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf1;
//            break fruitLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//        
//    }
//    else if(fruitProduct==2){
//        
//      do{
//        amountF=prompt("Please enter the amount of "+f2);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf2;
//            break fruitLoop;  
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//        
//    }
//    else if(fruitProduct==3){
//       do{
//        amountF=prompt("Please enter the amount of "+f3);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf3;
//            break fruitLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//    }
//    else if(fruitProduct==4){
//        do{
//        amountF=prompt("Please enter the amount of "+f4);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf4;
//            break fruitLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//    }
//    else if(fruitProduct==5){
//          do{
//        amountF=prompt("Please enter the amount of "+f5);
//        if(amountF>0&&amountF<=100){
//           amountF=parseInt(amountF);
//           totalF=amountF*pf5;
//            break fruitLoop;   
//        }else{
//            alert("Please enter the amount between 1 to 100");
//        }
//        //amount loop
//       }while(true);
//
//    }
//    else{
//        alert("please enter valid option");
//    }
//    //fruit loop
//    }while(true);
//    
//    total+=totalF;
//    alert("you cart total is: "+total);
// 
//    //asking again after showing the total  
//    do{
//    askAgain=prompt("Do you want to continue shopping ? \n1-Yes \n2-No");
//    if(askAgain==1){
//        continue mainLoop;
//    }else if(askAgain==2){
//        break mainLoop;
//    }else{
//        alert("Please enter the valid option")
//    }
//    }while(true);
//    
//}else{
//    alert("please enter valid option");
//    continue;
//}
//
//}while(true);
//
//
//
//alert("Your cart total is:"+total+"\nThank you for shopping with us");
//





//----------------------------------------KANAT EXAMPLE--------------------------------



var vegatables=[
    ["Cucumber","Tomatoes","Onions","Pepper","Carrot"],
    [2.5,3,1.5,2,4],
    ["Orange","Banana","Watermelon","Apple","Cherry"],
    [3.5,4,7,8,4]
]
var input;var bool=true; var total=0;
do{
input=parseInt(prompt("What type of product you want to buy, please enter number \n 1-Vegetables \n 2-Fruits"));
    if(input==1 || input==2 ){
        do{
            var bool1=false;
            if(input==1){
       var inV=prompt(" 1.Cucumber $2.5 \n 2.Tomatoes $3 \n 3.Onions $1.5 \n 4.Pepper $2 \n 5.Carrot $4");
            }else {
                var inV=prompt(" 1.Orange $3.5 \n 2.Banana $4 \n 3.Watermelon $7 \n 4.Apple $8 \n 5.Cherry $4");}
          if(inV>=1 && inV<=5){
        do{
            if(input==1){
         var inV1=prompt("Please Enter amount of "+vegatables[input-1][inV-1]);
            if(inV1<=100 && inV1>=1){
              total=total+inV1*vegatables[input][inV-1];}
            } if(input==2){
                var inV1=prompt("Please Enter amount of "+vegatables[input][inV-1]);
                if(inV1<=100 && inV1>=1){
               total=total+inV1*vegatables[input+1][inV-1];}
            }
            if(inV1<=100 && inV1>=1){
            alert("Your total will be $"+total);
        var inV2=prompt("\n Do you want to shop more \n 1.Yes \n 2.No");
            if(inV2==1){
                bool2=false;
                bool1=false;
            }
                if(inV2==2){
                    alert("Your cart total is $"+total+"\n Thank you for shopping with us");
                var bool2=false;
                    bool1=false;
                    bool=false;
            }else if(inV2!=1 && inV2!=2){
                bool2=true;
                alert("Please enter Valid number from 1-2");}
        }else{alert("Please enter Valid number from 1-100");
                    bool2=true;}
        }while(bool2==true);
        
        }else{
            alert("Please enter a number between 1-5");
            bool1=true;}
    }while(bool1==true);
    }else{
        alert("Please enter valid number between 1-2 ");}
} while(bool==true);






