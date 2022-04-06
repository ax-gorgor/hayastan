var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'KFqLqYLPgT4',
     
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
    a1.style.color = '#005caa'; //rojo    //1
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
   a4.style.color = '#005caa'; //naranja
  } 

   if(tiempoDeVideo > 98) {
    a4.style.color = 'black';           //3
    a3.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 100) {
    a3.style.color = 'black';           //4
    a4.style.color = '#005caa';
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


  if(tiempoDeVideo > 134) {
    
    a9.style.color = '#c51130';
     
     
  } 
  if(tiempoDeVideo > 136) {
    a9.style.color = 'black';
   a10.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 139) {
    a10.style.color = 'black';           //4
    a9.style.color = '#005caa';
   } 

  
  if(tiempoDeVideo > 141) {
    a9.style.color = 'black';           //6
    a10.style.color = '#c51130';
  } 



  if(tiempoDeVideo > 143) {
    a10.style.color = 'black';           //7
   a11.style.color = '#005caa'; //naranja
  } 

  //

  if(tiempoDeVideo > 145.5) {
    a11.style.color = 'black';
    a12.style.color = '#f37736'; 
   
  } 


  if(tiempoDeVideo > 148) {
    a12.style.color = 'black';           //6
    a11.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 150) {
    a11.style.color = 'black';           //7
   a12.style.color = '#005caa'; //naranja
  } 

  

  if(tiempoDeVideo > 155) {
    a12.style.color = 'black';
    a13.style.color = '#f37736'; 
   
  } 

  if(tiempoDeVideo > 160) {
    a13.style.color = 'black';
    a14.style.color = '#c51130'; 
   
  } 


 if(tiempoDeVideo > 165) {
    a14.style.color = 'black';           //7
   a13.style.color = '#005caa'; //naranja
  } 

  

  if(tiempoDeVideo > 169) {
    a13.style.color = 'black';
    a14.style.color = '#f37736'; 
   
  } 

  if(tiempoDeVideo > 176) {
    a14.style.color = 'black';
    a15.style.color = '#c51130'; 
  }

  if(tiempoDeVideo > 179) {
    a15.style.color = 'black';
    a16.style.color = '#f37736';
  }


    
      if(tiempoDeVideo > 182) {
    a16.style.color = 'black';
    a15.style.color = '#c51130';}

      if(tiempoDeVideo > 184) {
    a15.style.color = 'black';
    a16.style.color = '#005caa';}



      if(tiempoDeVideo > 187) {
    a16.style.color = 'black';
    a17.style.color = '#f37736';}

      if(tiempoDeVideo > 189) {
    a17.style.color = 'black';
    a18.style.color = '#c51130';}

      if(tiempoDeVideo > 191.5) {
    a18.style.color = 'black';
    a17.style.color = '#c51130';}

      if(tiempoDeVideo > 193.5) {
    a17.style.color = 'black';
    a18.style.color = '#f37736';}




       if(tiempoDeVideo > 196) {
    a18.style.color = 'black';
    a19.style.color = '#c51130';}

      if(tiempoDeVideo > 201) {
    a19.style.color = 'black';
    a20.style.color = '#f37736';}

       if(tiempoDeVideo > 205) {
    a20.style.color = 'black';
    a19.style.color = '#c51130';}

      if(tiempoDeVideo > 211) {
    a19.style.color = 'black';
    a20.style.color = '#f37736';}

    if(tiempoDeVideo > 217) {
      a20.style.color = 'black';}
      

   
        if(tiempoDeVideo > 254) {
    a20.style.color = 'black';
    a21.style.color = '#005caa';}

      if(tiempoDeVideo > 256) {
    a21.style.color = 'black';
    a22.style.color = '#f37736';}




       if(tiempoDeVideo > 258) {
    a22.style.color = 'black';
    a21.style.color = '#c51130';}

      if(tiempoDeVideo > 261) {
    a21.style.color = 'black';
    a22.style.color = '#005caa';}

       if(tiempoDeVideo > 263.5) {
    a22.style.color = 'black';
    a23.style.color = '#f37736';}

      if(tiempoDeVideo > 265.5) {
    a23.style.color = 'black';
    a24.style.color = '#c51130';}
    

     if(tiempoDeVideo > 268) {
    a24.style.color = 'black';
    a23.style.color = '#005caa';}

      if(tiempoDeVideo > 270) {
    a23.style.color = 'black';
    a24.style.color = '#f37736';}

 

       if(tiempoDeVideo > 273) {
    a24.style.color = 'black';
    a25.style.color = '#c51130';}

      if(tiempoDeVideo > 278) {
    a25.style.color = 'black';
    a26.style.color = '#005caa';}

      if(tiempoDeVideo > 282) {
    a26.style.color = 'black';
    a25.style.color = '#f37736';}

      if(tiempoDeVideo > 287) {
    a25.style.color = 'black';
    a26.style.color = '#c51130';}



    if(tiempoDeVideo > 292) {
      a26.style.color = 'black';
      a25.style.color = '#005caa';}
  
        if(tiempoDeVideo > 297) {
      a25.style.color = 'black';
      a26.style.color = '#f37736';}

      if(tiempoDeVideo > 302) {
        a26.style.color = 'black';
        a25.style.color = '#c51130';}
    
          if(tiempoDeVideo > 306) {
        a25.style.color = 'black';
        a26.style.color = '#f37736';}   

   if(tiempoDeVideo > 312) {
    a26.style.color = 'black';} 
 

   

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

 

 