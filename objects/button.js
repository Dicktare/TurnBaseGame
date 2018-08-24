function Button(poz, text, textSize) {
  var d = shopData['shopBtn'];
  this.imgSize = d.imgSize
  this.onImg = new Image(d.imgSize.x , d.imgSize.y);
  this.onImg.src = d.onSrc;

  this.offImg = new Image(d.imgSize.x , d.imgSize.y);
  this.offImg.src = d.offSrc;

  this.poz = poz;
  this.size = d.size;
  this.ts = textSize;
  this.text = text;
  this.canPress = false;
}

Button.prototype.render = function() {
  var img = null;
  (this.canPress ? img = this.onImg : img= this.offImg);
  ctx.drawImage(img,
                0, 0, this.imgSize.x, this.imgSize.y,
                this.poz.x, this.poz.y, this.size.x, this.size.y);


  (this.canPress? ctx.fillStyle = "blue": ctx.fillStyle = "yellow");
  ctx.font = this.ts + "px Arial";
  ctx.fillText(this.text, this.poz.x + 15, this.poz.y + this.ts);
}
