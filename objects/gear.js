function Gear() {
  this.headCp = null;
  this.chestCp = null;
  this.feetCp = null;
  this.beltCp = null;
  this.weaponCp = null;
  this.offset = itemTab.poz;
  this.init();
  this.selectedGearSlotIndex = -1;
}

Gear.prototype.init = function() {
  var cp = itemTab.gearData;

  this.headCp = this.getOffsetedFrame(cp[0]);
  this.chestCp = this.getOffsetedFrame(cp[1]);
  this.feetCp = this.getOffsetedFrame(cp[2]);
  this.beltCp = this.getOffsetedFrame(cp[3]);
  this.weaponCp = this.getOffsetedFrame(cp[4]);
}

Gear.prototype.render = function() {
  var l = this.getAllCpList();
  ctx.fillStyle = 'yellow';
  ctx.globalAlpha = 0.7;
  for(var i = 0; i < l.length; i++) {
      (i == this.selectedGearSlotIndex ?
        ctx.fillStyle = 'green' :
        ctx.fillStyle = 'yellow')
      ctx.fillRect(l[i].x, l[i].y, 39 ,39);
  }
}

Gear.prototype.showEquipableSlot = function(type) {
  var mappedType = {
    "head":0,
    "chest":1,
    "feet":2,
    "belt":3,
    "weapon":4,
  }
  this.selectedGearSlotIndex =  mappedType[type];
}

Gear.prototype.getAllCpList = function() {
  return [this.headCp, this.chestCp, this.feetCp, this.beltCp, this.weaponCp]
}

Gear.prototype.getOffsetedFrame = function(poz) {
  return {x:poz.x + this.offset.x , y:poz.y + this.offset.y, item:null}
}
