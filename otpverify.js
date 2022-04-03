
// alert("jhvlng")

document.querySelector(".otp").addEventListener("click", verifyfunc)

// let usernumber= JSON.parse(localStorage.getItem("userdata"))

let number= JSON.parse(localStorage.getItem("onetimedata"))

// let number1= JSON.parse(localStorage.getItem("userarr"))

number.filter(function (ele){

    document.querySelector(".num").innerHTML= ele.number
    

})

function verifyfunc(){
    
    let getotp= document.querySelector("input").value
    if(getotp==1234){
        alert("sign Up successful")
        window.location.href="login.html"
        
    }else{
        alert("Otp not match")
        // window.location.href="signup.html"
        location.reload()

    }
    // console.log(getotp)
    // location.reload()
    // let loginpage= document.querySelector("input").value
    // if(loginpage==1234){
    //     alert("login successful")
    
    // }else{
    //     alert("login failed")
    // }
}