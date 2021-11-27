let username=document.getElementById("username");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let password=document.getElementById("password");





// -------------------Name-----------------------

function validate(some){
  if(username.value.trim()==""|| username.value==null){
    error1.innerHTML="enter Username :'admin'";
    
    return false;
  }

  if(username.value=="admin"){
    username.style.border="none";
    error1.innerHTML="Valid";
  }
  else{
   
    error1.innerHTML="Please enter Username :'admin'";
    return false;
  }

// --------------------Password----------------------


if (password.value.trim()==""|| password.value ==null){

  error2.innerHTML="Please enter password : 12345";
  password.style.border="1px solid rgb(31, 184, 245)";
  return false;
}
if(password.value=="12345"){
  password.style.border="none";
  error2.innerHTML="Valid";
   some();
  return true;
}
else{
  password.style.border="1px solid rgb(31, 184, 245)";
  error2.innerHTML="Please enter password : 12345";
  return false;
}
}

function display(){


  window.open("mainp.html");
     
}  