background(255);
strokeWeight(3);
colorMode(HSB);

while (true) {
  stroke(mouseX, mouseY, 100);
  fill(mouseY, mouseX, 100);

  var r = random(20, 50);
  ellipse(mouseX, mouseY, r, r);
}
