// creates a function called validate
function validate(){
  // gets element by id for the username and password
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  // checks if there is no input
  if(username=="" || password==""){
    alert("please fill all fields");
  }
  // checks for the correct log in details
  if(username=="a" && password=="a"){
    window.location.href="index.html";
  }
  else{
    alert("invalid login credentials");
  }
}
