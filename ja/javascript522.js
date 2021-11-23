
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371',
     width: '660',
     videoId: '9Xkmux7W__M',
     playerVars: { 
			
               'showinfo': 0,
               'rel':0,
                'fs':0
},



     
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


  
  if(tiempoDeVideo > 25) {
    a1.style.color = '#ed2939'; //rojo    //1
  } 
  if(tiempoDeVideo > 31) {
    a1.style.color = 'black';
    a2.style.color = '#ed2939'; //azul //2
  } 
  if(tiempoDeVideo > 38) {
    a2.style.color = 'black';
   a3.style.color = '#ed2939'; //naranja //3
  } 

   if(tiempoDeVideo > 43) {
    a3.style.color = 'black';           //4
    a4.style.color = '#ed2939';
   } 

   if(tiempoDeVideo > 49) {
    a4.style.color = 'black';           //5
    a5.style.color = '#ed2939';
   } 

  if(tiempoDeVideo > 54) {
    a5.style.color = 'black';           //6
    a6.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 61) {
    a6.style.color = 'black';           //7
   a7.style.color = '#ed2939'; //naranja
  } 

   if(tiempoDeVideo > 67) {
    a7.style.color = 'black';           //3
    a8.style.color = '#ed2939';
   } 
 

  if(tiempoDeVideo > 73) {
    a8.style.color = 'black';           //6
    a9.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 80) {
    a9.style.color = 'black';           //7
    a10.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 82) {
    a10.style.color = 'black';           //4
    a11.style.color = '#ed2939';
   } 

  if(tiempoDeVideo > 87) {
    a11.style.color = 'black';           //6
    a12.style.color = '#ed2939';
  } 

  
  
  if(tiempoDeVideo > 94) {
    a12.style.color = 'black';
    a13.style.color = '#ed2939';           //7
     
  } 


   
  if(tiempoDeVideo > 100) {
    a13.style.color = 'black';
    a14.style.color = '#ed2939'; //azul //2
  } 
  if(tiempoDeVideo > 106) {
    a14.style.color = 'black';
   a15.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 112) {
    a15.style.color = 'black';
    a16.style.color = '#ed2939';

  }
 

   if(tiempoDeVideo > 118) {
    a16.style.color = 'black';           //5
    a17.style.color = '#ed2939';
   } 

  if(tiempoDeVideo > 124) {
    a17.style.color = 'black';           //6
    a18.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 127) {
    a18.style.color = 'black';           //7
   a19.style.color = '#ed2939'; //naranja
  } 

  //

  if(tiempoDeVideo > 134) {
    a19.style.color = 'black';
   a20.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 143) {
    a20.style.color = 'black';
    a21.style.color = '#ed2939';
    
  }
 

  if(tiempoDeVideo > 150) {
    a21.style.color = 'black';
    a22.style.color = '#ed2939';
    
  }



  if(tiempoDeVideo > 156) {
    a22.style.color = 'black';
   a23.style.color = '#ed2939'; //naranja //3
  } 
 
  if(tiempoDeVideo > 162) {
    a23.style.color = 'black';
    a24.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 167) {
    a24.style.color = 'black';
     
  } 

  if(tiempoDeVideo > 176) {
    a24.style.color = 'black';
    a25.style.color = '#ed2939'; //naranja //3
  } 
 
  if(tiempoDeVideo > 181) {
    a25.style.color = 'black';
    a26.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 189) {
    a26.style.color = 'black';
    a27.style.color = '#ed2939'; //naranja //3
  } 
  
  if(tiempoDeVideo > 195) {
    a27.style.color = 'black';
    a28.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 200) {
    a28.style.color = 'black';
    a29.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 206) {
    a29.style.color = 'black';
    a30.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 212) {
    a30.style.color = 'black';
    a31.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 216) {
    a31.style.color = 'black';
    a32.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 222) {
    a32.style.color = 'black';
    a33.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 228) {
    a33.style.color = 'black';
    a34.style.color = '#ed2939'; //naranja //3
  } 
  
  if(tiempoDeVideo > 235) {
    a34.style.color = 'black';
    a35.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 243) {
    a35.style.color = 'black';
    a36.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 249) {
    a36.style.color = 'black';
    a37.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 255) {
    a37.style.color = 'black';
    a38.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 262) {
    a38.style.color = 'black';
    a39.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 268) {
    a39.style.color = 'black';
    a40.style.color = '#ed2939'; //naranja //3
  } 

  if(tiempoDeVideo > 276) {
    a40.style.color = 'black';
     
  } 

  


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
