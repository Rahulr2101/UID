var attempt = 3;

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "123"){

window.location = "/index.html"; 
return false;
}
else{
   var chag =  document.getElementById("username")
   var pass = document.getElementById("password")
   pass.style.color = "red";
   var chagtext = document.getElementById("useralert")
   var chagtext2 = document.getElementById("passalert")
   chagtext2.innerHTML = "Incorrect password ";
   chagtext.innerHTML = "Incorrect username ";
    chag.style.color = "red";
attempt --;
alert("You have left "+attempt+" attempt;");

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}