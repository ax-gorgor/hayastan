 
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     height: '100%',
     width: '48%',
     videoId: 'gS3_zN_dJnY',
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
 var a75 = document.getElementById('a75');
 
  
 
 function colorText() {


  var tiempoDeVideo = player.getCurrentTime();

 
  
  if(tiempoDeVideo > 38) {
    a1.style.color = '#ed2939';
    a1.style.fontSize = '115%'; //rojo    //1
  } 

  if(tiempoDeVideo > 40) {
    a1.style.color = 'black';
    a1.style.fontSize = '100%'
    a2.style.color = '#ed2939';
    a2.style.fontSize = '115%';  //azul //2
  } 
  if(tiempoDeVideo > 42) {
    a2.style.color = 'black';
    a2.style.fontSize = '100%'
   a3.style.color = '#ed2939'; 
   a3.style.fontSize = '115%'; //naranja //3
  } 

   if(tiempoDeVideo > 44) {
    a3.style.color = 'black';           //4
    a4.style.color = '#ed2939';
    a3.style.fontSize = '100%'; 
    a4.style.fontSize = '115%'; 
    
   } 

   if(tiempoDeVideo > 46.5) {
    a4.style.color = 'black';           //5
    a5.style.color = '#ed2939';
    a4.style.fontSize = '100%'; 
    a5.style.fontSize = '115%'; 
   } 

  if(tiempoDeVideo > 49) {
    a5.style.color = 'black';           //6
    a6.style.color = '#ed2939';
    a5.style.fontSize = '100%'; 
    a6.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 51) {
    a6.style.color = 'black';           //7
   a7.style.color = '#ed2939';
   a6.style.fontSize = '100%';  //naranja
   a7.style.fontSize = '115%'; 
  } 

   if(tiempoDeVideo > 53) {
    a7.style.color = 'black';           //3
    a8.style.color = '#ed2939';
    a7.style.fontSize = '100%'; 
    a8.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 55) {
    a8.style.color = 'black';           //6
    a9.style.color = '#ed2939';
    a8.style.fontSize = '100%'; 
    a9.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 57) {
    a9.style.color = 'black';           //7
    a10.style.color = '#ed2939';
    a9.style.fontSize = '100%'; 
    a10.style.fontSize = '115%'; 
  } 
 
  /*if(tiempoDeVideo > 57) {
    a10.style.color = 'black';           //4
    a11.style.textDecoration = 'underline';
    a10.style.fontSize = '100%'; 
   } 
 

if(tiempoDeVideo > 63.5) {
    a11.style.color = '#005caa';   
     a11.style.textDecoration = 'none';  
     a11.style.fontSize = '115%';       //4
    
   } */
 
  if(tiempoDeVideo > 59.5) {
    a10.style.color = 'black';           //3
    a11.style.color = '#ed2939';
    a10.style.fontSize = '100%'; 
    a11.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 61.5) {
    a11.style.color = 'black';           //6
    a12.style.color = '#ed2939';
    a11.style.fontSize = '100%'; 
    a12.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 63.5) {  
    a12.style.color = 'black';            
    a13.style.color = '#ed2939';
    a12.style.fontSize = '100%'; 
    a13.style.fontSize = '115%'; 
  }


  if(tiempoDeVideo > 66) {
    a13.style.color = 'black';           //3
    a14.style.color = '#ed2939';
    a13.style.fontSize = '100%'; 
    a14.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 68) {
    a14.style.color = 'black';           //6
    a15.style.color = '#ed2939';
    a14.style.fontSize = '100%'; 
    a15.style.fontSize = '115%'; 

  } 
 
  if(tiempoDeVideo > 72) {
    a15.style.color = 'black';           //7
    a16.style.color = '#ed2939';
    a15.style.fontSize = '100%'; 
    a16.style.fontSize = '115%'; 
  }

 
  
  if(tiempoDeVideo > 75) {
    a16.style.color = 'black';           //3
    a17.style.color = '#ed2939';
    a16.style.fontSize = '100%'; 
    a17.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 77.5) {
    a17.style.color = 'black';           //6
    a18.style.color = '#ed2939';
    a17.style.fontSize = '100%'; 
    a18.style.fontSize = '115%'; 
  } 
 
  if(tiempoDeVideo > 79.5) {
    a18.style.color = 'black';           //7
    a19.style.color = '#ed2939';
    a19.style.fontSize = '115%'; 
    a18.style.fontSize = '100%'; 
  }
 

  if(tiempoDeVideo > 81.5) {
    a19.style.color = 'black';           //7
    a20.style.color = '#ed2939';
    a20.style.fontSize = '115%'; 
    a19.style.fontSize = '100%'; 
  }
 
if(tiempoDeVideo > 84) {
    a20.style.color = 'black';           //7
    a21.style.color = '#ed2939';
    a21.style.fontSize = '115%'; 
    a20.style.fontSize = '100%'; 
  }
 
  if(tiempoDeVideo > 85.5) {
    a21.style.color = 'black';           //3
    a22.style.color = '#ed2939';
    a22.style.fontSize = '115%'; 
    a21.style.fontSize = '100%'; 
   } 
 

  if(tiempoDeVideo > 87.5) {
    a22.style.color = 'black';           //6
    a23.style.color = '#ed2939';
    a23.style.fontSize = '115%'; 
    a22.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 90) {
    a23.style.color = 'black';           //7
    a24.style.color = '#ed2939';
    a24.style.fontSize = '115%'; 
    a23.style.fontSize = '100%'; 
  }
 

  if(tiempoDeVideo > 92.5) {
    a24.style.color = 'black';           //3
    a25.style.color = '#ed2939';
    a25.style.fontSize = '115%'; 
    a24.style.fontSize = '100%'; 
   } 

 
  if(tiempoDeVideo > 94.5) {
    a25.style.color = 'black';           //6
    a26.style.color = '#ed2939';
    a26.style.fontSize = '115%'; 
    a25.style.fontSize = '100%'; 
  } 
 

  if(tiempoDeVideo > 97) {
    a26.style.color = 'black';           //3
    a27.style.color = '#ed2939';
    a27.style.fontSize = '115%'; 
    a26.style.fontSize = '100%'; 
   }  

  if(tiempoDeVideo > 99) {
    a27.style.color = 'black';           //6
    a28.style.color = '#f37736';
    a28.style.fontSize = '115%'; 
    a27.style.fontSize = '100%'; 
  } 

  
  if(tiempoDeVideo > 102) {
    a28.style.color = 'black';           //7
    a29.style.color = '#ed2939';
    a29.style.fontSize = '115%'; 
    a28.style.fontSize = '100%'; 
  }

 
  if(tiempoDeVideo > 103) {
    a29.style.color = 'black';           //3
    a30.style.color = '#005caa';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 38) {
    a1.style.color = '#ed2939';
    a1.style.fontSize = '115%'; //rojo    //1
  } 

  if(tiempoDeVideo > 40) {
    a1.style.color = 'black';
    a1.style.fontSize = '100%'
    a2.style.color = '#ed2939';
    a2.style.fontSize = '115%';  //azul //2
  } 
  if(tiempoDeVideo > 42) {
    a2.style.color = 'black';
    a2.style.fontSize = '100%'
   a3.style.color = '#ed2939'; 
   a3.style.fontSize = '115%'; //naranja //3
  } 

   if(tiempoDeVideo > 44) {
    a3.style.color = 'black';           //4
    a4.style.color = '#ed2939';
    a3.style.fontSize = '100%'; 
    a4.style.fontSize = '115%'; 
    
   } 

   if(tiempoDeVideo > 46.5) {
    a4.style.color = 'black';           //5
    a5.style.color = '#ed2939';
    a4.style.fontSize = '100%'; 
    a5.style.fontSize = '115%'; 
   } 

  if(tiempoDeVideo > 49) {
    a5.style.color = 'black';           //6
    a6.style.color = '#ed2939';
    a5.style.fontSize = '100%'; 
    a6.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 51) {
    a6.style.color = 'black';           //7
   a7.style.color = '#ed2939';
   a6.style.fontSize = '100%';  //naranja
   a7.style.fontSize = '115%'; 
  } 

   if(tiempoDeVideo > 53) {
    a7.style.color = 'black';           //3
    a8.style.color = '#ed2939';
    a7.style.fontSize = '100%'; 
    a8.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 55) {
    a8.style.color = 'black';           //6
    a9.style.color = '#ed2939';
    a8.style.fontSize = '100%'; 
    a9.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 57) {
    a9.style.color = 'black';           //7
    a10.style.color = '#ed2939';
    a9.style.fontSize = '100%'; 
    a10.style.fontSize = '115%'; 
  } 
 
  /*if(tiempoDeVideo > 57) {
    a10.style.color = 'black';           //4
    a11.style.textDecoration = 'underline';
    a10.style.fontSize = '100%'; 
   } 
 

if(tiempoDeVideo > 63.5) {
    a11.style.color = '#005caa';   
     a11.style.textDecoration = 'none';  
     a11.style.fontSize = '115%';       //4
    
   } */
 
  if(tiempoDeVideo > 59.5) {
    a10.style.color = 'black';           //3
    a11.style.color = '#ed2939';
    a10.style.fontSize = '100%'; 
    a11.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 61.5) {
    a11.style.color = 'black';           //6
    a12.style.color = '#ed2939';
    a11.style.fontSize = '100%'; 
    a12.style.fontSize = '115%'; 
  } 

  if(tiempoDeVideo > 63.5) {  
    a12.style.color = 'black';            
    a13.style.color = '#ed2939';
    a12.style.fontSize = '100%'; 
    a13.style.fontSize = '115%'; 
  }


  if(tiempoDeVideo > 66) {
    a13.style.color = 'black';           //3
    a14.style.color = '#ed2939';
    a13.style.fontSize = '100%'; 
    a14.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 68) {
    a14.style.color = 'black';           //6
    a15.style.color = '#ed2939';
    a14.style.fontSize = '100%'; 
    a15.style.fontSize = '115%'; 

  } 
 
  if(tiempoDeVideo > 72) {
    a15.style.color = 'black';           //7
    a16.style.color = '#ed2939';
    a15.style.fontSize = '100%'; 
    a16.style.fontSize = '115%'; 
  }

 
  
  if(tiempoDeVideo > 75) {
    a16.style.color = 'black';           //3
    a17.style.color = '#ed2939';
    a16.style.fontSize = '100%'; 
    a17.style.fontSize = '115%'; 
   } 
 

  if(tiempoDeVideo > 77.5) {
    a17.style.color = 'black';           //6
    a18.style.color = '#ed2939';
    a17.style.fontSize = '100%'; 
    a18.style.fontSize = '115%'; 
  } 
 
  if(tiempoDeVideo > 79.5) {
    a18.style.color = 'black';           //7
    a19.style.color = '#ed2939';
    a19.style.fontSize = '115%'; 
    a18.style.fontSize = '100%'; 
  }
 

  if(tiempoDeVideo > 81.5) {
    a19.style.color = 'black';           //7
    a20.style.color = '#ed2939';
    a20.style.fontSize = '115%'; 
    a19.style.fontSize = '100%'; 
  }
 
if(tiempoDeVideo > 84) {
    a20.style.color = 'black';           //7
    a21.style.color = '#ed2939';
    a21.style.fontSize = '115%'; 
    a20.style.fontSize = '100%'; 
  }
 
  if(tiempoDeVideo > 85.5) {
    a21.style.color = 'black';           //3
    a22.style.color = '#ed2939';
    a22.style.fontSize = '115%'; 
    a21.style.fontSize = '100%'; 
   } 
 

  if(tiempoDeVideo > 87.5) {
    a22.style.color = 'black';           //6
    a23.style.color = '#ed2939';
    a23.style.fontSize = '115%'; 
    a22.style.fontSize = '100%'; 
  } 
 
  if(tiempoDeVideo > 90) {
    a23.style.color = 'black';           //7
    a24.style.color = '#ed2939';
    a24.style.fontSize = '115%'; 
    a23.style.fontSize = '100%'; 
  }
 

  if(tiempoDeVideo > 92.5) {
    a24.style.color = 'black';           //3
    a25.style.color = '#ed2939';
    a25.style.fontSize = '115%'; 
    a24.style.fontSize = '100%'; 
   } 

 
  if(tiempoDeVideo > 94.5) {
    a25.style.color = 'black';           //6
    a26.style.color = '#ed2939';
    a26.style.fontSize = '115%'; 
    a25.style.fontSize = '100%'; 
  } 
 

  if(tiempoDeVideo > 97) {
    a26.style.color = 'black';           //3
    a27.style.color = '#ed2939';
    a27.style.fontSize = '115%'; 
    a26.style.fontSize = '100%'; 
   }  

  if(tiempoDeVideo > 99) {
    a27.style.color = 'black';           //6
    a28.style.color = '#ed2939';
    a28.style.fontSize = '115%'; 
    a27.style.fontSize = '100%'; 
  } 

  
  if(tiempoDeVideo > 102) {
    a28.style.color = 'black';           //7
    a29.style.color = '#ed2939';
    a29.style.fontSize = '115%'; 
    a28.style.fontSize = '100%'; 
  }

 
  if(tiempoDeVideo > 103) {
    a29.style.color = 'black';           //3
    a30.style.color = '#ed2939';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
   } 
  
   if(tiempoDeVideo > 106) {
    a30.style.color = 'black';           //7
    a31.style.color = '#ed2939';
    a31.style.fontSize = '115%'; 
    a30.style.fontSize = '100%'; 
    a32.style.color = 'white';
  }
 

if(tiempoDeVideo > 108) {
     
    a31.style.color = 'black';          //4
    a31.style.fontSize = '100%';
    a32.style.color = '#0000ff'; 
   } 

   if(tiempoDeVideo > 108.5) {
    a32.style.color = 'white';           //4
    
    a32.style.fontSize = '100%'; 
   }

   if(tiempoDeVideo > 109) {
    a32.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 109.5) {
    a32.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 110) {
    a32.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 110.5) {
    a32.style.color = 'white';           //4
    } 

   if(tiempoDeVideo > 111) {
    a32.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 111.5) {
    a32.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 112) {
    a32.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 112.5) {
    a32.style.color = 'white';           //4
    }

     if(tiempoDeVideo > 113) {
    a32.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 113.5) {
    a32.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 114) {
    a32.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 114.5) {
    a32.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 115) {
    a32.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 115.5) {
    a32.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 116) {
    a32.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 116.5) {
    a32.style.color = 'white';           //4
    }

     if(tiempoDeVideo > 117) {
    a32.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 117.5) {
    a32.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 118) {
    a32.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 118.5) {
    a32.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 119) {
    a32.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 119.5) {
    a32.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 120) {
    a32.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 120.5) {
    a32.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 121) {
    a32.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 121.5) {
    a32.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 122) {
    a32.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 122.5) {
    a32.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 123) {
    a32.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 123.5) {
    a32.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 124) {
    a32.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 124.5) {
    a32.style.color = 'white';           //4
    }
    
    if(tiempoDeVideo > 125) {
                //7
      a32.style.color = '#ed2939';
      a32.style.fontSize = '115%'; 
 
    }

    if(tiempoDeVideo > 127.5) {
      a32.style.color = 'black';           //3
      a33.style.color = '#ed2939';
      a33.style.fontSize = '115%'; 
      a32.style.fontSize = '100%'; 
     } 

     if(tiempoDeVideo > 129.5) {
      a33.style.color = 'black';           //3
      a34.style.color = '#ed2939';
      a34.style.fontSize = '115%'; 
      a33.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 131.5) {
      a34.style.color = 'black';           //3
      a35.style.color = '#ed2939';
      a35.style.fontSize = '115%'; 
      a34.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 133.5) {
      a35.style.color = 'black';           //3
      a36.style.color = '#ed2939';
      a36.style.fontSize = '115%'; 
      a35.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 136) {
      a36.style.color = 'black';           //3
      a37.style.color = '#ed2939';
      a37.style.fontSize = '115%'; 
      a36.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 138) {
      a37.style.color = 'black';           //3
      a38.style.color = '#ed2939';
      a38.style.fontSize = '115%'; 
      a37.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 140) {
      a38.style.color = 'black';           //3
      a39.style.color = '#ed2939';
      a39.style.fontSize = '115%'; 
      a38.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 142) {
      a39.style.color = 'black';           //3
      a40.style.color = '#ed2939';
      a40.style.fontSize = '115%'; 
      a39.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 144) {
      a40.style.color = 'black';           //3
      a41.style.color = '#ed2939';
      a41.style.fontSize = '115%'; 
      a40.style.fontSize = '100%'; 
     }

   

     if(tiempoDeVideo > 147) {
      a41.style.color = 'black';           //3
      a42.style.color = '#ed2939';
      a42.style.fontSize = '115%'; 
      a41.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 151) {
      a42.style.color = 'black';           //3
      a43.style.color = '#ed2939';
      a43.style.fontSize = '115%'; 
      a42.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 153) {
      a43.style.color = 'black';           //3
      a44.style.color = '#ed2939';
      a44.style.fontSize = '115%'; 
      a43.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 155) {
      a44.style.color = 'black';           //3
      a45.style.color = '#ed2939';
      a45.style.fontSize = '115%'; 
      a44.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 158) {
      a45.style.color = 'black';           //3
      a46.style.color = '#ed2939';
      a46.style.fontSize = '115%'; 
      a45.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 160) {
      a46.style.color = 'black';           //3
      a47.style.color = '#ed2939';
      a47.style.fontSize = '115%'; 
      a46.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 162) {
      a47.style.color = 'black';           //3
      a48.style.color = '#ed2939';
      a48.style.fontSize = '115%'; 
      a47.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 164) {
      a48.style.color = 'black';           //3
      a49.style.color = '#ed2939';
      a49.style.fontSize = '115%'; 
      a48.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 166) {
      a49.style.color = 'black';           //3
      a50.style.color = '#ed2939';
      a50.style.fontSize = '115%'; 
      a49.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 168) {
      a50.style.color = 'black';           //3
      a51.style.color = '#ed2939';
      a51.style.fontSize = '115%'; 
      a50.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 171) {
      a51.style.color = 'black';           //3
      a52.style.color = '#ed2939';
      a52.style.fontSize = '115%'; 
      a51.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 173) {
      a52.style.color = 'black';           //3
      a53.style.color = '#ed2939';
      a53.style.fontSize = '115%'; 
      a52.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 175) {
      a53.style.color = 'black';           //3
      a54.style.color = '#ed2939';
      a54.style.fontSize = '115%'; 
      a53.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 177) {
      a54.style.color = 'black';           //3
      a55.style.color = '#ed2939';
      a55.style.fontSize = '115%'; 
      a54.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 180) {
      a55.style.color = 'black';           //3
      a56.style.color = '#ed2939';
      a56.style.fontSize = '115%'; 
      a55.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 181) {
      a56.style.color = 'black';           //3
      a57.style.color = '#ed2939';
      a57.style.fontSize = '115%'; 
      a56.style.fontSize = '100%'; 
     }

     if(tiempoDeVideo > 183) {
      a57.style.color = 'black';           //3
      a58.style.color = '#ed2939';
      a58.style.fontSize = '115%'; 
      a57.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 185.5) {
     
      a59.style.color = 'white';
       
     } 
 
   if(tiempoDeVideo > 186) {
     
    a59.style.color = '#0000ff';  
    a58.style.color = 'black';        //4
     
   } 
 
   if(tiempoDeVideo > 186.5) {
    a59.style.color = 'white';
               //4
    
     }
 

   if(tiempoDeVideo > 187) {
    a59.style.color = '#0000ff';           //4
     }
     

   if(tiempoDeVideo > 187.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 188) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 188.5) {
    a59.style.color = 'white';           //4
    } 

   if(tiempoDeVideo > 189) {
    a59.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 189.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 190) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 190.5) {
    a59.style.color = 'white';           //4
    }

     if(tiempoDeVideo > 191) {
    a59.style.color = '#0000ff';           //4
     
    a32.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 191.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 192) {
    a59.style.color = '#0000ff';           //4
     } 
 
   if(tiempoDeVideo > 192.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 193) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 193.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 194) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 194.5) {
    a59.style.color = 'white';           //4
    }

     if(tiempoDeVideo > 195) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 196.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 197) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 197.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 198) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 198.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 199) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 199.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 200) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 200.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 201) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 201.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 202) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 202.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 203) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 203.5) {
    a59.style.color = 'white';           //4
    }

    if(tiempoDeVideo > 204) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 204.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 205) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 205.5) {
    a59.style.color = 'white';           //4
    }

     if(tiempoDeVideo > 206) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 206.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 207) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 207.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 208) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 208.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 209) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 209.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 210) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 210.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 211) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 211.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 212) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 212.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 213) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 213.5) {
    a59.style.color = 'white';           //4
    }
 
    
     if(tiempoDeVideo > 214) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 214.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 215) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 215.5) {
    a59.style.color = 'white';           //4
    }

     if(tiempoDeVideo > 216) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 216.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 217) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 217.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 218) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 218.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 219) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 219.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 220) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 220.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 221) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 221.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 222) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 222.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 223) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 223.5) {
    a59.style.color = 'white';           //4
    }

    if(tiempoDeVideo > 224) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 224.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 225) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 225.5) {
    a59.style.color = 'white';           //4
    }

     if(tiempoDeVideo > 226) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 226.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 227) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 227.5) {
    a59.style.color = 'white';           //4
    }
    
     if(tiempoDeVideo > 228) {
    a59.style.color = '#0000ff';           //4
     
    a59.style.fontSize = '100%'; 
   } 

   if(tiempoDeVideo > 228.5) {
    a59.style.color = 'white';           //4
    }

   if(tiempoDeVideo > 229) {
    a59.style.color = '#0000ff';           //4
     } 

   if(tiempoDeVideo > 229.5) {
    a59.style.color = 'white';           //4
    }
    
     
 
   if(tiempoDeVideo > 230 ) {
             //3
    a59.style.color = '#ed2939';
    a59.style.fontSize = '115%'; 
    
    
   }
      

 if(tiempoDeVideo > 232 ) {
      a59.style.color = 'black';           //3
      a60.style.color = '#ed2939';
      a60.style.fontSize = '115%'; 
      a59.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 234 ) {
      a60.style.color = 'black';           //3
      a61.style.color = '#ed2939';
      a61.style.fontSize = '115%'; 
      a60.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 236.5 ) {
      a61.style.color = 'black';           //3
      a62.style.color = '#ed2939';
      a62.style.fontSize = '115%'; 
      a61.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 238 ) {
      a62.style.color = 'black';           //3
      a63.style.color = '#ed2939';
      a63.style.fontSize = '115%'; 
      a62.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 241 ) {
      a63.style.color = 'black';           //3
      a64.style.color = '#ed2939';
      a64.style.fontSize = '115%'; 
      a63.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 243 ) {
      a64.style.color = 'black';           //3
      a65.style.color = '#ed2939';
      a65.style.fontSize = '115%'; 
      a64.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 244 ) {
      a65.style.color = 'black';           //3
      a66.style.color = '#ed2939';
      a66.style.fontSize = '115%'; 
      a65.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 247 ) {
      a66.style.color = 'black';           //3
      a67.style.color = '#ed2939';
      a67.style.fontSize = '115%'; 
      a66.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 249 ) {
      a67.style.color = 'black';           //3
      a68.style.color = '#ed2939';
      a68.style.fontSize = '115%'; 
      a67.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 251.5 ) {
      a68.style.color = 'black';           //3
      a69.style.color = '#ed2939';
      a69.style.fontSize = '115%'; 
      a68.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 254 ) {
      a69.style.color = 'black';           //3
      a70.style.color = '#ed2939';
      a70.style.fontSize = '115%'; 
      a69.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 256 ) {
      a70.style.color = 'black';           //3
      a71.style.color = '#ed2939';
      a71.style.fontSize = '115%'; 
      a70.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 259 ) {
      a71.style.color = 'black';           //3
      a72.style.color = '#ed2939';
      a72.style.fontSize = '115%'; 
      a71.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 260.5 ) {
      a72.style.color = 'black';           //3
      a73.style.color = '#ed2939';
      a73.style.fontSize = '115%'; 
      a72.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 261.5 ) {
      a73.style.color = 'black';           //3
      a74.style.color = '#ed2939';
      a74.style.fontSize = '115%'; 
      a73.style.fontSize = '100%'; 
      
     }

     if(tiempoDeVideo > 266 ) {
      a74.style.color = 'black';           //3
      a74.style.fontSize = '100%'; 
      
     }




/*
if(tiempoDeVideo > 63.5) {
    a11.style.color = '#005caa';   
     a11.style.textDecoration = 'none';  
     a11.style.fontSize = '115%';       //4
    
   }
 
  if(tiempoDeVideo > 103) {
    a29.style.color = 'black';           //3
    a30.style.color = '#005caa';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
   } 

     if(tiempoDeVideo > 102) {
    a28.style.color = 'black';           //7
    a29.style.color = '#ed2939';
    a29.style.fontSize = '115%'; 
    a28.style.fontSize = '100%'; 
  }

 
  if(tiempoDeVideo > 103) {
    a29.style.color = 'black';           //3
    a30.style.color = '#005caa';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
   } 

     if(tiempoDeVideo > 102) {
    a28.style.color = 'black';           //7
    a29.style.color = '#ed2939';
    a29.style.fontSize = '115%'; 
    a28.style.fontSize = '100%'; 
  }

 
  if(tiempoDeVideo > 103) {
    a29.style.color = 'black';           //3
    a30.style.color = '#005caa';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
   } 

     if(tiempoDeVideo > 102) {
    a28.style.color = 'black';           //7
    a29.style.color = '#ed2939';
    a29.style.fontSize = '115%'; 
    a28.style.fontSize = '100%'; 
  }

 
  if(tiempoDeVideo > 103) {
    a29.style.color = 'black';           //3
    a30.style.color = '#005caa';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
   } 

     if(tiempoDeVideo > 102) {
    a28.style.color = 'black';           //7
    a29.style.color = '#ed2939';
    a29.style.fontSize = '115%'; 
    a28.style.fontSize = '100%'; 
  }

 
  if(tiempoDeVideo > 103) {
    a29.style.color = 'black';           //3
    a30.style.color = '#005caa';
    a30.style.fontSize = '115%'; 
    a29.style.fontSize = '100%'; 
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