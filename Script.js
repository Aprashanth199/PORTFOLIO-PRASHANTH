// ==============================
// PORTFOLIO SCRIPT
// Author: Alvakonda Prashanth
// ==============================

// ------------------------------
// HAMBURGER MENU
// ------------------------------

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        hamburger.innerHTML = "✖";
    }else{
        hamburger.innerHTML = "☰";
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

hamburger.innerHTML="☰";

});

});

// ------------------------------
// DARK MODE
// ------------------------------

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML="☀️";

localStorage.setItem("theme","dark");

}else{

themeBtn.innerHTML="🌙";

localStorage.setItem("theme","light");

}

};

// Load Saved Theme

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML="☀️";

}

// ------------------------------
// RESUME PLACEHOLDER
// ------------------------------

const resume=document.getElementById("resumeDownload");

resume.addEventListener("click",(e)=>{

e.preventDefault();

alert("Upload assets/resume.pdf later.");

});

// ------------------------------
// PROFILE IMAGE PLACEHOLDER
// ------------------------------

const profile=document.getElementById("profileImage");

profile.onerror=()=>{

profile.src="https://placehold.co/400x400?text=Profile";

};

// ------------------------------
// BLOG DATA
// ------------------------------

const blogs=[

{

title:"My Learning Journey",

date:"15 July 2026",

image:"https://placehold.co/600x350?text=Blog+1",

description:"Started my journey in Web Development and Programming. Learning HTML, CSS and JavaScript."

},

{

title:"Learning Python",

date:"20 July 2026",

image:"https://placehold.co/600x350?text=Blog+2",

description:"Practicing Python fundamentals and improving problem solving skills."

},

{

title:"Freelancing Experience",

date:"25 July 2026",

image:"https://placehold.co/600x350?text=Blog+3",

description:"My experience working remotely with Alpha Auron Private Limited."

}

];

// ------------------------------
// LOAD BLOGS
// ------------------------------

const blogContainer=document.getElementById("blogContainer");

blogs.forEach(blog=>{

blogContainer.innerHTML+=`

<div class="blog-card">

<img src="${blog.image}" class="blog-image">

<div class="blog-content">

<div class="blog-date">

${blog.date}

</div>

<h3>${blog.title}</h3>

<p>${blog.description}</p>

<a href="#" class="read-btn">

Read More

</a>

</div>

</div>

`;

});
// ==============================
// TYPING ANIMATION
// ==============================

const typingElement = document.getElementById("typingText");

const roles = [
"Third Year B.Tech Student",
"Freelancer",
"Aspiring Software Developer",
"Web Development Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){

let current = roles[roleIndex];

if(!deleting){

typingElement.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typingEffect,1500);

return;

}

}else{

typingElement.textContent=current.substring(0,charIndex--);

if(charIndex===0){

deleting=false;

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

}

}

setTimeout(typingEffect,deleting?40:80);

}

typingEffect();


// ==============================
// SCROLL ANIMATION
// ==============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(
".about-card,.info-box,.skill-card,.timeline-item,.experience-card,.project-card,.certificate-card,.achievement-card,.contact-card,.resume-card"
).forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections=document.querySelectorAll("section");
const menuLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-120;

const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.id;

}

});

menuLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==============================
// SCROLL TO TOP BUTTON
// ==============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="topButton";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563eb";
topBtn.style.color="white";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ==============================
// SCROLL PROGRESS BAR
// ==============================

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.width="0%";
progress.style.background="#2563eb";
progress.style.zIndex="9999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});


// ==============================
// CURRENT YEAR
// ==============================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}


// ==============================
// CONTACT FORM
// ==============================

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! This is a demo portfolio. Connect a backend or Formspree later.");

form.reset();

});

}


// ==============================
// CONSOLE MESSAGE
// ==============================

console.log("%cWelcome to Prashanth's Portfolio","color:#2563eb;font-size:22px;font-weight:bold;");

console.log("Designed with HTML, CSS & JavaScript");