/* ==========================================================
PROJECT ISHII ❤️
script.js
==========================================================*/


/* ==========================================================
DOM
==========================================================*/

const loader=document.getElementById("loader");

const intro=document.getElementById("intro");

const hero=document.getElementById("hero");

const openButton=document.getElementById("openButton");

const journeyButton=document.getElementById("journey-btn");

const backgroundMusic=document.getElementById("backgroundMusic");

const birthdayVideo=document.getElementById("birthday-video");

const typewriter=document.getElementById("typewriter");

const envelope=document.getElementById("envelope");



/* ==========================================================
LOVE LETTER
==========================================================*/

const loveLetter=`

My Dearest Ishii,

Happy Birthday to the most beautiful soul I have ever met.

If someone asked me what the best decision of my life was,
it would simply be meeting you.

You entered my life when we were just two college students,
and somehow you became the reason behind every dream I dared to chase.

Every achievement,
every success,
every smile that I wear today...

has a little bit of you hidden inside it.

You believed in me
even when I doubted myself.

You stood beside me
when life wasn't easy.

You celebrated every tiny victory with me.

You held my hand
through every difficult phase.

Today...

we have graduated together.

We work together.

We laugh together.

We dream together.

And I still fall in love with you
a little more every single day.

Thank you for making me a better person.

Thank you for loving me.

Thank you for choosing me.

Happy Birthday My Love ❤️

Forever Yours,

Tushar ❤️

`;



/* ==========================================================
WINDOW LOAD
==========================================================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},800);

},2200);

});



/* ==========================================================
OPEN SURPRISE
==========================================================*/

openButton.addEventListener("click",()=>{

envelope.classList.add("envelope-open");

playMusic();

setTimeout(()=>{

hero.scrollIntoView({

behavior:"smooth"

});

},1400);

});



/* ==========================================================
JOURNEY BUTTON
==========================================================*/

journeyButton.addEventListener("click",()=>{

document
.getElementById("video-section")
.scrollIntoView({

behavior:"smooth"

});

});



/* ==========================================================
BACKGROUND MUSIC
==========================================================*/

function playMusic(){

backgroundMusic.volume=.25;

backgroundMusic.play().catch(()=>{});

}



function stopMusic(){

backgroundMusic.pause();

}



function resumeMusic(){

backgroundMusic.play().catch(()=>{});

}



/* ==========================================================
VIDEO CONTROL
==========================================================*/

birthdayVideo.addEventListener("play",()=>{

stopMusic();

});



birthdayVideo.addEventListener("pause",()=>{

resumeMusic();

});



birthdayVideo.addEventListener("ended",()=>{

resumeMusic();

});



/* ==========================================================
TYPEWRITER
==========================================================*/

let currentLetter=0;



function typeWriter(){

if(currentLetter>=loveLetter.length){

return;

}

typewriter.innerHTML+=loveLetter.charAt(currentLetter);

currentLetter++;

setTimeout(typeWriter,28);

}



const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeWriter();

observer.disconnect();

}

});

});



observer.observe(document.querySelector("#letter-section"));



/* ==========================================================
FLOATING HEARTS
==========================================================*/

function createHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

const hearts=[

"❤️",

"💖",

"💕",

"💗",

"💓"

];

heart.innerHTML=

hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=

20+

Math.random()*25+

"px";

heart.style.animationDuration=

6+

Math.random()*5+

"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}



setInterval(createHeart,900);



/* ==========================================================
SPARKLES
==========================================================*/

function sparkle(){

const spark=document.createElement("div");

spark.className="sparkle";

spark.style.left=Math.random()*100+"vw";

spark.style.top=Math.random()*100+"vh";

spark.style.animationDuration=

2+

Math.random()*3+

"s";

document.body.appendChild(spark);

setTimeout(()=>{

spark.remove();

},5000);

}



setInterval(sparkle,350);



/* ==========================================================
REVEAL
==========================================================*/

const revealElements=

document.querySelectorAll(

".section-heading,.memory-card,.timeline-item,.counter-card,.letter-paper,.reason-card"

);



const revealObserver=

new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("appear");

}

});

},{

threshold:.15

});



revealElements.forEach(el=>{

revealObserver.observe(el);

});



/* ==========================================================
SMOOTH SCROLL
==========================================================*/

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

});

});



/* ==========================================================
RANDOM FLOATING EMOJIS
==========================================================*/

const floatingItems=[

"🐼",

"🐱",

"🥟",

"🍝",

"🌸",

"💖"

];



function randomEmoji(){

const emoji=document.createElement("div");

emoji.className="floating";

emoji.innerHTML=

floatingItems[

Math.floor(

Math.random()*floatingItems.length

)

];

emoji.style.position="fixed";

emoji.style.left=Math.random()*100+"vw";

emoji.style.top="110vh";

emoji.style.fontSize=

24+

Math.random()*20+

"px";

emoji.style.pointerEvents="none";

emoji.style.zIndex="2";

emoji.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-130vh) rotate(360deg)"

}

],{

duration:

9000+

Math.random()*5000,

iterations:1

});

document.body.appendChild(emoji);

setTimeout(()=>{

emoji.remove();

},15000);

}



setInterval(randomEmoji,2500);



/* ==========================================================
END PART 1
==========================================================*/
/* ==========================================================
PROJECT ISHII ❤️
script.js PART 2
Gallery • Lightbox • Reasons • Counter
==========================================================*/


/* ==========================================================
PHOTO GALLERY
==========================================================*/

const memoryBook=document.getElementById("memory-book");

const template=document.getElementById("memory-template");

const captions=[

"Our first smile ❤️",
"You make every moment beautiful ❤️",
"College memories 🎓",
"My favourite person 🌸",
"Our happiest day 💕",
"Forever together 🐼",
"You & Me ❤️",
"Cute overload 🐱",
"My home ❤️",
"Our adventure ✨",
"You are magic 🌸",
"Love forever ❤️",
"Coffee date ☕",
"Movie night 🎬",
"Birthday memories 🎂",
"Our trip 🏔️",
"My sunshine ☀️",
"Best hug ever 🤍",
"My lucky charm 🍀",
"Always us ❤️",
"My safe place 🏡",
"Your smile >> ❤️",
"Endless laughter 😂",
"Our dream ❤️",
"Beautiful together 💖",
"Forever mine ❤️",
"My happiness 🌸",
"Every heartbeat ❤️",
"Thank you ❤️",
"I Love You ❤️"

];

for(let i=1;i<=30;i++){

const clone=template.content.cloneNode(true);

clone.querySelector(".memory-image").src=

`assets/photos/${i}.jpg`;

clone.querySelector(".memory-caption").innerHTML=

captions[i-1];

memoryBook.appendChild(clone);

}



/* ==========================================================
LIGHTBOX
==========================================================*/

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightbox-image");

const lightboxCaption=document.getElementById("lightbox-caption");

const closeLightbox=document.getElementById("close-lightbox");



document.addEventListener("click",(e)=>{

if(e.target.classList.contains("memory-image")){

lightbox.style.display="flex";

lightboxImage.src=e.target.src;

lightboxCaption.innerHTML=

e.target.parentElement.nextElementSibling.innerHTML;

}

});



closeLightbox.onclick=()=>{

lightbox.style.display="none";

};



lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};



/* ==========================================================
100 REASONS
==========================================================*/

const reasons=[

"You smile.",
"You laugh.",
"You care.",
"You believe in me.",
"You motivate me.",
"You trust me.",
"You are beautiful.",
"You are kind.",
"You are patient.",
"You understand me.",
"You forgive me.",
"You support me.",
"You inspire me.",
"You are my peace.",
"You make life colourful.",
"You are funny.",
"You are cute.",
"You hug the best.",
"You make me strong.",
"You accept me.",
"You make me better.",
"You are my home.",
"You are my happiness.",
"You love deeply.",
"You dream big.",
"You make ordinary moments special.",
"You respect everyone.",
"You are intelligent.",
"You are hardworking.",
"You are my soulmate."

];

const reasonsGrid=document.getElementById("reasons-grid");

for(let i=0;i<100;i++){

const card=document.createElement("div");

card.className="reason-card";

card.innerHTML="❤️";

card.dataset.reason=

reasons[i%reasons.length];

card.onclick=function(){

this.innerHTML=this.dataset.reason;

this.style.fontSize=".9rem";

this.style.padding="12px";

};

reasonsGrid.appendChild(card);

}



/* ==========================================================
LOVE COUNTER
==========================================================*/

/* CHANGE THIS DATE */

const relationshipDate=

new Date("2022-09-15T00:00:00");



function updateCounter(){

const now=new Date();

const diff=now-relationshipDate;

const days=Math.floor(diff/86400000);

const hours=Math.floor(diff/3600000)%24;

const minutes=Math.floor(diff/60000)%60;

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

}

updateCounter();

setInterval(updateCounter,60000);



/* ==========================================================
SECRET PANDA
==========================================================*/

const secret=document.getElementById("secret-message");

const secretText=document.getElementById("secret-text");

const closeSecret=document.getElementById("close-secret");



const pandaMessages=[

"You are my favourite human ❤️",

"I'll love you forever 🐼",

"Thank you for making Tushar happy ❤️",

"You deserve the happiest birthday ever 🎂",

"You are the cutest girl alive 🌸"

];



document.getElementById("panda").onclick=()=>{

secret.style.display="flex";

secretText.innerHTML=

pandaMessages[

Math.floor(

Math.random()*pandaMessages.length

)

];

};



closeSecret.onclick=()=>{

secret.style.display="none";

};



/* ==========================================================
CONFETTI
==========================================================*/

function birthdayConfetti(){

confetti({

particleCount:220,

spread:160,

origin:{y:.6}

});

}



/* ==========================================================
AUTO CONFETTI
==========================================================*/

setTimeout(()=>{

birthdayConfetti();

},3500);



/* ==========================================================
SCROLL PROGRESS
==========================================================*/

const progress=document.createElement("div");

progress.id="progressBar";

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="6px";

progress.style.background="#ff5fa2";

progress.style.zIndex="999999";

document.body.appendChild(progress);



window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const current=

window.scrollY;

progress.style.width=

(current/total)*100+"%";

});



/* ==========================================================
TITLE EFFECT
==========================================================*/

const titles=[

"❤️ Happy Birthday Ishii ❤️",

"🐼 I Love You ❤️",

"🌸 Forever Us ❤️"

];

let titleIndex=0;

setInterval(()=>{

document.title=titles[titleIndex];

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

},2500);



/* ==========================================================
END PART 2
==========================================================*/

/* ==========================================================
PROJECT ISHII ❤️
script.js PART 3
Cake • Fireworks • Final Letter • Mouse Effects
==========================================================*/


/* ==========================================================
CAKE CANDLES
==========================================================*/

const candles=document.querySelectorAll(".candle");

let blownCandles=0;

candles.forEach(candle=>{

    candle.addEventListener("click",()=>{

        if(candle.classList.contains("blown")) return;

        candle.classList.add("blown");

        blownCandles++;

        const flame=candle.querySelector(".flame");

        flame.style.opacity="0";

        flame.style.transform="translateX(-50%) scale(0)";

        confetti({

            particleCount:40,

            spread:70,

            origin:{
                x:Math.random(),
                y:0.4
            }

        });

        if(blownCandles===candles.length){

            setTimeout(showWishScreen,1000);

        }

    });

});



/* ==========================================================
SHOW WISH SCREEN
==========================================================*/

function showWishScreen(){

    const wish=document.getElementById("wish-screen");

    wish.style.display="flex";

    celebration.play();

    stopMusic();

    launchFireworks();

    setTimeout(()=>{

        wish.style.opacity="0";

        setTimeout(()=>{

            wish.style.display="none";

            resumeMusic();

        },1500);

    },6000);

}



/* ==========================================================
FIREWORKS
==========================================================*/

function launchFireworks(){

    let duration=5000;

    let animationEnd=Date.now()+duration;

    let interval=setInterval(function(){

        confetti({

            particleCount:8,

            angle:60,

            spread:70,

            origin:{x:0}

        });

        confetti({

            particleCount:8,

            angle:120,

            spread:70,

            origin:{x:1}

        });

        if(Date.now()>animationEnd){

            clearInterval(interval);

        }

    },250);

}



/* ==========================================================
FINAL ENVELOPE
==========================================================*/

const finalEnvelope=document.getElementById("final-envelope");

const openFinalButton=document.getElementById("open-final-letter");



openFinalButton.addEventListener("click",()=>{

    finalEnvelope.classList.add("envelope-open");

    finalEnvelope.querySelector(".final-envelope-flap").style.transform="rotateX(180deg)";

    finalEnvelope.querySelector(".final-letter").style.transform="translateY(-180px)";

    birthdayConfetti();

});



/* ==========================================================
HEART TRAIL
==========================================================*/

document.addEventListener("mousemove",(e)=>{

    if(Math.random()>.4) return;

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.pointerEvents="none";

    heart.style.fontSize="18px";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    heart.animate([

        {

            transform:"translateY(0px) scale(1)",

            opacity:1

        },

        {

            transform:"translateY(-80px) scale(.3)",

            opacity:0

        }

    ],{

        duration:1200,

        easing:"ease-out"

    });

    setTimeout(()=>{

        heart.remove();

    },1200);

});



/* ==========================================================
PARALLAX EFFECT
==========================================================*/

window.addEventListener("scroll",()=>{

    const scroll=window.scrollY;

    const background=document.querySelector(".gradient-layer");

    if(background){

        background.style.transform=

        `translateY(${scroll*0.15}px)`;

    }

});



/* ==========================================================
AUTO STORY MODE
==========================================================*/

let autoStory=false;

let autoInterval;



function startStoryMode(){

    if(autoStory) return;

    autoStory=true;

    autoInterval=setInterval(()=>{

        window.scrollBy({

            top:2,

            behavior:"smooth"

        });

        if(window.innerHeight+window.scrollY>=document.body.scrollHeight){

            clearInterval(autoInterval);

        }

    },40);

}



/* ==========================================================
KEYBOARD SHORTCUT
Press S to start automatic story
==========================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="s"||e.key==="S"){

        startStoryMode();

    }

});



/* ==========================================================
BACKGROUND MUSIC FADE
==========================================================*/

function fadeMusic(target){

    let interval=setInterval(()=>{

        if(backgroundMusic.volume>target){

            backgroundMusic.volume-=0.02;

        }else{

            clearInterval(interval);

        }

    },100);

}



function increaseMusic(){

    let interval=setInterval(()=>{

        if(backgroundMusic.volume<0.25){

            backgroundMusic.volume+=0.02;

        }else{

            clearInterval(interval);

        }

    },100);

}



/* ==========================================================
PAGE VISIBILITY
==========================================================*/

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        backgroundMusic.pause();

    }else{

        backgroundMusic.play().catch(()=>{});

    }

});



/* ==========================================================
5 MINUTE SURPRISE
==========================================================*/

setTimeout(()=>{

    birthdayConfetti();

    alert(

`❤️

Thank you for staying till the end.

I hope this tiny surprise made you smile.

I love you forever Ishii ❤️

- Tushar`

);

},300000);



/* ==========================================================
DOUBLE CLICK HEART BURST
==========================================================*/

document.addEventListener("dblclick",(e)=>{

    confetti({

        particleCount:120,

        spread:120,

        origin:{

            x:e.clientX/window.innerWidth,

            y:e.clientY/window.innerHeight

        }

    });

});



/* ==========================================================
SCROLL TO TOP
==========================================================*/

const topButton=document.createElement("button");

topButton.innerHTML="❤️";

topButton.id="topButton";

topButton.style.position="fixed";

topButton.style.bottom="30px";

topButton.style.right="30px";

topButton.style.width="60px";

topButton.style.height="60px";

topButton.style.borderRadius="50%";

topButton.style.display="none";

topButton.style.zIndex="9999";

document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{

    if(window.scrollY>600){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});



topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



/* ==========================================================
END PART 3
==========================================================*/
/* ==========================================================
PROJECT ISHII ❤️
script.js PART 4
Particles • Mouse • Background • Easter Eggs
==========================================================*/


/* ==========================================================
MOUSE GLOW
==========================================================*/

const mouseGlow=document.createElement("div");

mouseGlow.id="mouseGlow";

mouseGlow.style.position="fixed";
mouseGlow.style.width="250px";
mouseGlow.style.height="250px";
mouseGlow.style.borderRadius="50%";
mouseGlow.style.pointerEvents="none";
mouseGlow.style.background="radial-gradient(circle, rgba(255,182,193,.35), transparent)";
mouseGlow.style.zIndex="0";
mouseGlow.style.filter="blur(40px)";

document.body.appendChild(mouseGlow);

document.addEventListener("mousemove",(e)=>{

mouseGlow.style.left=(e.clientX-125)+"px";
mouseGlow.style.top=(e.clientY-125)+"px";

});



/* ==========================================================
RANDOM STARS
==========================================================*/

const starContainer=document.createElement("div");

starContainer.id="stars";

document.body.appendChild(starContainer);

function createStar(){

const star=document.createElement("span");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(10+Math.random()*12)+"px";

star.style.opacity=.4+Math.random()*.6;

star.style.pointerEvents="none";

star.style.animation="twinkle 3s infinite";

starContainer.appendChild(star);

setTimeout(()=>{

star.remove();

},12000);

}

setInterval(createStar,400);



/* ==========================================================
FLOATING PANDAS
==========================================================*/

function createPanda(){

const panda=document.createElement("div");

panda.innerHTML="🐼";

panda.style.position="fixed";

panda.style.bottom="-100px";

panda.style.left=Math.random()*100+"vw";

panda.style.fontSize="40px";

panda.style.pointerEvents="none";

panda.style.zIndex="1";

document.body.appendChild(panda);

panda.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-120vh)"

}

],{

duration:22000,

iterations:1

});

setTimeout(()=>{

panda.remove();

},22000);

}

setInterval(createPanda,18000);



/* ==========================================================
FLOATING MOMOS
==========================================================*/

function createMomo(){

const momo=document.createElement("div");

momo.innerHTML="🥟";

momo.style.position="fixed";

momo.style.left=Math.random()*100+"vw";

momo.style.bottom="-80px";

momo.style.fontSize="32px";

momo.style.pointerEvents="none";

document.body.appendChild(momo);

momo.animate([

{

transform:"translateY(0px) rotate(0deg)"

},

{

transform:"translateY(-120vh) rotate(720deg)"

}

],{

duration:17000,

iterations:1

});

setTimeout(()=>{

momo.remove();

},17000);

}

setInterval(createMomo,9000);



/* ==========================================================
FLOATING PASTA
==========================================================*/

function createPasta(){

const pasta=document.createElement("div");

pasta.innerHTML="🍝";

pasta.style.position="fixed";

pasta.style.right=Math.random()*100+"vw";

pasta.style.bottom="-60px";

pasta.style.fontSize="30px";

pasta.style.pointerEvents="none";

document.body.appendChild(pasta);

pasta.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-110vh) rotate(-360deg)"

}

],{

duration:19000,

iterations:1

});

setTimeout(()=>{

pasta.remove();

},19000);

}

setInterval(createPasta,12000);



/* ==========================================================
DYNAMIC BACKGROUND
==========================================================*/

const backgrounds=[

"linear-gradient(135deg,#ffd6e8,#fff0f5)",

"linear-gradient(135deg,#ffe8f3,#ffd1dc)",

"linear-gradient(135deg,#fff5fb,#ffe3ef)",

"linear-gradient(135deg,#ffd9ec,#fff7fb)"

];

let bgIndex=0;

setInterval(()=>{

bgIndex++;

if(bgIndex>=backgrounds.length){

bgIndex=0;

}

document.body.style.background=

backgrounds[bgIndex];

},25000);



/* ==========================================================
LOVE QUOTES
==========================================================*/

const quotes=[

"I still choose you.",

"You are my favourite place.",

"Forever starts every day.",

"Every heartbeat whispers your name.",

"My home is wherever you are.",

"I'll keep falling for you.",

"You complete my story."

];

const quote=document.createElement("div");

quote.id="floatingQuote";

quote.style.position="fixed";

quote.style.bottom="25px";

quote.style.left="50%";

quote.style.transform="translateX(-50%)";

quote.style.padding="15px 30px";

quote.style.borderRadius="40px";

quote.style.background="rgba(255,255,255,.6)";

quote.style.backdropFilter="blur(10px)";

quote.style.fontWeight="600";

quote.style.zIndex="999";

document.body.appendChild(quote);

let quoteIndex=0;

quote.innerHTML=quotes[0];

setInterval(()=>{

quoteIndex++;

if(quoteIndex>=quotes.length){

quoteIndex=0;

}

quote.innerHTML=quotes[quoteIndex];

},7000);



/* ==========================================================
KONAMI SECRET ❤️
==========================================================*/

let typed="";

document.addEventListener("keydown",(e)=>{

typed+=e.key.toLowerCase();

if(typed.length>20){

typed=typed.slice(-20);

}

if(typed.includes("ishii")){

birthdayConfetti();

alert("❤️ Secret unlocked ❤️");

typed="";

}

});



/* ==========================================================
PHOTO AUTO SCALE
==========================================================*/

document.querySelectorAll(".memory-image").forEach(photo=>{

photo.addEventListener("mouseenter",()=>{

photo.style.transform="scale(1.08)";

});

photo.addEventListener("mouseleave",()=>{

photo.style.transform="scale(1)";

});

});



/* ==========================================================
END PART 4
==========================================================*/
/* ==========================================================
PROJECT ISHII ❤️
SCRIPT.JS PART 5
Premium Effects + Fireworks + Parallax + Ending
==========================================================*/


/* ==========================================================
CANVAS FIREWORK ENGINE
==========================================================*/

const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

const particles=[];

class FireworkParticle{

constructor(x,y){

this.x=x;
this.y=y;

this.radius=Math.random()*3+2;

this.speedX=(Math.random()-.5)*12;
this.speedY=(Math.random()-.5)*12;

this.alpha=1;

this.color=`hsl(${Math.random()*360},100%,70%)`;

}

update(){

this.x+=this.speedX;

this.y+=this.speedY;

this.speedY+=0.05;

this.alpha-=0.015;

}

draw(){

ctx.save();

ctx.globalAlpha=this.alpha;

ctx.beginPath();

ctx.arc(

this.x,

this.y,

this.radius,

0,

Math.PI*2

);

ctx.fillStyle=this.color;

ctx.fill();

ctx.restore();

}

}



function explode(x,y){

for(let i=0;i<120;i++){

particles.push(

new FireworkParticle(x,y)

);

}

}



function animateFireworks(){

ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);

for(let i=particles.length-1;i>=0;i--){

particles[i].update();

particles[i].draw();

if(particles[i].alpha<=0){

particles.splice(i,1);

}

}

requestAnimationFrame(

animateFireworks

);

}

animateFireworks();



/* ==========================================================
AUTO FIREWORKS
==========================================================*/

setInterval(()=>{

explode(

Math.random()*canvas.width,

Math.random()*canvas.height*.5

);

},4000);



/* ==========================================================
PARALLAX
==========================================================*/

const parallax=document.querySelectorAll(

".floating-heart,.flower,.sparkle"

);

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

parallax.forEach(item=>{

const speed=item.dataset.speed||0.2;

item.style.transform=

`translateY(${scroll*speed}px)`;

});

});



/* ==========================================================
SECTION FADE
==========================================================*/

const sections=

document.querySelectorAll("section");

const sectionObserver=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.2

});

sections.forEach(section=>{

section.style.opacity=0;

section.style.transform="translateY(70px)";

section.style.transition="1.2s";

sectionObserver.observe(section);

});



/* ==========================================================
BUTTON SOUND
==========================================================*/

const clickSound=new Audio(

"assets/music/click.mp3"

);

document.querySelectorAll("button")

.forEach(btn=>{

btn.addEventListener("click",()=>{

clickSound.currentTime=0;

clickSound.volume=.3;

clickSound.play().catch(()=>{});

});

});



/* ==========================================================
HEART BURST
==========================================================*/

function heartExplosion(x,y){

const emojis=[

"❤️",

"💖",

"💕",

"💗",

"💞"

];

for(let i=0;i<30;i++){

const heart=document.createElement("div");

heart.innerHTML=

emojis[

Math.floor(Math.random()*emojis.length)

];

heart.style.position="fixed";

heart.style.left=x+"px";

heart.style.top=y+"px";

heart.style.pointerEvents="none";

heart.style.fontSize=

18+

Math.random()*18+

"px";

document.body.appendChild(heart);

const angle=Math.random()*360;

const distance=100+Math.random()*120;

heart.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:

`translate(${Math.cos(angle)*distance}px,

${Math.sin(angle)*distance}px)

scale(.2)`,

opacity:0

}

],{

duration:1500,

easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},1600);

}

}



document.addEventListener("click",e=>{

heartExplosion(

e.clientX,

e.clientY

);

});



/* ==========================================================
CURSOR HEART
==========================================================*/

const cursor=document.createElement("div");

cursor.id="cursorHeart";

cursor.innerHTML="💖";

cursor.style.position="fixed";

cursor.style.pointerEvents="none";

cursor.style.fontSize="24px";

cursor.style.zIndex="99999";

document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+8+"px";

cursor.style.top=e.clientY+8+"px";

});



/* ==========================================================
LOOPING LOVE QUOTES
==========================================================*/

const footerQuotes=[

"I choose you every single day ❤️",

"You are my safest place 🏡",

"My favourite hello ❤️",

"My forever person ❤️",

"I'll never stop loving you ❤️"

];

const footerText=

document.getElementById("footer-love");

let q=0;

setInterval(()=>{

q++;

if(q>=footerQuotes.length){

q=0;

}

footerText.innerHTML=

footerQuotes[q];

},5000);



/* ==========================================================
AUTO SCROLL INDICATOR
==========================================================*/

const indicator=

document.createElement("div");

indicator.innerHTML="⬇";

indicator.style.position="fixed";

indicator.style.bottom="20px";

indicator.style.left="50%";

indicator.style.transform="translateX(-50%)";

indicator.style.fontSize="35px";

indicator.style.animation="float 2s infinite";

indicator.style.zIndex="999";

document.body.appendChild(indicator);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

indicator.style.display="none";

}

});



/* ==========================================================
PRELOAD IMAGES
==========================================================*/

for(let i=1;i<=30;i++){

const img=new Image();

img.src=`assets/photos/${i}.jpg`;

}



/* ==========================================================
PRELOAD VIDEO
==========================================================*/

const preloadVideo=

document.createElement("video");

preloadVideo.src=

"assets/video/birthday.mp4";

preloadVideo.preload="auto";



/* ==========================================================
PRELOAD MUSIC
==========================================================*/

const preloadMusic=

new Audio(

"assets/music/background.mp3"

);

preloadMusic.preload="auto";



/* ==========================================================
ENDING SURPRISE
==========================================================*/

window.addEventListener("scroll",()=>{

const scroll=

window.scrollY+

window.innerHeight;

const bottom=

document.body.offsetHeight-150;

if(scroll>=bottom){

explode(

window.innerWidth/2,

window.innerHeight/3

);

birthdayConfetti();

}

});



/* ==========================================================
GOODBYE MESSAGE
==========================================================*/

console.log(

`

❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

If you are reading this...

You found my little secret.

This website wasn't built
using templates.

It was built with love.

Happy Birthday Ishii ❤️

-Tushar

❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

`

);



/* ==========================================================
THE END
==========================================================*/