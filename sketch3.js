background (255);  
while(true){
 var b = 0
    while(b < 320){
  
  stroke(0);
  noFill();
  ellipse (320, b + 11 , 20, 20)
  stroke(255)
  fill(255)
    rect(309, b - 1 , 22, 22)
   b = b + 10
    }
   var c = 0
  while(c < 310){
  stroke(0);
  noFill();
  ellipse (320, 321 - c , 20, 20)
  stroke(255)
  fill(255)
    rect(309, 310 - c , 22, 22)
   c = c + 10 } 
}
