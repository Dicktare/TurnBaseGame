Engine.prototype.handleMouseClick = function (poz) {

  //collision box
  var box = this.cm.getCollisionBoxes(this.gameState.state)

  //check collision
  for(var i = 0; i < box.length; i++)
    if( poz.x > box[i].px && poz.x < box[i].px + box[i].sx &&
        poz.y > box[i].py && poz.y < box[i].py + box[i].sy )
          this.gameState.state = box[i].state;

  // handle weapon shop collision
  if(this.gameState.state === 'weaponShop')
    this.handleShopClick(poz);

  if(this.gameState.state === 'town')
    this.handleTownMouseClick(poz);
};

Engine.prototype.handleShopClick = function(poz) {
    this.shop.handleMouseClick(poz)
    //reset
    this.shop.itemSelected = -1;
    var box = this.cm.getCollisionBoxes(this.gameState.state)
    var box = this.shop.shopCp;
    var s = shopData['weapons'].spriteSize;
    for(var i = 0; i < box.length; i++)
      if( poz.x > box[i].x && poz.x < box[i].x + s.x &&
          poz.y > box[i].y && poz.y < box[i].y + s.y )
            this.shop.itemSelected = i;
}

Engine.prototype.handleMouseMove = function(poz) {
  if(this.gameState.state === 'weaponShop') {
      this.shop.handleMouseMove(poz);
  }
  if(this.gameState.state === 'town') {
      this.handleTownMouseMove(poz);
  }

  if(this.itemTab == true) {
    this.HandleItemDrag(poz);
  }
}

Engine.prototype.handleTownMouseMove = function(poz) {
  this.btnSelected = -1;
  for(var i = 0; i < this.guiButtons.length; i++) {
    var ps = this.guiButtons[i].size;
    var p = this.guiButtons[i].poz;
    if(poz.x > p.x && poz.x < p.x + ps.x &&
       poz.y > p.y && poz.y < p.y + ps.y) {
         this.guiButtons[i].canPress = true;
         this.btnSelected = i;
    }else {
        this.guiButtons[i].canPress = false;
    }
  }
}

Engine.prototype.handleTownMouseClick = function(poz) {
  if(this.btnSelected === 0) {
      this.itemTab = true;
  }

  var exit = { x: itemTab.exitButton.x + itemTab.poz.x,
               y: itemTab.exitButton.y + itemTab.poz.y,
               size:itemTab.exitButton.size}

  if(this.itemTab == true &&
      poz.x > exit.x && poz.x < exit.x + exit.size &&
      poz.y > exit.y && poz.y < exit.y + exit.size ) {
        this.itemTab = false;
  }
}

/*
====== Handlers for item dragging ======
*/
Engine.prototype.handleMouseDown = function(poz) {
  // hit test all existing circles
  var hit = -1;

  for (var i = 0; i < this.itemList.length; i++) {
      var c = this.itemList[i].poz;
      if (poz.x > c.x && poz.x < c.x + 32 &&
          poz.y > c.y && poz.y < c.y + 32 ) {
          hit = i;

          this.iconOffset.x = this.itemList[i].poz.x - poz.x;
          this.iconOffset.y = this.itemList[i].poz.y - poz.y;
      }
  }

  // if hit then set the isDown flag to start a drag
  if (hit < 0) {} else {
    this.selectedItem = this.itemList[hit];
    this.MouseIsDown = true;
  }
}

Engine.prototype.handleMouseUp = function(poz) {
  // stop the drag
  var invList = this.inventory.cp;
  if(this.containerType == 'gear') {
    var gearList = this.gear.getAllCpList()
    var itemSlot = gearList[this.gear.selectedGearSlotIndex]
    var p = {x: itemSlot.x , y:itemSlot.y};
    this.selectedItem.poz.x = p.x;
    this.selectedItem.poz.y = p.y;
  }

  if(this.selectedItemIndex != -1) {
    if(this.containerType == 'inventory')
      this.selectedItem.poz.x = invList[this.selectedItemIndex].x;
      this.selectedItem.poz.y = invList[this.selectedItemIndex].y;
  }

  this.MouseIsDown = false;
  this.selectedItemIndex =-1;
  this.resetGearSlots();
}

Engine.prototype.HandleItemDrag = function(poz) {
  if (!this.MouseIsDown)
    return;

  //show the equipable slot for the item selected
  this.showSlot(this.selectedItem.type)

  //move the selected item
  this.selectedItem.poz.x = poz.x + this.iconOffset.x;
  this.selectedItem.poz.y = poz.y + this.iconOffset.y;

  this.selectedItemIndex = -1;

  for (var i = 0; i < this.inventory.cp.length; i++) {
    var c = this.inventory.cp[i];
    var size = 39;

    if(poz.x > c.x && poz.x < c.x + size &&
       poz.y > c.y && poz.y < c.y + size) {
          this.selectedItemIndex = i;
          this.containerType = "inventory";
       }
  }

  var gearList = this.gear.getAllCpList()
  var itemSlot = gearList[this.gear.selectedGearSlotIndex]
  var p = {x: itemSlot.x , y:itemSlot.y};

  if(poz.x > p.x && poz.x < p.x + size &&
     poz.y > p.y && poz.y < p.y + size) {
        this.containerType = "gear";
     }
}
