function Shop() {
  this.shopFrame = null;
  this.shopBox = null;
  this.shopCp = null;
  this.weaponListImg = null;
  //red box list
  this.auxList = [];
  this.init();
  this.makeItemPoz();
  this.itemSelected = -1;

  var poz = shopData['weaponBuyBtn'].poz;
  this.buyBtn = new Button(poz, "Buy", 25);
}

Shop.prototype.init = function() {
  //item frame image
  var d = shopData['shopFrame']
  this.shopFrame = new Image(d.imgSize.x, d.imgSize.y);
  this.shopFrame.src = d.src;
  this.poz = d.poz;
  this.size = d.size;

  //weapon list image
  var d1 = shopData['weapons'];
  this.weaponListImg = new Image(d1.imgSize.x, d1.imgSize.y);
  this.weaponListImg.src = d1.src;

  // shopBox
  this.shopBox = {
    'town': null,
    'arena': null,
    'armorShop': null,
    'weaponShop': null
  }

  //Collision box
  this.shopCp = []
  var start = {x: d.poz.x+10, y:d.poz.y + 35}
  var offset = {x: 10, y:25}
  var size = shopData['itemFrame'].size;

  for(var i = 0; i <= 2; i++) {
    for(var j = 0; j <= 3; j++) {
      var x = start.x + offset.x * (i + 1) + size.x * i;
      var y = start.y + size.y * j  + offset.y * (j + 1);
      this.shopCp.push({x:x, y:y});
    }
  }
}

Shop.prototype.render = function() {
  var s = shopData['itemFrame'].size;

  ctx.drawImage(this.shopFrame,
                this.poz.x, this.poz.y, this.size.x, this.size.y);
  ctx.globalAlpha = 0.4;

  for(var i = 0; i < this.shopCp.length; i++) {
    var dx = this.shopCp[i].x;
    var dy = this.shopCp[i].y;
    var sx = this.auxList[i].x;
    var sy = this.auxList[i].y;
    if(i === this.itemSelected)
      ctx.fillStyle = "blue";
    else
      ctx.fillStyle = "gray";

    ctx.fillRect(dx, dy, 55, 55);
    ctx.globalAlpha = 1;
    ctx.drawImage(this.weaponListImg, sx, sy, 64, 64, dx, dy, 64, 64);
    if(this.itemSelected == i) {
      var poz = shopData['shopFrame'].shopInfoPoz;
      var price = "price: " + 10 * (i + 1);
      ctx.font = "20px Georgia";
      ctx.fillStyle = "yellow";
      ctx.fillText(price, poz.x, poz.y)
    }
  }

  this.buyBtn.render();
}

Shop.prototype.makeItemPoz = function() {
  for(var i = 0; i < 8; i++)
    for(var j = 0; j < 2; j++)
      this.auxList.push({x:64 * i, y: 64 * j});
}

Shop.prototype.handleMouseMove = function(poz) {
  var p = this.buyBtn.poz;
  var ps = this.buyBtn.size;

  if(poz.x > p.x && poz.x < p.x + ps.x &&
     poz.y > p.y && poz.y < p.y + ps.y) {
    this.buyBtn.canPress = true;
  }else {
    this.buyBtn.canPress = false;
  }
}

Shop.prototype.handleMouseClick = function(poz) {
  if(this.buyBtn.canPress && this.itemSelected != -1){
      console.log('try to buy this plz!');
      return true;
  }
  return false;
}
