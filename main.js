
//  TO CHANGE COLOR OF THE LOGO
const colors = ["rgba(34, 34, 34, 0.753)", "rgba(243, 75, 14, 0.733)", "rgba(214, 75, 75, 0.623) ", "rgba(245, 245, 245, 0.835) "];
const logo = document.querySelector("#logo");

function randomColor(){
    return Math.floor(Math.random() * colors.length);
}
randomColor();


function colorText(){
    let colorChange = colors[randomColor()];
    logo.style.color = colorChange;
}
setInterval(colorText, 1500);




const navBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const exitBtn = document.getElementById("exit");


// load initial to screen
window.addEventListener('DOMContentLoaded', ()=>{
    navLinks.classList.remove('show-links');
    navLinks.style.transitionDuration = "0s";
})

//  TO MAKE THE NAVBTN ACT BOTH WAYS
// navBtn.addEventListener('click', ()=>{
//    console.log(navLinks.classList);

//  technique 1

// if (navLinks.classList.contains('show-links')){
//    navLinks.classList.remove('show-links')
// }
// else{
//     navLinks.classList.add('show-links');
// }
    
// technique 2
// navLinks.classList.toggle('show-links');
    // })


    // TO MAKE THE NAVBTN TO ACT ONE WAY
    navBtn.addEventListener('click', ()=>{
      navLinks.classList.add('show-links');
    navLinks.style.transitionDuration = "1s";

    })


    // TO MAKE THE EXIT BUTTON REMOVE THE NEW CLASS ADDED
    exitBtn.addEventListener('click', ()=>{
       navLinks.classList.remove('show-links');
    navLinks.style.transitionDuration = "1s";

    })


