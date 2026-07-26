/* ==========================================================
PROJECT ISHII ❤️

music.js

Premium Birthday Website Music Controller

==========================================================*/


/* ==========================================================
AUDIO FILES

Place files here:

assets/music/

background.mp3
scrapbook.mp3
birthday.mp3
letter.mp3
click.mp3
page-flip.mp3

==========================================================*/


const songs={


background:

new Audio(
"assets/music/background.mp3"
),


scrapbook:

new Audio(
"assets/music/scrapbook.mp3"
),


birthday:

new Audio(
"assets/music/birthday.mp3"
),


letter:

new Audio(
"assets/music/letter.mp3"
),


click:

new Audio(
"assets/music/click.mp3"
)

};



/* ==========================================================
SETTINGS
==========================================================*/


Object.values(songs).forEach(audio=>{


audio.loop=true;


audio.volume=0;


});



let currentSong=null;



/* ==========================================================
FADE IN MUSIC
==========================================================*/


function fadeIn(audio,target=.35){


audio.volume=0;


audio.play()
.catch(()=>{});


let volume=0;



const interval=setInterval(()=>{


volume+=0.02;


audio.volume=Math.min(

volume,

target

);



if(volume>=target){


clearInterval(interval);


}


},100);



}



/* ==========================================================
FADE OUT MUSIC
==========================================================*/


function fadeOut(audio){


const interval=setInterval(()=>{


audio.volume-=0.02;



if(audio.volume<=0){


audio.pause();


audio.currentTime=0;


clearInterval(interval);


}


},100);



}



/* ==========================================================
PLAY SONG
==========================================================*/


function playSong(name){


if(!songs[name]) return;



if(currentSong && currentSong!==songs[name]){


fadeOut(currentSong);


}



currentSong=songs[name];


fadeIn(currentSong);


}



/* ==========================================================
STOP ALL MUSIC
==========================================================*/


function stopAllMusic(){


Object.values(songs).forEach(audio=>{


audio.pause();


audio.currentTime=0;


audio.volume=0;


});


currentSong=null;


}



/* ==========================================================
INTRO MUSIC
==========================================================*/


const surpriseButton=

document.getElementById(

"openButton"

);



if(surpriseButton){


surpriseButton.addEventListener(

"click",

()=>{


playSong(

"background"

);


}

);


}



/* ==========================================================
SCRAPBOOK MUSIC
==========================================================*/


const scrapbookSection=

document.querySelector(

"#scrapbook-section"

);



if(scrapbookSection){


const scrapbookObserver=

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


playSong(

"scrapbook"

);


}


});


},

{

threshold:.5

}

);



scrapbookObserver.observe(

scrapbookSection

);


}



/* ==========================================================
VIDEO CONTROL

Video and BGM should never overlap

==========================================================*/


const specialVideo=

document.getElementById(

"birthday-video"

);



if(specialVideo){



specialVideo.addEventListener(

"play",

()=>{


if(currentSong){


fadeOut(currentSong);


}


}

);



specialVideo.addEventListener(

"ended",

()=>{


playSong(

"scrapbook"

);


}

);



}



/* ==========================================================
CAKE MUSIC
==========================================================*/


function playBirthdaySong(){


stopAllMusic();


songs.birthday.loop=false;


songs.birthday.volume=.5;


songs.birthday.play();



}



const cakeSection=

document.querySelector(

"#cake-section"

);



if(cakeSection){


const cakeObserver=

new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


playSong(

"birthday"

);


}


});


},

{

threshold:.7

}

);



cakeObserver.observe(

cakeSection

);


}



/* ==========================================================
FINAL LETTER MUSIC
==========================================================*/


const letterSection=

document.querySelector(

"#letter-section"

);



if(letterSection){


const letterObserver=

new IntersectionObserver(

entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


playSong(

"letter"

);


}


});


},

{

threshold:.5

}

);



letterObserver.observe(

letterSection

);


}



/* ==========================================================
MUSIC BUTTON

Floating player

==========================================================*/


const musicButton=

document.createElement(

"button"

);


musicButton.id=

"musicToggle";


musicButton.innerHTML="🎵";


document.body.appendChild(

musicButton

);



let musicPlaying=true;



musicButton.onclick=()=>{


if(!currentSong){


playSong(

"background"

);


musicPlaying=true;


return;


}



if(musicPlaying){


fadeOut(currentSong);


musicButton.innerHTML="🔇";


musicPlaying=false;


}

else{


fadeIn(currentSong);


musicButton.innerHTML="🎵";


musicPlaying=true;


}


};




/* ==========================================================
VOLUME CONTROL

==========================================================*/


const volumeSlider=

document.createElement(

"input"

);


volumeSlider.type="range";

volumeSlider.min=0;

volumeSlider.max=100;

volumeSlider.value=35;


volumeSlider.id=

"volumeControl";



document.body.appendChild(

volumeSlider

);



volumeSlider.addEventListener(

"input",

()=>{


if(currentSong){


currentSong.volume=

volumeSlider.value/100;


}


});



/* ==========================================================
BUTTON CLICK SOUND

==========================================================*/


document.addEventListener(

"click",

(e)=>{


if(

e.target.tagName==="BUTTON"

&&

songs.click

){


songs.click.currentTime=0;


songs.click.volume=.25;


songs.click.play()

.catch(()=>{});


}


});



/* ==========================================================
PAGE VISIBILITY

Pause when user leaves

==========================================================*/


document.addEventListener(

"visibilitychange",

()=>{


if(document.hidden){


if(currentSong)

currentSong.pause();


}

else{


if(currentSong)

currentSong.play()

.catch(()=>{});


}


});



/* ==========================================================
WELCOME MESSAGE

==========================================================*/


console.log(

`

🎵 MUSIC SYSTEM ACTIVE ❤️


Background:
Cute romantic theme


Scrapbook:
Dreamy memories


Cake:
Birthday celebration


Letter:
Emotional piano


`

);