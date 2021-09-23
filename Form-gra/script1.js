let email= document.getElementById("exampleInputEmail1")
let password = document.getElementById("inputPassword5")
let emailText = document.getElementById("emailHelp")
let passwordText = document.getElementById("passwordHelpBlock")
let field_color = email.style.borderColor
let text_color = emailText.style.color



// email.addEventListener("input",validateEmail)
function validateEmail(){ 
  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
    console.log(email.value)
    email.style.borderColor = "red";
    emailText.style.color = "red";
  }else{
    console.log(field_color)
    console.log(rad)
    email.style.borderColor = field_color;
    emailText.style.color = text_color;
  }
}


// password.addEventListener("input",validatePassword)
function validatePassword(){
  if (!(/^[A-Za-z]\w{8,14}$/.test(password.value))){
    console.log(password.value)
  password.style.borderColor = "red";
  passwordText.style.color = "red";
}else{
  email.style.borderColor = field_color;
    emailText.style.color = text_color;
}
}

//   function ValidateEmail() 
// {
//  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))
//   {
//     email.style.backgroundColor = "red";
//     return false;
//   }
// }
// function CheckPassword() { 
//   if (!(/^[A-Za-z]\w{8,14}$/.test(password.value))){
//   password.style.backgroundColor = "red";
//   return false;
// }
// }
let Submit1 = document.getElementById("frm")
Submit1.addEventListener("submit", function(event){
  let count=0;
  if(validateEmail()){
    count+=1
  } 
  if(validatePassword()){
    count+=1
  }
  if(count!=2){
    event.preventDefault()
    return false
  }
})

  
  


// function myfunc(){
//   document.getElementById("demo").innerHTML=frm1.exampleInputEmail1.value
// }
