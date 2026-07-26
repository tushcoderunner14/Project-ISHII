/* ==========================================================
PROJECT ISHII ❤️
gallery.js
Part 1
==========================================================*/

const scrapbook=document.querySelector("#scrapbook");

const nextBtn=document.querySelector("#nextPage");

const prevBtn=document.querySelector("#prevPage");

let currentPage=0;



/* ==========================================================
PHOTO DATA
==========================================================*/

const scrapbookPages=[

{

left:"assets/photos/1.jpg",

right:"assets/photos/2.jpg",

note:"The day everything started ❤️"

},

{

left:"assets/photos/3.jpg",

right:"assets/photos/4.jpg",

note:"College became beautiful because of you 🌸"

},

{

left:"assets/photos/5.jpg",

right:"assets/photos/6.jpg",

note:"Every smile became my favourite memory ❤️"

},

{

left:"assets/photos/7.jpg",

right:"assets/photos/8.jpg",

note:"You're my happiest place 🐼"

},

{

left:"assets/photos/9.jpg",

right:"assets/photos/10.jpg",

note:"Every adventure with you is magical ✨"

},

{

left:"assets/photos/11.jpg",

right:"assets/photos/12.jpg",

note:"Forever looks beautiful with you ❤️"

},

{

left:"assets/photos/13.jpg",

right:"assets/photos/14.jpg",

note:"Our tiny moments mean everything."

},

{

left:"assets/photos/15.jpg",

right:"assets/photos/16.jpg",

note:"You are my home."

},

{

left:"assets/photos/17.jpg",

right:"assets/photos/18.jpg",

note:"Always choosing you ❤️"

},

{

left:"assets/photos/19.jpg",

right:"assets/photos/20.jpg",

note:"One more beautiful chapter."

},

{

left:"assets/photos/21.jpg",

right:"assets/photos/22.jpg",

note:"Every picture tells our story."

},

{

left:"assets/photos/23.jpg",

right:"assets/photos/24.jpg",

note:"You make ordinary moments unforgettable."

},

{

left:"assets/photos/25.jpg",

right:"assets/photos/26.jpg",

note:"Our love deserves its own movie."

},

{

left:"assets/photos/27.jpg",

right:"assets/photos/28.jpg",

note:"Best friends. Soulmates. Everything."

},

{

left:"assets/photos/29.jpg",

right:"assets/photos/30.jpg",

note:"This is only the beginning ❤️"

}

];



/* ==========================================================
BUILD BOOK
==========================================================*/

function buildBook(){

scrapbook.innerHTML="";

scrapbookPages.forEach((page,index)=>{

const sheet=document.createElement("div");

sheet.className="page";



sheet.innerHTML=`

<div class="page-front">

<div class="photo left">

<img src="${page.left}">

</div>

<div class="photo right">

<img src="${page.right}">

</div>

<div class="memory-note">

${page.note}

</div>

<div class="page-number">

${index+1}

</div>

</div>

`;



scrapbook.appendChild(sheet);

});

}

buildBook();

/* ==========================================================
PROJECT ISHII ❤️
gallery.js
Part 2
Book Navigation + Page Flip
==========================================================*/


const pages=document.querySelectorAll(".page");

let currentSheet=0;



/* ==========================================================
INITIALIZE BOOK
==========================================================*/

function initializeBook(){

pages.forEach((page,index)=>{

page.style.position="absolute";

page.style.width="100%";

page.style.height="100%";

page.style.transformOrigin="left";

page.style.transition=

"transform 1s cubic-bezier(.77,0,.175,1)";

page.style.zIndex=

pages.length-index;

});

}

initializeBook();



/* ==========================================================
OPEN BOOK
==========================================================*/

function openBook(){

scrapbook.classList.add("book-open");

}



/* ==========================================================
NEXT PAGE
==========================================================*/

function nextPage(){

if(currentSheet>=pages.length){

return;

}

const page=pages[currentSheet];

page.classList.add("turned");

page.style.transform="rotateY(-180deg)";

page.style.zIndex=currentSheet;

paperFlip();

pageGlow();

currentSheet++;

updateButtons();

}



/* ==========================================================
PREVIOUS PAGE
==========================================================*/

function previousPage(){

if(currentSheet<=0){

return;

}

currentSheet--;

const page=pages[currentSheet];

page.classList.remove("turned");

page.style.transform="rotateY(0deg)";

page.style.zIndex=

pages.length-currentSheet;

paperFlip();

pageGlow();

updateButtons();

}



/* ==========================================================
BUTTON EVENTS
==========================================================*/

nextBtn.addEventListener("click",()=>{

nextPage();

});



prevBtn.addEventListener("click",()=>{

previousPage();

});



/* ==========================================================
KEYBOARD SUPPORT
==========================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

nextPage();

}

if(e.key==="ArrowLeft"){

previousPage();

}

});



/* ==========================================================
BUTTON STATE
==========================================================*/

function updateButtons(){

prevBtn.disabled=currentSheet===0;

nextBtn.disabled=currentSheet===pages.length;

}



/* ==========================================================
OPEN ON FIRST CLICK
==========================================================*/

scrapbook.addEventListener("click",()=>{

if(!scrapbook.classList.contains("book-open")){

openBook();

}

});



/* ==========================================================
PAGE SHADOW
==========================================================*/

function pageGlow(){

scrapbook.animate([

{

boxShadow:

"0 0 40px rgba(255,182,193,.25)"

},

{

boxShadow:

"0 0 90px rgba(255,105,180,.45)"

},

{

boxShadow:

"0 0 40px rgba(255,182,193,.25)"

}

],{

duration:700

});

}



/* ==========================================================
PAGE SOUND
==========================================================*/

const flipAudio=new Audio(

"assets/music/page-flip.mp3"

);

flipAudio.volume=.45;

function paperFlip(){

flipAudio.currentTime=0;

flipAudio.play().catch(()=>{});

}



/* ==========================================================
AUTO PAGE TURN
==========================================================*/

let autoBook=false;

let autoInterval;



function startBook(){

if(autoBook)return;

autoBook=true;

autoInterval=setInterval(()=>{

if(currentSheet<pages.length){

nextPage();

}else{

clearInterval(autoInterval);

}

},5000);

}



/* ==========================================================
START STORY
==========================================================*/

const storyButton=

document.getElementById("start-story");

if(storyButton){

storyButton.onclick=()=>{

openBook();

startBook();

};

}



/* ==========================================================
PAGE NUMBER
==========================================================*/

const pageCounter=document.createElement("div");

pageCounter.id="pageCounter";

pageCounter.style.position="absolute";

pageCounter.style.bottom="-45px";

pageCounter.style.left="50%";

pageCounter.style.transform="translateX(-50%)";

pageCounter.style.fontSize="18px";

pageCounter.style.fontWeight="600";

pageCounter.style.color="#d63384";

scrapbook.appendChild(pageCounter);



function updatePageCounter(){

pageCounter.innerHTML=

`Page ${Math.min(currentSheet+1,pages.length)} of ${pages.length}`;

}

updatePageCounter();



const oldNext=nextPage;

nextPage=function(){

oldNext();

updatePageCounter();

}



const oldPrevious=previousPage;

previousPage=function(){

oldPrevious();

updatePageCounter();

};



/* ==========================================================
PHOTO CLICK ZOOM
==========================================================*/

document.addEventListener("click",(e)=>{

if(e.target.tagName!=="IMG")return;

if(!e.target.closest(".photo"))return;

e.target.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.15)"

},

{

transform:"scale(1)"

}

],{

duration:500

});

});



/* ==========================================================
END PART 2
==========================================================*/

/* ==========================================================
PROJECT ISHII ❤️
gallery.js
PART 3
Premium Scrapbook Effects
==========================================================*/


/* ==========================================================
DECORATIONS
==========================================================*/

const decorations=[
"🌸",
"❤️",
"💖",
"🐼",
"🐱",
"🥟",
"🍝",
"✨",
"🌷",
"🌼"
];



/* ==========================================================
CREATE STICKERS
==========================================================*/

function addDecorations(){

const allPages=document.querySelectorAll(".page-front");

allPages.forEach(page=>{

for(let i=0;i<8;i++){

const sticker=document.createElement("div");

sticker.className="scrapbookSticker";

sticker.innerHTML=

decorations[

Math.floor(

Math.random()*decorations.length

)

];

sticker.style.position="absolute";

sticker.style.left=

Math.random()*90+"%";

sticker.style.top=

Math.random()*90+"%";

sticker.style.fontSize=

18+

Math.random()*18+

"px";

sticker.style.opacity=.75;

sticker.style.pointerEvents="none";

sticker.style.transform=

`rotate(${Math.random()*360}deg)`;

page.appendChild(sticker);

}

});

}

addDecorations();



/* ==========================================================
MASKING TAPE
==========================================================*/

function addTape(){

document.querySelectorAll(".photo")

.forEach(photo=>{

const tape=document.createElement("div");

tape.className="maskingTape";

tape.style.position="absolute";

tape.style.width="70px";

tape.style.height="24px";

tape.style.background=

"rgba(255,255,220,.75)";

tape.style.top="-10px";

tape.style.left="50%";

tape.style.transform=

"translateX(-50%) rotate(-5deg)";

tape.style.borderRadius="4px";

tape.style.boxShadow=

"0 2px 6px rgba(0,0,0,.15)";

photo.appendChild(tape);

});

}

addTape();



/* ==========================================================
PAPER CLIPS
==========================================================*/

function addPaperClips(){

document.querySelectorAll(".photo")

.forEach(photo=>{

const clip=document.createElement("div");

clip.innerHTML="📎";

clip.className="paperClip";

clip.style.position="absolute";

clip.style.top="-18px";

clip.style.right="-8px";

clip.style.fontSize="22px";

clip.style.transform=

`rotate(${Math.random()*40-20}deg)`;

photo.appendChild(clip);

});

}

addPaperClips();



/* ==========================================================
HANDWRITTEN NOTES
==========================================================*/

const handwritten=[

"You looked adorable ❤️",

"Our first memories",

"I still remember this day",

"Forever starts here",

"My favourite smile",

"You are my peace",

"I wish I could relive this",

"Still butterflies 🦋",

"One of my favourite days",

"I'll always choose you"

];



document.querySelectorAll(".memory-note")

.forEach(note=>{

note.innerHTML+="<br><br>";

const extra=document.createElement("div");

extra.className="extraNote";

extra.style.marginTop="12px";

extra.style.fontFamily="'Caveat',cursive";

extra.style.fontSize="28px";

extra.style.color="#d63384";

extra.innerHTML=

handwritten[

Math.floor(

Math.random()*handwritten.length

)

];

note.appendChild(extra);

});



/* ==========================================================
PANDA PEEK
==========================================================*/

document.querySelectorAll(".page")

.forEach(page=>{

const panda=document.createElement("div");

panda.innerHTML="🐼";

panda.className="peekPanda";

panda.style.position="absolute";

panda.style.bottom="25px";

panda.style.right="-12px";

panda.style.fontSize="46px";

panda.style.transition=".6s";

page.appendChild(panda);

});



/* ==========================================================
PAGE HOVER
==========================================================*/

document.querySelectorAll(".page")

.forEach(page=>{

page.addEventListener("mouseenter",()=>{

page.querySelector(".peekPanda")

.style.transform=

"translateX(-10px)";

});



page.addEventListener("mouseleave",()=>{

page.querySelector(".peekPanda")

.style.transform=

"translateX(0px)";

});

});



/* ==========================================================
FLOATING PETALS
==========================================================*/

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="absolute";

petal.style.left=

Math.random()*100+"%";

petal.style.top="-40px";

petal.style.fontSize=

18+

Math.random()*18+

"px";

petal.style.pointerEvents="none";

petal.style.opacity=.8;

scrapbook.appendChild(petal);

petal.animate([

{

transform:

"translateY(0px) rotate(0deg)"

},

{

transform:

`translate(${Math.random()*150-75}px,900px)
rotate(${Math.random()*720}deg)`

}

],{

duration:

7000+

Math.random()*3000,

iterations:1,

easing:"linear"

});

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,900);



/* ==========================================================
DUST PARTICLES
==========================================================*/

function createDust(){

const dust=document.createElement("div");

dust.style.position="absolute";

dust.style.width="4px";

dust.style.height="4px";

dust.style.borderRadius="50%";

dust.style.background="white";

dust.style.opacity=.5;

dust.style.left=Math.random()*100+"%";

dust.style.top=Math.random()*100+"%";

scrapbook.appendChild(dust);

dust.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-80px)"

}

],{

duration:5000,

iterations:1

});

setTimeout(()=>{

dust.remove();

},5000);

}

setInterval(createDust,350);



/* ==========================================================
DOUBLE CLICK PHOTO ❤️
==========================================================*/

document.querySelectorAll(".photo img")

.forEach(img=>{

img.addEventListener("dblclick",()=>{

heartExplosion(

window.innerWidth/2,

window.innerHeight/2

);

});

});



/* ==========================================================
END PART 3
==========================================================*/

/* ==========================================================
PROJECT ISHII ❤️

gallery.js
PART 4 FINAL

Interactive Scrapbook Experience

==========================================================*/


/* ==========================================================
DRAG PAGE TURN
==========================================================*/


let isDragging=false;

let startX=0;

let currentX=0;



scrapbook.addEventListener(

"mousedown",

(e)=>{


isDragging=true;

startX=e.clientX;


});



document.addEventListener(

"mousemove",

(e)=>{


if(!isDragging)return;


currentX=e.clientX-startX;



const activePage=

pages[currentSheet];



if(activePage && currentX<0){


activePage.style.transform=

`rotateY(${currentX/3}deg)`;

}


});



document.addEventListener(

"mouseup",

()=>{


if(!isDragging)return;


isDragging=false;



if(currentX<-120){


nextPage();


}

else{


const activePage=

pages[currentSheet];


if(activePage){

activePage.style.transform=

"rotateY(0deg)";

}

}


currentX=0;


});



/* ==========================================================
MOBILE SWIPE
==========================================================*/


let touchStart=0;

let touchEnd=0;



scrapbook.addEventListener(

"touchstart",

(e)=>{


touchStart=

e.changedTouches[0].screenX;


});



scrapbook.addEventListener(

"touchend",

(e)=>{


touchEnd=

e.changedTouches[0].screenX;


handleSwipe();


});



function handleSwipe(){


if(touchStart-touchEnd>80){


nextPage();


}


if(touchEnd-touchStart>80){


previousPage();


}


}



/* ==========================================================
LOVE JOURNEY PROGRESS
==========================================================*/


const progressHeart=

document.createElement("div");


progressHeart.id=

"loveProgress";



progressHeart.innerHTML=

`

❤️

<div class="love-bar">

<div class="love-fill"></div>

</div>

`;



gallerySection?.appendChild(progressHeart);



function updateLoveProgress(){


const percent=

(currentSheet/pages.length)*100;


const fill=

document.querySelector(".love-fill");


if(fill){

fill.style.width=

percent+"%";

}

}


const oldNextPage=

nextPage;



nextPage=function(){


oldNextPage();


updateLoveProgress();


};



const oldPrevPage=

previousPage;



previousPage=function(){


oldPrevPage();


updateLoveProgress();


};



/* ==========================================================
FINAL PAGE
==========================================================*/


function createFinalPage(){


const final=

document.createElement("div");


final.className=

"final-page";



final.innerHTML=

`

<div class="final-content">


<h1>

The End ❤️

</h1>


<h2>

But our story is just beginning...

</h2>


<div class="couple-panda">

🐼 ❤️ 🐼

</div>


<p>

Thank you for being my favourite chapter.

</p>


<button id="continueLove">

Open My Letter 💌

</button>


</div>

`;



scrapbook.appendChild(final);



}


createFinalPage();



/* ==========================================================
CHECK LAST PAGE
==========================================================*/


function checkFinalPage(){


if(currentSheet===pages.length){


showFinalCelebration();


}


}



function showFinalCelebration(){


createBlossomStorm();


heartExplosion(

window.innerWidth/2,

window.innerHeight/2

);



birthdayConfetti();


}



/* ==========================================================
BLOSSOM STORM
==========================================================*/


function createBlossomStorm(){


for(let i=0;i<80;i++){


const blossom=

document.createElement("div");


blossom.innerHTML=

"🌸";


blossom.style.position=

"fixed";


blossom.style.left=

Math.random()*100+"vw";


blossom.style.top=

"-50px";


blossom.style.fontSize=

20+

Math.random()*25+

"px";


blossom.style.zIndex=

9999;



document.body.appendChild(blossom);



blossom.animate(

[

{

transform:

"translateY(0) rotate(0deg)",

opacity:1

},

{

transform:

`translateY(110vh)

rotate(720deg)`,

opacity:0

}

],

{


duration:

4000+

Math.random()*4000,


easing:"linear"


}

);



setTimeout(()=>{


blossom.remove();


},8000);



}


}



/* ==========================================================
PANDA COUPLE ANIMATION
==========================================================*/


document.addEventListener(

"DOMContentLoaded",

()=>{


const pandas=

document.querySelector(

".couple-panda"

);



if(pandas){


pandas.animate(

[

{

transform:

"translateX(-20px)"

},

{

transform:

"translateX(20px)"

},

{

transform:

"translateX(-20px)"

}

],

{


duration:3000,


iterations:Infinity

}

);


}


});



/* ==========================================================
FINAL LETTER TRANSITION
==========================================================*/


const continueLove=

document.getElementById(

"continueLove"

);



if(continueLove){


continueLove.onclick=()=>{


document

.querySelector("#letter-section")

.scrollIntoView(

{


behavior:"smooth"


}

);


};


}



/* ==========================================================
PAGE VIEW COUNTER
==========================================================*/


let viewedPages=[];



function savePageView(){


if(!viewedPages.includes(currentSheet)){


viewedPages.push(currentSheet);


console.log(

"Memory page viewed:",

currentSheet+1

);


}


}



setInterval(

savePageView,

1000

);



/* ==========================================================
SCRAPBOOK COMPLETE MESSAGE
==========================================================*/


window.addEventListener(

"beforeunload",

()=>{


localStorage.setItem(

"ishiiPagesViewed",

JSON.stringify(viewedPages)

);


});



console.log(

`

📖 SCRAPBOOK COMPLETE ❤️


15 pages of memories

30 photographs

Unlimited love


Made with love for Ishii ❤️

-Tushar

`

);


/* ==========================================================
END OF GALLERY.JS ❤️
==========================================================*/

