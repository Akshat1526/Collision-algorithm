var rectangle1, rectangle2




function setup() {
  createCanvas(800,400);
  rectangle1 = createSprite(400,200,50,30)
  rectangle1.shapeColor = "green"
  rectangle2 = createSprite(100,300,50,30)
  rectangle2.shapeColor = "green"
}

function draw() {
  background(0);  
rectangle2.x =World.mouseX
rectangle2.y =World.mouseY
console.log(rectangle2.x - rectangle1.x)
console.log(rectangle1.width/2+rectangle2.width/2)

if(rectangle2.x - rectangle1.x <  rectangle1.width/2 + rectangle2.width/2
  && rectangle1.x - rectangle2.x <  rectangle1.width/2 + rectangle2.width/2 
  &&rectangle2.y - rectangle1.y <  rectangle1.height/2 + rectangle2.height/2
  && rectangle1.y - rectangle2.y <  rectangle1.height/2 + rectangle2.height/2 ){
  rectangle1.shapeColor = "red"
  rectangle2.shapeColor = "red"
} else {
  rectangle1.shapeColor = "green"
  rectangle2.shapeColor = "green"
}

  drawSprites();
}