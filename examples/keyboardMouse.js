var nc = require('../ncurses');
var line = 0;

function appendLine(message) {
  line++;
  w.addstr(line, 0, message);
  w.refresh();
}

var w = new nc.Window();
appendLine('You can write on your keyboard or click with your mouse.');
appendLine('Press q to quit.');
appendLine('\n');

w.on('inputChar', function(char, code) {
  appendLine('[keyboard] ' + char);
  if (char == 'q') {
    w.close();
  }
});

w.on('mousePressed', function(x, y) {
  appendLine('[mouse] x: ' + x + ' y: ' + y);
  w.refresh();
});