var button=document.getElementById("button");
var sum=0;
var array = [];

function onclick1(){
  array.push("\n pineapple £30.00");
  sum += 30.00;
  console.log(sum);
}
button.addEventListener("click", onclick1);

var button1=document.getElementById("button1");

function onclick2(){
  array.push("\n Strawberry £45.00");
  sum += 45.00;
  console.log(sum);
}
button1.addEventListener("click", onclick2);

var button2=document.getElementById("button2");

function onclick3(){
  array.push("\n Raspberry £45.00");
  sum += 45.00;
  console.log(sum);
}
button2.addEventListener("click", onclick3);

var button3=document.getElementById("button3");

function onclick4(){
  array.push("\n Blueberry: £15.00");
  sum += 15.00;
  console.log(sum);
}
button3.addEventListener("click", onclick4);

var bas=document.getElementById("basket");

function onclick11(){
  basket2.innerHTML="<br><b>"+array+"</b>";
} 
bas.addEventListener("click", onclick11);

var rem=document.getElementById("remove");

function onclick12(){
  array.pop();
  basket2.innerHTML="<br><b>"+array+"</b>";
} 
rem.addEventListener("click", onclick12);

var button4=document.getElementById("total_pay");
function onclick13(){
  div1_basket.textContent="The total price is £"+sum;
  console.log(sum);
}
button4.addEventListener("click", onclick13);
