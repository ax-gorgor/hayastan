var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: '8R7BqF2VZsQ',
     
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
  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) y si pasaron mas de 5 segundos, va a pintar "intro" de rojo. Si pasaron
 // mas de 8 segundos, va a pintar "introd" (la segunda linea) de rojo y pintar "intro"
 // (la primera linea) de negro otra vez. Y si pasaron mas de 9 segundos, va a pintar la
 // tercera linea de rojo y la segunda de negro otra vez.
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();  //  #b8ca02  #188b1d  #58b036 #7ab887

 

  if(tiempoDeVideo > 31) {
    a1.style.color = '#780bc1';  
    a1.style.fontSize = '115%';
    a1.style.transition = 'font-size 0.3s ease';
  } 
   

  if(tiempoDeVideo > 36) {
    a1.style.transition = 'none';
    a1.style.color = 'black';
    a1.style.fontSize = '100%'
    a2.style.color = '#780bc1';  
    a2.style.fontSize = '115%';
    a2.style.transition = 'font-size 0.3s ease';
  } 
 
   
  if(tiempoDeVideo > 41) {
    a2.style.transition = 'none';
    a2.style.color = 'black';
    a2.style.fontSize = '100%'
    a3.style.color = '#780bc1';  
    a3.style.fontSize = '115%';
    a3.style.transition = 'font-size 0.3s ease';
  } 
 
  if(tiempoDeVideo > 46) {
    a3.style.transition = 'none';
    a3.style.color = 'black';
    a3.style.fontSize = '100%'
    a4.style.color = '#780bc1';
    a4.style.fontSize = '115%';
    a4.style.transition = 'font-size 0.3s ease';
  } 
 
  
  if(tiempoDeVideo > 51) {
    a4.style.transition = 'none';
    a4.style.color = 'black';
    a4.style.fontSize = '100%'
    a5.style.color = '#780bc1';
    a5.style.fontSize = '115%';
    a5.style.transition = 'font-size 0.3s ease';
  } 

   

  if(tiempoDeVideo > 55.5) {
    a5.style.transition = 'none';
    a5.style.color = 'black';
    a5.style.fontSize = '100%'
    a6.style.color = '#780bc1';
    a6.style.fontSize = '115%';
    a6.style.transition = 'font-size 0.3s ease';
  } 
 
   
  if(tiempoDeVideo > 61) {
    a6.style.transition = 'none';
    a6.style.color = 'black';
    a6.style.fontSize = '100%'
    a7.style.color = '#780bc1';
    a7.style.fontSize = '115%';
    a7.style.transition = 'font-size 0.3s ease';
  } 

   
  if(tiempoDeVideo > 65) {
    a7.style.transition = 'none';
    a7.style.color = 'black';
    a7.style.fontSize = '100%'
    a8.style.color = '#780bc1';
    a8.style.fontSize = '115%';
    a8.style.transition = 'font-size 0.3s ease';
  } 
 

  if(tiempoDeVideo > 70) {
    a8.style.transition = 'none';
    a8.style.color = 'black';
    a8.style.fontSize = '100%'
    a9.style.color = '#780bc1';
    a9.style.fontSize = '115%';
    a9.style.transition = 'font-size 0.3s ease';
  

  } 

    
  if(tiempoDeVideo > 80) {
   
    
    a9.style.transition = 'none';
    a9.style.color = 'black';
    a9.style.fontSize = '100%'
    
    a10.style.color = '#780bc1';
    a10.style.fontSize = '115%';
    a10.style.transition = 'font-size 0.3s ease';
  
  } 
 
 
  if(tiempoDeVideo > 85) {
    a10.style.transition = 'none';
    a10.style.color = 'black';
    a10.style.fontSize = '100%'
    a11.style.color = '#780bc1';
    a11.style.fontSize = '115%';
    a11.style.transition = 'font-size 0.3s ease';
  } 
 

  if(tiempoDeVideo > 90) {
     a11.style.transition = 'none';
    a11.style.color = 'black';
    a11.style.fontSize = '100%'
    a12.style.color = '#780bc1';
    a12.style.fontSize = '115%';
    a12.style.transition = 'font-size 0.3s ease';
  } 
  
 
  if(tiempoDeVideo > 95) {
     a12.style.transition = 'none';
    a12.style.color = 'black';
    a12.style.fontSize = '100%'
    a13.style.color = '#780bc1';
    a13.style.fontSize = '115%';
    a13.style.transition = 'font-size 0.3s ease';
  } 

 

  if(tiempoDeVideo > 100) {
     a13.style.transition = 'none';
    a13.style.color = 'black';
    a13.style.fontSize = '100%'
    a14.style.color = '#780bc1';
    a14.style.fontSize = '115%';
    a14.style.transition = 'font-size 0.3s ease';
  } 

   
  if(tiempoDeVideo > 106) {
    a14.style.transition = 'none';
    a14.style.color = 'black';
    a14.style.fontSize = '100%'
    a15.style.color = '#780bc1';
    a15.style.fontSize = '125%';
    a15.style.transition = 'font-size 0.3s ease';
    a15.style.textDecoration = 'underline';
  }

 
 
  if(tiempoDeVideo > 126) {
    a15.style.fontSize = '115%';
    a15.style.transition = 'font-size 0.3s ease';
    a15.style.textDecoration = 'none';
  } 

 
  if(tiempoDeVideo > 131) {
     a15.style.transition = 'none';
    a15.style.color = 'black';
    a15.style.fontSize = '100%'
    a16.style.color = '#780bc1';
    a16.style.fontSize = '115%';
    a16.style.transition = 'font-size 0.3s ease';
  } 
 

  if(tiempoDeVideo > 136.5) {
    a16.style.transition = 'none';
    a16.style.color = 'black';
    a16.style.fontSize = '100%'
    a17.style.color = '#780bc1';
    a17.style.fontSize = '115%';
    a17.style.transition = 'font-size 0.3s ease';
  } 
 
 
  if(tiempoDeVideo > 141) {
    a17.style.transition = 'none';
    a17.style.color = 'black';
    a17.style.fontSize = '100%'
    a18.style.color = '#780bc1';
    a18.style.fontSize = '115%';
    a18.style.transition = 'font-size 0.3s ease';
  } 

  
  if(tiempoDeVideo > 146) {
    a18.style.transition = 'none';
    a18.style.color = 'black';
    a18.style.fontSize = '100%'
    a19.style.color = '#780bc1';
    a19.style.fontSize = '115%';
    a19.style.transition = 'font-size 0.3s ease';
  } 
 
  
  if(tiempoDeVideo > 151) {
    a19.style.transition = 'none';
    a19.style.color = 'black';
    a19.style.fontSize = '100%'
    a20.style.color = '#780bc1';
    a20.style.fontSize = '115%';
    a20.style.transition = 'font-size 0.3s ease';
  } 
 
 
if(tiempoDeVideo > 156) {
    a20.style.transition = 'none';
    a20.style.color = 'black';
    a20.style.fontSize = '100%'
    a21.style.color = '#780bc1';
    a21.style.fontSize = '115%';
    a21.style.transition = 'font-size 0.3s ease';
  }
 

if(tiempoDeVideo > 160.5) {
    a21.style.transition = 'none';
    a21.style.color = 'black';
    a21.style.fontSize = '100%'
    a22.style.color = '#780bc1';
    a22.style.fontSize = '115%';
    a22.style.transition = 'font-size 0.3s ease';
  }
 
if(tiempoDeVideo > 165.5) {
    a22.style.transition = 'none';
    a22.style.color = 'black';
    a22.style.fontSize = '100%'
    a23.style.color = '#780bc1';
    a23.style.fontSize = '115%';
    a23.style.transition = 'font-size 0.3s ease';
  }
  
if(tiempoDeVideo > 176) {
    a23.style.transition = 'none';
    a23.style.color = 'black';
    a23.style.fontSize = '100%'
    a24.style.color = '#780bc1';
    a24.style.fontSize = '115%';
    a24.style.transition = 'font-size 0.3s ease';
  }
 
if(tiempoDeVideo > 181) {
    a24.style.transition = 'none';
    a24.style.color = 'black';
    a24.style.fontSize = '100%'
    a25.style.color = '#780bc1';
    a25.style.fontSize = '115%';
    a25.style.transition = 'font-size 0.3s ease';
  }

 
if(tiempoDeVideo > 185) {
    a25.style.transition = 'none';
    a25.style.color = 'black';
    a25.style.fontSize = '100%'
    a26.style.color = '#780bc1';
    a26.style.fontSize = '115%';
    a26.style.transition = 'font-size 0.3s ease';
  }

  
if(tiempoDeVideo > 190) {
    a26.style.transition = 'none';
    a26.style.color = 'black';
    a26.style.fontSize = '100%'
    a27.style.color = '#780bc1';
    a27.style.fontSize = '115%';
    a27.style.transition = 'font-size 0.3s ease';
  }
 
if(tiempoDeVideo > 195.5) {
    a27.style.transition = 'none';
    a27.style.color = 'black';
    a27.style.fontSize = '100%'
    a28.style.color = '#780bc1';
    a28.style.fontSize = '115%';
    a28.style.transition = 'font-size 0.3s ease';
  }

 
  if(tiempoDeVideo > 201) {
    a28.style.transition = 'none';
    a28.style.color = 'black';
    a28.style.fontSize = '100%'
    a29.style.color = '#780bc1';
    a29.style.fontSize = '125%';
    a29.style.transition = 'font-size 0.3s ease';
    a29.style.textDecoration = 'underline';
  }
 
  if(tiempoDeVideo > 222) {
    a29.style.fontSize = '115%';
    a29.style.transition = 'font-size 0.3s ease';
    a29.style.textDecoration = 'none';
  } 
 
 
if(tiempoDeVideo > 226.5) {
    a29.style.transition = 'none';
    a29.style.color = 'black';
    a29.style.fontSize = '100%'
    a30.style.color = '#780bc1';
    a30.style.fontSize = '115%';
    a30.style.transition = 'font-size 0.3s ease';
  }
 
  
 if(tiempoDeVideo > 232) {
    a30.style.transition = 'none';
    a30.style.color = 'black';
    a30.style.fontSize = '100%'
    a31.style.color = '#780bc1';
    a31.style.fontSize = '115%';
    a31.style.transition = 'font-size 0.3s ease';
  }
 

if(tiempoDeVideo > 236.5) {
    a31.style.transition = 'none';
    a31.style.color = 'black';
    a31.style.fontSize = '100%'
    a32.style.color = '#780bc1';
    a32.style.fontSize = '115%';
    a32.style.transition = 'font-size 0.3s ease';
  }
  
  if(tiempoDeVideo > 242) {
    a32.style.transition = 'none';
    a32.style.color = 'black';
    a32.style.fontSize = '100%'
    a33.style.color = '#780bc1';
    a33.style.fontSize = '115%';
    a33.style.transition = 'font-size 0.3s ease';
  }
 
 
  if(tiempoDeVideo > 246) {
    a33.style.transition = 'none';
    a33.style.color = 'black';
    a33.style.fontSize = '100%'
    a34.style.color = '#780bc1';
    a34.style.fontSize = '115%';
    a34.style.transition = 'font-size 0.3s ease';
  }
  
 
   if(tiempoDeVideo > 252) {
    a34.style.transition = 'none';
    a34.style.color = 'black';
    a34.style.fontSize = '100%'
    a35.style.color = '#780bc1';
    a35.style.fontSize = '115%';
    a35.style.transition = 'font-size 0.3s ease';
  }
  
 
   if(tiempoDeVideo > 256) {
    a35.style.transition = 'none';
    a35.style.color = 'black';
    a35.style.fontSize = '100%'
    a36.style.color = '#780bc1';
    a36.style.fontSize = '115%';
    a36.style.transition = 'font-size 0.3s ease';
  }

  
     if(tiempoDeVideo > 260) {
    a36.style.transition = 'none';
    a36.style.color = 'black';
    a36.style.fontSize = '100%'
    a37.style.color = '#780bc1';
    a37.style.fontSize = '115%';
    a37.style.transition = 'font-size 0.3s ease';
  }
  
       if(tiempoDeVideo > 271) {
    a37.style.transition = 'none';
    a37.style.color = 'black';
    a37.style.fontSize = '100%'
    a38.style.color = '#780bc1';
    a38.style.fontSize = '115%';
    a38.style.transition = 'font-size 0.3s ease';
  }
  

        if(tiempoDeVideo > 276) {
    a38.style.transition = 'none';
    a38.style.color = 'black';
    a38.style.fontSize = '100%'
    a39.style.color = '#780bc1';
    a39.style.fontSize = '115%';
    a39.style.transition = 'font-size 0.3s ease';
  }
  
 
         if(tiempoDeVideo > 280) {
    a39.style.transition = 'none';
    a39.style.color = 'black';
    a39.style.fontSize = '100%'
    a40.style.color = '#780bc1';
    a40.style.fontSize = '115%';
    a40.style.transition = 'font-size 0.3s ease';
  }
  
      if(tiempoDeVideo > 286) {
    a40.style.transition = 'none';
    a40.style.color = 'black';
    a40.style.fontSize = '100%'
    a41.style.color = '#780bc1';
    a41.style.fontSize = '115%';
    a41.style.transition = 'font-size 0.3s ease';
  }
 
 
     if(tiempoDeVideo > 291) {
    a41.style.transition = 'none';
    a41.style.color = 'black';
    a41.style.fontSize = '100%'
    a42.style.color = '#780bc1';
    a42.style.fontSize = '115%';
    a42.style.transition = 'font-size 0.3s ease';
  }
 

     if(tiempoDeVideo > 304) {
     
    a42.style.color = 'black';
    a42.style.fontSize = '100%'
    
    a42.style.transition = 'font-size 0.9s ease';
  }
/*
   if(tiempoDeVideo > 122) {
    a45.style.color = 'black';
   a45.style.fontSize = '100%'
   a46.style.textDecoration = 'underline';
    
   a46.style.color = '#ff44d4';
    
  }

  

      if(tiempoDeVideo > 151) {
    
   a46.style.color = '#148f13';
   a46.style.fontSize = '125%';
   a46.style.textDecoration = 'none';
  }


  
   if(tiempoDeVideo > 156) {
    a46.style.color = 'black';
   a46.style.fontSize = '100%'
   a47.style.color = '#a9a50e';
   a47.style.fontSize = '125%'
  }

      if(tiempoDeVideo > 160) {
    a47.style.color = 'black';
   a47.style.fontSize = '100%'
   a48.style.color = '#148f13';
   a48.style.fontSize = '125%'
  }

   if(tiempoDeVideo > 165) {
    a48.style.color = 'black';
   a48.style.fontSize = '100%'
   a49.style.color = '#a9a50e';
   a49.style.fontSize = '125%'
  }

  

      if(tiempoDeVideo > 169) {
    a49.style.color = 'black';
   a49.style.fontSize = '100%'
    
  }

      if(tiempoDeVideo > 170) {
     
   a49.style.color = '#a9a50e';
   a49.style.fontSize = '125%'
  }

        if(tiempoDeVideo > 173.5) {
     
   a49.style.color = 'black';
   a49.style.fontSize = '100%'
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

 