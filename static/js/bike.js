var a = [];
var dir = 'left';
var prevPos = 0;
for(var i=0; i < 575; i++) { a.push(i) };
var boat_y = a.map(function(d) { return -100 + 10*Math.sin(d*Math.PI/180.0); });
var bike_y = a.map(function(d) { return -180 + (d-575)*-.04; });
var bike_scale = a.map(function(d) { return (d)/575.0; });

var updateBoatPos = function(scrollPercent) {
    var boatPos = 575-Math.round(scrollPercent*575);

    if (boatPos > prevPos) {
      dir = 'left';
      var scalestr = 'scaleX(-' + bike_scale[boatPos] + ') scaleY(' + bike_scale[boatPos] + ')';
      var bikecss = {'margin-left': (boatPos + 90) + 'px',
                    'margin-top': bike_y[boatPos] + 'px',
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
      var scalestr = 'scaleX(' + bike_scale[boatPos] + ') scaleY(' + bike_scale[boatPos] + ')';
      var bikecss = {'margin-left': (boatPos + 90) + 'px',
                    'margin-top': bike_y[boatPos] + 'px',
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
