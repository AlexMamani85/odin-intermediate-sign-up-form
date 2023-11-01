password=document.querySelector('#password');
confirmPassword=document.querySelector('#password');

function validatePassword(){
  if(password.value != confirmPassword.value) {
    document.querySelector('#password').addclass('error');
    console.log("Son diferentes");
  } else {
    console.log("Son iguales");
  }
}

validatePassword();

password.onChange = validatePassword;
confirmPassword.onChange = validatePassword;