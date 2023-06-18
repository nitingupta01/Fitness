function handleRegister(){
    let name=document.getElementById("first-name");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let repassword=document.getElementById("repassword");

    if(name.value==="")
        alert('Please enter name');
    if(email.value==="")
        alert('Please enter email id');
    else if(password.value==="")
        alert('Please enter password');
    else if(repassword.value==="")
        alert('Please enter password');
    else if(password.value!==repassword.value)
        alert('Password Mismatch');
    else 
        alert('You are registered successfully');
}