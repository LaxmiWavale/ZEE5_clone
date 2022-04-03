
document.querySelector(".otp").addEventListener("click", myfunc)


let userarr= JSON.parse(localStorage.getItem("userdata")) || []
let onetimenum=[]

function myfunc(){
    // event.preventDefault()
    // console.log("you r logging in")
    let userobj={
                number: document.querySelector("input").value

    }
    onetimenum.push(userobj)
    userarr.push(userobj)

    localStorage.setItem("userdata", JSON.stringify(userarr))
    localStorage.setItem("onetimedata", JSON.stringify(onetimenum))

   window.location.href="otpverify.html"
    
}
