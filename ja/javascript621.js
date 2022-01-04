
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371',
     width: '660',
     videoId: '7jkqHKhWNpE',   
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
 var a13 = document.getElementById('a13');
 var a14 = document.getElementById('a14');
 var a15 = document.getElementById('a15'); 
  

 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeVideo > 0) {
    a0.style.color = 'white'; //rojo    //1
  } 

  if(tiempoDeVideo > 2) {
    a0.style.color = 'grey'; //rojo    //1
  } 

  if(tiempoDeVideo > 6 ) {
    a0.style.color = 'white'; //rojo    //1
  } 


  if(tiempoDeVideo > 6) {
    a1.style.color = 'black';  
    a2.style.color = 'grey';
    a3.style.color = 'grey';
    a4.style.color = 'grey';
    a5.style.color = 'grey';
    a6.style.color = 'grey';
    a7.style.color = 'grey';
    a8.style.color = 'grey';
    a9.style.color = 'grey';
    a10.style.color = 'grey';
    a11.style.color = 'grey';
    a12.style.color = 'grey';
    a13.style.color = 'grey';
    a14.style.color = 'grey';

 } 

 if(tiempoDeVideo > 16) {
  a1.style.color = 'grey';  
  a2.style.color = 'black';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 27) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'black';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 38) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'black';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 48) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'black';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 58) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'black';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 69) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'black';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 80) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'black';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 90) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'black';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 101) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'black';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 111) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'black';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 122) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'black';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 131) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'black';
  a14.style.color = 'grey';

} 

if(tiempoDeVideo > 131) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'black';
  a14.style.color = 'grey';

}

if(tiempoDeVideo > 142) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'black';

}

if(tiempoDeVideo > 153) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';

}

if(tiempoDeVideo > 154) {
  a1.style.color = 'grey';  
  a2.style.color = 'grey';
  a3.style.color = 'grey';
  a4.style.color = 'grey';
  a5.style.color = 'grey';
  a6.style.color = 'grey';
  a7.style.color = 'grey';
  a8.style.color = 'grey';
  a9.style.color = 'grey';
  a10.style.color = 'grey';
  a11.style.color = 'grey';
  a12.style.color = 'grey';
  a13.style.color = 'grey';
  a14.style.color = 'grey';
  a15.style.color = 'black';

}
 
if(tiempoDeVideo > 159) {
  a1.style.color = 'black';  
  a2.style.color = 'black';
  a3.style.color = 'black';
  a4.style.color = 'black';
  a5.style.color = 'black';
  a6.style.color = 'black';
  a7.style.color = 'black';
  a8.style.color = 'black';
  a9.style.color = 'black';
  a10.style.color = 'black';
  a11.style.color = 'black';
  a12.style.color = 'black';
  a13.style.color = 'black';
  a14.style.color = 'black';
  a15.style.color = 'white';

}


 


}

function onPlayerStateChange(event) {

  if (event.data == YT.PlayerState.PLAYING) {
  
   setInterval(() => {
     tiempoDeTitulo = player.getCurrentTime();
   }, 100);
  }
}

 
setInterval(() => {
 colorText()
}, 100);


  
 function onPlayerStateChange(event) {

   if (event.data == YT.PlayerState.PLAYING) {
   
    setInterval(() => {
      tiempoDeTitulo = player.getCurrentTime();
    }, 100);
   }
 }

 
setInterval(() => {
  colorText()
}, 100);
