// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

// https://www.mapbox.com/mapbox.js/api/v3.1.1/l-tilelayer/

var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 15
});


// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map

// mapbox.streets
// mapbox.light
// mapbox.dark
// mapbox.satellite
// mapbox.streets-satellite
// mapbox.wheatpaste
// mapbox.streets-basic
// mapbox.comic
// mapbox.outdoors
// mapbox.run-bike-hike
// mapbox.pencil
// mapbox.pirates
// mapbox.emerald
// mapbox.high-contrast
let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoiZmxhdzEzMzEiLCJhIjoiY2pmeDVhNXVlMDFxczJxdGxyNXp5Mjh4aSJ9.lUaWaK2BUWrzrr2uDR303Q';
let myLayer = L.tileLayer(mapboxUrl, {id: 'mapbox.streets-basic', maxZoom: 20, accessToken: accessToken});
myLayer.addTo(myMap);



// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
var marker = L.marker([45.52, -122.67], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("Hello There!");


