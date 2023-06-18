function handlelogin(){
    let email=document.getElementById("email");
    let password=document.getElementById("password");

    if(email.value==="")
        alert('Please enter email id');
    else if(password.value==="")
        alert('Please enter password');
    else 
        alert('You are logged in successfully');
}