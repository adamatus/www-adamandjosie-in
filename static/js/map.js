var map;
var addMap = function() {
// Add the base CloudMade map
//var APIKEY = '78f159c3ec8c4290b7854cf0471003ec';
map = L.map('map').setView([43.0809254079, -89.411201], 11);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
 { attribution: "Map data &copy; <a href='http://openstreetmap.org'>" +
  "OpenStreetMap</a> contributors, " +
  "<a href='http://creativecommons.org/licenses/by-sa/2.0/'>" +
  "CC-BY-SA</a>, Imagery &copy; <a href='http://osm.org/copyright'>" +
      "OpenStreeMap</a> contributors",
       maxZoom: 18
       }).addTo(map);

var parkMarker = L.AwesomeMarkers.icon({
  icon: 'heart-empty',
  prefix: 'glyphicon',
  markerColor: 'green'
});

var hotelMarker = L.AwesomeMarkers.icon({
  icon: 'header',
  prefix: 'glyphicon',
  markerColor: 'blue'
});

var airportMarker = L.AwesomeMarkers.icon({
  icon: 'plane',
  prefix: 'glyphicon',
  markerColor: 'red'
});

var terraceMarker = L.AwesomeMarkers.icon({
  icon: 'certificate',
  prefix: 'glyphicon',
  markerColor: 'blue'
});

var infoMarker = L.AwesomeMarkers.icon({
  icon: 'info-sign',
  prefix: 'glyphicon',
  markerColor: 'blue'
});

//L.marker([51.941196,4.512291], {icon: redMarker}).addTo(map);

var marker = L.marker([43.029219745087055, -89.32930022478102],{icon:parkMarker}).addTo(map);
marker.bindPopup("<b>Lake Farm Park</b><br>Ceremony and reception location");

var marker = L.marker([43.13692884275527, -89.33703303337097],{icon:airportMarker}).addTo(map);
marker.bindPopup("<b>Dane County Regional Airport</b>");

var marker = L.marker([43.074765820448285, -89.38413262367249],{icon:infoMarker}).addTo(map);
marker.bindPopup("<b>Capital Square</b><br />Home to the Dane County Farmers Market and many restraunts and bars");

var marker = L.marker([43.07674855422983, -89.39929515123367],{icon:terraceMarker}).addTo(map);
marker.bindPopup("<b>Memorial Union Terrace</b><br />Perfect place for brats and beers on the shores of Lake Mendota. No better view in town!");

var marker = L.marker([43.047459483225005, -89.37316507101059],{icon:hotelMarker}).addTo(map);
marker.bindPopup("<b>Sheraton Madison Hotel</b>");
};

if ($('#map').length > 0)
{
  addMap();
}
