var dir = 'left';
var prevPos = 0;
var bike_y = function(d) { return -160 + (d-300)*-.07; };
var bike_scale = function(d) { return 1-d/1200; };

var oldx = 0;

var updateBoatPos = function() {
    oldx = oldx+1;
    oldx = oldx % 600;

    var boatPos = Math.round(oldx/600*800);

    if (boatPos > prevPos) {
      dir = 'left';
      var scalestr = 'scaleX(-' + bike_scale(boatPos) + ') scaleY(' + bike_scale(boatPos) + ')';
      var bikecss = {'margin-left': (boatPos-90) + 'px',
                    'margin-top': bike_y(boatPos) + 'px',
                    '-moz-transform': scalestr,
                    '-o-transform': scalestr,
                    '-webkit-transform': scalestr,
                    'transform': scalestr,
                    'filter': 'FlipH',
                    '-ms-filter': '"FlipH"',
                    'position': 'fixed',
                    'z-index': 12,
                  };
    } else {
      dir = 'right';
      var scalestr = 'scaleX(' + bike_scale(boatPos) + ') scaleY(' + bike_scale(boatPos) + ')';
      var bikecss = {'margin-left': (boatPos-90) + 'px',
                    'margin-top': bike_y(boatPos) + 'px',
                    '-moz-transform': scalestr,
                    '-o-transform': scalestr,
                    '-webkit-transform': scalestr,
                    'transform': scalestr,
                    'position': 'fixed',
                    'z-index': 12,
                  };
    }
    prevPos = boatPos;

    $('#moving_bike').css(bikecss);

    if (oldx == 0) {
        setTimeout(updateBoatPos,3000);
    } else {
        setTimeout(updateBoatPos,17);
    }
};

updateBoatPos();

