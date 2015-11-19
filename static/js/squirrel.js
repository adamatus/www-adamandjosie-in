var t = [];
var x1 = 575/Math.PI/2;
for(var i=0; i < 575; i++) { t.push(i) };

var swan_y = t.map(function(d) { return 50+Math.abs((d-(575/2))); });
var swan_x = t.map(function(d) { return -147-7*Math.sin(d/x1)*Math.cos(d/x1); });

var prev_y = swan_y[0];

var updateBoatPos = function(scrollPercent) {
    var boatPos = 575-Math.round(scrollPercent*575);

    if (swan_y[boatPos] > prev_y) {
      dir = 'left';
      var boatcss = {'margin-left': swan_x[boatPos] + 'px',
                    'margin-top': swan_y[boatPos] + 'px',
                    '-moz-transform': 'scaleY(-1)',
                    '-o-transform': 'scaleY(-1)',
                    '-webkit-transform': 'scaleY(-1)',
                    'transform': 'scaleY(-1)',
                   'filter': 'FlipV',
                    '-ms-filter': '"FlipV"',
                    'position': 'fixed',
                    'z-index': 100,
                  };
    } else {
      dir = 'right';
      var boatcss = {'margin-left': swan_x[boatPos] + 'px',
                    'margin-top': swan_y[boatPos] + 'px',
                    '-moz-transform': 'scaleY(1)',
                    '-o-transform': 'scaleY(1)',
                    '-webkit-transform': 'scaleY(1)',
                    'transform': 'scaleY(1)',
                    'position': 'fixed',
                    'z-index': 100,
                  };
    }
    prev_y = swan_y[boatPos];

    $('#moving_boat').css(boatcss);
};

$(window).scroll(function() {
    var position = $(window).scrollTop();
    scrollPercent = position / ($(document).height()-$(window).height());
    updateBoatPos(scrollPercent);
});

$(function() {
  var position = $(window).scrollTop();
    scrollPercent = position / ($(document).height()-$(window).height());
    updateBoatPos(scrollPercent);
});
