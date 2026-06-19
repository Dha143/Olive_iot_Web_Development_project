function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email==="admin@example.com" &&
password==="admin123")
{
window.location="dashboard.html";
}
else
{
document.getElementById("msg").innerHTML=
"Invalid Login";
}

}
