let menu = document.querySelector("#menuBtn");
let nav = document.querySelector("#nav");
let i = document.querySelector("#menu");

let check = 0 ;

menu.addEventListener('click' ,() =>{
   if(check==0){
    nav.style.paddingTop = "50px";
    nav.style.height = "100vh" ;
    i.classList.replace("fa-bars" ,"fa-xmark");
    check = 1 ;
   }
   else{
    nav.style.paddingTop = "0px";
    nav.style.height = "0vh" ;
    i.classList.replace("fa-xmark" , "fa-bars");
    check = 0 ;
   }
})