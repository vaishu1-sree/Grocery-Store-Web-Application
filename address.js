var i=document.getElementById("infor");
var Confirm=document.getElementById("Confirm");
function validation(){
  var DoorNumber=document.getElementById("DoorNumber").value;
  var Road=document.getElementById("Road").value;
  var City_Town=document.getElementById("CityTown").value;
  var Postcode=document.getElementById("Postcode").value;

  if(DoorNumber=="" || Road=="" || City_Town=="" || Postcode==""){
    alert("please fill all fields");
  }

    
  else{
    window.location.href="payment.html"
        
  }
}
Confirm.addEventListener("click",validation)