// Function to determine marker size based on population
function markerSize(population) {
  return population / 40;
}

// An array containing all of the information needed to create city and state markers
var locations = [
  {
    coordinates: [40.7128, -74.0059],
    state: {
      name: "New York State",
      population: 19795791
    },
    city: {
      name: "New York",
      population: 8550405
    }
  },
  {
    coordinates: [34.0522, -118.2437],
    state: {
      name: "California",
      population: 39250017
    },
    city: {
      name: "Lost Angeles",
      population: 3971883
    }
  },
  {
    coordinates: [41.8781, -87.6298],
    state: {
      name: "Michigan",
      population: 9928300
    },
    city: {
      name: "Chicago",
      population: 2720546
    }
  },
  {
    coordinates: [29.7604, -95.3698],
    state: {
      name: "Texas",
      population: 26960000
    },
    city: {
      name: "Houston",
      population: 2296224
    }
  },
  {
    coordinates: [41.2524, -95.9980],
    state: {
      name: "Nebraska",
      population: 1882000
    },
    city: {
      name: "Omaha",
      population: 446599
    }
  }
];

// Define arrays to hold created city and state markers
var cityMarkers = [];
var stateMarkers = [];

// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  stateMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize(locations[i].state.population)
    })
  );

  // Setting the marker radius for the city by passing population into the markerSize function
  cityMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "purple",
      fillColor: "purple",
      radius: markerSize(locations[i].city.population)
    })
  );
}

// Define variables for our base layers
let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg';
let streetMap = L.tileLayer(mapboxUrl, {id: 'mapbox.light', maxZoom: 20, accessToken: accessToken});
let darkMap = L.tileLayer(mapboxUrl, {id: 'mapbox.dark', maxZoom: 20, accessToken: accessToken});

// Create two separate layer groups: one for cities and one for states
var states = L.layerGroup(stateMarkers);
var cities = L.layerGroup(cityMarkers);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetMap,
  "Dark Map": darkMap
};

// Create an overlay object
var overlayMaps = {
  "State Population": states,
  "City Population": cities
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [streetMap, states, cities]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
