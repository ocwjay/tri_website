document.body.addEventListener("keydown", keyIn);
function keyIn(event){
  var keyWas = event.which;
  var overlayElement = document.getElementById("overlay");
  if(keyWas == 13){
    enter
  }
  else if(keyWas == 8) {
    //backspace
  }
}
