
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '315',
     width: '560',
     videoId: 'EsCdHSZQXyE',
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


 var b100 = document.getElementById('b100');
 var b101 = document.getElementById('b101');
 var b102 = document.getElementById('b102');

 
  


  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeVideo > 0) {
    a0.style.color = 'white'; //rojo    //1
  } 

  if(tiempoDeVideo > 3) {
    a0.style.color = 'grey'; //rojo    //1
  } 

  if(tiempoDeVideo > 70 ) {
    a0.style.color = 'white'; //rojo    //1
  } 

  if(tiempoDeVideo > 76) {
    a1.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 80) {
    a1.style.color = 'black';
    a2.style.color = '#005caa'; //azul //2
  } 
  if(tiempoDeVideo > 85) {
    a2.style.color = 'black';
   a1.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 89) {
    a1.style.color = 'black';           //4
    a2.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 94) {
    a2.style.color = 'black';           //5
    a3.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 98) {
    a3.style.color = 'black';           //6
    a4.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 103) {
    a4.style.color = 'black';           //7
   a3.style.color = '#f37736'; //naranja
  } 

   if(tiempoDeVideo > 107) {
    a3.style.color = 'black';           //3
    a4.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 112) {
    a4.style.color = 'black';           //3
    
   } 


   //

   if(tiempoDeVideo > 130) {
            
    a5.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 134) {
    a5.style.color = 'black';            //5
    a6.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 139) {
    a6.style.color = 'black';           //6
    a5.style.color = '#005caa';
  } 

  if(tiempoDeVideo > 143) {
    a5.style.color = 'black';           //7
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 148) {
    a6.style.color = 'black';           //4
    a7.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 152) {
    a7.style.color = 'black';            //5
    a8.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 157) {
    a8.style.color = 'black';           //6
    a7.style.color = '#005caa';
  } 

  if(tiempoDeVideo > 161) {
    a7.style.color = 'black';           //7
    a8.style.color = '#f37736';
  } 
  
  if(tiempoDeVideo > 166) {
    a8.style.color = 'black';           //7
     
  } 



  //

   

  

  if(tiempoDeVideo > 203) {
     
    a9.style.color = '#c51130'; //rojo    //1
  } 
  if(tiempoDeVideo > 208) {
    a9.style.color = 'black';
    a10.style.color = '#005caa'; //azul //2
  } 
  if(tiempoDeVideo > 213) {
    a10.style.color = 'black';
   a9.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 217) {
    a9.style.color = 'black';           //4
    a10.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 222) {
    a10.style.color = 'black';           //5
    a11.style.color = '#005caa';
   } 

  if(tiempoDeVideo > 226) {
    a11.style.color = 'black';           //6
    a12.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 230) {
    a12.style.color = 'black';           //7
   a11.style.color = '#c51130'; //naranja
  } 

  //

  if(tiempoDeVideo > 235) {
    a11.style.color = 'black';
   a12.style.color = '#f37736'; //naranja //3
  } 

  if(tiempoDeVideo > 240) {
    a12.style.color = 'black';
    a11.style.color = '#005caa';
    
  }



  if(tiempoDeVideo > 245) {
    a11.style.color = 'black';
   a12.style.color = '#c51130'; //naranja //3
  } 

  //

  if(tiempoDeVideo > 249) {
    a12.style.color = 'black';
    a11.style.color = '#f37736';
    
  }



  if(tiempoDeVideo > 253) {
    a11.style.color = 'black';
   a12.style.color = '#c51130'; //naranja //3
  } 

  if(tiempoDeVideo > 259) {
     
   a12.style.color = 'black'; //naranja //3
  } 
 
  // estrofas iluminadas !

  if(tiempoDeVideo > 76) {
    b100.style.color = 'black'; b100.style.fontSize = '105%' ;
    b100.style.opacity = '1';   
    b101.style.opacity = '0.4'; b101.style.fontSize = '100%';
    b102.style.opacity = '0.4'; b102.style.fontSize = '100%'
  } 

  if(tiempoDeVideo > 130) {
    b100.style.opacity = '0.4';  b100.style.fontSize = '100%' ;
    b101.style.opacity = '1';   
    b101.style.color = 'black';b101.style.fontSize = '105%';
    b102.style.opacity = '0.4'; b102.style.fontSize = '100%'
  } 

  if(tiempoDeVideo > 203) {
    b100.style.opacity = '0.4';  b100.style.fontSize = '100%' ;
    b101.style.opacity = '0.4';  
    b102.style.opacity = '1'; b102.style.fontSize = '100%'
    b102.style.color = 'black'; b102.style.fontSize = '105%';
  } 
   
  if(tiempoDeVideo > 259 ) {
    b100.style.color = 'black';  
    b101.style.color = 'black';   
    b102.style.color = 'black';  
    b100.style.opacity = '1';  
    b101.style.opacity = '1';   
    b102.style.opacity = '1'; 
  } 

  if(tiempoDeVideo > 0 ) {
    a22.style.color = 'white'; //rojo    //1
  } 
  if(tiempoDeVideo > 260) {
    a22.style.color = 'grey'; //rojo    //1
  } 

  if(tiempoDeVideo > 264 ) {
    a22.style.color = 'white'; //rojo    //1
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

 

 