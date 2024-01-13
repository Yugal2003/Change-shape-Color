var diffColor = [
    "red","yellow","blue","black","orange","purple","cyan","brown","burlywood","grey","pink"
  ];
  var index = 0;
  var triangle = false;
  
  var changeCol  = document.querySelector(".color");
  var changeShap = document.querySelector(".shape");
  
  changeCol.addEventListener("click", ColorFunc);
  changeShap.addEventListener("click", ShapeFunc);
  
  function ColorFunc(){
    if(index === diffColor.length){
      index = 0;
    }
    document.querySelector(".circle").style.backgroundColor = diffColor[index];
    index++;
  }
  
  function ShapeFunc(){
    if(!triangle){
      let boxColor = document.getElementsByClassName("box")[0];
      boxColor.className = "triangle-shape";
      triangle = true;
    }
    else{
      let boxColor = document.getElementsByClassName("triangle-shape")[0];
      boxColor.className = "box";
      triangle = false;
    }
  }
  
  
  
  
  
  