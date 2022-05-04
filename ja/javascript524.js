
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'J3rarrbH8jA',
     playerVars: { 
			
               'showinfo': 0,
               'rel':0,
                'fs':0
},



     
     events: {
       'onStateChange': onPlayerStateChange
     }
   });
 }

  


 
 var tiempoDeVideo = 0;

 var a0 = document.getElementById('a0');
 var a1 = document.getElementById('a1');
 var a2 = document.getElementById('a2');
 var a3 = document.getElementById('a3');
 var a4 = document.getElementById('a4');
 var a5 = document.getElementById('a5');
 var a6 = document.getElementById('a6');
 var a7 = document.getElementById('a7');
 var a8 = document.getElementById('a8');
 var a9 = document.getElementById('a9');
 var a10 = document.getElementById('a10');
 var a11 = document.getElementById('a11');
 var a12 = document.getElementById('a12');
  
  
 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

 
  
  
  if(tiempoDeVideo > 26) {
    a1.style.color = '#ed2939'; //rojo    //1
  } 
  if(tiempoDeVideo > 32) {
    a1.style.color = 'black';
    a2.style.color = '#005caa'; //azul //2 
  } 
  if(tiempoDeVideo > 36) {
    a2.style.color = 'black';
   a3.style.color = '#f37736'; //naranja
  } 

   if(tiempoDeVideo > 39.5) {
    a3.style.color = 'black';           //4
    a4.style.color = '#ed2939';
   } 

   if(tiempoDeVideo > 41.5) {
    a4.style.color = 'black';           //5
    a5.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 46) {
    a5.style.color = 'black';           //6
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 48.5) {
    a6.style.color = 'black';           //7
   a3.style.color = '#ed2939'; //naranja
  } 

   if(tiempoDeVideo > 52.5) {
    a3.style.color = 'black';           //3
    a4.style.color = '#005caa';
   } 
 

  if(tiempoDeVideo > 54.5) {
    a4.style.color = 'black';           //6
    a5.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 59) {
    a5.style.color = 'black';           //7
    a6.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 63) {
    a6.style.color = 'black';           //4
    
   } 

// ----------------------------------------------------------------/

if(tiempoDeVideo > 63) {
    a7.style.textDecoration = 'underline';
  } 

   
  if(tiempoDeVideo > 86) {
    a7.style.color = '#ed2939'; //azul //2
    a7.style.textDecoration = 'none';
  } 

  if(tiempoDeVideo > 92) {
    a7.style.color = 'black';
    a8.style.color = '#005caa'; //naranja //3
  } 

   if(tiempoDeVideo > 97.5) {
    a8.style.color = 'black';           //4
    a9.style.color = '#f37736';
   } 

   if(tiempoDeVideo > 100.5) {
    a9.style.color = 'black';           //5
    a10.style.color = '#ed2939';
   } 

  if(tiempoDeVideo > 102.5) {
    a10.style.color = 'black';           //6
    a11.style.color = '#005caa';
  } 

  if(tiempoDeVideo > 107.5) {
    a11.style.color = 'black';           //7
    a12.style.color = '#f37736'; //naranja
  } 

   if(tiempoDeVideo > 110) {
    a12.style.color = 'black';           //3
    a9.style.color = '#ed2939';
   } 
 

  if(tiempoDeVideo > 112.5) {
    a9.style.color = 'black';           //6
    a10.style.color = '#005caa';
  } 

  if(tiempoDeVideo > 115) {
    a10.style.color = 'black';           //7
    a11.style.color = '#f37736';
  } 

    if(tiempoDeVideo > 120) {
    a11.style.color = 'black';           //7
    a12.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 128) {
    a12.style.color = 'black';           //4
    
   } 


 
  


 }

  
 function onPlayerStateChange(event) {

   if (event.data == YT.PlayerState.PLAYING) {
     
    // 
    setInterval(() => {
      tiempoDeVideo = player.getCurrentTime();
    }, 100);
   }
 }
 
setInterval(() => {
  colorText()
}, 100);
