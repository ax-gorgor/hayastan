
 


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371',
     width: '660',
     videoId: 'wHbHbwdagtI',
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
 var a50 = document.getElementById('a50');

 var a51 = document.getElementById('a51');
 var a52 = document.getElementById('a52');
 var a53 = document.getElementById('a53');
 var a54 = document.getElementById('a54');
 var a55 = document.getElementById('a55');
 var a56 = document.getElementById('a56');

 var a57 = document.getElementById('a57');
 var a58 = document.getElementById('a58');
 var a59 = document.getElementById('a59');
 var a60 = document.getElementById('a60');
 var a61 = document.getElementById('a61');
 var a62 = document.getElementById('a62');

 var a63 = document.getElementById('a63');
 var a64 = document.getElementById('a64');
 var a65 = document.getElementById('a65');
 var a66 = document.getElementById('a66');
 var a67 = document.getElementById('a67');
 var a68 = document.getElementById('a68');

 var a69 = document.getElementById('a69');
 var a70 = document.getElementById('a70');
 var a71 = document.getElementById('a71');
 var a72 = document.getElementById('a72');
 var a73 = document.getElementById('a73');
 var a74 = document.getElementById('a74');
 var image1 = document.getElementById('image1');
 var image2 = document.getElementById('image2');
 var image3 = document.getElementById('image3');
 var image4 = document.getElementById('image4');


 
  
 
 function colorText() {

   /*
  
   if(tiempoDeVideo > 3) {
    a0.style.color = 'grey';
     }


     if(tiempoDeVideo > 21) {
        a0.style.color = 'white';
         }   
*/   
if(tiempoDeVideo > 19) {
  a1.style.color = '#be00af';
  a1.style.fontSize = '115%'; //rojo    //1
  } 
 
  if(tiempoDeVideo > 24) {
  a1.style.color = 'black';
  a1.style.fontSize = '100%'
  a2.style.color = '#be00af';
  a2.style.fontSize = '115%';  //azul //2
  } 
 
  if(tiempoDeVideo > 29) {
  a2.style.color = 'black';
  a2.style.fontSize = '100%'
  a3.style.color = '#be00af'; 
  a3.style.fontSize = '115%'; //naranja //3
  } 
 
  if(tiempoDeVideo > 34) {
  a3.style.color = 'black';           //4
  a4.style.color = '#be00af';
  a3.style.fontSize = '100%'; 
  a4.style.fontSize = '115%'; 
  
  } 
  
  if(tiempoDeVideo > 39) {
  a4.style.color = 'black';           //7
  a3.style.color = '#be00af';
  a4.style.fontSize = '100%'; 
  a3.style.fontSize = '115%'; 
  } 
   
  if(tiempoDeVideo > 43) {
  a3.style.color = 'black';           //3
  a4.style.color = '#be00af';
  a3.style.fontSize = '100%'; 
  a4.style.fontSize = '115%'; 
  } 
  
 
  
  if(tiempoDeVideo > 48) {
  a4.style.color = 'black';           //3
  a5.style.color = '#be00af';
  a4.style.fontSize = '100%'; 
  a5.style.fontSize = '115%'; 
  }
 
  if(tiempoDeVideo > 53) {
    a5.style.color = 'black';           //3
    a6.style.color = '#be00af';
    a5.style.fontSize = '100%'; 
    a6.style.fontSize = '115%'; 
    }

    
    if(tiempoDeVideo > 57) {
      a6.style.color = 'black';           //3
      a7.style.color = '#be00af';
      a6.style.fontSize = '100%'; 
      a7.style.fontSize = '115%'; 
      }
 
      if(tiempoDeVideo > 62) {
        a7.style.color = 'black';           //3
        a8.style.color = '#be00af';
        a7.style.fontSize = '100%'; 
        a8.style.fontSize = '115%'; 
        }

 
   
  if(tiempoDeVideo > 66) {
  a8.style.color = 'black';           //3
  a7.style.color = '#be00af';
  a8.style.fontSize = '100%'; 
  a7.style.fontSize = '115%'; 
  } 
    
  if(tiempoDeVideo > 71) {
  a7.style.color = 'black';           //3
  a8.style.color = '#be00af';
  a7.style.fontSize = '100%'; 
  a8.style.fontSize = '115%'; 
  } 
 
  if(tiempoDeVideo > 76) {
  a8.style.color = 'black';           //6
  a9.style.color = '#be00af';
  a8.style.fontSize = '100%'; 
  a9.style.fontSize = '115%'; 
  
  } 
   
  if(tiempoDeVideo > 80) {
  a9.style.color = 'black';           //3
  a10.style.color = '#be00af';
  a9.style.fontSize = '100%'; 
  a10.style.fontSize = '115%'; 
  } 

  
  if(tiempoDeVideo > 85) {  
  a10.style.color = 'black';           //7
  a11.style.color = '#be00af';
  a10.style.fontSize = '100%'; 
  a11.style.fontSize = '115%'; 
  }
    
  if(tiempoDeVideo > 89) {  
  a11.style.color = 'black';           //7
  a12.style.color = '#be00af';
  a11.style.fontSize = '100%'; 
  a12.style.fontSize = '115%'; 
  }
 
  if(tiempoDeVideo > 94) {  
      a12.style.color = 'black';           //7
      a11.style.color = '#be00af';
      a12.style.fontSize = '100%'; 
      a11.style.fontSize = '115%'; 
      }
   
 
   
  if(tiempoDeVideo > 99) { 
  a11.style.fontSize = '100%';  
  a11.style.color = 'black';           //7
  a12.style.color = '#be00af';
  a12.style.fontSize = '115%'; 
  } 
 
 
  if(tiempoDeVideo > 103) {
    a12.style.color = 'black';           //3
    a13.style.color = '#be00af';
    a12.style.fontSize = '100%'; 
    a13.style.fontSize = '115%'; 
    }
 
    if(tiempoDeVideo > 107) {
      a13.style.color = 'black';           //3
      a14.style.color = '#be00af';
      a13.style.fontSize = '100%'; 
      a14.style.fontSize = '115%'; 
      }
 
      if(tiempoDeVideo > 112) {
        a14.style.color = 'black';           //3
        a15.style.color = '#be00af';
        a14.style.fontSize = '100%'; 
        a15.style.fontSize = '115%'; 
        }
 
  
  if(tiempoDeVideo > 116) {
  a15.style.color = 'black';           //6
  a16.style.color = '#be00af';
  a15.style.fontSize = '100%'; 
  a16.style.fontSize = '115%'; 
  
  } 

 
  if(tiempoDeVideo > 121) {
    a16.style.color = 'black';           //6
    a15.style.color = '#be00af';
    a16.style.fontSize = '100%'; 
    a15.style.fontSize = '115%'; 
    
    } 
    

  if(tiempoDeVideo > 126) {
  a15.style.color = 'black';           //7
  a16.style.color = '#be00af';
  a15.style.fontSize = '100%'; 
  a16.style.fontSize = '115%'; 
  }
 
  if(tiempoDeVideo > 134) {
  a16.style.color = 'black';           //3
  a13.style.color = '#be00af';
  a16.style.fontSize = '100%'; 
  a13.style.fontSize = '115%'; 
  } 
   
  if(tiempoDeVideo > 152) {
  a13.style.color = 'black';           //3
  a14.style.color = '#be00af';
  a13.style.fontSize = '100%'; 
  a14.style.fontSize = '115%'; 
  } 
   
  if(tiempoDeVideo > 156) {
  a14.style.color = 'black';           //6
  a15.style.color = '#be00af';
  a14.style.fontSize = '100%'; 
  a15.style.fontSize = '115%'; 
  
  } 

    
  if(tiempoDeVideo > 161) {
  a15.style.color = 'black';           //3
  a16.style.color = '#be00af';
  a15.style.fontSize = '100%'; 
  a16.style.fontSize = '115%'; 
  } 

    
  if(tiempoDeVideo > 165.5) {  
  a16.style.color = 'black';           //7
  a13.style.color = '#be00af';
  a16.style.fontSize = '100%'; 
  a13.style.fontSize = '115%'; 
  }
 
  if(tiempoDeVideo > 170) {  
  a13.style.color = 'black';           //7
  a14.style.color = '#be00af';
  a13.style.fontSize = '100%'; 
  a14.style.fontSize = '115%'; 
  }
 
  if(tiempoDeVideo > 175) {  
      a14.style.color = 'black';           //7
      a15.style.color = '#be00af';
      a14.style.fontSize = '100%'; 
      a15.style.fontSize = '115%'; 
      }
   
 
   
  if(tiempoDeVideo > 179) { 
  a15.style.fontSize = '100%';  
  a15.style.color = 'black';           //7
  a16.style.color = '#be00af';
  a16.style.fontSize = '115%'; 
  } 
 

  if(tiempoDeVideo > 183) {
  a16.style.color = 'black';           //7
  a15.style.color = '#be00af';
  a16.style.fontSize = '100%'; 
  a15.style.fontSize = '115%'; 
  }
   
  if(tiempoDeVideo > 188) {
  a15.style.color = 'black';           //3
  a16.style.color = '#be00af';
  a15.style.fontSize = '100%'; 
  a16.style.fontSize = '115%'; 
  } 
 
  if(tiempoDeVideo > 200) {
  a16.style.color = 'black';          
   
  a16.style.fontSize = '100%'; 
  
  } 
  /*
  if(tiempoDeVideo > 166) {
  a40.style.color = 'black';           //6
   
  a40.style.fontSize = '100%'; 
  
  
  } 

  if(tiempoDeVideo > 169) {
              //6
    a41.style.color = '#be00af';
    a41.style.textDecoration = 'underline'; 
    
    a41.style.fontSize = '115%'; 
    
    } */
          
          
        }
          
            
        function onPlayerStateChange(event) {
       
          if (event.data == YT.PlayerState.PLAYING) {
            
           // 
           setInterval(() => {
             tiempoDeVideo = player.getCurrentTime();
           }, 100);
          }
        }
        
       setInterval(() => {
         colorText()
       }, 100);


