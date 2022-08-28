let userData=JSON.parse(localStorage.getItem("userData"))||[];
let form=document.querySelector("form")
function save(event){
event.preventDefault();
console.log("work")
    let data = {
    number:form.number.value,
   
};
if (checkEmails(data.number) === true) {
    userData.push(data);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("New User")
    window.location.href = "registered.html"
  } else {
    window.location.href = "otp.html"
  }
}

function checkEmails(number){
    let filtered=userData.filter((el)=>{
        return number===el.number;
    })
    if(filtered.length>0){
     return false   
    }
    else{
        // window.location.href="index.html";
        return true;
    }
}
