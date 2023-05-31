
//DISABLED RIGHT CLICK

$(document).ready(function(){
  $('body').bind('cut copy paste',function (e){
    e.preventDefault();
  })
  $("body").on("contextmenu",function(e){
    return false;
  })
})

// TEXT TYPING EFFECT

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Content Creator  ", "Freelancer  ", "FS Developer  ", "Programmer  "];
const typingDelay = 150;
const erasingDelay = 50;
const newTextDelay = 50;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// EMAIL FUNCTION

const sendEmail = () => {
  Email.send({
    Host: "smtp.yourisp.com",
    Username: "username",
    Password: "password",
    To: 'them@website.com',
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body"
  }).then(
    alert("Message sent successfully")
  );
}


// TWAK

// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//     (function(){
//     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//     s1.async=true;
//     s1.src='https://embed.tawk.to/629dbb93b0d10b6f3e75e392/1g4s29eum';
//     s1.charset='UTF-8';
//     s1.setAttribute('crossorigin','*');
//     s0.parentNode.insertBefore(s1,s0);
//     })();



//auto scroll

let scrollerID;
let paused = true;
let speed = 3; 
let interval = speed *5;

function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0, 20);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          clearInterval(scrollerID);
          clearInterval(id);
        }
    });
}


//toast

const closeFunc = () => {
  $(".notf").fadeOut();
}
window.onload = () =>{

  let timeout=5000;
  setTimeout(() => {
    closeFunc();
  }, timeout);
}

//scroll spy


let home=document.querySelector("#home1");
let about=document.querySelector("#about");
let skills=document.querySelector("#skills");
let services=document.querySelector("#services");
let project=document.querySelector("#projects");
let contact=document.querySelector("#contact");

window.addEventListener("scroll",()=>{
  var windo = window.pageYOffset;
  
  if(about.offsetTop <= windo && skills.offsetTop >windo){
    
    console.log("ABOUT SECTION");
    
    document.querySelector(".nav-about").style.display="inline-block";
    document.querySelector(".nav-home").style.display="none";
    document.querySelector(".nav-skills").style.display="none";
    document.querySelector(".nav-services").style.display="none";
    document.querySelector(".nav-projects").style.display="none";
    document.querySelector(".nav-contact").style.display="none";

    document.querySelector(".about").setAttribute("id","active");
    document.querySelector(".skills").removeAttribute("id","active");
    document.querySelector(".services").removeAttribute("id","active");
    document.querySelector(".project").removeAttribute("id","active");
    document.querySelector(".contact").removeAttribute("id","active");
    document.querySelector(".home1").removeAttribute("id","active");

  }
  else if(skills.offsetTop <= windo && services.offsetTop >windo){
    console.log("SKILLS SECTION");

    document.querySelector(".nav-skills").style.display="inline-block";
    document.querySelector(".nav-home").style.display="none";
    document.querySelector(".nav-about").style.display="none";
    document.querySelector(".nav-services").style.display="none";
    document.querySelector(".nav-projects").style.display="none";
    document.querySelector(".nav-contact").style.display="none";

    document.querySelector(".skills").setAttribute("id","active");
    document.querySelector(".about").removeAttribute("id","active");
    document.querySelector(".services").removeAttribute("id","active");
    document.querySelector(".project").removeAttribute("id","active");
    document.querySelector(".contact").removeAttribute("id","active");
    document.querySelector(".home1").removeAttribute("id","active");

  }else if(services.offsetTop <= windo && project.offsetTop >windo){
    console.log("SERVICES SECTION");


    document.querySelector(".nav-services").style.display="inline-block";
    document.querySelector(".nav-home").style.display="none";
    document.querySelector(".nav-skills").style.display="none";
    document.querySelector(".nav-about").style.display="none";
    document.querySelector(".nav-projects").style.display="none";
    document.querySelector(".nav-contact").style.display="none";

    document.querySelector(".services").setAttribute("id","active");
    document.querySelector(".skills").removeAttribute("id","active");
    document.querySelector(".about").removeAttribute("id","active");
    document.querySelector(".project").removeAttribute("id","active");
    document.querySelector(".contact").removeAttribute("id","active");
    document.querySelector(".home1").removeAttribute("id","active");

  }
  
  else if(project.offsetTop <= windo && contact.offsetTop >windo){
    console.log("PROJECTS SECTION");


    document.querySelector(".nav-projects").style.display="inline-block";
    document.querySelector(".nav-home").style.display="none";
    document.querySelector(".nav-skills").style.display="none";
    document.querySelector(".nav-services").style.display="none";
    document.querySelector(".nav-about").style.display="none";
    document.querySelector(".nav-contact").style.display="none";

    document.querySelector(".project").setAttribute("id","active");
    document.querySelector(".about").removeAttribute("id","active");
    document.querySelector(".services").removeAttribute("id","active");
    document.querySelector(".skills").removeAttribute("id","active");
    document.querySelector(".contact").removeAttribute("id","active");
    document.querySelector(".home1").removeAttribute("id","active");

  }else if(contact.offsetTop <= windo){
    console.log("CONTACT SECTION");

    document.querySelector(".nav-contact").style.display="inline-block";
    document.querySelector(".nav-home").style.display="none";
    document.querySelector(".nav-skills").style.display="none";
    document.querySelector(".nav-services").style.display="none";
    document.querySelector(".nav-projects").style.display="none";
    document.querySelector(".nav-about").style.display="none";

    document.querySelector(".contact").setAttribute("id","active");
    document.querySelector(".about").removeAttribute("id","active");
    document.querySelector(".services").removeAttribute("id","active");
    document.querySelector(".project").removeAttribute("id","active");
    document.querySelector(".skills").removeAttribute("id","active");
    document.querySelector(".home1").removeAttribute("id","active");
  }else{
    console.log("HOME SECTION");

    document.querySelector(".nav-home").style.display="inline-block";
    document.querySelector(".nav-about").style.display="none";
    document.querySelector(".nav-skills").style.display="none";
    document.querySelector(".nav-services").style.display="none";
    document.querySelector(".nav-projects").style.display="none";
    document.querySelector(".nav-contact").style.display="none";

    document.querySelector(".home1").setAttribute("id","active");
    document.querySelector(".about").removeAttribute("id","active");
    document.querySelector(".services").removeAttribute("id","active");
    document.querySelector(".project").removeAttribute("id","active");
    document.querySelector(".skills").removeAttribute("id","active");
    document.querySelector(".contact").removeAttribute("id","active");

  }

})

// MOBILE NAV

const indicator = document.querySelector("[data-indicator]")

document.addEventListener("click", e => {
  let anchor
  if (e.target.matches("a")) {
    anchor = e.target
  } else {
    anchor = e.target.closest("a")
  }
  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")]
    const index = allAnchors.indexOf(anchor)
    indicator.style.setProperty("--position", index)
    document.querySelectorAll("a").forEach(elem => {
      elem.classList.remove("active")
    })
    anchor.classList.add("active")
  }
})


// MOBILE HEADER SOCIAL LINKS TOGGLE

let menuToggle = document.querySelector('.toggleSocial');
let menu = document.querySelector('.mobSocial');
menuToggle.onclick = function () {
  menu.classList.toggle('activeOne')
  menuToggle.classList.toggle('activeOne')
}