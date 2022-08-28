let userData=JSON.parse(localStorage.getItem("userName"))||[];
    let form = document.getElementById("reg");
    function save(event){
        event.preventDefault();
        let data = {
            name: document.getElementById("name").value,
            pass: document.getElementById("pass").value,
        }
        if(check(data.name)==true){
            userData.push(data)
            localStorage.setItem("userName",JSON.stringify(userData))
            window.location.href = "otp.html"
        }
        else{
            alert("Name already exist")
            window.location.reload();
        }
    }

    function check(name){
        let filtered = userData.filter((el)=>{
            return name = el.name;
        })
        if(filtered.length>0){
            return false
        }
        else{
            return true
        }
    }