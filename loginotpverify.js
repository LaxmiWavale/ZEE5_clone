document.querySelector(".otp").addEventListener("click", verifyfunc)

let usersnumber= JSON.parse(localStorage.getItem("userdata"))

let number1= JSON.parse(localStorage.getItem("userarr1"))
// console.log(number1)

number1.filter(function (ele){

    document.querySelector(".num").innerHTML= ele.phoneno

})   

    function verifyfunc(){

        let loginpage= document.querySelector("input").value
            let flag=true;
        for(let i=0;i<usersnumber.length;i++){
            // console.log(usersnumber[i].number)
            if(loginpage==1234 && number1[0].phoneno== usersnumber[i].number ){
                // alert("login successful")
                flag=false;
                break;
            }
            
        }
        if(flag==false){
            // console.log("login successful")
            alert("login successful")
            window.location.href="index.html"
        }else{
            // console.log("login failed")
            alert("OTP Not Matched!")
            location.reload()
        }
        
        
        
    }
