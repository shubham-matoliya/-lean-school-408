let userData=JSON.parse(localStorage.getItem("userData"))||[];
//console.log(userData.number)
let form = document.getElementById("reg");
function save(event){
    event.preventDefault();
    let data = {
        number: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
    }
    if(check(data.email)===true){
        userData.push(data)
        localStorage.setItem("userEmail",JSON.stringify(userData))
        window.location.href = "signupform.html"
    }
    else{
        window.location.href = "password.html"
    }
}

function check(email){
    let filtered = userData.filter((el)=>{
        return email === el.email;
        //console.log(number,el.number)
    })
    if(filtered.length>0){
        return false
    }
    else{
        return true
    }
}