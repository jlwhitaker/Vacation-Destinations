// An array of cities and their locations
var cities =[
    {
      name: " Wailea",
      state: " Hawaii",
      location: [20.6899733, -156.4392245],
      county: "Hawaii County",
      caseload: 11032
    },
    {
      name: " Cambria",
      state: " California",
      location: [35.5641381, -121.08074],
      county: "San Luis Obispo County",
      caseload: 30291
    },
    {
      name: " Springdale",
      state: " Utah",
      location: [ 37.188931, -112.998588],
      county: "Washington County",
      caseload: 28923
    },
    {
      name: " Quebec City",
      state: " Quebec",
      location: [46.814255,  -71.210034],
      county: "Quebec/Province",
      caseload: 424802
    },
    {
      name: " Ashland",
      state: " Oregon",
      location: [42.194361,  -122.709393],
      county: "Jackson County",
      caseload: 23433
    },
    {
      name: " Calgary",
      state: " Alberta",
      location: [ 51.044827, -114.071519],
      county: "Alberta/Province",
      caseload: 119506
    },
    {
      name: " Victoria",
      state: " British Columbia",
      location: [48.43333, -123.35],
      county: "British Columbia/Province",
      caseload: 204914
    },
    {
      name: " Sedona",
      state: " Arizona",
      location: [34.869691, -111.760978],
      county: "Yavapai County",
      caseload: 28335
    },
    {
      name: " Cambridge",
      state: " Massachusetts",
      location: [42.374911, -71.110046],
      county: "Middlesex County",
      caseload: 159612
    },
    {
      name: " Minneapolis",
      state: " Minnesota",
      location: [44.977479, -93.264358],
      county: "Hennepin County",
      caseload: 156327
    },
    {
      name: " Paso Robles",
      state: " California",
      location: [35.640191, -120.658098],
      county: "San Luis Obispo County",
      caseload: 30291
    },
    {
      name: " Solvang",
      state: " California",
      location: [34.595969, -120.137922],
      county: "Santa Barbara County",
      caseload: 45650
    },
    {
      name: " Bar Harbor",
      state: " Maine",
      location: [44.387552, -68.204295],
      county: "Hancock County",
      caseload: 2851
    },
    {
      name: " Key West",
      state: " Florida",
      location: [24.555057, -81.780036],
      county: "Monroe County",
      caseload: 10520
    },
    {
      name: " Sanibel",
      state: " Florida",
      location: [26.450705, -82.024168],
      county: "Lee County",
      caseload: 124961
    },
    {
      name: " Pittsburgh",
      state: " Pennsylvania",
      location: [40.440763, -79.99589],
      county: "Allegheny County",
      caseload: 131892
    },
    {
      name: " Washington",
      state: " D.C.",
      location: [38.907045, -77.036735],
      county: "District of Columbia",
      caseload: 64240
    },
    {
      name: " Charleston",
      state: " South Carolina",
      location: [32.776473, -79.931048],
      county: "Charleston County",
      caseload: 65233
    },
    {
      name: " Rosemont",
      state: " Illinois",
      location: [41.986686, -87.870528],
      county: "Cook County",
      caseload: 641268
    },
    {
      name: " Montreal",
      state: " Quebec",
      location: [45.5016889, -73.567256],
      county: "Quebec/Province",
      caseload: 426457
    },
    {
      name: " Durango",
      state: " Colorado",
      location: [37.27555, -107.879996],
      county: "La Plata County",
      caseload: 5922
    },
    {
      name: " Vancouver",
      state: " British Columbia",
      location: [49.2827291, -123.1207375],
      county: "British Columbia/Province",
      caseload: 204914
    },
    {
      name: " Kihei",
      state: " Hawaii",
      location: [20.784956, -156.464061],
      county: "Maui County",
      caseload: 9898
    },
    {
      name: " Lahaina",
      state: " Hawaii",
      location: [20.878995, -156.682963],
      county: "Maui County",
      caseload: 9898
    },
    {
      name: " Lihue",
      state: " Hawaii",
      location: [21.981178, -159.367621],
      county: "Kauai County",
      caseload: 2614
    },
    {
      name: " Chicago",
      state: " Illinois",
      location: [41.878156, -87.629309],
      county: "Cook County",
      caseload: 641268
    },
    {
      name: " Asheville",
      state: " North Carolina",
      location: [35.595009, -82.55176],
      county: "Buncombe County",
      caseload: 28191
    },
    {
      name: " Moab",
      state: " Utah",
      location: [38.573294, -109.550776],
      county: "Grand County",
      caseload: 1427
    },
    {
      name: " Seattle",
      state: " Washington",
      location: [47.606098, -122.332914],
      county: "King County",
      caseload: 164221
    },
    {
      name: " Chandler",
      state: " Arizona",
      location: [33.306224, -111.841478],
      county: "Maricopa County",
      caseload: 737103
    },
    {
      name: " Boston",
      state: " Massachusetts",
      location: [42.359135, -71.059846],
      county: "Suffolk County",
      caseload: 107738
    },
    {
      name: " Cleveland",
      state: " Ohio",
      location: [41.499223, -81.694487],
      county: "Cuyahoga County",
      caseload: 148161
    },
    {
      name: " New Orleans",
      state: " Louisiana",
      location: [29.950793, -90.075713],
      county: "Orleans Parish County",
      caseload: 46796
    },
    {
      name: " Treasure Island",
      state: " Florida",
      location: [27.769063, -82.769246],
      county: "Pinellas County",
      caseload: 134378
    },
    {
      name: " Park City",
      state: " Utah",
      location: [40.6460622, -111.4979729],
      county: "Summit County",
      caseload: 6808
    },
    {
      name: " Fargo",
      state: " North Dakota",
      location: [46.87694, -96.789875],
      county: "Cass County",
      caseload: 32212
    },
    {
      name: " Henderson",
      state: " Nevada",
      location: [36.039588, -114.982017],
      county: "Clark County",
      caseload: 339255
    },
    {
      name: " Garden Grove",
      state: " California",
      location: [33.774174, -117.937981],
      county: "Orange County",
      caseload: 326246
    },
    {
      name: " Scottsdale",
      state: " Arizona",
      location: [33.494978, -111.926127],
      county: "Maricopa County",
      caseload: 737103
    },
    {
      name: " Estes Park",
      state: " Colorado",
      location: [40.376647, -105.521561],
      county: "Larimer County",
      caseload: 39807
    },
    {
      name: " Santa Fe",
      state: " New Mexico",
      location: [35.686945, -105.938067],
      county: "Santa Fe County",
      caseload: 13456
    },
    {
      name: " Arlington",
      state: " Virginia",
      location: [38.879884, -77.107548],
      county: "Hopewell City",
      caseload: 3691
    },
    {
      name: " Laguna Beach",
      state: " California",
      location: [33.542734, -117.785349],
      county: "Orange County",
      caseload: 326246
    },
    {
      name: " Newport",
      state: " Rhode Island",
      location: [41.489645, -71.312669],
      county: "Newport County",
      caseload: 8809
    },
    {
      name: " Palm Desert",
      state: " California",
      location: [33.721258, -116.373749],
      county: "Riverside County",
      caseload: 374712
    },
    {
      name: " Avalon",
      state: " California",
      location: [33.3428995, -118.3287135],
      county: "Los Angeles County",
      caseload: 1491402
    },
    {
      name: " Bozeman",
      state: " Montana",
      location: [45.689288, -111.038747],
      county: "Gallatin County",
      caseload: 20680
    },
    {
      name: " La Jolla",
      state: " California",
      location: [32.8328112, -117.2712717],
      county: "San Diego County",
      caseload: 391534
    },
    {
      name: " Portland",
      state: " Maine",
      location: [43.65835, -70.25791],
      county: "Cumberland County",
      caseload: 22078
    },
    {
      name: " Biloxi",
      state: " Mississippi",
      location: [30.392821, -88.885602],
      county: "Harrison County",
      caseload: 34446
    }
  ];

//////////////////////////////////////////////////////////////////
 // An array that will store the created cityMarkers
var cityMarkers = [];

for (var i = 0; i < cities.length; i++) {
   // loop through the cities array, create a new marker, and push it to the cityMarkers array
   cityMarkers.push(
     L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
   );
 }
 
 // Add all the cityMarkers to a new layer group.
 // Now, we can handle them as one group instead of referencing each one individually.
var cityLayer = L.layerGroup(cityMarkers);

////////////////////////////////////////////////////////////////////////////////////////////

// Define variables for our tile layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Only one base layer can be shown at a time.
var baseMaps = {
    Street: street,
    Topography: topo
};
// Create a map object, and set the default layers.
var myMap = L.map("map", {
center: [37.09, -95.71],
zoom: 4,
layers: [street, cityLayer]
});


///////////////////////////////////////////////////////////////////////

// load data for climate as stations

d3.json("/api/climate-data").then(function(response) {
    //load data into stations variable
    var stations = []
    for  (var i = 0; i < response.length; i++) {
        stations.push(response[i]);
    };
    console.log(stations);
    
    //create variables to hold data for each month
    var January = [];
    var February = [];
    var March = [];
    var April = [];
    var May = [];
    var June = [];
    var July = [];
    var August = [];
    var September = [];
    var October = [];
    var November = [];
    var December = [];  

    // pass data from stations into each month
    for (var i = 0; i < stations.length; i++) {
        January.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Jan["Avg High"]});
        February.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Feb["Avg High"]});
        March.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Mar["Avg High"]});
        April.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Apr["Avg High"]});
        May.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.May["Avg High"]});
        June.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Jun["Avg High"]});
        July.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Jul["Avg High"]});
        //August.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Aug["Avg High"]});
        September.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Sep["Avg High"]});
        October.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Oct["Avg High"]});
        November.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Nov["Avg High"]});
        December.push({lat: stations[i].Location["Lat"], lng: stations[i].Location.Long, temp: stations[i].Climate.Dec["Avg High"]});
    };
    //create an array holding all the months to loop through
    var monthlyArrays = [January,February, March, April, May, June, July,August, September, October, November, December]

    //create new array for the final whole layer variables for each month
    monthLayers= []

    //loop through the months to create the layers
    for (var i = 0; i < monthlyArrays.length; i++) {

        var LayerBasis = {
        "radius": 1,
        // scales the radius based on map zoom
        "minOpacity": .3,
        "maxOpacity": .8, 
        "scaleRadius": true, 
      // if set to false the heatmap uses the global maximum for colorization
      // if activated: uses the data maximum within the current map boundaries 
      //   (there will always be a red spot with useLocalExtremas true)
        useLocalExtrema: false,
        gradient: {.45: "blue", .65: "lime", .80: "orange", .90: "red"},
      // which field name in your data represents the latitude - default "lat"
        latField: 'lat',
      // which field name in your data represents the longitude - default "lng"
        lngField: 'lng',
      // which field name in your data represents the data value - default "value"
        valueField: 'temp'
        };
        var Layername = [i].toString() + "-Layer";

        //create layer & set data
        var layer = new HeatmapOverlay(LayerBasis);
        layer.setData({min: 10, max: 110, data: monthlyArrays[i]});

        //push layer to the array holding all final layers
        monthLayers.push(layer)
    }
    console.log(monthLayers)
    


// Overlays that can be toggled on or off
    var overlayMaps = {
    Cities: cityLayer,
    January: monthLayers[0],
    February: monthLayers[1],
    March: monthLayers[2],
    April: monthLayers[3],
    May: monthLayers[4],
    June: monthLayers[5],
    July: monthLayers[6],
  //August: monthLayers[7],
    September: monthLayers[7],
    October: monthLayers[8],
    November: monthLayers[9],
    December: monthLayers[10],
    };



// Pass our map layers into our layer control.
// Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps).addTo(myMap);

//Trying to add a scale to the map(it worked)
    L.control.scale({
        metric: true,
        imperial: false,
        position: 'bottomright'
    }).addTo(myMap)

});

