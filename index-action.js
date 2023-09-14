var emailvalidation = document.querySelector("input")
var emailInValide = document.querySelector("#invalid-emal")
var submitButton = document.querySelector(".button")
var errorstyle = document.querySelector("input")
var email_Name = document.querySelector("input").value
    submitButton.addEventListener("click",() =>{
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     
    if(emailvalidation.value.match(pattern)){
        emailInValide.innerHTML="";
        errorstyle.classList.remove("errorstyle");
        document.querySelector(".a1").setAttribute("href","thanku.html");
         return false
    }else{
        emailInValide.innerHTML="valide email required.";
        errorstyle.classList.add("errorstyle");
        return true
    }
})
     document.querySelector(".demo").innerHTML = screenWidth + "px";
    
  

