var cbox = document.querySelector(".cbox");
var clbtn = document.querySelector(".clbtn");
function show(){
    cbox.style.display="block";
}
function close(){
    cbox.style.display="none";

}
clbtn.addEventListener("click", close); 