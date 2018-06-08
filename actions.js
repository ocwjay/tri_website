document.body.addEventListener("keydown", keyIn);
var open = 0;
function keyIn(){
  var keyWas = event.which;
  if(keyWas == 13){
    document.getElementById("overlay").style.display = "flex";
    var openTime = setInterval(openFrame, 50);
    var opa = 0.0;
    function openFrame(){
      if(opa >= 1.0){
        clearInterval(openTime);
      }
      else{
        opa += 0.1;
        document.getElementById("overlay").style.opacity = opa;
      }
    }
  }
  else if (keyWas == 8) {
    var openTime = setInterval(closeFrame, 50);
    var opa = 1.0;
    function closeFrame(){
      if(opa <= 0.0){
        clearInterval(closeTime);
        document.getElementById("overlay").style.display = "none";
      }
      else{
        opa -= 0.1;
        document.getElementById("overlay").style.opacity = opa;
      }
    }
  }
}
