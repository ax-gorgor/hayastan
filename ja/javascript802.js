
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'O1NqBg1aqJg',
     
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
    a1.style.fontSize = '115%'
  } 
  if(tiempoDeVideo > 27) {
    a1.style.color = 'black';
    a2.style.color = '#c51130'; //azul //2
    a1.style.fontSize = '100%';
    a2.style.fontSize = '115%'

  } 
  if(tiempoDeVideo > 32) {
    a2.style.color = 'black';
   a1.style.color = '#c51130'; //naranja //3
   a1.style.fontSize = '115%';
   a2.style.fontSize = '100%';
  } 

   if(tiempoDeVideo > 36) {
    a1.style.color = 'black';           //4
    a2.style.color = '#c51130';
    a1.style.fontSize = '100%'
    a2.style.fontSize = '115%'
   } 

   if(tiempoDeVideo > 42) {
    a2.style.color = 'black';           //5
    a3.style.color = '#c51130';
    a2.style.fontSize = '100%'
    a3.style.fontSize = '115%'
   } 

  if(tiempoDeVideo > 47) {
    a3.style.color = 'black';           //6
    a4.style.color = '#c51130';
    a3.style.fontSize = '100%'
    a4.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 53) {
    a4.style.color = 'black';           //7
   a5.style.color = '#c51130'; //naranja
   a4.style.fontSize = '100%'
   a5.style.fontSize = '115%'
  } 

   if(tiempoDeVideo > 58) {
    a5.style.color = 'black';           //3
    a6.style.color = '#c51130';
    a5.style.fontSize = '100%'
    a6.style.fontSize = '115%'
   } 

   

  if(tiempoDeVideo > 63) {
    a6.style.color = 'black';            //5
    a7.style.color = '#c51130';
    a6.style.fontSize = '100%'
    a7.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 68) {
    a7.style.color = 'black';           //6
    a8.style.color = '#c51130';
    a7.style.fontSize = '100%'
    a8.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 74) {
    a8.style.color = 'black';           //7
    a7.style.color = '#c51130';
    a8.style.fontSize = '100%'
    a7.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 79) {
    a7.style.color = 'black';           //4
    a8.style.color = '#c51130';
    a7.style.fontSize = '100%'
    a8.style.fontSize = '115%'
   } 

   if(tiempoDeVideo > 85) {
    a8.style.color = 'black'; 
    a9.style.textDecoration = 'underline'          //4
    a9.style.color = '#c51130';
    a8.style.fontSize = '100%'
   } 
  
 
 





  if(tiempoDeVideo > 94) {
             //5
   
    a9.style.textDecoration = 'none'
     
    a9.style.fontSize = '115%'
  } 



  
  if(tiempoDeVideo > 99) {
    a9.style.color = 'black';           //6
    a10.style.color = '#c51130';
    a9.style.fontSize = '100%'
    a10.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 104) {
    a10.style.color = 'black';           //7
    a9.style.color = '#c51130';
    a10.style.fontSize = '100%'
    a9.style.fontSize = '115%'
  } 
  
  if(tiempoDeVideo > 109) {
    a9.style.color = 'black';
    a10.style.color = '#c51130';  
    a9.style.fontSize = '100%'         //7
    a10.style.fontSize = '115%'
     
  } 


   
  if(tiempoDeVideo > 114) {
    a10.style.color = 'black';
    a11.style.color = '#c51130'; //azul //2
    a10.style.fontSize = '100%'
    a11.style.fontSize = '115%'
  } 
  if(tiempoDeVideo > 120) {
    a11.style.color = 'black';
   a12.style.color = '#c51130'; //naranja //3
   a11.style.fontSize = '100%'
   a12.style.fontSize = '115%'
  } 

   if(tiempoDeVideo > 125) {
    a12.style.color = 'black';           //4
    a13.style.color = '#c51130';
    a12.style.fontSize = '100%'
    a13.style.fontSize = '115%'
   } 

   if(tiempoDeVideo > 130) {
    a13.style.color = 'black';           //5
    a14.style.color = '#c51130';
    a13.style.fontSize = '100%'
    a14.style.fontSize = '115%'
   } 

  if(tiempoDeVideo > 135) {
    a14.style.color = 'black';           //6
    a15.style.color = '#c51130';
    a14.style.fontSize = '100%'
    a15.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 140) {
    a15.style.color = 'black';           //7
   a16.style.color = '#c51130'; //naranja
   a15.style.fontSize = '100%'
   a16.style.fontSize = '115%'
  } 

  //

  if(tiempoDeVideo > 145) {
    a16.style.color = 'black';
   a15.style.color = '#c51130'; //naranja //3
   a16.style.fontSize = '100%'
   a15.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 150) {
    a15.style.color = 'black';
    a16.style.color = '#c51130';
    a15.style.fontSize = '100%'
    a16.style.fontSize = '115%'
    
  }

  if(tiempoDeVideo > 156) {
    a16.style.color = 'black';
    a17.style.textDecoration = 'underline';
    a17.style.color = '#c51130'; 
    a16.style.fontSize = '100%'

  }

  if(tiempoDeVideo > 176) {
   
    
   a17.style.textDecoration = 'none'; //naranja //3
   a17.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 181) {
    a17.style.color = 'black';
    a18.style.color = '#c51130';
    a18.style.fontSize = '115%'
    a17.style.fontSize = '100%'
    
  }



  if(tiempoDeVideo > 186) {
    a18.style.color = 'black';
   a17.style.color = '#c51130'; //naranja //3
   a18.style.fontSize = '100%'
   a17.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 191) {
    a17.style.color = 'black';
   a18.style.color = '#c51130'; //naranja //3
   a17.style.fontSize = '100%'
   a18.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 196) {
    a18.style.color = 'black';
   a19.style.color = '#c51130'; //naranja //3
   a18.style.fontSize = '100%'
   a19.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 202) {
    a19.style.color = 'black';
   a20.style.color = '#c51130'; //naranja //3
   a19.style.fontSize = '100%'
   a20.style.fontSize = '115%'
  } 

  if(tiempoDeVideo > 207) {
    a20.style.color = 'black';
   a21.style.color = '#c51130'; //naranja //3
   a20.style.fontSize = '100%';
   a21.style.fontSize = '115%'

  } 

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

 

 