/* ==========================================================
PROJECT ISHII ❤️

timeline.js

Our Love Story Timeline

==========================================================*/


/* ==========================================================
TIMELINE DATA

Edit dates/photos according to your memories

==========================================================*/


const loveTimeline=[


{

year:"2019",

title:"The Beginning 🎓",

image:"assets/timeline/2019.jpg",

text:

"The year when two strangers met in college and unknowingly started a beautiful story."

},



{

year:"2020",

title:"College Memories ❤️",

image:"assets/timeline/2020.jpg",

text:

"Late night conversations, endless laughs, silly fights and memories that became priceless."

},



{

year:"2021",

title:"Finding My Favourite Person 💕",

image:"assets/timeline/2021.jpg",

text:

"Somewhere between friendship and love, you became the person I couldn't imagine my life without."

},



{

year:"2022",

title:"Our Forever Started ❤️",

image:"assets/timeline/2022.jpg",

text:

"The day my life changed forever. I found my best friend, my partner and my home."

},



{

year:"2023",

title:"Growing Together 🌸",

image:"assets/timeline/2023.jpg",

text:

"We learned, supported each other and became stronger together."

},



{

year:"2024",

title:"Dreams & Challenges 💪",

image:"assets/timeline/2024.jpg",

text:

"Every difficult moment became easier because I had you beside me."

},



{

year:"2025",

title:"Same Company, Same Journey 💼",

image:"assets/timeline/2025.jpg",

text:

"From college partners to working together. Watching you grow has been my biggest happiness."

},



{

year:"2026",

title:"Your Special Birthday 🎂",

image:"assets/timeline/2026.jpg",

text:

"Today I celebrate the most beautiful chapter of my life — YOU ❤️"

}



];



/* ==========================================================
CREATE TIMELINE
==========================================================*/


const timelineContainer=

document.getElementById(

"timeline-container"

);



function createTimeline(){


if(!timelineContainer)

return;



loveTimeline.forEach((item,index)=>{


const card=document.createElement("div");


card.className=

"timeline-card";



card.innerHTML=

`

<div class="timeline-dot">

❤️

</div>


<div class="timeline-content">


<div class="timeline-image">

<img src="${item.image}">

</div>



<div class="timeline-info">


<span class="timeline-year">

${item.year}

</span>


<h2>

${item.title}

</h2>



<p class="timeline-text">

${item.text}

</p>


</div>


</div>

`;



timelineContainer.appendChild(card);



});



}



createTimeline();





/* ==========================================================
SCROLL REVEAL
==========================================================*/


const timelineCards=

document.querySelectorAll(

".timeline-card"

);



const timelineObserver=

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(

"show"

);


typeTimelineText(

entry.target

);


}


});


},

{

threshold:.35

}

);



timelineCards.forEach(card=>{


timelineObserver.observe(card);


});



/* ==========================================================
TYPEWRITER EFFECT
==========================================================*/


function typeTimelineText(card){


const textElement=

card.querySelector(

".timeline-text"

);



if(!textElement)

return;



if(textElement.dataset.done)

return;



const text=

textElement.innerHTML;



textElement.innerHTML="";



let index=0;



function write(){


if(index<text.length){


textElement.innerHTML+=

text.charAt(index);


index++;


setTimeout(write,35);


}

else{


textElement.dataset.done=true;


}


}



write();



}



/* ==========================================================
ACTIVE YEAR HIGHLIGHT
==========================================================*/


window.addEventListener(

"scroll",

()=>{


const center=

window.innerHeight/2;



timelineCards.forEach(card=>{


const position=

card.getBoundingClientRect();



if(

position.top<center

&&

position.bottom>center

){


card.classList.add(

"active"

);


}

else{


card.classList.remove(

"active"

);


}


});



});



/* ==========================================================
FLOATING HEARTS ON TIMELINE
==========================================================*/


function timelineHeart(){


const heart=

document.createElement(

"div"

);



heart.innerHTML=

"❤️";



heart.className=

"timeline-heart";



heart.style.left=

Math.random()*100+"%";



heart.style.animationDuration=

(

5+

Math.random()*5

)+"s";



timelineContainer.appendChild(

heart

);



setTimeout(()=>{


heart.remove();


},10000);



}



setInterval(

timelineHeart,

1500

);




/* ==========================================================
TIMELINE COUNTER

How long together

==========================================================*/


const relationshipStart=

new Date(

"2022-09-15"

);



function updateLoveDuration(){


const now=

new Date();



const difference=

now-relationshipStart;



const days=

Math.floor(

difference/

(1000*60*60*24)

);



const counter=

document.getElementById(

"love-days"

);



if(counter){


counter.innerHTML=

`${days} days of choosing each other ❤️`;


}



}



updateLoveDuration();


setInterval(

updateLoveDuration,

86400000

);



/* ==========================================================
FINAL TIMELINE MESSAGE
==========================================================*/


const timelineEnd=

document.createElement(

"div"

);



timelineEnd.className=

"timeline-ending";



timelineEnd.innerHTML=

`

<h1>

And this is just the beginning ❤️

</h1>


<p>

The next chapters will be written together...

</p>

`;



timelineContainer?.appendChild(

timelineEnd

);



console.log(

`

📜 TIMELINE CREATED ❤️

College memories:
✓

Love story:
✓

Same company journey:
✓

Forever:
Loading...

`

);