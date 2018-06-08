document.body.addEventListener("keydown", keyIn);
function keyIn(){
  var keyWas = event.which;
  if(keyWas == 13){
    document.getElementById("overlay").style.display = "flex";
    var time = setInterval(frame, 50);
    var opa = 0.0;
    function frame(){
      if(opa >= 1.0){
        clearInterval(time);
      }
      else{
        opa += 0.1;
        document.getElementById("overlay").style.opacity = opa;
      }
    }
  }
}
