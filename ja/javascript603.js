 

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: '3E_x7oPEndw',
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

  
 
  if(tiempoDeVideo > 12) {
    a1.style.color = '#f37736';
    a1.style.fontSize = '115%'; //rojo    //1
  } 
 
  if(tiempoDeVideo > 15) {
    a1.style.color = 'black';
    a1.style.fontSize = '100%'
    a2.style.color = '#ed2939';
    a2.style.fontSize = '115%';  //azul //2
  } 
 
  if(tiempoDeVideo > 18) {
    a2.style.color = 'black';
    a2.style.fontSize = '100%'
   a1.style.color = '#f37736'; 
   a1.style.fontSize = '115%'; //naranja //3
  } 
 
   if(tiempoDeVideo > 22) {
    a1.style.color = 'black';           //4
    a4.style.color = '#ed2939';
    a1.style.fontSize = '100%'; 
    a4.style.fontSize = '115%'; 
    
   } 

 
/*
  if(tiempoDeVideo > 34) {
    a4.style.color = 'black';           //4
    a5.style.textDecoration = 'underline';
    a4.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 39) {
    a5.style.color = '#f37736';   
     a5.style.textDecoration = 'none';  
     a5.style.fontSize = '115%';       //4
    
   } 
*/
  if(tiempoDeVideo > 25) {
    a4.style.color = 'black';           //7
   a5.style.color = '#ed2939';
   a4.style.fontSize = '100%';  //naranja
   a5.style.fontSize = '115%'; 
  } 

   if(tiempoDeVideo > 28) {
    a5.style.color = 'black';           //3
    a6.style.color = '#f37736';
    a5.style.fontSize = '100%'; 
    a6.style.fontSize = '115%'; 
   } 
  
  if(tiempoDeVideo > 32) {
    a6.style.color = 'black';           //6
    a7.style.color = '#ed2939';
    a6.style.fontSize = '100%'; 
    a7.style.fontSize = '115%'; 
  } 
 
  if(tiempoDeVideo > 35) {
    a7.style.color = 'black';           //7
    a8.style.color = '#f37736';
    a7.style.fontSize = '100%'; 
    a8.style.fontSize = '115%'; 
  } 
 
 

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
  
  if(tiempoDeVideo > 68) {
    a1.style.color = 'black';           //3
    a2.style.color = '#ed2939';
    a1.style.fontSize = '100%'; 
    a2.style.fontSize = '115%'; 
   } 
 
 
  if(tiempoDeVideo > 71) {  
    a2.style.color = 'black';           //7
    a3.style.color = '#005caa';
    a2.style.fontSize = '100%'; 
    a3.style.fontSize = '115%'; 
  }

  if(tiempoDeVideo > 75) {
    a3.style.color = 'black';           //3
    a4.style.color = '#f37736';
    a3.style.fontSize = '100%'; 
    a4.style.fontSize = '115%'; 
   } 
  
  if(tiempoDeVideo > 78) {
    a4.style.color = 'black';           //6
    a5.style.color = '#ed2939';
    a4.style.fontSize = '100%'; 
    a5.style.fontSize = '115%'; 

  } 
 
  if(tiempoDeVideo > 82) {
    a5.style.color = 'black';           //7
    a6.style.color = '#005caa';
    a5.style.fontSize = '100%'; 
    a6.style.fontSize = '115%'; 
  }

 
  
  if(tiempoDeVideo > 85) {
    a6.style.color = 'black';           //3
    a7.style.color = '#f37736';
    a6.style.fontSize = '100%'; 
    a7.style.fontSize = '115%'; 
   } 
  

  if(tiempoDeVideo > 88.5) {
    a7.style.color = 'black';           //6
    a8.style.color = '#ed2939';
    a7.style.fontSize = '100%'; 
    a8.style.fontSize = '115%'; 
  } 
  

 
   if(tiempoDeVideo > 91) {
    a9.style.color = 'red';           //4
    a1.style.textDecoration = 'underline';
    a9.style.fontSize = '115%'; 
    a8.style.color = 'black';
    
   } 

   if(tiempoDeVideo > 122) {
      
      
     a9.style.fontSize = '100%'; 
     a9.style.color = 'black';  
           //4
    
   } 

   

      if(tiempoDeVideo > 151) {
    a1.style.color = '#f37736';   
     a1.style.textDecoration = 'none'; 
     a9.style.fontSize = '100%'; 
     a9.style.color = 'black';  
     a1.style.fontSize = '115%';       //4
    
   } 
  
  if(tiempoDeVideo > 154) {
    a1.style.color = 'black';           //3
    a2.style.color = '#ed2939';
    a1.style.fontSize = '100%'; 
    a2.style.fontSize = '115%'; 
   } 
 
 


  
  if(tiempoDeVideo > 158) {
    a2.style.color = 'black';           //3
    a1.style.color = '#ed2939';
    a2.style.fontSize = '100%'; 
    a1.style.fontSize = '115%'; 
   } 
 
 
 if(tiempoDeVideo > 161) {  
    a1.style.color = 'black';           //7
    a2.style.color = '#005caa';
    a1.style.fontSize = '100%'; 
    a2.style.fontSize = '115%'; 
  }

  
  if(tiempoDeVideo > 164) {
    a2.style.color = 'black';           //3
    a3.style.color = '#f37736';
    a2.style.fontSize = '100%'; 
    a3.style.fontSize = '115%'; 
   } 

 

  

  if(tiempoDeVideo > 167) {
    a3.style.color = 'black';           //3
    a4.style.color = '#f37736';
    a3.style.fontSize = '100%'; 
    a4.style.fontSize = '115%'; 
   } 
  
  if(tiempoDeVideo > 171) {
    a4.style.color = 'black';           //6
    a5.style.color = '#ed2939';
    a4.style.fontSize = '100%'; 
    a5.style.fontSize = '115%'; 

  } 
 
  if(tiempoDeVideo > 174) {
    a5.style.color = 'black';           //7
    a6.style.color = '#005caa';
    a5.style.fontSize = '100%'; 
    a6.style.fontSize = '115%'; 
  }

 
  
  if(tiempoDeVideo > 177.5) {
    a6.style.color = 'black';           //3
    a7.style.color = '#f37736';
    a6.style.fontSize = '100%'; 
    a7.style.fontSize = '115%'; 
   } 
  

  if(tiempoDeVideo > 181) {
    a7.style.color = 'black';           //6
    a8.style.color = '#ed2939';
    a7.style.fontSize = '100%'; 
    a8.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 184.5) {
    a8.style.color = 'black';           //3
    a7.style.color = '#f37736';
    a8.style.fontSize = '100%'; 
    a7.style.fontSize = '115%'; 
   } 
  

  if(tiempoDeVideo > 187) {
    a7.style.color = 'black';           //6
    a8.style.color = '#ed2939';
    a7.style.fontSize = '100%'; 
    a8.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 192) {
    a8.style.color = 'black';           //6
   
    a8.style.fontSize = '100%'; 
   
  } 
  
  



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
