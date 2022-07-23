 


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371',
     width: '660',
     videoId: '7jkqHKhWNpE',
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

   
  
  if(tiempoDeVideo > 5) {
                    //3
          a15.style.color = '#be00af';
          
          a15.style.fontSize = '115%'; 
          }

           
          if(tiempoDeVideo > 8) {  
          a15.style.color = 'black';           //7
          a16.style.color = '#be00af';
          a15.style.fontSize = '100%'; 
          a16.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 11 ) {  
          a16.style.color = 'black';           //7
          a17.style.color = '#be00af';
          a16.style.fontSize = '100%'; 
          a17.style.fontSize = '115%'; 
          }
   
          if(tiempoDeVideo > 14) {  
              a17.style.color = 'black';           //7
              a18.style.color = '#be00af';
              a17.style.fontSize = '100%'; 
              a18.style.fontSize = '115%'; 
              }
           
 
           
          if(tiempoDeVideo > 16) { 
          a18.style.fontSize = '100%';  
          a18.style.color = 'black';           //7
          a19.style.color = '#be00af';
          a19.style.fontSize = '115%'; 
          } 
         
 
          if(tiempoDeVideo > 19) {
            a19.style.color = 'black';           //3
            a20.style.color = '#be00af';
            a19.style.fontSize = '100%'; 
            a20.style.fontSize = '115%'; 
            }
 
           
            if(tiempoDeVideo > 21.5) {
              a20.style.color = 'black';           //3
              a21.style.color = '#be00af';
              a20.style.fontSize = '100%'; 
              a21.style.fontSize = '115%'; 
              }
 
              if(tiempoDeVideo > 24) {
                a21.style.color = 'black';           //3
                a22.style.color = '#be00af';
                a21.style.fontSize = '100%'; 
                a22.style.fontSize = '115%'; 
                }
   
          
          if(tiempoDeVideo > 27) {
          a22.style.color = 'black';           //6
          a23.style.color = '#be00af';
          a22.style.fontSize = '100%'; 
          a23.style.fontSize = '115%'; 
          
          }  
    
          if(tiempoDeVideo > 30) {
          a23.style.color = 'black';           //7
          a24.style.color = '#be00af';
          a23.style.fontSize = '100%'; 
          a24.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 32) {
          a24.style.color = 'black';           //3
          a25.style.color = '#be00af';
          a24.style.fontSize = '100%'; 
          a25.style.fontSize = '115%'; 
          } 
           
          if(tiempoDeVideo > 34) {
          a25.style.color = 'black';           //3
          a26.style.color = '#be00af';
          a25.style.fontSize = '100%'; 
          a26.style.fontSize = '115%'; 
          } 
   
         
          if(tiempoDeVideo > 38) {  
          a26.style.color = 'black';           //7
          a27.style.color = '#be00af';
          a26.style.fontSize = '100%'; 
          a27.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 40) {  
          a27.style.color = 'black';           //7
          a28.style.color = '#be00af';
          a27.style.fontSize = '100%'; 
          a28.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 43) {  
              a28.style.color = 'black';           //7
              a29.style.color = '#be00af';
              a28.style.fontSize = '100%'; 
              a29.style.fontSize = '115%'; 
              }
           
    
           
          if(tiempoDeVideo > 45) { 
          a29.style.fontSize = '100%';  
          a29.style.color = 'black';           //7
          a30.style.color = '#be00af';
          a30.style.fontSize = '115%'; 
          } 
 
 
          if(tiempoDeVideo > 48) {
          a30.style.color = 'black';           //7
          a31.style.color = '#be00af';
          a30.style.fontSize = '100%'; 
          a31.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 51) {
          a31.style.color = 'black';           //3
          a32.style.color = '#be00af';
          a31.style.fontSize = '100%'; 
          a32.style.fontSize = '115%'; 
          } 
        
          if(tiempoDeVideo > 53) {
          a32.style.color = 'black';           //3
          a33.style.color = '#be00af';
          a32.style.fontSize = '100%'; 
          a33.style.fontSize = '115%'; 
          } 
         
        
            
          if(tiempoDeVideo > 56) {
          a33.style.color = 'black';           //3
          a34.style.color = '#be00af';
          a33.style.fontSize = '100%'; 
          a34.style.fontSize = '115%'; 
          } 
 
           
          if(tiempoDeVideo > 58) {  
          a34.style.color = 'black';           //7
          a35.style.color = '#be00af';
          a34.style.fontSize = '100%'; 
          a35.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 61) {  
          a35.style.color = 'black';           //7
          a36.style.color = '#be00af';
          a35.style.fontSize = '100%'; 
          a36.style.fontSize = '115%'; 
          }
        
          if(tiempoDeVideo > 64) {  
              a36.style.color = 'black';           //7
              a37.style.color = '#be00af';
              a36.style.fontSize = '100%'; 
              a37.style.fontSize = '115%'; 
              }
           
   
            
          if(tiempoDeVideo > 66) { 
          a37.style.fontSize = '100%';  
          a37.style.color = 'black';           //7
          a38.style.color = '#be00af';
          a38.style.fontSize = '115%'; 
          } 
 
 
          if(tiempoDeVideo > 69) {  
          a38.style.color = 'black';           //7
          a39.style.color = '#be00af';
          a38.style.fontSize = '100%'; 
          a39.style.fontSize = '115%'; 
          }
       
          if(tiempoDeVideo > 72 ) {  
          a39.style.color = 'black';           //7
          a40.style.color = '#be00af';
          a39.style.fontSize = '100%'; 
          a40.style.fontSize = '115%'; 
          }
  
          if(tiempoDeVideo > 74) {  
              a40.style.color = 'black';           //7
              a41.style.color = '#be00af';
              a40.style.fontSize = '100%'; 
              a41.style.fontSize = '115%'; 
              }
           
  
           
          if(tiempoDeVideo > 77) { 
          a41.style.fontSize = '100%';  
          a41.style.color = 'black';           //7
          a42.style.color = '#be00af';
          a42.style.fontSize = '115%'; 
          } 
         
 
          if(tiempoDeVideo > 80) {
            a42.style.color = 'black';           //3
            a43.style.color = '#be00af';
            a42.style.fontSize = '100%'; 
            a43.style.fontSize = '115%'; 
            }
  
           
            if(tiempoDeVideo > 82) {
              a43.style.color = 'black';           //3
              a44.style.color = '#be00af';
              a43.style.fontSize = '100%'; 
              a44.style.fontSize = '115%'; 
              }
 
              if(tiempoDeVideo > 85) {
                a44.style.color = 'black';           //3
                a45.style.color = '#be00af';
                a44.style.fontSize = '100%'; 
                a45.style.fontSize = '115%'; 
                }
   
      
          if(tiempoDeVideo > 87) {
          a45.style.color = 'black';           //6
          a46.style.color = '#be00af';
          a45.style.fontSize = '100%'; 
          a46.style.fontSize = '115%'; 
          
          }  
    
          if(tiempoDeVideo > 90) {
          a46.style.color = 'black';           //7
          a47.style.color = '#be00af';
          a46.style.fontSize = '100%'; 
          a47.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 93) {
          a47.style.color = 'black';           //3
          a48.style.color = '#be00af';
          a47.style.fontSize = '100%'; 
          a48.style.fontSize = '115%'; 
          } 
          
          if(tiempoDeVideo > 96) {
          a48.style.color = 'black';           //3
          a49.style.color = '#be00af';
          a48.style.fontSize = '100%'; 
          a49.style.fontSize = '115%'; 
          } 
 
         
          if(tiempoDeVideo > 98) {  
          a49.style.color = 'black';           //7
          a50.style.color = '#be00af';
          a49.style.fontSize = '100%'; 
          a50.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 100) {  
          a50.style.color = 'black';           //7
          a51.style.color = '#be00af';
          a50.style.fontSize = '100%'; 
          a51.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 103) {  
              a51.style.color = 'black';           //7
              a52.style.color = '#be00af';
              a51.style.fontSize = '100%'; 
              a52.style.fontSize = '115%'; 
              }
           
     
           
          if(tiempoDeVideo > 106) { 
          a52.style.fontSize = '100%';  
          a52.style.color = 'black';           //7
          a53.style.color = '#be00af';
          a53.style.fontSize = '115%'; 
          } 
 
  
          if(tiempoDeVideo > 109) {
          a53.style.color = 'black';           //7
          a54.style.color = '#be00af';
          a53.style.fontSize = '100%'; 
          a54.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 111) {
          a54.style.color = 'black';           //3
          a55.style.color = '#be00af';
          a54.style.fontSize = '100%'; 
          a55.style.fontSize = '115%'; 
          } 
         
          if(tiempoDeVideo > 114) {
          a55.style.color = 'black';           //3
          a56.style.color = '#be00af';
          a55.style.fontSize = '100%'; 
          a56.style.fontSize = '115%'; 
          } 
         
         
            
          if(tiempoDeVideo > 116) {
          a56.style.color = 'black';           //3
          a57.style.color = '#be00af';
          a56.style.fontSize = '100%'; 
          a57.style.fontSize = '115%'; 
          } 
 
           
          if(tiempoDeVideo > 119) {  
          a57.style.color = 'black';           //7
          a58.style.color = '#be00af';
          a57.style.fontSize = '100%'; 
          a58.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 122) {  
          a58.style.color = 'black';           //7
          a59.style.color = '#be00af';
          a58.style.fontSize = '100%'; 
          a59.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 124) {  
              a59.style.color = 'black';           //7
              a60.style.color = '#be00af';
              a59.style.fontSize = '100%'; 
              a60.style.fontSize = '115%'; 
              }
           
   
             
          if(tiempoDeVideo > 127) { 
          a60.style.fontSize = '100%';  
          a60.style.color = 'black';           //7
          a61.style.color = '#be00af';
          a61.style.fontSize = '115%'; 
          } 
   
          if(tiempoDeVideo > 130) {  
          a61.style.color = 'black';           //7
          a62.style.color = '#be00af';
          a61.style.fontSize = '100%'; 
          a62.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 132) {  
          a62.style.color = 'black';           //7
          a63.style.color = '#be00af';
          a62.style.fontSize = '100%'; 
          a63.style.fontSize = '115%'; 
          }
    
          if(tiempoDeVideo > 135) {  
              a63.style.color = 'black';           //7
              a64.style.color = '#be00af';
              a63.style.fontSize = '100%'; 
              a64.style.fontSize = '115%'; 
              }
           
  
           
          if(tiempoDeVideo > 137) { 
          a64.style.fontSize = '100%';  
          a64.style.color = 'black';           //7
          a65.style.color = '#be00af';
          a65.style.fontSize = '115%'; 
          } 
          
 
          if(tiempoDeVideo > 140) {
            a65.style.color = 'black';           //3
            a66.style.color = '#be00af';
            a65.style.fontSize = '100%'; 
            a66.style.fontSize = '115%'; 
            }
        
            if(tiempoDeVideo > 142) {
              a66.style.color = 'black';           //3
              a67.style.color = '#be00af';
              a66.style.fontSize = '100%'; 
              a67.style.fontSize = '115%'; 
              }
              
 
              if(tiempoDeVideo > 145) {
                a67.style.color = 'black';           //3
                a68.style.color = '#be00af';
                a67.style.fontSize = '100%'; 
                a68.style.fontSize = '115%'; 
                }
   
           
          if(tiempoDeVideo > 147) {
          a68.style.color = 'black';           //6
          a69.style.color = '#be00af';
          a68.style.fontSize = '100%'; 
          a69.style.fontSize = '115%'; 
          
          }  
     
          if(tiempoDeVideo > 150) {
          a69.style.color = 'black';           //7
          a70.style.color = '#be00af';
          a69.style.fontSize = '100%'; 
          a70.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 155) {
          a70.style.color = 'black';           //3
           
          a70.style.fontSize = '100%'; 
           
          } 
           /*
          if(tiempoDeVideo > 34) {
          a25.style.color = 'black';           //3
          a26.style.color = '#be00af';
          a25.style.fontSize = '100%'; 
          a26.style.fontSize = '115%'; 
          } 
   
         
          if(tiempoDeVideo > 38) {  
          a26.style.color = 'black';           //7
          a27.style.color = '#be00af';
          a26.style.fontSize = '100%'; 
          a27.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 40) {  
          a27.style.color = 'black';           //7
          a28.style.color = '#be00af';
          a27.style.fontSize = '100%'; 
          a28.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 43) {  
              a28.style.color = 'black';           //7
              a29.style.color = '#be00af';
              a28.style.fontSize = '100%'; 
              a29.style.fontSize = '115%'; 
              }
           
    
           
          if(tiempoDeVideo > 45) { 
          a29.style.fontSize = '100%';  
          a29.style.color = 'black';           //7
          a30.style.color = '#be00af';
          a30.style.fontSize = '115%'; 
          } 
 
 
          if(tiempoDeVideo > 48) {
          a30.style.color = 'black';           //7
          a31.style.color = '#be00af';
          a30.style.fontSize = '100%'; 
          a31.style.fontSize = '115%'; 
          }
            





  */ 

  if(tiempoDeVideo > 0) {
    a0.style.color = 'white'; //rojo    //1
  } 

  if(tiempoDeVideo > 2) {
    a0.style.color = 'grey'; //rojo    //1
  } 

  if(tiempoDeVideo > 6 ) {
    a0.style.color = 'white'; //rojo    //1
  } 


  if(tiempoDeVideo > 6) {
    a1.style.color = 'black';  
    a2.style.color = 'lightgrey';
    a3.style.color = 'lightgrey';
    a4.style.color = 'lightgrey';
    a5.style.color = 'lightgrey';
    a6.style.color = 'lightgrey';
    a7.style.color = 'lightgrey';
    a8.style.color = 'lightgrey';
    a9.style.color = 'lightgrey';
    a10.style.color = 'lightgrey';
    a11.style.color = 'lightgrey';
    a12.style.color = 'lightgrey';
    a13.style.color = 'lightgrey';
    a14.style.color = 'lightgrey';

 } 

 if(tiempoDeVideo > 16) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'black';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 27) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'black';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 38) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'black';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 48) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'black';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 58) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'black';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 69) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'black';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 80) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'black';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 90) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'black';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 101) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'black';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 111) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'black';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 122) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'black';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 131) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'black';
  a14.style.color = 'lightgrey';

} 

if(tiempoDeVideo > 131) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'black';
  a14.style.color = 'lightgrey';

}

if(tiempoDeVideo > 142) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'black';

}

if(tiempoDeVideo > 153) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';

}

if(tiempoDeVideo > 154) {
  a1.style.color = 'lightgrey';  
  a2.style.color = 'lightgrey';
  a3.style.color = 'lightgrey';
  a4.style.color = 'lightgrey';
  a5.style.color = 'lightgrey';
  a6.style.color = 'lightgrey';
  a7.style.color = 'lightgrey';
  a8.style.color = 'lightgrey';
  a9.style.color = 'lightgrey';
  a10.style.color = 'lightgrey';
  a11.style.color = 'lightgrey';
  a12.style.color = 'lightgrey';
  a13.style.color = 'lightgrey';
  a14.style.color = 'lightgrey';
  a15.style.color = 'black';

}
 
if(tiempoDeVideo > 159) {
  a1.style.color = 'black';  
  a2.style.color = 'black';
  a3.style.color = 'black';
  a4.style.color = 'black';
  a5.style.color = 'black';
  a6.style.color = 'black';
  a7.style.color = 'black';
  a8.style.color = 'black';
  a9.style.color = 'black';
  a10.style.color = 'black';
  a11.style.color = 'black';
  a12.style.color = 'black';
  a13.style.color = 'black';
  a14.style.color = 'black';
  a15.style.color = 'white';

          }
           
        
          
          
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


