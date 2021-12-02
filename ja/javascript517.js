
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371',
     width: '660',
     videoId: 'VynkvXgul6Q',
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

  


 // De aca para arriba, todo el codigo esta igual, no cambie nada.

 // Creamos una variable tiempoDeVideo (que empieza con valor 0) en la que vamos
 // a ir grabando el tiempo (segundos) en el que esta el video. 
 var tiempoDeVideo = 0;

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
 var a16 = document.getElementById('a16');

 var a17 = document.getElementById('a17');
  
  

  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();



  if(tiempoDeVideo > 28) {
    a1.style.color = '#ed2939'; //rojo    //1
  } 
  if(tiempoDeVideo > 32) {
    a1.style.color = 'black';
    a2.style.color = '#ed2939'; //azul //2
  } 
  if(tiempoDeVideo > 37) {
    a2.style.color = 'black';
   a3.style.color = '#ed2939'; //naranja //3
  } 

   if(tiempoDeVideo > 40) {
    a3.style.color = 'black';           //4
    a4.style.color = '#ed2939';
   } 

   if(tiempoDeVideo > 44) {
    a4.style.color = 'black';           //5
    a5.style.color = '#ed2939';
   } 

  if(tiempoDeVideo > 47) {
    a5.style.color = 'black';           //6
    a6.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 50) {
    a6.style.color = 'black';           //7
   a7.style.color = '#ed2939'; //naranja
  } 

   if(tiempoDeVideo > 53) {
    a7.style.color = 'black';           //3
    a8.style.color = '#ed2939';
   } 
 

  if(tiempoDeVideo > 58) {
    a8.style.color = 'black';           //6
    a9.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 61) {
    a9.style.color = 'black';           //7
    a10.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 65) {
    a10.style.color = 'black';           //7
     
  } 
 

  
  
  if(tiempoDeVideo > 120) {
     
    a13.style.color = '#ed2939';           //7
     
  } 


   
  if(tiempoDeVideo > 124) {
    a13.style.color = 'black';
    a14.style.color = '#ed2939'; //azul //2
  } 
  if(tiempoDeVideo > 129) {
    a14.style.color = 'black';
   a15.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 132) {
    a15.style.color = 'black';
    a16.style.color = '#ed2939';

  }
 

   if(tiempoDeVideo > 136) {
    a16.style.color = 'black';           //5
    a17.style.color = '#ed2939';
   } 

  if(tiempoDeVideo > 139) {
    a17.style.color = 'black';           //6
    a18.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 143) {
    a18.style.color = 'black';           //6
    
  } 


 


 }

 // Esta funcion se ejecuta cada vez que el video "cambia de estado", es decir, cada
 // vez que el usuario hace play o pause.
 function onPlayerStateChange(event) {

   if (event.data == YT.PlayerState.PLAYING) {
     // Entramos a este "if", cuando el usuario hace play.

    // Cuando el usuario hacie click en "play", queremos decirle a nuestro codigo
    // que se fije cada una cierta cantidad de tiempo muy chiquita (en este caso
    // 100 milisegundos) cual es el valor de tiempo transcurrido del video, y que se
    // lo asigne a la variable "tiempoDeVideo". 
    // Para eso, usamos la funcion de JavaScript "setInterval", que te permite decirle
    // a Javascript: "corré todo esto que te digo, cada una cantidad X de milisegundos"
    //Es decir, que cada 100 milisegundos,
    // el codigo "tiempoDeVideo = player.getCurrentTime();" se va a correr automaticamente
    // y asi nosotros vamos a poder tener la variable tiempoDeVideo actualizada.
    // 
    setInterval(() => {
      tiempoDeVideo = player.getCurrentTime();
    }, 100);
   }
 }

// Importante: con solo escribir la funcion colorText, como en la linea 41, no quiere decir
// que esa funcion se va a ejecutar sola. De la misma manera que hicimos con el video,
// hay que decirle a Javascript que ejecute esa funcion cada un tiempo muy pequeño (100 milisegundos
// tambien alcanzan aca), asi a medida que "tiempoDeVideo" se va actualizando, el codigo tambien se fija
// (gracias a la funcion colorText) cuanto tiempo paso, y si tiene que pintar de rojo algunas de las frases
// (y volver a pintarlas de negro mas tarde).
setInterval(() => {
  colorText()
}, 100);
