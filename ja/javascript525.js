
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'vesnv_7vdzU',
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

 
  
  if(tiempoDeVideo > 16) {
    a1.style.color = '#ed2939';
    a1.style.fontSize = '115%'; //rojo    //1
  } 

  if(tiempoDeVideo > 20) {
    a1.style.color = 'black';
    a1.style.fontSize = '100%'
    a2.style.color = '#005caa';
    a2.style.fontSize = '115%';  //azul //2
  } 
  if(tiempoDeVideo > 24) {
    a2.style.color = 'black';
    a2.style.fontSize = '100%'
   a3.style.color = '#f37736'; 
   a3.style.fontSize = '115%'; //naranja //3
  } 

   if(tiempoDeVideo > 28) {
    a3.style.color = 'black';           //4
    a4.style.color = '#ed2939';
    a3.style.fontSize = '100%'; 
    a4.style.fontSize = '115%'; 
    
   } 

   if(tiempoDeVideo > 32) {
    a4.style.color = 'black';           //5
    a5.style.color = '#005caa';
    a4.style.fontSize = '100%'; 
    a5.style.fontSize = '115%'; 
   } 

  if(tiempoDeVideo > 36) {
    a5.style.color = 'black';           //6
    a6.style.color = '#f37736';
    a5.style.fontSize = '100%'; 
    a6.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 40) {
    a6.style.color = 'black';           //7
   a7.style.color = '#ed2939';
   a6.style.fontSize = '100%';  //naranja
   a7.style.fontSize = '115%'; 
  } 

   if(tiempoDeVideo > 44) {
    a7.style.color = 'black';           //3
    a8.style.color = '#005caa';
    a7.style.fontSize = '100%'; 
    a8.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 48) {
    a8.style.color = 'black';           //6
    a9.style.color = '#f37736';
    a8.style.fontSize = '100%'; 
    a9.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 52) {
    a9.style.color = 'black';           //7
    a10.style.color = '#ed2939';
    a9.style.fontSize = '100%'; 
    a10.style.fontSize = '115%'; 
  } 
 
  if(tiempoDeVideo > 57) {
    a10.style.color = 'black';           //4
    a11.style.textDecoration = 'underline';
    a10.style.fontSize = '100%'; 
   } 
 

if(tiempoDeVideo > 63.5) {
    a11.style.color = '#005caa';   
     a11.style.textDecoration = 'none';  
     a11.style.fontSize = '115%';       //4
    
   } 
 
  if(tiempoDeVideo > 68) {
    a11.style.color = 'black';           //3
    a12.style.color = '#f37736';
    a11.style.fontSize = '100%'; 
    a12.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 72) {
    a12.style.color = 'black';           //6
    a13.style.color = '#ed2939';
    a12.style.fontSize = '100%'; 
    a13.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 76) { //////////////////////////////////////////////////////////////////////
    a13.style.color = 'black';           //7
    a14.style.color = '#005caa';
    a13.style.fontSize = '100%'; 
    a14.style.fontSize = '115%'; 
  }


  if(tiempoDeVideo > 80) {
    a14.style.color = 'black';           //3
    a15.style.color = '#f37736';
    a14.style.fontSize = '100%'; 
    a15.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 84.5) {
    a15.style.color = 'black';           //6
    a16.style.color = '#ed2939';
    a15.style.fontSize = '100%'; 
    a16.style.fontSize = '115%'; 

  } 

  if(tiempoDeVideo > 88.5) {
    a16.style.color = 'black';           //7
    a17.style.color = '#005caa';
    a16.style.fontSize = '100%'; 
    a17.style.fontSize = '115%'; 
  }


  
  if(tiempoDeVideo > 92) {
    a17.style.color = 'black';           //3
    a18.style.color = '#f37736';
    a17.style.fontSize = '100%'; 
    a18.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 96) {
    a18.style.color = 'black';           //6
    a19.style.color = '#ed2939';
    a18.style.fontSize = '100%'; 
    a19.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 99.5) {
    a19.style.color = 'black';           //7
    a20.style.color = '#005caa';
    a20.style.fontSize = '115%'; 
    a19.style.fontSize = '100%'; 
  }


  if(tiempoDeVideo > 105) {
    a20.style.color = 'black';           //3
    a21.style.textDecoration = 'underline';
    a20.style.fontSize = '100%'; 
   } 


  if(tiempoDeVideo > 128.5) {
    a21.style.color = '#f37736';           //6
    a21.style.textDecoration = 'none'; 
    a21.style.fontSize = '115%';   
    
  } 

  if(tiempoDeVideo > 132) {
    a21.style.color = 'black';           //7
    a22.style.color = '#ed2939';
    a22.style.fontSize = '115%'; 
    a21.style.fontSize = '100%'; 
  }



if(tiempoDeVideo > 136.5) {
    a22.style.color = 'black';           //7
    a23.style.color = '#005caa';
    a23.style.fontSize = '115%'; 
    a22.style.fontSize = '100%'; 
  }


  if(tiempoDeVideo > 140.5) {
    a23.style.color = 'black';           //3
    a24.style.color = '#f37736';
    a24.style.fontSize = '115%'; 
    a23.style.fontSize = '100%'; 
   } 
 

  if(tiempoDeVideo > 143.5) {
    a24.style.color = 'black';           //6
    a25.style.color = '#ed2939';
    a25.style.fontSize = '115%'; 
    a24.style.fontSize = '100%'; 
  } 

  if(tiempoDeVideo > 148) {
    a25.style.color = 'black';           //7
    a26.style.color = '#005caa';
    a26.style.fontSize = '115%'; 
    a25.style.fontSize = '100%'; 
  }


  
  if(tiempoDeVideo > 152) {
    a26.style.color = 'black';           //3
    a27.style.color = '#f37736';
    a27.style.fontSize = '115%'; 
    a26.style.fontSize = '100%'; 
   } 


  if(tiempoDeVideo > 156) {
    a27.style.color = 'black';           //6
    a28.style.color = '#ed2939';
    a28.style.fontSize = '115%'; 
    a27.style.fontSize = '100%'; 
  } 


  if(tiempoDeVideo > 160) {
    a28.style.color = 'black';           //3
    a29.style.color = '#005caa';
    a29.style.fontSize = '115%'; 
    a28.style.fontSize = '100%'; 
   } 
 

  if(tiempoDeVideo > 164) {
    a29.style.color = 'black';           //6
    a30.style.color = '#f37736';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
  } 

  if(tiempoDeVideo > 168) {
    a30.style.color = 'black';           //7
    a31.style.color = '#ed2939';
    a31.style.fontSize = '115%'; 
    a30.style.fontSize = '100%'; 
  }


  if(tiempoDeVideo > 172) {
    a31.style.color = 'black';           //3
    a32.style.color = '#005caa';
    a32.style.fontSize = '115%'; 
    a31.style.fontSize = '100%'; 
   } 
 

  if(tiempoDeVideo > 178) {
    a32.style.color = 'black'; 
    a32.style.fontSize = '100%';           //6
  
  } 

  /*
  if(tiempoDeVideo > 88.5) {
    a16.style.color = 'black';           //7
    a17.style.color = '#ed2939';
  }


  
  if(tiempoDeVideo > 92) {
    a17.style.color = 'black';           //3
    a18.style.color = '#ed2939';
   } 
 

  if(tiempoDeVideo > 96) {
    a18.style.color = 'black';           //6
    a19.style.color = '#ed2939';
  } 

  if(tiempoDeVideo > 99.5) {
    a19.style.color = 'black';           //7
    a20.style.color = '#ed2939';
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
