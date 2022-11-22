 
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371',
     width: '660',
     videoId: 'zw_M43V5U7Q',
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
 

 var c100 = document.getElementById('c100');
 var c101 = document.getElementById('c101');
 var c102 = document.getElementById('c102');
 var c103 = document.getElementById('c103');
  
 
 
 



 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();


  if(tiempoDeVideo > 5) {
    a0.style.color = 'grey'; 
  }

  if(tiempoDeVideo > 25) {
    a0.style.color = 'white'; 
  }
  
  if(tiempoDeVideo > 45) {
    a1.style.color = '#c51130'; //rojo    //1
    a1.style.fontSize = '115%';
  } 
  if(tiempoDeVideo > 50) {
    a1.style.color = 'black';
    a1.style.fontSize = '100%';
    a2.style.color = '#005caa'; //azul //2
    a2.style.fontSize = '115%';
  } 
  if(tiempoDeVideo > 55) {
    a2.style.color = 'black';
    a2.style.fontSize = '100%';
   a3.style.color = '#f37736'; //naranja //3
   a3.style.fontSize = '115%';
  } 

   if(tiempoDeVideo > 60) {
    a3.style.color = 'black'; 
    a3.style.fontSize = '100%';          //4
    a4.style.color = '#c51130';
    a4.style.fontSize = '115%';
   } 

   if(tiempoDeVideo > 65) {
    a4.style.color = 'black'; 
    a4.style.fontSize = '100%';          //5
    a3.style.color = '#005caa';
    a3.style.fontSize = '115%';
   } 

  if(tiempoDeVideo > 70) {
    a3.style.color = 'black';    
    a3.style.fontSize = '100%';       //6
    a4.style.color = '#f37736';
    a4.style.fontSize = '115%';
  } 

  if(tiempoDeVideo > 75) {
    a4.style.color = 'black';     
    a4.style.fontSize = '100%';      //22222
   a5.style.color = '#f37736';
   a5.style.fontSize = '115%'; //naranja
  } 

   if(tiempoDeVideo > 80) {
    a5.style.color = 'black';  
    a5.style.fontSize = '100%';         //3
    a6.style.color = '#c51130';
    a6.style.fontSize = '115%';
   } 

   if(tiempoDeVideo > 85) {
    a6.style.color = 'black';     
    a6.style.fontSize = '100%';      //4
    a7.style.color = '#005caa';
    a7.style.fontSize = '115%';
   } 

  if(tiempoDeVideo > 90) {
    a7.style.color = 'black';    
    a7.style.fontSize = '100%';        //5
    a8.style.color = '#f37736';
    a8.style.fontSize = '115%';
  } 

  if(tiempoDeVideo > 95) {
    a8.style.color = 'black'; 
    a8.style.fontSize = '100%';          //6
    a7.style.color = '#f37736';
    a7.style.fontSize = '115%';
  } 

  if(tiempoDeVideo > 100) {
    a7.style.color = 'black';     
    a7.style.fontSize = '100%';  
    a8.style.fontSize = '115%';    //7
    a8.style.color = '#f37736';
  } 


  if(tiempoDeVideo > 106) {
    a8.style.color = 'black';
    a8.style.fontSize = '100%';
    
  } 
 
  if(tiempoDeVideo > 114) {    //33333333
    
    a9.style.color = '#005caa'; //azul //2
    a9.style.fontSize = '115%';
  } 
  if(tiempoDeVideo > 119) {
    a9.style.color = 'black';
    a9.style.fontSize = '100%';
   a10.style.color = '#f37736'; //naranja //3
   a10.style.fontSize = '115%';
  } 

   if(tiempoDeVideo > 124) {
    a10.style.color = 'black';  
    a10.style.fontSize = '100%';         //4
    a11.style.color = '#c51130';
    a11.style.fontSize = '115%';
   } 

   if(tiempoDeVideo > 129) {
    a11.style.color = 'black';
    a11.style.fontSize = '100%';           //5
    a12.style.color = '#005caa';
    a12.style.fontSize = '115%';
   } 

  if(tiempoDeVideo > 134) {
    a12.style.color = 'black';
    a12.style.fontSize = '100%';           //6
    a11.style.color = '#f37736';
    a11.style.fontSize = '115%';
  } 

  if(tiempoDeVideo > 140) {
    a11.style.color = 'black'; 
    a11.style.fontSize = '100%';          //7
   a12.style.color = '#f37736'; //naranja
   a12.style.fontSize = '115%';
  } 

  //

  if(tiempoDeVideo > 145) {
    a12.style.color = 'black';
    a1.style.fontSize = '100%';
   a13.style.color = '#f37736'; //naranja //3
   a13.style.fontSize = '115%';
  } 

  if(tiempoDeVideo > 150) {
    a13.style.color = 'black';
    a13.style.fontSize = '100%';          //4
    a14.style.color = '#c51130';
    a14.style.fontSize = '115%';
   } 

   if(tiempoDeVideo > 155) {
    a14.style.color = 'black';   
    a14.style.fontSize = '100%';        //5
    a15.style.color = '#005caa';
    a15.style.fontSize = '115%';
   } 

  if(tiempoDeVideo > 160) {
    a15.style.color = 'black'; 
    a15.style.fontSize = '100%';          //6
    a16.style.color = '#f37736';
    a16.style.fontSize = '115%';
  } 

  if(tiempoDeVideo > 165) {
    a16.style.color = 'black'; 
    a16.style.fontSize = '100%';
    a15.style.color = '#005caa';   
    a15.style.fontSize = '115%';       //7
   
  } 

  if(tiempoDeVideo > 170) {
    a15.style.color = 'black'; 
    a15.style.fontSize = '100%';
    a16.style.color = '#c51130';  
    a16.style.fontSize = '115%';        //7
   
  } 

  if(tiempoDeVideo > 182) {
    a16.style.color = 'black'; 
    a16.style.fontSize = '100%';
     
   
  } 


   //
   //

   //
    

 
 
   

  // estrofas iluminadas !

  if(tiempoDeVideo > 45) {
    c100.style.color = 'black';
       
    c101.style.color = 'lightgrey';
    c102.style.color = 'lightgrey'; 
    c103.style.color = 'lightgrey'; 
  } 

  if(tiempoDeVideo > 75) {
    c100.style.color = 'lightgrey';
      
    c101.style.color = 'black';
    c102.style.color = 'lightgrey'; 
    c103.style.color = 'lightgrey'; 
  } 

  if(tiempoDeVideo > 114) {
    c100.style.color = 'lightgrey'; 
    c101.style.color = 'lightgrey';  
    
    c102.style.color = 'black'; 
    c103.style.color = 'lightgrey';
  } 
   
  if(tiempoDeVideo > 145) {
    c100.style.color = 'lightgrey'; 
    c101.style.color = 'lightgrey';  
    c102.style.color = 'lightgrey'; 
    
    c103.style.color = 'black'; 
  } 




  if(tiempoDeVideo > 180 ) {
    c100.style.color = 'black';  
    c101.style.color = 'black';   
    c102.style.color = 'black'; 
    c103.style.color = 'black'; 
     
  } 

  if(tiempoDeVideo > 180) {
    a0.style.color = 'grey'; 
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
