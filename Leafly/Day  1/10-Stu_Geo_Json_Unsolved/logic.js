// Store our API endpoint as queryUrl
var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";


// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  console.log(data.features);
  // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
  createFeatures(data.features);
})

function createFeatures(earthquakeData) {
  function onEachFeature(feature, layer){
  }
  var earthquakes = L.geoJSON(earthquakeData, { 
    // onEachFature 
  });
  createMap(earthquakes);
}

function createMap(earthquakes){

  // Define variables for our base layers
  let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
  let accessToken = 'pk.eyJ1IjoiZmxhdzEzMzEiLCJhIjoiY2pmeDVhNXVlMDFxczJxdGxyNXp5Mjh4aSJ9.lUaWaK2BUWrzrr2uDR303Q';
  let streetMap = L.tileLayer(mapboxUrl, {id: 'mapbox.light', maxZoom: 20, accessToken: accessToken});
  let darkMap = L.tileLayer(mapboxUrl, {id: 'mapbox.dark', maxZoom: 20, accessToken: accessToken});

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetMap,
    "Dark Map": darkMap
  };

  // Create a new map
  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [streetMap, earthquakes]
  });

  // Create a layer control containing our baseMaps
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Be sure to add an overlay Layer containing the earthquake GeoJSON
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}