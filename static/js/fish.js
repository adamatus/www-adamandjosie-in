var swan_y = function(d) { return 50+Math.abs(d*2-100); };

var cur_y = 0,
    prev_y = swan_y(cur_y);

var updateBoatPos = function() {
     cur_y = cur_y + 1;
     cur_y = cur_y % 100;

    if (swan_y(cur_y) < prev_y) {
      dir = 'up';
      var boatcss = {'margin-left': '350px',
                    'margin-top': swan_y(cur_y) + 'px',
                    '-moz-transform': 'scaleY(1)',
                    '-o-transform': 'scaleY(1)',
                    '-webkit-transform': 'scaleY(1)',
                    'transform': 'scaleY(1)',
                    'position': 'fixed',
                    'z-index': 10,
                  };
    } else {
      dir = 'down';
      var boatcss = {'margin-left': '350px',
                    'margin-top': swan_y(cur_y) + 'px',
                    '-moz-transform': 'scaleX(-1) scaleY(-1)',
                    '-o-transform': 'scaleX(-1) scaleY(-1)',
                    '-webkit-transform': 'scaleX(-1) scaleY(-1)',
                    'transform': 'scaleX(-1) scaleY(-1)',
                    'filter': 'FlipV FlipH',
                    '-ms-filter': '"FlipV FlipH"',
                    'position': 'fixed',
                    'z-index': 10,
                  };
    }
    prev_y = swan_y(cur_y);

    $('#moving_boat').css(boatcss);

    if (cur_y == 0) {
        setTimeout(updateBoatPos,7500);
    } else {
        setTimeout(updateBoatPos,35);
    }

};

setTimeout(updateBoatPos,1750);
