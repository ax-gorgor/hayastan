
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371.5',
     width: '660',
     videoId: 'b5s-LbunOHc',
     
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

  if(tiempoDeVideo > 34) {
    a1.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 43) {
    a1.style.color = 'black';
    a2.style.color = '#f37736'; //azul //2
  } 
   

   if(tiempoDeVideo > 51) {
    a2.style.color = 'black'; 
    a3.style.color = '#c51130';          //4
    a4.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 67) {
    a3.style.color = 'black';
    a4.style.color = 'black';           //5
    a5.style.color = '#f37736';
   } 

  if(tiempoDeVideo > 75) {
    a5.style.color = 'black';           //6
    a6.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 84) {
    a6.style.color = 'black';           //7
   a7.style.color = '#f37736'; //naranja
  } 

   if(tiempoDeVideo > 91) {
    a7.style.color = 'black';           //3
    a8.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 100) {
    a8.style.color = 'black';           //4
    a7.style.color = '#f37736';
   } 

  if(tiempoDeVideo > 107) {
    a7.style.color = 'black';            //5
    a8.style.color = '#c51130';
  } 


  if(tiempoDeVideo > 125) {
    a8.style.color = 'black';            //5
    
  } 

  if(tiempoDeVideo > 137) {
             //6
    a9.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 145) {
    a9.style.color = 'black';           //7
    a10.style.color = '#c51130';
  } 

  //

  if(tiempoDeVideo > 152) {
    a10.style.color = 'black';
    a11.style.color = '#f37736';
    a12.style.color = '#f37736'; //rojo    //1
  } 
  if(tiempoDeVideo > 169) {
    a11.style.color = 'black';
    a12.style.color = 'black';
     
    a13.style.color = '#c51130'; //azul //2
  } 
  if(tiempoDeVideo > 176) {
    a13.style.color = 'black';
   a14.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 184) {
    a14.style.color = 'black';           //4
    a15.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 192) {
    a15.style.color = 'black';           //5
    a16.style.color = '#f37736';
   } 

  if(tiempoDeVideo > 200) {
    a16.style.color = 'black';           //6
    a15.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 208) {
    a15.style.color = 'black';           //7
   a16.style.color = '#f37736'; //naranja
  } 

  //

  if(tiempoDeVideo > 228) {
    a16.style.color = 'black';
   
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

 

 