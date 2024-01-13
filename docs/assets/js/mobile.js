 
// mobile purpose
var isOn = false;
var dis = 0;
var idx = 0;
var isFirst= true;
window.addEventListener(
  "load",
  function () {
    console.log("init mobile");
    firstLoad();
    var main = this.document.getElementById("def");
    var p = 0;
    var d = 0;
    // setData(true);
    main.addEventListener(
      "touchstart",
      function (e) {
        var to = e.changedTouches[0];
        p = parseInt(to.clientX);
        isOn = true;
        e.preventDefault();
      },
      false
    );

    main.addEventListener(
      "touchmove",
      function (e) {
        var to = e.changedTouches[0];
        dis = parseInt(to.clientX - p);
        var di = dis / 10;
        console.log('move',dis, di);
       if(di<1 && di < -50){
        di=-45;
       }
       else if(di>1 && di > 49){
        di = 45
       }
       document.getElementById('img-logo').style.transition = "400ms ease";
        if(di<0){
            document.getElementById('body-content').style.borderBottomRightRadius = "5vw";
        }else if(di> 10){
            document.getElementById('body-content').style.borderBottomLeftRadius = "5vw";
        }
       console.log('swipe ',di)
        document.getElementById('img-logo').style.transform = "translateX("+di+"vw)";
      
        document.getElementById('img-logo').style.scale = "1."+Math.abs(di);

        e.preventDefault();
      },
      false
    );

    main.addEventListener(
      "touchend",
      function (e) {
        isOn = false;
        var c = dis > 90 ? false : dis < -90 ? true : "";
        console.log("ss ", c, dis);
        c === "" ? "" : setData(c);
        document.getElementById('body-content').style.borderBottomLeftRadius = "0vw";
        document.getElementById('body-content').style.borderBottomRightRadius = "0vw";
        document.getElementById('img-logo').style.scale = "1";
        document.getElementById('img-logo').style.transition = "100ms ease-in";
        document.getElementById('img-logo').style.transform = "translateX(0vw)";
        e.preventDefault();
      },
      false
    );
  },
  false
);

// document.getElementById('img-logo')
function setData(n) {
  console.log("d", n, idx);
   idx = n
    ? (idx > 11)
      ? 12 
      : idx+1
    : (idx < 1)
    ? 0
    : idx-1;
    (isFirst)?(idx=0, isFirst=false):"";
  console.log("data", idx);
  document.getElementById("c-title").textContent = data[idx].section;
  document.getElementById("img-cntn").src = data[idx].image;
  document.getElementById("cn-title").innerHTML = data[idx].title;
  document.getElementById("cn-data").innerHTML = data[idx].content;
  document.getElementById("c-title-2").innerHTML ="[ "+idx+" ]";
}
let data = [
  {
    section: "David Mirza",
    title: "Software Developer",
    image: "assets/img/ppf.png",
    content:
      "Stand alone for coding, Experience in developing applications, for web based, mobile based, or desktop based",
  },
  {
    section: "Service",
    title: "Coding",
    image: "assets/img/mbl/coding.svg",
    content: "Acceptable with new programming language",
  },
  {
    section: "Service",
    title: "Rest API",
    image: "assets/img/mbl/web-development.svg",
    content:
      " Create / Maintenace BackEnd Rest API using .Net , PHP, node.js environtment.",
  },

  {
    section: "Service",
    title: "Front End",
    image: "assets/img/mbl/front-end-programming.svg",
    content:
      "Create / Integrating FrontEnd using Html CSS, Angular, IONIC, React Native.",
  },
  {
    section: "Service",
    title: "Mobile Development",
    image: "assets/img/mbl/mobile-development.svg",
    content:
      "Create / Maintenace Mobile Apps using React Native, Angular,IONIC",
  },
  {
    section: "Service",
    title: "Web Development",
    image: "assets/img/mbl/web-development.svg",
    content: "Create / Maintenace Web System using PHP, Angular, ASP.Net",
  },
  {
    section: "Service",
    title: "Desktop Development",
    image: "assets/img/mbl/coding-_2_.svg",
    content:
      "Create / Maintenace Desktop Apps using C# and integrate with API if using Thurd party Device.",
  },
  {
    section: "Project Experience",
    title: "Desktop Apps",
    image: "assets/img/mbl/coding-_2_.svg",
    content: "Building, Maintenace and developing desktop application for image processing for OCR, QR Code, Barcode detection, CRUD data management for label printing or resource management, integrating third party devices for image inspection",
  },
  {
    section: "Project Experience",
    title: "Mobile Apps",
    image: "assets/img/mbl/mobile-development.svg",
    content: "Create mobile applications for human resource management, CRUD production of goods, checking data by reading barcodes, QR codes, OCR. Mostly intended for Android for native development, and for iOS and Android mobile users, development is done using React Native or Angular Ionic",
  },
  {
    section: "Project Experience",
    title: "Back End API",
    image: "assets/img/mbl/web-development.svg",
    content: "Create APIs for e-bidding, warehouse management systems, people management systems, product management systems. Most APIs are created using .net or PHP with a SQL database. There are also those made using NEST.js with a MongoDB database. For case in my GitHub I Already create Backend using Nest.JS, integrated with mongodb, RabbitMQ, Socket.IO",
  },
  {
    section: "Sample Apps",
    title: "",
    image: "",
    content: "The example I have created is on GitHub, because most projects are intended for internal company use.",
  },
  {
    section: "Sample Apps",
    title: "Front End",
    image: "assets/img/mbl/front-end-programming.svg",
    content: "Example FrontEnd using React Native (Study Case E-commerce)<br /> <iframe class='youtube' src='https://www.youtube.com/embed/EBhoLxY8lAI?si=eTtIw-IBMlfVc21a' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  },
  {
    section: "Contact Me",
    title: "Mirza David",
    image: "assets/img/ppf.png",
    content: "<div id='contact'><div class='itemContact'><img src='assets/img/icons8-gmail.svg' /><span>davemirza9@gmail.com</span></div><div class='itemContact'><img src='assets/img/icons8-whatsapp.svg' /><span>+62 85 640 111 632</span></div><div class='itemContact'><img src='assets/img/icons8-github.svg' /><span>github.com/davidmirza</span></div><div class='itemContact'><img src='assets/img/icons8-linkedin.svg' /><span>www.linkedin.com/in/david-mirza/</span></div><div class='itemContact'><span>Thank You</span></div></div>",
  },
  {
    section: "",
    title: "",
    image: " ",
    content: "",
  },
  {
    section: "",
    title: "",
    image: " ",
    content: "",
  },
  {
    section: "",
    title: "",
    image: " ",
    content: "",
  },
  {
    section: "",
    title: "",
    image: " ",
    content: "",
  },
  {
    section: "",
    title: "",
    image: " ",
    content: "",
  },
];
function firstLoad (){
    console.log('init',isFirst);
    if(isFirst){
        setData(true);
      
    }
}
 