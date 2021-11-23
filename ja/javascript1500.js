
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371',
     width: '660',
     videoId: 'C0WK059c8TE',   
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

var titleName = 'Esh'

var tiempoDeTitulo = 0

function colorTitle(){

  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeTitulo > 5) {
    titleName.style.color = '#002395';  
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
