
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: '8UU9Ae7RRZE',
     
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


 var a0 = document.getElementById('a0');
 var a1 = document.getElementById('a1');
 var a2 = document.getElementById('a2');
 var a3 = document.getElementById('a3');
 var a4 = document.getElementById('a4');
 var a5 = document.getElementById('a5');
 var a6 = document.getElementById('a6');
 var a7 = document.getElementById('a7');
 var a8 = document.getElementById('a8');
 
 var a9 = document.getElementById('a9');
 var a10 = document.getElementById('a10');
 var a11 = document.getElementById('a11');
 var a12 = document.getElementById('a12');
 var a13 = document.getElementById('a13');
 var a14 = document.getElementById('a14');
 var a15 = document.getElementById('a15');
 var a16 = document.getElementById('a16');
 var a17 = document.getElementById('a17');
 
 var a18 = document.getElementById('a18');
 var a19 = document.getElementById('a19');
 var a20 = document.getElementById('a20');
 var a21 = document.getElementById('a21');
 var a22 = document.getElementById('a22');
 var a23 = document.getElementById('a23');
 var a24 = document.getElementById('a24');
 var a25 = document.getElementById('a25');
 var a26 = document.getElementById('a26');
 
 var a27 = document.getElementById('a27');
 var a28 = document.getElementById('a28');
 var a29 = document.getElementById('a29');
 var a30 = document.getElementById('a30');
 var a31 = document.getElementById('a31');
 var a32 = document.getElementById('a32');
 var a33 = document.getElementById('a33');
 var a34 = document.getElementById('a34');
 var a35 = document.getElementById('a35');
 
 var a36 = document.getElementById('a36');
 var a37 = document.getElementById('a37');
 var a38 = document.getElementById('a38');
 var a39 = document.getElementById('a39');
 var a40 = document.getElementById('a40');
 var a41 = document.getElementById('a41');
 var a42 = document.getElementById('a42');
 var a43 = document.getElementById('a43');
 var a44 = document.getElementById('a44');
 var a45 = document.getElementById('a45');
 var a46 = document.getElementById('a46');
 var a47 = document.getElementById('a47');
 var a48 = document.getElementById('a48');
 var a49 = document.getElementById('a49');
  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) y si pasaron mas de 5 segundos, va a pintar "intro" de rojo. Si pasaron
 // mas de 8 segundos, va a pintar "introd" (la segunda linea) de rojo y pintar "intro"
 // (la primera linea) de negro otra vez. Y si pasaron mas de 9 segundos, va a pintar la
 // tercera linea de rojo y la segunda de negro otra vez.
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();  //  #b8ca02  #188b1d  #58b036 #7ab887
   
  if(tiempoDeVideo > 12) {
    a1.style.color = '#3c75ff'; //rojo    //1
    a1.style.fontSize = '115%'
  } 

   
  if(tiempoDeVideo > 16) {
    a1.style.color = 'black';
    a2.style.color = '#3c75ff'; //azul //2
    a1.style.fontSize = '100%'
    a2.style.fontSize = '115%'
  } 
  
   
  if(tiempoDeVideo > 20) {
    a2.style.color = 'black';
   a3.style.color = '#3c75ff';  
   a2.style.fontSize = '100%'
   a3.style.fontSize = '115%'
  } 
   
   if(tiempoDeVideo > 24) {
    a3.style.color = 'black';            
    a4.style.color = '#3c75ff';
    a3.style.fontSize = '100%'
    a4.style.fontSize = '115%'
   } 
    
   if(tiempoDeVideo > 28) {
    a4.style.color = 'black';  
    a4.style.fontSize = '100%';        
    a1.style.color = '#3c75ff';
    a1.style.fontSize = '115%'
   } 
    
  if(tiempoDeVideo > 32) {
    a1.style.color = 'black';  
    a1.style.fontSize = '100%';          //6         //6
    a2.style.color = '#3c75ff';
    a2.style.fontSize = '115%'; 
  } 
   
  if(tiempoDeVideo > 36.5) {
    a2.style.color = 'black';  
    a2.style.fontSize = '100%';          //7
   a3.style.color = '#3c75ff'; //naranja
   a3.style.fontSize = '115%'; 
  } 
    
   if(tiempoDeVideo > 40.5) {
    a3.style.color = 'black';    
    a3.style.fontSize = '100%';        //3
    a4.style.color = '#3c75ff';
    a4.style.fontSize = '115%'; 
   } 
 
  
  if(tiempoDeVideo > 44.5) {
    a4.style.color = 'black';
    a4.style.fontSize = '100%';            //7
    a5.style.color = '#3c75ff';
    a5.style.fontSize = '115%'; 
    
  }
  
  if(tiempoDeVideo > 48.5) {
    a5.style.color = 'black';  
    a5.style.fontSize = '100%';          //6
    a6.style.color = '#3c75ff';
    a6.style.fontSize = '115%';   ; 
  } 
  
  if(tiempoDeVideo > 52.5) {
    a6.style.color = 'black';   
    a6.style.fontSize = '100%'; 
    a7.style.color = '#3c75ff';   
    a7.style.fontSize = '115%';         //7
     } 
   
  if(tiempoDeVideo > 56.5) {
    a7.style.color = 'black';
    a7.style.fontSize = '100%'; 
    a8.style.color = '#3c75ff'; 
    a8.style.fontSize = '115%'; 
  } 
   
  if(tiempoDeVideo > 60.5) {
    a8.style.color = 'black';
    a8.style.fontSize = '100%'; 
   a5.style.color = '#3c75ff'; 
   a5.style.fontSize = '115%'; 
  } 
   
   if(tiempoDeVideo > 65.5) {
    a5.style.color = 'black'; 
    a5.style.fontSize = '100%';           //5
    a6.style.color = '#3c75ff';
    a6.style.fontSize = '115%'; 
   } 
   
  if(tiempoDeVideo > 69.5) {
    a6.style.color = 'black'; 
    a6.style.fontSize = '100%';           //6
    a7.style.color = '#3c75ff';
    a7.style.fontSize = '115%'; 
  } 
   
  if(tiempoDeVideo > 73.5) {
    a7.style.color = 'black';   
    a7.style.fontSize = '100%';          
   a8.style.color = '#3c75ff';  
   a8.style.fontSize = '115%'; 
  } 
  
  if(tiempoDeVideo > 78) {
    a8.style.color = 'black';
    a8.style.fontSize = '100%'; 
    a9.style.textDecoration = 'underline'
     
    
  }
  
  
  if(tiempoDeVideo > 83) {
     
    a9.style.color = '#3c75ff';
    a9.style.fontSize = '115%'; 
    a9.style.textDecoration = 'none'
    
  }
  
 
  if(tiempoDeVideo > 87) {
    a9.style.color = 'black';
    a9.style.fontSize = '100%'; 
   a10.style.color = '#3c75ff'; //naranja //3
   a10.style.fontSize = '115%'; 
  } 
    
  if(tiempoDeVideo > 91.5) {
    a10.style.color = 'black';
    a10.style.fontSize = '100%'; 
   a11.style.color = '#3c75ff'; //naranja //3
   a11.style.fontSize = '115%'; 
  } 
  
  if(tiempoDeVideo > 95) {
    a11.style.color = 'black';
    a11.style.fontSize = '100%'; 
   a12.style.color = '#3c75ff'; //naranja //3
   a12.style.fontSize = '115%'; 
  } 
  
  if(tiempoDeVideo > 99.5) {
    a12.style.color = 'black';
    a12.style.fontSize = '100%'; 
   a9.style.color = '#3c75ff'; //naranja //3
   a9.style.fontSize = '115%'; 
  } 
   
  if(tiempoDeVideo > 104) {
    a9.style.color = 'black';
    a9.style.fontSize = '100%'; 
   a10.style.color = '#3c75ff'; //naranja //3
   a10.style.fontSize = '115%'; 
  } 

   
  if(tiempoDeVideo > 107.5) {
    a10.style.color = 'black';
    a10.style.fontSize = '100%'; 
   a11.style.color = '#3c75ff'; //naranja //3
   a11.style.fontSize = '115%'; 
  } 
   
  if(tiempoDeVideo > 112) {
    a11.style.color = 'black';
    a11.style.fontSize = '100%'; 
   a12.style.color = '#3c75ff'; //naranja //3
   a12.style.fontSize = '115%'; 
  } 
 
 
  if(tiempoDeVideo > 116) {
    a12.style.color = 'black';
    a12.style.fontSize = '100%'; 
   a13.style.color = '#3c75ff'; //naranja //3
   a13.style.fontSize = '115%'; 
  } 

    
  if(tiempoDeVideo > 120) {
    a13.style.color = 'black';
    a13.style.fontSize = '100%'; 
   a14.style.color = '#3c75ff'; //naranja //3
   a14.style.fontSize = '115%'; 
  } 
   
  if(tiempoDeVideo > 124) {
    a14.style.color = 'black';
    a14.style.fontSize = '100%'; 
   a15.style.color = '#3c75ff'; //naranja //3
   a15.style.fontSize = '115%'; 
  } 
   
 
 if(tiempoDeVideo > 128) {
    a15.style.color = 'black';
    a15.style.fontSize = '100%'; 
   a16.style.color = '#3c75ff'; //naranja //3
   a16.style.fontSize = '115%'; 
  } 
 
   if(tiempoDeVideo > 132) {
    a16.style.color = 'black';
    a16.style.fontSize = '100%'; 
   a13.style.color = '#3c75ff'; //naranja //3
   a13.style.fontSize = '115%'; 
   }
 
   if(tiempoDeVideo > 136) {
    a13.style.color = 'black';
    a13.style.fontSize = '100%'; 
   a14.style.color = '#3c75ff'; //naranja //3
   a14.style.fontSize = '115%'; 
  }

  if(tiempoDeVideo > 140.5) {
    a14.style.color = 'black';
    a14.style.fontSize = '100%'; 
   a15.style.color = '#3c75ff'; //naranja //3
   a15.style.fontSize = '115%'; 
  }
 

   if(tiempoDeVideo > 144) {
    a15.style.color = 'black';
    a15.style.fontSize = '100%'; 
   a16.style.color = '#3c75ff'; //naranja //3
   a16.style.fontSize = '115%'; 
   }
  

  if(tiempoDeVideo > 149.5) {
    a16.style.color = 'black';
    a16.style.fontSize = '100%'; 
    a13.style.textDecoration = 'underline'
    } 


  if(tiempoDeVideo > 167) {
     
    a13.style.color = '#3c75ff';
    a13.style.fontSize = '115%'; 
    a13.style.textDecoration = 'none'
    
  }
  
 
   if(tiempoDeVideo > 171) {
    a13.style.color = 'black';
    a13.style.fontSize = '100%'; 
   a14.style.color = '#3c75ff'; //naranja //3
   a14.style.fontSize = '115%'; 
  }
 
  if(tiempoDeVideo > 175) {
    a14.style.color = 'black';
    a14.style.fontSize = '100%'; 
   a15.style.color = '#3c75ff'; //naranja //3
   a15.style.fontSize = '115%'; 
  }
 
     if(tiempoDeVideo > 179) {
    a15.style.color = 'black';
    a15.style.fontSize = '100%'; 
   a16.style.color = '#3c75ff'; //naranja //3
   a16.style.fontSize = '115%'; 
  }
 
  if(tiempoDeVideo > 182) {
    a16.style.color = 'black';
    a16.style.fontSize = '100%'; 
   a13.style.color = '#3c75ff'; //naranja //3
   a13.style.fontSize = '115%'; 
  }
 

     if(tiempoDeVideo > 186.5) {
    a13.style.color = 'black';
    a13.style.fontSize = '100%'; 
   a14.style.color = '#3c75ff'; //naranja //3
   a14.style.fontSize = '115%'; 
  }
 
  if(tiempoDeVideo > 191) {
    a14.style.color = 'black';
    a14.style.fontSize = '100%'; 
   a15.style.color = '#3c75ff'; //naranja //3
   a15.style.fontSize = '115%'; 
  }
 
    if(tiempoDeVideo > 195) {
    a15.style.color = 'black';
    a15.style.fontSize = '100%'; 
   a16.style.color = '#3c75ff'; //naranja //3
   a16.style.fontSize = '115%'; 
  }

 
if(tiempoDeVideo > 199) {
    a16.style.color = 'black';
    a16.style.fontSize = '100%'; 
   a15.style.color = '#3c75ff'; //naranja //3
   a15.style.fontSize = '115%'; 
  }
 
 
     if(tiempoDeVideo > 203) {
    a15.style.color = 'black';
    a15.style.fontSize = '100%'; 
   a16.style.color = '#3c75ff'; //naranja //3
   a16.style.fontSize = '115%'; 
  }
  
  if(tiempoDeVideo > 211) {
    a16.style.color = 'black';
    a16.style.fontSize = '100%'; 
   
  }
 /*
    if(tiempoDeVideo > 195) {
    a15.style.color = 'black';
    a15.style.fontSize = '100%'; 
   a16.style.color = '#2d6520'; //naranja //3
   a16.style.fontSize = '125%'; 
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
