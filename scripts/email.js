let userData=JSON.parse(localStorage.getItem("userEmail"))||[];
let form=document.querySelector("reg")
function save(event){
event.preventDefault();
console.log("work")
    let data = {
        email: document.getElementById("email").value,
   
};
if (checkEmails(data.email) === true) {
    //userData.push(data);
    // localStorage.setItem("userData", JSON.stringify(userData));
    alert("your email not registered")
    window.location.href = "registered.html"
  } else {
    
    window.location.href = "password.html"
  }
}

function checkEmails(email){
    let filtered=userData.filter((el)=>{
        return email===el.email;
    })
    if(filtered.length>0){
     return false   
    }
    else{
        // window.location.href="index.html";
        return true;
    }
}