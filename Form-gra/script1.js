let email= document.getElementById("exampleInputEmail1")
let password = document.getElementById("inputPassword5")

email.addEventListener("input",validateEmail)
function validateEmail(){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
    console.log(email.value)
    email.style.color = "green";
  }else{
    console.log(email.value)
    email.style.color = "red";
  }
}

password.addEventListener("input",validatePassword)
function validatePassword(){
  if (/^[A-Za-z]\w{8,14}$/.test(password.value)){
  password.style.color = "green";
}else{
  password.style.color = "red";
}
}

  function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    email.style.backgroundColor = "green";
  }else{
    email.style.backgroundColor = "red";
    return false;
  }
}
function CheckPassword() { 
  if (/^[A-Za-z]\w{8,14}$/.test(password.value)){
  password.style.backgroundColor = "green";
}else{
  password.style.backgroundColor = "red";
  return false;
}
}
// let Submit1 = document.getElementById("submit1")
// Submit1.addEventListener("input", myFunction())
function myFunction(){
  
  ValidateEmail()
  CheckPassword()
}

// function myfunc(){
//   document.getElementById("demo").innerHTML=frm1.exampleInputEmail1.value
// }
