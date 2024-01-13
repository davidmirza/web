//window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }
let delayed = false;
function openMenu() {
const icon = document.querySelector(".togle-menu");  
const menu = document.querySelector(".nav-menu-mobile"); 
menu.classList.toggle("open");
icon.classList.toggle("open");
console.log("test")
delayed=!delayed;
setTimeout(() => {
  menu.classList.toggle("delay");
  console.log("1 sec")
}, (delayed)?100:10);
}
var typed = new Typed('#typed', {
  strings: ["Software Developer","Rest API","FrontEnd","Mobile Apps","Web Based","Desktop Based"],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true
});

// const observer  = new IntersectionObserver((entries) =>{
//   entries.forEach((entry) =>{
//     if(entry.isIntersecting){
//       entry.target.classList.add('show');
//     }
//     else{
//       entry.target.classList.add('hidden');
//     }
//   })
// })


let section = document.querySelectorAll('section');
window.onscroll = () => {
  section.forEach(sc => {
    let top = window.scrollY +150;
    let offset = sc.offsetTop - 15;
    let height = sc.offsetHeight +150;
    if(top >=offset && top < offset+height){
      sc.classList.add('show');
    }
    else{
      sc.classList.remove('show');
    }
  })
}

const hiddenElement = document.querySelectorAll('.hidden');
//hiddenElement.forEach((el) => observer.observe(el));


function getScroll(){
  console.log('scroll')
}

