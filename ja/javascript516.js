
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: '6qi_0hCA2dU',
     
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

  
  

 
 var tiempoDeVideo = 0;

  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  

 
    if(tiempoDeVideo > 4) {
    a1.style.color = '#005caa'; //rojo    //1
  } 
 
  if(tiempoDeVideo > 14) {
    a1.style.color = 'black';
    a2.style.color = '#f37736'; //azul //2
  } 
   

   if(tiempoDeVideo > 26) {
    a2.style.color = 'black'; 
           
  } 

   if(tiempoDeVideo > 37) {
   
    a3.style.color = '#f37736';           //5
     
   } 


  
  if(tiempoDeVideo > 47) {
    a3.style.color = 'black';           //6
    a4.style.color = '#c51130';
  } 



  if(tiempoDeVideo > 60) {
    a4.style.color = 'black';           //7
   
  } 

   if(tiempoDeVideo > 84) {
    a10.style.color = 'white';  
    a10.style.fontSize = '105%';  
    a10.style.background = 'grey'; 
    a10.style.padding = '1%';
    a10.style.marginLeft = '0%';         //3
    
   } 
 
   if(tiempoDeVideo > 105) {
    a10.style.color = 'black';  
    a10.style.fontSize = '100%';  
    a10.style.background = 'white'; 
    a10.style.padding = '0%';
    a10.style.marginLeft = '0%';           //4
    
   } 


 
  if(tiempoDeVideo > 135) {
             
    a5.style.color = '#c51130';
  } 



  if(tiempoDeVideo > 143) {
    a5.style.color = 'black';            //5
    a6.style.color = '#f37736';
  } 

  if(tiempoDeVideo > 156) {
            
    a6.style.color = 'black';
  
  } 

 /*

  if(tiempoDeVideo > 53) {
    a8.style.color = 'black';           //7
    a9.style.color = '#c51130';
  } 
 
  if(tiempoDeVideo > 57) {
    a9.style.color = 'black';
   a10.style.color = '#f37736'; //naranja //3
  } 

   if(tiempoDeVideo > 62) {
    a10.style.color = 'black';           //4
    a8.style.color = '#005caa';
   } 

  
  if(tiempoDeVideo > 65) {
    a8.style.color = 'black';           //6
    a9.style.color = '#c51130';
  } 



  if(tiempoDeVideo > 68.5) {
    a9.style.color = 'black';           //7
   a10.style.color = '#005caa'; //naranja
  } 

  

  if(tiempoDeVideo > 76) {
    a10.style.color = 'black';
   
   
  } 


  if(tiempoDeVideo > 93) {
          
    a11.style.color = '#c51130';
  } 

  if(tiempoDeVideo > 97) {
    a11.style.color = 'black';           //7
   a12.style.color = '#005caa'; //naranja
  } 

 

  if(tiempoDeVideo > 101) {
    a12.style.color = 'black';
    a13.style.color = '#f37736'; 
   
  } 


 if(tiempoDeVideo > 104) {
    a13.style.color = 'black';           //7
   a14.style.color = '#005caa'; //naranja
  } 

  

  if(tiempoDeVideo > 108) {
    a14.style.color = 'black';
    a15.style.color = '#f37736'; 
   
  } 


  if(tiempoDeVideo > 113) {
    a15.style.color = 'black';
    a13.style.color = '#f37736';
  }


    
      if(tiempoDeVideo > 116) {
    a13.style.color = 'black';
    a14.style.color = '#c51130';}



      if(tiempoDeVideo > 120) {
    a14.style.color = 'black';
    a15.style.color = '#005caa';}



      if(tiempoDeVideo > 126) {
    a15.style.color = 'black';
                              }


    

      if(tiempoDeVideo > 145) {
     
    a16.style.color = '#c51130';}



      if(tiempoDeVideo > 148) {
    a16.style.color = 'black';
    a17.style.color = '#c51130';}


    

      if(tiempoDeVideo > 152) {
    a17.style.color = 'black';
    a18.style.color = '#f37736';}




       if(tiempoDeVideo > 155) {
    a18.style.color = 'black';
    a19.style.color = '#c51130';}

   

      if(tiempoDeVideo > 159) {
    a19.style.color = 'black';
    a20.style.color = '#f37736';}

    

       if(tiempoDeVideo > 164) {
    a20.style.color = 'black';
    a18.style.color = '#c51130';}

    

      if(tiempoDeVideo > 167) {
    a18.style.color = 'black';
    a19.style.color = '#f37736';}

  
        if(tiempoDeVideo > 170.5) {
    a19.style.color = 'black';
    a20.style.color = '#005caa';}

      if(tiempoDeVideo > 180) {
    a20.style.color = 'black';
                              }
 

     if(tiempoDeVideo > 10) {
    a21.style.color = 'black';
    a22.style.color = 'grey';
    a23.style.color = 'grey';
    a24.style.color = 'grey';
  
  }
 
        if(tiempoDeVideo > 43) {
    a21.style.color = 'grey';
    a22.style.color = 'black';
    a23.style.color = 'grey';
    a24.style.color = 'grey';
  
  }

          if(tiempoDeVideo > 93) {
    a21.style.color = 'grey';
    a22.style.color = 'grey';
    a23.style.color = 'black';
    a24.style.color = 'grey';
  
  }
 
          if(tiempoDeVideo > 144) {
    a21.style.color = 'grey';
    a22.style.color = 'grey';
    a23.style.color = 'grey';
    a24.style.color = 'black';
  
  }
 
            if(tiempoDeVideo > 185) {
    a21.style.color = 'black';
    a22.style.color = 'black';
    a23.style.color = 'black';
    a24.style.color = 'black';
  
  }
/*
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

 

 