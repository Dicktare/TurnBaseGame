function CollisionModule() {
  this.collisionMap = null;
  this.init();
}

CollisionModule.prototype.init = function () {
  var townCP = [
    {
      px:95,
      py:420,
      sx:60,
      sy:120,
      state:'weaponShop'
    },
    {
      px:670,
      py:430,
      sx:40,
      sy:120,
      state:'armorShop'
    },
    {
      px:5,
      py:40,
      sx:300,
      sy:120,
      state:'arena'
    }
  ];

  var arenaCp = [
    {
      px:495,
      py:275,
      sx:180,
      sy:230,
      state:'town'
    },
  ]

  var armorCp = [
    {
      px:0,
      py:540,
      sx:355,
      sy:70,
      state:'town'
    }
  ];

  var weaponCp = [
    {
      px:185,
      py:355,
      sx:60,
      sy:110,
      state:'town'
    }
  ];

  this.collisionMap = {
    'town': townCP,
    'arena': arenaCp,
    'armorShop': armorCp,
    'weaponShop': weaponCp
  }
};

CollisionModule.prototype.getCollisionBoxes = function(state) {
  return this.collisionMap[state];
}
