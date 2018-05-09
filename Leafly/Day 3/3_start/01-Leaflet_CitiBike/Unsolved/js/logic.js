// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;


d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json", createMarkers);

function createMarkers(response) {
    var stations = response.data.stations;
    //console.log(stations);
    let bikeMarkers = [];
    // Loop through the array
    for (let i = 0; i < stations.length; i++) {
        // Add a new marker to the cluster group and bind a pop-up
        let station = stations[i];
        let bikeMarker = L.marker([station.lat, station.lon]).bindPopup("<h3>" + station.name + " - ID#: " + station.station_id + "</h3>Capacity: " + station.capacity);
        // Adds marker to the bikeMarkers array
        bikeMarkers.push(bikeMarker);
    }
    createMap(L.layerGroup(bikeMarkers));
}

function createMap(bikeStations){
    // create the tile layer that will be the background of our map
    let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
    let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg'
    let myLayer = L.tileLayer(mapboxUrl, {
        id: 'mapbox.light', 
        maxZoom: 20,
        accessToken: accessToken});

    var myMap = L.map("map-id", {
        center: [40.73, -74.0059],
        zoom: 12,
        layers: [myLayer, bikeStations]});
    myLayer.addTo(myMap);
}

d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_status.json", analyzeMap);



function analyzeMap(response){
    var stations = response.data.stations;
    console.log(stations);

}