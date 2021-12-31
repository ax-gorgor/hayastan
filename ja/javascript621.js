
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
