background(255)
jyPatch ((width-100)/2, (height-100)/2)

function jyPatch(x,y){
   noFill ()
  stroke (0)
  rect (x,y,100,100)
  fill (0)
  rect (x + 10, y + 10, 80, 20)
  rect (x + 10, y + 40, 60, 20)
  rect (x + 10, y + 10, 20, 80)

    stroke (0,255,150)
  strokeWeight(1)
    var a = 0
  while(a < 60){
    line(x,y + a, x + a, y)
    a = a + 5}
  stroke (180, 255, 0)
  strokeWeight(1)
  var b = 60
  while (b < 100){
    line (x,y + b, x + b, y)
    b = b + 5
  }
  stroke (255,255,0)
  strokeWeight(1)
  var c = 0
  while (c < 60){
    line (x + c, y + 100, x + 100, y + c)
    c = c + 5
  }
  stroke (255,195,0)
  strokeWeight(1)
  var d = 60
 while (d < 100){
   line (x + d, y + 100, x + 100, y + d)
  d = d + 5}
  
  stroke(255,0,0)
  fill (255,0,0)
  rect (x + 10, y + 10, 80, 20)
  rect (x + 10, y + 40, 60, 20)
  rect (x + 10, y + 10, 20, 80)
  
}
