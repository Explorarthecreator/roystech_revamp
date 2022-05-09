

var slideIndex = 1;
showSlide(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("testimonialContainer");
  var dots = document.getElementsByClassName("dot");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

 




const typedTextSpan = document.querySelector(".typed-text")
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-End Development","Software-Development","Consultancy","UI/UX Design", "Management System","Web Development"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay= 2000;
let textArrayIndex =0;
let charIndex = 0;


function type(){
    if(charIndex < textArray[textArrayIndex].length){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase(){
    if(charIndex > 0){
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent= textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    if(textArray.length)setTimeout(type, newTextDelay + 250);
})