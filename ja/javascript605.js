var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'AGN9V05yb7M',
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
 
  
 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeVideo > 6) {
    a0.style.color = 'grey';
     
  } 

  if(tiempoDeVideo > 20) {
    a0.style.color = 'white';
     
  }

  
 
  if(tiempoDeVideo > 26) {
    a1.style.color = '#075b23';
    a1.style.fontSize = '115%'; //rojo    //1
  } 
 
  if(tiempoDeVideo > 33) {
    a1.style.color = 'black';
    a1.style.fontSize = '100%'
    a2.style.color = '#0a8432';
    a2.style.fontSize = '115%';  //azul //2
  } 
 
  if(tiempoDeVideo > 40) {
    a2.style.color = 'black';
    a2.style.fontSize = '100%'
   a3.style.color = '#043f18'; 
   a3.style.fontSize = '115%'; //naranja //3
  } 
  
   if(tiempoDeVideo > 46) {
    a3.style.color = 'black';           //4
    a4.style.color = '#015f20';
    a3.style.fontSize = '100%'; 
    a4.style.fontSize = '115%'; 
    
   } 

 

  if(tiempoDeVideo > 53) {
    a4.style.color = 'black';           //7
   a3.style.color = '#075b23';
   a4.style.fontSize = '100%';  //naranja
   a3.style.fontSize = '115%'; 
  } 
 
   if(tiempoDeVideo > 60) {
    a3.style.color = 'black';           //3
    a4.style.color = '#0a8432';
    a3.style.fontSize = '100%'; 
    a4.style.fontSize = '115%'; 
   } 

   
  if(tiempoDeVideo > 66.5) {
    a4.style.color = 'black';           //4
    a5.style.textDecoration = 'underline';
    a4.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 78) {
    a5.style.color = '#152b9d';   
     a5.style.textDecoration = 'none';  
     a5.style.fontSize = '115%';       //4
    
   } 



  
  if(tiempoDeVideo > 85) {
    a5.style.color = 'black';           //6
    a6.style.color = '#021b9c';
    a5.style.fontSize = '100%'; 
    a6.style.fontSize = '115%'; 
  } 
 
  if(tiempoDeVideo > 92) {
    a6.style.color = 'black';           //7
    a7.style.color = '#0f207a';
    a6.style.fontSize = '100%'; 
    a7.style.fontSize = '115%'; 
  } 
 
 /*

   if(tiempoDeVideo > 38) {
    a9.style.color = 'red';           //4
    a1.style.textDecoration = 'underline';
    a9.style.fontSize = '115%'; 
    a8.style.color = 'black';
    
   } 

   if(tiempoDeVideo > 64) {
    a1.style.color = '#f37736';   
     a1.style.textDecoration = 'none'; 
     a9.style.fontSize = '100%'; 
     a9.style.color = 'black';  
     a1.style.fontSize = '115%';       //4
    
   } 
  */
  if(tiempoDeVideo > 98) {
    a7.style.color = 'black';           //3
    a8.style.color = '#001478';
    a7.style.fontSize = '100%'; 
    a8.style.fontSize = '115%'; 
   } 
 
 
  if(tiempoDeVideo > 105) {  
    a8.style.color = 'black';           //7
    a7.style.color = '#021b9c';
    a8.style.fontSize = '100%'; 
    a7.style.fontSize = '115%'; 
  }

  if(tiempoDeVideo > 112) {
    a7.style.color = 'black';           //3
    a8.style.color = '#0f207a';
    a7.style.fontSize = '100%'; 
    a8.style.fontSize = '115%'; 
   }
   
  

   if(tiempoDeVideo > 120) {
    a8.style.fontSize = '100%'; 
    a8.style.color = 'black';       
    a9.style.textDecoration = 'underline';
   
    
   } 
 
   if(tiempoDeVideo > 130.5) {
    a9.style.color = '#580f76';   
     a9.style.textDecoration = 'none'; 
       
     a9.style.fontSize = '115%';       //4
    
   } 
  
  
  if(tiempoDeVideo > 137) {
    a9.style.color = 'black';           //6
    a10.style.color = '#440b5c';
    a9.style.fontSize = '100%'; 
    a10.style.fontSize = '115%'; 

  } 
 
  if(tiempoDeVideo > 143.5) {
    a10.style.color = 'black';           //7
    a11.style.color = '#340846';
    a10.style.fontSize = '100%'; 
    a11.style.fontSize = '115%'; 
  }

  
  
  if(tiempoDeVideo > 151) {
    a11.style.color = 'black';           //3
    a12.style.color = '#40015b';
    a11.style.fontSize = '100%'; 
    a12.style.fontSize = '115%'; 
   } 
   

  if(tiempoDeVideo > 158) {
    a12.style.color = 'black';           //6
    a11.style.color = '#520174';
    a12.style.fontSize = '100%'; 
    a11.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 164) {
    a11.style.color = 'black';           //3
    a12.style.color = '#660090';
    a11.style.fontSize = '100%'; 
    a12.style.fontSize = '115%'; 
   } 
 
 
 
 if(tiempoDeVideo > 171) {
    a12.style.fontSize = '100%';
    a12.style.color = 'black';       
    a13.style.textDecoration = 'underline';
   
    
   } 
  
   if(tiempoDeVideo > 198) {
    a13.style.color = '#09464a';   
     a13.style.textDecoration = 'none'; 
       
     a13.style.fontSize = '115%';       //4
    
   } 
   
  if(tiempoDeVideo > 205) {
    a13.style.color = 'black';           //3
    a14.style.color = '#003d41';
    a13.style.fontSize = '100%'; 
    a14.style.fontSize = '115%'; 
   } 
  
 
 if(tiempoDeVideo > 212.5) {  
    a14.style.color = 'black';           //7
    a15.style.color = '#0a5c61';
    a14.style.fontSize = '100%'; 
    a15.style.fontSize = '115%'; 
  }

   
  if(tiempoDeVideo > 218) {
    a15.style.color = 'black';           //3
    a16.style.color = '#01838b';
    a15.style.fontSize = '100%'; 
    a16.style.fontSize = '115%'; 
   } 
 

  

  if(tiempoDeVideo > 225) {
    a16.style.color = 'black';           //3
    a15.style.color = '#0f3e41';
    a16.style.fontSize = '100%'; 
    a15.style.fontSize = '115%'; 
   } 
  
 

  if(tiempoDeVideo > 232) {
    a15.style.color = 'black';           //6
    a16.style.color = '#1b3e40';
    a15.style.fontSize = '100%'; 
    a16.style.fontSize = '115%'; 

  } 
 

   
  if(tiempoDeVideo > 247) {
    a16.style.color = 'black';           //7
     
    a16.style.fontSize = '100%'; 
     
  }

 
   
  if(tiempoDeVideo > 26) {
              //3
    a17.style.color = 'black';
    a18.style.color = 'grey'; 
    a19.style.color = 'grey'; 
    
   } 
  

  if(tiempoDeVideo > 78) {
    a17.style.color = 'grey';           //6
    a18.style.color = 'black';
    a19.style.color = 'grey';
      
  } 

  if(tiempoDeVideo > 130.5) {
    a17.style.color = 'grey';           //6
    a18.style.color = 'grey';
    a19.style.color = 'black';
      
  } 
  
  if(tiempoDeVideo > 171) {
    a17.style.color = 'black';           //6
    a18.style.color = 'black';
    a19.style.color = 'black';
      
  } 
 if(tiempoDeVideo > 198) {
    a17.style.color = 'black';           //6
    a18.style.color = 'grey';
    a19.style.color = 'grey';
      
  } 

  

   if(tiempoDeVideo > 247) {
    a17.style.color = 'black';           //6
    a18.style.color = 'black';
    a19.style.color = 'black';
      
  } 
  /*

  if(tiempoDeVideo > 192) {
    a8.style.color = 'black';           //6
   
    a8.style.fontSize = '100%'; 
   
  } 
  
  */



/*
  if(tiempoDeVideo > 70) {
    a16.style.color = 'black';           //7
    a17.style.color = '#005caa';
    a17.style.fontSize = '115%'; 
    a16.style.fontSize = '100%'; 
  }
  if(tiempoDeVideo > 72.5) {
    a17.style.color = 'black';           //7
    a18.style.color = '#ed2939';
    a18.style.fontSize = '115%'; 
    a17.style.fontSize = '100%'; 
  }
 
if(tiempoDeVideo > 75) {
    a18.style.color = 'black';           //7
    a19.style.color = '#005caa';
    a19.style.fontSize = '115%'; 
    a18.style.fontSize = '100%'; 
  }
 
  if(tiempoDeVideo > 77.5) {
    a19.style.color = 'black';           //3
    a20.style.color = '#f37736';
    a20.style.fontSize = '115%'; 
    a19.style.fontSize = '100%'; 
   } 
 
 
  
  if(tiempoDeVideo > 81) {
    a20.style.color = 'black';           //7
     
    a20.style.fontSize = '100%'; 
    a21.style.textDecoration = 'underline';
  }
 
  
  if(tiempoDeVideo > 89.5) {
               //3
    a21.style.color = '#f37736';
    a21.style.fontSize = '115%'; 
    
    a21.style.textDecoration = 'none';  
   } 
 
  if(tiempoDeVideo > 92) {
    a21.style.color = 'black';           //6
    a22.style.color = '#ed2939';
    a22.style.fontSize = '115%'; 
    a21.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 94) {
    a21.style.color = 'black';           //3
    a22.style.color = '#005caa';
    a22.style.fontSize = '115%'; 
    a21.style.fontSize = '100%'; 
   } 
 
 
  if(tiempoDeVideo > 94.5) {
    a22.style.color = 'black';           //6
    a23.style.color = '#f37736';
    a23.style.fontSize = '115%'; 
    a22.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 96.5) {
    a23.style.color = 'black';           //7
    a24.style.color = '#ed2939';
    a24.style.fontSize = '115%'; 
    a23.style.fontSize = '100%'; 
  }
 
  if(tiempoDeVideo > 98.5) {
    a24.style.color = 'black';           //3
    a25.style.color = '#005caa';
    a25.style.fontSize = '115%'; 
    a24.style.fontSize = '100%'; 
   } 
 
 
  if(tiempoDeVideo > 101.5) {
    a25.style.color = 'black';           //6
    a26.style.color = '#ed2939';
    a26.style.fontSize = '115%'; 
    a25.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 103.5) {
    a26.style.color = 'black';           //3
    a27.style.color = '#005caa';
    a27.style.fontSize = '115%'; 
    a26.style.fontSize = '100%'; 
   } 
  
 
  if(tiempoDeVideo > 106) {
    a27.style.color = 'black';           //6
    a28.style.color = '#f37736';
    a28.style.fontSize = '115%'; 
    a27.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 108.5) {
    a28.style.color = 'black';           //7
    a29.style.color = '#ed2939';
    a29.style.fontSize = '115%'; 
    a28.style.fontSize = '100%'; 
  }
 
  if(tiempoDeVideo > 111) {
    a29.style.color = 'black';           //3
    a30.style.color = '#005caa';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
   } 
     if(tiempoDeVideo > 113.5) {
    a30.style.color = 'black';           //6
    a31.style.color = '#ed2939';
    a31.style.fontSize = '115%'; 
    a30.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 115.5) {
    a31.style.color = 'black';           //3
    a32.style.color = '#005caa';
    a32.style.fontSize = '115%'; 
    a31.style.fontSize = '100%'; 
   } 
  
  
  if(tiempoDeVideo > 118) {
    a32.style.color = 'black';           //6
    a29.style.color = '#f37736';
    a29.style.fontSize = '115%'; 
    a32.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 121) {
    a29.style.color = 'black';           //7
    a30.style.color = '#ed2939';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
  }
    if(tiempoDeVideo > 123) {
    a30.style.color = 'black';           //6
    a31.style.color = '#f37736';
    a31.style.fontSize = '115%'; 
    a30.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 125.5) {
    a31.style.color = 'black';           //7
    a32.style.color = '#ed2939';
    a32.style.fontSize = '115%'; 
    a31.style.fontSize = '100%'; 
  }
 
  if(tiempoDeVideo > 129) {
    a32.style.color = 'black';           //7
    
    a32.style.fontSize = '100%'; 
  }
  /////
  if(tiempoDeVideo > 129) {
    a29.style.color = 'black';           //4
    a29.style.textDecoration = 'underline';
    a29.style.fontSize = '100%'; 
   } 
  
   if(tiempoDeVideo > 168) {
              //6
    a29.style.color = '#f37736';
    a29.style.fontSize = '115%'; 
    a29.style.textDecoration = 'none';
   
  } 
 
  if(tiempoDeVideo > 170) {
    a29.style.color = 'black';           //7
    a30.style.color = '#ed2939';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
  }
    if(tiempoDeVideo > 173) {
    a30.style.color = 'black';           //6
    a31.style.color = '#f37736';
    a31.style.fontSize = '115%'; 
    a30.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 175) {
    a31.style.color = 'black';           //7
    a32.style.color = '#ed2939';
    a32.style.fontSize = '115%'; 
    a31.style.fontSize = '100%'; 
  }
//////////////////
if(tiempoDeVideo > 177) {
  a32.style.color = 'black';           //6
  a29.style.color = '#f37736';
  a29.style.fontSize = '115%'; 
  a32.style.fontSize = '100%'; 
} 
if(tiempoDeVideo > 179) {
  a29.style.color = 'black';           //7
  a30.style.color = '#ed2939';
  a30.style.fontSize = '115%'; 
  a29.style.fontSize = '100%'; 
}
  if(tiempoDeVideo > 182) {
  a30.style.color = 'black';           //6
  a31.style.color = '#f37736';
  a31.style.fontSize = '115%'; 
  a30.style.fontSize = '100%'; 
} 
if(tiempoDeVideo > 184.5) {
  a31.style.color = 'black';           //7
  a32.style.color = '#ed2939';
  a32.style.fontSize = '115%'; 
  a31.style.fontSize = '100%'; 
}
if(tiempoDeVideo > 188) {
  a32.style.color = 'black';           //7
   
  a32.style.fontSize = '100%'; 
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