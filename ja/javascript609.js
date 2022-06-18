

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'qUr5TATS1Gk',
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
 
 if(tiempoDeVideo > 47) {
a1.style.color = '#2a33a1';
a1.style.fontSize = '115%'; //rojo    //1
} 

if(tiempoDeVideo > 52) {
a1.style.color = 'black';
a1.style.fontSize = '100%'
a2.style.color = '#2e3486';
a2.style.fontSize = '115%';  //azul //2
} 

if(tiempoDeVideo > 57.5) {
a2.style.color = 'black';
a2.style.fontSize = '100%'
a3.style.color = '#1622be'; 
a3.style.fontSize = '115%'; //naranja //3
} 

if(tiempoDeVideo > 63) {
a3.style.color = 'black';           //4
a4.style.color = '#1f268b';
a3.style.fontSize = '100%'; 
a4.style.fontSize = '115%'; 

} 

if(tiempoDeVideo > 68.5) {
a4.style.color = 'black';           //7
a5.style.color = '#313574';
a4.style.fontSize = '100%';  //naranja
a5.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 74.5) {
a5.style.color = 'black';           //3
a6.style.color = '#1c226c';
a5.style.fontSize = '100%'; 
a6.style.fontSize = '115%'; 
} 
/*
if(tiempoDeVideo > 37) {
a4.style.color = 'black';           //4
a5.style.textDecoration = 'underline';
a4.style.fontSize = '100%'; 
} 
*/
 
if(tiempoDeVideo > 81) {
a6.style.color = 'black'; 
a6.style.fontSize = '100%'; 
a7.style.color = '#252e9e';   
a7.style.fontSize = '115%';       //4

} 
 


if(tiempoDeVideo > 86) {
a7.style.color = 'black';           //6
a8.style.color = '#202bbe';
a7.style.fontSize = '100%'; 
a8.style.fontSize = '115%'; 
} 
/* 
if(tiempoDeVideo > 56.5) {
a6.style.color = 'black';           //7
a7.style.textDecoration = 'underline';
a6.style.fontSize = '100%'; 
}
  *//*

if(tiempoDeVideo > 62) {
a7.style.color = '#001478';           //3
a7.style.fontSize = '115%'; 
a7.style.textDecoration = 'none';
} 
  */

if(tiempoDeVideo > 93) {  
a8.style.color = 'black';           //7
a9.style.color = '#1e2ad1';
a8.style.fontSize = '100%'; 
a9.style.fontSize = '115%'; 
}


if(tiempoDeVideo > 98) {
a9.style.color = 'black';           //3
a10.style.color = '#2d359e';
a9.style.fontSize = '100%'; 
a10.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 104.5) {
a10.style.color = 'black';           //6
a11.style.color = '#1620a0';
a10.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 

} 
 
if(tiempoDeVideo > 110) {
a11.style.color = 'black';           //7
a12.style.color = '#4027bd';
a11.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
}

 
if(tiempoDeVideo > 118) {
            //7
a9.style.textDecoration = 'underline';
a12.style.color = 'black';
 
}
   

if(tiempoDeVideo > 150) {

a9.style.textDecoration = 'none';

} 
  
 

if(tiempoDeVideo > 150) {
            
a9.style.color = '#543cce';
 
a9.style.fontSize = '115%'; 
} 
  
if(tiempoDeVideo > 156) {
a9.style.color = 'black';           //3
a10.style.color = '#452ad1';
a9.style.fontSize = '100%'; 
a10.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 163) {
a10.style.color = 'black';           //3
a11.style.color = '#503bbc';
a10.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 
} 

 
 
if(tiempoDeVideo > 168) {
a11.style.color = 'black';           //3
a12.style.color = '#3924a0';
a11.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
} 

 

if(tiempoDeVideo > 177) {  
a12.style.color = 'black';           //7
a13.style.textDecoration = 'underline';
a12.style.fontSize = '100%'; 
  
}
 

if(tiempoDeVideo > 210) {
a13.style.color = '#280fa3';
a13.style.fontSize = '115%'; 
a13.style.textDecoration = 'none';
} 



if(tiempoDeVideo > 215.5) {
a13.style.color = 'black';           //6
a14.style.color = '#372594';
a13.style.fontSize = '100%'; 
a14.style.fontSize = '115%'; 

} 
  

if(tiempoDeVideo > 222) {
a14.style.color = 'black';           //6
a15.style.color = '#32247c';
a14.style.fontSize = '100%'; 
a15.style.fontSize = '115%'; 
} 
  

if(tiempoDeVideo > 228) {
a15.style.color = 'black';           //3
a16.style.color = '#3d24bc';
a15.style.fontSize = '100%'; 
a16.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 235) {
a16.style.color = 'black';           //3
a15.style.color = '#2d1c85';
a16.style.fontSize = '100%'; 
a15.style.fontSize = '115%'; 
} 

 
if(tiempoDeVideo > 241.5) {  
a15.style.color = 'black';           //7
a16.style.color = '#2d1c85';
a15.style.fontSize = '100%'; 
a16.style.fontSize = '115%'; 
}
 
 
if(tiempoDeVideo > 256) {
a16.style.color = 'black';           //3
a16.style.fontSize = '100%';
 } 
  
 

 
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

 
/*
*/
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
/*

 
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