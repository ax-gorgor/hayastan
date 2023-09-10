
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'KgMUfMjExdg',
     
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

  if(tiempoDeVideo > 18.5) {
    a1.style.color = '#c51130'; //rojo    //1
    a1.style.fontSize = '115%'
    a1.style.transition = 'font-size 0.3s ease';
  } 
   
  if(tiempoDeVideo > 29) {
    a1.style.color = 'black';
    a2.style.color = '#c51130'; 
    a1.style.fontSize = '100%';
    a2.style.fontSize = '115%';
    a1.style.transition = 'none';

  } 
  
  if(tiempoDeVideo > 40) {
    a2.style.color = 'black';
   a1.style.color = '#c51130'; //naranja //3
   a1.style.fontSize = '115%';
   a2.style.fontSize = '100%';
   a1.style.transition = 'none';
  } 
  
   if(tiempoDeVideo > 50) {
    a1.style.color = 'black';           //4
    a2.style.color = '#c51130';
    a1.style.fontSize = '100%';
    a2.style.fontSize = '115%';
   } 
  
   if(tiempoDeVideo > 59) {
    a2.style.color = 'black';           //5
    a3.style.color = '#c51130';
    a2.style.fontSize = '100%';
    a3.style.fontSize = '115%';
   } 
  
  if(tiempoDeVideo > 70.5) {
    a3.style.color = 'black';           //6
    a4.style.color = '#c51130';
    a3.style.fontSize = '100%';
    a4.style.fontSize = '115%';
  } 
  
  if(tiempoDeVideo > 81.5) {
   a4.style.color = 'black';           //7
   a5.style.color = '#c51130'; //naranja
   a4.style.fontSize = '100%';
   a5.style.fontSize = '115%';
  } 
  
   if(tiempoDeVideo > 87.5) {
    a5.style.color = 'black';           //3
    a6.style.color = '#c51130';
    a5.style.fontSize = '100%';
    a6.style.fontSize = '115%';
   } 
 
   

  if(tiempoDeVideo > 93) {
    a6.style.color = 'black';            //5
    a7.style.color = '#c51130';
    a6.style.fontSize = '100%';
    a7.style.fontSize = '115%';
  } 
  
  if(tiempoDeVideo > 97.5) {
    a7.style.color = 'black';           //6
    a8.style.color = '#c51130';
    a7.style.fontSize = '100%';
    a8.style.fontSize = '115%';
  } 
  
  if(tiempoDeVideo > 103.5) {
    a8.style.color = 'black';           //7
    a5.style.color = '#c51130';
    a8.style.fontSize = '100%';
    a5.style.fontSize = '115%';
  } 
  
  if(tiempoDeVideo > 109) {
    a5.style.color = 'black';           //4
    a6.style.color = '#c51130';
    a5.style.fontSize = '100%';
    a6.style.fontSize = '115%';
   } 
  
  if(tiempoDeVideo > 114) {
    a6.style.color = 'black';           //6
    a7.style.color = '#c51130';
    a6.style.fontSize = '100%';
    a7.style.fontSize = '115%';
  } 
  
  if(tiempoDeVideo > 119) {
    a7.style.color = 'black';           //7
    a8.style.color = '#c51130';
    a7.style.fontSize = '100%';
    a8.style.fontSize = '115%';
  } 
   

  if(tiempoDeVideo > 125) {

    a8.style.color = 'black';
    a8.style.fontSize = '100%';     
    a9.style.fontSize = '115%';
    a9.style.textDecoration = 'underline';
    a9.style.transition = 'font-size 1.5s ease';
     
  } 
  

  if(tiempoDeVideo > 133) {
    
    a9.style.color = '#c51130';
    a9.style.fontSize = '115%'
    a9.style.textDecoration = 'none';
    a9.style.transition = 'none';
     
  } 
 
   
  if(tiempoDeVideo > 143) {
    a9.style.color = 'black';
    a10.style.color = '#c51130';  
    a9.style.fontSize = '100%';
    a10.style.fontSize = '115%';
  } 

   
  if(tiempoDeVideo > 154) {
    a10.style.color = 'black';
   a9.style.color = '#c51130'; 
   a10.style.fontSize = '100%';
   a9.style.fontSize = '115%';
  } 
  
   if(tiempoDeVideo > 165) {
    a9.style.color = 'black';           
    a10.style.color = '#c51130';
    a9.style.fontSize = '100%';
    a10.style.fontSize = '115%';
   } 
  
   if(tiempoDeVideo > 175) {
    a10.style.color = 'black';            
    a11.style.color = '#c51130';
    a10.style.fontSize = '100%';
    a11.style.fontSize = '115%';
   } 
  
  if(tiempoDeVideo > 185.5) {
    a11.style.color = 'black';           
    a12.style.color = '#c51130';
    a11.style.fontSize = '100%';
    a12.style.fontSize = '115%';
  } 
 
  if(tiempoDeVideo > 195.5) {
    a12.style.color = 'black';           
   a13.style.color = '#c51130';  
   a12.style.fontSize = '100%';
   a13.style.fontSize = '115%';
  } 

   

  if(tiempoDeVideo > 202) {
    a13.style.color = 'black';
   a14.style.color = '#c51130'; //naranja //3
   a13.style.fontSize = '100%';
   a14.style.fontSize = '115%';
  } 
 
  if(tiempoDeVideo > 207.5) {
    a14.style.color = 'black';
    a15.style.color = '#c51130';
    a14.style.fontSize = '100%';
    a15.style.fontSize = '115%';
    
  }
 
 
  if(tiempoDeVideo > 212) {
    a15.style.color = 'black';
    a16.style.color = '#c51130';
    a16.style.fontSize = '115%';
    a15.style.fontSize = '100%';
    
  }
 
 
  if(tiempoDeVideo > 217.5) {
    a16.style.color = 'black';
   a13.style.color = '#c51130';  
   a16.style.fontSize = '100%';
   a13.style.fontSize = '115%';
   
  } 
  
  if(tiempoDeVideo > 224) {
    a13.style.color = 'black';
   a14.style.color = '#c51130'; //naranja //3
   a13.style.fontSize = '100%';
   a14.style.fontSize = '115%';
   
  } 
  
  if(tiempoDeVideo > 229) {
    a14.style.color = 'black';
   a15.style.color = '#c51130'; //naranja //3
   a14.style.fontSize = '100%';
   a15.style.fontSize = '115%';
   
  } 
  
  if(tiempoDeVideo > 234) {
    a15.style.color = 'black';
   a16.style.color = '#c51130'; //naranja //3
   a15.style.fontSize = '100%';
   a16.style.fontSize = '115%';
  } 
  
  if(tiempoDeVideo > 254) {
    a16.style.color = 'black';
   
   a16.style.fontSize = '100%';
   a16.style.transition = 'font-size 1s ease';
   

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

 

 