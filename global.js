var gameCanvas = null;
var ctx = null;
var WIDTH = 800;
var HEIGHT = 600;
var engine = null;

var shopData = {
  shopFrame : {
    poz : {x: 520, y: 100},
    size: {x: 250, y:450},
    src: "assets/bgImages/shop/shopFrame.png",
    imgSize: {x: 250, y:383},
    shopInfoPoz: {x: 550, y:140}
  },

  itemFrame : {
      size: {x: 64, y:64},
      src: "assets/bgImages/shop/itemSlot.png",
      imgSize: {x: 32, y:32},
  },

  weapons : {
    imgSize: {x:512, y:128},
    src: "assets/weapons/weaponList.png",
    spriteSize: {x:64, y:64}
  },
  shopBtn : {
    imgSize: {x:82, y:28},
    size: {x:100, y:40},
    onSrc: "assets/gui/onBtn.png",
    offSrc: "assets/gui/offBtn.png",
  },

  weaponBuyBtn : {
    poz:{x:540 , y:485}
  }
};

var guiData = [
  {
    poz: {x:550, y:25},
    text: 'inventory',
    textSize : 20
  }
]

var itemTab = {
  poz: {x:75, y:80},
  imgSize : {x:400, y:491},
  src : "assets/gui/itemTab.png",
  frameSize: {x:32, y:32},
  slots :[
    // row1
    {x:30 , y:95 },
    {x:73 , y:95 },
    {x:116 , y:95 },
    {x:159 , y:95 },

    // row2
    {x:30 , y:137 },
    {x:73 , y:137 },
    {x:116 , y:137 },
    {x:159 , y:137 },

    // row3
    {x:30 , y:179 },
    {x:73 , y:179 },
    {x:116 , y:179 },
    {x:159 , y:179 },


    // row4
    {x:30 , y:221 },
    {x:73 , y:221 },
    {x:116 , y:221 },
    {x:159 , y:221 },

    // row5
    {x:30 , y:263 },
    {x:73 , y:263 },
    {x:116 , y:263 },
    {x:159 , y:263 },

    // row5
    {x:30 , y:305 },
    {x:73 , y:305 },
    {x:116 , y:305 },
    {x:159 , y:305 },
  ],

   gearData : [
     //head
     {x:295 , y:100},
     {x:295 , y:157},
     {x:295 , y:210},
     //feet
     {x:295 , y:263},
     //weapon
     {x:243 , y:182},
   ],

   exitButton: {
     x: 342,
     y: 10,
     size:  50
   }
}

var itemInfo = {
  chestInfo : {
    size: {x:550, y:74},
    itemSize: {x:68.75 , y:74},
    src:"assets/weapons/armor.png",
  }
}
