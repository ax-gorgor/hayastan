
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'IewdfghvtCE',
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
 var image10 = document.getElementById('image10');
 var image11 = document.getElementById('image11');
 var image12 = document.getElementById('image12');
 var image13 = document.getElementById('image13');


 
  
 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

  if(tiempoDeVideo > 2) {
  //  a0.style.color = 'grey';
        image10.style.width = '4%';
        image10.style.marginRight = '1%';
        image10.style.borderRadius = '50%';
     }

     if(tiempoDeVideo > 36) {
     //   a0.style.color = 'white';
         } 
 
 if(tiempoDeVideo > 34.5) {
a1.style.color = '#5a446d'; // lila
a1.style.fontSize = '115%';  
} 

if(tiempoDeVideo > 38) {
a1.style.color = 'black';
a1.style.fontSize = '100%'
a2.style.color = '#531b76'; // violeta
a2.style.fontSize = '115%';   
} 

if(tiempoDeVideo > 45) {
a2.style.color = 'black';
a2.style.fontSize = '100%'
a3.style.color = '#d97d07'; // amarillo
a3.style.fontSize = '115%';  
} 

if(tiempoDeVideo > 48) {
a3.style.color = 'black';            
a4.style.color = '#3d1a54'; // violeta oscuro
a3.style.fontSize = '100%'; 
a4.style.fontSize = '115%'; 

} 

if(tiempoDeVideo > 56) {
a4.style.color = 'black';            
a5.style.color = '#d97d07'; // amarillo  
a4.style.fontSize = '100%';   
a5.style.fontSize = '115%'; 
image10.style.width = '0%';
image11.style.width = '4%';
image11.style.marginRight = '1%';
image11.style.borderRadius = '50%';
} 

if(tiempoDeVideo > 59) {
a5.style.color = 'black';           
a6.style.color = '#702987'; // violeta claro
a5.style.fontSize = '100%'; 
a6.style.fontSize = '115%'; 
} 

 
if(tiempoDeVideo > 66.5) {
a6.style.color = 'black'; 
a6.style.fontSize = '100%'; 
a7.style.color = '#5a446d'; // lila  
a7.style.fontSize = '115%';        

} 
 


if(tiempoDeVideo > 70) {
a7.style.color = 'black';            
a8.style.color = '#531b76'; // violeta
a7.style.fontSize = '100%'; 
a8.style.fontSize = '115%'; 
} 

if(tiempoDeVideo > 74) {
  a8.style.color = 'black';            
  a9.style.color = '#d97d07'; // amarillo
  a8.style.fontSize = '100%'; 
  a9.style.fontSize = '115%'; 
  }

if(tiempoDeVideo > 85.5) {
  a9.style.color = 'black';
  a9.style.fontSize = '100%';  
  a10.style.textDecoration = 'underline';   
  image11.style.width = '0%';
image12.style.width = '4%';
image12.style.marginRight = '1%';
image12.style.borderRadius = '50%';        
  }
  


if(tiempoDeVideo > 108) {  
a10.style.textDecoration = 'none';            
a10.style.color = '#3d1a54'; // violeta oscuro
a10.style.fontSize = '115%'; 
}



if(tiempoDeVideo > 112) {
a10.style.color = 'black';            
a11.style.color = '#d97d07'; // amarillo  
a10.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 
}

if(tiempoDeVideo > 119) {
a11.style.color = 'black';            
a12.style.color = '#702987'; // violeta claro
a11.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
image11.style.width = '0%';
image12.style.width = '4%';
image12.style.marginRight = '1%';
image12.style.borderRadius = '50%';

} 

if(tiempoDeVideo > 129) {
a12.style.color = 'black';            
a13.style.color = '#5a446d'; // lila 
a12.style.fontSize = '100%'; 
a13.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 133) {
a13.style.color = 'black';          
a14.style.color = '#531b76'; // violeta
a13.style.fontSize = '100%'; 
a14.style.fontSize = '115%'; 
} 

 
 
if(tiempoDeVideo > 140) {
a14.style.color = 'black';           
a15.style.color = '#d97d07'; // amarillo
a14.style.fontSize = '100%'; 
a15.style.fontSize = '115%'; 
} 


 
if(tiempoDeVideo > 144) {
a15.style.color = 'black';           
a16.style.color = '#3d1a54'; // violeta oscuro
a15.style.fontSize = '100%'; 
a16.style.fontSize = '115%'; 

}  

if(tiempoDeVideo > 148) {
a16.style.color = 'black';            
a17.style.color = '#d97d07'; // amarillo 
a16.style.fontSize = '100%'; 
a17.style.fontSize = '115%'; 
} 

if(tiempoDeVideo > 159) {
a17.style.color = 'black';            
a18.style.color = '#702987'; // violeta claro
a17.style.fontSize = '100%'; 
a18.style.fontSize = '115%'; 
image12.style.width = '0%';
image13.style.width = '4%';
image13.style.marginRight = '1%';
image13.style.borderRadius = '50%';
} 
 
if(tiempoDeVideo > 162) {
a18.style.color = 'black';            
a19.style.color = '#5a446d'; // lila 
a18.style.fontSize = '100%'; 
a19.style.fontSize = '115%'; 
} 
 
 
if(tiempoDeVideo > 168) {  
a19.style.color = 'black';           
a20.style.color = '#531b76'; // violeta
a19.style.fontSize = '100%'; 
a20.style.fontSize = '115%'; 
}
 
  
 if(tiempoDeVideo > 179) {  
a20.style.color = 'black';            
a21.style.color = '#d97d07'; // amarillo
a20.style.fontSize = '100%'; 
a21.style.fontSize = '115%'; 
}

if(tiempoDeVideo > 183) {  
  a21.style.color = 'black';           
  a22.style.color = '#3d1a54'; // violeta oscuro
  a21.style.fontSize = '100%'; 
  a22.style.fontSize = '115%'; 
  }

  if(tiempoDeVideo > 190) {  
    a22.style.color = 'black';            
    a23.style.color = '#d97d07'; // amarillo  
    a22.style.fontSize = '100%'; 
    a23.style.fontSize = '115%'; 
    }

    if(tiempoDeVideo > 194) {  
      a23.style.color = 'black';           
      a24.style.color = '#702987'; // violeta claro
      a23.style.fontSize = '100%'; 
      a24.style.fontSize = '115%'; 
      }

      if(tiempoDeVideo > 198) {  
        a24.style.color = 'black';            
        a25.style.color = '#d97d07'; // amarillo
        a24.style.fontSize = '100%'; 
        a25.style.fontSize = '115%'; 
        }

        if(tiempoDeVideo > 235) {  
          a25.style.color = 'black';           
          image13.style.width = '0%';
          a25.style.fontSize = '100%'; 
           
          }
     
   
 
/*
 
if(tiempoDeVideo > 47) {
a17.style.color = 'black';           //3
a18.style.color = 'lightgrey';
a19.style.color = 'lightgrey'; 
a20.style.color = 'lightgrey'; 
} 
 

if(tiempoDeVideo > 68.5) {
a17.style.color = 'lightgrey';           //6
a18.style.color = 'black';
a19.style.color = 'lightgrey'; 
a20.style.color = 'lightgrey'; 

} 
 
if(tiempoDeVideo > 93) {
a17.style.color = 'lightgrey';           //6
a18.style.color = 'lightgrey';
a19.style.color = 'black'; 
a20.style.color = 'lightgrey'; 
} 

if(tiempoDeVideo > 118) {
    a17.style.color = 'lightgrey';           //6
    a18.style.color = 'lightgrey';
    a19.style.color = 'lightgrey'; 
    a20.style.color = 'lightgrey'; 
    a21.style.textDecoration = 'underline';
    } 
*/
 
/*

if(tiempoDeVideo > 150) {
    a17.style.color = 'lightgrey';           //3
    a18.style.color = 'lightgrey';
    a19.style.color = 'black'; 
    a20.style.color = 'lightgrey'; 
    a21.style.textDecoration = 'none';
    } 

    if(tiempoDeVideo > 176) {
        a17.style.color = 'lightgrey';           //3
        a18.style.color = 'lightgrey';
        a19.style.color = 'lightgrey'; 
        a20.style.color = 'lightgrey'; 
        a22.style.textDecoration = 'underline';
        } 



 

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

 /*
if(tiempoDeVideo > 163) {
a26.style.color = 'black';           //3
a27.style.color = '#95640b';
a26.style.fontSize = '100%'; 
a27.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 170) 
{  
a27.style.color = 'black';           //7
a28.style.color = '#ab572c';
a27.style.fontSize = '100%'; 
a28.style.fontSize = '115%'; 
}

if(tiempoDeVideo > 176) {
a28.style.color = 'black';           //3
a29.style.color = '#99110d';
a28.style.fontSize = '100%'; 
a29.style.fontSize = '115%'; 
} 
 

if(tiempoDeVideo > 182) {
a29.style.color = 'black';           //3
a30.style.color = '#800e11';
a29.style.fontSize = '100%'; 
a30.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 188.5) {
a30.style.color = 'black';           //3
a31.style.color = '#a64d1c';
a30.style.fontSize = '100%'; 
a31.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 194) {
a31.style.color = 'black';           //3
a32.style.color = '#6b4229';
a31.style.fontSize = '100%'; 
a32.style.fontSize = '115%'; 
} 

if(tiempoDeVideo > 200) {
    a32.style.color = 'black';           //3
     
    a32.style.fontSize = '100%'; 
     
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