var a = [];
var dir = 'left';
var prevPos = 0;
for(var i=0; i < 575; i++) { a.push(i) };

var boat_y = function(d) { return $(window).height()-330-20*Math.cos(d/.16); };

var updateBoatPos = function(scrollPercent) {
    var boatPos = -230+Math.round(scrollPercent*655);

    if (boatPos > prevPos) {
      dir = 'left';
      var boatcss = {'margin-left': boatPos + 'px',
                    'margin-top': boat_y(scrollPercent) + 'px',
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
                    'margin-top':  boat_y(scrollPercent) + 'px',
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
