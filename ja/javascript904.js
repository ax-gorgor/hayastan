
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'uA7kGtQBIpc',
     
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

 var a0 = document.getElementById('a00');
 var a000 = document.getElementById('a000');
 var a0000 = document.getElementById('a000');
 var a1 = document.getElementById('a1');
 var a2 = document.getElementById('a2');
 var a3 = document.getElementById('a3');
 var a4 = document.getElementById('a4');
 var a04 = document.getElementById('a04');
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
  
  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) y si pasaron mas de 5 segundos, va a pintar "intro" de rojo. Si pasaron
 // mas de 8 segundos, va a pintar "introd" (la segunda linea) de rojo y pintar "intro"
 // (la primera linea) de negro otra vez. Y si pasaron mas de 9 segundos, va a pintar la
 // tercera linea de rojo y la segunda de negro otra vez.
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();  //  #b8ca02  #188b1d  #58b036 #7ab887

  if(tiempoDeVideo > -1) {
    a0000.style.visibility = 'hidden';  
     }
 

  if(tiempoDeVideo > 19) {
    a000.style.color = 'black'; 
    a0000.style.visibility = 'visible';  
     
  }

  if(tiempoDeVideo > 20) {
    a000.style.color = 'white';  
    a0000.style.visibility = 'hidden';
  }

  if(tiempoDeVideo > 21) {
    a000.style.color = 'black';  
    a0000.style.visibility = 'visible'; 
  }

  if(tiempoDeVideo > 22) {
    a000.style.color = 'white';  
    a0000.style.visibility = 'hidden';
  }

  if(tiempoDeVideo > 23) {
    a000.style.color = 'black';  
    a0000.style.visibility = 'visible';  
  }

  if(tiempoDeVideo > 24) {
    a000.style.color = 'white';  
    a0000.style.visibility = 'hidden'; 
  }

  if(tiempoDeVideo > 25) {
    a000.style.color = 'black';  
    a0000.style.visibility = 'visible'; 
  }

  if(tiempoDeVideo > 26) {
    a000.style.color = 'white';  
    a0000.style.visibility = 'hidden'; 
  }

 
  if(tiempoDeVideo > 27.5) {
    a1.style.color = '#456c13';  
    a1.style.fontSize = '110%';
    a1.style.transition = 'font-size 0.5s ease';
  } 
 
  if(tiempoDeVideo > 30) {
    a1.style.transition = 'none';
    a1.style.color = 'black';
    a1.style.fontSize = '100%'
    a2.style.color = '#456c13';  
    a2.style.fontSize = '110%';
  } 

    
  if(tiempoDeVideo > 31) {
    a2.style.color = 'black';
    a2.style.fontSize = '100%'
    a3.style.color = '#456c13';  
    a3.style.fontSize = '110%';
  } 

 
  if(tiempoDeVideo > 32) {
    a3.style.color = 'black';
    a3.style.fontSize = '100%'
    a4.style.color = '#456c13';
    a4.style.fontSize = '110%';
  } 
  
  if(tiempoDeVideo > 35) {
    a4.style.color = 'black';
    a4.style.fontSize = '100%'
    a04.style.color = '#456c13';
    a04.style.fontSize = '110%';
  } 
 
  if(tiempoDeVideo > 36) {
    a04.style.color = 'black';
    a04.style.fontSize = '100%'
    a5.style.color = '#456c13';
    a5.style.fontSize = '110%';
  } 

 
  if(tiempoDeVideo > 37) {
    a5.style.color = 'black';
    a5.style.fontSize = '100%'
    a4.style.color = '#456c13';
    a4.style.fontSize = '110%'
  } 
  

  if(tiempoDeVideo > 40) {
    a4.style.color = 'black';
    a4.style.fontSize = '100%'
    a04.style.color = '#456c13';
    a04.style.fontSize = '110%';
  } 
 
 
  if(tiempoDeVideo > 41) {
    a04.style.color = 'black';
    a04.style.fontSize = '100%'
    a5.style.color = '#456c13';
    a5.style.fontSize = '110%';
  } 
 
 
  if(tiempoDeVideo > 41) {
    a04.style.color = 'black';
    a04.style.fontSize = '100%'
    a5.style.color = '#456c13';
    a5.style.fontSize = '110%';
  } 
 
  
  if(tiempoDeVideo > 43) {
    a5.style.color = 'black';
    a5.style.fontSize = '100%'
    a6.style.color = '#456c13';
    a6.style.fontSize = '110%';
  } 

  

  if(tiempoDeVideo > 48) {
    a6.style.color = 'black';
    a6.style.fontSize = '100%'
    a7.style.color = '#456c13';
    a7.style.fontSize = '115%';
  } 
 
  
  if(tiempoDeVideo > 49) {
    a7.style.color = 'black';
    a7.style.fontSize = '100%'
    a8.style.color = '#456c13';
    a8.style.fontSize = '110%';
  } 

  
 
  if(tiempoDeVideo > 51) {
    a8.style.color = 'black';
    a8.style.fontSize = '100%'
    a9.style.color = '#456c13';
    a9.style.fontSize = '110%';
  } 
 
 
  if(tiempoDeVideo > 53) {
    a9.style.color = 'black';
    a9.style.fontSize = '100%'
    a10.style.color = '#456c13';
    a10.style.fontSize = '110%';
  } 
 
  if(tiempoDeVideo > 54) {
    a10.style.color = 'black';
    a10.style.fontSize = '100%'
    a11.style.color = '#456c13';
    a11.style.fontSize = '110%';
  } 
  
   
  if(tiempoDeVideo > 56) {
    a11.style.color = 'black';
    a11.style.fontSize = '100%'
    a12.style.color = '#456c13';
    a12.style.fontSize = '110%';
  } 
   

  if(tiempoDeVideo > 58.5) {
    a12.style.color = 'black';
    a12.style.fontSize = '100%'
    a13.style.color = '#456c13';
    a13.style.fontSize = '110%';
  } 
 
  
  if(tiempoDeVideo > 59.5) {
    a13.style.color = 'black';
    a13.style.fontSize = '100%'
    a14.style.color = '#456c13';
    a14.style.fontSize = '110%';
  } 
   
 
  if(tiempoDeVideo > 64.5) {
    a14.style.color = 'black';
    a14.style.fontSize = '100%'
    a15.style.color = '#456c13';
    a15.style.fontSize = '110%';
  } 
   
 
  if(tiempoDeVideo > 67) {
     a15.style.color = 'black';
    a15.style.fontSize = '100%'
    a16.style.color = '#456c13';
    a16.style.fontSize = '110%';
  } 
  

  if(tiempoDeVideo > 68) {
    a16.style.color = 'black';
    a16.style.fontSize = '100%'
    a17.style.color = '#456c13';
    a17.style.fontSize = '110%';
  } 
  
 
  if(tiempoDeVideo > 69) {
    a17.style.color = 'black';
    a17.style.fontSize = '100%'
    a18.style.color = '#456c13';
    a18.style.fontSize = '110%';
     
  } 
 
 
  if(tiempoDeVideo > 72) {
    a18.style.color = 'black';
    a18.style.fontSize = '100%'
    a19.style.color = '#456c13';
    a19.style.fontSize = '110%';
  } 
 
  
  if(tiempoDeVideo > 73) {
    a19.style.color = 'black';
    a19.style.fontSize = '100%'
    a20.style.color = '#456c13';
    a20.style.fontSize = '110%';
  } 
  
   
  if(tiempoDeVideo > 74) {
     a20.style.color = 'black';
    a20.style.fontSize = '100%'
    a21.style.color = '#456c13';
    a21.style.fontSize = '110%';
  } 
  
   
  if(tiempoDeVideo > 76.5) {
    a21.style.color = 'black';
    a21.style.fontSize = '100%'
    a22.style.color = '#456c13';
    a22.style.fontSize = '110%';
  } 

   
 if(tiempoDeVideo > 78) {
     a22.style.color = 'black';
    a22.style.fontSize = '100%'
    a23.style.color = '#456c13';
    a23.style.fontSize = '110%';
  }
 
  
   if(tiempoDeVideo > 80) {
    a23.style.color = 'black';
    a23.style.fontSize = '100%'
    a24.style.color = '#456c13';
    a24.style.fontSize = '110%';
  }
   
 
   if(tiempoDeVideo > 103) {
    a24.style.color = 'black';
    a24.style.fontSize = '100%'
    a25.style.color = '#456c13';
    a25.style.fontSize = '110%';
  }
   

   if(tiempoDeVideo > 104.5) {
    a25.style.color = 'black';
    a25.style.fontSize = '100%'
    a26.style.color = '#456c13';
    a26.style.fontSize = '110%';
  }
 
 
     if(tiempoDeVideo > 106) {
   a26.style.color = 'black';
   a26.style.fontSize = '100%'
   a27.style.color = '#456c13';
   a27.style.fontSize = '110%';
  }
 

     if(tiempoDeVideo > 108) {
   a27.style.color = 'black';
   a27.style.fontSize = '100%'
   a28.style.color = '#456c13';
   a28.style.fontSize = '110%';
  }
 

     if(tiempoDeVideo > 109) {
   a28.style.color = 'black';
   a28.style.fontSize = '100%'
   a29.style.color = '#456c13';
   a29.style.fontSize = '110%';
  }
 

     if(tiempoDeVideo > 111) {
   a29.style.color = 'black';
   a29.style.fontSize = '100%'
   a30.style.color = '#456c13';
   a30.style.fontSize = '110%';
  }
  
 
     if(tiempoDeVideo > 113.5) {
   a30.style.color = 'black';
   a30.style.fontSize = '100%'
   a31.style.color = '#456c13';
   a31.style.fontSize = '110%';
  }
 
  
      if(tiempoDeVideo > 114.5) {
   a31.style.color = 'black';
   a31.style.fontSize = '100%'
   a32.style.color = '#456c13';
   a32.style.fontSize = '110%';
  }
  
     if(tiempoDeVideo > 117) {
   a32.style.color = 'black';
   a32.style.fontSize = '100%'
   a33.style.color = '#456c13';
   a33.style.fontSize = '110%';
  }
 
 
     if(tiempoDeVideo > 122) {
   a33.style.color = 'black';
   a33.style.fontSize = '100%'
   a34.style.color = '#456c13';
   a34.style.fontSize = '110%';
  } 
 
      if(tiempoDeVideo > 123) {
   a34.style.color = 'black';
   a34.style.fontSize = '100%'
   a35.style.color = '#456c13';
   a35.style.fontSize = '110%';
  }

 
    if(tiempoDeVideo > 124) {
   a35.style.color = 'black';
   a35.style.fontSize = '100%'
   a36.style.color = '#456c13';
   a36.style.fontSize = '110%';
  }
 

      if(tiempoDeVideo > 127) {
   a36.style.color = 'black';
   a36.style.fontSize = '100%'
   a37.style.color = '#456c13';
   a37.style.fontSize = '110%';
  }
 

   if(tiempoDeVideo > 128) {
   a37.style.color = 'black';
   a37.style.fontSize = '100%'
   a38.style.color = '#456c13';
   a38.style.fontSize = '110%';
    
  }
  
  

      if(tiempoDeVideo > 129) {
   a38.style.color = 'black';
   a38.style.fontSize = '100%'
   a39.style.color = '#456c13';
   a39.style.fontSize = '110%';
  }

 
  
   if(tiempoDeVideo > 132) {
   a39.style.color = 'black';
   a39.style.fontSize = '100%'
   a40.style.color = '#456c13';
   a40.style.fontSize = '110%';
  }

 
      if(tiempoDeVideo > 133) {
   a40.style.color = 'black';
   a40.style.fontSize = '100%'
   a41.style.color = '#456c13';
   a41.style.fontSize = '110%';
  }
 

  if(tiempoDeVideo > 136) {
    a41.style.color = 'black';  
    a41.style.fontSize = '100%';
    a41.style.transition = 'font-size 0.5s ease';
  } 

/*
   if(tiempoDeVideo > 195) {
   a46.style.color = 'black';
   a46.style.fontSize = '100%'
   a47.style.color = '#456c13';
   a47.style.fontSize = '110%';
  }

   

      if(tiempoDeVideo > 202) {
   a47.style.color = 'black';
   a47.style.fontSize = '100%'
   a48.style.color = '#456c13';
   a48.style.fontSize = '110%';
    
  }
 
      if(tiempoDeVideo > 206.5) {
     
   a48.style.color = 'black';
   a48.style.fontSize = '100%'
 
  }


    if(tiempoDeVideo > 0) {
    a49.style.color = 'white';  
     
  }

  if(tiempoDeVideo > 206.5) {
    a49.style.color = '#9f16fb';  
    a49.style.fontSize = '120%'
     
     
  }

  if(tiempoDeVideo > 210) {
    a49.style.color = 'white';  
     
  }
/*
/*
        if(tiempoDeVideo > 173.5) {
     
   a49.style.color = 'black';
   a49.style.fontSize = '100%'
  }

  
  if(tiempoDeVideo > 82) {
    a8.style.color = 'black';
    a8.style.fontSize = '100%'
    a9.style.textDecoration = 'underline';
  } 

    if(tiempoDeVideo > 101) {
    a9.style.textDecoration = 'none';
    a9.style.color = '#9f16fb';
    a9.style.fontSize = '115%'
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

 