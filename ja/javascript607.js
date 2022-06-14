
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: '1FM5f7Fe-Vg',
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
 var image1 = document.getElementById('image1');
 var image2 = document.getElementById('image2');
 var image3 = document.getElementById('image3');
 var image4 = document.getElementById('image4');


 
  
 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeVideo > 6) {
    a0.style.color = 'grey';
     }

     if(tiempoDeVideo > 36) {
        a0.style.color = 'white';
         }

 if(tiempoDeVideo > 44) {
a1.style.color = '#075b23';
a1.style.fontSize = '115%'; //rojo    //1
} 

if(tiempoDeVideo > 50) {
a1.style.color = 'black';
a1.style.fontSize = '100%'
a2.style.color = '#0a8432';
a2.style.fontSize = '115%';  //azul //2
} 
 
if(tiempoDeVideo > 61) {
a2.style.color = 'black';
a2.style.fontSize = '100%'
a3.style.color = '#043f18'; 
a3.style.fontSize = '115%'; //naranja //3
} 
 
if(tiempoDeVideo > 65.5) {
a3.style.color = 'black';           //4
a4.style.color = '#015f20';
a3.style.fontSize = '100%'; 
a4.style.fontSize = '115%'; 

} 
 
if(tiempoDeVideo > 72) {
a4.style.color = 'black';           //7
a5.style.color = '#075b23';
a4.style.fontSize = '100%';  //naranja
a5.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 77) {
a5.style.color = 'black';           //3
a6.style.color = '#0a8432';
a5.style.fontSize = '100%'; 
a6.style.fontSize = '115%'; 
} 
/*
if(tiempoDeVideo > 50) {
a4.style.color = 'black';           //4
a5.style.textDecoration = 'underline';
a4.style.fontSize = '100%'; 
} 

*/
if(tiempoDeVideo > 82.5) {
a6.style.color = 'black'; 
a6.style.fontSize = '100%'; 
a5.style.color = '#152b9d';   
a5.style.fontSize = '115%';       //4

} 
 


if(tiempoDeVideo > 88.5) {
a5.style.color = 'black';           //6
a6.style.color = '#021b9c';
a5.style.fontSize = '100%'; 
a6.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 94) {
a6.style.color = 'black';           //7
a7.style.textDecoration = 'underline';
a6.style.fontSize = '100%'; 
}
  

if(tiempoDeVideo > 105) {
a7.style.color = '#001478';           //3
a7.style.fontSize = '115%'; 
a7.style.textDecoration = 'none';
} 
 

if(tiempoDeVideo > 111) {  
a7.style.color = 'black';           //7
a8.style.color = '#021b9c';
a7.style.fontSize = '100%'; 
a8.style.fontSize = '115%'; 
}

 
if(tiempoDeVideo > 122) {
a8.style.color = 'black';           //3
a9.style.color = '#0f207a';
a8.style.fontSize = '100%'; 
a9.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 127) {
a9.style.color = 'black';           //6
a10.style.color = '#440b5c';
a9.style.fontSize = '100%'; 
a10.style.fontSize = '115%'; 

} 
 
if(tiempoDeVideo > 133.5) {
a10.style.color = 'black';           //7
a11.style.color = '#340846';
a10.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 
}
 

if(tiempoDeVideo > 138) {
a11.style.color = 'black';           //6
a12.style.color = '#520174';
a11.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 144) {
a12.style.color = 'black';           //3
a11.style.color = '#660090';
a12.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 
} 
 

if(tiempoDeVideo > 149) {
a11.style.color = 'black';           //3
a12.style.color = '#003d41';
a11.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
} 
 

if(tiempoDeVideo > 156) {  
a12.style.color = 'black';           //7
a9.style.textDecoration = 'underline';
a12.style.fontSize = '100%'; 
  
}
 

if(tiempoDeVideo > 192) {
a9.style.color = '#1b3e40';
a9.style.fontSize = '115%'; 
a9.style.textDecoration = 'none';
} 

 

if(tiempoDeVideo > 198) {
a9.style.color = 'black';           //3
a10.style.color = '#0f3e41';
a9.style.fontSize = '100%'; 
a10.style.fontSize = '115%'; 
} 

 
if(tiempoDeVideo > 203.5) {
a10.style.color = 'black';           //6
a11.style.color = '#1b3e40';
a10.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 

} 
 

if(tiempoDeVideo > 209) {
a11.style.color = 'black';           //6
a12.style.color = '#520174';
a11.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
} 
 

if(tiempoDeVideo > 214) {
a12.style.color = 'black';           //3
a11.style.color = '#660090';
a12.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 
} 


if(tiempoDeVideo > 220) {
a11.style.color = 'black';           //3
a12.style.color = '#003d41';
a11.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
} 

if(tiempoDeVideo > 225) {
    a12.style.color = 'black';           //3
    
    a12.style.fontSize = '100%'; 
     
    } 

    if(tiempoDeVideo > 226) {
        a12.style.color = '#660090';           //3
        
        a12.style.fontSize = '115%'; 
         
        }

        if(tiempoDeVideo > 232) {
            a12.style.color = 'black';           //3
            
            a12.style.fontSize = '100%'; 
             
            }
            if(tiempoDeVideo > 44) {
                a14.style.color = 'lightgrey'; 
                a13.style.color = 'black';          //3
            }

            if(tiempoDeVideo > 105) {
                a13.style.color = 'lightgrey';
                a14.style.color = 'black';           //3
            }

            if(tiempoDeVideo > 192) {
                a13.style.color = 'lightgrey';
                a14.style.color = 'lightgrey'; 
                a15.style.color = 'black';           //333
            }

            

            if(tiempoDeVideo > 232) {
                a13.style.color = 'black';
                a14.style.color = 'black';           //3
            }

            if(tiempoDeVideo > 240) {
                a0.style.color = 'grey';
                 }
            
                 if(tiempoDeVideo > 265) {
                    a0.style.color = 'white';
                     }
    


/*
if(tiempoDeVideo > 130) {  
a21.style.color = 'black';           //7
a22.style.color = '#0a5c61';
a21.style.fontSize = '100%'; 
a22.style.fontSize = '115%'; 
}


if(tiempoDeVideo > 132) {
a22.style.color = 'black';           //3
a23.style.color = '#01838b';
a22.style.fontSize = '100%'; 
a23.style.fontSize = '115%'; 
} 


if(tiempoDeVideo > 138) {
a23.style.color = 'black';           //3
a24.style.color = '#0f3e41';
a23.style.fontSize = '100%'; 
a24.style.fontSize = '115%'; 
} 


if(tiempoDeVideo > 146) {
a24.style.color = 'black';           //6
a24.style.fontSize = '100%'; 

}


if(tiempoDeVideo > 164) {
          
a17.style.color = '#0f3e41';
a17.style.fontSize = '115%'; 
} 

if(tiempoDeVideo > 167) {
a17.style.color = 'black';           //6
a18.style.color = '#1b3e40';
a17.style.fontSize = '100%'; 
a18.style.fontSize = '115%'; 

} 


if(tiempoDeVideo > 170) {
a18.style.color = 'black';           //6
a19.style.color = '#520174';
a18.style.fontSize = '100%'; 
a19.style.fontSize = '115%'; 
} 

if(tiempoDeVideo > 173) {
a19.style.color = 'black';           //3
a20.style.color = '#660090';
a19.style.fontSize = '100%'; 
a20.style.fontSize = '115%'; 
} 


if(tiempoDeVideo > 176) {
a20.style.color = 'black';           //3
a21.style.color = '#003d41';
a20.style.fontSize = '100%'; 
a21.style.fontSize = '115%'; 
} 

if(tiempoDeVideo > 179) 
{  
a21.style.color = 'black';           //7
a22.style.color = '#0a5c61';
a21.style.fontSize = '100%'; 
a22.style.fontSize = '115%'; 
}

if(tiempoDeVideo > 181) {
a22.style.color = 'black';           //3
a23.style.color = '#01838b';
a22.style.fontSize = '100%'; 
a23.style.fontSize = '115%'; 
} 


if(tiempoDeVideo > 187) {
a23.style.color = 'black';           //3
a24.style.color = '#0f3e41';
a23.style.fontSize = '100%'; 
a24.style.fontSize = '115%'; 
} 


if(tiempoDeVideo > 201) {
a24.style.color = 'black';           //6
a24.style.fontSize = '100%'; 

}
 /*
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