
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'wxn86fNWM38',
     
     events: {
       'onStateChange': onPlayerStateChange
     }
   });
 }

  


 // De aca para arriba, todo el codigo esta igual, no cambie nada.

 // Creamos una variable tiempoDeVideo (que empieza con valor 0) en la que vamos
 // a ir grabando el tiempo (segundos) en el que esta el video. 
 var tiempoDeVideo = 0;

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
 var a50 = document.getElementById('a50'); 
 var a51 = document.getElementById('a51'); 
  

  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();


 

  if(tiempoDeVideo > 12) {
    a1.style.color = '#0000FF'; //rojo    //1
  } 

  
  if(tiempoDeVideo > 15) {
    a1.style.color = 'black';
    a2.style.color = '#120A8F'; //azul //2
  } 

  if(tiempoDeVideo > 18) {
    a2.style.color = 'black';
   a3.style.color = '#1560BD'; //naranja //3
  } 


   if(tiempoDeVideo > 22.5) {
    a3.style.color = 'black';           //4
    a1.style.color = '#082567';
   } 

   

   if(tiempoDeVideo > 26) {
    a1.style.color = 'black';           //5
    a2.style.color = '#002395';
   } 


  if(tiempoDeVideo > 29) {
    a2.style.color = 'black';           //6
    a3.style.color = '#120A8F';
  } 



  if(tiempoDeVideo > 33.5) {
    a3.style.color = 'black';           //7
    a4.style.color = '#1034A6'; //naranja
  } 

   if(tiempoDeVideo > 37) {
    a4.style.color = 'black';           //3
    a5.style.color = '#1034A6';
   } 


  if(tiempoDeVideo > 40) {
    a5.style.color = 'black';           //6
    a6.style.color = '#0000FF';
  } 

 

  if(tiempoDeVideo > 44.5) {
    a6.style.color = 'black';           //7
    a4.style.color = '#1034A6';
  } 


  if(tiempoDeVideo > 48) {
    a4.style.color = 'black';           //4
    a5.style.color = '#0000FF';
   } 

  if(tiempoDeVideo > 50.5) {
    a5.style.color = 'black';           //6
    a6.style.color = '#1034A6';
  } 

 
  
  if(tiempoDeVideo > 57.5) {
    a6.style.color = 'black';
    a7.style.textDecoration = 'underline';
            //7
     
  }
 

  if(tiempoDeVideo > 92) {
    a7.style.color = '#4c2882';
    a7.style.textDecoration = 'none';
    }

    if(tiempoDeVideo > 95.5) {
  
  a7.style.color = 'black';
  a8.style.color = '#6600a1';
}

  
  if(tiempoDeVideo > 98.5) {
    a8.style.color = 'black';
    a9.style.color = '#924e7d'; //azul //2
  } 

 
  if(tiempoDeVideo > 102.5) {
    a9.style.color = 'black';
   a7.style.color = '#9400d3'; //naranja //3
  } 

  if(tiempoDeVideo > 107) {
    a7.style.color = 'black';
    a8.style.color = '#4c2882';

  }
 

   if(tiempoDeVideo > 109.5) {
    a8.style.color = 'black';           //5
    a9.style.color = '#6600a1';
   } 

  if(tiempoDeVideo > 114.5) {
    a9.style.color = 'black';           //6
    a10.style.color = '#924e7d';
  } 

  

  if(tiempoDeVideo > 118) {
    a10.style.color = 'black';           //7
   a11.style.color = '#9400d3'; //naranja
  } 

 

  if(tiempoDeVideo > 120.5) {
    a11.style.color = 'black';
   a12.style.color = '#4c2882'; //naranja //3
  } 

  if(tiempoDeVideo > 125.5) {
    a12.style.color = 'black';
    a10.style.color = '#6600a1';
    
  }
 

  if(tiempoDeVideo > 129) {
    a10.style.color = 'black';
    a11.style.color = '#924e7d';
    
  }

  if(tiempoDeVideo > 131.5) {
    a11.style.color = 'black';
   a12.style.color = '#4c2882'; //naranja //3
  } 
 


  if(tiempoDeVideo > 137) {
    a12.style.color = 'black';
    a13.style.color = '#6600a1'; //naranja //3
  } 


  if(tiempoDeVideo > 140) {
    a13.style.color = 'black';
    a14.style.color = '#9400d3'; //naranja //3
  } 
 
  if(tiempoDeVideo > 143) {
    a14.style.color = 'black';
    a15.style.color = '#924e7d'; //naranja //3
  } 

  if(tiempoDeVideo > 148) {
    a15.style.color = 'black';
    a16.style.color = '#4c2882'; //naranja //3
  } 
 
  if(tiempoDeVideo > 152) {
    a16.style.color = 'black';
    a17.style.color = '#6600a1'; //naranja //3
  } 

  if(tiempoDeVideo > 154) {
    a17.style.color = 'black';
    a18.style.color = '#924e7d'; //naranja //3
  } 

  if(tiempoDeVideo > 159) {
    a18.style.color = 'black';
    a16.style.color = '#9400d3'; //naranja //3
  } 

  if(tiempoDeVideo > 163) {
    a16.style.color = 'black';
    a17.style.color = '#924e7d'; //naranja //3
  } 

  if(tiempoDeVideo > 166) {
    a17.style.color = 'black';
    a18.style.color = '#9400d3'; //naranja //3
  } 

  if(tiempoDeVideo > 175) {
    a18.style.color = 'black';
   
  } 
/*
  if(tiempoDeVideo > 146) {
    a33.style.color = 'black';
    a34.style.color = '#ed2939'; //naranja //3
  } 
  
  if(tiempoDeVideo > 148) {
    a34.style.color = 'black';
    a35.style.color = '#002395'; //naranja //3
  } 

  if(tiempoDeVideo > 151) {
    a35.style.color = 'black';
    a36.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 153) {
    a36.style.color = 'black';
    a37.style.color = '#002395'; //naranja //3
  } 

  if(tiempoDeVideo > 157) {
    a37.style.color = 'black';
    a38.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 162) {
    a38.style.color = 'black';
    a39.style.color = '#002395'; //naranja //3
  } 

  if(tiempoDeVideo > 167) {
    a39.style.color = 'black';
    a40.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 169) {
    a40.style.color = 'black';
    a41.style.color = '#002395'; //naranja //3
  } 

  if(tiempoDeVideo > 170) {
    a41.style.color = 'black';
    a42.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 172) {
    a42.style.color = 'black';
    a43.style.color = '#002395'; //naranja //3
  } 

  if(tiempoDeVideo > 178) {
    a43.style.color = 'black';
    a44.style.color = '#ed2939'; //naranja //3
  }

  if(tiempoDeVideo > 183) {
    a44.style.color = 'black';
    a45.style.color = '#002395'; //naranja //3
  }

  if(tiempoDeVideo > 188) {
    a45.style.color = 'black';
    a46.style.color = '#ed2939'; //naranja //3
  }

  if(tiempoDeVideo > 191) {
    a46.style.color = 'black';
    a47.style.color = '#002395';} //naranja //3

  if(tiempoDeVideo > 193) {
      a47.style.color = 'black';
      a48.style.color = '#ed2939';} //naranja //3

  if(tiempoDeVideo > 198) {
      a48.style.color = 'black';
      a49.style.color = '#002395';} //naranja //3

  if(tiempoDeVideo > 203) {
      a49.style.color = 'black';
      a50.style.color = '#ed2939';} //naranja //3

  if(tiempoDeVideo > 207) {
      a50.style.color = 'black';
      a51.style.color = '#002395';} //naranja //3
  
  if(tiempoDeVideo > 219) {
      a51.style.color = 'black';
      } //naranja //3

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
