document.body.addEventListener("keydown", keyIn);
var open = 0;
function keyIn(event){
  var keyWas = event.which;
  if(keyWas == 13){
    alert("enter key was pressed");
  }
  else if (keyWas == 8) {
    alert("backspace key was pressed");
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
