function setup() {
  createCanvas(600, 400);
  background("black")
}

function draw() {
 stroke("black")
fill("blue")
  
  
if(mouseIsPressed){ 
rect(mouseX,mouseY, 50, 40)
}
}