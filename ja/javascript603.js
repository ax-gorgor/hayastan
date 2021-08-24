 
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '315',
     width: '560',
     videoId: '3E_x7oPEndw',
     
     events: {
       'onStateChange': onPlayerStateChange
     }
   });
 }

  


 // De aca para arriba, todo el codigo esta igual, no cambie nada.

 // Creamos una variable tiempoDeVideo (que empieza con valor 0) en la que vamos
 // a ir grabando el tiempo (segundos) en el que esta el video. Cuando pase 1 segundo,
 // tiempoDeVideo va a valer 1, cuando pasen 6.5 segundo de video, tiempoDeVideo va a valer
 // 6.5 y asi.
 var tiempoDeVideo = 0;

 var a1 = document.getElementById('a1');
 var a2 = document.getElementById('a2');
 var a3 = document.getElementById('a3');
 var a4 = document.getElementById('a4');
 var a5 = document.getElementById('a5');
 var a6 = document.getElementById('a6');
 var a7 = document.getElementById('a7');
 var a8 = document.getElementById('a8');
  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) y si pasaron mas de 5 segundos, va a pintar "intro" de rojo. Si pasaron
 // mas de 8 segundos, va a pintar "introd" (la segunda linea) de rojo y pintar "intro"
 // (la primera linea) de negro otra vez. Y si pasaron mas de 9 segundos, va a pintar la
 // tercera linea de rojo y la segunda de negro otra vez.
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeVideo > 12 ) {
    a1.style.color = '#c51130'; 
    a30.style.marginTop = '-0%'
      
       
    } 

  if(tiempoDeVideo > 15 ) {
     
    a1.style.color = 'black';
    a2.style.color = '#005caa';  
    a30.style.marginTop = '-20%'
  
  } 
  if(tiempoDeVideo > 19 ) {
  
    a2.style.color = 'black';
    a1.style.color = '#f37736';  
    a30.style.marginTop = '-0%'
  
  } 

  if(tiempoDeVideo > 22 ) {
  
    a1.style.color = 'black';
    a4.style.color = '#c51130';
    a30.style.marginTop = '-60%'
  
  } 

  if(tiempoDeVideo > 25 ) {
  
    a4.style.color = 'black';
    a5.style.color = '#005caa';
    a30.style.marginTop = '-70%'
  
  } 

  if(tiempoDeVideo > 28 ) {
  
    a5.style.color = 'black';
    a6.style.color = '#f37736';
    a30.style.marginTop = '-90%'
    
  } 

  if(tiempoDeVideo > 32 ) {
    
    a6.style.color = 'black';
    a7.style.color = '#c51130';
    a30.style.marginTop = '-110%'
    
  } 

  if(tiempoDeVideo > 35 ) {
    
    a7.style.color = 'black';
    a8.style.color = '#005caa';
    a30.style.marginTop = '-130%'
    
  } 

  if(tiempoDeVideo > 39 ) {
    
    a8.style.color = 'black';
    a30.style.marginTop = '0'
     
 } 

  // // // // // 

  if(tiempoDeVideo > 65 ) {
    
     
    a1.style.color = '#f37736';
    a30.style.marginTop = '-0%'
  } 

  if(tiempoDeVideo > 68 ) {
    a1.style.color = 'black';
    a2.style.color = '#c51130';
    a30.style.marginTop = '-20%'
  } 

  if(tiempoDeVideo > 71 ) {
    a2.style.color = 'black';
    a3.style.color = '#005caa';
    a30.style.marginTop = '-40%'
  } 

//

  if(tiempoDeVideo > 75 ) {
    a3.style.color = 'black';
    a4.style.color = '#f37736';
    a30.style.marginTop = '-60%'
  } 

  
  if(tiempoDeVideo > 78 ) {
    a4.style.color = 'black';
    a5.style.color = '#c51130';  
    a30.style.marginTop = '-70%'
  } 
  if(tiempoDeVideo > 81 ) {
    a5.style.color = 'black';
    a6.style.color = '#005caa';  
    a30.style.marginTop = '-90%'
  } 

  if(tiempoDeVideo > 85 ) {
    a6.style.color = 'black';
    a7.style.color = '#f37736';
    a30.style.marginTop = '-110%'
  } 

  if(tiempoDeVideo > 88 ) {
    a7.style.color = 'black';
    a8.style.color = '#c51130';
    a30.style.marginTop = '-130%'
    
  } 


  if(tiempoDeVideo > 92 ) {
    
    a8.style.color = 'black';
    a30.style.marginTop = '-0%'
  } 

  if(tiempoDeVideo >  151 ) {
    
    a1.style.color = '#005caa';
    a30.style.marginTop = '-0%'
  } 

  if(tiempoDeVideo >  154 ) {
    a1.style.color = 'black';
    a2.style.color = '#f37736';
    a30.style.marginTop = '-20%'
  } 
  
  //

  if(tiempoDeVideo >  158 ) {
    a2.style.color = 'black';
    a1.style.color = '#c51130';
    a30.style.marginTop = '-0%'
  } 

  //
  //
  if(tiempoDeVideo > 161) {
    a1.style.color = 'black';
    a2.style.color = '#005caa';
    a30.style.marginTop = '-20%'
  } 

  if(tiempoDeVideo >  164) {
    a2.style.color = 'black';
    a3.style.color = '#f37736';
    a30.style.marginTop = '-40%'
  } 

  if(tiempoDeVideo >  167 ) {
    a3.style.color = 'black';
    a4.style.color = '#c51130';
    a30.style.marginTop = '-60%'
  } 
  
  //

  if(tiempoDeVideo >  171 ) {
    a4.style.color = 'black';
    a5.style.color = '#005caa';
    a30.style.marginTop = '-70%'
  } 

  //
  //
  //
  if(tiempoDeVideo >  174 ) {
    a5.style.color = 'black';
    a6.style.color = '#f37736';
    a30.style.marginTop = '-90%'
  } 

  
  if(tiempoDeVideo > 177 ) {
    a6.style.color = 'black';
    a7.style.color = '#c51130';
    a30.style.marginTop = '-110%'
  } 

  if(tiempoDeVideo >  181 ) {
    a7.style.color = 'black';
    a8.style.color = '#005caa';
    a30.style.marginTop = '-130%'
  } 

  if(tiempoDeVideo >  184 ) {
    a8.style.color = 'black';
    a7.style.color = '#f37736';
    a30.style.marginTop = '-110%'
  } 
  
  //

  if(tiempoDeVideo >  187 ) {
    a7.style.color = 'black';
    a8.style.color = '#c51130';
    a30.style.marginTop = '-130%'
  } 
   
  if(tiempoDeVideo >  191 ) {
    a8.style.color = 'black';
    a30.style.marginTop = '-0%'
   } 
  
  //

   
  // // /// /// ////

  

  

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

 

 