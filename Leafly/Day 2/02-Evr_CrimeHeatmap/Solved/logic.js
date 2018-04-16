
// Store our API endpoint as queryUrl
var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-04-01&endtime=2018-04-13&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

// Create a new map
var myMap = L.map("map", {
  center: [
    37.09, -95.71
  ],
  zoom: 4
});
let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg';
let myLayer = L.tileLayer(mapboxUrl, {id: 'mapbox.streets-satellite', maxZoom: 20, accessToken: accessToken});
myLayer.addTo(myMap);




// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  data = data.features;
  var heatArray = [];
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i])
    var longitude = data[i].geometry.coordinates[0];
    var latitude = data[i].geometry.coordinates[1];
    if (latitude) {
      heatArray.push([latitude, longitude, 100.0])
    }
  }
  // console.log(heatArray);
  var heat = L.heatLayer(heatArray, {
    radius: 15
  }).addTo(myMap)

});

