document.body.addEventListener("keydown", keyIn);
function keyIn(event){
  var keyWas = event.which;
  var overlayElement = document.getElementById("overlay");
  var openFlag = 0;
  if(keyWas == 13){
    overlayElement.classList.add("overlayOpen");
  }
  else if(keyWas == 8) {
    //add a class that uses a new animation
    //then set a timeout to remove that class and the class below vvv
    overlayElement.classList.remove("overlayOpen");
  }
}
