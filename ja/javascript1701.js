

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '315',
     width: '560',
     videoId: 'BYSuON_k1gw',
     
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


 // Creamos una funcion que se va a fijar cuanto tiempo transcurrio (mirando el valor de
 // tiempoDeVideo) y si pasaron mas de 5 segundos, va a pintar "intro" de rojo. Si pasaron
 // mas de 8 segundos, va a pintar "introd" (la segunda linea) de rojo y pintar "intro"
 // (la primera linea) de negro otra vez. Y si pasaron mas de 9 segundos, va a pintar la
 // tercera linea de rojo y la segunda de negro otra vez.
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeVideo > 3) {
    a0.style.color = 'grey';
     }

     if(tiempoDeVideo > 26) {
        a0.style.color = 'white';
         }

    if(tiempoDeVideo > 32) {
          a1.style.color = '#be00af';
          a1.style.fontSize = '115%'; //rojo    //1
          } 
       
          if(tiempoDeVideo > 42) {
          a1.style.color = 'black';
          a1.style.fontSize = '100%'
          a2.style.color = '#be00af';
          a2.style.fontSize = '115%';  //azul //2
          } 
         
          if(tiempoDeVideo > 52) {
          a2.style.color = 'black';
          a2.style.fontSize = '100%'
          a3.style.color = '#be00af'; 
          a3.style.fontSize = '115%'; //naranja //3
          } 
      
          if(tiempoDeVideo > 63) {
          a3.style.color = 'black';           //4
          a4.style.color = '#be00af';
          a3.style.fontSize = '100%'; 
          a4.style.fontSize = '115%'; 
          
          } 
       
          if(tiempoDeVideo > 73) {
          a4.style.color = 'black';           //7
          a5.style.color = '#be00af';
          a4.style.fontSize = '100%'; 
          a5.style.fontSize = '115%'; 
          } 
          
          if(tiempoDeVideo > 84) {
          a5.style.color = 'black';           //3
          a6.style.color = '#be00af';
          a5.style.fontSize = '100%'; 
          a6.style.fontSize = '115%'; 
          } 
          
          
          if(tiempoDeVideo > 94) {
          a6.style.color = 'black';           //3
          a7.style.color = '#be00af';
          a6.style.fontSize = '100%'; 
          a7.style.fontSize = '115%'; 
          }
 
          if(tiempoDeVideo > 104) {
            a7.style.color = 'black';           //3
            a8.style.color = '#be00af';
            a7.style.fontSize = '100%'; 
            a8.style.fontSize = '115%'; 
            }
 
         
            if(tiempoDeVideo > 114) {
              a8.style.color = 'black';           //3
              
              a8.style.fontSize = '100%'; 
               
              }
  
              if(tiempoDeVideo > 123) {
                         
                a9.style.color = '#be00af';
                 
                a9.style.fontSize = '115%'; 
                }
   
          
          if(tiempoDeVideo > 126) {
          a9.style.color = 'black';           //6
          a10.style.color = '#be00af';
          a9.style.fontSize = '100%'; 
          a10.style.fontSize = '115%'; 
          
          } 
   
          if(tiempoDeVideo > 127.5) {
          a10.style.color = 'black';           //7
          a11.style.color = '#be00af';
          a10.style.fontSize = '100%'; 
          a11.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 131) {
          a11.style.color = 'black';           //3
          a12.style.color = '#be00af';
          a11.style.fontSize = '100%'; 
          a12.style.fontSize = '115%'; 
          } 
           
          if(tiempoDeVideo > 132.5) {
          a12.style.color = 'black';           //3
          a13.style.color = '#be00af';
          a12.style.fontSize = '100%'; 
          a13.style.fontSize = '115%'; 
          } 
          
          if(tiempoDeVideo > 135.5) {
          a13.style.color = 'black';           //6
          a14.style.color = '#be00af';
          a13.style.fontSize = '100%'; 
          a14.style.fontSize = '115%'; 
          
          } 
        
           
          if(tiempoDeVideo > 137) {
          a14.style.color = 'black';           //3
          a15.style.color = '#be00af';
          a14.style.fontSize = '100%'; 
          a15.style.fontSize = '115%'; 
          } 
  
           
          if(tiempoDeVideo > 140) {  
          a15.style.color = 'black';           //7
          a16.style.color = '#be00af';
          a15.style.fontSize = '100%'; 
          a16.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 142) {  
          a16.style.color = 'black';           //7
          a13.style.color = '#be00af';
          a16.style.fontSize = '100%'; 
          a13.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 145) {  
              a13.style.color = 'black';           //7
              a14.style.color = '#be00af';
              a13.style.fontSize = '100%'; 
              a14.style.fontSize = '115%'; 
              }
           
   
            
          if(tiempoDeVideo > 147) { 
          a14.style.fontSize = '100%';  
          a14.style.color = 'black';           //7
          a15.style.color = '#be00af';
          a15.style.fontSize = '115%'; 
          } 
         
 
          if(tiempoDeVideo > 150) {
          a15.style.color = 'black';           //3
          a16.style.color = '#be00af';
          a15.style.fontSize = '100%'; 
          a16.style.fontSize = '115%'; 
          }
 
          if(tiempoDeVideo > 154) {
            a16.style.color = 'black';           //3
            
            a16.style.fontSize = '100%'; 
            
            }
  
        
            if(tiempoDeVideo > 32) {
              a17.style.fontSize = '115%'; 
              a18.style.color = 'black';           //3
              a19.style.color = 'lightgrey';
              a20.style.color = 'lightgrey';
              a21.style.color = 'lightgrey';
              a22.style.color = 'lightgrey';
              a23.style.color = 'lightgrey';
              a24.style.color = 'lightgrey';
              a25.style.color = 'lightgrey'; 
              a26.style.color = 'lightgrey'; 
              }
 

            if(tiempoDeVideo > 73) {
              a17.style.fontSize = '115%'; 
              a18.style.color = 'lightgrey';           //3
              a19.style.color = 'black';
              a20.style.color = 'lightgrey';
              a21.style.color = 'lightgrey';
              a22.style.color = 'lightgrey';
              a23.style.color = 'lightgrey';
              a24.style.color = 'lightgrey';
              a25.style.color = 'lightgrey';
              a26.style.color = 'lightgrey';
              }

         
              if(tiempoDeVideo > 115) {
              a17.style.fontSize = '100%'; 
              a17.style.color = 'lightgrey';
              a18.style.color = 'lightgrey';           //3
              a19.style.color = 'lightgrey';
              a20.style.fontSize = '115%'; 
              a20.style.color = 'black';
              a21.style.color = 'black';
              a22.style.color = 'black';
              a23.style.color = 'black';
              a24.style.color = 'black';
              a25.style.color = 'black';
              a26.style.color = 'black';
              
              }
           

              if(tiempoDeVideo > 123) {
              a17.style.fontSize = '100%'; 
              a17.style.color = 'lightgrey';
              a18.style.color = 'lightgrey';           //3
              a19.style.color = 'lightgrey';
              a20.style.fontSize = '115%'; 
              a20.style.color = 'black';
              a21.style.color = 'black';
              a22.style.color = 'lightgrey';
              a23.style.color = 'lightgrey';
              a24.style.color = 'lightgrey';
              a25.style.color = 'lightgrey';
              a26.style.color = 'lightgrey';
              }

            

               if(tiempoDeVideo > 127) {
              a17.style.fontSize = '100%'; 
              a17.style.color = 'lightgrey';
              a18.style.color = 'lightgrey';           //3
              a19.style.color = 'lightgrey';
              a20.style.fontSize = '115%'; 
              a20.style.color = 'black';
              a21.style.color = 'lightgrey';
              a22.style.color = 'black';
              a23.style.color = 'lightgrey';
              a24.style.color = 'lightgrey';
              a25.style.color = 'lightgrey';
              a26.style.color = 'lightgrey';
              }


             if(tiempoDeVideo > 132) {
              a17.style.fontSize = '100%'; 
              a17.style.color = 'lightgrey';
              a18.style.color = 'lightgrey';           //3
              a19.style.color = 'lightgrey';
              a20.style.fontSize = '115%'; 
              a20.style.color = 'black';
              a21.style.color = 'lightgrey';
              a22.style.color = 'lightgrey';
              a23.style.color = 'black';
              a24.style.color = 'lightgrey';
              a25.style.color = 'lightgrey'; 
              a26.style.color = 'lightgrey';
              }
  

              if(tiempoDeVideo > 137) {
              a17.style.fontSize = '100%'; 
              a17.style.color = 'lightgrey';
              a18.style.color = 'lightgrey';           //3
              a19.style.color = 'lightgrey';
              a20.style.fontSize = '115%'; 
              a20.style.color = 'black';
              a21.style.color = 'lightgrey';
              a22.style.color = 'lightgrey';
              a23.style.color = 'lightgrey';
              a24.style.color = 'black';
              a25.style.color = 'lightgrey';
              a26.style.color = 'lightgrey';
              }

              if(tiempoDeVideo > 142) {
                a17.style.fontSize = '100%'; 
                a17.style.color = 'lightgrey';
                a18.style.color = 'lightgrey';           //3
                a19.style.color = 'lightgrey';
                a20.style.fontSize = '115%'; 
                a20.style.color = 'black';
                a21.style.color = 'lightgrey';
                a22.style.color = 'lightgrey';
                a23.style.color = 'lightgrey';
                a24.style.color = 'lightgrey';
                a25.style.color = 'black';
                a26.style.color = 'lightgrey';
                
                }
                if(tiempoDeVideo > 147) {
                    a17.style.fontSize = '100%'; 
                    a17.style.color = 'lightgrey';
                    a18.style.color = 'lightgrey';           //3
                    a19.style.color = 'lightgrey';
                    a20.style.fontSize = '115%'; 
                    a20.style.color = 'black';
                    a21.style.color = 'lightgrey';
                    a22.style.color = 'lightgrey';
                    a23.style.color = 'lightgrey';
                    a24.style.color = 'lightgrey';
                    a25.style.color = 'lightgrey';
                    a26.style.color = 'black';
                    
                    }

                    if(tiempoDeVideo > 154) {
                        a17.style.fontSize = '100%'; 
                        a17.style.color = 'black';
                        a18.style.color = 'black';           //3
                        a19.style.color = 'black';
                        a20.style.fontSize = '100%'; 
                        a20.style.color = 'black';
                        a21.style.color = 'black';
                        a22.style.color = 'black';
                        a23.style.color = 'black';
                        a24.style.color = 'black';
                        a25.style.color = 'black';
                        a26.style.color = 'black';
                        
                        }

              /*

              if(tiempoDeVideo > 147) {
              a17.style.fontSize = '100%'; 
              a17.style.color = 'lightgrey';
              a18.style.color = 'lightgrey';           //3
              a19.style.color = 'black';
              a20.style.fontSize = '115%'; 
              a20.style.color = 'lightgrey';
              a21.style.color = 'lightgrey';
              a22.style.color = 'lightgrey';
              a23.style.color = 'lightgrey';
              a24.style.color = 'black';
               
              
              }
              if(tiempoDeVideo > 102) {
                a24.style.color = 'black';           //3
                a25.style.color = '#be00af';
                a24.style.fontSize = '100%'; 
                a25.style.fontSize = '115%'; 
                }
   
          
          if(tiempoDeVideo > 104) {
          a25.style.color = 'black';           //6
          a26.style.color = '#be00af';
          a25.style.fontSize = '100%'; 
          a26.style.fontSize = '115%'; 
          
          } 
 

          if(tiempoDeVideo > 108) {
            a26.style.color = 'black';           //6
            a27.style.color = '#be00af';
            a26.style.fontSize = '100%'; 
            a27.style.fontSize = '115%'; 
            a27.style.textDecoration = 'underline'; 
            } 
  
           
           
            if(tiempoDeVideo > 137) { 
            a27.style.fontSize = '100%'; 
            a27.style.color = 'black';  
            a27.style.textDecoration = 'none'; 
            a28.style.color = '#be00af';           //7
           
            a28.style.fontSize = '115%';
            }
   
          if(tiempoDeVideo > 139) {
          a28.style.color = 'black';           //7
          a29.style.color = '#be00af';
          a28.style.fontSize = '100%'; 
          a29.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 142.5) {
          a29.style.color = 'black';           //3
          a30.style.color = '#be00af';
          a29.style.fontSize = '100%'; 
          a30.style.fontSize = '115%'; 
          } 
           
          if(tiempoDeVideo > 144.5) {
          a30.style.color = 'black';           //3
          a31.style.color = '#be00af';
          a30.style.fontSize = '100%'; 
          a31.style.fontSize = '115%'; 
          } 
          
          if(tiempoDeVideo > 146.5) {
          a31.style.color = 'black';           //6
          a32.style.color = '#be00af';
          a31.style.fontSize = '100%'; 
          a32.style.fontSize = '115%'; 
          
          } 
       
            
          if(tiempoDeVideo > 150) {
          a32.style.color = 'black';           //3
          a33.style.color = '#be00af';
          a32.style.fontSize = '100%'; 
          a33.style.fontSize = '115%'; 
          } 
 
           
          if(tiempoDeVideo > 152) {  
          a33.style.color = 'black';           //7
          a34.style.color = '#be00af';
          a33.style.fontSize = '100%'; 
          a34.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 154) {  
          a34.style.color = 'black';           //7
          a35.style.color = '#be00af';
          a34.style.fontSize = '100%'; 
          a35.style.fontSize = '115%'; 
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

 

 