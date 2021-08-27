
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '315',
     width: '560',
     videoId: 'm_OG-wR_Cno',
     
     events: {
       'onStateChange': onPlayerStateChange
     }
   });
 }

  


 // De aca para arriba, todo el codigo esta igual, no cambie nada.

 // Creamos una variable tiempoDeVideo (que empieza con valor 0) en la que vamos
 // a ir grabando el tiempo (segundos) en el que esta el video. 
 var tiempoDeVideo = 0;

 
  


  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeVideo > 21) {
    a1.style.color = '#ff2a87'; //rojo    //1
  } 
  if(tiempoDeVideo > 25) {
    a1.style.color = 'black';
    a2.style.color = '#ff694a'; //azul //2
  } 
  if(tiempoDeVideo > 29) {
    a2.style.color = 'black';
   a3.style.color = '#ff00ca'; //naranja //3
  } 

   if(tiempoDeVideo > 33) {
    a3.style.color = 'black';           //4
    a4.style.color = '#0000fe';
   } 

   if(tiempoDeVideo > 37) {
    a4.style.color = 'black';           //5
    a5.style.color = '#fe0000';
   } 

  if(tiempoDeVideo > 42) {
    a5.style.color = 'black';           //6
    a6.style.color = '#fe6b01';
  } 

  if(tiempoDeVideo > 45) {
    a6.style.color = 'black';           //7
   a7.style.color = '#024c2a'; //naranja
  } 

   if(tiempoDeVideo > 50) {
    a7.style.color = 'black';           //3
    a8.style.color = '#c51130';
   } 

   

  if(tiempoDeVideo > 53) {
    a8.style.color = 'black';            //5
     
  } 

  if(tiempoDeVideo > 61) {
    a8.style.color = 'black';           //6
    a9.style.color = '#361c59';
  } 

  if(tiempoDeVideo > 65) {
    a9.style.color = 'black';           //7
    a10.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 69) {
    a10.style.color = 'black';           //4
    a11.style.color = '#c51130';
   } 

  if(tiempoDeVideo > 73) {
    a11.style.color = 'black';           //6
    a12.style.color = '#0000fe';
  } 

  if(tiempoDeVideo > 77) {
    a12.style.color = 'black';           //7
    a13.style.color = '#c51130';
  } 
  
  if(tiempoDeVideo > 82) {
    a13.style.color = 'black';
    a14.style.color = '#ff2a87';           //7
     
  } 


   
  if(tiempoDeVideo > 85) {
    a14.style.color = 'black';
    a15.style.color = '#024c2a'; //azul //2
  } 
  if(tiempoDeVideo > 90) {
    a15.style.color = 'black';
   a16.style.color = '#f37736'; //naranja //3
  } 

  if(tiempoDeVideo > 93) {
    a16.style.color = 'black';

  }

   if(tiempoDeVideo > 101) {
      a17.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 105) {
    a17.style.color = 'black';           //5
    a18.style.color = '#ff00ca';
   } 

  if(tiempoDeVideo > 109) {
    a18.style.color = 'black';           //6
    a19.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 113) {
    a19.style.color = 'black';           //7
   a20.style.color = '#c51130'; //naranja
  } 

  //

  if(tiempoDeVideo > 117) {
    a20.style.color = 'black';
   a21.style.color = '#f37736'; //naranja //3
  } 

  if(tiempoDeVideo > 122) {
    a21.style.color = 'black';
    a22.style.color = '#ff00ca';
    
  }
 

  if(tiempoDeVideo > 125) {
    a22.style.color = 'black';
    a23.style.color = '#f37736';
    
  }



  if(tiempoDeVideo > 132) {
    a23.style.color = 'black';
   a24.style.color = '#024c2a'; //naranja //3
  } 
 
  if(tiempoDeVideo > 138) {
    a24.style.color = 'black';
    
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

 

 