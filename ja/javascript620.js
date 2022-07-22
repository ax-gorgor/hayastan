 


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '371',
     width: '660',
     videoId: 'vqAyH4RkXI0',
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
  var tiempoDeVideo = player.getCurrentTime();
 
   if(tiempoDeVideo > 3) {
    a0.style.color = 'grey';
     }


     if(tiempoDeVideo > 21) {
        a0.style.color = 'white';
         }   
*/   
         if(tiempoDeVideo > 14) {
          a1.style.color = '#be00af';
          a1.style.fontSize = '115%'; //rojo    //1
          } 
      
          if(tiempoDeVideo > 18) {
          a1.style.color = 'black';
          a1.style.fontSize = '100%'
          a2.style.color = '#be00af';
          a2.style.fontSize = '115%';  //azul //2
          } 
 
          if(tiempoDeVideo > 27) {
          a2.style.color = 'black';
          a2.style.fontSize = '100%'
          a3.style.color = '#be00af'; 
          a3.style.fontSize = '115%'; //naranja //3
          } 
   
          if(tiempoDeVideo > 31) {
          a3.style.color = 'black';           //4
          a4.style.color = '#be00af';
          a3.style.fontSize = '100%'; 
          a4.style.fontSize = '115%'; 
          
          } 
         
          if(tiempoDeVideo > 42) {
          a4.style.color = 'black';           //7
          a5.style.color = '#be00af';
          a4.style.fontSize = '100%'; 
          a5.style.fontSize = '115%'; 
          } 
         
          if(tiempoDeVideo > 50) {
          a5.style.color = 'black';           //3
          a6.style.color = '#be00af';
          a5.style.fontSize = '100%'; 
          a6.style.fontSize = '115%'; 
          } 
      
          
          if(tiempoDeVideo > 54) {
          a6.style.color = 'black';           //3
          a7.style.color = '#be00af';
          a6.style.fontSize = '100%'; 
          a7.style.fontSize = '115%'; 
          }

          if(tiempoDeVideo > 56) {
            a7.style.color = 'black';           //3
            a8.style.color = '#be00af';
            a7.style.fontSize = '100%'; 
            a8.style.fontSize = '115%'; 
            }
  
            if(tiempoDeVideo > 61) {
              a8.style.color = 'black';           //3
              a9.style.color = '#be00af';
              a8.style.fontSize = '100%'; 
              a9.style.fontSize = '115%'; 
              }
 

              if(tiempoDeVideo > 67) {
                a9.style.color = 'black';           //3
                a10.style.color = '#be00af';
                a9.style.fontSize = '100%'; 
                a10.style.fontSize = '115%'; 
                }
 
          

          if(tiempoDeVideo > 75) {
                      //7
          a10.style.fontSize = '100%'; 
          a10.style.color = 'black'; 
          a11.style.fontSize = '115%'; 
          a11.style.color = '#be00af';
          }
        
          if(tiempoDeVideo > 89) {
          a11.style.color = 'black';           //3
          a12.style.color = '#be00af';
          a11.style.fontSize = '100%'; 
          a12.style.fontSize = '115%'; 
          } 
        
          if(tiempoDeVideo > 93) {
          a12.style.color = 'black';           //3
          a13.style.color = '#be00af';
          a12.style.fontSize = '100%'; 
          a13.style.fontSize = '115%'; 
          } 
       
          if(tiempoDeVideo > 96) {
          a13.style.color = 'black';           //6
          a14.style.color = '#be00af';
          a13.style.fontSize = '100%'; 
          a14.style.fontSize = '115%'; 
          
          } 
        
         
          if(tiempoDeVideo > 100) {
          a14.style.color = 'black';           //3
          a15.style.color = '#be00af';
          a14.style.fontSize = '100%'; 
          a15.style.fontSize = '115%'; 
          }

           
          if(tiempoDeVideo > 106) {  
          a15.style.color = 'black';           //7
          a16.style.color = '#be00af';
          a15.style.fontSize = '100%'; 
          a16.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 114) {  
          a16.style.color = 'black';           //7
          a17.style.color = '#be00af';
          a16.style.fontSize = '100%'; 
          a17.style.fontSize = '115%'; 
          }
  
          if(tiempoDeVideo > 124) {  
              a17.style.color = 'black';           //7
              a18.style.color = '#be00af';
              a17.style.fontSize = '100%'; 
              a18.style.fontSize = '115%'; 
              }
           
 
           
          if(tiempoDeVideo > 128) { 
          a18.style.fontSize = '100%';  
          a18.style.color = 'black';           //7
          a19.style.color = '#be00af';
          a19.style.fontSize = '115%'; 
          } 
        
 
          if(tiempoDeVideo > 130) {
            a19.style.color = 'black';           //3
            a20.style.color = '#be00af';
            a19.style.fontSize = '100%'; 
            a20.style.fontSize = '115%'; 
            }
 
          
            if(tiempoDeVideo > 135) {
              a20.style.color = 'black';           //3
              a21.style.color = '#be00af';
              a20.style.fontSize = '100%'; 
              a21.style.fontSize = '115%'; 
              }
 
              if(tiempoDeVideo > 141) {
                a21.style.color = 'black';           //3
                a22.style.color = '#be00af';
                a21.style.fontSize = '100%'; 
                a22.style.fontSize = '115%'; 
                }
   
         
          if(tiempoDeVideo > 151) {
          a22.style.color = 'black';           //6
          a23.style.color = '#be00af';
          a22.style.fontSize = '100%'; 
          a23.style.fontSize = '115%'; 
          
          }  
   
          if(tiempoDeVideo > 207) {
          a23.style.color = 'black';           //7
          a24.style.color = '#be00af';
          a23.style.fontSize = '100%'; 
          a24.style.fontSize = '115%'; 
          }
          
          if(tiempoDeVideo > 213) {
          a24.style.color = 'black';           //3
          a25.style.color = '#be00af';
          a24.style.fontSize = '100%'; 
          a25.style.fontSize = '115%'; 
          } 
          
          if(tiempoDeVideo > 220) {
          a25.style.color = 'black';           //3
          a26.style.color = '#be00af';
          a25.style.fontSize = '100%'; 
          a26.style.fontSize = '115%'; 
          } 
    
          if(tiempoDeVideo > 224) {
          a26.style.color = 'black';           //6
         
          a26.style.fontSize = '100%'; 
        
          
          } 
       
         /*
          if(tiempoDeVideo > 146) {
          a27.style.color = 'black';           //3
           
          a27.style.fontSize = '100%'; 
         
          } 
 /*
           
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
        
          if(tiempoDeVideo > 156) {  
              a35.style.color = 'black';           //7
              a36.style.color = '#be00af';
              a35.style.fontSize = '100%'; 
              a36.style.fontSize = '115%'; 
              }
           
   
           
          if(tiempoDeVideo > 158) { 
          a36.style.fontSize = '100%';  
          a36.style.color = 'black';           //7
          a37.style.color = '#be00af';
          a37.style.fontSize = '115%'; 
          } 

 
          if(tiempoDeVideo > 160) {
          a37.style.color = 'black';           //7
          a38.style.color = '#be00af';
          a37.style.fontSize = '100%'; 
          a38.style.fontSize = '115%'; 
          }
           
          if(tiempoDeVideo > 162) {
          a38.style.color = 'black';           //3
          a39.style.color = '#be00af';
          a38.style.fontSize = '100%'; 
          a39.style.fontSize = '115%'; 
          } 
       
          if(tiempoDeVideo > 164) {
          a39.style.color = 'black';           //3
          a40.style.color = '#be00af';
          a39.style.fontSize = '100%'; 
          a40.style.fontSize = '115%'; 
          } 
           
          if(tiempoDeVideo > 166) {
          a40.style.color = 'black';           //6
           
          a40.style.fontSize = '100%'; 
          
          
          } 

          if(tiempoDeVideo > 169) {
                      //6
            a41.style.color = '#be00af';
            a41.style.textDecoration = 'underline'; 
            
            a41.style.fontSize = '115%'; 
            
            } 
                                     
                                    
                                      if(tiempoDeVideo > 202.5) {  
                                       
                                           
                                         a41.style.fontSize = '115%'; 
                                         a41.style.textDecoration = 'none';  
                                        }

                                        if(tiempoDeVideo > 208) {  
                                          //7
                                 
                                 a41.style.fontSize = '100%'; 
                                 a41.style.color = 'black';  
                                }
       /*
            
          if(tiempoDeVideo > 150) {
          a31.style.color = 'black';           //3
          a32.style.color = '#650964';
          a31.style.fontSize = '100%'; 
          a32.style.fontSize = '115%'; 
          } 
 
           
          if(tiempoDeVideo > 152) {  
          a32.style.color = 'black';           //7
          a33.style.color = '#650964';
          a32.style.fontSize = '100%'; 
          a33.style.fontSize = '115%'; 
          }
         
          if(tiempoDeVideo > 154) {  
          a33.style.color = 'black';           //7
          a34.style.color = '#650964';
          a33.style.fontSize = '100%'; 
          a34.style.fontSize = '115%'; 
          }
        
          if(tiempoDeVideo > 155.5) {  
              a34.style.color = 'black';           //7
              a35.style.color = '#650964';
              a34.style.fontSize = '100%'; 
              a35.style.fontSize = '115%'; 
              }
           
   
           
          if(tiempoDeVideo > 158) { 
          a35.style.fontSize = '100%';  
          a35.style.color = 'black';           //7
          a36.style.color = '#650964';
          a36.style.fontSize = '115%'; 
          } 




          if(tiempoDeVideo > 255) {  
          a17.style.color = 'black';           //7
           
          a17.style.fontSize = '100%'; 
           
          }
        
              
       // TRADUCCION AL CASTELLANO

          if(tiempoDeVideo > 23) {  
                     
          a18.style.color = 'black';
          a19.style.color = 'lightgrey';
          a20.style.color = 'lightgrey';   //1
          a21.style.color = 'lightgrey';
         
           
           
          }
          
           
          if(tiempoDeVideo > 57.5) {  
            a18.style.color = 'lightgrey';
            a19.style.color = 'black';
            a20.style.color = 'lightgrey';   //1
            a21.style.color = 'lightgrey';
         
           
          }
            
          if(tiempoDeVideo > 112) {  
            a18.style.color = 'lightgrey';
            a19.style.color = 'lightgrey';
            a20.style.color = 'black';   //1
            a21.style.color = 'lightgrey';
         
          }
          
          if(tiempoDeVideo > 169) {  
            a18.style.color = 'lightgrey';
            a19.style.color = 'lightgrey';
            a20.style.color = 'lightgrey';   //1
            a21.style.color = 'black';
          
          }
          
           
          if(tiempoDeVideo > 255) {  
            a18.style.color = 'black';
            a19.style.color = 'black';
            a20.style.color = 'black';   //1
            a21.style.color = 'black';
          }
           /*
          if(tiempoDeVideo > 148) {  
          a49.style.color = 'lightgrey';
          a50.style.color = 'lightgrey';   //6
          a51.style.color = 'lightgrey';
          a52.style.color = 'lightgrey';
          a53.style.color = 'black';
          a54.style.color = 'lightgrey';
         
          }
            
          if(tiempoDeVideo > 161) {  
          a49.style.color = 'lightgrey';
          a50.style.color = 'lightgrey';   //7
          a51.style.color = 'lightgrey';
          a52.style.color = 'lightgrey';
          a53.style.color = 'lightgrey';
          a54.style.color = 'black';
           
          }

          
          if(tiempoDeVideo > 271) {  
          a49.style.color = 'black';
          a50.style.color = 'black';
          a51.style.color = 'black';   //8
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
           
          if(tiempoDeVideo > 206) {  
          a21.style.color = 'black';           //7
           a21.style.fontSize = '100%'; 
           
          }
          
         
           
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


