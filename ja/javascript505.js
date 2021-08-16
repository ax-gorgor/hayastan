
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '315',
     width: '560',
     videoId: 'EsCdHSZQXyE',
     
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

  if(tiempoDeVideo > 76) {
    a1.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 80) {
    a1.style.color = 'black';
    a2.style.color = '#005caa'; //azul //2
  } 
  if(tiempoDeVideo > 85) {
    a2.style.color = 'black';
   a1.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 89) {
    a1.style.color = 'black';           //4
    a2.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 94) {
    a2.style.color = 'black';           //5
    a3.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 98) {
    a3.style.color = 'black';           //6
    a4.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 103) {
    a4.style.color = 'black';           //7
   a3.style.color = '#f37736'; //naranja
  } 

   if(tiempoDeVideo > 107) {
    a3.style.color = 'black';           //3
    a4.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 112) {
    a4.style.color = 'black';           //3
    
   } 


   //

   if(tiempoDeVideo > 130) {
            
    a5.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 134) {
    a5.style.color = 'black';            //5
    a6.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 139) {
    a6.style.color = 'black';           //6
    a5.style.color = '#005caa';
  } 

  if(tiempoDeVideo > 143) {
    a5.style.color = 'black';           //7
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 148) {
    a6.style.color = 'black';           //4
    a7.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 152) {
    a7.style.color = 'black';            //5
    a8.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 157) {
    a8.style.color = 'black';           //6
    a7.style.color = '#005caa';
  } 

  if(tiempoDeVideo > 161) {
    a7.style.color = 'black';           //7
    a8.style.color = '#f37736';
  } 
  
  if(tiempoDeVideo > 166) {
    a8.style.color = 'black';           //7
     
  } 



  //

   

  

  if(tiempoDeVideo > 203) {
     
    a9.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 208) {
    a9.style.color = 'black';
    a10.style.color = '#005caa'; //azul //2
  } 
  if(tiempoDeVideo > 213) {
    a10.style.color = 'black';
   a9.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 217) {
    a9.style.color = 'black';           //4
    a10.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 222) {
    a10.style.color = 'black';           //5
    a11.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 226) {
    a11.style.color = 'black';           //6
    a12.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 230) {
    a12.style.color = 'black';           //7
   a11.style.color = '#c51130'; //naranja
  } 

  //

  if(tiempoDeVideo > 235) {
    a11.style.color = 'black';
   a12.style.color = '#f37736'; //naranja //3
  } 

  if(tiempoDeVideo > 240) {
    a12.style.color = 'black';
    a11.style.color = '#005caa';
    
  }



  if(tiempoDeVideo > 245) {
    a11.style.color = 'black';
   a12.style.color = '#c51130'; //naranja //3
  } 

  //

  if(tiempoDeVideo > 249) {
    a12.style.color = 'black';
    a11.style.color = '#f37736';
    
  }



  if(tiempoDeVideo > 253) {
    a11.style.color = 'black';
   a12.style.color = '#c51130'; //naranja //3
  } 

  if(tiempoDeVideo > 259) {
     
   a12.style.color = 'black'; //naranja //3
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

 

 