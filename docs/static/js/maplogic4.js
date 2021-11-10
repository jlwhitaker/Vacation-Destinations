// Create a map object.
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4
  });
  
 /* // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);*/

 //Pulling in GoogleStreets -->
 googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
 


//Adding the Google street layer
googleStreets.addTo(myMap)



 //Define a markerSize() function that will give each city a different radius based on its population.
function markerSize(caseload) {
  return Math.sqrt(caseload) * 50;
}




//Top 50 cites Includes Name, State, Location, County, and Total Covid Caseloads
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

// Loop through the cities array, and create one marker for each city object.
for (var i = 0; i < cities.length; i++) {
    // Conditionals for country caseloads
  var color = "";
  if (cities[i].caseload > 600000) {
    color = "#BD0026";
  }
  else if (cities[i].caseload > 400000) {
    color = "#E31A1C";
  }
  else if (cities[i].caseload > 200000) {
    color = "#FC4E2A";
  }
  else if (cities[i].caseload > 100000) {
    color = "#FD8D3C";
  }
  else if (cities[i].caseload > 50000) {
    color = "#FEB24C";
  }
  else if (cities[i].caseload > 10000) {
    color = "#FED976";
  }
  else if (cities[i].caseload > 1500) {
    color = "#FFEDA0";
  }
  else {
    color = "#ccc";
  }
    
    L.circle(cities[i].location, {
      fillOpacity: 0.55,
      color: color,
      
      // Setting our circle's radius to equal the output of our markerSize() function:
      // This will make our marker's size proportionate to its caseload.
      radius: markerSize(cities[i].caseload)
    }).bindPopup(`<h1>${cities[i].name}</h1> <hr> <h3>Caseload: ${cities[i].caseload.toLocaleString()}</h3>`).addTo(myMap);
  }

 
  var cityMarkers = [];

  for (var i = 0; i < cities.length; i++) {
    // loop through the cities array, create a new marker, and push it to the cityMarkers array
    cityMarkers.push(
      L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>").addTo(myMap)
    );
  }
 

  //Trying to add a scale to the map(it)
L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomright'
}).addTo(myMap)  

 // Define layer names
const layers = [
    '0-1500',
    '1500-10000',
    '10000-50000',
    '50000-100000',
    '100000-200000',
    '200000-400000',
    '400000-600000',
    '600000+'
    ];
    const colors = [
    '#FFEDA0',
    '#FED976',
    '#FEB24C',
    '#FD8D3C',
    '#FC4E2A',
    '#E31A1C',
    '#BD0026',
    '#800026'
    ];
     
    // Create legend
    // const legend = document.getElementById('legend');
     
    // layers.forEach((layer, i) => {
    // const color = colors[i];
    // const item = document.createElement('div');
    // const key = document.createElement('span');
    // key.className = 'legend-key';
    // key.style.backgroundColor = color;
     
    // const value = document.createElement('span');
    // value.innerHTML = `${layer}`;
    //  item.appendChild(key);
    //  item.appendChild(value);
    //  legend.appendChild(item);
    //  })
 
    //  L.control.legend.addTo(myMap)
