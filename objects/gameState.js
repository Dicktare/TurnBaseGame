function GameState(state) {
  (state == null)? this.state = 'town' : this.state = state;
  this.possibleGameStates = null;
  this.gameStateImges = null;
  this.init();
}

//constructor
GameState.prototype.init = function() {
  this.possibleGameStates = ['town', 'armorShop', 'weaponShop', 'arena', 'items'];
  let townImg = new Image(800, 600);
  townImg.src = "assets/bgImages/town.png";

  let armorImg = new Image(800, 600);
  armorImg.src = "assets/bgImages/armorShop.png";

  let weaponImg = new Image(800, 600);
  weaponImg.src = "assets/bgImages/weaponShop.png";

  let arenaImg = new Image(800, 600);
  arenaImg.src = "assets/bgImages/arena.png";

  this.gameStateImges = {
    'town':townImg,
    'armorShop':armorImg,
    'weaponShop':weaponImg,
    'arena':arenaImg
  }
}

//setters
GameState.prototype.goToArena = function() { this.state = 'arena'}
GameState.prototype.goToTown = function() { this.state = 'town'}
GameState.prototype.goToArmorShop = function() { this.state = 'armorShop'}
GameState.prototype.goToWeaponShop = function() { this.state = 'weaponShop'}

//getters
GameState.prototype.getGameStateImage = function(state) {
  return this.getGameStateImages[state];
}
GameState.prototype.getGSImage = function() {
  return this.gameStateImges[this.state];
}
