/* ==========================================================
PROJECT ISHII ❤️

cake.js

Interactive Birthday Cake Experience

==========================================================*/


/* ==========================================================
CAKE SETTINGS
==========================================================*/


const TOTAL_CANDLES = 5;


let candlesBlown = 0;


let cakeCompleted = false;




/* ==========================================================
CREATE CAKE
==========================================================*/


const cakeContainer = 
document.getElementById(
"birthday-cake"
);



function createCake(){


if(!cakeContainer)

return;



cakeContainer.innerHTML = `


<div class="cake-wrapper">


<div class="cake-top">


<div class="cream">

</div>


</div>


<div class="cake-body">


<div class="cake-decoration">

❤️ ❤️ ❤️

</div>


</div>


<div class="candles">


${createCandles()}


</div>


</div>


<div class="cake-message">


Click each candle and make a wish ✨


</div>


`;



}




function createCandles(){


let candles="";



for(let i=1;i<=TOTAL_CANDLES;i++){


candles += `


<div class="candle"

data-id="${i}">


<div class="flame">


🔥


</div>


<div class="stick">

</div>


</div>


`;

}


return candles;


}



createCake();





/* ==========================================================
CANDLE CLICK EVENT
==========================================================*/


document.addEventListener(

"click",

(e)=>{


if(

!e.target.closest(".candle")

)

return;



const candle=

e.target.closest(".candle");



if(

candle.classList.contains(

"blown"

)

)

return;



blowCandle(candle);



}

);





/* ==========================================================
BLOW CANDLE
==========================================================*/


function blowCandle(candle){



const flame=

candle.querySelector(

".flame"

);



flame.animate(

[

{

transform:

"scale(1)",

opacity:1

},

{

transform:

"scale(.2) translateY(-30px)",

opacity:0

}

],

{

duration:800

}

);



setTimeout(()=>{


flame.style.display="none";


candle.classList.add(

"blown"

);



},700);




candlesBlown++;



createSparkle(

candle

);



checkCakeCompletion();



}





/* ==========================================================
CHECK ALL CANDLES
==========================================================*/


function checkCakeCompletion(){



if(

candlesBlown===TOTAL_CANDLES

&&

!cakeCompleted

){


cakeCompleted=true;



setTimeout(()=>{


wishAnimation();


},1000);



}

}





/* ==========================================================
WISH ANIMATION
==========================================================*/


function wishAnimation(){



const wishBox=

document.createElement(

"div"

);



wishBox.className=

"wish-screen";



wishBox.innerHTML=

`

<div>


<h1>

✨ Make A Wish Ishii ✨

</h1>


<p>

Close your eyes...

Your wish is travelling to the stars ❤️

</p>


<button id="wishButton">

I Made My Wish 💖

</button>


</div>

`;



document.body.appendChild(

wishBox

);



}





/* ==========================================================
AFTER WISH BUTTON
==========================================================*/


document.addEventListener(

"click",

(e)=>{


if(

e.target.id==="wishButton"

){



wishComplete();



}


}

);





function wishComplete(){



const wishScreen=

document.querySelector(

".wish-screen"

);



wishScreen.innerHTML=

`

<div>


<h1>

Your wish has been accepted 💫

</h1>


<p>

But I already got my biggest wish...

You ❤️

</p>


</div>


`;



launchFireworks();


playBirthdaySong();



setTimeout(()=>{


wishScreen.remove();


},6000);



}





/* ==========================================================
SPARKLES
==========================================================*/


function createSparkle(element){



const rect=

element.getBoundingClientRect();



for(let i=0;i<10;i++){


const sparkle=

document.createElement(

"div"

);



sparkle.innerHTML="✨";



sparkle.className=

"cake-sparkle";



sparkle.style.left=

rect.left+

Math.random()*50+

"px";



sparkle.style.top=

rect.top+

Math.random()*50+

"px";



document.body.appendChild(

sparkle

);



sparkle.animate(

[

{

transform:

"scale(0)",

opacity:0

},

{

transform:

"scale(1.5)",

opacity:1

},

{

transform:

"translateY(-80px)",

opacity:0

}

],

{

duration:1500

}

);



setTimeout(()=>{


sparkle.remove();


},1500);


}


}





/* ==========================================================
FIREWORKS
==========================================================*/


function launchFireworks(){



for(let i=0;i<50;i++){



const fire=

document.createElement(

"div"

);



fire.className=

"firework";



fire.innerHTML=

["❤️","✨","🎉","💖"]

[

Math.floor(

Math.random()*4

)

];



fire.style.left=

"50%";



fire.style.top=

"50%";



document.body.appendChild(

fire

);



const x=

(Math.random()-0.5)*800;



const y=

(Math.random()-0.5)*600;



fire.animate(

[

{

transform:

"translate(0,0) scale(0)",

opacity:1

},

{

transform:

`translate(${x}px,${y}px)
scale(2)`,

opacity:0

}

],

{

duration:1500

}

);



setTimeout(()=>{


fire.remove();


},1500);



}


}





/* ==========================================================
OPTIONAL MICROPHONE BLOW

Uses browser microphone

==========================================================*/


async function enableBlowDetection(){


try{


const stream=

await navigator.mediaDevices

.getUserMedia({

audio:true

});



const audioContext=

new AudioContext();



const microphone=

audioContext

.createMediaStreamSource(

stream

);



const analyser=

audioContext

.createAnalyser();



microphone.connect(

analyser

);



const data=

new Uint8Array(

analyser.frequencyBinCount

);



function detect(){



analyser.getByteFrequencyData(

data

);



let volume=

data.reduce(

(a,b)=>a+b

)/data.length;



if(

volume>45

){


const candle=

document.querySelector(

".candle:not(.blown)"

);



if(candle)

blowCandle(candle);


}



requestAnimationFrame(

detect

);



}



detect();



}

catch(error){


console.log(

"Microphone permission denied"

);


}


}





/* ==========================================================
START BUTTON

==========================================================*/


const blowButton=

document.getElementById(

"enable-blow"

);



if(blowButton){


blowButton.onclick=()=>{


enableBlowDetection();


};


}




console.log(

`

🎂 CAKE SYSTEM READY ❤️


Candles:
${TOTAL_CANDLES}


Wish:
Waiting ✨


`

);