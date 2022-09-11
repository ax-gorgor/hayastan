
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'zKFrVpTv_Eo',
     
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
 /*
  if(tiempoDeVideo > 60) {
    a1.style.color = '#005e89'; //rojo    //1
    a1.style.fontSize = '115%'
  } 

   
  if(tiempoDeVideo > 68) {
    a1.style.color = 'black';
    a2.style.color = '#005e89'; //azul //2
    a1.style.fontSize = '100%'
    a2.style.fontSize = '115%'
  } 

   
  if(tiempoDeVideo > 74) {
    a2.style.color = 'black';
   a3.style.color = '#005e89'; //naranja //3
   a2.style.fontSize = '100%'
   a3.style.fontSize = '115%'
  } 
 
   if(tiempoDeVideo > 82) {
    a3.style.color = 'black';           //4
    a4.style.color = '#005e89';
    a3.style.fontSize = '100%'
    a4.style.fontSize = '115%'
   } 
 
   if(tiempoDeVideo > 90) {
    a4.style.color = 'black';  
    a4.style.fontSize = '100%';        //5
    a5.style.color = '#005e89';
    a5.style.fontSize = '115%'
   } 
 
  if(tiempoDeVideo > 97) {
    a5.style.color = 'black';  
    a5.style.fontSize = '100%';          //6         //6
    a6.style.color = '#005e89';
    a6.style.fontSize = '115%'; 
  } 
 
  if(tiempoDeVideo > 104.3) {
    a6.style.color = 'black';  
    a6.style.fontSize = '100%';          //7
   a3.style.color = '#005e89'; //naranja
   a3.style.fontSize = '115%'; 
  } 
 
   if(tiempoDeVideo > 112) {
    a3.style.color = 'black';    
    a3.style.fontSize = '100%';        //3
    a4.style.color = '#005e89';
    a4.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 119) {
    a4.style.color = 'black';
    a4.style.fontSize = '100%';            //7
    a5.style.color = '#005e89';
    a5.style.fontSize = '115%'; 
  } 
 
  if(tiempoDeVideo > 127) {
    a5.style.color = 'black';   
    a5.style.fontSize = '100%';         //4
    a6.style.color = '#005e89';
    a6.style.fontSize = '115%'; 
   } 
 
  if(tiempoDeVideo > 134) {
    a6.style.color = 'black';  
    a6.style.fontSize = '100%';          //6
    a7.style.color = '#005e89';
    a7.style.textDecoration = 'underline'; 
  } 
/*
  if(tiempoDeVideo > 62) {
    a12.style.color = 'black';  
    a12.style.fontSize = '100%';          //6
    a13.style.color = '#ff00ca';
    a13.style.textDecoration = 'underline'; 
  } 

     

  if(tiempoDeVideo > 70) {
    a13.style.textDecoration = 'none'; 
    
    a13.style.fontSize = '125%'; 
  } 
  
        //7
     
  


  if(tiempoDeVideo > 72) {
    a13.style.color = 'black';   
    a13.style.fontSize = '100%'; 
    a14.style.color = '#ff00ca';   
    a14.style.fontSize = '125%';         //7
     } 


   
  if(tiempoDeVideo > 74) {
    a14.style.color = 'black';
    a14.style.fontSize = '100%'; 
    a15.style.color = '#ff00ca'; 
    a15.style.fontSize = '125%'; 
  } 
  if(tiempoDeVideo > 76) {
    a15.style.color = 'black';
    a15.style.fontSize = '100%'; 
   a16.style.color = '#ff00ca'; //naranja //3
   a16.style.fontSize = '125%'; 
  } 


  if(tiempoDeVideo > 79) {
    a16.style.color = 'black';
    a16.style.fontSize = '100%'; 
    a17.style.textDecoration = 'underline'; 
    a17.style.color = '#ff00ca';
     
    
    
  }


   if(tiempoDeVideo > 86) {
      
      
      a17.style.fontSize = '125%'; 
      a17.style.textDecoration = 'none'; 
   } 

   if(tiempoDeVideo > 88) {
    a17.style.color = 'black'; 
    a17.style.fontSize = '100%';           //5
    a18.style.color = '#ff00ca';
    a18.style.fontSize = '125%'; 
   } 

  if(tiempoDeVideo > 91) {
    a18.style.color = 'black'; 
    a18.style.fontSize = '100%';           //6
    a19.style.color = '#ff00ca';
    a19.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 93) {
    a19.style.color = 'black';   
    a19.style.fontSize = '100%';          
   a20.style.color = '#ff00ca';  
   a20.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 96) {
    a20.style.color = 'black'; 
        
    a20.style.fontSize = '100%';      
    a21.style.color = '#ff00ca';  
    a21.style.textDecoration = 'underline'; 
    
  } 


  //

  if(tiempoDeVideo > 131) {
    
    a21.style.textDecoration = 'none'; 
    a21.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 136) {
    a21.style.color = 'black';
    a21.style.fontSize = '100%'; 
    a22.style.color = '#ff00ca';
    a22.style.fontSize = '125%'; 
    
  }
 

  if(tiempoDeVideo > 141) {
    a22.style.color = 'black';
    a22.style.fontSize = '100%'; 
    a23.style.color = '#ff00ca';
    a23.style.fontSize = '125%'; 
    
  }



  if(tiempoDeVideo > 146) {
    a23.style.color = 'black';
    a23.style.fontSize = '100%'; 
   a24.style.color = '#ff00ca'; //naranja //3
   a24.style.fontSize = '125%'; 
  } 
 
  if(tiempoDeVideo > 151) {
    a24.style.color = 'black';
    a24.style.fontSize = '100%'; 
   a25.style.color = '#ff00ca'; //naranja //3
   a25.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 157) {
    a25.style.color = 'black';
    a25.style.fontSize = '100%'; 
   a26.style.color = '#ff00ca'; //naranja //3
   a26.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 161) {
    a26.style.color = 'black';
    a26.style.fontSize = '100%'; 
   a27.style.color = '#ff00ca'; //naranja //3
   a27.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 167) {
    a27.style.color = 'black';
    a27.style.fontSize = '100%'; 
   a28.style.color = '#ff00ca'; //naranja //3
   a28.style.fontSize = '125%'; 
  } 
 
  if(tiempoDeVideo > 174) {
    a28.style.color = 'black';
    a28.style.fontSize = '100%';
    a29.style.textDecoration = 'underline'; 
    a29.style.color = '#ff00ca';
     
  } 

  if(tiempoDeVideo > 181) {
    a29.style.textDecoration = 'none'; 
 
   a29.style.fontSize = '125%'; 
  } 
 
  if(tiempoDeVideo > 183) {
    a29.style.color = 'black';
    a29.style.fontSize = '100%'; 
   a30.style.color = '#ff00ca'; //naranja //3
   a30.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 186) {
    a30.style.color = 'black';
    a30.style.fontSize = '100%'; 
   a31.style.color = '#ff00ca'; //naranja //3
   a31.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 188) {
    a31.style.color = 'black';
    a31.style.fontSize = '100%'; 
   a32.style.color = '#ff00ca'; //naranja //3
   a32.style.fontSize = '125%'; 
  } 
 
  if(tiempoDeVideo > 190) {
    a32.style.color = 'black';
    a32.style.fontSize = '100%'; 
   a33.style.color = '#ff00ca'; //naranja //3
   a33.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 192) {
    a33.style.color = 'black';
    a33.style.fontSize = '100%'; 
   a34.style.color = '#ff00ca'; //naranja //3
   a34.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 195) {
    a34.style.color = 'black';
    a34.style.fontSize = '100%'; 
   a35.style.color = '#ff00ca'; //naranja //3
   a35.style.fontSize = '125%'; 
  } 

  if(tiempoDeVideo > 197) {
    a35.style.color = 'black';
    a35.style.fontSize = '100%'; 
    a36.style.fontSize = '125%'; 
   a36.style.color = '#ff00ca'; //naranja //3
  } 
///////////////////////////////
  if(tiempoDeVideo > 200) {
    a36.style.color = 'black';
    a36.style.fontSize = '100%'; 
    
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
 