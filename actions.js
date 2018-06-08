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
    var closeTime = setInterval(closeFrame, 50);
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

document.getElementById("topTriangle").addEventListener("mouseover", topTriangleBoxChange);
document.getElementById("topTriangle").addEventListener("mouseout", mouseOutBoxChange);
document.getElementById("middleTriangle").addEventListener("mouseover", middleTriangleBoxChange);
document.getElementById("middleTriangle").addEventListener("mouseout", mouseOutBoxChange);
document.getElementById("bottomTriangle").addEventListener("mouseover", bottomTriangleBoxChange);
document.getElementById("bottomTriangle").addEventListener("mouseout", mouseOutBoxChange);
function topTriangleBoxChange(){
  var teamHeader = document.getElementById("memberName");
  var teamParagraph = document.getElementById("memberDescription");
  teamHeader.innerHTML = "Gustavo";
  teamParagraph.innerHTML = "blah blah blah Felipe will write this I hope xD"
  teamHeader.style.opacity = 1.0;
  teamParagraph.style.opacity = 1.0;
}
function middleTriangleBoxChange(){
  var teamHeader = document.getElementById("memberName");
  var teamParagraph = document.getElementById("memberDescription");
  teamHeader.innerHTML = "Jena";
  teamParagraph.innerHTML = "blah blah blah Felipe will write this I hope xD"
  teamHeader.style.opacity = 1.0;
  teamParagraph.style.opacity = 1.0;
}
function bottomTriangleBoxChange(){
  var teamHeader = document.getElementById("memberName");
  var teamParagraph = document.getElementById("memberDescription");
  teamHeader.innerHTML = "Felipe";
  teamParagraph.innerHTML = "blah blah blah Felipe will write this I hope xD"
  teamHeader.style.opacity = 1.0;
  teamParagraph.style.opacity = 1.0;
}
function mouseOutBoxChange(){
  var teamHeader = document.getElementById("memberName");
  var teamParagraph = document.getElementById("memberDescription");
  teamHeader.innerHTML = "";
  teamParagraph.innerHTML = "";
}
