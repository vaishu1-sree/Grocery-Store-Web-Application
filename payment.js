var i=document.getElementById("info");
var btn9=document.getElementById("btn9");
function validate(){
  var AccountNumber=document.getElementById("AccountNumber").value;
  var CardName=document.getElementById("CardName").value;
  var ExpiryMonth=document.getElementById("ExpiryMonth").value;
  var ExpiryYear=document.getElementById("ExpiryYear").value;
  var today=new Date().getMonth()+1;
  var currentyear=new Date().getFullYear()
  console.log(today)
  console.log(currentyear)
  if(AccountNumber=="" || CardName=="" || ExpiryMonth=="" || ExpiryYear==""){
    alert("please fill all fields");
  }

  else if (ExpiryYear < currentyear || (ExpiryYear == currentyear && ExpiryMonth < today)) {
  i.textContent="Your card has already expired"
}

  // if (today>=ExpiryMonth && currentyear > ExpiryYear){
    // i.textContent="Your card has already expired"
  // }

  else if(AccountNumber<=1000 && AccountNumber>=9999999999999){
    i.textContent="Give a valid Account Number"
  }
  else{
     i.textContent=("Payment successful, your items will be with you shortly");
    window.location.href="index.html"

  }
}
btn9.addEventListener("click",validate)