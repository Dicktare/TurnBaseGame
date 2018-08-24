
window.onload = function() {
  document.getElementById('gameCanvas').width = WIDTH;
  document.getElementById('gameCanvas').height = HEIGHT;
  gameCanvas = document.getElementById('gameCanvas');
  ctx = gameCanvas.getContext('2d');
  engine = new Engine();
  setInterval(function() { engine.runGameLoop(); }, 1000 / 32);


  gameCanvas.addEventListener("click", function(evt) {
    var poz = getCursorPosition(gameCanvas, evt);
    engine.handleMouseClick(poz);
  });

  gameCanvas.addEventListener("mousemove", function(evt) {
    var poz = getCursorPosition(gameCanvas, evt);
    engine.handleMouseMove(poz);
  });

  gameCanvas.addEventListener("mousedown", function(evt) {
    var poz = getCursorPosition(gameCanvas, evt);
    evt.preventDefault();
    evt.stopPropagation();
    engine.handleMouseDown(poz);
  });

  gameCanvas.addEventListener("mouseup", function(evt) {
    var poz = getCursorPosition(gameCanvas, evt);
    evt.preventDefault();
    evt.stopPropagation();
    engine.handleMouseUp(poz);
  });

  gameCanvas.addEventListener("mouseout", function(evt) {
    var poz = getCursorPosition(gameCanvas, evt);
    engine.handleMouseUp(poz);
  });

  document.addEventListener("keydown", function(evt) {
    console.log("Key down ", evt.key);
  });

  document.addEventListener("keyup", function(evt) {
    console.log("Key up ", evt.key);
  });

  function getCursorPosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    return {x:x, y:y};
  }
}
