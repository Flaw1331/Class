// Create our initial map object
// Set the longitude, latitude, and the starting zoom level

// https://www.mapbox.com/mapbox.js/api/v3.1.1/l-tilelayer/

var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});


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

// City markers

// Add code to create a marker for each city below and add it to the map

// newyork;
// chicago;
// houston;
// la;
// omaha;

var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: "8,550,405"
 },
 {
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: "2,720,546"
 },
 {
  location: [29.7604, -95.3698],
  name: "Houston",
  population: "2,296,224"
 },
 {
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: "3,971,883"
 },
 {
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: "446,599"
 }
 ];

/////////
for (var i=0; i<cities.length;i++){

  var city = cities[i]
  var marker = L.marker([cities[i].location], {
    draggable: false,
    title: cities[i].name
  }).addTo(myMap);

  marker.bindPopup(cities.population)
}