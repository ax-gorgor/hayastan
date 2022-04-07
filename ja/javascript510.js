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
 var a25 = document.getElementById('a25');
 var a26 = document.getElementById('a26');
 var a27 = document.getElementById('a27');
 var a28 = document.getElementById('a28');
 var a29 = document.getElementById('a29');
 var a30 = document.getElementById('a30');
 var a31 = document.getElementById('a31');
 var a32 = document.getElementById('a32');
  
  

 
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

  
 
 
    if(tiempoDeVideo > 36) {
    a1.style.color = '#005caa'; //rojo    //1
  } 
 
  if(tiempoDeVideo > 38.5) {
    a1.style.color = 'black';
    a2.style.color = '#f37736'; //azul //2
  } 
   

   if(tiempoDeVideo > 41) {
    a2.style.color = 'black'; 
    a3.style.color = '#c51130';          //4
     
   } 

   if(tiempoDeVideo > 43.5) {
    a3.style.color = 'black';
    a4.style.color = '#f37736';           //5
     
   } 


  
  if(tiempoDeVideo > 45) {
    a4.style.color = 'black';           //6
    a5.style.color = '#c51130';
  } 

 

  if(tiempoDeVideo > 47.5) {
    a5.style.color = 'black';           //7
   a6.style.color = '#005caa'; //naranja
  } 

   if(tiempoDeVideo > 50) {
    a6.style.color = 'black';           //3
    a7.style.color = '#c51130';
   } 

   if(tiempoDeVideo > 52.5) {
    a7.style.color = 'black';           //4
    a8.style.color = '#005caa';
   } 


 
  if(tiempoDeVideo > 55) {
    a8.style.color = 'black';            //5
    a5.style.color = '#c51130';
  } 



  if(tiempoDeVideo > 57.5) {
    a5.style.color = 'black';            //5
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 60) {
            
    a6.style.color = 'black';
    a7.style.color = '#005caa';
  } 

 

  if(tiempoDeVideo > 62) {
    a7.style.color = 'black';           //7
    a8.style.color = '#c51130';
  } 
 
  if(tiempoDeVideo > 64.5) {
    a8.style.color = 'black';
   a9.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 66) {
    a9.style.color = 'black';           //4
    a10.style.color = '#005caa';
   } 

  
  if(tiempoDeVideo > 68.5) {
    a10.style.color = 'black';           //6
    a11.style.color = '#c51130';
  } 



  if(tiempoDeVideo > 71) {
    a11.style.color = 'black';           //7
   a12.style.color = '#005caa'; //naranja
  } 

  //

  if(tiempoDeVideo > 73.5) {
    a12.style.color = 'black';
    a13.style.color = '#f37736'; 
   
  } 


  if(tiempoDeVideo > 76) {
    a13.style.color = 'black';           //6
    a14.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 78.5) {
    a14.style.color = 'black';           //7
   a15.style.color = '#005caa'; //naranja
  } 

  

  if(tiempoDeVideo > 81) {
    a15.style.color = 'black';
    a16.style.color = '#f37736'; 
   
  } 

 

  if(tiempoDeVideo > 83.5) {
    a16.style.color = 'black';
    
   
  } 


 if(tiempoDeVideo > 101) {
    a16.style.color = 'black';           //7
   a17.style.color = '#005caa'; //naranja
  } 

  

  if(tiempoDeVideo > 103.5) {
    a17.style.color = 'black';
    a18.style.color = '#f37736'; 
   
  } 


  if(tiempoDeVideo > 106) {
    a18.style.color = 'black';
    a19.style.color = '#f37736';
  }


    
      if(tiempoDeVideo > 108.5) {
    a19.style.color = 'black';
    a20.style.color = '#c51130';}



      if(tiempoDeVideo > 110) {
    a20.style.color = 'black';
    a21.style.color = '#005caa';}



      if(tiempoDeVideo > 112.5) {
    a21.style.color = 'black';
    a22.style.color = '#f37736';}


    

      if(tiempoDeVideo > 115) {
    a22.style.color = 'black';
    a23.style.color = '#c51130';}

      if(tiempoDeVideo > 117.5) {
    a23.style.color = 'black';
    a24.style.color = '#c51130';}


    

      if(tiempoDeVideo > 120) {
    a24.style.color = 'black';
    a21.style.color = '#f37736';}




       if(tiempoDeVideo > 122.5) {
    a21.style.color = 'black';
    a22.style.color = '#c51130';}

      if(tiempoDeVideo > 125) {
    a22.style.color = 'black';
    a23.style.color = '#f37736';}

       if(tiempoDeVideo > 127) {
    a23.style.color = 'black';
    a24.style.color = '#c51130';}

    

      if(tiempoDeVideo > 129) {
    a24.style.color = 'black';
    a25.style.color = '#f37736';}

  
        if(tiempoDeVideo > 131.5) {
    a25.style.color = 'black';
    a26.style.color = '#005caa';}

      if(tiempoDeVideo > 133.5) {
    a26.style.color = 'black';
    a27.style.color = '#f37736';}


     if(tiempoDeVideo > 136) {
    a27.style.color = 'black';
    a28.style.color = '#c51130';}

      if(tiempoDeVideo > 138.5) {
    a28.style.color = 'black';
    a29.style.color = '#005caa';}

       if(tiempoDeVideo > 141) {
    a29.style.color = 'black';
    a30.style.color = '#f37736';}

      if(tiempoDeVideo > 143) {
    a30.style.color = 'black';
    a31.style.color = '#c51130';}
    

     if(tiempoDeVideo > 145.5) {
    a31.style.color = 'black';
    a32.style.color = '#005caa';}

    

      if(tiempoDeVideo > 149) {
    a32.style.color = 'black';
    }

 

       if(tiempoDeVideo > 157) {
    a32.style.color = 'black';
    a25.style.color = '#c51130';}

      if(tiempoDeVideo > 159) {
    a25.style.color = 'black';
    a26.style.color = '#005caa';}

      if(tiempoDeVideo > 161.5) {
    a26.style.color = 'black';
    a27.style.color = '#f37736';}

      if(tiempoDeVideo > 164) {
    a27.style.color = 'black';
    a28.style.color = '#c51130';}



    if(tiempoDeVideo > 166) {
      a28.style.color = 'black';
      a29.style.color = '#005caa';}
  
        if(tiempoDeVideo > 168) {
      a29.style.color = 'black';
      a30.style.color = '#f37736';}

      if(tiempoDeVideo > 170.5) {
        a30.style.color = 'black';
        a31.style.color = '#c51130';}
    
          if(tiempoDeVideo > 173) {
        a31.style.color = 'black';
        a32.style.color = '#f37736';}   

       

   if(tiempoDeVideo > 175) {
    a32.style.color = 'black';
    a25.style.color = '#c51130';}

      if(tiempoDeVideo > 177.5) {
    a25.style.color = 'black';
    a26.style.color = '#005caa';}

      if(tiempoDeVideo > 180) {
    a26.style.color = 'black';
    a27.style.color = '#f37736';}

      if(tiempoDeVideo > 182) {
    a27.style.color = 'black';
    a28.style.color = '#c51130';}



    if(tiempoDeVideo > 184.5) {
      a28.style.color = 'black';
      a29.style.color = '#005caa';}
  
        if(tiempoDeVideo > 186.5) {
      a29.style.color = 'black';
      a30.style.color = '#f37736';}

      if(tiempoDeVideo > 189) {
        a30.style.color = 'black';
        a31.style.color = '#c51130';}
    
          if(tiempoDeVideo > 191) {
        a31.style.color = 'black';
        a32.style.color = '#f37736';}  
        
        if(tiempoDeVideo > 193.5) {
    a32.style.color = 'black';
    a25.style.color = '#c51130';}

      if(tiempoDeVideo > 196) {
    a25.style.color = 'black';
    a26.style.color = '#005caa';}

      if(tiempoDeVideo > 198) {
    a26.style.color = 'black';
    a27.style.color = '#f37736';}

      if(tiempoDeVideo > 200) {
    a27.style.color = 'black';
    a28.style.color = '#c51130';}



    if(tiempoDeVideo > 202.5) {
      a28.style.color = 'black';
      a29.style.color = '#005caa';}
  
        if(tiempoDeVideo > 205) {
      a29.style.color = 'black';
      a30.style.color = '#f37736';}

      if(tiempoDeVideo > 207.5) {
        a30.style.color = 'black';
        a31.style.color = '#c51130';}
    
          if(tiempoDeVideo > 210) {
        a31.style.color = 'black';
        a32.style.color = '#f37736';}  

        

         if(tiempoDeVideo > 212) {
      a32.style.color = 'black';
      a31.style.color = '#f37736';}

      if(tiempoDeVideo > 214) {
        a31.style.color = 'black';
        a32.style.color = '#c51130';}

       

         if(tiempoDeVideo > 216.5) {
      a32.style.color = 'black';
      a31.style.color = '#f37736';}

      if(tiempoDeVideo > 219) {
        a31.style.color = 'black';
        a32.style.color = '#c51130';}

  
          if(tiempoDeVideo > 227) {
        a32.style.color = 'black';
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

 

 