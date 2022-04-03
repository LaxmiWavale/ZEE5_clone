

document.querySelector(".otp").addEventListener("click", loginfunction)

let usersdata= JSON.parse(localStorage.getItem("userdata"))


userloginarr=[]
function loginfunction(){
        let flag=true;
    for(var i=0;i<usersdata.length;i++){
        let phnnmbr= usersdata[i].number;
        // console.log(phnnmbr)
        
        if(phnnmbr== document.querySelector(".number").value){
           flag=false;
           break;
        }
    }if(flag==false){
        window.location.href= "loginotpverify.html"
    }else{
        alert("You don't have an account!")
        window.location.href= "signup.html"
    }

        let userloginobj={

                phoneno:  document.querySelector(".number").value
                     
                }
        userloginarr.push(userloginobj)

                // console.log(userloginarr)

            localStorage.setItem("userarr1", JSON.stringify(userloginarr))
}
            