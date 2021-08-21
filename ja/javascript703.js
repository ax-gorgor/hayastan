
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '315',
     width: '560',
     videoId: 'luFg6XBSldw',
     
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

  if(tiempoDeVideo > 59) {
    a1.style.color = '#c51130';
    b1.style.color = '#8d8c8c';
  } 
  if(tiempoDeVideo > 68) {
    b1.style.color = 'black';
    a1.style.color = 'black';
    a2.style.color = '#005caa'; //azul //2
    b2.style.color = '#8d8c8c';
  } 
  if(tiempoDeVideo > 78) {
    b2.style.color = 'black';
    a2.style.color = 'black';
   a3.style.color = '#f37736'; //naranja //3
   b3.style.color = '#8d8c8c';
  } 

   if(tiempoDeVideo > 87) {
    b3.style.color = 'black';
    a3.style.color = 'black';           //4
    a4.style.color = '#c51130';
    b4.style.color = '#8d8c8c';
   } 

   if(tiempoDeVideo > 97) {
    a4.style.color = 'black';
    b4.style.color = 'black';           //5
     
   }


   if(tiempoDeVideo > 98) {
            //5
    a5.style.color = '#005caa';
    b5.style.color = '#8d8c8c';
   } 

  if(tiempoDeVideo > 104) {
    b5.style.color = 'black';
    a5.style.color = 'black';           //6
    a6.style.color = '#f37736';
    b6.style.color = '#8d8c8c';
  } 

  if(tiempoDeVideo > 110) {
    b6.style.color = 'black';
    a6.style.color = 'black';           //7
   a7.style.color = '#f37736'; //naranja
   b7.style.color = '#8d8c8c';
  } 

   if(tiempoDeVideo > 115) {
    b7.style.color = 'black';
    a7.style.color = 'black';           //3
    a8.style.color = '#c51130';
    b8.style.color = '#8d8c8c';
   } 

 
  if(tiempoDeVideo > 122) {
    b8.style.color = 'black';
    a8.style.color = 'black';            //5
    a9.style.color = '#c51130';
    b9.style.color = '#8d8c8c';
  } 

  if(tiempoDeVideo > 132) {
    a9.style.color = 'black';  
    b9.style.color = 'black';         //6
   
  } 

  if(tiempoDeVideo > 159) {
    b10.style.color = '#8d8c8c';
    a10.style.color = '#f37736';           //7
     
  } 

  if(tiempoDeVideo > 168) {
    b10.style.color = 'black';
    a10.style.color = 'black';           //4
    a11.style.color = '#005caa';
    b11.style.color = '#8d8c8c';
   } 

  if(tiempoDeVideo > 177) {
    b11.style.color = 'black';
    a11.style.color = 'black';            //5
    a12.style.color = '#c51130';
    b12.style.color = '#8d8c8c';
  } 

  if(tiempoDeVideo > 186) {
    b12.style.color = 'black';
    a12.style.color = 'black';           //6
    a13.style.color = '#005caa';
    b13.style.color = '#8d8c8c';
  } 

  if(tiempoDeVideo > 196) {
    a13.style.color = 'black'; 
    b13.style.color = 'black';          //7
     
  } 
  
  if(tiempoDeVideo > 197) {
    a14.style.color = '#f37736';  
    b14.style.color = '#8d8c8c';         //7
    
  } 

  if(tiempoDeVideo > 204) {
    b14.style.color = 'black'; 
    a14.style.color = 'black'; 
    a15.style.color = '#c51130';  
    b15.style.color = '#8d8c8c';         //7
     
  } 

 
  if(tiempoDeVideo > 210) {
    b15.style.color = 'black';  
    a15.style.color = 'black';
    a16.style.color = '#005caa'; //azul //2
    b16.style.color = '#8d8c8c'; 
  } 
  if(tiempoDeVideo > 215) {
    b16.style.color = 'black'; 
    a16.style.color = 'black';
   a17.style.color = '#f37736'; //naranja //3
   b17.style.color = '#8d8c8c'; 
  } 

   if(tiempoDeVideo > 222) {
    b17.style.color = 'black'; 
    a17.style.color = 'black';           //4
    a18.style.color = '#c51130';
    b18.style.color = '#8d8c8c';
   } 

   if(tiempoDeVideo > 232) {
    a18.style.color = 'black'; 
    b18.style.color = 'black';        //5
    
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

 

 