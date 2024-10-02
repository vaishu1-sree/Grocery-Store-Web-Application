var button=document.getElementById("button");
var sum=0
var array = [];

function onclick1(){
  array.push("\n tofu £37.00")
  sum=sum+37.00
  
console.log(sum)
  
}
button.addEventListener("click",onclick1)
// //BUT1
var button1=document.getElementById("button1");

function onclick2(){
  array.push("\n  paneer £45.00")
  sum=sum + 45.00
  
console.log(sum)
}
button1.addEventListener("click",onclick2)
// //BUT2
var button2=document.getElementById("button2");

function onclick3(){
  array.push("\n cheddar cheese £45.00")
  sum=sum + 45.00
  
console.log(sum)
}
button2.addEventListener("click",onclick3)
var button3=document.getElementById("button3");

function onclick4(){
  array.push("\n cream chesse £15.00")
  sum=sum+15.00
  
console.log(sum)
}
button3.addEventListener("click",onclick4)

// var button3=document.getElementById("clothingbt4");

// function onclick4(){
//   array.push("\n Gymshark Power Washed Stringer: £25.00")
//   sum=sum+25.00
//   }
// button3.addEventListener("click",onclick4)

var bas=document.getElementById("basket");

function onclick11(){
  basket2.innerHTML="<br><b>"+array+"</b>";
} 
bas.addEventListener("click",onclick11)

var rem=document.getElementById("remove");

function onclick12(){

  // if array.slice(-1)=="Gymshark Dark Grey T-Shirt: £20.00"
  // {
  //   sum=sum-20.00;
  // }
  array.pop();
   basket2.innerHTML="<br><b>"+array+"</b>";
  
} 
rem.addEventListener("click",onclick12)

var button4=document.getElementById("total_pay");
function onclick13(){
  div1_basket.textContent="The total price is £"+sum
  console.log(sum);
}
button4.addEventListener("click",onclick13)


// var btn9=document.getElementById("btn9");
// function validate(){
//   var AccountNumber=document.getElementById("AccountNumber").value;
//   var CardName=document.getElementById("CardName").value;
//   var ExpiryDate=document.getElementById("ExpiryDate").value;
//   if(AccountNumber=="" || CardName=="" || ExpiryDate==""){
//     alert("please fill all fields");
//   }
//   if(AccountNumber<=1000 && password>=9999999999999){
//     info.textContent="Give a valid Account Number"
//   }
//   else{
//      info.textContent=("Infomation is validated");
        
//   }
// }
// btn9.addEventListener("click",validate)