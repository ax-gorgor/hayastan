
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
  
 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeVideo > 0) {
    a0.style.color = 'white'; //rojo    //1
  } 

  if(tiempoDeVideo > 3) {
    a0.style.color = 'grey'; //rojo    //1
  } 

  if(tiempoDeVideo > 8 ) {
    a0.style.color = 'white'; //rojo    //1
  } 

  
  
  if(tiempoDeVideo > 8) {
    a1.style.color = '#ed2939'; //rojo    //1
  } 
  if(tiempoDeVideo > 12) {
    a1.style.color = 'black';
    a2.style.color = '#ed2939'; //azul //2
  } 
  if(tiempoDeVideo > 17) {
    a2.style.color = 'black';
   a3.style.color = '#ed2939'; //naranja //3
  } 

   if(tiempoDeVideo > 22) {
    a3.style.color = 'black';           //4
    a4.style.color = '#ed2939';
   } 

   if(tiempoDeVideo > 27) {
    a4.style.color = 'black';           //5
    a5.style.color = '#ed2939';
   } 

  if(tiempoDeVideo > 32) {
    a5.style.color = 'black';           //6
    a6.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 37) {
    a6.style.color = 'black';           //7
   a7.style.color = '#ed2939'; //naranja
  } 

   if(tiempoDeVideo > 42) {
    a7.style.color = 'black';           //3
    a8.style.color = '#ed2939';
   } 
 

  if(tiempoDeVideo > 47) {
    a8.style.color = 'black';           //6
    a7.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 52) {
    a7.style.color = 'black';           //7
    a8.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 58) {
    a8.style.color = 'black';           //4
    
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
