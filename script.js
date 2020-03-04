
function validation(){
    var name = document.getElementById("name").Value;
    var email = document.getElementById("email").Value;
    var subject = document.getElementById("subject").Value;
    var message = document.getElementById("message").Value;
    var error_message = document.getElementById("error_message");
    var text;
     
    
    error_message.style.padding = "15px";

    if (name.length <5){
        text = "Please Enter a Valid Name";  
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length <10){
        text = "Please Enter a Correct Subject";  
        error_message.innerHTML = text;
       
    return false;
}  
if (email.indexOf("@")== -1 || email.length <6 ){
    text = "Please Enter a Valid Email";  
    error_message.innerHTML = text;
    return false;
}

if (message.length <= 80){
    text = "Please Enter More Than 80 Characters";  
    error_message.innerHTML = text;
}
alert("Message submitted successfully!")
return true;
}  

