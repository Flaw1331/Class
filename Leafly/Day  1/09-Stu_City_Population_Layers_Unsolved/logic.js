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
  // Set the marker radius for the state by passing population into the markerSize function
  stateMarkers.push(
    L.circle(locations[i].coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "white",
      radius: markerSize(locations[i].state.population)
    })
  );

  // Set the marker radius for the city by passing population into the markerSize function
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

// Create base layers
let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoiZmxhdzEzMzEiLCJhIjoiY2pmeDVhNXVlMDFxczJxdGxyNXp5Mjh4aSJ9.lUaWaK2BUWrzrr2uDR303Q';


let streetMap = L.tileLayer(mapboxUrl, {id: 'mapbox.light', maxZoom: 20, accessToken: accessToken});
let darkMap = L.tileLayer(mapboxUrl, {id: 'mapbox.dark', maxZoom: 20, accessToken: accessToken});

// Create two separate layer groups below. One for city markers, and one for states markers

var cityLayer = L.layerGroup(cityMarkers);
var stateLayer = L.layerGroup(stateMarkers);

// Create a baseMaps object to contain the streetmap and darkmap

var baseMaps = {
  "Street Map": streetMap,
  "Dark Map": darkMap
};

// Create an overlayMaps object here to contain the "State Population" and "City Population" layers

var overlayMaps = {
  "City Population": cityLayer,
  "State Population": stateLayer
};

// Modify the map so that it will have the streetmap, states, and cities layers

var myMap = L.map("map", {
  center: [29.7604, -95.3698],
  zoom: 5,
  layers: [streetMap, cityLayer, stateLayer]
});

// Create a layer control, containing our baseMaps and overlayMaps, and add them to the map

L.control.layers(baseMaps, overlayMaps).addTo(myMap);


