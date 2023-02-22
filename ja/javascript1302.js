
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'FEMQ1ZatIzU',
     
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
 
  if(tiempoDeVideo > 7) {
    a1.style.color = '#ac80c9'; //rojo    //1
    a1.style.fontSize = '115%'
  } 

  
  if(tiempoDeVideo > 19) {
    
    a2.style.color = '#ac80c9'; //azul //2
    a3.style.color = '#ac80c9';  
   a3.style.fontSize = '115%';
    a2.style.fontSize = '115%';
    a1.style.fontSize = '100%';
    a1.style.color = '#000000';
  } 
   

   if(tiempoDeVideo > 40) {
              //4
    a4.style.color = '#ac80c9';
    a4.style.fontSize = '115%';
    a3.style.fontSize = '100%';
    a2.style.fontSize = '100%';
    a1.style.color = '#ac80c9';
   } 
 
   if(tiempoDeVideo > 57) {
               //5
    a5.style.color = '#ac80c9';
    a5.style.fontSize = '115%';
    a4.style.fontSize = '100%';
   
   } 
 
  if(tiempoDeVideo > 59) {
             //6
    a6.style.color = '#ac80c9';
    a6.style.fontSize = '115%';
    a5.style.fontSize = '100%';
  } 
 
  if(tiempoDeVideo > 71) {
              //7
   a7.style.color = '#ac80c9';
   a7.style.fontSize = '115%'; //naranja
   a6.style.fontSize = '100%';
  } 
 
   if(tiempoDeVideo > 74) {
   a8.style.color = '#ac80c9';
   a8.style.fontSize = '115%';  
   a7.style.fontSize = '100%';
   a1.style.color = '#000000';
   a2.style.color = '#000000';
   a3.style.color = '#000000';
   a4.style.color = '#000000';
   a5.style.color = '#000000';
   a6.style.color = '#000000';
   a7.style.color = '#000000';

   } 
 

  if(tiempoDeVideo > 84) {
   a9.style.color = '#ac80c9';
   a9.style.fontSize = '115%';  
   a8.style.fontSize = '100%';
  } 
  
  if(tiempoDeVideo > 85) {
   a10.style.color = '#ac80c9';
   a10.style.fontSize = '115%';  
   a9.style.fontSize = '100%';
  } 
  
  if(tiempoDeVideo > 125) {
   a11.style.color = '#ac80c9';
   a11.style.fontSize = '115%';  
   a10.style.fontSize = '100%';
   } 
   
   
  if(tiempoDeVideo > 138) {
    a12.style.color = '#ac80c9';
   a12.style.fontSize = '115%';  
   a11.style.fontSize = '100%';  

       
     
  } 
  
   
  if(tiempoDeVideo > 141.5) {
   a13.style.color = '#ac80c9';
   a13.style.fontSize = '115%';  
   a12.style.fontSize = '100%'; 
   a8.style.color = '#000000';
   a9.style.color = '#000000';
   a10.style.color = '#000000';
   a11.style.color = '#000000';
   a12.style.color = '#000000';
  } 
 
   
  if(tiempoDeVideo > 152) {
   a14.style.color = '#ac80c9';
   a14.style.fontSize = '115%';  
   a13.style.fontSize = '100%'; 
  } 
  
  
   if(tiempoDeVideo > 195) {
   a15.style.color = '#ac80c9';
   a15.style.fontSize = '115%';  
   a14.style.fontSize = '100%'; 
   } 
   
  if(tiempoDeVideo > 209) {
   a16.style.color = '#ac80c9';
   a16.style.fontSize = '115%';  
   a15.style.fontSize = '100%'; 
  } 
   
  if(tiempoDeVideo > 211) {
   a17.style.color = '#ac80c9';
   a17.style.fontSize = '115%';  
   a16.style.fontSize = '100%'; 
   a13.style.color = '#000000';
   a14.style.color = '#000000';
   a15.style.color = '#000000';
   a16.style.color = '#000000'; 
  } 
  
  if(tiempoDeVideo > 249.5) {
   a18.style.color = '#ac80c9';
   a18.style.fontSize = '115%';  
   a17.style.fontSize = '100%'; 
   a17.style.color = '#000000';
  } 
   
  if(tiempoDeVideo > 303) {
   a19.style.color = '#ac80c9';
   a19.style.fontSize = '115%';  
   a18.style.fontSize = '100%'; 
   a18.style.color = '#000000';
  } 
   
   
 
  if(tiempoDeVideo > 341) {
    a19.style.color = 'black';
    
    a19.style.fontSize = '100%';
   
    
  }
  
 /*
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

 
