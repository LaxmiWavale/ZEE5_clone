/* split screen code*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



/*******************row1 video part*********************** */

document.querySelector(".row2").addEventListener("click",videoplay)

function videoplay(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r1v2").addEventListener("click",videoplay2)

function videoplay2(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r1v3").addEventListener("click",videoplay3)

function videoplay3(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r1v4").addEventListener("click",videoplay4)

function videoplay4(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r1v5").addEventListener("click",videoplay5)

function videoplay5(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r2v1").addEventListener("click",videoplay6)

function videoplay6(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r2v2").addEventListener("click",videoplay7)

function videoplay7(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r2v3").addEventListener("click",videoplay8)

function videoplay8(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r2v4").addEventListener("click",videoplay9)

function videoplay9(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r2v5").addEventListener("click",videoplay10)
function videoplay10(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r3v1").addEventListener("click",videoplay11)
function videoplay11(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r3v2").addEventListener("click",videoplay12)
function videoplay12(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r3v3").addEventListener("click",videoplay13)
function videoplay13(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r3v4").addEventListener("click",videoplay14)
function videoplay14(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r3v5").addEventListener("click",videoplay15)
function videoplay15(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r4v1").addEventListener("click",videoplay16)
function videoplay16(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}


document.querySelector(".r4v2").addEventListener("click",videoplay17)
function videoplay17(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r4v3").addEventListener("click",videoplay18)
function videoplay18(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r4v4").addEventListener("click",videoplay19)
function videoplay19(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}

document.querySelector(".r4v5").addEventListener("click",videoplay20)
function videoplay20(){
    console.log(" Hi Ramya Priya")
    window.location="playing.html"
}