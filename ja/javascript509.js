var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'etNl9lZtLqI',
     
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
  

 
 var tiempoDeVideo = 0;

  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  //if(tiempoDeVideo > 0) {
  //  a0.style.color = 'white'; //rojo    //1
 // } 

 // if(tiempoDeVideo > 3) {
 //   a0.style.color = 'grey'; //rojo    //1
 // } 

 // if(tiempoDeVideo > 13 ) {
  //  a0.style.color = 'white'; //rojo    //1
 // } 

  if(tiempoDeVideo > 83) {
    a1.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 85) {
    a1.style.color = 'black';
    a2.style.color = '#f37736'; //azul //2
  } 
   

   if(tiempoDeVideo > 88) {
    a2.style.color = 'black'; 
    a1.style.color = '#c51130';          //4
     
   } 

   if(tiempoDeVideo > 90) {
    a1.style.color = 'black';
    a2.style.color = '#f37736';           //5
     
   } 


  
  if(tiempoDeVideo > 93) {
    a2.style.color = 'black';           //6
    a3.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 95) {
    a3.style.color = 'black';           //7
   a4.style.color = '#f37736'; //naranja
  } 

   if(tiempoDeVideo > 98) {
    a4.style.color = 'black';           //3
    a3.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 100) {
    a3.style.color = 'black';           //4
    a4.style.color = '#f37736';
   } 


 
  if(tiempoDeVideo > 105) {
    a4.style.color = 'black';            //5
    a5.style.color = '#c51130';
  } 



  if(tiempoDeVideo > 110) {
    a5.style.color = 'black';            //5
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 114.5) {
            
    a6.style.color = 'black';
    a7.style.color = '#005caa';
  } 

  if(tiempoDeVideo > 119.5) {
    a7.style.color = 'black';           //7
    a8.style.color = '#c51130';
  } 

  

  if(tiempoDeVideo > 125) {
    a8.style.color = 'black';
    
  } 

  /*
  if(tiempoDeVideo > 154) {
    a13.style.color = 'black';
    a14.style.color = '#c51130';
     
     
  } 
  if(tiempoDeVideo > 164) {
    a14.style.color = 'black';
   a15.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 173) {
    a15.style.color = 'black';           //4
    a16.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 182) {
                
    a16.style.color = 'black';
   } 

   if(tiempoDeVideo > 225) {
    a17.style.color = '#005caa';           //5
     
   } 

  if(tiempoDeVideo > 238) {
    a17.style.color = 'black';           //6
    a18.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 248) {
    a18.style.color = 'black';           //7
   a19.style.color = '#005caa'; //naranja
  } 

  //

  if(tiempoDeVideo > 257) {
    a19.style.color = 'black';
    a20.style.color = '#f37736'; 
   
  } 

  
  if(tiempoDeVideo > 267) {
    a20.style.color = 'black';           //6
    a21.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 277) {
    a21.style.color = 'black';           //7
   a22.style.color = '#005caa'; //naranja
  } 

  //

  if(tiempoDeVideo > 286) {
    a22.style.color = 'black';
    a23.style.color = '#f37736'; 
   
  } 

  if(tiempoDeVideo > 296) {
    a23.style.color = 'black';
    a24.style.color = '#c51130'; 
   
  } 

  if(tiempoDeVideo > 306) {
     
    a24.style.color = 'black'; 
   
  }
  if(tiempoDeVideo > 31) {
     
    a25.style.color = 'black'; 
    a26.style.color = 'grey'; 
    a27.style.color = 'grey'; 
    a28.style.color = 'grey'; 
    a29.style.color = 'grey'; 
    a30.style.color = 'grey'; 
     
   
  }

  if(tiempoDeVideo > 70) {
     
    a25.style.color = 'grey'; 
    a26.style.color = 'black'; 
    a27.style.color = 'grey'; 
    a28.style.color = 'grey'; 
    a29.style.color = 'grey'; 
    a30.style.color = 'grey'; 
     }

     if(tiempoDeVideo > 105) {
     
      a25.style.color = 'grey'; 
      a26.style.color = 'grey'; 
      a27.style.color = 'black'; 
      a28.style.color = 'grey'; 
      a29.style.color = 'grey'; 
      a30.style.color = 'grey'; 
       }

       if(tiempoDeVideo > 144) {
     
        a25.style.color = 'grey'; 
        a26.style.color = 'grey'; 
        a27.style.color = 'grey'; 
        a28.style.color = 'black'; 
        a29.style.color = 'grey'; 
        a30.style.color = 'grey'; 
         }

         if(tiempoDeVideo > 229) {
     
          a25.style.color = 'grey'; 
          a26.style.color = 'grey'; 
          a27.style.color = 'grey'; 
          a28.style.color = 'grey'; 
          a29.style.color = 'black'; 
          a30.style.color = 'grey'; 
           }

           if(tiempoDeVideo > 267) {
     
            a25.style.color = 'grey'; 
            a26.style.color = 'grey'; 
            a27.style.color = 'grey'; 
            a28.style.color = 'grey'; 
            a29.style.color = 'grey'; 
            a30.style.color = 'black'; 
             }

             if(tiempoDeVideo > 307) {
     
              a25.style.color = 'black'; 
              a26.style.color = 'black'; 
              a27.style.color = 'black'; 
              a28.style.color = 'black'; 
              a29.style.color = 'black'; 
              a30.style.color = 'black'; 
               }


   
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

 

 