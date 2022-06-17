
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'o4urRBw7qZc',
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
/*
  if(tiempoDeVideo > 6) {
    a0.style.color = 'grey';
     }

     if(tiempoDeVideo > 36) {
        a0.style.color = 'white';
         }*/
 
 if(tiempoDeVideo > 0.5) {
a1.style.color = '#800e11';
a1.style.fontSize = '115%'; //rojo    //1
} 

if(tiempoDeVideo > 6.5) {
a1.style.color = 'black';
a1.style.fontSize = '100%'
a2.style.color = '#82241e';
a2.style.fontSize = '115%';  //azul //2
} 
 
if(tiempoDeVideo > 12) {
a2.style.color = 'black';
a2.style.fontSize = '100%'
a3.style.color = '#6e4833'; 
a3.style.fontSize = '115%'; //naranja //3
} 
 
if(tiempoDeVideo > 19) {
a3.style.color = 'black';           //4
a4.style.color = '#3f5c2e';
a3.style.fontSize = '100%'; 
a4.style.fontSize = '115%'; 

} 
 
if(tiempoDeVideo > 24.5) {
a4.style.color = 'black';           //7
a5.style.color = '#2d583a';
a4.style.fontSize = '100%';  //naranja
a5.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 31.5) {
a5.style.color = 'black';           //3
a6.style.color = '#641717';
a5.style.fontSize = '100%'; 
a6.style.fontSize = '115%'; 
} 
/*
if(tiempoDeVideo > 37) {
a4.style.color = 'black';           //4
a5.style.textDecoration = 'underline';
a4.style.fontSize = '100%'; 
} */

 
if(tiempoDeVideo > 38) {
a6.style.color = 'black'; 
a6.style.fontSize = '100%'; 
a7.style.color = '#945e39';   
a7.style.fontSize = '115%';       //4

} 
 


if(tiempoDeVideo > 44) {
a7.style.color = 'black';           //6
a8.style.color = '#721712';
a7.style.fontSize = '100%'; 
a8.style.fontSize = '115%'; 
} 
/* 
if(tiempoDeVideo > 56.5) {
a6.style.color = 'black';           //7
a7.style.textDecoration = 'underline';
a6.style.fontSize = '100%'; 
}
  

if(tiempoDeVideo > 62) {
a7.style.color = '#001478';           //3
a7.style.fontSize = '115%'; 
a7.style.textDecoration = 'none';
} 
 */

if(tiempoDeVideo > 50) {  
a8.style.color = 'black';           //7
a9.style.color = '#5b3725';
a8.style.fontSize = '100%'; 
a9.style.fontSize = '115%'; 
}

 
if(tiempoDeVideo > 57) {
a9.style.color = 'black';           //3
a10.style.color = '#ae5c32';
a9.style.fontSize = '100%'; 
a10.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 63) {
a10.style.color = 'black';           //6
a11.style.color = '#800e11';
a10.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 

} 
 
if(tiempoDeVideo > 69) {
a11.style.color = 'black';           //7
a12.style.color = '#82241e';
a11.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
}
 

if(tiempoDeVideo > 75) {
a12.style.color = 'black';           //6
a13.style.color = '#6e4833';
a12.style.fontSize = '100%'; 
a13.style.fontSize = '115%'; 
} 
  
if(tiempoDeVideo > 83) {
a13.style.color = 'black';           //3
a14.style.color = '#2d583a';
a13.style.fontSize = '100%'; 
a14.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 88) {
a14.style.color = 'black';           //3
a15.style.color = '#2d583a';
a14.style.fontSize = '100%'; 
a15.style.fontSize = '115%'; 
} 
 /*

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

 */
 
if(tiempoDeVideo > 95) {
a15.style.color = 'black';           //3
a16.style.color = '#ae5c32';
a15.style.fontSize = '100%'; 
a16.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 100) {
a16.style.color = 'black';           //6
a17.style.color = '#641717';
a16.style.fontSize = '100%'; 
a17.style.fontSize = '115%'; 

} 
  

if(tiempoDeVideo > 107) {
a17.style.color = 'black';           //6
a18.style.color = '#945c27';
a17.style.fontSize = '100%'; 
a18.style.fontSize = '115%'; 
} 
 

if(tiempoDeVideo > 112) {
a18.style.color = 'black';           //3
a19.style.color = '#a2774e';
a18.style.fontSize = '100%'; 
a19.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 119) {
a19.style.color = 'black';           //3
a20.style.color = '#b68455';
a19.style.fontSize = '100%'; 
a20.style.fontSize = '115%'; 
} 

 
if(tiempoDeVideo > 125) {  
a20.style.color = 'black';           //7
a21.style.color = '#82241e';
a20.style.fontSize = '100%'; 
a21.style.fontSize = '115%'; 
}

 
if(tiempoDeVideo > 132) {
a21.style.color = 'black';           //3
a22.style.color = '#800e11';
a21.style.fontSize = '100%'; 
a22.style.fontSize = '115%'; 
} 

 
if(tiempoDeVideo > 138) {
a22.style.color = 'black';           //3
a23.style.color = '#945e39';
a22.style.fontSize = '100%'; 
a23.style.fontSize = '115%'; 
} 
 

if(tiempoDeVideo > 144) {
a23.style.color = 'black';           //6
a24.style.color = '#522d27';
a23.style.fontSize = '100%'; 
a24.style.fontSize = '115%'; 

} 
 
if(tiempoDeVideo > 150) {
a24.style.color = 'black';           //6
a25.style.color = '#425b16';
a24.style.fontSize = '100%'; 
a25.style.fontSize = '115%'; 
} 

 
if(tiempoDeVideo > 158) {
a25.style.color = 'black';           //3
a26.style.color = '#316042';
a25.style.fontSize = '100%'; 
a26.style.fontSize = '115%'; 
} 

 
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