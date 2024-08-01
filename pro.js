var cbox = document.querySelector(".cbox");
var clbtn = document.querySelector(".clbtn");
var bg = document.querySelector(".bg");
function show(){
    cbox.style.display="block";
    bg.style.display="block"
}
clbtn.addEventListener("click",function(){
    cbox.style.display="none";
    bg.style.display="none";
}) 
    