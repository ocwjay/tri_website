document.body.addEventListener("keydown", keyIn);
var currentLink = 0;
var openFlag = 0;
var overlayElement = document.getElementById("overlay");
function keyIn(event){
  var keyWas = event.which;
  //alert(keyWas);
  if(keyWas == 13){
    overlayElement.classList.add("overlayOpen");
    openFlag = 1;
    selectingNavLinks();
  }
  else if(keyWas == 8) {
    overlayElement.classList.add("animationBackwards");
    setTimeout(removingOverlayClasses, 1000)
    openFlag = 0;
    //thing that sets the menu selected back to 0
  }
  else if(keyWas == 65){
    if(openFlag == 1){
      if(currentLink >= 0){
        if(currentLink <= 4){
          document.getElementById("link" + currentLink).classList.remove("navLinkSelected");
          currentLink --;
          while(currentLink < 0){
            currentLink = 4;
          }
          selectingNavLinks();
        }
      }
    }
  }
  else if (keyWas == 68) {
    if(openFlag == 1){
      if(currentLink >= 0){
        if(currentLink <= 4){
          document.getElementById("link" + currentLink).classList.remove("navLinkSelected");
          currentLink ++;
          while(currentLink > 4){
            currentLink = 0;
          }
          selectingNavLinks();
        }
      }
    }
  }
  else if (keyWas == 87) {
    if(openFlag == 1){
      var navLinkHref = document.getElementById("link" + currentLink).href;
      window.location.replace(navLinkHref);
    }
  }
}

function removingOverlayClasses(){
  overlayElement.classList.remove("animationBackwards");
  overlayElement.classList.remove("overlayOpen");
  document.getElementById("link" + currentLink).classList.remove("navLinkSelected");
  currentLink = 0;
}

function selectingNavLinks(event){
  document.getElementById("link" + currentLink).classList.add("navLinkSelected");
}
