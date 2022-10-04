
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'lvGQCUrGBmA',
     
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

  if(tiempoDeVideo > 24) {
    a1.style.color = '#c51130'; //rojo    //1
    a1.style.fontSize = '115%'
  } 
  
  if(tiempoDeVideo > 33) {
    a1.style.color = 'black';
    a2.style.color = '#c51130'; //azul //2
    a1.style.fontSize = '100%';
    a2.style.fontSize = '115%'

  } 
  
  if(tiempoDeVideo > 43.5) {
    a2.style.color = 'black';
   a1.style.color = '#c51130'; //naranja //3
   a1.style.fontSize = '115%';
   a2.style.fontSize = '100%';
  } 
 
   if(tiempoDeVideo > 53) {
    a1.style.color = 'black';           //4
    a2.style.color = '#c51130';
    a1.style.fontSize = '100%'
    a2.style.fontSize = '115%'
   } 
 
   if(tiempoDeVideo > 62) {
    a2.style.color = 'black';           //5
    a3.style.color = '#c51130';
    a2.style.fontSize = '100%'
    a3.style.fontSize = '105%'
   } 
 
  if(tiempoDeVideo > 72) {
    a3.style.color = 'black';           //6
    a4.style.color = '#c51130';
    a3.style.fontSize = '100%'
    a4.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 81.5) {
    a4.style.color = 'black';           //7
   a5.style.color = '#c51130'; //naranja
   a4.style.fontSize = '100%'
   a5.style.fontSize = '115%'
  } 
 
   if(tiempoDeVideo > 86.5) {
    a5.style.color = 'black';           //3
    a6.style.color = '#c51130';
    a5.style.fontSize = '100%'
    a6.style.fontSize = '115%'
   } 
 
   

  if(tiempoDeVideo > 91.5) {
    a6.style.color = 'black';            //5
    a7.style.color = '#c51130';
    a6.style.fontSize = '100%'
    a7.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 95.5) {
    a7.style.color = 'black';           //6
    a8.style.color = '#c51130';
    a7.style.fontSize = '100%'
    a8.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 102) {
    a8.style.color = 'black';           //7
    a5.style.color = '#c51130';
    a8.style.fontSize = '100%'
    a5.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 106.5) {
    a5.style.color = 'black';           //4
    a6.style.color = '#c51130';
    a5.style.fontSize = '100%'
    a6.style.fontSize = '115%'
   } 
 
  if(tiempoDeVideo > 111) {
    a6.style.color = 'black';           //6
    a7.style.color = '#c51130';
    a6.style.fontSize = '100%'
    a7.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 115) {
    a7.style.color = 'black';           //7
    a8.style.color = '#c51130';
    a7.style.fontSize = '100%'
    a8.style.fontSize = '115%'
  } 
   
  if(tiempoDeVideo > 121) {
    a8.style.color = 'black';
    a9.style.color = '#c51130';  
    a8.style.fontSize = '100%'         //7
    a9.style.fontSize = '115%'
     
  } 
 
   
  if(tiempoDeVideo > 131) {
    a9.style.color = 'black';
    a10.style.color = '#c51130'; //azul //2
    a9.style.fontSize = '100%'
    a10.style.fontSize = '115%'
  } 

   
  if(tiempoDeVideo > 141) {
    a10.style.color = 'black';
   a9.style.color = '#c51130'; //naranja //3
   a10.style.fontSize = '100%'
   a9.style.fontSize = '115%'
  } 
 
   if(tiempoDeVideo > 150) {
    a9.style.color = 'black';           //4
    a10.style.color = '#c51130';
    a9.style.fontSize = '100%'
    a10.style.fontSize = '115%'
   } 
 
   if(tiempoDeVideo > 159.5) {
    a10.style.color = 'black';           //5
    a11.style.color = '#c51130';
    a10.style.fontSize = '100%'
    a11.style.fontSize = '115%'
   } 
 
  if(tiempoDeVideo > 169) {
    a11.style.color = 'black';           //6
    a12.style.color = '#c51130';
    a11.style.fontSize = '100%'
    a12.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 179.5) {
    a12.style.color = 'black';           //7
   a13.style.color = '#c51130'; //naranja
   a12.style.fontSize = '100%'
   a13.style.fontSize = '115%'
  } 

   

  if(tiempoDeVideo > 184.5) {
    a13.style.color = 'black';
   a14.style.color = '#c51130'; //naranja //3
   a13.style.fontSize = '100%'
   a14.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 189) {
    a14.style.color = 'black';
    a15.style.color = '#c51130';
    a14.style.fontSize = '100%'
    a15.style.fontSize = '115%'
    
  }
 

  if(tiempoDeVideo > 194) {
    a15.style.color = 'black';
    a16.style.color = '#c51130';
    a16.style.fontSize = '115%'
    a15.style.fontSize = '100%'
    
  }
 

  if(tiempoDeVideo > 199) {
    a16.style.color = 'black';
   a13.style.color = '#c51130'; //naranja //3
   a16.style.fontSize = '100%'
   a13.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 204) {
    a13.style.color = 'black';
   a14.style.color = '#c51130'; //naranja //3
   a13.style.fontSize = '100%'
   a14.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 209) {
    a14.style.color = 'black';
   a15.style.color = '#c51130'; //naranja //3
   a14.style.fontSize = '100%'
   a15.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 213) {
    a15.style.color = 'black';
   a16.style.color = '#c51130'; //naranja //3
   a15.style.fontSize = '100%'
   a16.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 230) {
    a16.style.color = 'black';
   
   a16.style.fontSize = '100%';
   

  } 
/*
  if(tiempoDeVideo > 212) {
    a21.style.color = 'black';
   a22.style.color = '#c51130'; //naranja //3
   a21.style.fontSize = '100%'
   a22.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 217.5) {
    a22.style.color = 'black';
   a23.style.color = '#c51130'; //naranja //3
   a22.style.fontSize = '100%'
   a23.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 223) {
    a23.style.color = 'black';
   a24.style.color = '#c51130'; //naranja //3
   a23.style.fontSize = '100%'
   a24.style.fontSize = '115%'
  } 
 
  if(tiempoDeVideo > 228) {
    a24.style.color = 'black';
   a23.style.color = '#c51130'; //naranja //3
   a24.style.fontSize = '100%'
   a23.style.fontSize = '115%'
  }

  if(tiempoDeVideo > 233) {
    a23.style.color = 'black';
   a24.style.color = '#c51130'; //naranja //3
   a23.style.fontSize = '100%'
   a24.style.fontSize = '115%'
  }

  if(tiempoDeVideo > 245) {
    a24.style.color = 'black';
    a24.style.fontSize = '100%'
    
  }
   

  //

  */

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

 

 