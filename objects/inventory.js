function Inventory() {
  this.bgImage = null;
  this.poz = null;
  this.cp = null;
  this.cpSize = null;
  this.init();
}

Inventory.prototype.init = function() {
  this.bgImage = new Image(400, 491);
  this.bgImage.src = itemTab.src;
  this.poz = itemTab.poz; //{x:275, y:80};
  this.size = itemTab.imgSize;
  this.cp = itemTab.slots;
  this.cpSize = 39;
  for(var i = 0; i < this.cp.length; i++) {
    this.cp[i].x = this.poz.x + this.cp[i].x
    this.cp[i].y = this.poz.y + this.cp[i].y
  }
}

Inventory.prototype.render = function(index) {
  ctx.drawImage(this.bgImage,
                this.poz.x, this.poz.y, this.size.x, this.size.y);
  this.renderCp(index);
}

Inventory.prototype.renderCp = function(index) {
  ctx.fillStyle = 'green';
  ctx.globalAlpha = 0.7;
  for(var i = 0; i < this.cp.length; i++) {
    (i == index?  ctx.fillStyle  = 'red':  ctx.fillStyle = 'green');
    ctx.fillRect(this.cp[i].x, this.cp[i].y, this.cpSize ,this.cpSize);
  }
}
