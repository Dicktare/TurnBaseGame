function Engine() {
  this.gameState = new GameState('town');
  this.cm = new CollisionModule();
  this.shop = new Shop();
  this.guiButtons = [];
  this.init();
  //index selected
  this.btnSelected = -1;
  //flag item tag
  this.itemTab = false;

  this.inventory = new Inventory();
  this.gear = new Gear();
  this.item = new Item("chest", {x:55, y:75})
  this.itemList = [this.item];

  //drag and drop vars
  this.MouseIsDown = false;
  this.selectedItem = null;
  this.iconOffset = {x:0, y:0};
  this.selectedItemIndex =-1;
}

Engine.prototype.init = function() {
    for(var i = 0; i < guiData.length ; i++) {
      var btn = new Button(guiData[i].poz, guiData[i].text, guiData[i].textSize);
      this.guiButtons.push(btn);
    }
}

Engine.prototype.runGameLoop = function () {
  ctx.drawImage(this.gameState.getGSImage(), 0,0);
  this.renderCp(this.gameState.state);
  this.renderShop(this.gameState.state);
  this.renderGui(this.gameState.state);
  this.renderInventory();

};

Engine.prototype.renderCp = function(state) {
  var list = this.cm.getCollisionBoxes(state);
  ctx.fillStyle = "#FF0000";
  ctx.globalAlpha = 0.4;
  for(var i = 0; i < list.length; i++) {
    ctx.fillRect(list[i].px, list[i].py, list[i].sx, list[i].sy);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

Engine.prototype.renderShop = function(state) {
  if(state == 'weaponShop')
    this.shop.render();
}

Engine.prototype.renderGui = function(state) {
  if(state === 'town')
    for(var i = 0; i < this.guiButtons.length; i++)
      this.guiButtons[i].render();
}

Engine.prototype.renderInventory = function() {
  if(this.itemTab == true) {
    this.inventory.render(this.selectedItemIndex);
    this.gear.render();
    this.item.render();
  }
}


Engine.prototype.showSlot = function(type) {
  this.gear.showEquipableSlot(type);
}

Engine.prototype.resetGearSlots = function() {
  this.gear.selectedGearSlotIndex = -1;
}
