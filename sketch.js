var canvas;

var form,form1,form2;

var indiabg;

function preload(){
  indiabg=loadImage("india.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth/2, displayHeight-30);
  form = new Form();
  form.display();

  var text = select('#text');
  text.position(displayWidth/2-480,40);


}


function draw(){
  if(indiabg) {
    background(indiabg);
  }
  
  
}
