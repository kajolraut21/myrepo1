


  function ValidateEmail(a) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a))
  {
  }else{
    alert("You have entered an invalid email address!")
  }
    
    
}
function CheckPassword(b) 
{ 
var passw=  /^[A-Za-z]\w{8,14}$/;
if(b.match(passw)) 
{ 

}else{
  alert('You have entered an invalid Password!')
}



}
function myFunction(){
  ValidateEmail(frm1.exampleInputEmail1.value)
  CheckPassword(frm1.inputPassword5.value)
}
