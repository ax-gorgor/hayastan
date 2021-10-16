
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371.5',
     width: '660',
     videoId: 'MEGfhMLQQ9g',
     
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

  if(tiempoDeVideo > 28) {
    a1.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 36) {
    a1.style.color = 'black';
    a2.style.color = '#005caa'; //azul //2
  } 
  if(tiempoDeVideo > 43) {
    a2.style.color = 'black';
   a3.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 50) {
    a3.style.color = 'black';           //4
    a4.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 54) {
    a4.style.color = 'black';           //5
    a5.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 56) {
    a5.style.color = 'black';           //6
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 64) {
    a6.style.color = 'black';           //7
   a7.style.color = '#f37736'; //naranja
  } 

   if(tiempoDeVideo > 69) {
    a7.style.color = 'black';           //3
    a3.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 76) {
    a3.style.color = 'black';           //4
    a4.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 79) {
    a4.style.color = 'black';            //5
    a5.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 82) {
    a5.style.color = 'black';           //6
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 89) {
    a6.style.color = 'black';           //7
    a7.style.color = '#f37736';
  } 

  //

  if(tiempoDeVideo > 94) {
    a7.style.color = 'black';
    a8.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 101) {
    a8.style.color = 'black';
    a9.style.color = '#005caa'; //azul //2
  } 
  if(tiempoDeVideo > 108) {
    a9.style.color = 'black';
   a10.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 115) {
    a10.style.color = 'black';           //4
    a11.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 119) {
    a11.style.color = 'black';           //5
    a12.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 121) {
    a12.style.color = 'black';           //6
    a13.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 127) {
    a13.style.color = 'black';           //7
   a14.style.color = '#f37736'; //naranja
  } 

  //

  if(tiempoDeVideo > 133) {
    a14.style.color = 'black';
   a10.style.color = '#f37736'; //naranja //3
  } 

  if(tiempoDeVideo > 140) {
    a10.style.color = 'black';           //4
    a11.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 143) {
    a11.style.color = 'black';           //5
    a12.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 145) {
    a12.style.color = 'black';           //6
    a13.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 152) {
    a13.style.color = 'black';           //7
   a14.style.color = '#f37736'; //naranja
  } 

   //
   //

   //

  if(tiempoDeVideo > 160) {
    a14.style.color = 'black';
    a15.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 167) {
    a15.style.color = 'black';
    a16.style.color = '#005caa'; //azul //2
  } 
  if(tiempoDeVideo > 174) {
    a16.style.color = 'black';
   a17.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 181) {
    a17.style.color = 'black';           //4
    a18.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 184) {
    a18.style.color = 'black';           //5
    a19.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 186) {
    a19.style.color = 'black';           //6
    a20.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 193) {
    a20.style.color = 'black';           //7
   a21.style.color = '#f37736'; //naranja
  } 

  //

  if(tiempoDeVideo > 199) {
    a21.style.color = 'black';
   a17.style.color = '#f37736'; //naranja //3
  } 

  if(tiempoDeVideo > 205) {
    a17.style.color = 'black';           //4
    a18.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 208) {
    a18.style.color = 'black';           //5
    a19.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 211) {
    a19.style.color = 'black';           //6
    a20.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 218) {
    a20.style.color = 'black';           //7
   a21.style.color = '#f37736'; //naranja
  } 

  if(tiempoDeVideo > 225) {
    a21.style.color = 'black';           //7
   
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

 

 