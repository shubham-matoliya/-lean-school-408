let userData = JSON.parse(localStorage.getItem("userData")) || [];
console.log(userData)


let p = document.getElementById("m");
function append(userData){
    p.innerHTML = null;
    userData.filter(el=>{
let div=document.createElement("div");
div.innerHTML = null;
let  mob=document.createElement("p")
mob.innerText=`Enter your otp +91 ${el.number}`;
div.append(mob)
p.append(div)
})
}
append(userData)


function submit(event){
event.preventDefault();
let otp = document.getElementById("otp").value;
console.log("work");
if(otp.length === 6){
alert("Log In Successful")
window.location.href = "index.html"
}else{
alert("Invalid OTp")
}
}