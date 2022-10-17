var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'Nf7eQroh2n8',
     
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

 var b1 = document.getElementById('b1');
 var b2 = document.getElementById('b2');
 var b3 = document.getElementById('b3');
 var b4 = document.getElementById('b4');
 var b5 = document.getElementById('b5');
 var b6 = document.getElementById('b6');
 var b7 = document.getElementById('b7');
 var b8 = document.getElementById('b8');
 var b9 = document.getElementById('b9');
 var b10 = document.getElementById('b10');
 var b11 = document.getElementById('b11');
 var b12 = document.getElementById('b12');
  
  

 
 var tiempoDeVideo = 0;

  

 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();
//////////////////////////////////////////////////////////
if(tiempoDeVideo > 0) {
  b1.style.color = '#c51130';
  b1.style.fontSize = '125%'; 
 
   
 } 


 if(tiempoDeVideo > 2) {
  b1.style.color = 'black';
  b1.style.fontSize = '100%'; 
  b2.style.color = '#c51130'; 
  b2.style.fontSize = '125%';           //5
   
 } 



if(tiempoDeVideo > 4) {
  b2.style.color = 'black'; 
  b2.style.fontSize = '100%';           //6
  b3.style.color = '#c51130';
  b3.style.fontSize = '125%'; 
} 



if(tiempoDeVideo > 6) {
  b3.style.color = 'black'; 
  b3.style.fontSize = '100%';           //7
 b4.style.color = '#c51130'; //naranja
 b4.style.fontSize = '125%';
} 




if(tiempoDeVideo > 8) {
  b4.style.color = 'black'; 
  b4.style.fontSize = '100%';            //5
  b5.style.color = '#c51130';
  b5.style.fontSize = '125%';
} 



if(tiempoDeVideo > 10) {
  b5.style.color = 'black'; 
  b5.style.fontSize = '100%';            //5
  b6.style.color = '#c51130';
  b6.style.fontSize = '125%';
} 



if(tiempoDeVideo > 12) {
  b6.style.color = 'black';
  b6.style.fontSize = '100%'; 
 b7.style.color = '#c51130'; //naranja //3
 b7.style.fontSize = '125%';
} 

 if(tiempoDeVideo > 13.5) {
  b7.style.color = 'black';  
  b7.style.fontSize = '100%';          //4
  b8.style.color = '#c51130';
  b8.style.fontSize = '125%';
 } 

 if(tiempoDeVideo > 15.5) {
  b8.style.color = 'black';  
  b8.style.fontSize = '100%';          //7
 b9.style.color = '#c51130'; //naranja
 b9.style.fontSize = '125%';
} 

if(tiempoDeVideo > 17.3) {
  b9.style.color = 'black';
  b9.style.fontSize = '100%';            //7
 b10.style.color = '#c51130'; //naranja
 b10.style.fontSize = '125%';
} 


if(tiempoDeVideo > 19.3) {
  b10.style.color = 'black';
  b10.style.fontSize = '100%'; 
  b11.style.color = '#c51130'; 
  b11.style.fontSize = '125%';
 
} 


 if(tiempoDeVideo > 21.1) {
  b11.style.color = 'black';
  b11.style.fontSize = '100%'; 
  b12.style.color = '#c51130';
  b12.style.fontSize = '125%';}



    if(tiempoDeVideo > 24) {
  b12.style.color = 'black';
  b12.style.fontSize = '100%'; 
  a1.style.textDecoration = 'underline';
  a1.style.color = '#c51130';
  a1.style.fontSize = '125%';}


    

 ////////////////////////////////////////////////////////////////////
    if(tiempoDeVideo > 63) {
    a1.style.color = '#c51130'; 
    a1.style.textDecoration = 'none';
  } 
 
  if(tiempoDeVideo > 66) {
    a1.style.color = 'black';
    a1.style.fontSize = '100%';
    a2.style.color = '#c51130'; //azul //2
    a2.style.fontSize = '125%';
    
  } 
   

   if(tiempoDeVideo > 69) {
    a2.style.color = 'black'; 
    a2.style.fontSize = '100%';
    a1.style.color = '#c51130'; 
    a1.style.fontSize = '125%';         //4
     
   } 

   if(tiempoDeVideo > 72) {
    a1.style.color = 'black';
    a1.style.fontSize = '100%';
    a2.style.color = '#c51130';
    a2.style.fontSize = '125%';           //5
     
   } 


  
  if(tiempoDeVideo > 75) {
    a2.style.color = 'black'; 
    a2.style.fontSize = '100%';          //6
    a3.style.color = '#c51130';
    a3.style.fontSize = '125%';
  } 



  if(tiempoDeVideo > 77.5) {
    a3.style.color = 'black'; 
    a3.style.fontSize = '100%';          //7
   a4.style.color = '#c51130';  
   a4.style.fontSize = '125%';
  } 

   if(tiempoDeVideo > 81) {
    a4.style.color = 'black';  
    a4.style.fontSize = '100%';         //3
    a3.style.color = '#c51130';
    a3.style.fontSize = '125%';
   } 

   if(tiempoDeVideo > 84) {
    a3.style.color = 'black'; 
    a3.style.fontSize = '100%';          //4
    a4.style.color = '#c51130';
    a4.style.fontSize = '125%';
   } 


 
  if(tiempoDeVideo > 86) {
    a4.style.color = 'black'; 
    a4.style.fontSize = '100%';           //5
    a5.style.color = '#c51130';
    a5.style.fontSize = '125%';
  } 



  if(tiempoDeVideo > 90) {
    a5.style.color = 'black';   
    a5.style.fontSize = '100%';         //5
    a6.style.color = '#c51130';
    a6.style.fontSize = '125%';
  } 

  if(tiempoDeVideo > 93) {
            
    a6.style.color = 'black';
    a6.style.fontSize = '100%';
    a5.style.color = '#c51130';
    a5.style.fontSize = '125%';
  } 

 

  if(tiempoDeVideo > 96) {
    a5.style.color = 'black';   
    a5.style.fontSize = '100%';        //7
    a6.style.color = '#c51130';
    a6.style.fontSize = '125%';
  } 
 
  if(tiempoDeVideo > 99) {
    a6.style.color = 'black';
    a6.style.fontSize = '100%';
   a7.style.color = '#c51130'; //naranja //3
   a7.style.fontSize = '125%';
  } 

   if(tiempoDeVideo > 101.5) {
    a7.style.color = 'black';   
    a7.style.fontSize = '100%';        //4
    a8.style.color = '#c51130';
    a8.style.fontSize = '125%';
   } 

  
  if(tiempoDeVideo > 104.5) {
    a8.style.color = 'black';   
    a8.style.fontSize = '100%';        //6
    a7.style.color = '#c51130';
    a7.style.fontSize = '125%';
  } 



  if(tiempoDeVideo > 108) {
    a7.style.color = 'black';    
    a7.style.fontSize = '100%';       //7
   a8.style.color = '#c51130'; //naranja
   a8.style.fontSize = '125%';
  } 

 

  if(tiempoDeVideo > 112) {
    a8.style.color = 'black';
    a8.style.fontSize = '100%';
 
   
  } 

  if(tiempoDeVideo > 112) {
    a9.style.textDecoration = 'underline';}
  

  if(tiempoDeVideo > 123) {
          
    a9.style.color = '#c51130';
    a9.style.textDecoration = 'none';
  } 

  if(tiempoDeVideo > 126) {
    a9.style.color = 'black';    
    a9.style.fontSize = '100%';       //7
   a10.style.color = '#c51130'; //naranja
   a10.style.fontSize = '125%';
  } 

 

  if(tiempoDeVideo > 129) {
    a10.style.color = 'black';
    a10.style.fontSize = '100%';
    a9.style.color = '#c51130'; 
    a9.style.fontSize = '125%';
   
  } 


 if(tiempoDeVideo > 132) {
    a9.style.color = 'black';   
    a9.style.fontSize = '100%';        //7
   a10.style.color = '#c51130'; //naranja
   a10.style.fontSize = '125%';
  } 

 

  if(tiempoDeVideo > 135) {
    a10.style.color = 'black';
    a10.style.fontSize = '100%';
    a11.style.color = '#c51130'; 
    a11.style.fontSize = '125%';
   
  } 


  if(tiempoDeVideo > 138) {
    a11.style.color = 'black';
    a11.style.fontSize = '100%';
    a12.style.color = '#c51130';
    a12.style.fontSize = '125%';
  }


    
      if(tiempoDeVideo > 141) {
    a12.style.color = 'black';
    a12.style.fontSize = '100%';
    a11.style.color = '#c51130';
    a11.style.fontSize = '125%';
  
  }



      if(tiempoDeVideo > 144) {
    a11.style.color = 'black';
    a11.style.fontSize = '100%';
    a12.style.color = '#c51130';
    a12.style.fontSize = '125%';
  }



      if(tiempoDeVideo > 146.5) {
    a12.style.color = 'black';
    a12.style.fontSize = '100%';
    a13.style.color = '#c51130';
    a13.style.fontSize = '125%';
  }


    

      if(tiempoDeVideo > 150) {
    a13.style.color = 'black';
    a13.style.fontSize = '100%';
    a14.style.color = '#c51130';
    a14.style.fontSize = '125%';
  }




       if(tiempoDeVideo > 153) {
    a14.style.color = 'black';
    a14.style.fontSize = '100%';
    a13.style.color = '#c51130';
    a13.style.fontSize = '125%';
  }

   

      if(tiempoDeVideo > 156) {
    a13.style.color = 'black';
    a13.style.fontSize = '100%';
    a14.style.color = '#c51130';
    a14.style.fontSize = '125%';
  }

   

       if(tiempoDeVideo > 159) {
    a14.style.color = 'black';
    a14.style.fontSize = '100%';
    a15.style.color = '#c51130';
    a15.style.fontSize = '125%';
  }

  

      if(tiempoDeVideo > 162) {
    a15.style.color = 'black';
    a15.style.fontSize = '100%';
    a16.style.color = '#c51130';
    a16.style.fontSize = '125%';
  }

  
        if(tiempoDeVideo > 165) {
    a16.style.color = 'black';
    a16.style.fontSize = '100%';
    a15.style.color = '#c51130';
    a15.style.fontSize = '125%';
  }



      if(tiempoDeVideo > 168) {
    a15.style.color = 'black';
    a15.style.fontSize = '100%';
    a16.style.color = '#c51130';
    a16.style.fontSize = '125%';
   
  
  }
 

   if(tiempoDeVideo > 172.5) {
    a16.style.color = 'black';
    a16.style.fontSize = '100%';
    }


    if(tiempoDeVideo > 172.5) {
      a17.style.textDecoration = 'underline';
      }

      if(tiempoDeVideo > 195) {
    
    a17.style.color = '#c51130';
    a17.style.textDecoration = 'none';
  }




       if(tiempoDeVideo > 198) {
    a17.style.color = 'black';
    a17.style.fontSize = '100%';
    a18.style.color = '#c51130';
    a18.style.fontSize = '125%';
  }

   

      if(tiempoDeVideo > 201) {
    a18.style.color = 'black';
    a18.style.fontSize = '100%';
    a17.style.color = '#c51130';
    a17.style.fontSize = '125%';
  }

   

       if(tiempoDeVideo > 204) {
    a17.style.color = 'black';
    a17.style.fontSize = '100%';
    a18.style.color = '#c51130';
    a18.style.fontSize = '125%';
  }

 

      if(tiempoDeVideo > 207) {
    a18.style.color = 'black';
    a18.style.fontSize = '100%';
    a19.style.color = '#c51130';
    a19.style.fontSize = '125%';
  }

 
        if(tiempoDeVideo > 210) {
    a19.style.color = 'black';
    a19.style.fontSize = '100%';
    a20.style.color = '#c51130';
    a20.style.fontSize = '125%';
  }



      if(tiempoDeVideo > 213) {
    a20.style.color = 'black';
    a20.style.fontSize = '100%';
    a19.style.color = '#c51130';
    a19.style.fontSize = '125%';
  }

       if(tiempoDeVideo > 216) {
    a19.style.color = 'black';
    a19.style.fontSize = '100%';
    a20.style.color = '#c51130';
    a20.style.fontSize = '125%';
  }


  if(tiempoDeVideo > 219) {
    a20.style.color = 'black';
    a20.style.fontSize = '100%';
    a19.style.color = '#c51130';
    a19.style.fontSize = '125%';
  }

  

      if(tiempoDeVideo > 222) {
    a19.style.color = 'black';
    a19.style.fontSize = '100%';
    a20.style.color = '#c51130';
    a20.style.fontSize = '125%';
  }

  
        if(tiempoDeVideo > 225) {
    a20.style.color = 'black';
    a20.style.fontSize = '100%';
    a19.style.color = '#c51130';
    a19.style.fontSize = '125%';}

     if(tiempoDeVideo > 228) {
    a19.style.color = 'black';
    a19.style.fontSize = '100%';
    a20.style.color = '#c51130';
    a20.style.fontSize = '125%';
  }

    if(tiempoDeVideo > 234) {
      a20.style.color = 'black';
      a20.style.fontSize = '100%';
     ;}

/*
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

 
