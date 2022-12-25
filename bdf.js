function validation() {
var username = document.getElementById('username').value;
var email = document.getElementById('email').value;
var address = document.getElementById('address').value;
var phonenumber = document.getElementById('phonenumber').value;
const patterns = 
  username = /^[A-Za-z. ]{3,33}$/;
  email= /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})$/;
  address=/^[A-Za-v ,]{8,50}$/i;
  phonenumber = /^[789][0-9]{10}$/;
  
};
 if (usercheck.test (username)){
document.getElementById('usererror').innerHTML = "";
 }else{
    document.getElementById('usererror').innerHTML = "**suername is invalid";
    return false;
 }
 if (emailcheck.test (email)){
    document.getElementById('emailerror').innerHTML = "";
     }else{
        document.getElementById('emailrror').innerHTML = "**email is invalid";
        return false;
     }
     if (usercheck.test (address)){
        document.getElementById('addresserror').innerHTML = "";
         }else{
            document.getElementById('addresserror').innerHTML = "**address is invalid";
            return false;
         }