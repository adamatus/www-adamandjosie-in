var swan_y = function(d) { return 100+75*Math.sin(d); };
var swan_x = function(d) { return 575+75*Math.sin(d)*Math.cos(d); };

var prevPos = 0;
var distance = 0;

var updateBoatPos = function(scrollPercent) {

    distance = distance + 2.5*Math.abs(prevPos - scrollPercent);
    prevPos = scrollPercent;

    var boatcss = {'margin-left': swan_x(distance) + 'px',
                    'margin-top': swan_y(distance) + 'px',
                    'position': 'fixed',
                    'z-index': 12,
    }
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
