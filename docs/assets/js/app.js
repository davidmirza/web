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
  console.log("test");
  delayed = !delayed;
  setTimeout(
    () => {
      menu.classList.toggle("delay");
      console.log("1 sec");
    },
    delayed ? 100 : 10
  );
}
// var typed = new Typed('#typed', {
//   strings: ["Software Developer","Rest API","FrontEnd","Mobile Apps","Web Based","Desktop Based"],
//   typeSpeed: 50,
//   backSpeed: 20,
//   loop: true
// });

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

// let section = document.querySelectorAll('section');
// window.onscroll = () => {
//   section.forEach(sc => {
//     let top = window.scrollY + 150;
//     let offset = sc.offsetTop - 15;
//     let height = sc.offsetHeight +150;
//     if(top >=offset && top < offset+height){
//       sc.classList.add('show');
//     }
//     else{
//       sc.classList.remove('show');
//     }
//   })
// }

// const hiddenElement = document.querySelectorAll('.hidden');
// hiddenElement.forEach((el) => observer.observe(el));

function getScroll() {
  console.log("scroll");
}

let dtscroll = document.querySelectorAll("body");
let home = document.getElementById("dt-home");
window.onscroll = () => {
  dtscroll.forEach((bd) => {
    // scrol section

    // end
    let top = window.scrollY;
    let offset = bd.offsetTop - 15;
    let height = bd.offsetHeight + 150;
    if (top > 0 && top < 100) {
      //home.style.transform = "scale(1)";
      console.log("ini 10");
    } else if (top >= 100 && top < 200) {
      document.getElementById("dt-home-1").style.opacity = 1;
      document.getElementById("dt-home-2").style.opacity = 1;
      document.getElementById("dt-home-3").style.opacity = 1;
      document.getElementById("sc-1").style.position = "relative";
      document.getElementById("sc-1").style.opacity=0;
      console.log("ini 100");
    } else if (top >= 200 && top < 300) {
      document.getElementById("dt-home-1").style.opacity = 0.5;
      document.getElementById("dt-home-2").style.opacity = 0.5;
      document.getElementById("dt-home-3").style.opacity = 0.5;
      document.getElementById("sc-1").style.position = "relative";
    } else if (top >= 300 && top < 400) {
      document.getElementById("dt-home-1").style.opacity = 0.1;
      document.getElementById("dt-home-2").style.opacity = 0.1;
      document.getElementById("dt-home-3").style.opacity = 0.1;
      document.getElementById("sc-1").style.position = "relative";
    } else if (top >= 400 && top < 500) {
      document.getElementById("dt-home-1").style.opacity = 0;
      document.getElementById("dt-home-2").style.opacity = 0;
      document.getElementById("dt-home-3").style.opacity = 0;
       document.getElementById("sc-1").style.position = "relative";
    }
    else if(top >= 500 && top < 900){
      document.getElementById("sc-1").style.opacity=1;
      document.getElementById("sc-1").style.transition='all 500ms ease-in';
      document.getElementById("sc-1").style.position = "fixed";
      document.getElementById("sc-1").style.top = "0px";
    }
    else if(top<=500 && top >= 800 && top < 900){
        document.getElementById("sc-1").style.position = "relative";
        document.getElementById("sc-1").style.top = "0px";
       
      }
    // console.log("top")
    console.log("top ", top);
    // console.log(offset)
    // console.log("height ",height)
  });
};
