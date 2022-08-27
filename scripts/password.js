let userData=JSON.parse(localStorage.getItem("userName"))||[];
let form = document.getElementById("reg");
function save(event){
    event.preventDefault();
    let data = {
        
        pass: document.getElementById("pass").value,
    }
    if(check(data.pass)==true){
        userData.push(data)
        localStorage.setItem("userName",JSON.stringify(userData))
        window.location.href = "otp.html"
    }
    else{
        alert("Wrong Password")
        window.location.reload()
    }
}

function check(pass){
    let filtered = userData.filter((el)=>{
        return pass = el.pass;
    })
    if(filtered.length>0){
        return false
    }
    else{
        return true
    }
}
