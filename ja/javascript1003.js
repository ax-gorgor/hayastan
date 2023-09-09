var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'qY5hFPsVoUY',
     
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
 /*
  if(tiempoDeVideo > 64) {
    a1.style.color = '#ff2a87'; //rojo    //1
    a1.style.fontSize = '115%'
  } 

  
  if(tiempoDeVideo > 67.5) {
    a1.style.color = 'black';
    a2.style.color = '#ff2a87'; //azul //2
    a2.style.fontSize = '115%';
    a1.style.fontSize = '100%';
  } 
   
  if(tiempoDeVideo > 72) {
    a2.style.color = 'black';
   a3.style.color = '#ff2a87'; //naranja //3
   a3.style.fontSize = '115%';
   a2.style.fontSize = '100%';
  } 

   if(tiempoDeVideo > 76.5) {
    a3.style.color = 'black';           //4
    a4.style.color = '#ff2a87';
    a4.style.fontSize = '115%';
    a3.style.fontSize = '100%';
   } 

   if(tiempoDeVideo > 80) {
    a4.style.color = 'black';           //5
    a3.style.color = '#ff2a87';
    a3.style.fontSize = '115%';
    a4.style.fontSize = '100%';
   } 
 
  if(tiempoDeVideo > 83.5) {
    a3.style.color = 'black';           //6
    a4.style.color = '#ff2a87';
    a4.style.fontSize = '115%';
    a3.style.fontSize = '100%';
  } 
 
  if(tiempoDeVideo > 87.5) {
    a4.style.color = 'black';           //7
   a5.style.color = '#ff2a87';
   a5.style.fontSize = '115%'; //naranja
   a4.style.fontSize = '100%';
  } 

   if(tiempoDeVideo > 92) {
    a5.style.color = 'black';           //3
    a6.style.color = '#ff2a87';
    a6.style.fontSize = '115%';
    a5.style.fontSize = '100%';
   } 
 

  if(tiempoDeVideo > 96) {
    a6.style.color = 'black';           //6
    a7.style.color = '#ff2a87';
    a7.style.fontSize = '115%';
    a6.style.fontSize = '100%';
  } 
 
  if(tiempoDeVideo > 99.5) {
    a7.style.color = 'black';           //7
    a8.style.color = '#ff2a87';
    a8.style.fontSize = '115%';
    a7.style.fontSize = '100%';
  } 
 
  if(tiempoDeVideo > 104) {
    a8.style.fontSize = '100%';
    a9.style.color = '#ff2a87';
    a8.style.color = 'black';
    a9.style.fontSize = '100%';
   } 
  
  if(tiempoDeVideo > 124) {
   
    a9.style.fontSize = '115%';
  } 
   
  if(tiempoDeVideo > 128) {
    a9.style.color = 'black';
    a10.style.color = '#ff2a87';
    a10.style.fontSize = '115%';
    a9.style.fontSize = '100%';           //7
     
  } 
  
   
  if(tiempoDeVideo > 132) {
    a10.style.color = 'black';
    a11.style.color = '#ff2a87'; //azul //2
    a11.style.fontSize = '115%';
    a10.style.fontSize = '100%';
  } 
 
   
  if(tiempoDeVideo > 136) {
    a11.style.color = 'black';
   a12.style.color = '#ff2a87';  
   a12.style.fontSize = '115%';
   a11.style.fontSize = '100%';
  } 
  
  
   if(tiempoDeVideo > 140) {
    a12.style.color = 'black';           //5
    a11.style.color = '#ff2a87';
    a11.style.fontSize = '115%';
    a12.style.fontSize = '100%';
   } 
  
  if(tiempoDeVideo > 144) {
    a11.style.color = 'black';           //6
    a12.style.color = '#ff2a87';
    a12.style.fontSize = '115%';
    a11.style.fontSize = '100%';
  } 
  
  if(tiempoDeVideo > 148) {
    a12.style.color = 'black';           //7
   a13.style.color = '#ff2a87'; //naranja
   a13.style.fontSize = '115%';
   a12.style.fontSize = '100%';
  } 
 

  if(tiempoDeVideo > 152) {
    a13.style.color = 'black';
   a14.style.color = '#ff2a87'; //naranja //3
   a14.style.fontSize = '115%';
   a13.style.fontSize = '100%';
  } 
  

  if(tiempoDeVideo > 156) {
    a14.style.color = 'black';
    a15.style.color = '#ff2a87';
    a15.style.fontSize = '115%';
    a14.style.fontSize = '100%';
    
  }
   

  if(tiempoDeVideo > 160) {
    a15.style.color = 'black';
    a16.style.color = '#ff2a87';
    a16.style.fontSize = '100%';
    a15.style.fontSize = '100%';
    
  }
  
 
  if(tiempoDeVideo > 165) {
      a16.style.color = 'black';
      a16.style.fontSize = '100%';
      a17.style.color = '#ff2a87';
   }

    
    if(tiempoDeVideo > 184) {
     
    
    a17.style.fontSize = '115%';
     
    
  }
 
   if(tiempoDeVideo > 188) {
    a17.style.color = 'black';
    a18.style.color = '#ff2a87';
    a18.style.fontSize = '115%';
    a17.style.fontSize = '100%';
    
  }
 
   if(tiempoDeVideo > 192) {
    a18.style.color = 'black';
    a19.style.color = '#ff2a87';
    a19.style.fontSize = '115%';
    a18.style.fontSize = '100%';
    
  }
 

   if(tiempoDeVideo > 196) {
    a19.style.color = 'black';
    a20.style.color = '#ff2a87';
    a20.style.fontSize = '115%';
    a19.style.fontSize = '100%';
    
  }
  
     if(tiempoDeVideo > 200) {
    a20.style.color = 'black';
    a19.style.color = '#ff2a87';
    a19.style.fontSize = '115%';
    a20.style.fontSize = '100%';
    
  }

   

      if(tiempoDeVideo > 204) {
    a19.style.color = 'black';
    a20.style.color = '#ff2a87';
    a20.style.fontSize = '115%';
    a19.style.fontSize = '100%';
    
  }
  

      if(tiempoDeVideo > 208) {
    a20.style.color = 'black';
    a21.style.color = '#ff2a87';
    a21.style.fontSize = '115%';
    a20.style.fontSize = '100%';
    
  }
  
      if(tiempoDeVideo > 212) {
    a21.style.color = 'black';
    a22.style.color = '#ff2a87';
    a22.style.fontSize = '115%';
    a21.style.fontSize = '100%';
    
  }

    
      if(tiempoDeVideo > 216) {
    a22.style.color = 'black';
    a23.style.color = '#ff2a87';
    a23.style.fontSize = '115%';
    a22.style.fontSize = '100%';
    
  }
 
    if(tiempoDeVideo > 220) {
    a23.style.color = 'black';
    a24.style.color = '#ff2a87';
    a24.style.fontSize = '115%';
    a23.style.fontSize = '100%';
    
  }
 
   if(tiempoDeVideo > 224) {
    a24.style.color = 'black';
    a25.style.color = '#ff2a87';
    a25.style.fontSize = '115%';
    a24.style.fontSize = '100%';
   }
 
     if(tiempoDeVideo > 228) {
    a25.style.color = 'black';
    a26.style.color = '#ff2a87';
    a26.style.fontSize = '115%';
    a25.style.fontSize = '100%';
     }
      
     if(tiempoDeVideo > 232) {
    a26.style.color = 'black';
    a27.style.color = '#ff2a87';
    a27.style.fontSize = '115%';
    a26.style.fontSize = '100%';}
     

     if(tiempoDeVideo > 236) {
    a27.style.color = 'black';
    a28.style.color = '#ff2a87';
    a28.style.fontSize = '115%';
    a27.style.fontSize = '100%';
  }
    
     if(tiempoDeVideo > 241) {
    a28.style.color = 'black';
     
    a28.style.fontSize = '100%';
     }

  /*
 
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

 
