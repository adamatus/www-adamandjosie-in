var swan_x = function(d) { return 575-125*Math.sin(d); };
var swan_y = function(d) { return $(window).height()-375+15*Math.sin(d)*Math.cos(d); };

var prevPos = 0;
var distance = 0;
var oldx = 100000;

var updateBoatPos = function(scrollPercent) {

    distance = distance + 2.5*Math.abs(prevPos - scrollPercent);
    console.log(swan_y(distance));
    prevPos = scrollPercent;

    var newx = swan_x(distance);
    if (newx < oldx) {
           dir = 'left';
           var boatcss = {'margin-left': swan_x(distance) + 'px',
                    'margin-top': swan_y(distance) + 'px',
                    'position': 'fixed',
                    '-moz-transform': 'scaleX(1)',
                    '-o-transform': 'scaleX(1)',
                    '-webkit-transform': 'scaleX(1)',
                    'transform': 'scaleX(1)',
                    'z-index': 12,
           };
    } else {
          var boatcss = {'margin-left': swan_x(distance) + 'px',
                    'margin-top': swan_y(distance) + 'px',
                    'position': 'fixed',
                    '-moz-transform': 'scaleX(-1)',
                    '-o-transform': 'scaleX(-1)',
                    '-webkit-transform': 'scaleX(-1)',
                    'transform': 'scaleX(-1)',
                    'filter': 'FlipH',
                    '-ms-filter': '"FlipH"',
                    'z-index': 12,
           };
    }
    oldx = newx;

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
