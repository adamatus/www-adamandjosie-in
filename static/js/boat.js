var a = [];
var dir = 'left';
var prevPos = 0;
for(var i=0; i < 575; i++) { a.push(i) };
var boat_y = a.map(function(d) { return -100 + 10*Math.sin(d*Math.PI/180.0); });

var updateBoatPos = function(scrollPercent) {
    var boatPos = 575-Math.round(scrollPercent*575);

    if (boatPos > prevPos) {
      dir = 'left';
      var boatcss = {'margin-left': boatPos + 'px',
                    'margin-top': boat_y[boatPos] + 'px',
                    '-moz-transform': 'scaleX(1)',
                    '-o-transform': 'scaleX(1)',
                    '-webkit-transform': 'scaleX(1)',
                    'transform': 'scaleX(1)',
                    'position': 'fixed',
                    'z-index': 12,
                  };
    } else {
      dir = 'right';
      var boatcss = {'margin-left': boatPos + 'px',
                    'margin-top': boat_y[boatPos] + 'px',
                    '-moz-transform': 'scaleX(-1)',
                    '-o-transform': 'scaleX(-1)',
                    '-webkit-transform': 'scaleX(-1)',
                    'transform': 'scaleX(-1)',
                    'filter': 'FlipH',
                    '-ms-filter': '"FlipH"',
                    'position': 'fixed',
                    'z-index': 12,
                  };
    }
    prevPos = boatPos;

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
