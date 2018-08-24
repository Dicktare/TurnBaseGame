function Item(type, poz) {
  this.type = null;
  this.stats = null;
  this.poz = null;
  this.size = null;
  this.imgInfo = null;
  this.poz = {x:null, y:null};
  this.init(type, poz);
}

Item.prototype.init = function(type, poz) {
  this.type = type;
  var data = null;
  this.poz.x = poz.x + itemTab.poz.x;
  this.poz.y = poz.y + itemTab.poz.y;

  if(type == "chest")
    data = itemInfo.chestInfo;

  this.size = {x:32, y:32}
  var image = new Image(data.size.x, data.size.y);
  image.src = data.src;

  this.imgInfo = {image:image ,size: data.size, spriteSize: data.itemSize}
}

Item.prototype.render = function() {
  ctx.globalAlpha = 1;
  ctx.drawImage(this.imgInfo.image,
                0, 0,
                this.imgInfo.spriteSize.x,   this.imgInfo.spriteSize.y,
                this.poz.x, this.poz.y,
                this.size.x, this.size.y);
}
