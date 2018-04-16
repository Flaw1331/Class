// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 13
});

// Adding tile layer to the map
let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg';
let myLayer = L.tileLayer(mapboxUrl, {id: 'mapbox.streets-satellite', maxZoom: 20, accessToken: accessToken});
myLayer.addTo(myMap);

// Building API query URL
var baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
var date = "$where=created_date between'2016-01-10T12:00:00' and '2017-01-01T14:00:00'";
var complaint = "&complaint_type=Rodent";
var limit = "&$limit=10000";

// Assembling API query URL
var url = baseURL + date + complaint + limit;

// Grabbing the data with d3..
d3.json(url, function(response) {

  // Creating a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through our data...
  for (var i = 0; i < response.length; i++) {
    // set the data location property to a variable
    var location = response[i].location;

    // If the data has a location property...
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
        .bindPopup(response[i].descriptor));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
