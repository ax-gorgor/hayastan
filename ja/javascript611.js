

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'qXZPGYYWpXk',
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
   if(tiempoDeVideo > 3) {
    a0.style.color = 'grey';
     }

     if(tiempoDeVideo > 20) {
        a0.style.color = 'white';
         } */
 
 if(tiempoDeVideo > 16) {
a1.style.color = '#005858';
a1.style.fontSize = '115%'; //rojo    //1
} 

if(tiempoDeVideo > 20) {
a1.style.color = 'black';
a1.style.fontSize = '100%'
a2.style.color = '#005858';
a2.style.fontSize = '115%';  //azul //2
} 

if(tiempoDeVideo > 24) {
a2.style.color = 'black';
a2.style.fontSize = '100%'
a1.style.color = '#005858'; 
a1.style.fontSize = '115%'; //naranja //3
} 

if(tiempoDeVideo > 28) {
a1.style.color = 'black';           //4
a2.style.color = '#005858';
a1.style.fontSize = '100%'; 
a2.style.fontSize = '115%'; 

} 
 
if(tiempoDeVideo > 32) {
a2.style.color = 'black';           //7
a3.style.color = '#005858';
a2.style.fontSize = '100%'; 
a3.style.fontSize = '115%'; 
} 
 
if(tiempoDeVideo > 37) {
a3.style.color = 'black';           //3
a4.style.color = '#005858';
a3.style.fontSize = '100%'; 
a4.style.fontSize = '115%'; 
} 
 

if(tiempoDeVideo > 41) {
a4.style.color = 'black';           //6
a3.style.color = '#005858';
a4.style.fontSize = '100%'; 
a3.style.fontSize = '115%'; 
} 
 


if(tiempoDeVideo > 45) {  
a3.style.color = 'black';           //7
a4.style.color = '#005858';
a3.style.fontSize = '100%'; 
a4.style.fontSize = '115%'; 
}

  
if(tiempoDeVideo > 49.5) {
a4.style.color = 'black';           //3
a5.style.color = '#005858';
a4.style.fontSize = '100%'; 
a5.style.fontSize = '115%'; 
}
  
if(tiempoDeVideo > 51) {
a5.style.color = 'black';           //6
a6.style.color = '#005858';
a5.style.fontSize = '100%'; 
a6.style.fontSize = '115%'; 

} 
  
if(tiempoDeVideo > 53) {
a6.style.color = 'black';           //7
a5.style.color = '#005858';
a6.style.fontSize = '100%'; 
a5.style.fontSize = '115%'; 
}
/*
 
if(tiempoDeVideo > 118) {
            //7
a9.style.textDecoration = 'underline';
a12.style.color = 'black';
 
}
   
*/  

  
if(tiempoDeVideo > 55) {
a5.style.color = 'black';           //3
a6.style.color = '#005858';
a5.style.fontSize = '100%'; 
a6.style.fontSize = '115%'; 
} 
  
if(tiempoDeVideo > 57) {
a6.style.color = 'black';           //3
a7.style.color = '#005858';
a6.style.fontSize = '100%'; 
a7.style.fontSize = '115%'; 
} 


 
if(tiempoDeVideo > 60) {
          
a8.style.textDecoration = 'underline';
a7.style.color = 'black';
a7.style.fontSize = '100%'; 
 
}
   
  

   
 
if(tiempoDeVideo > 68) {
           
a8.style.color = '#005858';
 
a8.style.fontSize = '115%'; 
a8.style.textDecoration = 'none';
} 


if(tiempoDeVideo > 72) {
a8.style.color = 'black';           //6
a9.style.color = '#005858';
a8.style.fontSize = '100%'; 
a9.style.fontSize = '115%'; 

} 
   
if(tiempoDeVideo > 76) {
a9.style.color = 'black';           //6
a8.style.color = '#005858';
a9.style.fontSize = '100%'; 
a8.style.fontSize = '115%'; 
} 
  
 
if(tiempoDeVideo > 80) {
a8.style.color = 'black';           //3
a9.style.color = '#005858';
a8.style.fontSize = '100%'; 
a9.style.fontSize = '115%'; 
} 

if(tiempoDeVideo > 84) {
a9.style.color = 'black';           //3
a10.style.color = '#005858';
a9.style.fontSize = '100%'; 
a10.style.fontSize = '115%'; 
} 
 
 
if(tiempoDeVideo > 88) {  
a10.style.color = 'black';           //7
a11.style.color = '#005858';
a10.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 
}
   
if(tiempoDeVideo > 93) {  
a11.style.color = 'black';           //7
a10.style.color = '#005858';
a11.style.fontSize = '100%'; 
a10.style.fontSize = '115%'; 
}
 
 
if(tiempoDeVideo > 97) {  
a10.style.color = 'black';           //7
a11.style.color = '#005858';
a10.style.fontSize = '100%'; 
a11.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 101) {  
a11.style.color = 'black';           //7
a12.style.color = '#005858';
a11.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
}

 
if(tiempoDeVideo > 103) {  
a12.style.color = 'black';           //7
a13.style.color = '#005858';
a12.style.fontSize = '100%'; 
a13.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 105) {  
a13.style.color = 'black';           //7
a12.style.color = '#005858';
a13.style.fontSize = '100%'; 
a12.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 107) {  
a12.style.color = 'black';           //7
a13.style.color = '#005858';
a12.style.fontSize = '100%'; 
a13.style.fontSize = '115%'; 
}

if(tiempoDeVideo > 109) {  
a13.style.color = 'black';           //7
a14.style.color = '#005858';
a13.style.fontSize = '100%'; 
a14.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 114) {  
a14.style.color = 'black';           //7
a14.style.fontSize = '100%'; 
a15.style.textDecoration = 'underline'; 
}
 
if(tiempoDeVideo > 130) {  
             
a15.style.color = '#005858';
a15.style.textDecoration = 'none';
a15.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 134) {  
a15.style.color = 'black';           //7
a16.style.color = '#005858';
a15.style.fontSize = '100%'; 
a16.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 138) {  
a16.style.color = 'black';           //7
a15.style.color = '#005858';
a16.style.fontSize = '100%'; 
a15.style.fontSize = '115%'; 
}

 
if(tiempoDeVideo > 142) {  
a15.style.color = 'black';           //7
a16.style.color = '#005858';
a15.style.fontSize = '100%'; 
a16.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 146) {  
a16.style.color = 'black';           //7
a17.style.color = '#005858';
a16.style.fontSize = '100%'; 
a17.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 150) {  
a17.style.color = 'black';           //7
a18.style.color = '#005858';
a17.style.fontSize = '100%'; 
a18.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 154) {  
a18.style.color = 'black';           //7
a17.style.color = '#005858';
a18.style.fontSize = '100%'; 
a17.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 159) {  
a17.style.color = 'black';           //7
a18.style.color = '#005858';
a17.style.fontSize = '100%'; 
a18.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 163) {  
a18.style.color = 'black';           //7
a19.style.color = '#005858';
a18.style.fontSize = '100%'; 
a19.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 165.5) {  
a19.style.color = 'black';           //7
a20.style.color = '#005858';
a19.style.fontSize = '100%'; 
a20.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 167) {  
a20.style.color = 'black';           //7
a19.style.color = '#005858';
a20.style.fontSize = '100%'; 
a19.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 169) {  
a19.style.color = 'black';           //7
a20.style.color = '#005858';
a19.style.fontSize = '100%'; 
a20.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 171.5) {  
a20.style.color = 'black';           //7
a21.style.color = '#005858';
a20.style.fontSize = '100%'; 
a21.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 173.5) {  
a21.style.color = 'black';           //7
a19.style.color = '#005858';
a21.style.fontSize = '100%'; 
a19.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 175.5) {  
a19.style.color = 'black';           //7
a20.style.color = '#005858';
a19.style.fontSize = '100%'; 
a20.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 177.5) {  
a20.style.color = 'black';           //7
a19.style.color = '#005858';
a20.style.fontSize = '100%'; 
a19.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 179.5) {  
a19.style.color = 'black';           //7
a20.style.color = '#005858';
a19.style.fontSize = '100%'; 
a20.style.fontSize = '115%'; 
}
 
if(tiempoDeVideo > 182) {  
a20.style.color = 'black';           //7
a21.style.color = '#005858';
a20.style.fontSize = '100%'; 
a21.style.fontSize = '115%'; 
}
 
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