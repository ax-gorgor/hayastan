 



 

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371',
     width: '660',
     videoId: 'wkC38W4KbCA',
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


  var tiempoDeVideo = player.getCurrentTime();
 
   if(tiempoDeVideo > 3) {
    a0.style.color = 'grey';
     }

     if(tiempoDeVideo > 70) {
        a0.style.color = 'white';
         }  
  
         if(tiempoDeVideo > 73.5) {
          a1.style.color = '#650964';
          a1.style.fontSize = '115%'; //rojo    //1
          } 
       
          if(tiempoDeVideo > 77.5) {
          a1.style.color = 'black';
          a1.style.fontSize = '100%'
          a2.style.color = '#650964';
          a2.style.fontSize = '115%';  //azul //2
          } 
          
          if(tiempoDeVideo > 80) {
          a2.style.color = 'black';
          a2.style.fontSize = '100%'
          a3.style.color = '#650964'; 
          a3.style.fontSize = '115%'; //naranja //3
          } 
         
          if(tiempoDeVideo > 83) {
          a3.style.color = 'black';           //4
          a4.style.color = '#650964';
          a3.style.fontSize = '100%'; 
          a4.style.fontSize = '115%'; 
          
          } 
            
          if(tiempoDeVideo > 86) {
          a4.style.color = 'black';           //7
          a5.style.color = '#650964';
          a4.style.fontSize = '100%'; 
          a5.style.fontSize = '115%'; 
          } 
           
          if(tiempoDeVideo > 89) {
          a5.style.color = 'black';           //3
          a6.style.color = '#650964';
          a5.style.fontSize = '100%'; 
          a6.style.fontSize = '115%'; 
          } 
          
          
          if(tiempoDeVideo > 92) {
          a6.style.color = 'black';           //6
          a7.style.color = '#650964';
          a6.style.fontSize = '100%'; 
          a7.style.fontSize = '115%'; 
          } 
           
         
          if(tiempoDeVideo > 95) {  
          a7.style.color = 'black';           //7
          a8.style.color = '#650964';
          a7.style.fontSize = '100%'; 
          a8.style.fontSize = '115%'; 
          }
           
          
          if(tiempoDeVideo > 98) {
          a8.style.color = 'black';           //3
          a9.style.color = '#650964';
          a8.style.fontSize = '100%'; 
          a9.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 102) {
          a9.style.color = 'black';           //6
          a10.style.color = '#650964';
          a9.style.fontSize = '100%'; 
          a10.style.fontSize = '115%'; 
          
          } 

          if(tiempoDeVideo > 105) {
          a10.style.color = 'black';           //7
          a11.style.color = '#650964';
          a10.style.fontSize = '100%'; 
          a11.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 108) {
          a11.style.color = 'black';           //3
          a12.style.color = '#650964';
          a11.style.fontSize = '100%'; 
          a12.style.fontSize = '115%'; 
          } 
            
          if(tiempoDeVideo > 111) {
          a12.style.color = 'black';           //3
          a13.style.color = '#650964';
          a12.style.fontSize = '100%'; 
          a13.style.fontSize = '115%'; 
          } 
          
          if(tiempoDeVideo > 114) {
          a13.style.color = 'black';           //6
          a14.style.color = '#650964';
          a13.style.fontSize = '100%'; 
          a14.style.fontSize = '115%'; 
          
          } 
            
          if(tiempoDeVideo > 117) {
          a14.style.color = 'black';           //6
          a15.style.color = '#650964';
          a14.style.fontSize = '100%'; 
          a15.style.fontSize = '115%'; 
          } 
          
           
          if(tiempoDeVideo > 120) {
          a15.style.color = 'black';           //3
          a16.style.color = '#650964';
          a15.style.fontSize = '100%'; 
          a16.style.fontSize = '115%'; 
          } 

          if(tiempoDeVideo > 125) {  
            a16.style.color = 'black';           //7
            a17.style.textDecoration = 'underline'; 
             }

          
          if(tiempoDeVideo > 135) {
          a17.style.textDecoration = 'none'; 
          a17.style.color = '#650964';
           
          a17.style.fontSize = '115%'; 
          } 
          
           
          if(tiempoDeVideo > 139) {  
          a17.style.color = 'black';           //7
          a18.style.color = '#650964';
          a17.style.fontSize = '100%'; 
          a18.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 142) {  
          a18.style.color = 'black';           //7
          a19.style.color = '#650964';
          a18.style.fontSize = '100%'; 
          a19.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 145) {  
              a19.style.color = 'black';           //7
              a20.style.color = '#650964';
              a19.style.fontSize = '100%'; 
              a20.style.fontSize = '115%'; 
              }
           
        
           
          if(tiempoDeVideo > 148) { 
          a20.style.fontSize = '100%';  
          a20.style.color = 'black';           //7
          a21.style.color = '#650964';
          a21.style.fontSize = '115%'; 
          } 
          
           
          if(tiempoDeVideo > 151.5) {  
          a21.style.color = 'black';           //7
          a22.style.color = '#650964';
          a21.style.fontSize = '100%'; 
          a22.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 155) {  
          a22.style.color = 'black';           //7
          a23.style.color = '#650964';
          a22.style.fontSize = '100%'; 
          a23.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 158) {  
          a23.style.color = 'black';           //7
          a24.style.color = '#650964';
          a23.style.fontSize = '100%'; 
          a24.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 161) {  
          a24.style.color = 'black';           //7
          a25.style.color = '#650964';
          a24.style.fontSize = '100%'; 
          a25.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 164) {  
          a25.style.color = 'black';           //7
          a26.style.color = '#650964';
          a25.style.fontSize = '100%'; 
          a26.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 167) {  
          a26.style.color = 'black';           //7
          a27.style.color = '#650964';
          a26.style.fontSize = '100%'; 
          a27.style.fontSize = '115%'; 
          }
           
           
          if(tiempoDeVideo > 170) {  
          a27.style.color = 'black';           //7
          a28.style.color = '#650964';
          a27.style.fontSize = '100%'; 
          a28.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 173) {  
          a28.style.color = 'black';           //7
          a29.style.color = '#650964';
          a28.style.fontSize = '100%'; 
          a29.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 176) {  
          a29.style.color = 'black';           //7
          a30.style.color = '#650964';
          a29.style.fontSize = '100%'; 
          a30.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 179) {  
          a30.style.color = 'black';           //7
          a31.style.color = '#650964';
          a30.style.fontSize = '100%'; 
          a31.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 183) {  
          a31.style.color = 'black';           //7
          a32.style.color = '#650964';
          a31.style.fontSize = '100%'; 
          a32.style.fontSize = '115%'; 
          }

          if(tiempoDeVideo > 187) {  
            a32.style.color = 'black';           //7
            a33.style.textDecoration = 'underline'; 
             }

        
          if(tiempoDeVideo > 211) {
          a33.style.textDecoration = 'none'; 
          a33.style.color = '#650964';
           
          a33.style.fontSize = '115%'; 
          } 
          


           
          if(tiempoDeVideo > 216) {  
          a33.style.color = 'black';           //7
          a34.style.color = '#650964';
          a33.style.fontSize = '100%'; 
          a34.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 220) {  
          a34.style.color = 'black';           //7
          a35.style.color = '#650964';
          a34.style.fontSize = '100%'; 
          a35.style.fontSize = '115%'; 
          }
             
          if(tiempoDeVideo > 224) {  
          a35.style.color = 'black';           //7
          a36.style.color = '#650964';
          a35.style.fontSize = '100%'; 
          a36.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 228.5) {  
          a36.style.color = 'black';           //7
          a37.style.color = '#650964';
          a36.style.fontSize = '100%'; 
          a37.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 232.5) {  
          a37.style.color = 'black';           //7
          a38.style.color = '#650964';
          a37.style.fontSize = '100%'; 
          a38.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 237) {  
          a38.style.color = 'black';           //7
          a39.style.color = '#650964';
          a38.style.fontSize = '100%'; 
          a39.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 240) {  
          a39.style.color = 'black';           //7
          a40.style.color = '#650964';
          a39.style.fontSize = '100%'; 
          a40.style.fontSize = '115%'; 
          }
          
        
           
          if(tiempoDeVideo > 242.5) {  
          a40.style.color = 'black';
           a41.style.fontSize = '100%';
                      
          a41.style.color = '#650964';
          a41.style.fontSize = '115%'; 
          }
         
          
          if(tiempoDeVideo > 245.5) {  
          a41.style.color = 'black';           //7
          a42.style.color = '#650964';
          a41.style.fontSize = '100%'; 
          a42.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 247.5) {  
          a42.style.color = 'black';           //7
          a43.style.color = '#650964';
          a42.style.fontSize = '100%'; 
          a43.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 251) {  
          a43.style.color = 'black';           //7
          a44.style.color = '#650964';
          a43.style.fontSize = '100%'; 
          a44.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 254.5) {  
          a44.style.color = 'black';           //7
          a45.style.color = '#650964';
          a44.style.fontSize = '100%'; 
          a45.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 256.5) {  
          a45.style.color = 'black';           //7
          a46.style.color = '#650964';
          a45.style.fontSize = '100%'; 
          a46.style.fontSize = '115%'; 
          }
              
          if(tiempoDeVideo > 260) {  
          a46.style.color = 'black';           //7
          a47.style.color = '#650964';
          a46.style.fontSize = '100%'; 
          a47.style.fontSize = '115%'; 
          }
          
           
          if(tiempoDeVideo > 263) {  
          a47.style.color = 'black';           //7
          a48.style.color = '#650964';
          a47.style.fontSize = '100%'; 
          a48.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 271) {  
          a48.style.color = 'black';           //7
          
          a48.style.fontSize = '100%'; 
           
          }
              
       // TRADUCCION AL CASTELLANO

          if(tiempoDeVideo > 73.5) {  
                     
          a49.style.color = 'black';
          a50.style.color = 'grey';
          a51.style.color = 'grey';
          a52.style.color = 'grey';
          a53.style.color = 'grey';
          a54.style.color = 'grey';
         
           
           
          }
          
           
          if(tiempoDeVideo > 86) {  
          a49.style.color = 'grey';
          a50.style.color = 'black';
          a51.style.color = 'grey';
          a52.style.color = 'grey';
          a53.style.color = 'grey';
          a54.style.color = 'grey';
         
           
          }
            
          if(tiempoDeVideo > 98) {  
          a49.style.color = 'grey';
          a50.style.color = 'grey';
          a51.style.color = 'black';
          a52.style.color = 'grey';
          a53.style.color = 'grey';
          a54.style.color = 'grey'; 
         
          }
          
          if(tiempoDeVideo > 111) {  
          a49.style.color = 'grey';
          a50.style.color = 'grey';
          a51.style.color = 'black';
          a52.style.color = 'grey';
          a53.style.color = 'grey';
          a54.style.color = 'grey'; 
          
          }
          
           
          if(tiempoDeVideo > 125) {  
          a49.style.color = 'grey';
          a50.style.color = 'grey';
          a51.style.color = 'grey';
          a52.style.color = 'black';
          a53.style.color = 'grey';
          a54.style.color = 'grey';
        
          }
           
          if(tiempoDeVideo > 148) {  
          a49.style.color = 'grey';
          a50.style.color = 'grey';
          a51.style.color = 'grey';
          a52.style.color = 'grey';
          a53.style.color = 'black';
          a54.style.color = 'grey';
         
          }
            
          if(tiempoDeVideo > 161) {  
          a49.style.color = 'grey';
          a50.style.color = 'grey';
          a51.style.color = 'grey';
          a52.style.color = 'grey';
          a53.style.color = 'grey';
          a54.style.color = 'black';
           
          }

          
          if(tiempoDeVideo > 271) {  
          a49.style.color = 'black';
          a50.style.color = 'black';
          a51.style.color = 'black';
          a52.style.color = 'black';
          a53.style.color = 'black';
          a54.style.color = 'black'; 
          }
            /*
          if(tiempoDeVideo > 317) {  
          a57.style.color = 'black';           //7
          a58.style.color = '#650964';
          a57.style.fontSize = '100%'; 
          a58.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 322) {  
          a58.style.color = 'black';           //7
          a59.style.color = '#650964';
          a58.style.fontSize = '100%'; 
          a59.style.fontSize = '115%'; 
          }
          
           
          if(tiempoDeVideo > 325) {  
          a59.style.color = 'black';           //7
          a60.style.color = '#650964';
          a59.style.fontSize = '100%'; 
          a60.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 328) {  
          a60.style.color = 'black';           //7
          a61.style.color = '#650964';
          a60.style.fontSize = '100%'; 
          a61.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 333) {  
          a61.style.color = 'black';           //7
          a62.style.color = '#650964';
          a61.style.fontSize = '100%'; 
          a62.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 337) {  
          a62.style.color = 'black';           //7
          a63.style.color = '#650964';
          a62.style.fontSize = '100%'; 
          a63.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 342) {  
          a63.style.color = 'black';           //7
          a64.style.color = '#650964';
          a63.style.fontSize = '100%'; 
          a64.style.fontSize = '115%'; 
          }
             
          if(tiempoDeVideo > 344) {  
          a64.style.color = 'black';           //7
          a65.style.color = '#650964';
          a64.style.fontSize = '100%'; 
          a65.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 349) {  
          a65.style.color = 'black';           //7
          a66.style.color = '#650964';
          a65.style.fontSize = '100%'; 
          a66.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 353) {  
          a66.style.color = 'black';           //7
          a67.style.color = '#650964';
          a66.style.fontSize = '100%'; 
          a67.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 361) {  
          a67.style.color = 'black';           //7
          a68.style.color = '#650964';
          a67.style.fontSize = '100%'; 
          a68.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 375) {  
              a68.style.color = 'black';           //7
              
              a68.style.fontSize = '100%'; 
              
              }
        
            
          if(tiempoDeVideo > 218) {  
          a37.style.color = 'black';           //7
          a38.style.color = '#005858';
          a37.style.fontSize = '100%'; 
          a38.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 222) {  
          a38.style.color = 'black';           //7
          a39.style.color = '#005858';
          a38.style.fontSize = '100%'; 
          a39.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 227) {  
          a39.style.color = 'black';           //7
          a40.style.color = '#005858';
          a39.style.fontSize = '100%'; 
          a40.style.fontSize = '115%'; 
          }
          if(tiempoDeVideo > 205.5) {  
          a34.style.color = 'black';           //7
          a35.style.color = '#005858';
          a34.style.fontSize = '100%'; 
          a35.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 210) {  
          a35.style.color = 'black';           //7
          a36.style.color = '#005858';
          a35.style.fontSize = '100%'; 
          a36.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 213) {  
          a36.style.color = 'black';           //7
          a37.style.color = '#005858';
          a36.style.fontSize = '100%'; 
          a37.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 218) {  
          a37.style.color = 'black';           //7
          a38.style.color = '#005858';
          a37.style.fontSize = '100%'; 
          a38.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 222) {  
          a38.style.color = 'black';           //7
          a39.style.color = '#005858';
          a38.style.fontSize = '100%'; 
          a39.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 227) {  
          a39.style.color = 'black';           //7
          a40.style.color = '#005858';
          a39.style.fontSize = '100%'; 
          a40.style.fontSize = '115%'; 
          }
          if(tiempoDeVideo > 205.5) {  
          a34.style.color = 'black';           //7
          a35.style.color = '#005858';
          a34.style.fontSize = '100%'; 
          a35.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 210) {  
          a35.style.color = 'black';           //7
          a36.style.color = '#005858';
          a35.style.fontSize = '100%'; 
          a36.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 213) {  
          a36.style.color = 'black';           //7
          a37.style.color = '#005858';
          a36.style.fontSize = '100%'; 
          a37.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 218) {  
          a37.style.color = 'black';           //7
          a38.style.color = '#005858';
          a37.style.fontSize = '100%'; 
          a38.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 222) {  
          a38.style.color = 'black';           //7
          a39.style.color = '#005858';
          a38.style.fontSize = '100%'; 
          a39.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 227) {  
          a39.style.color = 'black';           //7
          a40.style.color = '#005858';
          a39.style.fontSize = '100%'; 
          a40.style.fontSize = '115%'; 
          }
          if(tiempoDeVideo > 205.5) {  
          a34.style.color = 'black';           //7
          a35.style.color = '#005858';
          a34.style.fontSize = '100%'; 
          a35.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 210) {  
          a35.style.color = 'black';           //7
          a36.style.color = '#005858';
          a35.style.fontSize = '100%'; 
          a36.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 213) {  
          a36.style.color = 'black';           //7
          a37.style.color = '#005858';
          a36.style.fontSize = '100%'; 
          a37.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 218) {  
          a37.style.color = 'black';           //7
          a38.style.color = '#005858';
          a37.style.fontSize = '100%'; 
          a38.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 222) {  
          a38.style.color = 'black';           //7
          a39.style.color = '#005858';
          a38.style.fontSize = '100%'; 
          a39.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 227) {  
          a39.style.color = 'black';           //7
          a40.style.color = '#005858';
          a39.style.fontSize = '100%'; 
          a40.style.fontSize = '115%'; 
          }
          if(tiempoDeVideo > 205.5) {  
          a34.style.color = 'black';           //7
          a35.style.color = '#005858';
          a34.style.fontSize = '100%'; 
          a35.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 210) {  
          a35.style.color = 'black';           //7
          a36.style.color = '#005858';
          a35.style.fontSize = '100%'; 
          a36.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 213) {  
          a36.style.color = 'black';           //7
          a37.style.color = '#005858';
          a36.style.fontSize = '100%'; 
          a37.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 218) {  
          a37.style.color = 'black';           //7
          a38.style.color = '#005858';
          a37.style.fontSize = '100%'; 
          a38.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 222) {  
          a38.style.color = 'black';           //7
          a39.style.color = '#005858';
          a38.style.fontSize = '100%'; 
          a39.style.fontSize = '115%'; 
          }
            
          if(tiempoDeVideo > 227) {  
          a39.style.color = 'black';           //7
          a40.style.color = '#005858';
          a39.style.fontSize = '100%'; 
          a40.style.fontSize = '115%'; 
          }
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          */ /*
           
          if(tiempoDeVideo > 188) {  
          a21.style.color = 'black';           //7
           a21.style.fontSize = '100%'; 
           
          }
          
          /*
           
          if(tiempoDeVideo > 278) {  
          a23.style.color = 'black';           //7
           
          a23.style.fontSize = '100%'; 
           
          }
          
          
          if(tiempoDeVideo > 24.5) {
          a24.style.color = 'black';           //3
          a25.style.color = 'lightgrey';
          a26.style.color = 'lightgrey'; 
          a27.style.color = 'lightgrey';
          a28.style.color = 'lightgrey';
          a29.style.color = 'lightgrey';
          //a20.style.color = 'lightgrey'; 
          } 
           
          
          if(tiempoDeVideo > 65) {
          a24.style.color = 'lightgrey';           //3
          a25.style.color = 'black';
          a26.style.color = 'lightgrey'; 
          a27.style.color = 'lightgrey';
          a28.style.color = 'lightgrey';
          a29.style.color = 'lightgrey';
          //a20.style.color = 'lightgrey';   
          
          } 
            
          if(tiempoDeVideo > 108) {
          a24.style.color = 'lightgrey';           //3
          a25.style.color = 'lightgrey';
          a26.style.color = 'lightgrey'; 
          a27.style.color = 'lightgrey';
          a28.style.color = 'lightgrey';
          a29.style.color = 'lightgrey';
          a30.style.textDecoration = 'underline';
          } 
           
          
          if(tiempoDeVideo > 118) {
          a24.style.color = 'lightgrey';           //3
          a25.style.color = 'lightgrey';
          a26.style.color = 'black'; 
          a27.style.color = 'lightgrey';
          a28.style.color = 'lightgrey';
          a29.style.color = 'lightgrey';
          a30.style.textDecoration = 'none';
              } 
          
           
          
          if(tiempoDeVideo > 159) {
              a24.style.color = 'lightgrey';           //3
          a25.style.color = 'lightgrey';
          a26.style.color = 'lightgrey'; 
          a27.style.color = 'black';
          a28.style.color = 'lightgrey';
          a29.style.color = 'lightgrey';
           
              } 
           
          if(tiempoDeVideo > 199) {
          a24.style.color = 'lightgrey';           //3
          a25.style.color = 'lightgrey';
          a26.style.color = 'lightgrey'; 
          a27.style.color = 'lightgrey';
          a28.style.color = 'black';
          a29.style.color = 'lightgrey';
                  } 
          
                  if(tiempoDeVideo > 237) {
                      a24.style.color = 'lightgrey';           //3
                      a25.style.color = 'lightgrey';
                      a26.style.color = 'lightgrey'; 
                      a27.style.color = 'lightgrey';
                      a28.style.color = 'lightgrey';
                      a29.style.color = 'black';
                              } 
          
          
           
          if(tiempoDeVideo > 278) {
          a24.style.color = 'black';           //3
          a25.style.color = 'black';
          a26.style.color = 'black'; 
          a27.style.color = 'black';
          a28.style.color = 'black';
          a29.style.color = 'black';
                  } 
          
           /*
          
              if(tiempoDeVideo > 210) {
                  a17.style.color = 'lightgrey';           //3
                  a18.style.color = 'lightgrey';
                  a19.style.color = 'lightgrey'; 
                  a20.style.color = 'black'; 
                  a22.style.textDecoration = 'none';
                  } 
          
          
                  if(tiempoDeVideo > 256) {
                      a17.style.color = 'black';           //3
                      a18.style.color = 'black';
                      a19.style.color = 'black'; 
                      a20.style.color = 'black'; 
                      } 
          
            
           
          }
           
          */
          
          
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



 