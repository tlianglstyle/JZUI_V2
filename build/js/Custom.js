JZ.onWindowLoad(function(){
  $("body").delegate(".ani-click-scale","click",function(){   
        $(this).transition({ scale: [0.6,0.6]},0).transition({ scale: [1,1]}, 400);
  });
});