// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([45.52, -122.67], 13);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg';
let myLayer = L.tileLayer(mapboxUrl, {id: 'mapbox.streets-basic', maxZoom: 20, accessToken: accessToken});
myLayer.addTo(myMap);

// Write code here to create a circle using the following coordinates: (45.52, -122.69)

// Write code here to create a polygon with the following coordinates:
// (45.54, -122.68), (45.55, -122.68), (45.55, -122.66)

L.polygon([
    [45.54, -122.68],
    [45.55, -122.68],
    [45.55, -122.66]
  ], {
    color: "yellow",
    fillColor: "yellow",
    fillOpacity: 0.75
  }).addTo(myMap);


// Write code here to create a polyline with the following coordinates:
// (45.51, -122.68), (45.50, -122.60), (45.48, -122.70), (45.54, -122.75)

// Coordinates for each point to be used in the polyline
var line = [
    [45.51, -122.68],
    [45.50, -122.60],
    [45.48, -122.70],
    [45.54, -122.75]
  ];
  
  // Create a polyline using the line coordinates and pass in some initial options
  L.polyline(line, {
    color: "red"
  }).addTo(myMap);


// Write code here to create a rectangle with the following coordinates:
// (45.55, -122.64) and (45.54, -122.61)


// Create a rectangle and pass in some initial options
L.rectangle([
    [45.55, -122.64],
    [45.54, -122.61]
  ], {
    color: "black",
    weight: 3,
    stroke: true
  }).addTo(myMap);
