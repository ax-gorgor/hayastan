
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '315',
     width: '560',
     videoId: 'pK4hUhA_Dsc',
     
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

  if(tiempoDeVideo > 22) {
    a1.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 27) {
    a1.style.color = 'black';
    a2.style.color = '#005caa'; //azul //2
  } 
  if(tiempoDeVideo > 31) {
    a2.style.color = 'black';
   a1.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 36) {
    a1.style.color = 'black';           //4
    a2.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 40) {
    a2.style.color = 'black';           //5
    a3.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 45) {
    a3.style.color = 'black';           //6
    a4.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 49) {
    a4.style.color = 'black';           //7
   a3.style.color = '#f37736'; //naranja
  } 

   if(tiempoDeVideo > 54) {
    a3.style.color = 'black';           //3
    a4.style.color = '#c51130';
   } 


   //

   if(tiempoDeVideo > 67) {
    a4.style.color = 'black';           //4
    a5.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 72) {
    a5.style.color = 'black';            //5
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 77) {
    a6.style.color = 'black';           //6
    a5.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 82) {
    a5.style.color = 'black';           //7
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 86) {
    a6.style.color = 'black';           //4
    a7.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 90) {
    a7.style.color = 'black';            //5
    a8.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 95) {
    a8.style.color = 'black';           //6
    a7.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 100) {
    a7.style.color = 'black';           //7
    a8.style.color = '#f37736';
  } 
  
  if(tiempoDeVideo > 105) {
    a8.style.color = 'black';           //7
     
  } 



  //

   

  

  if(tiempoDeVideo > 123) {
     
    a9.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 128) {
    a9.style.color = 'black';
    a10.style.color = '#005caa'; //azul //2
  } 
  if(tiempoDeVideo > 132) {
    a10.style.color = 'black';
   a9.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 137) {
    a9.style.color = 'black';           //4
    a10.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 141) {
    a10.style.color = 'black';           //5
    a11.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 146) {
    a11.style.color = 'black';           //6
    a12.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 150) {
    a12.style.color = 'black';           //7
   a11.style.color = '#f37736'; //naranja
  } 

  //

  if(tiempoDeVideo > 155) {
    a11.style.color = 'black';
   a12.style.color = '#f37736'; //naranja //3
  } 

  if(tiempoDeVideo > 161) {
    a12.style.color = 'black';
    
  }



  if(tiempoDeVideo > 205) {
    a12.style.color = 'black';           //7
   a11.style.color = '#f37736'; //naranja
  } 

  //

  if(tiempoDeVideo > 210) {
    a11.style.color = 'black';
   a12.style.color = '#f37736'; //naranja //3
  } 

  if(tiempoDeVideo > 216) {
    a12.style.color = 'black';
    
  }

 

   

  //

  

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

 

 