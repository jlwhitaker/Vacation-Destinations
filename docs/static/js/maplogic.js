// An array of cities and their locations
var cities =[
  {
    name: "Bayonne",
    state: "New Jersey",
    country: "US",
    location: [40.66871 , -74.1143]
  },
  {
    name: "Bergenfield",
    state: "New Jersey",
    country: "US",
    location: [40.9276 , -73.99736]
  },
  {
    name: "Cliffside Park",
    state: "New Jersey",
    country: "US",
    location: [40.82149 , -73.98764]
  },
  {
    name: "Englewood",
    state: "New Jersey",
    country: "US",
    location: [40.89288 , -73.97264]
  },
  {
    name: "Fair Lawn",
    state: "New Jersey",
    country: "US",
    location: [40.94038 , -74.13181]
  },
  {
    name: "Fort Lee",
    state: "New Jersey",
    country: "US",
    location: [40.85093 , -73.97014]
  },
  {
    name: "Hackensack",
    state: "New Jersey",
    country: "US",
    location: [40.88593 , -74.04347]
  },
  {
    name: "Hoboken",
    state: "New Jersey",
    country: "US",
    location: [40.74399 , -74.03236]
  },
  {
    name: "Jersey City",
    state: "New Jersey",
    country: "US",
    location: [40.72816 , -74.07764]
  },
  {
    name: "Kearny",
    state: "New Jersey",
    country: "US",
    location: [40.76843 , -74.14542]
  },
  {
    name: "North Bergen",
    state: "New Jersey",
    country: "US",
    location: [40.80427 , -74.01208]
  },
  {
    name: "Paramus",
    state: "New Jersey",
    country: "US",
    location: [40.94454 , -74.07542]
  },
  {
    name: "Ridgewood",
    state: "New Jersey",
    country: "US",
    location: [40.97926 , -74.11653]
  },
  {
    name: "Teaneck",
    state: "New Jersey",
    country: "US",
    location: [40.8976 , -74.01597]
  },
  {
    name: "Union City",
    state: "New Jersey",
    country: "US",
    location: [40.77955 , -74.02375]
  },
  {
    name: "West New York",
    state: "New Jersey",
    country: "US",
    location: [40.78788 , -74.01431]
  },
  {
    name: "Washington",
    state: "District of Columbia",
    country: "US",
    location: [38.89511 , -77.03637]
  },
  {
    name: "Bridgeport",
    state: "Connecticut",
    country: "US",
    location: [41.16704 , -73.20483]
  },
  {
    name: "Danbury",
    state: "Connecticut",
    country: "US",
    location: [41.39482 , -73.45401]
  },
  {
    name: "East Haven",
    state: "Connecticut",
    country: "US",
    location: [41.27621 , -72.86843]
  },
  {
    name: "Meriden",
    state: "Connecticut",
    country: "US",
    location: [41.53815 , -72.80704]
  },
  {
    name: "Milford",
    state: "Connecticut",
    country: "US",
    location: [41.22232 , -73.0565]
  },
  {
    name: "Naugatuck",
    state: "Connecticut",
    country: "US",
    location: [41.48593 , -73.05066]
  },
  {
    name: "New Haven",
    state: "Connecticut",
    country: "US",
    location: [41.30815 , -72.92816]
  },
  {
    name: "North Haven",
    state: "Connecticut",
    country: "US",
    location: [41.39093 , -72.85954]
  },
  {
    name: "Norwalk",
    state: "Connecticut",
    country: "US",
    location: [41.1176 , -73.4079]
  },
  {
    name: "Shelton",
    state: "Connecticut",
    country: "US",
    location: [41.31649 , -73.09316]
  },
  {
    name: "Stamford",
    state: "Connecticut",
    country: "US",
    location: [41.05343 , -73.53873]
  },
  {
    name: "Stratford",
    state: "Connecticut",
    country: "US",
    location: [41.18454 , -73.13317]
  },
  {
    name: "Trumbull",
    state: "Connecticut",
    country: "US",
    location: [41.24287 , -73.20067]
  },
  {
    name: "Waterbury",
    state: "Connecticut",
    country: "US",
    location: [41.55815 , -73.0515]
  },
  {
    name: "West Haven",
    state: "Connecticut",
    country: "US",
    location: [41.27065 , -72.94705]
  },
  {
    name: "Westport",
    state: "Connecticut",
    country: "US",
    location: [41.14149 , -73.3579]
  },
  {
    name: "Alabaster",
    state: "Alabama",
    country: "US",
    location: [33.24428 , -86.81638]
  },
  {
    name: "Bessemer",
    state: "Alabama",
    country: "US",
    location: [33.40178 , -86.95444]
  },
  {
    name: "Birmingham",
    state: "Alabama",
    country: "US",
    location: [33.52066 , -86.80249]
  },
  {
    name: "Center Point",
    state: "Alabama",
    country: "US",
    location: [33.64566 , -86.6836]
  },
  {
    name: "Homewood",
    state: "Alabama",
    country: "US",
    location: [33.47177 , -86.80082]
  },
  {
    name: "Hoover",
    state: "Alabama",
    country: "US",
    location: [33.40539 , -86.81138]
  },
  {
    name: "Mountain Brook",
    state: "Alabama",
    country: "US",
    location: [33.50094 , -86.75221]
  },
  {
    name: "Tuscaloosa",
    state: "Alabama",
    country: "US",
    location: [33.20984 , -87.56917]
  },
  {
    name: "Vestavia Hills",
    state: "Alabama",
    country: "US",
    location: [33.44872 , -86.78777]
  },
  {
    name: "Bainbridge Island",
    state: "Washington",
    country: "US",
    location: [47.62621 , -122.52124]
  },
  {
    name: "Burien",
    state: "Washington",
    country: "US",
    location: [47.47038 , -122.34679]
  },
  {
    name: "Des Moines",
    state: "Washington",
    country: "US",
    location: [47.40177 , -122.32429]
  },
  {
    name: "Mercer Island",
    state: "Washington",
    country: "US",
    location: [47.57065 , -122.22207]
  },
  {
    name: "Seattle",
    state: "Washington",
    country: "US",
    location: [47.60621 , -122.33207]
  },
  {
    name: "Shoreline",
    state: "Washington",
    country: "US",
    location: [47.75565 , -122.34152]
  },
  {
    name: "White Center",
    state: "Washington",
    country: "US",
    location: [47.51732 , -122.35485]
  },
  {
    name: "Auburn",
    state: "Maine",
    country: "US",
    location: [44.09785 , -70.23117]
  },
  {
    name: "Augusta",
    state: "Maine",
    country: "US",
    location: [44.31062 , -69.77949]
  },
  {
    name: "Bangor",
    state: "Maine",
    country: "US",
    location: [44.80118 , -68.77781]
  },
  {
    name: "Biddeford",
    state: "Maine",
    country: "US",
    location: [43.49258 , -70.45338]
  },
  {
    name: "Brunswick",
    state: "Maine",
    country: "US",
    location: [43.91452 , -69.96533]
  },
  {
    name: "Lewiston",
    state: "Maine",
    country: "US",
    location: [44.10035 , -70.21478]
  },
  {
    name: "South Portland",
    state: "Maine",
    country: "US",
    location: [43.64147 , -70.24088]
  },
  {
    name: "South Portland",
    state: "Maine",
    country: "US",
    location: [43.64147 , -70.24088]
  },
  {
    name: "Boise",
    state: "Idaho",
    country: "US",
    location: [43.6135 , -116.20345]
  },
  {
    name: "Caldwell",
    state: "Idaho",
    country: "US",
    location: [43.66294 , -116.68736]
  },
  {
    name: "Coeur d''Alene",
    state: "Idaho",
    country: "US",
    location: [47.67768 , -116.78047]
  },
  {
    name: "Idaho Falls",
    state: "Idaho",
    country: "US",
    location: [43.46658 , -112.03414]
  },
  {
    name: "Lewiston",
    state: "Idaho",
    country: "US",
    location: [46.41655 , -117.01766]
  },
  {
    name: "Meridian",
    state: "Idaho",
    country: "US",
    location: [43.61211 , -116.39151]
  },
  {
    name: "Moscow",
    state: "Idaho",
    country: "US",
    location: [46.73239 , -117.00017]
  },
  {
    name: "Nampa",
    state: "Idaho",
    country: "US",
    location: [43.54072 , -116.56346]
  },
  {
    name: "Pocatello",
    state: "Idaho",
    country: "US",
    location: [42.8713 , -112.44553]
  },
  {
    name: "Twin Falls",
    state: "Idaho",
    country: "US",
    location: [42.56297 , -114.46087]
  },
  {
    name: "Atwater",
    state: "California",
    country: "US",
    location: [37.34772 , -120.60908]
  },
  {
    name: "Ceres",
    state: "California",
    country: "US",
    location: [37.59493 , -120.95771]
  },
  {
    name: "Lodi",
    state: "California",
    country: "US",
    location: [38.1302 , -121.27245]
  },
  {
    name: "Los Banos",
    state: "California",
    country: "US",
    location: [37.05828 , -120.84992]
  },
  {
    name: "Manteca",
    state: "California",
    country: "US",
    location: [37.79743 , -121.21605]
  },
  {
    name: "Merced",
    state: "California",
    country: "US",
    location: [37.30216 , -120.48297]
  },
  {
    name: "West Modesto",
    state: "California",
    country: "US",
    location: [37.61754 , -121.03914]
  },
  {
    name: "Stockton",
    state: "California",
    country: "US",
    location: [37.9577 , -121.29078]
  },
  {
    name: "Tracy",
    state: "California",
    country: "US",
    location: [37.73987 , -121.42618]
  },
  {
    name: "Turlock",
    state: "California",
    country: "US",
    location: [37.49466 , -120.84659]
  },
  {
    name: "San Antonio",
    state: "Texas",
    country: "US",
    location: [29.42412 , -98.49363]
  },
  {
    name: "New York City",
    state: "New York",
    country: "US",
    location: [40.71427 , -74.00597]
  },
  {
    name: "New York City",
    state: "New York",
    country: "US",
    location: [40.71427 , -74.00597]
  },
  {
    name: "Los Angeles",
    state: "California",
    country: "US",
    location: [34.05223 , -118.24368]
  },
  {
    name: "Allen",
    state: "Texas",
    country: "US",
    location: [33.10317 , -96.67055]
  },
  {
    name: "Arlington",
    state: "Texas",
    country: "US",
    location: [32.73569 , -97.10807]
  },
  {
    name: "Carrollton",
    state: "Texas",
    country: "US",
    location: [32.95373 , -96.89028]
  },
  {
    name: "Cedar Hill",
    state: "Texas",
    country: "US",
    location: [32.58847 , -96.95612]
  },
  {
    name: "Coppell",
    state: "Texas",
    country: "US",
    location: [32.95457 , -97.01501]
  },
  {
    name: "Dallas",
    state: "Texas",
    country: "US",
    location: [32.78306 , -96.80667]
  },
  {
    name: "DeSoto",
    state: "Texas",
    country: "US",
    location: [32.58986 , -96.85695]
  },
  {
    name: "Duncanville",
    state: "Texas",
    country: "US",
    location: [32.6518 , -96.90834]
  },
  {
    name: "Farmers Branch",
    state: "Texas",
    country: "US",
    location: [32.92651 , -96.89612]
  },
  {
    name: "Flower Mound",
    state: "Texas",
    country: "US",
    location: [33.01457 , -97.09696]
  },
  {
    name: "Frisco",
    state: "Texas",
    country: "US",
    location: [33.15067 , -96.82361]
  },
  {
    name: "Garland",
    state: "Texas",
    country: "US",
    location: [32.91262 , -96.63888]
  },
  {
    name: "Grand Prairie",
    state: "Texas",
    country: "US",
    location: [32.74596 , -96.99778]
  },
  {
    name: "Irving",
    state: "Texas",
    country: "US",
    location: [32.81402 , -96.94889]
  },
  {
    name: "Lancaster",
    state: "Texas",
    country: "US",
    location: [32.59208 , -96.75611]
  },
  {
    name: "Lewisville",
    state: "Texas",
    country: "US",
    location: [33.04623 , -96.99417]
  },
  {
    name: "McKinney",
    state: "Texas",
    country: "US",
    location: [33.19762 , -96.61527]
  },
  {
    name: "Mesquite",
    state: "Texas",
    country: "US",
    location: [32.7668 , -96.59916]
  },
  {
    name: "Plano",
    state: "Texas",
    country: "US",
    location: [33.01984 , -96.69889]
  },
  {
    name: "Richardson",
    state: "Texas",
    country: "US",
    location: [32.94818 , -96.72972]
  },
  {
    name: "Rowlett",
    state: "Texas",
    country: "US",
    location: [32.9029 , -96.56388]
  },
  {
    name: "The Colony",
    state: "Texas",
    country: "US",
    location: [33.08901 , -96.88639]
  },
  {
    name: "University Park",
    state: "Texas",
    country: "US",
    location: [32.85013 , -96.80028]
  },
  {
    name: "Waxahachie",
    state: "Texas",
    country: "US",
    location: [32.38653 , -96.84833]
  },
  {
    name: "Levittown",
    state: "Pennsylvania",
    country: "US",
    location: [40.15511 , -74.82877]
  },
  {
    name: "Philadelphia",
    state: "Pennsylvania",
    country: "US",
    location: [39.95233 , -75.16379]
  },
  {
    name: "Brook Park",
    state: "Ohio",
    country: "US",
    location: [41.39838 , -81.80458]
  },
  {
    name: "East Cleveland",
    state: "Ohio",
    country: "US",
    location: [41.53311 , -81.57901]
  },
  {
    name: "Cleveland Heights",
    state: "Ohio",
    country: "US",
    location: [41.52005 , -81.55624]
  },
  {
    name: "East Cleveland",
    state: "Ohio",
    country: "US",
    location: [41.53311 , -81.57901]
  },
  {
    name: "South Euclid",
    state: "Ohio",
    country: "US",
    location: [41.52311 , -81.51846]
  },
  {
    name: "Garfield Heights",
    state: "Ohio",
    country: "US",
    location: [41.417 , -81.60596]
  },
  {
    name: "Lakewood",
    state: "Ohio",
    country: "US",
    location: [41.48199 , -81.79819]
  },
  {
    name: "Maple Heights",
    state: "Ohio",
    country: "US",
    location: [41.41533 , -81.56596]
  },
  {
    name: "Parma",
    state: "Ohio",
    country: "US",
    location: [41.40477 , -81.72291]
  },
  {
    name: "Shaker Heights",
    state: "Ohio",
    country: "US",
    location: [41.47394 , -81.53707]
  },
  {
    name: "South Euclid",
    state: "Ohio",
    country: "US",
    location: [41.52311 , -81.51846]
  },
  {
    name: "Champaign",
    state: "Illinois",
    country: "US",
    location: [40.11642 , -88.24338]
  },
  {
    name: "Charleston",
    state: "Illinois",
    country: "US",
    location: [39.49615 , -88.17615]
  },
  {
    name: "Danville",
    state: "Illinois",
    country: "US",
    location: [40.12448 , -87.63002]
  },
  {
    name: "Decatur",
    state: "Illinois",
    country: "US",
    location: [39.84031 , -88.9548]
  },
  {
    name: "Quincy",
    state: "Illinois",
    country: "US",
    location: [39.9356 , -91.40987]
  },
  {
    name: "Springfield",
    state: "Illinois",
    country: "US",
    location: [39.80172 , -89.64371]
  },
  {
    name: "Urbana",
    state: "Illinois",
    country: "US",
    location: [40.11059 , -88.20727]
  },
  {
    name: "Andover",
    state: "Minnesota",
    country: "US",
    location: [45.2333 , -93.29134]
  },
  {
    name: "Duluth",
    state: "Minnesota",
    country: "US",
    location: [46.78327 , -92.10658]
  },
  {
    name: "Moorhead",
    state: "Minnesota",
    country: "US",
    location: [46.87386 , -96.76951]
  },
  {
    name: "East Chicago",
    state: "Indiana",
    country: "US",
    location: [41.6392 , -87.45476]
  },
  {
    name: "Gary",
    state: "Indiana",
    country: "US",
    location: [41.59337 , -87.34643]
  },
  {
    name: "Hammond",
    state: "Indiana",
    country: "US",
    location: [41.58337 , -87.50004]
  },
  {
    name: "Highland",
    state: "Indiana",
    country: "US",
    location: [41.55365 , -87.45198]
  },
  {
    name: "Hobart",
    state: "Indiana",
    country: "US",
    location: [41.53226 , -87.25504]
  },
  {
    name: "LaPorte",
    state: "Indiana",
    country: "US",
    location: [41.6106 , -86.72252]
  },
  {
    name: "Merrillville",
    state: "Indiana",
    country: "US",
    location: [41.48281 , -87.33281]
  },
  {
    name: "Michigan City",
    state: "Indiana",
    country: "US",
    location: [41.70754 , -86.89503]
  },
  {
    name: "Munster",
    state: "Indiana",
    country: "US",
    location: [41.56448 , -87.51254]
  },
  {
    name: "Portage",
    state: "Indiana",
    country: "US",
    location: [41.57587 , -87.17615]
  },
  {
    name: "Schererville",
    state: "Indiana",
    country: "US",
    location: [41.47892 , -87.45476]
  },
  {
    name: "Valparaiso",
    state: "Indiana",
    country: "US",
    location: [41.47309 , -87.06114]
  },
  {
    name: "Athens",
    state: "Ohio",
    country: "US",
    location: [39.32924 , -82.10126]
  },
  {
    name: "Chillicothe",
    state: "Ohio",
    country: "US",
    location: [39.33312 , -82.9824]
  },
  {
    name: "Delaware",
    state: "Ohio",
    country: "US",
    location: [40.29867 , -83.06797]
  },
  {
    name: "Lancaster",
    state: "Ohio",
    country: "US",
    location: [39.71368 , -82.59933]
  },
  {
    name: "Marion",
    state: "Ohio",
    country: "US",
    location: [40.58867 , -83.12852]
  },
  {
    name: "Newark",
    state: "Ohio",
    country: "US",
    location: [40.05812 , -82.40126]
  },
  {
    name: "Portsmouth",
    state: "Ohio",
    country: "US",
    location: [38.73174 , -82.99767]
  },
  {
    name: "Zanesville",
    state: "Ohio",
    country: "US",
    location: [39.94035 , -82.01319]
  },
  {
    name: "Algonquin",
    state: "Illinois",
    country: "US",
    location: [42.16558 , -88.29425]
  },
  {
    name: "Arlington Heights",
    state: "Illinois",
    country: "US",
    location: [42.08836 , -87.98063]
  },
  {
    name: "Buffalo Grove",
    state: "Illinois",
    country: "US",
    location: [42.15141 , -87.95979]
  },
  {
    name: "Carpentersville",
    state: "Illinois",
    country: "US",
    location: [42.12114 , -88.25786]
  },
  {
    name: "Des Plaines",
    state: "Illinois",
    country: "US",
    location: [42.03336 , -87.8834]
  },
  {
    name: "South Elgin",
    state: "Illinois",
    country: "US",
    location: [41.99419 , -88.2923]
  },
  {
    name: "Elk Grove Village",
    state: "Illinois",
    country: "US",
    location: [42.00392 , -87.97035]
  },
  {
    name: "Evanston",
    state: "Illinois",
    country: "US",
    location: [42.04114 , -87.69006]
  },
  {
    name: "Glenview",
    state: "Illinois",
    country: "US",
    location: [42.06975 , -87.78784]
  },
  {
    name: "Gurnee",
    state: "Illinois",
    country: "US",
    location: [42.3703 , -87.90202]
  },
  {
    name: "Highland Park",
    state: "Illinois",
    country: "US",
    location: [42.18169 , -87.80034]
  },
  {
    name: "Hoffman Estates",
    state: "Illinois",
    country: "US",
    location: [42.04281 , -88.0798]
  },
  {
    name: "Lake Forest",
    state: "Illinois",
    country: "US",
    location: [42.25863 , -87.84063]
  },
  {
    name: "Lake in the Hills",
    state: "Illinois",
    country: "US",
    location: [42.18169 , -88.33036]
  },
  {
    name: "Libertyville",
    state: "Illinois",
    country: "US",
    location: [42.28308 , -87.95313]
  },
  {
    name: "Morton Grove",
    state: "Illinois",
    country: "US",
    location: [42.04059 , -87.78256]
  },
  {
    name: "Mount Prospect",
    state: "Illinois",
    country: "US",
    location: [42.06642 , -87.93729]
  },
  {
    name: "Mundelein",
    state: "Illinois",
    country: "US",
    location: [42.26308 , -88.00397]
  },
  {
    name: "Niles",
    state: "Illinois",
    country: "US",
    location: [42.01892 , -87.80284]
  },
  {
    name: "North Chicago",
    state: "Illinois",
    country: "US",
    location: [42.32558 , -87.84118]
  },
  {
    name: "Northbrook",
    state: "Illinois",
    country: "US",
    location: [42.12753 , -87.82895]
  },
  {
    name: "Palatine",
    state: "Illinois",
    country: "US",
    location: [42.1103 , -88.03424]
  },
  {
    name: "Park Ridge",
    state: "Illinois",
    country: "US",
    location: [42.01114 , -87.84062]
  },
  {
    name: "Rolling Meadows",
    state: "Illinois",
    country: "US",
    location: [42.08419 , -88.01313]
  },
  {
    name: "Round Lake Beach",
    state: "Illinois",
    country: "US",
    location: [42.37169 , -88.09008]
  },
  {
    name: "Schaumburg",
    state: "Illinois",
    country: "US",
    location: [42.03336 , -88.08341]
  },
  {
    name: "Skokie",
    state: "Illinois",
    country: "US",
    location: [42.03336 , -87.73339]
  },
  {
    name: "Vernon Hills",
    state: "Illinois",
    country: "US",
    location: [42.21947 , -87.97952]
  },
  {
    name: "Waukegan",
    state: "Illinois",
    country: "US",
    location: [42.36363 , -87.84479]
  },
  {
    name: "Wheeling",
    state: "Illinois",
    country: "US",
    location: [42.13919 , -87.92896]
  },
  {
    name: "Wilmette",
    state: "Illinois",
    country: "US",
    location: [42.07225 , -87.72284]
  },
  {
    name: "Zion",
    state: "Illinois",
    country: "US",
    location: [42.44613 , -87.83285]
  },
  {
    name: "Baton Rouge",
    state: "Louisiana",
    country: "US",
    location: [30.45075 , -91.15455]
  },
  {
    name: "Biloxi",
    state: "Mississippi",
    country: "US",
    location: [30.39603 , -88.88531]
  },
  {
    name: "West Gulfport",
    state: "Mississippi",
    country: "US",
    location: [30.40409 , -89.0942]
  },
  {
    name: "Pascagoula",
    state: "Mississippi",
    country: "US",
    location: [30.36576 , -88.55613]
  },
  {
    name: "Albany",
    state: "Georgia",
    country: "US",
    location: [31.57851 , -84.15574]
  },
  {
    name: "Valdosta",
    state: "Georgia",
    country: "US",
    location: [30.83334 , -83.28032]
  },
  {
    name: "Muskegon",
    state: "Michigan",
    country: "US",
    location: [43.23418 , -86.24839]
  },
  {
    name: "Norton Shores",
    state: "Michigan",
    country: "US",
    location: [43.1689 , -86.26395]
  },
  {
    name: "Shelby",
    state: "Michigan",
    country: "US",
    location: [42.67087 , -83.03298]
  },
  {
    name: "Akron",
    state: "Ohio",
    country: "US",
    location: [41.08144 , -81.51901]
  },
  {
    name: "Alliance",
    state: "Ohio",
    country: "US",
    location: [40.91534 , -81.10593]
  },
  {
    name: "Austintown",
    state: "Ohio",
    country: "US",
    location: [41.10172 , -80.76452]
  },
  {
    name: "Barberton",
    state: "Ohio",
    country: "US",
    location: [41.01283 , -81.60512]
  },
  {
    name: "Boardman",
    state: "Ohio",
    country: "US",
    location: [41.02423 , -80.66285]
  },
  {
    name: "Brunswick",
    state: "Ohio",
    country: "US",
    location: [41.23811 , -81.8418]
  },
  {
    name: "North Canton",
    state: "Ohio",
    country: "US",
    location: [40.87589 , -81.40234]
  },
  {
    name: "Cuyahoga Falls",
    state: "Ohio",
    country: "US",
    location: [41.13394 , -81.48456]
  },
  {
    name: "Green",
    state: "Ohio",
    country: "US",
    location: [40.94589 , -81.48317]
  },
  {
    name: "Hudson",
    state: "Ohio",
    country: "US",
    location: [41.24006 , -81.44067]
  },
  {
    name: "Kent",
    state: "Ohio",
    country: "US",
    location: [41.15367 , -81.35789]
  },
  {
    name: "Massillon",
    state: "Ohio",
    country: "US",
    location: [40.79672 , -81.52151]
  },
  {
    name: "Medina",
    state: "Ohio",
    country: "US",
    location: [41.13839 , -81.86375]
  },
  {
    name: "Niles",
    state: "Ohio",
    country: "US",
    location: [41.18284 , -80.76536]
  },
  {
    name: "Stow",
    state: "Ohio",
    country: "US",
    location: [41.1595 , -81.44039]
  },
  {
    name: "Warren",
    state: "Ohio",
    country: "US",
    location: [41.23756 , -80.81842]
  },
  {
    name: "Wooster",
    state: "Ohio",
    country: "US",
    location: [40.80517 , -81.93646]
  },
  {
    name: "Youngstown",
    state: "Ohio",
    country: "US",
    location: [41.09978 , -80.64952]
  },
  {
    name: "Bonita Springs",
    state: "Florida",
    country: "US",
    location: [26.33981 , -81.7787]
  },
  {
    name: "Cape Coral",
    state: "Florida",
    country: "US",
    location: [26.56285 , -81.94953]
  },
  {
    name: "North Fort Myers",
    state: "Florida",
    country: "US",
    location: [26.66729 , -81.88009]
  },
  {
    name: "Golden Gate",
    state: "Florida",
    country: "US",
    location: [26.18787 , -81.69509]
  },
  {
    name: "Lehigh Acres",
    state: "Florida",
    country: "US",
    location: [26.62535 , -81.6248]
  },
  {
    name: "Naples",
    state: "Florida",
    country: "US",
    location: [26.14234 , -81.79596]
  },
  {
    name: "North Fort Myers",
    state: "Florida",
    country: "US",
    location: [26.66729 , -81.88009]
  },
  {
    name: "Aspen Hill",
    state: "Maryland",
    country: "US",
    location: [39.07955 , -77.07303]
  },
  {
    name: "North Bethesda",
    state: "Maryland",
    country: "US",
    location: [39.04455 , -77.11887]
  },
  {
    name: "Bowie",
    state: "Maryland",
    country: "US",
    location: [38.94278 , -76.73028]
  },
  {
    name: "Chillum",
    state: "Maryland",
    country: "US",
    location: [38.96372 , -76.99081]
  },
  {
    name: "Clinton",
    state: "Maryland",
    country: "US",
    location: [38.76511 , -76.89831]
  },
  {
    name: "College Park",
    state: "Maryland",
    country: "US",
    location: [38.98067 , -76.93692]
  },
  {
    name: "Cumberland",
    state: "Maryland",
    country: "US",
    location: [39.65287 , -78.76252]
  },
  {
    name: "Fairland",
    state: "Maryland",
    country: "US",
    location: [39.07622 , -76.95775]
  },
  {
    name: "Fort Washington",
    state: "Maryland",
    country: "US",
    location: [38.70734 , -77.02303]
  },
  {
    name: "Frederick",
    state: "Maryland",
    country: "US",
    location: [39.41427 , -77.41054]
  },
  {
    name: "Gaithersburg",
    state: "Maryland",
    country: "US",
    location: [39.14344 , -77.20137]
  },
  {
    name: "Germantown",
    state: "Maryland",
    country: "US",
    location: [39.17316 , -77.27165]
  },
  {
    name: "Greenbelt",
    state: "Maryland",
    country: "US",
    location: [39.00455 , -76.87553]
  },
  {
    name: "Hagerstown",
    state: "Maryland",
    country: "US",
    location: [39.64176 , -77.71999]
  },
  {
    name: "Landover",
    state: "Maryland",
    country: "US",
    location: [38.934 , -76.89664]
  },
  {
    name: "Montgomery Village",
    state: "Maryland",
    country: "US",
    location: [39.17677 , -77.19526]
  },
  {
    name: "North Bethesda",
    state: "Maryland",
    country: "US",
    location: [39.04455 , -77.11887]
  },
  {
    name: "South Laurel",
    state: "Maryland",
    country: "US",
    location: [39.06983 , -76.85025]
  },
  {
    name: "North Potomac",
    state: "Maryland",
    country: "US",
    location: [39.08289 , -77.26498]
  },
  {
    name: "Olney",
    state: "Maryland",
    country: "US",
    location: [39.15316 , -77.06692]
  },
  {
    name: "Potomac",
    state: "Maryland",
    country: "US",
    location: [39.01817 , -77.20859]
  },
  {
    name: "Rockville",
    state: "Maryland",
    country: "US",
    location: [39.084 , -77.15276]
  },
  {
    name: "Silver Spring",
    state: "Maryland",
    country: "US",
    location: [38.99067 , -77.02609]
  },
  {
    name: "South Laurel",
    state: "Maryland",
    country: "US",
    location: [39.06983 , -76.85025]
  },
  {
    name: "Saint Charles",
    state: "Maryland",
    country: "US",
    location: [38.60317 , -76.93858]
  },
  {
    name: "Suitland",
    state: "Maryland",
    country: "US",
    location: [38.84872 , -76.92386]
  },
  {
    name: "Waldorf",
    state: "Maryland",
    country: "US",
    location: [38.62456 , -76.93914]
  },
  {
    name: "White Oak",
    state: "Maryland",
    country: "US",
    location: [39.03983 , -76.99303]
  },
  {
    name: "West Bloomfield Township",
    state: "Michigan",
    country: "US",
    location: [42.56891 , -83.38356]
  },
  {
    name: "Farmington Hills",
    state: "Michigan",
    country: "US",
    location: [42.48531 , -83.37716]
  },
  {
    name: "Ferndale",
    state: "Michigan",
    country: "US",
    location: [42.46059 , -83.13465]
  },
  {
    name: "Madison Heights",
    state: "Michigan",
    country: "US",
    location: [42.48587 , -83.1052]
  },
  {
    name: "Novi",
    state: "Michigan",
    country: "US",
    location: [42.48059 , -83.47549]
  },
  {
    name: "Oak Park",
    state: "Michigan",
    country: "US",
    location: [42.45948 , -83.18271]
  },
  {
    name: "Pontiac",
    state: "Michigan",
    country: "US",
    location: [42.63892 , -83.29105]
  },
  {
    name: "Rochester Hills",
    state: "Michigan",
    country: "US",
    location: [42.65837 , -83.14993]
  },
  {
    name: "Royal Oak",
    state: "Michigan",
    country: "US",
    location: [42.48948 , -83.14465]
  },
  {
    name: "Southfield",
    state: "Michigan",
    country: "US",
    location: [42.47337 , -83.22187]
  },
  {
    name: "Troy",
    state: "Michigan",
    country: "US",
    location: [42.60559 , -83.14993]
  },
  {
    name: "Waterford",
    state: "Michigan",
    country: "US",
    location: [42.69303 , -83.41181]
  },
  {
    name: "West Bloomfield Township",
    state: "Michigan",
    country: "US",
    location: [42.56891 , -83.38356]
  },
  {
    name: "Mobile",
    state: "Alabama",
    country: "US",
    location: [30.69436 , -88.04305]
  },
  {
    name: "Prichard",
    state: "Alabama",
    country: "US",
    location: [30.7388 , -88.07889]
  },
  {
    name: "Greenville",
    state: "North Carolina",
    country: "US",
    location: [35.61266 , -77.36635]
  },
  {
    name: "Havelock",
    state: "North Carolina",
    country: "US",
    location: [34.87905 , -76.90133]
  },
  {
    name: "Kinston",
    state: "North Carolina",
    country: "US",
    location: [35.26266 , -77.58164]
  },
  {
    name: "New Bern",
    state: "North Carolina",
    country: "US",
    location: [35.10849 , -77.04411]
  },
  {
    name: "Rocky Mount",
    state: "North Carolina",
    country: "US",
    location: [35.93821 , -77.79053]
  },
  {
    name: "Wilson",
    state: "North Carolina",
    country: "US",
    location: [35.72127 , -77.91554]
  },
  {
    name: "Auburn",
    state: "Washington",
    country: "US",
    location: [47.30732 , -122.22845]
  },
  {
    name: "East Hill-Meridian",
    state: "Washington",
    country: "US",
    location: [47.41052 , -122.17369]
  },
  {
    name: "Federal Way",
    state: "Washington",
    country: "US",
    location: [47.32232 , -122.31262]
  },
  {
    name: "Lakewood",
    state: "Washington",
    country: "US",
    location: [47.17176 , -122.51846]
  },
  {
    name: "Parkland",
    state: "Washington",
    country: "US",
    location: [47.15538 , -122.43401]
  },
  {
    name: "Puyallup",
    state: "Washington",
    country: "US",
    location: [47.18538 , -122.2929]
  },
  {
    name: "South Hill",
    state: "Washington",
    country: "US",
    location: [47.14121 , -122.27012]
  },
  {
    name: "Spanaway",
    state: "Washington",
    country: "US",
    location: [47.10399 , -122.43457]
  },
  {
    name: "Tacoma",
    state: "Washington",
    country: "US",
    location: [47.25288 , -122.44429]
  },
  {
    name: "University Place",
    state: "Washington",
    country: "US",
    location: [47.23565 , -122.5504]
  },
  {
    name: "Copperas Cove",
    state: "Texas",
    country: "US",
    location: [31.12406 , -97.90308]
  },
  {
    name: "Fort Hood",
    state: "Texas",
    country: "US",
    location: [31.13489 , -97.77561]
  },
  {
    name: "Killeen",
    state: "Texas",
    country: "US",
    location: [31.11712 , -97.7278]
  },
  {
    name: "Temple",
    state: "Texas",
    country: "US",
    location: [31.09823 , -97.34278]
  },
  {
    name: "Waco",
    state: "Texas",
    country: "US",
    location: [31.54933 , -97.14667]
  },
  {
    name: "Anniston",
    state: "Alabama",
    country: "US",
    location: [33.65983 , -85.83163]
  },
  {
    name: "Decatur",
    state: "Alabama",
    country: "US",
    location: [34.60593 , -86.98334]
  },
  {
    name: "Florence",
    state: "Alabama",
    country: "US",
    location: [34.79981 , -87.67725]
  },
  {
    name: "Gadsden",
    state: "Alabama",
    country: "US",
    location: [34.01426 , -86.00664]
  },
  {
    name: "Huntsville",
    state: "Alabama",
    country: "US",
    location: [34.73037 , -86.5861]
  },
  {
    name: "Madison",
    state: "Alabama",
    country: "US",
    location: [34.69926 , -86.74833]
  },
  {
    name: "Fort Wayne",
    state: "Indiana",
    country: "US",
    location: [41.1306 , -85.12886]
  },
  {
    name: "Brookfield",
    state: "Wisconsin",
    country: "US",
    location: [43.06057 , -88.10648]
  },
  {
    name: "Caledonia",
    state: "Wisconsin",
    country: "US",
    location: [42.8078 , -87.92425]
  },
  {
    name: "Kenosha",
    state: "Wisconsin",
    country: "US",
    location: [42.58474 , -87.82119]
  },
  {
    name: "Menomonee Falls",
    state: "Wisconsin",
    country: "US",
    location: [43.1789 , -88.11731]
  },
  {
    name: "Mequon",
    state: "Wisconsin",
    country: "US",
    location: [43.2364 , -87.98453]
  },
  {
    name: "Muskego",
    state: "Wisconsin",
    country: "US",
    location: [42.90585 , -88.13898]
  },
  {
    name: "New Berlin",
    state: "Wisconsin",
    country: "US",
    location: [42.9764 , -88.10842]
  },
  {
    name: "Racine",
    state: "Wisconsin",
    country: "US",
    location: [42.72613 , -87.78285]
  },
  {
    name: "Waukesha",
    state: "Wisconsin",
    country: "US",
    location: [43.01168 , -88.23148]
  },
  {
    name: "West Bend",
    state: "Wisconsin",
    country: "US",
    location: [43.42528 , -88.18343]
  },
  {
    name: "Levittown",
    state: "Pennsylvania",
    country: "US",
    location: [40.15511 , -74.82877]
  },
  {
    name: "Philadelphia",
    state: "Pennsylvania",
    country: "US",
    location: [39.95233 , -75.16379]
  },
  {
    name: "Battle Creek",
    state: "Michigan",
    country: "US",
    location: [42.3173 , -85.17816]
  },
  {
    name: "Kalamazoo",
    state: "Michigan",
    country: "US",
    location: [42.29171 , -85.58723]
  },
  {
    name: "Portage",
    state: "Michigan",
    country: "US",
    location: [42.20115 , -85.58]
  },
  {
    name: "Bowling Green",
    state: "Kentucky",
    country: "US",
    location: [36.99032 , -86.4436]
  },
  {
    name: "Elizabethtown",
    state: "Kentucky",
    country: "US",
    location: [37.69395 , -85.85913]
  },
  {
    name: "Henderson",
    state: "Kentucky",
    country: "US",
    location: [37.83615 , -87.59001]
  },
  {
    name: "Hopkinsville",
    state: "Kentucky",
    country: "US",
    location: [36.86561 , -87.49117]
  },
  {
    name: "Owensboro",
    state: "Kentucky",
    country: "US",
    location: [37.77422 , -87.11333]
  },
  {
    name: "Paducah",
    state: "Kentucky",
    country: "US",
    location: [37.08339 , -88.60005]
  },
  {
    name: "Radcliff",
    state: "Kentucky",
    country: "US",
    location: [37.84035 , -85.94913]
  },
  {
    name: "Back Mountain",
    state: "Pennsylvania",
    country: "US",
    location: [41.33591 , -75.99631]
  },
  {
    name: "Hazleton",
    state: "Pennsylvania",
    country: "US",
    location: [40.95842 , -75.97465]
  },
  {
    name: "Scranton",
    state: "Pennsylvania",
    country: "US",
    location: [41.40916 , -75.6649]
  },
  {
    name: "Wilkes-Barre",
    state: "Pennsylvania",
    country: "US",
    location: [41.24591 , -75.88131]
  },
  {
    name: "Williamsport",
    state: "Pennsylvania",
    country: "US",
    location: [41.24119 , -77.00108]
  },
  {
    name: "Richmond",
    state: "Virginia",
    country: "US",
    location: [37.55376 , -77.46026]
  },
  {
    name: "Alvin",
    state: "Texas",
    country: "US",
    location: [29.42385 , -95.2441]
  },
  {
    name: "Atascocita",
    state: "Texas",
    country: "US",
    location: [29.99883 , -95.1766]
  },
  {
    name: "Baytown",
    state: "Texas",
    country: "US",
    location: [29.7355 , -94.97743]
  },
  {
    name: "Channelview",
    state: "Texas",
    country: "US",
    location: [29.77606 , -95.11465]
  },
  {
    name: "Cloverleaf",
    state: "Texas",
    country: "US",
    location: [29.77828 , -95.17188]
  },
  {
    name: "Deer Park",
    state: "Texas",
    country: "US",
    location: [29.70523 , -95.12382]
  },
  {
    name: "Friendswood",
    state: "Texas",
    country: "US",
    location: [29.5294 , -95.20104]
  },
  {
    name: "South Houston",
    state: "Texas",
    country: "US",
    location: [29.66301 , -95.23549]
  },
  {
    name: "La Porte",
    state: "Texas",
    country: "US",
    location: [29.66578 , -95.01937]
  },
  {
    name: "League City",
    state: "Texas",
    country: "US",
    location: [29.50745 , -95.09493]
  },
  {
    name: "Mission Bend",
    state: "Texas",
    country: "US",
    location: [29.69384 , -95.66495]
  },
  {
    name: "Missouri City",
    state: "Texas",
    country: "US",
    location: [29.61857 , -95.53772]
  },
  {
    name: "Pasadena",
    state: "Texas",
    country: "US",
    location: [29.69106 , -95.2091]
  },
  {
    name: "Pearland",
    state: "Texas",
    country: "US",
    location: [29.56357 , -95.28605]
  },
  {
    name: "Rosenberg",
    state: "Texas",
    country: "US",
    location: [29.55718 , -95.80856]
  },
  {
    name: "Spring",
    state: "Texas",
    country: "US",
    location: [30.07994 , -95.41716]
  },
  {
    name: "Sugar Land",
    state: "Texas",
    country: "US",
    location: [29.61968 , -95.63495]
  },
  {
    name: "The Woodlands",
    state: "Texas",
    country: "US",
    location: [30.15799 , -95.48938]
  },
  {
    name: "Aspen Hill",
    state: "Maryland",
    country: "US",
    location: [39.07955 , -77.07303]
  },
  {
    name: "North Bethesda",
    state: "Maryland",
    country: "US",
    location: [39.04455 , -77.11887]
  },
  {
    name: "Bowie",
    state: "Maryland",
    country: "US",
    location: [38.94278 , -76.73028]
  },
  {
    name: "Chillum",
    state: "Maryland",
    country: "US",
    location: [38.96372 , -76.99081]
  },
  {
    name: "Clinton",
    state: "Maryland",
    country: "US",
    location: [38.76511 , -76.89831]
  },
  {
    name: "College Park",
    state: "Maryland",
    country: "US",
    location: [38.98067 , -76.93692]
  },
  {
    name: "Cumberland",
    state: "Maryland",
    country: "US",
    location: [39.65287 , -78.76252]
  },
  {
    name: "Fairland",
    state: "Maryland",
    country: "US",
    location: [39.07622 , -76.95775]
  },
  {
    name: "Fort Washington",
    state: "Maryland",
    country: "US",
    location: [38.70734 , -77.02303]
  },
  {
    name: "Frederick",
    state: "Maryland",
    country: "US",
    location: [39.41427 , -77.41054]
  },
  {
    name: "Gaithersburg",
    state: "Maryland",
    country: "US",
    location: [39.14344 , -77.20137]
  },
  {
    name: "Germantown",
    state: "Maryland",
    country: "US",
    location: [39.17316 , -77.27165]
  },
  {
    name: "Greenbelt",
    state: "Maryland",
    country: "US",
    location: [39.00455 , -76.87553]
  },
  {
    name: "Hagerstown",
    state: "Maryland",
    country: "US",
    location: [39.64176 , -77.71999]
  },
  {
    name: "Landover",
    state: "Maryland",
    country: "US",
    location: [38.934 , -76.89664]
  },
  {
    name: "Montgomery Village",
    state: "Maryland",
    country: "US",
    location: [39.17677 , -77.19526]
  },
  {
    name: "North Bethesda",
    state: "Maryland",
    country: "US",
    location: [39.04455 , -77.11887]
  },
  {
    name: "South Laurel",
    state: "Maryland",
    country: "US",
    location: [39.06983 , -76.85025]
  },
  {
    name: "North Potomac",
    state: "Maryland",
    country: "US",
    location: [39.08289 , -77.26498]
  },
  {
    name: "Olney",
    state: "Maryland",
    country: "US",
    location: [39.15316 , -77.06692]
  },
  {
    name: "Potomac",
    state: "Maryland",
    country: "US",
    location: [39.01817 , -77.20859]
  },
  {
    name: "Rockville",
    state: "Maryland",
    country: "US",
    location: [39.084 , -77.15276]
  },
  {
    name: "Silver Spring",
    state: "Maryland",
    country: "US",
    location: [38.99067 , -77.02609]
  },
  {
    name: "South Laurel",
    state: "Maryland",
    country: "US",
    location: [39.06983 , -76.85025]
  },
  {
    name: "Saint Charles",
    state: "Maryland",
    country: "US",
    location: [38.60317 , -76.93858]
  },
  {
    name: "Suitland",
    state: "Maryland",
    country: "US",
    location: [38.84872 , -76.92386]
  },
  {
    name: "Waldorf",
    state: "Maryland",
    country: "US",
    location: [38.62456 , -76.93914]
  },
  {
    name: "White Oak",
    state: "Maryland",
    country: "US",
    location: [39.03983 , -76.99303]
  },
  {
    name: "Dover",
    state: "Delaware",
    country: "US",
    location: [39.15817 , -75.52437]
  },
  {
    name: "Newark",
    state: "Delaware",
    country: "US",
    location: [39.68372 , -75.74966]
  },
  {
    name: "Wilmington",
    state: "Delaware",
    country: "US",
    location: [39.74595 , -75.54659]
  },
  {
    name: "Arvada",
    state: "Colorado",
    country: "US",
    location: [39.80276 , -105.08748]
  },
  {
    name: "Aurora",
    state: "Colorado",
    country: "US",
    location: [39.72943 , -104.83192]
  },
  {
    name: "Boulder",
    state: "Colorado",
    country: "US",
    location: [40.01499 , -105.27055]
  },
  {
    name: "Brighton",
    state: "Colorado",
    country: "US",
    location: [39.98526 , -104.82053]
  },
  {
    name: "Broomfield",
    state: "Colorado",
    country: "US",
    location: [39.92054 , -105.08665]
  },
  {
    name: "Castle Rock",
    state: "Colorado",
    country: "US",
    location: [39.37221 , -104.85609]
  },
  {
    name: "Castlewood",
    state: "Colorado",
    country: "US",
    location: [39.58471 , -104.90109]
  },
  {
    name: "Columbine",
    state: "Colorado",
    country: "US",
    location: [39.58777 , -105.06943]
  },
  {
    name: "Commerce City",
    state: "Colorado",
    country: "US",
    location: [39.80832 , -104.93387]
  },
  {
    name: "Denver",
    state: "Colorado",
    country: "US",
    location: [39.73915 , -104.9847]
  },
  {
    name: "Englewood",
    state: "Colorado",
    country: "US",
    location: [39.64777 , -104.98776]
  },
  {
    name: "Highlands Ranch",
    state: "Colorado",
    country: "US",
    location: [39.55388 , -104.96943]
  },
  {
    name: "Ken Caryl",
    state: "Colorado",
    country: "US",
    location: [39.57582 , -105.11221]
  },
  {
    name: "Lafayette",
    state: "Colorado",
    country: "US",
    location: [39.9936 , -105.08971]
  },
  {
    name: "Lakewood",
    state: "Colorado",
    country: "US",
    location: [39.70471 , -105.08137]
  },
  {
    name: "Littleton",
    state: "Colorado",
    country: "US",
    location: [39.61332 , -105.01665]
  },
  {
    name: "Longmont",
    state: "Colorado",
    country: "US",
    location: [40.16721 , -105.10193]
  },
  {
    name: "Loveland",
    state: "Colorado",
    country: "US",
    location: [40.39776 , -105.07498]
  },
  {
    name: "Northglenn",
    state: "Colorado",
    country: "US",
    location: [39.88554 , -104.9872]
  },
  {
    name: "Parker",
    state: "Colorado",
    country: "US",
    location: [39.5186 , -104.76136]
  },
  {
    name: "Southglenn",
    state: "Colorado",
    country: "US",
    location: [39.58721 , -104.95276]
  },
  {
    name: "Thornton",
    state: "Colorado",
    country: "US",
    location: [39.86804 , -104.97192]
  },
  {
    name: "Westminster",
    state: "Colorado",
    country: "US",
    location: [39.83665 , -105.0372]
  },
  {
    name: "Wheat Ridge",
    state: "Colorado",
    country: "US",
    location: [39.7661 , -105.07721]
  },
  {
    name: "South Charleston",
    state: "West Virginia",
    country: "US",
    location: [38.36843 , -81.69957]
  },
  {
    name: "Huntington",
    state: "West Virginia",
    country: "US",
    location: [38.41925 , -82.44515]
  },
  {
    name: "Morgantown",
    state: "West Virginia",
    country: "US",
    location: [39.62953 , -79.9559]
  },
  {
    name: "Parkersburg",
    state: "West Virginia",
    country: "US",
    location: [39.26674 , -81.56151]
  },
  {
    name: "Weirton",
    state: "West Virginia",
    country: "US",
    location: [40.41896 , -80.58952]
  },
  {
    name: "Wheeling",
    state: "West Virginia",
    country: "US",
    location: [40.06396 , -80.72091]
  },
  {
    name: "Aventura",
    state: "Florida",
    country: "US",
    location: [25.95648 , -80.13921]
  },
  {
    name: "Carol City",
    state: "Florida",
    country: "US",
    location: [25.94065 , -80.2456]
  },
  {
    name: "Coral Gables",
    state: "Florida",
    country: "US",
    location: [25.72149 , -80.26838]
  },
  {
    name: "Coral Terrace",
    state: "Florida",
    country: "US",
    location: [25.74593 , -80.3045]
  },
  {
    name: "Country Club",
    state: "Florida",
    country: "US",
    location: [25.94815 , -80.317]
  },
  {
    name: "Cutler Ridge",
    state: "Florida",
    country: "US",
    location: [25.58066 , -80.34672]
  },
  {
    name: "Doral",
    state: "Florida",
    country: "US",
    location: [25.81954 , -80.35533]
  },
  {
    name: "Golden Glades",
    state: "Florida",
    country: "US",
    location: [25.91176 , -80.20033]
  },
  {
    name: "Hialeah",
    state: "Florida",
    country: "US",
    location: [25.8576 , -80.27811]
  },
  {
    name: "Homestead",
    state: "Florida",
    country: "US",
    location: [25.46872 , -80.47756]
  },
  {
    name: "Kendale Lakes",
    state: "Florida",
    country: "US",
    location: [25.70816 , -80.407]
  },
  {
    name: "Kendall West",
    state: "Florida",
    country: "US",
    location: [25.7065 , -80.4388]
  },
  {
    name: "Key West",
    state: "Florida",
    country: "US",
    location: [24.55524 , -81.78163]
  },
  {
    name: "Leisure City",
    state: "Florida",
    country: "US",
    location: [25.49539 , -80.42922]
  },
  {
    name: "West Miami",
    state: "Florida",
    country: "US",
    location: [25.76343 , -80.29616]
  },
  {
    name: "North Miami Beach",
    state: "Florida",
    country: "US",
    location: [25.93315 , -80.16255]
  },
  {
    name: "Miami Lakes",
    state: "Florida",
    country: "US",
    location: [25.90871 , -80.30866]
  },
  {
    name: "Miramar",
    state: "Florida",
    country: "US",
    location: [25.98731 , -80.23227]
  },
  {
    name: "Norland",
    state: "Florida",
    country: "US",
    location: [25.94898 , -80.21227]
  },
  {
    name: "North Miami",
    state: "Florida",
    country: "US",
    location: [25.89009 , -80.18671]
  },
  {
    name: "North Miami Beach",
    state: "Florida",
    country: "US",
    location: [25.93315 , -80.16255]
  },
  {
    name: "Richmond West",
    state: "Florida",
    country: "US",
    location: [25.6105 , -80.42971]
  },
  {
    name: "Richmond Heights",
    state: "Florida",
    country: "US",
    location: [25.63149 , -80.36894]
  },
  {
    name: "South Miami Heights",
    state: "Florida",
    country: "US",
    location: [25.59761 , -80.38061]
  },
  {
    name: "Tamiami",
    state: "Florida",
    country: "US",
    location: [25.75871 , -80.39839]
  },
  {
    name: "West Little River",
    state: "Florida",
    country: "US",
    location: [25.85704 , -80.23699]
  },
  {
    name: "Westchester",
    state: "Florida",
    country: "US",
    location: [25.75482 , -80.32727]
  },
  {
    name: "Casper",
    state: "Wyoming",
    country: "US",
    location: [42.86663 , -106.31308]
  },
  {
    name: "Cheyenne",
    state: "Wyoming",
    country: "US",
    location: [41.13998 , -104.82025]
  },
  {
    name: "Gillette",
    state: "Wyoming",
    country: "US",
    location: [44.29109 , -105.50222]
  },
  {
    name: "Laramie",
    state: "Wyoming",
    country: "US",
    location: [41.31137 , -105.5911]
  },
  {
    name: "Grand Island",
    state: "Nebraska",
    country: "US",
    location: [40.92501 , -98.34201]
  },
  {
    name: "Kearney",
    state: "Nebraska",
    country: "US",
    location: [40.69946 , -99.08148]
  },
  {
    name: "North Platte",
    state: "Nebraska",
    country: "US",
    location: [41.12389 , -100.76542]
  },
  {
    name: "Bloomington",
    state: "Illinois",
    country: "US",
    location: [40.4842 , -88.99369]
  },
  {
    name: "East Moline",
    state: "Illinois",
    country: "US",
    location: [41.50087 , -90.4443]
  },
  {
    name: "East Peoria",
    state: "Illinois",
    country: "US",
    location: [40.66615 , -89.5801]
  },
  {
    name: "Galesburg",
    state: "Illinois",
    country: "US",
    location: [40.94782 , -90.37124]
  },
  {
    name: "Moline",
    state: "Illinois",
    country: "US",
    location: [41.5067 , -90.51513]
  },
  {
    name: "Normal",
    state: "Illinois",
    country: "US",
    location: [40.5142 , -88.99063]
  },
  {
    name: "Pekin",
    state: "Illinois",
    country: "US",
    location: [40.56754 , -89.64066]
  },
  {
    name: "Peoria",
    state: "Illinois",
    country: "US",
    location: [40.69365 , -89.58899]
  },
  {
    name: "Rock Island",
    state: "Illinois",
    country: "US",
    location: [41.50948 , -90.57875]
  },
  {
    name: "Beverly Hills",
    state: "California",
    country: "US",
    location: [34.07362 , -118.40036]
  },
  {
    name: "West Carson",
    state: "California",
    country: "US",
    location: [33.82168 , -118.29257]
  },
  {
    name: "Culver City",
    state: "California",
    country: "US",
    location: [34.02112 , -118.39647]
  },
  {
    name: "Gardena",
    state: "California",
    country: "US",
    location: [33.88835 , -118.30896]
  },
  {
    name: "Hawthorne",
    state: "California",
    country: "US",
    location: [33.9164 , -118.35257]
  },
  {
    name: "Inglewood",
    state: "California",
    country: "US",
    location: [33.96168 , -118.35313]
  },
  {
    name: "Lawndale",
    state: "California",
    country: "US",
    location: [33.88724 , -118.35257]
  },
  {
    name: "Lennox",
    state: "California",
    country: "US",
    location: [33.93807 , -118.35258]
  },
  {
    name: "Lomita",
    state: "California",
    country: "US",
    location: [33.79224 , -118.31507]
  },
  {
    name: "Lynwood",
    state: "California",
    country: "US",
    location: [33.93029 , -118.21146]
  },
  {
    name: "Manhattan Beach",
    state: "California",
    country: "US",
    location: [33.88474 , -118.41091]
  },
  {
    name: "Rancho Palos Verdes",
    state: "California",
    country: "US",
    location: [33.74446 , -118.38702]
  },
  {
    name: "Redondo Beach",
    state: "California",
    country: "US",
    location: [33.84918 , -118.38841]
  },
  {
    name: "Santa Monica",
    state: "California",
    country: "US",
    location: [34.01945 , -118.49119]
  },
  {
    name: "Torrance",
    state: "California",
    country: "US",
    location: [33.83585 , -118.34063]
  },
  {
    name: "West Carson",
    state: "California",
    country: "US",
    location: [33.82168 , -118.29257]
  },
  {
    name: "West Chicago",
    state: "Illinois",
    country: "US",
    location: [41.88475 , -88.20396]
  },
  {
    name: "Allen Park",
    state: "Michigan",
    country: "US",
    location: [42.25754 , -83.21104]
  },
  {
    name: "Dearborn",
    state: "Michigan",
    country: "US",
    location: [42.32226 , -83.17631]
  },
  {
    name: "Dearborn Heights",
    state: "Michigan",
    country: "US",
    location: [42.33698 , -83.27326]
  },
  {
    name: "Detroit",
    state: "Michigan",
    country: "US",
    location: [42.33143 , -83.04575]
  },
  {
    name: "Hamtramck",
    state: "Michigan",
    country: "US",
    location: [42.39282 , -83.04964]
  },
  {
    name: "Inkster",
    state: "Michigan",
    country: "US",
    location: [42.2942 , -83.30993]
  },
  {
    name: "Lincoln Park",
    state: "Michigan",
    country: "US",
    location: [42.25059 , -83.17854]
  },
  {
    name: "Redford",
    state: "Michigan",
    country: "US",
    location: [42.38337 , -83.2966]
  },
  {
    name: "Taylor",
    state: "Michigan",
    country: "US",
    location: [42.24087 , -83.26965]
  },
  {
    name: "Kirkwood",
    state: "Missouri",
    country: "US",
    location: [38.58339 , -90.40678]
  },
  {
    name: "Maryland Heights",
    state: "Missouri",
    country: "US",
    location: [38.71311 , -90.42984]
  },
  {
    name: "Mehlville",
    state: "Missouri",
    country: "US",
    location: [38.50839 , -90.32289]
  },
  {
    name: "Oakville",
    state: "Missouri",
    country: "US",
    location: [38.47005 , -90.30456]
  },
  {
    name: "Spanish Lake",
    state: "Missouri",
    country: "US",
    location: [38.78783 , -90.21594]
  },
  {
    name: "St. Louis",
    state: "Missouri",
    country: "US",
    location: [38.62727 , -90.19789]
  },
  {
    name: "University City",
    state: "Missouri",
    country: "US",
    location: [38.65588 , -90.30928]
  },
  {
    name: "Webster Groves",
    state: "Missouri",
    country: "US",
    location: [38.59255 , -90.35734]
  },
  {
    name: "Affton",
    state: "Missouri",
    country: "US",
    location: [38.55061 , -90.33317]
  },
  {
    name: "Ferguson",
    state: "Missouri",
    country: "US",
    location: [38.74422 , -90.30539]
  },
  {
    name: "Florissant",
    state: "Missouri",
    country: "US",
    location: [38.78922 , -90.32261]
  },
  {
    name: "Hazelwood",
    state: "Missouri",
    country: "US",
    location: [38.77144 , -90.37095]
  },
  {
    name: "Auburn",
    state: "New York",
    country: "US",
    location: [42.93173 , -76.56605]
  },
  {
    name: "Rome",
    state: "New York",
    country: "US",
    location: [43.21285 , -75.45573]
  },
  {
    name: "Syracuse",
    state: "New York",
    country: "US",
    location: [43.04812 , -76.14742]
  },
  {
    name: "Utica",
    state: "New York",
    country: "US",
    location: [43.1009 , -75.23266]
  },
  {
    name: "Watertown",
    state: "New York",
    country: "US",
    location: [43.97478 , -75.91076]
  },
  {
    name: "Wichita",
    state: "Kansas",
    country: "US",
    location: [37.69224 , -97.33754]
  },
  {
    name: "Carmel",
    state: "Indiana",
    country: "US",
    location: [39.97837 , -86.11804]
  },
  {
    name: "Fishers",
    state: "Indiana",
    country: "US",
    location: [39.95559 , -86.01387]
  },
  {
    name: "Greenwood",
    state: "Indiana",
    country: "US",
    location: [39.61366 , -86.10665]
  },
  {
    name: "Indianapolis",
    state: "Indiana",
    country: "US",
    location: [39.76838 , -86.15804]
  },
  {
    name: "Lawrence",
    state: "Indiana",
    country: "US",
    location: [39.83865 , -86.02526]
  },
  {
    name: "Noblesville",
    state: "Indiana",
    country: "US",
    location: [40.04559 , -86.0086]
  },
  {
    name: "Alexandria",
    state: "Louisiana",
    country: "US",
    location: [31.31129 , -92.44514]
  },
  {
    name: "Bossier City",
    state: "Louisiana",
    country: "US",
    location: [32.51599 , -93.73212]
  },
  {
    name: "West Monroe",
    state: "Louisiana",
    country: "US",
    location: [32.51848 , -92.14764]
  },
  {
    name: "Ruston",
    state: "Louisiana",
    country: "US",
    location: [32.52321 , -92.63793]
  },
  {
    name: "Shreveport",
    state: "Louisiana",
    country: "US",
    location: [32.52515 , -93.75018]
  },
  {
    name: "Burlington",
    state: "Iowa",
    country: "US",
    location: [40.80754 , -91.11292]
  },
  {
    name: "Cedar Falls",
    state: "Iowa",
    country: "US",
    location: [42.52776 , -92.44547]
  },
  {
    name: "Cedar Rapids",
    state: "Iowa",
    country: "US",
    location: [42.00833 , -91.64407]
  },
  {
    name: "Iowa City",
    state: "Iowa",
    country: "US",
    location: [41.66113 , -91.53017]
  },
  {
    name: "Marion",
    state: "Iowa",
    country: "US",
    location: [42.03417 , -91.59768]
  },
  {
    name: "Waterloo",
    state: "Iowa",
    country: "US",
    location: [42.49276 , -92.34296]
  },
  {
    name: "Saint Cloud",
    state: "Minnesota",
    country: "US",
    location: [45.5608 , -94.16249]
  },
  {
    name: "Altamonte Springs",
    state: "Florida",
    country: "US",
    location: [28.66111 , -81.36562]
  },
  {
    name: "South Apopka",
    state: "Florida",
    country: "US",
    location: [28.66194 , -81.50952]
  },
  {
    name: "Casselberry",
    state: "Florida",
    country: "US",
    location: [28.67778 , -81.32785]
  },
  {
    name: "Kissimmee",
    state: "Florida",
    country: "US",
    location: [28.30468 , -81.41667]
  },
  {
    name: "West Melbourne",
    state: "Florida",
    country: "US",
    location: [28.07168 , -80.65339]
  },
  {
    name: "Merritt Island",
    state: "Florida",
    country: "US",
    location: [28.53917 , -80.672]
  },
  {
    name: "Oak Ridge",
    state: "Florida",
    country: "US",
    location: [28.47112 , -81.42452]
  },
  {
    name: "Ocoee",
    state: "Florida",
    country: "US",
    location: [28.56917 , -81.54396]
  },
  {
    name: "Orlando",
    state: "Florida",
    country: "US",
    location: [28.53834 , -81.37924]
  },
  {
    name: "Oviedo",
    state: "Florida",
    country: "US",
    location: [28.67 , -81.20812]
  },
  {
    name: "Palm Bay",
    state: "Florida",
    country: "US",
    location: [28.03446 , -80.58866]
  },
  {
    name: "Pine Hills",
    state: "Florida",
    country: "US",
    location: [28.55778 , -81.4534]
  },
  {
    name: "Rockledge",
    state: "Florida",
    country: "US",
    location: [28.35084 , -80.72533]
  },
  {
    name: "Sanford",
    state: "Florida",
    country: "US",
    location: [28.80055 , -81.27312]
  },
  {
    name: "Saint Cloud",
    state: "Florida",
    country: "US",
    location: [28.2489 , -81.28118]
  },
  {
    name: "Titusville",
    state: "Florida",
    country: "US",
    location: [28.61222 , -80.80755]
  },
  {
    name: "University Park",
    state: "Florida",
    country: "US",
    location: [25.74649 , -80.36755]
  },
  {
    name: "Wekiwa Springs",
    state: "Florida",
    country: "US",
    location: [28.69861 , -81.42563]
  },
  {
    name: "Winter Park",
    state: "Florida",
    country: "US",
    location: [28.6 , -81.33924]
  },
  {
    name: "Winter Springs",
    state: "Florida",
    country: "US",
    location: [28.69889 , -81.30812]
  },
  {
    name: "Bell",
    state: "California",
    country: "US",
    location: [33.97751 , -118.18702]
  },
  {
    name: "Bell Gardens",
    state: "California",
    country: "US",
    location: [33.96529 , -118.15146]
  },
  {
    name: "Cudahy",
    state: "California",
    country: "US",
    location: [33.96057 , -118.18535]
  },
  {
    name: "East Los Angeles",
    state: "California",
    country: "US",
    location: [34.0239 , -118.17202]
  },
  {
    name: "Florence-Graham",
    state: "California",
    country: "US",
    location: [33.96772 , -118.24438]
  },
  {
    name: "Huntington Park",
    state: "California",
    country: "US",
    location: [33.98168 , -118.22507]
  },
  {
    name: "Maywood",
    state: "California",
    country: "US",
    location: [33.98668 , -118.18535]
  },
  {
    name: "Montebello",
    state: "California",
    country: "US",
    location: [34.00946 , -118.10535]
  },
  {
    name: "South Gate",
    state: "California",
    country: "US",
    location: [33.95474 , -118.21202]
  },
  {
    name: "West Hollywood",
    state: "California",
    country: "US",
    location: [34.09001 , -118.36174]
  },
  {
    name: "Westmont",
    state: "California",
    country: "US",
    location: [33.9414 , -118.3023]
  },
  {
    name: "Abilene",
    state: "Texas",
    country: "US",
    location: [32.44874 , -99.73314]
  },
  {
    name: "San Angelo",
    state: "Texas",
    country: "US",
    location: [31.46377 , -100.43704]
  },
  {
    name: "Akron",
    state: "Ohio",
    country: "US",
    location: [41.08144 , -81.51901]
  },
  {
    name: "Alliance",
    state: "Ohio",
    country: "US",
    location: [40.91534 , -81.10593]
  },
  {
    name: "Austintown",
    state: "Ohio",
    country: "US",
    location: [41.10172 , -80.76452]
  },
  {
    name: "Barberton",
    state: "Ohio",
    country: "US",
    location: [41.01283 , -81.60512]
  },
  {
    name: "Boardman",
    state: "Ohio",
    country: "US",
    location: [41.02423 , -80.66285]
  },
  {
    name: "Brunswick",
    state: "Ohio",
    country: "US",
    location: [41.23811 , -81.8418]
  },
  {
    name: "North Canton",
    state: "Ohio",
    country: "US",
    location: [40.87589 , -81.40234]
  },
  {
    name: "Cuyahoga Falls",
    state: "Ohio",
    country: "US",
    location: [41.13394 , -81.48456]
  },
  {
    name: "Green",
    state: "Ohio",
    country: "US",
    location: [40.94589 , -81.48317]
  },
  {
    name: "Hudson",
    state: "Ohio",
    country: "US",
    location: [41.24006 , -81.44067]
  },
  {
    name: "Kent",
    state: "Ohio",
    country: "US",
    location: [41.15367 , -81.35789]
  },
  {
    name: "Massillon",
    state: "Ohio",
    country: "US",
    location: [40.79672 , -81.52151]
  },
  {
    name: "Medina",
    state: "Ohio",
    country: "US",
    location: [41.13839 , -81.86375]
  },
  {
    name: "Niles",
    state: "Ohio",
    country: "US",
    location: [41.18284 , -80.76536]
  },
  {
    name: "Stow",
    state: "Ohio",
    country: "US",
    location: [41.1595 , -81.44039]
  },
  {
    name: "Warren",
    state: "Ohio",
    country: "US",
    location: [41.23756 , -80.81842]
  },
  {
    name: "Wooster",
    state: "Ohio",
    country: "US",
    location: [40.80517 , -81.93646]
  },
  {
    name: "Youngstown",
    state: "Ohio",
    country: "US",
    location: [41.09978 , -80.64952]
  },
  {
    name: "Addison",
    state: "Illinois",
    country: "US",
    location: [41.9317 , -87.98896]
  },
  {
    name: "North Aurora",
    state: "Illinois",
    country: "US",
    location: [41.80614 , -88.3273]
  },
  {
    name: "Bartlett",
    state: "Illinois",
    country: "US",
    location: [41.99503 , -88.18563]
  },
  {
    name: "Batavia",
    state: "Illinois",
    country: "US",
    location: [41.85003 , -88.31257]
  },
  {
    name: "Bensenville",
    state: "Illinois",
    country: "US",
    location: [41.95503 , -87.94007]
  },
  {
    name: "Bloomingdale",
    state: "Illinois",
    country: "US",
    location: [41.95753 , -88.0809]
  },
  {
    name: "Bolingbrook",
    state: "Illinois",
    country: "US",
    location: [41.69864 , -88.0684]
  },
  {
    name: "Carol Stream",
    state: "Illinois",
    country: "US",
    location: [41.91253 , -88.13479]
  },
  {
    name: "Darien",
    state: "Illinois",
    country: "US",
    location: [41.75198 , -87.97395]
  },
  {
    name: "Downers Grove",
    state: "Illinois",
    country: "US",
    location: [41.80892 , -88.01117]
  },
  {
    name: "Elmhurst",
    state: "Illinois",
    country: "US",
    location: [41.89947 , -87.94034]
  },
  {
    name: "Glen Ellyn",
    state: "Illinois",
    country: "US",
    location: [41.87753 , -88.06701]
  },
  {
    name: "Glendale Heights",
    state: "Illinois",
    country: "US",
    location: [41.91031 , -88.07174]
  },
  {
    name: "Hanover Park",
    state: "Illinois",
    country: "US",
    location: [41.99947 , -88.14507]
  },
  {
    name: "Lisle",
    state: "Illinois",
    country: "US",
    location: [41.80114 , -88.07479]
  },
  {
    name: "Lombard",
    state: "Illinois",
    country: "US",
    location: [41.88003 , -88.00784]
  },
  {
    name: "Naperville",
    state: "Illinois",
    country: "US",
    location: [41.78586 , -88.14729]
  },
  {
    name: "Roselle",
    state: "Illinois",
    country: "US",
    location: [41.98475 , -88.07979]
  },
  {
    name: "Saint Charles",
    state: "Illinois",
    country: "US",
    location: [41.91419 , -88.30869]
  },
  {
    name: "Streamwood",
    state: "Illinois",
    country: "US",
    location: [42.02558 , -88.17841]
  },
  {
    name: "Villa Park",
    state: "Illinois",
    country: "US",
    location: [41.88975 , -87.98895]
  },
  {
    name: "West Chicago",
    state: "Illinois",
    country: "US",
    location: [41.88475 , -88.20396]
  },
  {
    name: "Westmont",
    state: "Illinois",
    country: "US",
    location: [41.79586 , -87.97562]
  },
  {
    name: "Wheaton",
    state: "Illinois",
    country: "US",
    location: [41.86614 , -88.10701]
  },
  {
    name: "Woodridge",
    state: "Illinois",
    country: "US",
    location: [41.74697 , -88.05034]
  },
  {
    name: "Auburn",
    state: "Alabama",
    country: "US",
    location: [32.60986 , -85.48078]
  },
  {
    name: "Dothan",
    state: "Alabama",
    country: "US",
    location: [31.22323 , -85.39049]
  },
  {
    name: "Enterprise",
    state: "Alabama",
    country: "US",
    location: [31.31517 , -85.85522]
  },
  {
    name: "Montgomery",
    state: "Alabama",
    country: "US",
    location: [32.36681 , -86.29997]
  },
  {
    name: "Opelika",
    state: "Alabama",
    country: "US",
    location: [32.64541 , -85.37828]
  },
  {
    name: "Phenix City",
    state: "Alabama",
    country: "US",
    location: [32.47098 , -85.00077]
  },
  {
    name: "Prattville",
    state: "Alabama",
    country: "US",
    location: [32.46402 , -86.4597]
  },
  {
    name: "Selma",
    state: "Alabama",
    country: "US",
    location: [32.40736 , -87.0211]
  },
  {
    name: "Asheboro",
    state: "North Carolina",
    country: "US",
    location: [35.70791 , -79.81364]
  },
  {
    name: "Burlington",
    state: "North Carolina",
    country: "US",
    location: [36.09569 , -79.4378]
  },
  {
    name: "Greensboro",
    state: "North Carolina",
    country: "US",
    location: [36.07264 , -79.79198]
  },
  {
    name: "High Point",
    state: "North Carolina",
    country: "US",
    location: [35.95569 , -80.00532]
  },
  {
    name: "Winston-Salem",
    state: "North Carolina",
    country: "US",
    location: [36.09986 , -80.24422]
  },
  {
    name: "Lafayette",
    state: "Louisiana",
    country: "US",
    location: [30.22409 , -92.01984]
  },
  {
    name: "Lake Charles",
    state: "Louisiana",
    country: "US",
    location: [30.21309 , -93.2044]
  },
  {
    name: "New Iberia",
    state: "Louisiana",
    country: "US",
    location: [30.00354 , -91.81873]
  },
  {
    name: "Opelousas",
    state: "Louisiana",
    country: "US",
    location: [30.53353 , -92.08151]
  },
  {
    name: "Sulphur",
    state: "Louisiana",
    country: "US",
    location: [30.23659 , -93.37738]
  },
  {
    name: "Arlington",
    state: "Massachusetts",
    country: "US",
    location: [42.41537 , -71.15644]
  },
  {
    name: "Braintree",
    state: "Massachusetts",
    country: "US",
    location: [42.22232 , -70.99949]
  },
  {
    name: "Burlington",
    state: "Massachusetts",
    country: "US",
    location: [42.50482 , -71.19561]
  },
  {
    name: "Dedham",
    state: "Massachusetts",
    country: "US",
    location: [42.24177 , -71.16616]
  },
  {
    name: "Lexington",
    state: "Massachusetts",
    country: "US",
    location: [42.44732 , -71.2245]
  },
  {
    name: "Lynn",
    state: "Massachusetts",
    country: "US",
    location: [42.46676 , -70.94949]
  },
  {
    name: "Malden",
    state: "Massachusetts",
    country: "US",
    location: [42.4251 , -71.06616]
  },
  {
    name: "Marblehead",
    state: "Massachusetts",
    country: "US",
    location: [42.5001 , -70.85783]
  },
  {
    name: "Medford",
    state: "Massachusetts",
    country: "US",
    location: [42.41843 , -71.10616]
  },
  {
    name: "Melrose",
    state: "Massachusetts",
    country: "US",
    location: [42.45843 , -71.06616]
  },
  {
    name: "Needham",
    state: "Massachusetts",
    country: "US",
    location: [42.28343 , -71.23283]
  },
  {
    name: "Norwood",
    state: "Massachusetts",
    country: "US",
    location: [42.19454 , -71.1995]
  },
  {
    name: "Randolph",
    state: "Massachusetts",
    country: "US",
    location: [42.1626 , -71.04116]
  },
  {
    name: "Reading",
    state: "Massachusetts",
    country: "US",
    location: [42.52565 , -71.09533]
  },
  {
    name: "Revere",
    state: "Massachusetts",
    country: "US",
    location: [42.40843 , -71.01199]
  },
  {
    name: "Saugus",
    state: "Massachusetts",
    country: "US",
    location: [42.46482 , -71.01005]
  },
  {
    name: "Stoneham",
    state: "Massachusetts",
    country: "US",
    location: [42.4801 , -71.0995]
  },
  {
    name: "Wakefield",
    state: "Massachusetts",
    country: "US",
    location: [42.50648 , -71.07283]
  },
  {
    name: "Waltham",
    state: "Massachusetts",
    country: "US",
    location: [42.37649 , -71.23561]
  },
  {
    name: "Wellesley",
    state: "Massachusetts",
    country: "US",
    location: [42.29649 , -71.29256]
  },
  {
    name: "Weymouth",
    state: "Massachusetts",
    country: "US",
    location: [42.22093 , -70.93977]
  },
  {
    name: "Winchester",
    state: "Massachusetts",
    country: "US",
    location: [42.45232 , -71.137]
  },
  {
    name: "Woburn",
    state: "Massachusetts",
    country: "US",
    location: [42.47926 , -71.15228]
  },
  {
    name: "Alvin",
    state: "Texas",
    country: "US",
    location: [29.42385 , -95.2441]
  },
  {
    name: "Atascocita",
    state: "Texas",
    country: "US",
    location: [29.99883 , -95.1766]
  },
  {
    name: "Baytown",
    state: "Texas",
    country: "US",
    location: [29.7355 , -94.97743]
  },
  {
    name: "Channelview",
    state: "Texas",
    country: "US",
    location: [29.77606 , -95.11465]
  },
  {
    name: "Cloverleaf",
    state: "Texas",
    country: "US",
    location: [29.77828 , -95.17188]
  },
  {
    name: "Deer Park",
    state: "Texas",
    country: "US",
    location: [29.70523 , -95.12382]
  },
  {
    name: "Friendswood",
    state: "Texas",
    country: "US",
    location: [29.5294 , -95.20104]
  },
  {
    name: "South Houston",
    state: "Texas",
    country: "US",
    location: [29.66301 , -95.23549]
  },
  {
    name: "La Porte",
    state: "Texas",
    country: "US",
    location: [29.66578 , -95.01937]
  },
  {
    name: "League City",
    state: "Texas",
    country: "US",
    location: [29.50745 , -95.09493]
  },
  {
    name: "Mission Bend",
    state: "Texas",
    country: "US",
    location: [29.69384 , -95.66495]
  },
  {
    name: "Missouri City",
    state: "Texas",
    country: "US",
    location: [29.61857 , -95.53772]
  },
  {
    name: "Pasadena",
    state: "Texas",
    country: "US",
    location: [29.69106 , -95.2091]
  },
  {
    name: "Pearland",
    state: "Texas",
    country: "US",
    location: [29.56357 , -95.28605]
  },
  {
    name: "Rosenberg",
    state: "Texas",
    country: "US",
    location: [29.55718 , -95.80856]
  },
  {
    name: "Spring",
    state: "Texas",
    country: "US",
    location: [30.07994 , -95.41716]
  },
  {
    name: "Sugar Land",
    state: "Texas",
    country: "US",
    location: [29.61968 , -95.63495]
  },
  {
    name: "The Woodlands",
    state: "Texas",
    country: "US",
    location: [30.15799 , -95.48938]
  },
  {
    name: "The Bronx",
    state: "New York",
    country: "US",
    location: [40.84985 , -73.86641]
  },
  {
    name: "Brooklyn",
    state: "New York",
    country: "US",
    location: [40.6501 , -73.94958]
  },
  {
    name: "New York City",
    state: "New York",
    country: "US",
    location: [40.71427 , -74.00597]
  },
  {
    name: "Borough of Queens",
    state: "New York",
    country: "US",
    location: [40.68149 , -73.83652]
  },
  {
    name: "Staten Island",
    state: "New York",
    country: "US",
    location: [40.56233 , -74.13986]
  },
  {
    name: "Beverly",
    state: "Massachusetts",
    country: "US",
    location: [42.55843 , -70.88005]
  },
  {
    name: "Chelmsford",
    state: "Massachusetts",
    country: "US",
    location: [42.59981 , -71.36728]
  },
  {
    name: "Danvers",
    state: "Massachusetts",
    country: "US",
    location: [42.57509 , -70.93005]
  },
  {
    name: "Fitchburg",
    state: "Massachusetts",
    country: "US",
    location: [42.58342 , -71.8023]
  },
  {
    name: "Gardner",
    state: "Massachusetts",
    country: "US",
    location: [42.57509 , -71.99813]
  },
  {
    name: "Gloucester",
    state: "Massachusetts",
    country: "US",
    location: [42.61593 , -70.66199]
  },
  {
    name: "Haverhill",
    state: "Massachusetts",
    country: "US",
    location: [42.7762 , -71.07728]
  },
  {
    name: "Lawrence",
    state: "Massachusetts",
    country: "US",
    location: [42.70704 , -71.16311]
  },
  {
    name: "Leominster",
    state: "Massachusetts",
    country: "US",
    location: [42.52509 , -71.75979]
  },
  {
    name: "Lowell",
    state: "Massachusetts",
    country: "US",
    location: [42.63342 , -71.31617]
  },
  {
    name: "Methuen",
    state: "Massachusetts",
    country: "US",
    location: [42.7262 , -71.19089]
  },
  {
    name: "South Peabody",
    state: "Massachusetts",
    country: "US",
    location: [42.50982 , -70.94949]
  },
  {
    name: "Salem",
    state: "Massachusetts",
    country: "US",
    location: [42.51954 , -70.89672]
  },
  {
    name: "Wilmington",
    state: "Massachusetts",
    country: "US",
    location: [42.54648 , -71.17367]
  },
  {
    name: "Gainesville",
    state: "Florida",
    country: "US",
    location: [29.65163 , -82.32483]
  },
  {
    name: "Oakland Park",
    state: "Florida",
    country: "US",
    location: [26.17231 , -80.13199]
  },
  {
    name: "Ocala",
    state: "Florida",
    country: "US",
    location: [29.1872 , -82.14009]
  },
  {
    name: "Spring Hill",
    state: "Florida",
    country: "US",
    location: [28.47688 , -82.52546]
  },
  {
    name: "Bellingham",
    state: "Washington",
    country: "US",
    location: [48.75955 , -122.48822]
  },
  {
    name: "Bremerton",
    state: "Washington",
    country: "US",
    location: [47.56732 , -122.63264]
  },
  {
    name: "Lacey",
    state: "Washington",
    country: "US",
    location: [47.03426 , -122.82319]
  },
  {
    name: "Longview",
    state: "Washington",
    country: "US",
    location: [46.13817 , -122.93817]
  },
  {
    name: "Marysville",
    state: "Washington",
    country: "US",
    location: [48.05176 , -122.17708]
  },
  {
    name: "Mount Vernon",
    state: "Washington",
    country: "US",
    location: [48.42122 , -122.33405]
  },
  {
    name: "Marysville",
    state: "Washington",
    country: "US",
    location: [48.05176 , -122.17708]
  },
  {
    name: "Olympia",
    state: "Washington",
    country: "US",
    location: [47.03787 , -122.9007]
  },
  {
    name: "Vancouver",
    state: "Washington",
    country: "US",
    location: [45.63873 , -122.66149]
  },
  {
    name: "Corpus Christi",
    state: "Texas",
    country: "US",
    location: [27.80058 , -97.39638]
  },
  {
    name: "Kingsville",
    state: "Texas",
    country: "US",
    location: [27.51587 , -97.85611]
  },
  {
    name: "Victoria",
    state: "Texas",
    country: "US",
    location: [28.80527 , -97.0036]
  },
  {
    name: "Bowling Green",
    state: "Kentucky",
    country: "US",
    location: [36.99032 , -86.4436]
  },
  {
    name: "Elizabethtown",
    state: "Kentucky",
    country: "US",
    location: [37.69395 , -85.85913]
  },
  {
    name: "Henderson",
    state: "Kentucky",
    country: "US",
    location: [37.83615 , -87.59001]
  },
  {
    name: "Hopkinsville",
    state: "Kentucky",
    country: "US",
    location: [36.86561 , -87.49117]
  },
  {
    name: "Owensboro",
    state: "Kentucky",
    country: "US",
    location: [37.77422 , -87.11333]
  },
  {
    name: "Paducah",
    state: "Kentucky",
    country: "US",
    location: [37.08339 , -88.60005]
  },
  {
    name: "Radcliff",
    state: "Kentucky",
    country: "US",
    location: [37.84035 , -85.94913]
  },
  {
    name: "American Fork",
    state: "Utah",
    country: "US",
    location: [40.3769 , -111.79576]
  },
  {
    name: "West Bountiful",
    state: "Utah",
    country: "US",
    location: [40.89383 , -111.90188]
  },
  {
    name: "Clearfield",
    state: "Utah",
    country: "US",
    location: [41.11078 , -112.02605]
  },
  {
    name: "Cottonwood Heights",
    state: "Utah",
    country: "US",
    location: [40.61967 , -111.81021]
  },
  {
    name: "Draper",
    state: "Utah",
    country: "US",
    location: [40.52467 , -111.86382]
  },
  {
    name: "East Millcreek",
    state: "Utah",
    country: "US",
    location: [40.69995 , -111.81049]
  },
  {
    name: "Kaysville",
    state: "Utah",
    country: "US",
    location: [41.03522 , -111.93855]
  },
  {
    name: "Kearns",
    state: "Utah",
    country: "US",
    location: [40.65995 , -111.99633]
  },
  {
    name: "Layton",
    state: "Utah",
    country: "US",
    location: [41.06022 , -111.97105]
  },
  {
    name: "Magna",
    state: "Utah",
    country: "US",
    location: [40.70911 , -112.10161]
  },
  {
    name: "Midvale",
    state: "Utah",
    country: "US",
    location: [40.61106 , -111.89994]
  },
  {
    name: "Millcreek",
    state: "Utah",
    country: "US",
    location: [40.68689 , -111.87549]
  },
  {
    name: "Murray",
    state: "Utah",
    country: "US",
    location: [40.66689 , -111.88799]
  },
  {
    name: "South Ogden",
    state: "Utah",
    country: "US",
    location: [41.19189 , -111.97133]
  },
  {
    name: "Orem",
    state: "Utah",
    country: "US",
    location: [40.2969 , -111.69465]
  },
  {
    name: "Pleasant Grove",
    state: "Utah",
    country: "US",
    location: [40.36412 , -111.73854]
  },
  {
    name: "Provo",
    state: "Utah",
    country: "US",
    location: [40.23384 , -111.65853]
  },
  {
    name: "Riverton",
    state: "Utah",
    country: "US",
    location: [40.52189 , -111.9391]
  },
  {
    name: "Roy",
    state: "Utah",
    country: "US",
    location: [41.16161 , -112.02633]
  },
  {
    name: "Salt Lake City",
    state: "Utah",
    country: "US",
    location: [40.76078 , -111.89105]
  },
  {
    name: "Sandy City",
    state: "Utah",
    country: "US",
    location: [40.59161 , -111.8841]
  },
  {
    name: "South Jordan",
    state: "Utah",
    country: "US",
    location: [40.56217 , -111.92966]
  },
  {
    name: "South Salt Lake",
    state: "Utah",
    country: "US",
    location: [40.71884 , -111.88827]
  },
  {
    name: "Spanish Fork",
    state: "Utah",
    country: "US",
    location: [40.11496 , -111.65492]
  },
  {
    name: "Springville",
    state: "Utah",
    country: "US",
    location: [40.16523 , -111.61075]
  },
  {
    name: "Taylorsville",
    state: "Utah",
    country: "US",
    location: [40.66772 , -111.93883]
  },
  {
    name: "West Jordan",
    state: "Utah",
    country: "US",
    location: [40.60967 , -111.9391]
  },
  {
    name: "West Valley City",
    state: "Utah",
    country: "US",
    location: [40.69161 , -112.00105]
  },
  {
    name: "Daytona Beach",
    state: "Florida",
    country: "US",
    location: [29.21081 , -81.02283]
  },
  {
    name: "DeLand",
    state: "Florida",
    country: "US",
    location: [29.02832 , -81.30312]
  },
  {
    name: "Deltona",
    state: "Florida",
    country: "US",
    location: [28.90054 , -81.26367]
  },
  {
    name: "New Smyrna Beach",
    state: "Florida",
    country: "US",
    location: [29.02582 , -80.927]
  },
  {
    name: "Ormond Beach",
    state: "Florida",
    country: "US",
    location: [29.28581 , -81.05589]
  },
  {
    name: "Palm Coast",
    state: "Florida",
    country: "US",
    location: [29.58497 , -81.20784]
  },
  {
    name: "Port Orange",
    state: "Florida",
    country: "US",
    location: [29.13832 , -80.99561]
  },
  {
    name: "Bristol",
    state: "Rhode Island",
    country: "US",
    location: [41.67705 , -71.26616]
  },
  {
    name: "Cranston",
    state: "Rhode Island",
    country: "US",
    location: [41.77982 , -71.43728]
  },
  {
    name: "East Providence",
    state: "Rhode Island",
    country: "US",
    location: [41.81371 , -71.37005]
  },
  {
    name: "Newport East",
    state: "Rhode Island",
    country: "US",
    location: [41.51579 , -71.28752]
  },
  {
    name: "North Providence",
    state: "Rhode Island",
    country: "US",
    location: [41.8501 , -71.46617]
  },
  {
    name: "Pawtucket",
    state: "Rhode Island",
    country: "US",
    location: [41.87871 , -71.38256]
  },
  {
    name: "Providence",
    state: "Rhode Island",
    country: "US",
    location: [41.82399 , -71.41283]
  },
  {
    name: "West Warwick",
    state: "Rhode Island",
    country: "US",
    location: [41.69689 , -71.52194]
  },
  {
    name: "West Warwick",
    state: "Rhode Island",
    country: "US",
    location: [41.69689 , -71.52194]
  },
  {
    name: "Woonsocket",
    state: "Rhode Island",
    country: "US",
    location: [42.00288 , -71.51478]
  },
  {
    name: "Bellevue",
    state: "Nebraska",
    country: "US",
    location: [41.13667 , -95.89084]
  },
  {
    name: "Columbus",
    state: "Nebraska",
    country: "US",
    location: [41.42973 , -97.36838]
  },
  {
    name: "Fremont",
    state: "Nebraska",
    country: "US",
    location: [41.43333 , -96.49808]
  },
  {
    name: "Hastings",
    state: "Nebraska",
    country: "US",
    location: [40.58612 , -98.38839]
  },
  {
    name: "Lincoln",
    state: "Nebraska",
    country: "US",
    location: [40.8 , -96.66696]
  },
  {
    name: "Norfolk",
    state: "Nebraska",
    country: "US",
    location: [42.02834 , -97.417]
  },
  {
    name: "Omaha",
    state: "Nebraska",
    country: "US",
    location: [41.25861 , -95.93779]
  },
  {
    name: "Atlanta",
    state: "Georgia",
    country: "US",
    location: [33.749 , -84.38798]
  },
  {
    name: "Candler-McAfee",
    state: "Georgia",
    country: "US",
    location: [33.72672 , -84.27246]
  },
  {
    name: "College Park",
    state: "Georgia",
    country: "US",
    location: [33.65344 , -84.44937]
  },
  {
    name: "College Park",
    state: "Georgia",
    country: "US",
    location: [33.65344 , -84.44937]
  },
  {
    name: "East Point",
    state: "Georgia",
    country: "US",
    location: [33.67955 , -84.43937]
  },
  {
    name: "Forest Park",
    state: "Georgia",
    country: "US",
    location: [33.62205 , -84.36909]
  },
  {
    name: "Atlanta",
    state: "Georgia",
    country: "US",
    location: [33.749 , -84.38798]
  },
  {
    name: "Sandy Springs",
    state: "Georgia",
    country: "US",
    location: [33.92427 , -84.37854]
  },
  {
    name: "Tucker",
    state: "Georgia",
    country: "US",
    location: [33.85455 , -84.21714]
  },
  {
    name: "Bethany",
    state: "Oklahoma",
    country: "US",
    location: [35.51867 , -97.63226]
  },
  {
    name: "Del City",
    state: "Oklahoma",
    country: "US",
    location: [35.44201 , -97.44087]
  },
  {
    name: "Edmond",
    state: "Oklahoma",
    country: "US",
    location: [35.65283 , -97.4781]
  },
  {
    name: "Midwest City",
    state: "Oklahoma",
    country: "US",
    location: [35.44951 , -97.3967]
  },
  {
    name: "Moore",
    state: "Oklahoma",
    country: "US",
    location: [35.33951 , -97.4867]
  },
  {
    name: "Norman",
    state: "Oklahoma",
    country: "US",
    location: [35.22257 , -97.43948]
  },
  {
    name: "Oklahoma City",
    state: "Oklahoma",
    country: "US",
    location: [35.46756 , -97.51643]
  },
  {
    name: "Shawnee",
    state: "Oklahoma",
    country: "US",
    location: [35.32729 , -96.9253]
  },
  {
    name: "Stillwater",
    state: "Oklahoma",
    country: "US",
    location: [36.11561 , -97.05837]
  },
  {
    name: "Yukon",
    state: "Oklahoma",
    country: "US",
    location: [35.50672 , -97.76254]
  },
  {
    name: "Billings",
    state: "Montana",
    country: "US",
    location: [45.78329 , -108.50069]
  },
  {
    name: "Bozeman",
    state: "Montana",
    country: "US",
    location: [45.67965 , -111.03856]
  },
  {
    name: "Butte",
    state: "Montana",
    country: "US",
    location: [46.00382 , -112.53474]
  },
  {
    name: "Great Falls",
    state: "Montana",
    country: "US",
    location: [47.50024 , -111.30081]
  },
  {
    name: "Helena",
    state: "Montana",
    country: "US",
    location: [46.59271 , -112.03611]
  },
  {
    name: "Missoula",
    state: "Montana",
    country: "US",
    location: [46.87215 , -113.994]
  },
  {
    name: "Altamonte Springs",
    state: "Florida",
    country: "US",
    location: [28.66111 , -81.36562]
  },
  {
    name: "South Apopka",
    state: "Florida",
    country: "US",
    location: [28.66194 , -81.50952]
  },
  {
    name: "Casselberry",
    state: "Florida",
    country: "US",
    location: [28.67778 , -81.32785]
  },
  {
    name: "Kissimmee",
    state: "Florida",
    country: "US",
    location: [28.30468 , -81.41667]
  },
  {
    name: "Oak Ridge",
    state: "Florida",
    country: "US",
    location: [28.47112 , -81.42452]
  },
  {
    name: "Ocoee",
    state: "Florida",
    country: "US",
    location: [28.56917 , -81.54396]
  },
  {
    name: "Orlando",
    state: "Florida",
    country: "US",
    location: [28.53834 , -81.37924]
  },
  {
    name: "Oviedo",
    state: "Florida",
    country: "US",
    location: [28.67 , -81.20812]
  },
  {
    name: "Pine Hills",
    state: "Florida",
    country: "US",
    location: [28.55778 , -81.4534]
  },
  {
    name: "Sanford",
    state: "Florida",
    country: "US",
    location: [28.80055 , -81.27312]
  },
  {
    name: "Saint Cloud",
    state: "Florida",
    country: "US",
    location: [28.2489 , -81.28118]
  },
  {
    name: "University Park",
    state: "Florida",
    country: "US",
    location: [25.74649 , -80.36755]
  },
  {
    name: "Wekiwa Springs",
    state: "Florida",
    country: "US",
    location: [28.69861 , -81.42563]
  },
  {
    name: "Winter Park",
    state: "Florida",
    country: "US",
    location: [28.6 , -81.33924]
  },
  {
    name: "Winter Springs",
    state: "Florida",
    country: "US",
    location: [28.69889 , -81.30812]
  },
  {
    name: "Campbell",
    state: "California",
    country: "US",
    location: [37.28717 , -121.94996]
  },
  {
    name: "Gilroy",
    state: "California",
    country: "US",
    location: [37.00578 , -121.56828]
  },
  {
    name: "Los Gatos",
    state: "California",
    country: "US",
    location: [37.22661 , -121.97468]
  },
  {
    name: "Milpitas",
    state: "California",
    country: "US",
    location: [37.42827 , -121.90662]
  },
  {
    name: "Morgan Hill",
    state: "California",
    country: "US",
    location: [37.1305 , -121.65439]
  },
  {
    name: "San Jose",
    state: "California",
    country: "US",
    location: [37.33939 , -121.89496]
  },
  {
    name: "Santa Clara",
    state: "California",
    country: "US",
    location: [37.35411 , -121.95524]
  },
  {
    name: "Saratoga",
    state: "California",
    country: "US",
    location: [37.26383 , -122.02301]
  },
  {
    name: "Sunnyvale",
    state: "California",
    country: "US",
    location: [37.36883 , -122.03635]
  },
  {
    name: "Beaumont",
    state: "Texas",
    country: "US",
    location: [30.08605 , -94.10185]
  },
  {
    name: "Galveston",
    state: "Texas",
    country: "US",
    location: [29.30135 , -94.7977]
  },
  {
    name: "Port Arthur",
    state: "Texas",
    country: "US",
    location: [29.88519 , -93.94233]
  },
  {
    name: "Texas City",
    state: "Texas",
    country: "US",
    location: [29.38385 , -94.9027]
  },
  {
    name: "Annapolis",
    state: "Maryland",
    country: "US",
    location: [38.97845 , -76.49218]
  },
  {
    name: "Arbutus",
    state: "Maryland",
    country: "US",
    location: [39.25455 , -76.69997]
  },
  {
    name: "Arnold",
    state: "Maryland",
    country: "US",
    location: [39.03206 , -76.50274]
  },
  {
    name: "Baltimore",
    state: "Maryland",
    country: "US",
    location: [39.29038 , -76.61219]
  },
  {
    name: "Bel Air North",
    state: "Maryland",
    country: "US",
    location: [39.55429 , -76.37309]
  },
  {
    name: "Bel Air South",
    state: "Maryland",
    country: "US",
    location: [39.50506 , -76.31977]
  },
  {
    name: "Carney",
    state: "Maryland",
    country: "US",
    location: [39.39427 , -76.52358]
  },
  {
    name: "Catonsville",
    state: "Maryland",
    country: "US",
    location: [39.27205 , -76.73192]
  },
  {
    name: "Columbia",
    state: "Maryland",
    country: "US",
    location: [39.24038 , -76.83942]
  },
  {
    name: "Crofton",
    state: "Maryland",
    country: "US",
    location: [39.00178 , -76.68747]
  },
  {
    name: "Dundalk",
    state: "Maryland",
    country: "US",
    location: [39.25066 , -76.52052]
  },
  {
    name: "Edgewood",
    state: "Maryland",
    country: "US",
    location: [39.41872 , -76.2944]
  },
  {
    name: "Eldersburg",
    state: "Maryland",
    country: "US",
    location: [39.40371 , -76.95026]
  },
  {
    name: "West Elkridge",
    state: "Maryland",
    country: "US",
    location: [39.20705 , -76.72692]
  },
  {
    name: "Ellicott City",
    state: "Maryland",
    country: "US",
    location: [39.26733 , -76.79831]
  },
  {
    name: "Essex",
    state: "Maryland",
    country: "US",
    location: [39.30927 , -76.47496]
  },
  {
    name: "Glen Burnie",
    state: "Maryland",
    country: "US",
    location: [39.16261 , -76.62469]
  },
  {
    name: "Lochearn",
    state: "Maryland",
    country: "US",
    location: [39.34066 , -76.72219]
  },
  {
    name: "Middle River",
    state: "Maryland",
    country: "US",
    location: [39.33427 , -76.43941]
  },
  {
    name: "Milford Mill",
    state: "Maryland",
    country: "US",
    location: [39.34788 , -76.76997]
  },
  {
    name: "Odenton",
    state: "Maryland",
    country: "US",
    location: [39.084 , -76.70025]
  },
  {
    name: "Parkville",
    state: "Maryland",
    country: "US",
    location: [39.37733 , -76.53969]
  },
  {
    name: "Perry Hall",
    state: "Maryland",
    country: "US",
    location: [39.41261 , -76.46357]
  },
  {
    name: "Pikesville",
    state: "Maryland",
    country: "US",
    location: [39.37427 , -76.72247]
  },
  {
    name: "Randallstown",
    state: "Maryland",
    country: "US",
    location: [39.36733 , -76.79525]
  },
  {
    name: "Reisterstown",
    state: "Maryland",
    country: "US",
    location: [39.46976 , -76.8319]
  },
  {
    name: "Salisbury",
    state: "Maryland",
    country: "US",
    location: [38.36067 , -75.59937]
  },
  {
    name: "Severn",
    state: "Maryland",
    country: "US",
    location: [39.13705 , -76.6983]
  },
  {
    name: "Severna Park",
    state: "Maryland",
    country: "US",
    location: [39.07039 , -76.54524]
  },
  {
    name: "South Gate",
    state: "Maryland",
    country: "US",
    location: [39.129 , -76.6258]
  },
  {
    name: "Towson",
    state: "Maryland",
    country: "US",
    location: [39.4015 , -76.60191]
  },
  {
    name: "Bethel Park",
    state: "Pennsylvania",
    country: "US",
    location: [40.32757 , -80.0395]
  },
  {
    name: "McKeesport",
    state: "Pennsylvania",
    country: "US",
    location: [40.34785 , -79.86422]
  },
  {
    name: "Mount Lebanon",
    state: "Pennsylvania",
    country: "US",
    location: [40.35535 , -80.0495]
  },
  {
    name: "Monroeville",
    state: "Pennsylvania",
    country: "US",
    location: [40.42118 , -79.7881]
  },
  {
    name: "Penn Hills",
    state: "Pennsylvania",
    country: "US",
    location: [40.50118 , -79.83922]
  },
  {
    name: "Pittsburgh",
    state: "Pennsylvania",
    country: "US",
    location: [40.44062 , -79.99589]
  },
  {
    name: "Plum",
    state: "Pennsylvania",
    country: "US",
    location: [40.50035 , -79.74949]
  },
  {
    name: "Upper Saint Clair",
    state: "Pennsylvania",
    country: "US",
    location: [40.3359 , -80.08339]
  },
  {
    name: "West Mifflin",
    state: "Pennsylvania",
    country: "US",
    location: [40.3634 , -79.86644]
  },
  {
    name: "Agawam",
    state: "Massachusetts",
    country: "US",
    location: [42.06954 , -72.61481]
  },
  {
    name: "North Chicopee",
    state: "Massachusetts",
    country: "US",
    location: [42.18343 , -72.59953]
  },
  {
    name: "Holyoke",
    state: "Massachusetts",
    country: "US",
    location: [42.20426 , -72.6162]
  },
  {
    name: "Northampton",
    state: "Massachusetts",
    country: "US",
    location: [42.32509 , -72.6412]
  },
  {
    name: "Pittsfield",
    state: "Massachusetts",
    country: "US",
    location: [42.45008 , -73.24538]
  },
  {
    name: "West Springfield",
    state: "Massachusetts",
    country: "US",
    location: [42.10704 , -72.62037]
  },
  {
    name: "West Springfield",
    state: "Massachusetts",
    country: "US",
    location: [42.10704 , -72.62037]
  },
  {
    name: "Westfield",
    state: "Massachusetts",
    country: "US",
    location: [42.12509 , -72.74954]
  },
  {
    name: "Franklin",
    state: "Wisconsin",
    country: "US",
    location: [42.88863 , -88.03842]
  },
  {
    name: "Greenfield",
    state: "Wisconsin",
    country: "US",
    location: [42.9614 , -88.01259]
  },
  {
    name: "South Milwaukee",
    state: "Wisconsin",
    country: "US",
    location: [42.91057 , -87.86064]
  },
  {
    name: "Oak Creek",
    state: "Wisconsin",
    country: "US",
    location: [42.88585 , -87.86314]
  },
  {
    name: "South Milwaukee",
    state: "Wisconsin",
    country: "US",
    location: [42.91057 , -87.86064]
  },
  {
    name: "Wauwatosa",
    state: "Wisconsin",
    country: "US",
    location: [43.04946 , -88.00759]
  },
  {
    name: "West Allis",
    state: "Wisconsin",
    country: "US",
    location: [43.01668 , -88.00703]
  },
  {
    name: "Novato",
    state: "California",
    country: "US",
    location: [38.10742 , -122.5697]
  },
  {
    name: "San Anselmo",
    state: "California",
    country: "US",
    location: [37.97465 , -122.56164]
  },
  {
    name: "South San Francisco",
    state: "California",
    country: "US",
    location: [37.65466 , -122.40775]
  },
  {
    name: "San Rafael",
    state: "California",
    country: "US",
    location: [37.97353 , -122.53109]
  },
  {
    name: "Joplin",
    state: "Missouri",
    country: "US",
    location: [37.08423 , -94.51328]
  },
  {
    name: "Springfield",
    state: "Missouri",
    country: "US",
    location: [37.21533 , -93.29824]
  },
  {
    name: "Ashland",
    state: "Ohio",
    country: "US",
    location: [40.86867 , -82.31822]
  },
  {
    name: "Bowling Green",
    state: "Ohio",
    country: "US",
    location: [41.37477 , -83.65132]
  },
  {
    name: "Findlay",
    state: "Ohio",
    country: "US",
    location: [41.04422 , -83.64993]
  },
  {
    name: "Lima",
    state: "Ohio",
    country: "US",
    location: [40.74255 , -84.10523]
  },
  {
    name: "Mansfield",
    state: "Ohio",
    country: "US",
    location: [40.75839 , -82.51545]
  },
  {
    name: "Sandusky",
    state: "Ohio",
    country: "US",
    location: [41.44894 , -82.70796]
  },
  {
    name: "Toledo",
    state: "Ohio",
    country: "US",
    location: [41.66394 , -83.55521]
  },
  {
    name: "Bristol",
    state: "Tennessee",
    country: "US",
    location: [36.59511 , -82.18874]
  },
  {
    name: "East Chattanooga",
    state: "Tennessee",
    country: "US",
    location: [35.06535 , -85.24912]
  },
  {
    name: "South Cleveland",
    state: "Tennessee",
    country: "US",
    location: [35.14119 , -84.87217]
  },
  {
    name: "East Ridge",
    state: "Tennessee",
    country: "US",
    location: [35.01424 , -85.2519]
  },
  {
    name: "Johnson City",
    state: "Tennessee",
    country: "US",
    location: [36.31344 , -82.35347]
  },
  {
    name: "Kingsport",
    state: "Tennessee",
    country: "US",
    location: [36.54843 , -82.56182]
  },
  {
    name: "Morristown",
    state: "Tennessee",
    country: "US",
    location: [36.21398 , -83.29489]
  },
  {
    name: "Beverly Hills",
    state: "California",
    country: "US",
    location: [34.07362 , -118.40036]
  },
  {
    name: "West Carson",
    state: "California",
    country: "US",
    location: [33.82168 , -118.29257]
  },
  {
    name: "Culver City",
    state: "California",
    country: "US",
    location: [34.02112 , -118.39647]
  },
  {
    name: "Gardena",
    state: "California",
    country: "US",
    location: [33.88835 , -118.30896]
  },
  {
    name: "Hawthorne",
    state: "California",
    country: "US",
    location: [33.9164 , -118.35257]
  },
  {
    name: "Inglewood",
    state: "California",
    country: "US",
    location: [33.96168 , -118.35313]
  },
  {
    name: "Lawndale",
    state: "California",
    country: "US",
    location: [33.88724 , -118.35257]
  },
  {
    name: "Lennox",
    state: "California",
    country: "US",
    location: [33.93807 , -118.35258]
  },
  {
    name: "Lomita",
    state: "California",
    country: "US",
    location: [33.79224 , -118.31507]
  },
  {
    name: "Lynwood",
    state: "California",
    country: "US",
    location: [33.93029 , -118.21146]
  },
  {
    name: "Manhattan Beach",
    state: "California",
    country: "US",
    location: [33.88474 , -118.41091]
  },
  {
    name: "Rancho Palos Verdes",
    state: "California",
    country: "US",
    location: [33.74446 , -118.38702]
  },
  {
    name: "Redondo Beach",
    state: "California",
    country: "US",
    location: [33.84918 , -118.38841]
  },
  {
    name: "Santa Monica",
    state: "California",
    country: "US",
    location: [34.01945 , -118.49119]
  },
  {
    name: "Torrance",
    state: "California",
    country: "US",
    location: [33.83585 , -118.34063]
  },
  {
    name: "West Carson",
    state: "California",
    country: "US",
    location: [33.82168 , -118.29257]
  },
  {
    name: "Bellevue",
    state: "Washington",
    country: "US",
    location: [47.61038 , -122.20068]
  },
  {
    name: "Bothell",
    state: "Washington",
    country: "US",
    location: [47.76232 , -122.2054]
  },
  {
    name: "Fairwood",
    state: "Washington",
    country: "US",
    location: [47.76684 , -117.41744]
  },
  {
    name: "Cottage Lake",
    state: "Washington",
    country: "US",
    location: [47.74427 , -122.07735]
  },
  {
    name: "Edmonds",
    state: "Washington",
    country: "US",
    location: [47.81065 , -122.37736]
  },
  {
    name: "Everett",
    state: "Washington",
    country: "US",
    location: [47.97898 , -122.20208]
  },
  {
    name: "Inglewood-Finn Hill",
    state: "Washington",
    country: "US",
    location: [47.72049 , -122.23167]
  },
  {
    name: "Kirkland",
    state: "Washington",
    country: "US",
    location: [47.68149 , -122.20874]
  },
  {
    name: "Lynnwood",
    state: "Washington",
    country: "US",
    location: [47.82093 , -122.31513]
  },
  {
    name: "Mountlake Terrace",
    state: "Washington",
    country: "US",
    location: [47.78815 , -122.30874]
  },
  {
    name: "North Creek",
    state: "Washington",
    country: "US",
    location: [47.81954 , -122.17624]
  },
  {
    name: "Redmond",
    state: "Washington",
    country: "US",
    location: [47.67399 , -122.12151]
  },
  {
    name: "Renton",
    state: "Washington",
    country: "US",
    location: [47.48288 , -122.21707]
  },
  {
    name: "City of Sammamish",
    state: "Washington",
    country: "US",
    location: [47.60444 , -122.03768]
  },
  {
    name: "Big Spring",
    state: "Texas",
    country: "US",
    location: [32.2504 , -101.47874]
  },
  {
    name: "Midland",
    state: "Texas",
    country: "US",
    location: [31.99735 , -102.07791]
  },
  {
    name: "West Odessa",
    state: "Texas",
    country: "US",
    location: [31.84235 , -102.49876]
  },
  {
    name: "Charlottesville",
    state: "Virginia",
    country: "US",
    location: [38.02931 , -78.47668]
  },
  {
    name: "Danville",
    state: "Virginia",
    country: "US",
    location: [36.58597 , -79.39502]
  },
  {
    name: "West Lynchburg",
    state: "Virginia",
    country: "US",
    location: [37.4032 , -79.17808]
  },
  {
    name: "Cedar City",
    state: "Utah",
    country: "US",
    location: [37.67748 , -113.06189]
  },
  {
    name: "North Logan",
    state: "Utah",
    country: "US",
    location: [41.76937 , -111.80467]
  },
  {
    name: "Saint George",
    state: "Utah",
    country: "US",
    location: [37.10415 , -113.58412]
  },
  {
    name: "Tooele",
    state: "Utah",
    country: "US",
    location: [40.53078 , -112.29828]
  },
  {
    name: "Ashtabula",
    state: "Ohio",
    country: "US",
    location: [41.86505 , -80.78981]
  },
  {
    name: "Eastlake",
    state: "Ohio",
    country: "US",
    location: [41.65394 , -81.45039]
  },
  {
    name: "Elyria",
    state: "Ohio",
    country: "US",
    location: [41.36838 , -82.10765]
  },
  {
    name: "Lorain",
    state: "Ohio",
    country: "US",
    location: [41.45282 , -82.18237]
  },
  {
    name: "Mentor",
    state: "Ohio",
    country: "US",
    location: [41.66616 , -81.33955]
  },
  {
    name: "North Olmsted",
    state: "Ohio",
    country: "US",
    location: [41.4156 , -81.92347]
  },
  {
    name: "North Ridgeville",
    state: "Ohio",
    country: "US",
    location: [41.38949 , -82.01903]
  },
  {
    name: "North Royalton",
    state: "Ohio",
    country: "US",
    location: [41.31366 , -81.72457]
  },
  {
    name: "Parma",
    state: "Ohio",
    country: "US",
    location: [41.40477 , -81.72291]
  },
  {
    name: "Parma Heights",
    state: "Ohio",
    country: "US",
    location: [41.39005 , -81.75958]
  },
  {
    name: "Rocky River",
    state: "Ohio",
    country: "US",
    location: [41.4756 , -81.8393]
  },
  {
    name: "Solon",
    state: "Ohio",
    country: "US",
    location: [41.38978 , -81.44123]
  },
  {
    name: "Strongsville",
    state: "Ohio",
    country: "US",
    location: [41.3145 , -81.83569]
  },
  {
    name: "Westlake",
    state: "Ohio",
    country: "US",
    location: [41.45532 , -81.91792]
  },
  {
    name: "Willoughby",
    state: "Ohio",
    country: "US",
    location: [41.63977 , -81.4065]
  },
  {
    name: "La Quinta",
    state: "California",
    country: "US",
    location: [33.66336 , -116.31001]
  },
  {
    name: "Oceanside",
    state: "California",
    country: "US",
    location: [33.19587 , -117.37948]
  },
  {
    name: "Palm Desert",
    state: "California",
    country: "US",
    location: [33.72255 , -116.37697]
  },
  {
    name: "Palm Springs",
    state: "California",
    country: "US",
    location: [33.8303 , -116.54529]
  },
  {
    name: "Ridgecrest",
    state: "California",
    country: "US",
    location: [35.62246 , -117.6709]
  },
  {
    name: "San Marcos",
    state: "California",
    country: "US",
    location: [33.14337 , -117.16614]
  },
  {
    name: "Victorville",
    state: "California",
    country: "US",
    location: [34.53611 , -117.29116]
  },
  {
    name: "Vista",
    state: "California",
    country: "US",
    location: [33.20004 , -117.24254]
  },
  {
    name: "Apple Valley",
    state: "California",
    country: "US",
    location: [34.50083 , -117.18588]
  },
  {
    name: "Barstow",
    state: "California",
    country: "US",
    location: [34.89859 , -117.02282]
  },
  {
    name: "Brawley",
    state: "California",
    country: "US",
    location: [32.97866 , -115.53027]
  },
  {
    name: "Calexico",
    state: "California",
    country: "US",
    location: [32.67895 , -115.49888]
  },
  {
    name: "Carlsbad",
    state: "California",
    country: "US",
    location: [33.15809 , -117.35059]
  },
  {
    name: "Cathedral City",
    state: "California",
    country: "US",
    location: [33.77974 , -116.46529]
  },
  {
    name: "Coachella",
    state: "California",
    country: "US",
    location: [33.6803 , -116.17389]
  },
  {
    name: "El Centro",
    state: "California",
    country: "US",
    location: [32.792 , -115.56305]
  },
  {
    name: "Encinitas",
    state: "California",
    country: "US",
    location: [33.03699 , -117.29198]
  },
  {
    name: "Escondido",
    state: "California",
    country: "US",
    location: [33.11921 , -117.08642]
  },
  {
    name: "Fallbrook",
    state: "California",
    country: "US",
    location: [33.37642 , -117.25115]
  },
  {
    name: "Hesperia",
    state: "California",
    country: "US",
    location: [34.42639 , -117.30088]
  },
  {
    name: "Indio",
    state: "California",
    country: "US",
    location: [33.7207 , -116.21677]
  },
  {
    name: "Annapolis",
    state: "Maryland",
    country: "US",
    location: [38.97845 , -76.49218]
  },
  {
    name: "Arbutus",
    state: "Maryland",
    country: "US",
    location: [39.25455 , -76.69997]
  },
  {
    name: "Arnold",
    state: "Maryland",
    country: "US",
    location: [39.03206 , -76.50274]
  },
  {
    name: "Baltimore",
    state: "Maryland",
    country: "US",
    location: [39.29038 , -76.61219]
  },
  {
    name: "Bel Air North",
    state: "Maryland",
    country: "US",
    location: [39.55429 , -76.37309]
  },
  {
    name: "Bel Air South",
    state: "Maryland",
    country: "US",
    location: [39.50506 , -76.31977]
  },
  {
    name: "Carney",
    state: "Maryland",
    country: "US",
    location: [39.39427 , -76.52358]
  },
  {
    name: "Catonsville",
    state: "Maryland",
    country: "US",
    location: [39.27205 , -76.73192]
  },
  {
    name: "Columbia",
    state: "Maryland",
    country: "US",
    location: [39.24038 , -76.83942]
  },
  {
    name: "Crofton",
    state: "Maryland",
    country: "US",
    location: [39.00178 , -76.68747]
  },
  {
    name: "Dundalk",
    state: "Maryland",
    country: "US",
    location: [39.25066 , -76.52052]
  },
  {
    name: "Edgewood",
    state: "Maryland",
    country: "US",
    location: [39.41872 , -76.2944]
  },
  {
    name: "Eldersburg",
    state: "Maryland",
    country: "US",
    location: [39.40371 , -76.95026]
  },
  {
    name: "West Elkridge",
    state: "Maryland",
    country: "US",
    location: [39.20705 , -76.72692]
  },
  {
    name: "Ellicott City",
    state: "Maryland",
    country: "US",
    location: [39.26733 , -76.79831]
  },
  {
    name: "Essex",
    state: "Maryland",
    country: "US",
    location: [39.30927 , -76.47496]
  },
  {
    name: "Glen Burnie",
    state: "Maryland",
    country: "US",
    location: [39.16261 , -76.62469]
  },
  {
    name: "Lochearn",
    state: "Maryland",
    country: "US",
    location: [39.34066 , -76.72219]
  },
  {
    name: "Middle River",
    state: "Maryland",
    country: "US",
    location: [39.33427 , -76.43941]
  },
  {
    name: "Milford Mill",
    state: "Maryland",
    country: "US",
    location: [39.34788 , -76.76997]
  },
  {
    name: "Odenton",
    state: "Maryland",
    country: "US",
    location: [39.084 , -76.70025]
  },
  {
    name: "Parkville",
    state: "Maryland",
    country: "US",
    location: [39.37733 , -76.53969]
  },
  {
    name: "Perry Hall",
    state: "Maryland",
    country: "US",
    location: [39.41261 , -76.46357]
  },
  {
    name: "Pikesville",
    state: "Maryland",
    country: "US",
    location: [39.37427 , -76.72247]
  },
  {
    name: "Randallstown",
    state: "Maryland",
    country: "US",
    location: [39.36733 , -76.79525]
  },
  {
    name: "Reisterstown",
    state: "Maryland",
    country: "US",
    location: [39.46976 , -76.8319]
  },
  {
    name: "Salisbury",
    state: "Maryland",
    country: "US",
    location: [38.36067 , -75.59937]
  },
  {
    name: "Severn",
    state: "Maryland",
    country: "US",
    location: [39.13705 , -76.6983]
  },
  {
    name: "Severna Park",
    state: "Maryland",
    country: "US",
    location: [39.07039 , -76.54524]
  },
  {
    name: "South Gate",
    state: "Maryland",
    country: "US",
    location: [39.129 , -76.6258]
  },
  {
    name: "Towson",
    state: "Maryland",
    country: "US",
    location: [39.4015 , -76.60191]
  },
  {
    name: "Albany",
    state: "Oregon",
    country: "US",
    location: [44.63651 , -123.10593]
  },
  {
    name: "North Bend",
    state: "Oregon",
    country: "US",
    location: [43.4065 , -124.22428]
  },
  {
    name: "Corvallis",
    state: "Oregon",
    country: "US",
    location: [44.56457 , -123.26204]
  },
  {
    name: "Gresham",
    state: "Oregon",
    country: "US",
    location: [45.49818 , -122.43148]
  },
  {
    name: "Grants Pass",
    state: "Oregon",
    country: "US",
    location: [42.43933 , -123.33067]
  },
  {
    name: "Medford",
    state: "Oregon",
    country: "US",
    location: [42.32652 , -122.87559]
  },
  {
    name: "Roseburg North",
    state: "Oregon",
    country: "US",
    location: [43.26452 , -123.30331]
  },
  {
    name: "Springfield",
    state: "Oregon",
    country: "US",
    location: [44.04624 , -123.02203]
  },
  {
    name: "Allen",
    state: "Texas",
    country: "US",
    location: [33.10317 , -96.67055]
  },
  {
    name: "Carrollton",
    state: "Texas",
    country: "US",
    location: [32.95373 , -96.89028]
  },
  {
    name: "Cedar Hill",
    state: "Texas",
    country: "US",
    location: [32.58847 , -96.95612]
  },
  {
    name: "Coppell",
    state: "Texas",
    country: "US",
    location: [32.95457 , -97.01501]
  },
  {
    name: "Dallas",
    state: "Texas",
    country: "US",
    location: [32.78306 , -96.80667]
  },
  {
    name: "DeSoto",
    state: "Texas",
    country: "US",
    location: [32.58986 , -96.85695]
  },
  {
    name: "Duncanville",
    state: "Texas",
    country: "US",
    location: [32.6518 , -96.90834]
  },
  {
    name: "Farmers Branch",
    state: "Texas",
    country: "US",
    location: [32.92651 , -96.89612]
  },
  {
    name: "Flower Mound",
    state: "Texas",
    country: "US",
    location: [33.01457 , -97.09696]
  },
  {
    name: "Frisco",
    state: "Texas",
    country: "US",
    location: [33.15067 , -96.82361]
  },
  {
    name: "Garland",
    state: "Texas",
    country: "US",
    location: [32.91262 , -96.63888]
  },
  {
    name: "Grand Prairie",
    state: "Texas",
    country: "US",
    location: [32.74596 , -96.99778]
  },
  {
    name: "Irving",
    state: "Texas",
    country: "US",
    location: [32.81402 , -96.94889]
  },
  {
    name: "Lancaster",
    state: "Texas",
    country: "US",
    location: [32.59208 , -96.75611]
  },
  {
    name: "Lewisville",
    state: "Texas",
    country: "US",
    location: [33.04623 , -96.99417]
  },
  {
    name: "McKinney",
    state: "Texas",
    country: "US",
    location: [33.19762 , -96.61527]
  },
  {
    name: "Mesquite",
    state: "Texas",
    country: "US",
    location: [32.7668 , -96.59916]
  },
  {
    name: "Plano",
    state: "Texas",
    country: "US",
    location: [33.01984 , -96.69889]
  },
  {
    name: "Richardson",
    state: "Texas",
    country: "US",
    location: [32.94818 , -96.72972]
  },
  {
    name: "Rowlett",
    state: "Texas",
    country: "US",
    location: [32.9029 , -96.56388]
  },
  {
    name: "The Colony",
    state: "Texas",
    country: "US",
    location: [33.08901 , -96.88639]
  },
  {
    name: "University Park",
    state: "Texas",
    country: "US",
    location: [32.85013 , -96.80028]
  },
  {
    name: "Waxahachie",
    state: "Texas",
    country: "US",
    location: [32.38653 , -96.84833]
  },
  {
    name: "Macon",
    state: "Georgia",
    country: "US",
    location: [32.84069 , -83.6324]
  },
  {
    name: "Warner Robins",
    state: "Georgia",
    country: "US",
    location: [32.62098 , -83.5999]
  },
  {
    name: "Fayetteville",
    state: "Arkansas",
    country: "US",
    location: [36.06258 , -94.15743]
  },
  {
    name: "Fort Smith",
    state: "Arkansas",
    country: "US",
    location: [35.38592 , -94.39855]
  },
  {
    name: "Rogers",
    state: "Arkansas",
    country: "US",
    location: [36.33202 , -94.11854]
  },
  {
    name: "Russellville",
    state: "Arkansas",
    country: "US",
    location: [35.27842 , -93.13379]
  },
  {
    name: "Springdale",
    state: "Arkansas",
    country: "US",
    location: [36.18674 , -94.12881]
  },
  {
    name: "Apache Junction",
    state: "Arizona",
    country: "US",
    location: [33.41505 , -111.54958]
  },
  {
    name: "Chandler",
    state: "Arizona",
    country: "US",
    location: [33.30616 , -111.84125]
  },
  {
    name: "Fountain Hills",
    state: "Arizona",
    country: "US",
    location: [33.61171 , -111.71736]
  },
  {
    name: "Gilbert",
    state: "Arizona",
    country: "US",
    location: [33.35283 , -111.78903]
  },
  {
    name: "Mesa",
    state: "Arizona",
    country: "US",
    location: [33.41253 , -111.83189]
  },
  {
    name: "Scottsdale",
    state: "Arizona",
    country: "US",
    location: [33.50921 , -111.89903]
  },
  {
    name: "Tempe",
    state: "Arizona",
    country: "US",
    location: [33.41477 , -111.90931]
  },
  {
    name: "Allentown",
    state: "Pennsylvania",
    country: "US",
    location: [40.60843 , -75.49018]
  },
  {
    name: "Bethlehem",
    state: "Pennsylvania",
    country: "US",
    location: [40.62593 , -75.37046]
  },
  {
    name: "West Chester",
    state: "Pennsylvania",
    country: "US",
    location: [39.96097 , -75.60804]
  },
  {
    name: "Drexel Hill",
    state: "Pennsylvania",
    country: "US",
    location: [39.94706 , -75.29213]
  },
  {
    name: "Easton",
    state: "Pennsylvania",
    country: "US",
    location: [40.68843 , -75.22073]
  },
  {
    name: "Norristown",
    state: "Pennsylvania",
    country: "US",
    location: [40.1215 , -75.3399]
  },
  {
    name: "Pottstown",
    state: "Pennsylvania",
    country: "US",
    location: [40.24537 , -75.64963]
  },
  {
    name: "Radnor",
    state: "Pennsylvania",
    country: "US",
    location: [40.04622 , -75.35991]
  },
  {
    name: "Reading",
    state: "Pennsylvania",
    country: "US",
    location: [40.33565 , -75.92687]
  },
  {
    name: "Springfield",
    state: "Pennsylvania",
    country: "US",
    location: [39.93067 , -75.32019]
  },
  {
    name: "Benton",
    state: "Arkansas",
    country: "US",
    location: [34.56454 , -92.58683]
  },
  {
    name: "Conway",
    state: "Arkansas",
    country: "US",
    location: [35.0887 , -92.4421]
  },
  {
    name: "Hot Springs",
    state: "Arkansas",
    country: "US",
    location: [34.5037 , -93.05518]
  },
  {
    name: "Jacksonville",
    state: "Arkansas",
    country: "US",
    location: [34.8662 , -92.11015]
  },
  {
    name: "North Little Rock",
    state: "Arkansas",
    country: "US",
    location: [34.76954 , -92.26709]
  },
  {
    name: "North Little Rock",
    state: "Arkansas",
    country: "US",
    location: [34.76954 , -92.26709]
  },
  {
    name: "Sherwood",
    state: "Arkansas",
    country: "US",
    location: [34.81509 , -92.22432]
  },
  {
    name: "Frankfort",
    state: "Kentucky",
    country: "US",
    location: [38.20091 , -84.87328]
  },
  {
    name: "Louisville",
    state: "Kentucky",
    country: "US",
    location: [38.25424 , -85.75941]
  },
  {
    name: "Aloha",
    state: "Oregon",
    country: "US",
    location: [45.49428 , -122.86705]
  },
  {
    name: "Beaverton",
    state: "Oregon",
    country: "US",
    location: [45.48706 , -122.80371]
  },
  {
    name: "Gresham",
    state: "Oregon",
    country: "US",
    location: [45.49818 , -122.43148]
  },
  {
    name: "Hillsboro",
    state: "Oregon",
    country: "US",
    location: [45.52289 , -122.98983]
  },
  {
    name: "Keizer",
    state: "Oregon",
    country: "US",
    location: [44.99012 , -123.02621]
  },
  {
    name: "Lake Oswego",
    state: "Oregon",
    country: "US",
    location: [45.42067 , -122.67065]
  },
  {
    name: "McMinnville",
    state: "Oregon",
    country: "US",
    location: [45.21012 , -123.19872]
  },
  {
    name: "Milwaukie",
    state: "Oregon",
    country: "US",
    location: [45.44623 , -122.63926]
  },
  {
    name: "Oregon City",
    state: "Oregon",
    country: "US",
    location: [45.35734 , -122.60676]
  },
  {
    name: "Portland",
    state: "Oregon",
    country: "US",
    location: [45.52345 , -122.67621]
  },
  {
    name: "Salem",
    state: "Oregon",
    country: "US",
    location: [44.9429 , -123.0351]
  },
  {
    name: "Tigard",
    state: "Oregon",
    country: "US",
    location: [45.43123 , -122.77149]
  },
  {
    name: "Tualatin",
    state: "Oregon",
    country: "US",
    location: [45.38401 , -122.76399]
  },
  {
    name: "West Linn",
    state: "Oregon",
    country: "US",
    location: [45.36568 , -122.61231]
  },
  {
    name: "Woodburn",
    state: "Oregon",
    country: "US",
    location: [45.14373 , -122.85537]
  },
  {
    name: "Chalmette",
    state: "Louisiana",
    country: "US",
    location: [29.94296 , -89.96537]
  },
  {
    name: "Harvey",
    state: "Louisiana",
    country: "US",
    location: [29.90354 , -90.07729]
  },
  {
    name: "Kenner",
    state: "Louisiana",
    country: "US",
    location: [29.99409 , -90.24174]
  },
  {
    name: "Marrero",
    state: "Louisiana",
    country: "US",
    location: [29.89937 , -90.10035]
  },
  {
    name: "Metairie",
    state: "Louisiana",
    country: "US",
    location: [29.98409 , -90.15285]
  },
  {
    name: "New Orleans",
    state: "Louisiana",
    country: "US",
    location: [29.95465 , -90.07507]
  },
  {
    name: "Terrytown",
    state: "Louisiana",
    country: "US",
    location: [29.91021 , -90.03257]
  },
  {
    name: "Albuquerque",
    state: "New Mexico",
    country: "US",
    location: [35.08449 , -106.65114]
  },
  {
    name: "Farmington",
    state: "New Mexico",
    country: "US",
    location: [36.72806 , -108.21869]
  },
  {
    name: "Gallup",
    state: "New Mexico",
    country: "US",
    location: [35.52808 , -108.74258]
  },
  {
    name: "Rio Rancho",
    state: "New Mexico",
    country: "US",
    location: [35.23338 , -106.66447]
  },
  {
    name: "Santa Fe",
    state: "New Mexico",
    country: "US",
    location: [35.68698 , -105.9378]
  },
  {
    name: "South Valley",
    state: "New Mexico",
    country: "US",
    location: [35.01005 , -106.67808]
  },
  {
    name: "Austin",
    state: "Minnesota",
    country: "US",
    location: [43.66663 , -92.97464]
  },
  {
    name: "Faribault",
    state: "Minnesota",
    country: "US",
    location: [44.29496 , -93.26883]
  },
  {
    name: "North Mankato",
    state: "Minnesota",
    country: "US",
    location: [44.1733 , -94.03385]
  },
  {
    name: "Owatonna",
    state: "Minnesota",
    country: "US",
    location: [44.08385 , -93.22604]
  },
  {
    name: "Rochester",
    state: "Minnesota",
    country: "US",
    location: [44.02163 , -92.4699]
  },
  {
    name: "Winona",
    state: "Minnesota",
    country: "US",
    location: [44.04996 , -91.63932]
  },
  {
    name: "Attleboro",
    state: "Massachusetts",
    country: "US",
    location: [41.94454 , -71.28561]
  },
  {
    name: "Barnstable",
    state: "Massachusetts",
    country: "US",
    location: [41.70011 , -70.29947]
  },
  {
    name: "Brockton",
    state: "Massachusetts",
    country: "US",
    location: [42.08343 , -71.01838]
  },
  {
    name: "Fall River",
    state: "Massachusetts",
    country: "US",
    location: [41.70149 , -71.15505]
  },
  {
    name: "Framingham",
    state: "Massachusetts",
    country: "US",
    location: [42.27926 , -71.41617]
  },
  {
    name: "Franklin",
    state: "Massachusetts",
    country: "US",
    location: [42.08343 , -71.39673]
  },
  {
    name: "Marlborough",
    state: "Massachusetts",
    country: "US",
    location: [42.34593 , -71.55229]
  },
  {
    name: "Milford",
    state: "Massachusetts",
    country: "US",
    location: [42.13982 , -71.51617]
  },
  {
    name: "New Bedford",
    state: "Massachusetts",
    country: "US",
    location: [41.63622 , -70.93421]
  },
  {
    name: "Taunton",
    state: "Massachusetts",
    country: "US",
    location: [41.9001 , -71.08977]
  },
  {
    name: "Worcester",
    state: "Massachusetts",
    country: "US",
    location: [42.26259 , -71.80229]
  },
  {
    name: "Kennewick",
    state: "Washington",
    country: "US",
    location: [46.21125 , -119.13723]
  },
  {
    name: "Opportunity",
    state: "Washington",
    country: "US",
    location: [47.64995 , -117.23991]
  },
  {
    name: "Pasco",
    state: "Washington",
    country: "US",
    location: [46.23958 , -119.10057]
  },
  {
    name: "Pullman",
    state: "Washington",
    country: "US",
    location: [46.73127 , -117.17962]
  },
  {
    name: "West Richland",
    state: "Washington",
    country: "US",
    location: [46.3043 , -119.36141]
  },
  {
    name: "Spokane",
    state: "Washington",
    country: "US",
    location: [47.65966 , -117.42908]
  },
  {
    name: "Walla Walla",
    state: "Washington",
    country: "US",
    location: [46.06458 , -118.34302]
  },
  {
    name: "Wenatchee",
    state: "Washington",
    country: "US",
    location: [47.42346 , -120.31035]
  },
  {
    name: "Yakima",
    state: "Washington",
    country: "US",
    location: [46.60207 , -120.5059]
  },
  {
    name: "Alameda",
    state: "California",
    country: "US",
    location: [37.76521 , -122.24164]
  },
  {
    name: "Berkeley",
    state: "California",
    country: "US",
    location: [37.87159 , -122.27275]
  },
  {
    name: "Castro Valley",
    state: "California",
    country: "US",
    location: [37.6941 , -122.08635]
  },
  {
    name: "El Cerrito",
    state: "California",
    country: "US",
    location: [33.84057 , -117.52283]
  },
  {
    name: "Fremont",
    state: "California",
    country: "US",
    location: [37.54827 , -121.98857]
  },
  {
    name: "Hayward",
    state: "California",
    country: "US",
    location: [37.66882 , -122.0808]
  },
  {
    name: "Newark",
    state: "California",
    country: "US",
    location: [37.52966 , -122.04024]
  },
  {
    name: "Atlanta",
    state: "Georgia",
    country: "US",
    location: [33.749 , -84.38798]
  },
  {
    name: "Oakland",
    state: "California",
    country: "US",
    location: [37.80437 , -122.2708]
  },
  {
    name: "Richmond",
    state: "California",
    country: "US",
    location: [37.93576 , -122.34775]
  },
  {
    name: "San Leandro",
    state: "California",
    country: "US",
    location: [37.72493 , -122.15608]
  },
  {
    name: "San Lorenzo",
    state: "California",
    country: "US",
    location: [37.68104 , -122.12441]
  },
  {
    name: "San Pablo",
    state: "California",
    country: "US",
    location: [37.96215 , -122.34553]
  },
  {
    name: "Union City",
    state: "California",
    country: "US",
    location: [37.59577 , -122.01913]
  },
  {
    name: "Austin",
    state: "Texas",
    country: "US",
    location: [30.26715 , -97.74306]
  },
  {
    name: "Cedar Park",
    state: "Texas",
    country: "US",
    location: [30.5052 , -97.82029]
  },
  {
    name: "Georgetown",
    state: "Texas",
    country: "US",
    location: [30.63269 , -97.67723]
  },
  {
    name: "Round Rock",
    state: "Texas",
    country: "US",
    location: [30.50826 , -97.6789]
  },
  {
    name: "San Marcos",
    state: "Texas",
    country: "US",
    location: [29.88327 , -97.94139]
  },
  {
    name: "Cincinnati",
    state: "Ohio",
    country: "US",
    location: [39.162 , -84.45689]
  },
  {
    name: "Fairfield",
    state: "Ohio",
    country: "US",
    location: [39.34589 , -84.5605]
  },
  {
    name: "Hamilton",
    state: "Ohio",
    country: "US",
    location: [39.3995 , -84.56134]
  },
  {
    name: "Mason",
    state: "Ohio",
    country: "US",
    location: [39.36006 , -84.30994]
  },
  {
    name: "Middletown",
    state: "Ohio",
    country: "US",
    location: [39.51506 , -84.39828]
  },
  {
    name: "Norwood",
    state: "Ohio",
    country: "US",
    location: [39.15561 , -84.45966]
  },
  {
    name: "Oxford",
    state: "Ohio",
    country: "US",
    location: [39.507 , -84.74523]
  },
  {
    name: "Ames",
    state: "Iowa",
    country: "US",
    location: [42.03471 , -93.61994]
  },
  {
    name: "Ankeny",
    state: "Iowa",
    country: "US",
    location: [41.72971 , -93.60577]
  },
  {
    name: "West Des Moines",
    state: "Iowa",
    country: "US",
    location: [41.57721 , -93.71133]
  },
  {
    name: "Fort Dodge",
    state: "Iowa",
    country: "US",
    location: [42.49747 , -94.16802]
  },
  {
    name: "Urbandale",
    state: "Iowa",
    country: "US",
    location: [41.62666 , -93.71217]
  },
  {
    name: "West Des Moines",
    state: "Iowa",
    country: "US",
    location: [41.57721 , -93.71133]
  },
  {
    name: "Baldwin",
    state: "New York",
    country: "US",
    location: [40.65649 , -73.6093]
  },
  {
    name: "East Meadow",
    state: "New York",
    country: "US",
    location: [40.71399 , -73.55902]
  },
  {
    name: "Elmont",
    state: "New York",
    country: "US",
    location: [40.70094 , -73.71291]
  },
  {
    name: "Franklin Square",
    state: "New York",
    country: "US",
    location: [40.70732 , -73.67596]
  },
  {
    name: "Freeport",
    state: "New York",
    country: "US",
    location: [40.6576 , -73.58318]
  },
  {
    name: "Garden City",
    state: "New York",
    country: "US",
    location: [40.72677 , -73.6343]
  },
  {
    name: "Glen Cove",
    state: "New York",
    country: "US",
    location: [40.86232 , -73.63374]
  },
  {
    name: "West Hempstead",
    state: "New York",
    country: "US",
    location: [40.70482 , -73.65013]
  },
  {
    name: "Hicksville",
    state: "New York",
    country: "US",
    location: [40.76843 , -73.52513]
  },
  {
    name: "Levittown",
    state: "New York",
    country: "US",
    location: [40.72593 , -73.51429]
  },
  {
    name: "Long Beach",
    state: "New York",
    country: "US",
    location: [40.58844 , -73.65791]
  },
  {
    name: "North Massapequa",
    state: "New York",
    country: "US",
    location: [40.70093 , -73.46207]
  },
  {
    name: "North Merrick",
    state: "New York",
    country: "US",
    location: [40.69121 , -73.56318]
  },
  {
    name: "North Bellmore",
    state: "New York",
    country: "US",
    location: [40.69149 , -73.53346]
  },
  {
    name: "Oceanside",
    state: "New York",
    country: "US",
    location: [40.63871 , -73.64013]
  },
  {
    name: "Plainview",
    state: "New York",
    country: "US",
    location: [40.77649 , -73.46735]
  },
  {
    name: "Rockville Centre",
    state: "New York",
    country: "US",
    location: [40.65871 , -73.64124]
  },
  {
    name: "Uniondale",
    state: "New York",
    country: "US",
    location: [40.70038 , -73.59291]
  },
  {
    name: "Valley Stream",
    state: "New York",
    country: "US",
    location: [40.66427 , -73.70846]
  },
  {
    name: "Adrian",
    state: "Michigan",
    country: "US",
    location: [41.89755 , -84.03717]
  },
  {
    name: "Clinton",
    state: "Michigan",
    country: "US",
    location: [42.58698 , -82.91992]
  },
  {
    name: "East Lansing",
    state: "Michigan",
    country: "US",
    location: [42.73698 , -84.48387]
  },
  {
    name: "Jackson",
    state: "Michigan",
    country: "US",
    location: [42.24587 , -84.40135]
  },
  {
    name: "Lansing",
    state: "Michigan",
    country: "US",
    location: [42.73253 , -84.55553]
  },
  {
    name: "Okemos",
    state: "Michigan",
    country: "US",
    location: [42.72226 , -84.42747]
  },
  {
    name: "West Albany",
    state: "New York",
    country: "US",
    location: [42.68313 , -73.77845]
  },
  {
    name: "Rotterdam",
    state: "New York",
    country: "US",
    location: [42.78702 , -73.97096]
  },
  {
    name: "Saratoga Springs",
    state: "New York",
    country: "US",
    location: [43.08313 , -73.78457]
  },
  {
    name: "Schenectady",
    state: "New York",
    country: "US",
    location: [42.81424 , -73.93957]
  },
  {
    name: "Troy",
    state: "New York",
    country: "US",
    location: [42.72841 , -73.69179]
  },
  {
    name: "Casa Grande",
    state: "Arizona",
    country: "US",
    location: [32.8795 , -111.75735]
  },
  {
    name: "Catalina Foothills",
    state: "Arizona",
    country: "US",
    location: [32.29785 , -110.9187]
  },
  {
    name: "Drexel Heights",
    state: "Arizona",
    country: "US",
    location: [32.14119 , -111.02843]
  },
  {
    name: "Nogales",
    state: "Arizona",
    country: "US",
    location: [31.34038 , -110.93425]
  },
  {
    name: "Oro Valley",
    state: "Arizona",
    country: "US",
    location: [32.39091 , -110.96649]
  },
  {
    name: "Sierra Vista",
    state: "Arizona",
    country: "US",
    location: [31.55454 , -110.30369]
  },
  {
    name: "Tucson",
    state: "Arizona",
    country: "US",
    location: [32.22174 , -110.92648]
  },
  {
    name: "Chico",
    state: "California",
    country: "US",
    location: [39.72849 , -121.83748]
  },
  {
    name: "Davis",
    state: "California",
    country: "US",
    location: [38.54491 , -121.74052]
  },
  {
    name: "Paradise",
    state: "California",
    country: "US",
    location: [39.75961 , -121.62192]
  },
  {
    name: "Redding",
    state: "California",
    country: "US",
    location: [40.58654 , -122.39168]
  },
  {
    name: "South Lake Tahoe",
    state: "California",
    country: "US",
    location: [38.93324 , -119.98435]
  },
  {
    name: "Woodland",
    state: "California",
    country: "US",
    location: [38.67852 , -121.7733]
  },
  {
    name: "Yuba City",
    state: "California",
    country: "US",
    location: [39.14045 , -121.61691]
  },
  {
    name: "Bellevue",
    state: "Nebraska",
    country: "US",
    location: [41.13667 , -95.89084]
  },
  {
    name: "Columbus",
    state: "Nebraska",
    country: "US",
    location: [41.42973 , -97.36838]
  },
  {
    name: "Fremont",
    state: "Nebraska",
    country: "US",
    location: [41.43333 , -96.49808]
  },
  {
    name: "Hastings",
    state: "Nebraska",
    country: "US",
    location: [40.58612 , -98.38839]
  },
  {
    name: "Lincoln",
    state: "Nebraska",
    country: "US",
    location: [40.8 , -96.66696]
  },
  {
    name: "Norfolk",
    state: "Nebraska",
    country: "US",
    location: [42.02834 , -97.417]
  },
  {
    name: "Omaha",
    state: "Nebraska",
    country: "US",
    location: [41.25861 , -95.93779]
  },
  {
    name: "Bartlesville",
    state: "Oklahoma",
    country: "US",
    location: [36.74731 , -95.98082]
  },
  {
    name: "Broken Arrow",
    state: "Oklahoma",
    country: "US",
    location: [36.0526 , -95.79082]
  },
  {
    name: "Muskogee",
    state: "Oklahoma",
    country: "US",
    location: [35.74788 , -95.36969]
  },
  {
    name: "Tulsa",
    state: "Oklahoma",
    country: "US",
    location: [36.15398 , -95.99277]
  },
  {
    name: "Blacksburg",
    state: "Virginia",
    country: "US",
    location: [37.22957 , -80.41394]
  },
  {
    name: "Cave Spring",
    state: "Virginia",
    country: "US",
    location: [37.22764 , -80.01282]
  },
  {
    name: "Harrisonburg",
    state: "Virginia",
    country: "US",
    location: [38.44957 , -78.86892]
  },
  {
    name: "Roanoke",
    state: "Virginia",
    country: "US",
    location: [37.27097 , -79.94143]
  },
  {
    name: "Salem",
    state: "Virginia",
    country: "US",
    location: [37.29347 , -80.05476]
  },
  {
    name: "Staunton",
    state: "Virginia",
    country: "US",
    location: [38.14991 , -79.0732]
  },
  {
    name: "Winchester",
    state: "Virginia",
    country: "US",
    location: [39.18566 , -78.16333]
  },
  {
    name: "Albany",
    state: "Oregon",
    country: "US",
    location: [44.63651 , -123.10593]
  },
  {
    name: "North Bend",
    state: "Oregon",
    country: "US",
    location: [43.4065 , -124.22428]
  },
  {
    name: "Corvallis",
    state: "Oregon",
    country: "US",
    location: [44.56457 , -123.26204]
  },
  {
    name: "Gresham",
    state: "Oregon",
    country: "US",
    location: [45.49818 , -122.43148]
  },
  {
    name: "Grants Pass",
    state: "Oregon",
    country: "US",
    location: [42.43933 , -123.33067]
  },
  {
    name: "Medford",
    state: "Oregon",
    country: "US",
    location: [42.32652 , -122.87559]
  },
  {
    name: "Roseburg North",
    state: "Oregon",
    country: "US",
    location: [43.26452 , -123.30331]
  },
  {
    name: "Springfield",
    state: "Oregon",
    country: "US",
    location: [44.04624 , -123.02203]
  },
  {
    name: "Bayonne",
    state: "New Jersey",
    country: "US",
    location: [40.66871 , -74.11431]
  },
  {
    name: "Bergenfield",
    state: "New Jersey",
    country: "US",
    location: [40.9276 , -73.99736]
  },
  {
    name: "Cliffside Park",
    state: "New Jersey",
    country: "US",
    location: [40.82149 , -73.98764]
  },
  {
    name: "Englewood",
    state: "New Jersey",
    country: "US",
    location: [40.89288 , -73.97264]
  },
  {
    name: "Fair Lawn",
    state: "New Jersey",
    country: "US",
    location: [40.94038 , -74.13181]
  },
  {
    name: "Fort Lee",
    state: "New Jersey",
    country: "US",
    location: [40.85093 , -73.97014]
  },
  {
    name: "Hackensack",
    state: "New Jersey",
    country: "US",
    location: [40.88593 , -74.04347]
  },
  {
    name: "Hoboken",
    state: "New Jersey",
    country: "US",
    location: [40.74399 , -74.03236]
  },
  {
    name: "Jersey City",
    state: "New Jersey",
    country: "US",
    location: [40.72816 , -74.07764]
  },
  {
    name: "Kearny",
    state: "New Jersey",
    country: "US",
    location: [40.76843 , -74.14542]
  },
  {
    name: "North Bergen",
    state: "New Jersey",
    country: "US",
    location: [40.80427 , -74.01208]
  },
  {
    name: "Paramus",
    state: "New Jersey",
    country: "US",
    location: [40.94454 , -74.07542]
  },
  {
    name: "Ridgewood",
    state: "New Jersey",
    country: "US",
    location: [40.97926 , -74.11653]
  },
  {
    name: "Teaneck",
    state: "New Jersey",
    country: "US",
    location: [40.8976 , -74.01597]
  },
  {
    name: "Union City",
    state: "New Jersey",
    country: "US",
    location: [40.77955 , -74.02375]
  },
  {
    name: "West New York",
    state: "New Jersey",
    country: "US",
    location: [40.78788 , -74.01431]
  },
  {
    name: "Clovis",
    state: "California",
    country: "US",
    location: [36.82523 , -119.70292]
  },
  {
    name: "Fresno",
    state: "California",
    country: "US",
    location: [36.74773 , -119.77237]
  },
  {
    name: "Hanford",
    state: "California",
    country: "US",
    location: [36.32745 , -119.64568]
  },
  {
    name: "Madera",
    state: "California",
    country: "US",
    location: [36.96134 , -120.06072]
  },
  {
    name: "Porterville",
    state: "California",
    country: "US",
    location: [36.06523 , -119.01677]
  },
  {
    name: "Reedley",
    state: "California",
    country: "US",
    location: [36.59634 , -119.4504]
  },
  {
    name: "Tulare",
    state: "California",
    country: "US",
    location: [36.20773 , -119.34734]
  },
  {
    name: "Visalia",
    state: "California",
    country: "US",
    location: [36.33023 , -119.29206]
  },
  {
    name: "Boca Del Mar",
    state: "Florida",
    country: "US",
    location: [26.34508 , -80.14671]
  },
  {
    name: "Boca Raton",
    state: "Florida",
    country: "US",
    location: [26.35869 , -80.0831]
  },
  {
    name: "Boynton Beach",
    state: "Florida",
    country: "US",
    location: [26.52535 , -80.06643]
  },
  {
    name: "Delray Beach",
    state: "Florida",
    country: "US",
    location: [26.46146 , -80.07282]
  },
  {
    name: "Jupiter",
    state: "Florida",
    country: "US",
    location: [26.93422 , -80.09421]
  },
  {
    name: "Lake Worth",
    state: "Florida",
    country: "US",
    location: [26.61708 , -80.07231]
  },
  {
    name: "Palm Beach Gardens",
    state: "Florida",
    country: "US",
    location: [26.82339 , -80.13865]
  },
  {
    name: "Riviera Beach",
    state: "Florida",
    country: "US",
    location: [26.77534 , -80.0581]
  },
  {
    name: "Royal Palm Beach",
    state: "Florida",
    country: "US",
    location: [26.7084 , -80.2306]
  },
  {
    name: "University Park",
    state: "Florida",
    country: "US",
    location: [25.74649 , -80.36755]
  },
  {
    name: "Wellington",
    state: "Florida",
    country: "US",
    location: [26.65868 , -80.24144]
  },
  {
    name: "West Palm Beach",
    state: "Florida",
    country: "US",
    location: [26.71534 , -80.05337]
  },
  {
    name: "Bellflower",
    state: "California",
    country: "US",
    location: [33.88168 , -118.11701]
  },
  {
    name: "Cerritos",
    state: "California",
    country: "US",
    location: [33.85835 , -118.06479]
  },
  {
    name: "Downey",
    state: "California",
    country: "US",
    location: [33.94001 , -118.13257]
  },
  {
    name: "La Habra",
    state: "California",
    country: "US",
    location: [33.93196 , -117.94617]
  },
  {
    name: "La Mirada",
    state: "California",
    country: "US",
    location: [33.91724 , -118.01201]
  },
  {
    name: "Lakewood",
    state: "California",
    country: "US",
    location: [33.85363 , -118.13396]
  },
  {
    name: "Long Beach",
    state: "California",
    country: "US",
    location: [33.76696 , -118.18923]
  },
  {
    name: "Norwalk",
    state: "California",
    country: "US",
    location: [33.90224 , -118.08173]
  },
  {
    name: "Paramount",
    state: "California",
    country: "US",
    location: [33.88946 , -118.15979]
  },
  {
    name: "Pico Rivera",
    state: "California",
    country: "US",
    location: [33.98307 , -118.09673]
  },
  {
    name: "Seal Beach",
    state: "California",
    country: "US",
    location: [33.74141 , -118.10479]
  },
  {
    name: "South Whittier",
    state: "California",
    country: "US",
    location: [33.95015 , -118.03917]
  },
  {
    name: "West Whittier-Los Nietos",
    state: "California",
    country: "US",
    location: [33.976 , -118.06909]
  },
  {
    name: "Whittier",
    state: "California",
    country: "US",
    location: [33.97918 , -118.03284]
  },
  {
    name: "Bettendorf",
    state: "Iowa",
    country: "US",
    location: [41.52448 , -90.51569]
  },
  {
    name: "Clinton",
    state: "Iowa",
    country: "US",
    location: [41.84447 , -90.18874]
  },
  {
    name: "Davenport",
    state: "Iowa",
    country: "US",
    location: [41.52364 , -90.57764]
  },
  {
    name: "Dubuque",
    state: "Iowa",
    country: "US",
    location: [42.50056 , -90.66457]
  },
  {
    name: "Muscatine",
    state: "Iowa",
    country: "US",
    location: [41.42447 , -91.04321]
  },
  {
    name: "Ashland",
    state: "Ohio",
    country: "US",
    location: [40.86867 , -82.31822]
  },
  {
    name: "Bowling Green",
    state: "Ohio",
    country: "US",
    location: [41.37477 , -83.65132]
  },
  {
    name: "Findlay",
    state: "Ohio",
    country: "US",
    location: [41.04422 , -83.64993]
  },
  {
    name: "Lima",
    state: "Ohio",
    country: "US",
    location: [40.74255 , -84.10523]
  },
  {
    name: "Mansfield",
    state: "Ohio",
    country: "US",
    location: [40.75839 , -82.51545]
  },
  {
    name: "Sandusky",
    state: "Ohio",
    country: "US",
    location: [41.44894 , -82.70796]
  },
  {
    name: "Toledo",
    state: "Ohio",
    country: "US",
    location: [41.66394 , -83.55521]
  },
  {
    name: "Back Mountain",
    state: "Pennsylvania",
    country: "US",
    location: [41.33591 , -75.99631]
  },
  {
    name: "Hazleton",
    state: "Pennsylvania",
    country: "US",
    location: [40.95842 , -75.97465]
  },
  {
    name: "Scranton",
    state: "Pennsylvania",
    country: "US",
    location: [41.40916 , -75.6649]
  },
  {
    name: "Wilkes-Barre",
    state: "Pennsylvania",
    country: "US",
    location: [41.24591 , -75.88131]
  },
  {
    name: "Williamsport",
    state: "Pennsylvania",
    country: "US",
    location: [41.24119 , -77.00108]
  },
  {
    name: "Alexandria",
    state: "Virginia",
    country: "US",
    location: [38.80484 , -77.04692]
  },
  {
    name: "Annandale",
    state: "Virginia",
    country: "US",
    location: [38.83039 , -77.19637]
  },
  {
    name: "Arlington",
    state: "Virginia",
    country: "US",
    location: [38.88101 , -77.10428]
  },
  {
    name: "Burke",
    state: "Virginia",
    country: "US",
    location: [38.79345 , -77.27165]
  },
  {
    name: "Centreville",
    state: "Virginia",
    country: "US",
    location: [38.84039 , -77.42888]
  },
  {
    name: "Chantilly",
    state: "Virginia",
    country: "US",
    location: [38.89428 , -77.4311]
  },
  {
    name: "Dale City",
    state: "Virginia",
    country: "US",
    location: [38.63706 , -77.31109]
  },
  {
    name: "Fairfax",
    state: "Virginia",
    country: "US",
    location: [38.84622 , -77.30637]
  },
  {
    name: "Franconia",
    state: "Virginia",
    country: "US",
    location: [38.78206 , -77.14637]
  },
  {
    name: "Groveton",
    state: "Virginia",
    country: "US",
    location: [38.76734 , -77.0847]
  },
  {
    name: "Herndon",
    state: "Virginia",
    country: "US",
    location: [38.96955 , -77.3861]
  },
  {
    name: "Lake Ridge",
    state: "Virginia",
    country: "US",
    location: [38.68789 , -77.29776]
  },
  {
    name: "Leesburg",
    state: "Virginia",
    country: "US",
    location: [39.11566 , -77.5636]
  },
  {
    name: "Manassas",
    state: "Virginia",
    country: "US",
    location: [38.75095 , -77.47527]
  },
  {
    name: "McLean",
    state: "Virginia",
    country: "US",
    location: [38.93428 , -77.17748]
  },
  {
    name: "Mount Vernon",
    state: "Virginia",
    country: "US",
    location: [38.71919 , -77.10726]
  },
  {
    name: "Oakton",
    state: "Virginia",
    country: "US",
    location: [38.88095 , -77.30082]
  },
  {
    name: "Reston",
    state: "Virginia",
    country: "US",
    location: [38.96872 , -77.3411]
  },
  {
    name: "West Springfield",
    state: "Virginia",
    country: "US",
    location: [38.77261 , -77.22109]
  },
  {
    name: "West Springfield",
    state: "Virginia",
    country: "US",
    location: [38.77261 , -77.22109]
  },
  {
    name: "Cape Girardeau",
    state: "Missouri",
    country: "US",
    location: [37.30588 , -89.51815]
  },
  {
    name: "Columbia",
    state: "Missouri",
    country: "US",
    location: [38.95171 , -92.33407]
  },
  {
    name: "Jefferson City",
    state: "Missouri",
    country: "US",
    location: [38.5767 , -92.17352]
  },
  {
    name: "Elkhart",
    state: "Indiana",
    country: "US",
    location: [41.68199 , -85.97667]
  },
  {
    name: "Goshen",
    state: "Indiana",
    country: "US",
    location: [41.58227 , -85.83444]
  },
  {
    name: "Granger",
    state: "Indiana",
    country: "US",
    location: [41.75338 , -86.11084]
  },
  {
    name: "Mishawaka",
    state: "Indiana",
    country: "US",
    location: [41.66199 , -86.15862]
  },
  {
    name: "South Bend",
    state: "Indiana",
    country: "US",
    location: [41.68338 , -86.25001]
  },
  {
    name: "Alamogordo",
    state: "New Mexico",
    country: "US",
    location: [32.89953 , -105.96027]
  },
  {
    name: "Carlsbad",
    state: "New Mexico",
    country: "US",
    location: [32.42067 , -104.22884]
  },
  {
    name: "Clovis",
    state: "New Mexico",
    country: "US",
    location: [34.4048 , -103.20523]
  },
  {
    name: "Hobbs",
    state: "New Mexico",
    country: "US",
    location: [32.70261 , -103.13604]
  },
  {
    name: "Las Cruces",
    state: "New Mexico",
    country: "US",
    location: [32.31232 , -106.77834]
  },
  {
    name: "Roswell",
    state: "New Mexico",
    country: "US",
    location: [33.39437 , -104.52491]
  },
  {
    name: "Altus",
    state: "Oklahoma",
    country: "US",
    location: [34.63813 , -99.33398]
  },
  {
    name: "Ardmore",
    state: "Oklahoma",
    country: "US",
    location: [34.17426 , -97.14363]
  },
  {
    name: "Duncan",
    state: "Oklahoma",
    country: "US",
    location: [34.5023 , -97.95781]
  },
  {
    name: "Enid",
    state: "Oklahoma",
    country: "US",
    location: [36.39559 , -97.87839]
  },
  {
    name: "Lawton",
    state: "Oklahoma",
    country: "US",
    location: [34.60869 , -98.39033]
  },
  {
    name: "Ponca City",
    state: "Oklahoma",
    country: "US",
    location: [36.70698 , -97.08559]
  },
  {
    name: "Brighton",
    state: "New York",
    country: "US",
    location: [43.14756 , -77.55055]
  },
  {
    name: "Irondequoit",
    state: "New York",
    country: "US",
    location: [43.2134 , -77.57972]
  },
  {
    name: "Rochester",
    state: "New York",
    country: "US",
    location: [43.15478 , -77.61556]
  },
  {
    name: "Clinton",
    state: "Michigan",
    country: "US",
    location: [42.58698 , -82.91992]
  },
  {
    name: "Eastpointe",
    state: "Michigan",
    country: "US",
    location: [42.46837 , -82.95547]
  },
  {
    name: "Roseville",
    state: "Michigan",
    country: "US",
    location: [42.49726 , -82.93714]
  },
  {
    name: "Shelby",
    state: "Michigan",
    country: "US",
    location: [42.67087 , -83.03298]
  },
  {
    name: "Saint Clair Shores",
    state: "Michigan",
    country: "US",
    location: [42.49698 , -82.88881]
  },
  {
    name: "Sterling Heights",
    state: "Michigan",
    country: "US",
    location: [42.58031 , -83.0302]
  },
  {
    name: "Warren",
    state: "Michigan",
    country: "US",
    location: [42.47754 , -83.0277]
  },
  {
    name: "Clinton",
    state: "Mississippi",
    country: "US",
    location: [32.34153 , -90.32176]
  },
  {
    name: "West Hattiesburg",
    state: "Mississippi",
    country: "US",
    location: [31.31906 , -89.37506]
  },
  {
    name: "Jackson",
    state: "Mississippi",
    country: "US",
    location: [32.29876 , -90.18481]
  },
  {
    name: "Meridian",
    state: "Mississippi",
    country: "US",
    location: [32.36431 , -88.70366]
  },
  {
    name: "Pearl",
    state: "Mississippi",
    country: "US",
    location: [32.27459 , -90.13203]
  },
  {
    name: "Ridgeland",
    state: "Mississippi",
    country: "US",
    location: [32.42848 , -90.13231]
  },
  {
    name: "Vicksburg",
    state: "Mississippi",
    country: "US",
    location: [32.35265 , -90.87788]
  },
  {
    name: "Phoenix",
    state: "Arizona",
    country: "US",
    location: [33.44838 , -112.07404]
  },
  {
    name: "East Concord",
    state: "New Hampshire",
    country: "US",
    location: [43.24202 , -71.53813]
  },
  {
    name: "Derry",
    state: "New Hampshire",
    country: "US",
    location: [42.88064 , -71.32729]
  },
  {
    name: "Dover",
    state: "New Hampshire",
    country: "US",
    location: [43.19786 , -70.87367]
  },
  {
    name: "Keene",
    state: "New Hampshire",
    country: "US",
    location: [42.93369 , -72.27814]
  },
  {
    name: "Manchester",
    state: "New Hampshire",
    country: "US",
    location: [42.99564 , -71.45479]
  },
  {
    name: "Nashua",
    state: "New Hampshire",
    country: "US",
    location: [42.76537 , -71.46757]
  },
  {
    name: "Portsmouth",
    state: "New Hampshire",
    country: "US",
    location: [43.07176 , -70.76255]
  },
  {
    name: "Rochester",
    state: "New Hampshire",
    country: "US",
    location: [43.30453 , -70.97562]
  },
  {
    name: "Aberdeen",
    state: "South Dakota",
    country: "US",
    location: [45.4647 , -98.48648]
  },
  {
    name: "Pierre",
    state: "South Dakota",
    country: "US",
    location: [44.36832 , -100.35097]
  },
  {
    name: "Rapid City",
    state: "South Dakota",
    country: "US",
    location: [44.08054 , -103.23101]
  },
  {
    name: "Sioux Falls",
    state: "South Dakota",
    country: "US",
    location: [43.54997 , -96.70033]
  },
  {
    name: "Watertown",
    state: "South Dakota",
    country: "US",
    location: [44.89941 , -97.11507]
  },
  {
    name: "Ashland",
    state: "Kentucky",
    country: "US",
    location: [38.47841 , -82.63794]
  },
  {
    name: "Binghamton",
    state: "New York",
    country: "US",
    location: [42.09869 , -75.91797]
  },
  {
    name: "Elmira",
    state: "New York",
    country: "US",
    location: [42.0898 , -76.80773]
  },
  {
    name: "Ithaca",
    state: "New York",
    country: "US",
    location: [42.44063 , -76.49661]
  },
  {
    name: "Beloit",
    state: "Wisconsin",
    country: "US",
    location: [42.50835 , -89.03178]
  },
  {
    name: "Fitchburg",
    state: "Wisconsin",
    country: "US",
    location: [42.96083 , -89.46984]
  },
  {
    name: "Janesville",
    state: "Wisconsin",
    country: "US",
    location: [42.68279 , -89.01872]
  },
  {
    name: "North La Crosse",
    state: "Wisconsin",
    country: "US",
    location: [43.84635 , -91.24819]
  },
  {
    name: "Madison",
    state: "Wisconsin",
    country: "US",
    location: [43.07305 , -89.40123]
  },
  {
    name: "Sun Prairie",
    state: "Wisconsin",
    country: "US",
    location: [43.1836 , -89.21373]
  },
  {
    name: "Atlantic City",
    state: "New Jersey",
    country: "US",
    location: [39.36428 , -74.42293]
  },
  {
    name: "Ewing",
    state: "New Jersey",
    country: "US",
    location: [40.26983 , -74.79988]
  },
  {
    name: "Trenton",
    state: "New Jersey",
    country: "US",
    location: [40.21705 , -74.74294]
  },
  {
    name: "Willingboro",
    state: "New Jersey",
    country: "US",
    location: [40.02789 , -74.86905]
  },
  {
    name: "Allentown",
    state: "Pennsylvania",
    country: "US",
    location: [40.60843 , -75.49018]
  },
  {
    name: "Bethlehem",
    state: "Pennsylvania",
    country: "US",
    location: [40.62593 , -75.37046]
  },
  {
    name: "West Chester",
    state: "Pennsylvania",
    country: "US",
    location: [39.96097 , -75.60804]
  },
  {
    name: "Drexel Hill",
    state: "Pennsylvania",
    country: "US",
    location: [39.94706 , -75.29213]
  },
  {
    name: "Easton",
    state: "Pennsylvania",
    country: "US",
    location: [40.68843 , -75.22073]
  },
  {
    name: "Norristown",
    state: "Pennsylvania",
    country: "US",
    location: [40.1215 , -75.3399]
  },
  {
    name: "Pottstown",
    state: "Pennsylvania",
    country: "US",
    location: [40.24537 , -75.64963]
  },
  {
    name: "Radnor",
    state: "Pennsylvania",
    country: "US",
    location: [40.04622 , -75.35991]
  },
  {
    name: "Reading",
    state: "Pennsylvania",
    country: "US",
    location: [40.33565 , -75.92687]
  },
  {
    name: "Springfield",
    state: "Pennsylvania",
    country: "US",
    location: [39.93067 , -75.32019]
  },
  {
    name: "Crystal",
    state: "Minnesota",
    country: "US",
    location: [45.03274 , -93.36023]
  },
  {
    name: "Golden Valley",
    state: "Minnesota",
    country: "US",
    location: [45.00969 , -93.34912]
  },
  {
    name: "Minneapolis",
    state: "Minnesota",
    country: "US",
    location: [44.97997 , -93.26384]
  },
  {
    name: "Richfield",
    state: "Minnesota",
    country: "US",
    location: [44.8833 , -93.283]
  },
  {
    name: "Saint Louis Park",
    state: "Minnesota",
    country: "US",
    location: [44.9483 , -93.34801]
  },
  {
    name: "Columbus",
    state: "Ohio",
    country: "US",
    location: [39.96118 , -82.99879]
  },
  {
    name: "Dublin",
    state: "Ohio",
    country: "US",
    location: [40.09923 , -83.11408]
  },
  {
    name: "Gahanna",
    state: "Ohio",
    country: "US",
    location: [40.01923 , -82.87934]
  },
  {
    name: "Grove City",
    state: "Ohio",
    country: "US",
    location: [39.88145 , -83.09296]
  },
  {
    name: "Hilliard",
    state: "Ohio",
    country: "US",
    location: [40.0334 , -83.15825]
  },
  {
    name: "Reynoldsburg",
    state: "Ohio",
    country: "US",
    location: [39.95479 , -82.81212]
  },
  {
    name: "Upper Arlington",
    state: "Ohio",
    country: "US",
    location: [39.99451 , -83.06241]
  },
  {
    name: "Westerville",
    state: "Ohio",
    country: "US",
    location: [40.12617 , -82.92907]
  },
  {
    name: "Brentwood",
    state: "Tennessee",
    country: "US",
    location: [36.03312 , -86.78278]
  },
  {
    name: "Franklin",
    state: "Tennessee",
    country: "US",
    location: [35.92506 , -86.86889]
  },
  {
    name: "Gallatin",
    state: "Tennessee",
    country: "US",
    location: [36.38838 , -86.44666]
  },
  {
    name: "Hendersonville",
    state: "Tennessee",
    country: "US",
    location: [36.30477 , -86.62]
  },
  {
    name: "Lebanon",
    state: "Tennessee",
    country: "US",
    location: [36.20811 , -86.2911]
  },
  {
    name: "Murfreesboro",
    state: "Tennessee",
    country: "US",
    location: [35.84562 , -86.39027]
  },
  {
    name: "Nashville",
    state: "Tennessee",
    country: "US",
    location: [36.16589 , -86.78444]
  },
  {
    name: "Smyrna",
    state: "Tennessee",
    country: "US",
    location: [35.98284 , -86.5186]
  },
  {
    name: "Forest Hills",
    state: "Michigan",
    country: "US",
    location: [42.95947 , -85.48975]
  },
  {
    name: "Grand Rapids",
    state: "Michigan",
    country: "US",
    location: [42.96336 , -85.66809]
  },
  {
    name: "Holland",
    state: "Michigan",
    country: "US",
    location: [42.78752 , -86.10893]
  },
  {
    name: "Kentwood",
    state: "Michigan",
    country: "US",
    location: [42.86947 , -85.64475]
  },
  {
    name: "Walker",
    state: "Michigan",
    country: "US",
    location: [43.00141 , -85.76809]
  },
  {
    name: "Wyoming",
    state: "Michigan",
    country: "US",
    location: [42.91336 , -85.70531]
  },
  {
    name: "Belmont",
    state: "Massachusetts",
    country: "US",
    location: [42.39593 , -71.17867]
  },
  {
    name: "South Boston",
    state: "Massachusetts",
    country: "US",
    location: [42.33343 , -71.04949]
  },
  {
    name: "Brookline",
    state: "Massachusetts",
    country: "US",
    location: [42.33176 , -71.12116]
  },
  {
    name: "Cambridge",
    state: "Massachusetts",
    country: "US",
    location: [42.3751 , -71.10561]
  },
  {
    name: "Chelsea",
    state: "Massachusetts",
    country: "US",
    location: [42.39176 , -71.03283]
  },
  {
    name: "Everett",
    state: "Massachusetts",
    country: "US",
    location: [42.40843 , -71.05366]
  },
  {
    name: "Milton",
    state: "Massachusetts",
    country: "US",
    location: [42.24954 , -71.06616]
  },
  {
    name: "Newton",
    state: "Massachusetts",
    country: "US",
    location: [42.33704 , -71.20922]
  },
  {
    name: "Quincy",
    state: "Massachusetts",
    country: "US",
    location: [42.25288 , -71.00227]
  },
  {
    name: "Somerville",
    state: "Massachusetts",
    country: "US",
    location: [42.3876 , -71.0995]
  },
  {
    name: "Watertown",
    state: "Massachusetts",
    country: "US",
    location: [42.37093 , -71.18283]
  },
  {
    name: "East Alton",
    state: "Illinois",
    country: "US",
    location: [38.88033 , -90.11122]
  },
  {
    name: "Belleville",
    state: "Illinois",
    country: "US",
    location: [38.52005 , -89.98399]
  },
  {
    name: "Carbondale",
    state: "Illinois",
    country: "US",
    location: [37.72727 , -89.21675]
  },
  {
    name: "Collinsville",
    state: "Illinois",
    country: "US",
    location: [38.67033 , -89.98455]
  },
  {
    name: "East Saint Louis",
    state: "Illinois",
    country: "US",
    location: [38.6245 , -90.15094]
  },
  {
    name: "Edwardsville",
    state: "Illinois",
    country: "US",
    location: [38.81144 , -89.95316]
  },
  {
    name: "Granite City",
    state: "Illinois",
    country: "US",
    location: [38.70144 , -90.14872]
  },
  {
    name: "O''Fallon",
    state: "Illinois",
    country: "US",
    location: [38.59227 , -89.91121]
  },
  {
    name: "Chula Vista",
    state: "California",
    country: "US",
    location: [32.64005 , -117.0842]
  },
  {
    name: "Coronado",
    state: "California",
    country: "US",
    location: [32.68589 , -117.18309]
  },
  {
    name: "El Cajon",
    state: "California",
    country: "US",
    location: [32.79477 , -116.96253]
  },
  {
    name: "Imperial Beach",
    state: "California",
    country: "US",
    location: [32.58394 , -117.11308]
  },
  {
    name: "La Mesa",
    state: "California",
    country: "US",
    location: [32.76783 , -117.02308]
  },
  {
    name: "La Presa",
    state: "California",
    country: "US",
    location: [32.70811 , -116.99725]
  },
  {
    name: "Lemon Grove",
    state: "California",
    country: "US",
    location: [32.74255 , -117.03142]
  },
  {
    name: "National City",
    state: "California",
    country: "US",
    location: [32.67811 , -117.0992]
  },
  {
    name: "Rancho San Diego",
    state: "California",
    country: "US",
    location: [32.74727 , -116.9353]
  },
  {
    name: "San Diego",
    state: "California",
    country: "US",
    location: [32.71533 , -117.15726]
  },
  {
    name: "Santee",
    state: "California",
    country: "US",
    location: [32.83838 , -116.97392]
  },
  {
    name: "Spring Valley",
    state: "California",
    country: "US",
    location: [32.74477 , -116.99892]
  },
  {
    name: "Dodge City",
    state: "Kansas",
    country: "US",
    location: [37.7528 , -100.01708]
  },
  {
    name: "Emporia",
    state: "Kansas",
    country: "US",
    location: [38.4039 , -96.18166]
  },
  {
    name: "Garden City",
    state: "Kansas",
    country: "US",
    location: [37.97169 , -100.87266]
  },
  {
    name: "Hutchinson",
    state: "Kansas",
    country: "US",
    location: [38.06084 , -97.92977]
  },
  {
    name: "Avondale",
    state: "Arizona",
    country: "US",
    location: [33.4356 , -112.3496]
  },
  {
    name: "Glendale",
    state: "Arizona",
    country: "US",
    location: [33.53865 , -112.18599]
  },
  {
    name: "Peoria",
    state: "Arizona",
    country: "US",
    location: [33.5806 , -112.23738]
  },
  {
    name: "Sun City West",
    state: "Arizona",
    country: "US",
    location: [33.66198 , -112.34127]
  },
  {
    name: "Sun City West",
    state: "Arizona",
    country: "US",
    location: [33.66198 , -112.34127]
  },
  {
    name: "Atascocita",
    state: "Texas",
    country: "US",
    location: [29.99883 , -95.1766]
  },
  {
    name: "Surprise",
    state: "Arizona",
    country: "US",
    location: [33.63059 , -112.33322]
  },
  {
    name: "Alhambra",
    state: "California",
    country: "US",
    location: [34.09529 , -118.12701]
  },
  {
    name: "Altadena",
    state: "California",
    country: "US",
    location: [34.18973 , -118.13118]
  },
  {
    name: "Arcadia",
    state: "California",
    country: "US",
    location: [34.13973 , -118.03534]
  },
  {
    name: "Azusa",
    state: "California",
    country: "US",
    location: [34.13362 , -117.90756]
  },
  {
    name: "Baldwin Park",
    state: "California",
    country: "US",
    location: [34.08529 , -117.9609]
  },
  {
    name: "West Covina",
    state: "California",
    country: "US",
    location: [34.06862 , -117.93895]
  },
  {
    name: "Duarte",
    state: "California",
    country: "US",
    location: [34.13945 , -117.97729]
  },
  {
    name: "South El Monte",
    state: "California",
    country: "US",
    location: [34.05195 , -118.04673]
  },
  {
    name: "Glendora",
    state: "California",
    country: "US",
    location: [34.13612 , -117.86534]
  },
  {
    name: "Hacienda Heights",
    state: "California",
    country: "US",
    location: [33.99307 , -117.96868]
  },
  {
    name: "La Puente",
    state: "California",
    country: "US",
    location: [34.02001 , -117.94951]
  },
  {
    name: "Monrovia",
    state: "California",
    country: "US",
    location: [34.14806 , -117.99895]
  },
  {
    name: "Monterey Park",
    state: "California",
    country: "US",
    location: [34.06251 , -118.12285]
  },
  {
    name: "South Pasadena",
    state: "California",
    country: "US",
    location: [34.11612 , -118.15035]
  },
  {
    name: "Rosemead",
    state: "California",
    country: "US",
    location: [34.08057 , -118.07285]
  },
  {
    name: "Rowland Heights",
    state: "California",
    country: "US",
    location: [33.97612 , -117.90534]
  },
  {
    name: "South San Gabriel",
    state: "California",
    country: "US",
    location: [34.04915 , -118.09462]
  },
  {
    name: "South El Monte",
    state: "California",
    country: "US",
    location: [34.05195 , -118.04673]
  },
  {
    name: "South Pasadena",
    state: "California",
    country: "US",
    location: [34.11612 , -118.15035]
  },
  {
    name: "South San Jose Hills",
    state: "California",
    country: "US",
    location: [34.01279 , -117.90478]
  },
  {
    name: "Temple City",
    state: "California",
    country: "US",
    location: [34.10723 , -118.05785]
  },
  {
    name: "Valinda",
    state: "California",
    country: "US",
    location: [34.04529 , -117.94367]
  },
  {
    name: "Walnut",
    state: "California",
    country: "US",
    location: [34.02029 , -117.86534]
  },
  {
    name: "West Covina",
    state: "California",
    country: "US",
    location: [34.06862 , -117.93895]
  },
  {
    name: "West Puente Valley",
    state: "California",
    country: "US",
    location: [34.05168 , -117.9684]
  },
  {
    name: "Novato",
    state: "California",
    country: "US",
    location: [38.10742 , -122.5697]
  },
  {
    name: "San Anselmo",
    state: "California",
    country: "US",
    location: [37.97465 , -122.56164]
  },
  {
    name: "South San Francisco",
    state: "California",
    country: "US",
    location: [37.65466 , -122.40775]
  },
  {
    name: "San Rafael",
    state: "California",
    country: "US",
    location: [37.97353 , -122.53109]
  },
  {
    name: "Brentwood",
    state: "Tennessee",
    country: "US",
    location: [36.03312 , -86.78278]
  },
  {
    name: "Franklin",
    state: "Tennessee",
    country: "US",
    location: [35.92506 , -86.86889]
  },
  {
    name: "Gallatin",
    state: "Tennessee",
    country: "US",
    location: [36.38838 , -86.44666]
  },
  {
    name: "Hendersonville",
    state: "Tennessee",
    country: "US",
    location: [36.30477 , -86.62]
  },
  {
    name: "Lebanon",
    state: "Tennessee",
    country: "US",
    location: [36.20811 , -86.2911]
  },
  {
    name: "Murfreesboro",
    state: "Tennessee",
    country: "US",
    location: [35.84562 , -86.39027]
  },
  {
    name: "Nashville",
    state: "Tennessee",
    country: "US",
    location: [36.16589 , -86.78444]
  },
  {
    name: "Smyrna",
    state: "Tennessee",
    country: "US",
    location: [35.98284 , -86.5186]
  },
  {
    name: "Addison",
    state: "Illinois",
    country: "US",
    location: [41.9317 , -87.98896]
  },
  {
    name: "North Aurora",
    state: "Illinois",
    country: "US",
    location: [41.80614 , -88.3273]
  },
  {
    name: "Bartlett",
    state: "Illinois",
    country: "US",
    location: [41.99503 , -88.18563]
  },
  {
    name: "Batavia",
    state: "Illinois",
    country: "US",
    location: [41.85003 , -88.31257]
  },
  {
    name: "Bensenville",
    state: "Illinois",
    country: "US",
    location: [41.95503 , -87.94007]
  },
  {
    name: "Bloomingdale",
    state: "Illinois",
    country: "US",
    location: [41.95753 , -88.0809]
  },
  {
    name: "Bolingbrook",
    state: "Illinois",
    country: "US",
    location: [41.69864 , -88.0684]
  },
  {
    name: "Carol Stream",
    state: "Illinois",
    country: "US",
    location: [41.91253 , -88.13479]
  },
  {
    name: "Darien",
    state: "Illinois",
    country: "US",
    location: [41.75198 , -87.97395]
  },
  {
    name: "Downers Grove",
    state: "Illinois",
    country: "US",
    location: [41.80892 , -88.01117]
  },
  {
    name: "Elmhurst",
    state: "Illinois",
    country: "US",
    location: [41.89947 , -87.94034]
  },
  {
    name: "Glen Ellyn",
    state: "Illinois",
    country: "US",
    location: [41.87753 , -88.06701]
  },
  {
    name: "Glendale Heights",
    state: "Illinois",
    country: "US",
    location: [41.91031 , -88.07174]
  },
  {
    name: "Hanover Park",
    state: "Illinois",
    country: "US",
    location: [41.99947 , -88.14507]
  },
  {
    name: "Lisle",
    state: "Illinois",
    country: "US",
    location: [41.80114 , -88.07479]
  },
  {
    name: "Lombard",
    state: "Illinois",
    country: "US",
    location: [41.88003 , -88.00784]
  },
  {
    name: "Naperville",
    state: "Illinois",
    country: "US",
    location: [41.78586 , -88.14729]
  },
  {
    name: "Roselle",
    state: "Illinois",
    country: "US",
    location: [41.98475 , -88.07979]
  },
  {
    name: "Saint Charles",
    state: "Illinois",
    country: "US",
    location: [41.91419 , -88.30869]
  },
  {
    name: "Streamwood",
    state: "Illinois",
    country: "US",
    location: [42.02558 , -88.17841]
  },
  {
    name: "Villa Park",
    state: "Illinois",
    country: "US",
    location: [41.88975 , -87.98895]
  },
  {
    name: "West Chicago",
    state: "Illinois",
    country: "US",
    location: [41.88475 , -88.20396]
  },
  {
    name: "Westmont",
    state: "Illinois",
    country: "US",
    location: [41.79586 , -87.97562]
  },
  {
    name: "Wheaton",
    state: "Illinois",
    country: "US",
    location: [41.86614 , -88.10701]
  },
  {
    name: "Woodridge",
    state: "Illinois",
    country: "US",
    location: [41.74697 , -88.05034]
  },
  {
    name: "North Bay Shore",
    state: "New York",
    country: "US",
    location: [40.73621 , -73.26262]
  },
  {
    name: "Brentwood",
    state: "New York",
    country: "US",
    location: [40.78121 , -73.24623]
  },
  {
    name: "Centereach",
    state: "New York",
    country: "US",
    location: [40.85843 , -73.09955]
  },
  {
    name: "Central Islip",
    state: "New York",
    country: "US",
    location: [40.79065 , -73.20178]
  },
  {
    name: "Commack",
    state: "New York",
    country: "US",
    location: [40.84288 , -73.29289]
  },
  {
    name: "Copiague",
    state: "New York",
    country: "US",
    location: [40.68149 , -73.39984]
  },
  {
    name: "Coram",
    state: "New York",
    country: "US",
    location: [40.86871 , -73.00149]
  },
  {
    name: "Deer Park",
    state: "New York",
    country: "US",
    location: [40.76177 , -73.32929]
  },
  {
    name: "Dix Hills",
    state: "New York",
    country: "US",
    location: [40.80482 , -73.33623]
  },
  {
    name: "East Northport",
    state: "New York",
    country: "US",
    location: [40.87676 , -73.32456]
  },
  {
    name: "East Patchogue",
    state: "New York",
    country: "US",
    location: [40.76704 , -72.99622]
  },
  {
    name: "Hauppauge",
    state: "New York",
    country: "US",
    location: [40.82565 , -73.20261]
  },
  {
    name: "Holbrook",
    state: "New York",
    country: "US",
    location: [40.81232 , -73.07844]
  },
  {
    name: "Huntington Station",
    state: "New York",
    country: "US",
    location: [40.85343 , -73.41151]
  },
  {
    name: "West Islip",
    state: "New York",
    country: "US",
    location: [40.70621 , -73.30623]
  },
  {
    name: "North Lindenhurst",
    state: "New York",
    country: "US",
    location: [40.71427 , -73.38151]
  },
  {
    name: "Medford",
    state: "New York",
    country: "US",
    location: [40.8176 , -73.00011]
  },
  {
    name: "Ronkonkoma",
    state: "New York",
    country: "US",
    location: [40.81538 , -73.11233]
  },
  {
    name: "Selden",
    state: "New York",
    country: "US",
    location: [40.86649 , -73.03566]
  },
  {
    name: "Shirley",
    state: "New York",
    country: "US",
    location: [40.80149 , -72.8676]
  },
  {
    name: "Smithtown",
    state: "New York",
    country: "US",
    location: [40.85593 , -73.20067]
  },
  {
    name: "West Babylon",
    state: "New York",
    country: "US",
    location: [40.71816 , -73.35429]
  },
  {
    name: "West Islip",
    state: "New York",
    country: "US",
    location: [40.70621 , -73.30623]
  },
  {
    name: "Ballwin",
    state: "Missouri",
    country: "US",
    location: [38.59505 , -90.54623]
  },
  {
    name: "Chesterfield",
    state: "Missouri",
    country: "US",
    location: [38.66311 , -90.57707]
  },
  {
    name: "O''Fallon",
    state: "Missouri",
    country: "US",
    location: [38.81061 , -90.69985]
  },
  {
    name: "Saint Charles",
    state: "Missouri",
    country: "US",
    location: [38.78394 , -90.48123]
  },
  {
    name: "Saint Peters",
    state: "Missouri",
    country: "US",
    location: [38.80033 , -90.62651]
  },
  {
    name: "Wildwood",
    state: "Missouri",
    country: "US",
    location: [38.58283 , -90.6629]
  },
  {
    name: "Marshalltown",
    state: "Iowa",
    country: "US",
    location: [42.04943 , -92.90798]
  },
  {
    name: "Mason City",
    state: "Iowa",
    country: "US",
    location: [43.15357 , -93.20104]
  },
  {
    name: "Ottumwa",
    state: "Iowa",
    country: "US",
    location: [41.02001 , -92.4113]
  },
  {
    name: "New York City",
    state: "New York",
    country: "US",
    location: [40.71427 , -74.00597]
  },
  {
    name: "New York City",
    state: "New York",
    country: "US",
    location: [40.71427 , -74.00597]
  },
  {
    name: "Belmont",
    state: "California",
    country: "US",
    location: [37.52021 , -122.2758]
  },
  {
    name: "Burlingame",
    state: "California",
    country: "US",
    location: [37.5841 , -122.36608]
  },
  {
    name: "Daly City",
    state: "California",
    country: "US",
    location: [37.70577 , -122.46192]
  },
  {
    name: "East Palo Alto",
    state: "California",
    country: "US",
    location: [37.46883 , -122.14108]
  },
  {
    name: "Foster City",
    state: "California",
    country: "US",
    location: [37.55855 , -122.27108]
  },
  {
    name: "Los Altos",
    state: "California",
    country: "US",
    location: [37.38522 , -122.11413]
  },
  {
    name: "Menlo Park",
    state: "California",
    country: "US",
    location: [37.45383 , -122.18219]
  },
  {
    name: "Millbrae",
    state: "California",
    country: "US",
    location: [37.59855 , -122.38719]
  },
  {
    name: "Mountain View",
    state: "California",
    country: "US",
    location: [37.38605 , -122.08385]
  },
  {
    name: "Pacifica",
    state: "California",
    country: "US",
    location: [37.61383 , -122.48692]
  },
  {
    name: "Palo Alto",
    state: "California",
    country: "US",
    location: [37.44188 , -122.14302]
  },
  {
    name: "Redwood City",
    state: "California",
    country: "US",
    location: [37.48522 , -122.23635]
  },
  {
    name: "San Bruno",
    state: "California",
    country: "US",
    location: [37.63049 , -122.41108]
  },
  {
    name: "San Carlos",
    state: "California",
    country: "US",
    location: [37.50716 , -122.26052]
  },
  {
    name: "San Mateo",
    state: "California",
    country: "US",
    location: [37.56299 , -122.32553]
  },
  {
    name: "South San Francisco",
    state: "California",
    country: "US",
    location: [37.65466 , -122.40775]
  },
  {
    name: "Apple Valley",
    state: "Minnesota",
    country: "US",
    location: [44.73191 , -93.21772]
  },
  {
    name: "Cottage Grove",
    state: "Minnesota",
    country: "US",
    location: [44.82774 , -92.94382]
  },
  {
    name: "Eagan",
    state: "Minnesota",
    country: "US",
    location: [44.80413 , -93.16689]
  },
  {
    name: "Inver Grove Heights",
    state: "Minnesota",
    country: "US",
    location: [44.84802 , -93.04272]
  },
  {
    name: "Lakeville",
    state: "Minnesota",
    country: "US",
    location: [44.64969 , -93.24272]
  },
  {
    name: "Maplewood",
    state: "Minnesota",
    country: "US",
    location: [44.95302 , -92.99522]
  },
  {
    name: "New Brighton",
    state: "Minnesota",
    country: "US",
    location: [45.06552 , -93.20189]
  },
  {
    name: "Oakdale",
    state: "Minnesota",
    country: "US",
    location: [44.96302 , -92.96494]
  },
  {
    name: "Roseville",
    state: "Minnesota",
    country: "US",
    location: [45.00608 , -93.15661]
  },
  {
    name: "Shoreview",
    state: "Minnesota",
    country: "US",
    location: [45.07913 , -93.14717]
  },
  {
    name: "South Saint Paul",
    state: "Minnesota",
    country: "US",
    location: [44.89274 , -93.03494]
  },
  {
    name: "Saint Paul",
    state: "Minnesota",
    country: "US",
    location: [44.94441 , -93.09327]
  },
  {
    name: "White Bear Lake",
    state: "Minnesota",
    country: "US",
    location: [45.08469 , -93.00994]
  },
  {
    name: "Woodbury",
    state: "Minnesota",
    country: "US",
    location: [44.92386 , -92.95938]
  },
  {
    name: "Anaheim",
    state: "California",
    country: "US",
    location: [33.83529 , -117.9145]
  },
  {
    name: "Brea",
    state: "California",
    country: "US",
    location: [33.91668 , -117.90006]
  },
  {
    name: "Buena Park",
    state: "California",
    country: "US",
    location: [33.86751 , -117.99812]
  },
  {
    name: "Cypress",
    state: "California",
    country: "US",
    location: [33.81696 , -118.03729]
  },
  {
    name: "Fountain Valley",
    state: "California",
    country: "US",
    location: [33.70918 , -117.95367]
  },
  {
    name: "Fullerton",
    state: "California",
    country: "US",
    location: [33.87029 , -117.92534]
  },
  {
    name: "Garden Grove",
    state: "California",
    country: "US",
    location: [33.77391 , -117.94145]
  },
  {
    name: "Huntington Beach",
    state: "California",
    country: "US",
    location: [33.6603 , -117.99923]
  },
  {
    name: "Orange",
    state: "California",
    country: "US",
    location: [33.78779 , -117.85311]
  },
  {
    name: "Placentia",
    state: "California",
    country: "US",
    location: [33.87224 , -117.87034]
  },
  {
    name: "Santa Ana",
    state: "California",
    country: "US",
    location: [33.74557 , -117.86783]
  },
  {
    name: "Stanton",
    state: "California",
    country: "US",
    location: [33.80252 , -117.99312]
  },
  {
    name: "North Tustin",
    state: "California",
    country: "US",
    location: [33.76446 , -117.79394]
  },
  {
    name: "Westminster",
    state: "California",
    country: "US",
    location: [33.75918 , -118.00673]
  },
  {
    name: "Yorba Linda",
    state: "California",
    country: "US",
    location: [33.88863 , -117.81311]
  },
  {
    name: "Sedalia",
    state: "Missouri",
    country: "US",
    location: [38.70446 , -93.22826]
  },
  {
    name: "Bakersfield",
    state: "California",
    country: "US",
    location: [35.37329 , -119.01871]
  },
  {
    name: "Delano",
    state: "California",
    country: "US",
    location: [35.76884 , -119.24705]
  },
  {
    name: "Lancaster",
    state: "California",
    country: "US",
    location: [34.69804 , -118.13674]
  },
  {
    name: "Oildale",
    state: "California",
    country: "US",
    location: [35.41968 , -119.01955]
  },
  {
    name: "Palmdale",
    state: "California",
    country: "US",
    location: [34.57943 , -118.11646]
  },
  {
    name: "Santa Clarita",
    state: "California",
    country: "US",
    location: [34.39166 , -118.54259]
  },
  {
    name: "Wasco",
    state: "California",
    country: "US",
    location: [35.59412 , -119.34095]
  },
  {
    name: "Clarksdale",
    state: "Mississippi",
    country: "US",
    location: [34.20011 , -90.57093]
  },
  {
    name: "Columbus",
    state: "Mississippi",
    country: "US",
    location: [33.49567 , -88.42726]
  },
  {
    name: "Greenville",
    state: "Mississippi",
    country: "US",
    location: [33.41012 , -91.06177]
  },
  {
    name: "Olive Branch",
    state: "Mississippi",
    country: "US",
    location: [34.96176 , -89.82953]
  },
  {
    name: "Southaven",
    state: "Mississippi",
    country: "US",
    location: [34.98898 , -90.01259]
  },
  {
    name: "Starkville",
    state: "Mississippi",
    country: "US",
    location: [33.45049 , -88.81961]
  },
  {
    name: "Tupelo",
    state: "Mississippi",
    country: "US",
    location: [34.25807 , -88.70464]
  },
  {
    name: "Annapolis",
    state: "Maryland",
    country: "US",
    location: [38.97845 , -76.49218]
  },
  {
    name: "Arbutus",
    state: "Maryland",
    country: "US",
    location: [39.25455 , -76.69997]
  },
  {
    name: "Arnold",
    state: "Maryland",
    country: "US",
    location: [39.03206 , -76.50274]
  },
  {
    name: "Baltimore",
    state: "Maryland",
    country: "US",
    location: [39.29038 , -76.61219]
  },
  {
    name: "Bel Air North",
    state: "Maryland",
    country: "US",
    location: [39.55429 , -76.37309]
  },
  {
    name: "Bel Air South",
    state: "Maryland",
    country: "US",
    location: [39.50506 , -76.31977]
  },
  {
    name: "Carney",
    state: "Maryland",
    country: "US",
    location: [39.39427 , -76.52358]
  },
  {
    name: "Catonsville",
    state: "Maryland",
    country: "US",
    location: [39.27205 , -76.73192]
  },
  {
    name: "Columbia",
    state: "Maryland",
    country: "US",
    location: [39.24038 , -76.83942]
  },
  {
    name: "Crofton",
    state: "Maryland",
    country: "US",
    location: [39.00178 , -76.68747]
  },
  {
    name: "Dundalk",
    state: "Maryland",
    country: "US",
    location: [39.25066 , -76.52052]
  },
  {
    name: "Edgewood",
    state: "Maryland",
    country: "US",
    location: [39.41872 , -76.2944]
  },
  {
    name: "Eldersburg",
    state: "Maryland",
    country: "US",
    location: [39.40371 , -76.95026]
  },
  {
    name: "West Elkridge",
    state: "Maryland",
    country: "US",
    location: [39.20705 , -76.72692]
  },
  {
    name: "Ellicott City",
    state: "Maryland",
    country: "US",
    location: [39.26733 , -76.79831]
  },
  {
    name: "Essex",
    state: "Maryland",
    country: "US",
    location: [39.30927 , -76.47496]
  },
  {
    name: "Glen Burnie",
    state: "Maryland",
    country: "US",
    location: [39.16261 , -76.62469]
  },
  {
    name: "Lochearn",
    state: "Maryland",
    country: "US",
    location: [39.34066 , -76.72219]
  },
  {
    name: "Middle River",
    state: "Maryland",
    country: "US",
    location: [39.33427 , -76.43941]
  },
  {
    name: "Milford Mill",
    state: "Maryland",
    country: "US",
    location: [39.34788 , -76.76997]
  },
  {
    name: "Odenton",
    state: "Maryland",
    country: "US",
    location: [39.084 , -76.70025]
  },
  {
    name: "Parkville",
    state: "Maryland",
    country: "US",
    location: [39.37733 , -76.53969]
  },
  {
    name: "Perry Hall",
    state: "Maryland",
    country: "US",
    location: [39.41261 , -76.46357]
  },
  {
    name: "Pikesville",
    state: "Maryland",
    country: "US",
    location: [39.37427 , -76.72247]
  },
  {
    name: "Randallstown",
    state: "Maryland",
    country: "US",
    location: [39.36733 , -76.79525]
  },
  {
    name: "Reisterstown",
    state: "Maryland",
    country: "US",
    location: [39.46976 , -76.8319]
  },
  {
    name: "Salisbury",
    state: "Maryland",
    country: "US",
    location: [38.36067 , -75.59937]
  },
  {
    name: "Severn",
    state: "Maryland",
    country: "US",
    location: [39.13705 , -76.6983]
  },
  {
    name: "Severna Park",
    state: "Maryland",
    country: "US",
    location: [39.07039 , -76.54524]
  },
  {
    name: "South Gate",
    state: "Maryland",
    country: "US",
    location: [39.129 , -76.6258]
  },
  {
    name: "Towson",
    state: "Maryland",
    country: "US",
    location: [39.4015 , -76.60191]
  },
  {
    name: "Campbell",
    state: "California",
    country: "US",
    location: [37.28717 , -121.94996]
  },
  {
    name: "Gilroy",
    state: "California",
    country: "US",
    location: [37.00578 , -121.56828]
  },
  {
    name: "Los Gatos",
    state: "California",
    country: "US",
    location: [37.22661 , -121.97468]
  },
  {
    name: "Milpitas",
    state: "California",
    country: "US",
    location: [37.42827 , -121.90662]
  },
  {
    name: "Morgan Hill",
    state: "California",
    country: "US",
    location: [37.1305 , -121.65439]
  },
  {
    name: "San Jose",
    state: "California",
    country: "US",
    location: [37.33939 , -121.89496]
  },
  {
    name: "Santa Clara",
    state: "California",
    country: "US",
    location: [37.35411 , -121.95524]
  },
  {
    name: "Saratoga",
    state: "California",
    country: "US",
    location: [37.26383 , -122.02301]
  },
  {
    name: "Sunnyvale",
    state: "California",
    country: "US",
    location: [37.36883 , -122.03635]
  },
  {
    name: "Alpharetta",
    state: "Georgia",
    country: "US",
    location: [34.07538 , -84.29409]
  },
  {
    name: "Atlanta",
    state: "Georgia",
    country: "US",
    location: [33.749 , -84.38798]
  },
  {
    name: "Candler-McAfee",
    state: "Georgia",
    country: "US",
    location: [33.72672 , -84.27246]
  },
  {
    name: "College Park",
    state: "Georgia",
    country: "US",
    location: [33.65344 , -84.44937]
  },
  {
    name: "College Park",
    state: "Georgia",
    country: "US",
    location: [33.65344 , -84.44937]
  },
  {
    name: "Douglasville",
    state: "Georgia",
    country: "US",
    location: [33.7515 , -84.74771]
  },
  {
    name: "Duluth",
    state: "Georgia",
    country: "US",
    location: [34.00288 , -84.14464]
  },
  {
    name: "Dunwoody",
    state: "Georgia",
    country: "US",
    location: [33.94621 , -84.33465]
  },
  {
    name: "East Point",
    state: "Georgia",
    country: "US",
    location: [33.67955 , -84.43937]
  },
  {
    name: "Forest Park",
    state: "Georgia",
    country: "US",
    location: [33.62205 , -84.36909]
  },
  {
    name: "Gainesville",
    state: "Georgia",
    country: "US",
    location: [34.29788 , -83.82407]
  },
  {
    name: "Griffin",
    state: "Georgia",
    country: "US",
    location: [33.24678 , -84.26409]
  },
  {
    name: "Kennesaw",
    state: "Georgia",
    country: "US",
    location: [34.02343 , -84.61549]
  },
  {
    name: "Lawrenceville",
    state: "Georgia",
    country: "US",
    location: [33.95621 , -83.98796]
  },
  {
    name: "Mableton",
    state: "Georgia",
    country: "US",
    location: [33.81872 , -84.58243]
  },
  {
    name: "Marietta",
    state: "Georgia",
    country: "US",
    location: [33.9526 , -84.54993]
  },
  {
    name: "Peachtree City",
    state: "Georgia",
    country: "US",
    location: [33.39678 , -84.59576]
  },
  {
    name: "Redan",
    state: "Georgia",
    country: "US",
    location: [33.74538 , -84.13158]
  },
  {
    name: "Roswell",
    state: "Georgia",
    country: "US",
    location: [34.02316 , -84.36159]
  },
  {
    name: "Sandy Springs",
    state: "Georgia",
    country: "US",
    location: [33.92427 , -84.37854]
  },
  {
    name: "Smyrna",
    state: "Georgia",
    country: "US",
    location: [33.88399 , -84.51438]
  },
  {
    name: "Tucker",
    state: "Georgia",
    country: "US",
    location: [33.85455 , -84.21714]
  },
  {
    name: "South Charleston",
    state: "West Virginia",
    country: "US",
    location: [38.36843 , -81.69957]
  },
  {
    name: "Huntington",
    state: "West Virginia",
    country: "US",
    location: [38.41925 , -82.44515]
  },
  {
    name: "Morgantown",
    state: "West Virginia",
    country: "US",
    location: [39.62953 , -79.9559]
  },
  {
    name: "Parkersburg",
    state: "West Virginia",
    country: "US",
    location: [39.26674 , -81.56151]
  },
  {
    name: "Weirton",
    state: "West Virginia",
    country: "US",
    location: [40.41896 , -80.58952]
  },
  {
    name: "Wheeling",
    state: "West Virginia",
    country: "US",
    location: [40.06396 , -80.72091]
  },
  {
    name: "Arlington",
    state: "Texas",
    country: "US",
    location: [32.73569 , -97.10807]
  },
  {
    name: "Bedford",
    state: "Texas",
    country: "US",
    location: [32.84402 , -97.14307]
  },
  {
    name: "Benbrook",
    state: "Texas",
    country: "US",
    location: [32.67319 , -97.46058]
  },
  {
    name: "Burleson",
    state: "Texas",
    country: "US",
    location: [32.54208 , -97.32085]
  },
  {
    name: "Cleburne",
    state: "Texas",
    country: "US",
    location: [32.34764 , -97.38668]
  },
  {
    name: "Euless",
    state: "Texas",
    country: "US",
    location: [32.83707 , -97.08195]
  },
  {
    name: "Fort Worth",
    state: "Texas",
    country: "US",
    location: [32.72541 , -97.32085]
  },
  {
    name: "Grapevine",
    state: "Texas",
    country: "US",
    location: [32.93429 , -97.07807]
  },
  {
    name: "Haltom City",
    state: "Texas",
    country: "US",
    location: [32.79957 , -97.26918]
  },
  {
    name: "Hurst",
    state: "Texas",
    country: "US",
    location: [32.82346 , -97.17057]
  },
  {
    name: "Keller",
    state: "Texas",
    country: "US",
    location: [32.93457 , -97.25168]
  },
  {
    name: "Mansfield",
    state: "Texas",
    country: "US",
    location: [32.56319 , -97.14168]
  },
  {
    name: "North Richland Hills",
    state: "Texas",
    country: "US",
    location: [32.8343 , -97.2289]
  },
  {
    name: "Southlake",
    state: "Texas",
    country: "US",
    location: [32.94124 , -97.13418]
  },
  {
    name: "Watauga",
    state: "Texas",
    country: "US",
    location: [32.85791 , -97.25474]
  },
  {
    name: "Bismarck",
    state: "North Dakota",
    country: "US",
    location: [46.80833 , -100.78374]
  },
  {
    name: "West Fargo",
    state: "North Dakota",
    country: "US",
    location: [46.87497 , -96.90036]
  },
  {
    name: "Grand Forks",
    state: "North Dakota",
    country: "US",
    location: [47.92526 , -97.03285]
  },
  {
    name: "Minot",
    state: "North Dakota",
    country: "US",
    location: [48.23251 , -101.29627]
  },
  {
    name: "Henderson",
    state: "Nevada",
    country: "US",
    location: [36.0397 , -114.98194]
  },
  {
    name: "North Las Vegas",
    state: "Nevada",
    country: "US",
    location: [36.19886 , -115.1175]
  },
  {
    name: "North Las Vegas",
    state: "Nevada",
    country: "US",
    location: [36.19886 , -115.1175]
  },
  {
    name: "Paradise",
    state: "Nevada",
    country: "US",
    location: [36.09719 , -115.14666]
  },
  {
    name: "Spring Valley",
    state: "Nevada",
    country: "US",
    location: [36.10803 , -115.245]
  },
  {
    name: "Sunrise Manor",
    state: "Nevada",
    country: "US",
    location: [36.21108 , -115.07306]
  },
  {
    name: "Winchester",
    state: "Nevada",
    country: "US",
    location: [36.12997 , -115.11889]
  },
  {
    name: "Alexandria",
    state: "Virginia",
    country: "US",
    location: [38.80484 , -77.04692]
  },
  {
    name: "Annandale",
    state: "Virginia",
    country: "US",
    location: [38.83039 , -77.19637]
  },
  {
    name: "Arlington",
    state: "Virginia",
    country: "US",
    location: [38.88101 , -77.10428]
  },
  {
    name: "Burke",
    state: "Virginia",
    country: "US",
    location: [38.79345 , -77.27165]
  },
  {
    name: "Centreville",
    state: "Virginia",
    country: "US",
    location: [38.84039 , -77.42888]
  },
  {
    name: "Chantilly",
    state: "Virginia",
    country: "US",
    location: [38.89428 , -77.4311]
  },
  {
    name: "Dale City",
    state: "Virginia",
    country: "US",
    location: [38.63706 , -77.31109]
  },
  {
    name: "Fairfax",
    state: "Virginia",
    country: "US",
    location: [38.84622 , -77.30637]
  },
  {
    name: "Franconia",
    state: "Virginia",
    country: "US",
    location: [38.78206 , -77.14637]
  },
  {
    name: "Groveton",
    state: "Virginia",
    country: "US",
    location: [38.76734 , -77.0847]
  },
  {
    name: "Herndon",
    state: "Virginia",
    country: "US",
    location: [38.96955 , -77.3861]
  },
  {
    name: "Lake Ridge",
    state: "Virginia",
    country: "US",
    location: [38.68789 , -77.29776]
  },
  {
    name: "Leesburg",
    state: "Virginia",
    country: "US",
    location: [39.11566 , -77.5636]
  },
  {
    name: "Manassas",
    state: "Virginia",
    country: "US",
    location: [38.75095 , -77.47527]
  },
  {
    name: "McLean",
    state: "Virginia",
    country: "US",
    location: [38.93428 , -77.17748]
  },
  {
    name: "Mount Vernon",
    state: "Virginia",
    country: "US",
    location: [38.71919 , -77.10726]
  },
  {
    name: "Oakton",
    state: "Virginia",
    country: "US",
    location: [38.88095 , -77.30082]
  },
  {
    name: "Reston",
    state: "Virginia",
    country: "US",
    location: [38.96872 , -77.3411]
  },
  {
    name: "West Springfield",
    state: "Virginia",
    country: "US",
    location: [38.77261 , -77.22109]
  },
  {
    name: "West Springfield",
    state: "Virginia",
    country: "US",
    location: [38.77261 , -77.22109]
  },
  {
    name: "Charlotte",
    state: "North Carolina",
    country: "US",
    location: [35.22709 , -80.84313]
  },
  {
    name: "Concord",
    state: "North Carolina",
    country: "US",
    location: [35.40888 , -80.58158]
  },
  {
    name: "South Gastonia",
    state: "North Carolina",
    country: "US",
    location: [35.2193 , -81.20563]
  },
  {
    name: "Huntersville",
    state: "North Carolina",
    country: "US",
    location: [35.41069 , -80.84285]
  },
  {
    name: "Kannapolis",
    state: "North Carolina",
    country: "US",
    location: [35.48736 , -80.62173]
  },
  {
    name: "Matthews",
    state: "North Carolina",
    country: "US",
    location: [35.11681 , -80.72368]
  },
  {
    name: "Monroe",
    state: "North Carolina",
    country: "US",
    location: [34.98543 , -80.54951]
  },
  {
    name: "Salisbury",
    state: "North Carolina",
    country: "US",
    location: [35.67097 , -80.47423]
  },
  {
    name: "Statesville",
    state: "North Carolina",
    country: "US",
    location: [35.78264 , -80.8873]
  },
  {
    name: "Athens",
    state: "Georgia",
    country: "US",
    location: [33.96095 , -83.37794]
  },
  {
    name: "Augusta",
    state: "Georgia",
    country: "US",
    location: [33.47097 , -81.97484]
  },
  {
    name: "Columbus",
    state: "Georgia",
    country: "US",
    location: [32.46098 , -84.98771]
  },
  {
    name: "Dalton",
    state: "Georgia",
    country: "US",
    location: [34.7698 , -84.97022]
  },
  {
    name: "La Grange",
    state: "Georgia",
    country: "US",
    location: [33.03929 , -85.03133]
  },
  {
    name: "Martinez",
    state: "Georgia",
    country: "US",
    location: [33.51736 , -82.07567]
  },
  {
    name: "Rome",
    state: "Georgia",
    country: "US",
    location: [34.25704 , -85.16467]
  },
  {
    name: "Benicia",
    state: "California",
    country: "US",
    location: [38.04937 , -122.15858]
  },
  {
    name: "Eureka",
    state: "California",
    country: "US",
    location: [40.80207 , -124.16367]
  },
  {
    name: "Fairfield",
    state: "California",
    country: "US",
    location: [38.24936 , -122.03997]
  },
  {
    name: "Napa",
    state: "California",
    country: "US",
    location: [38.29714 , -122.28553]
  },
  {
    name: "Petaluma",
    state: "California",
    country: "US",
    location: [38.23242 , -122.63665]
  },
  {
    name: "Rohnert Park",
    state: "California",
    country: "US",
    location: [38.33964 , -122.7011]
  },
  {
    name: "Santa Rosa",
    state: "California",
    country: "US",
    location: [38.44047 , -122.71443]
  },
  {
    name: "Suisun",
    state: "California",
    country: "US",
    location: [38.23825 , -122.04024]
  },
  {
    name: "Vacaville",
    state: "California",
    country: "US",
    location: [38.35658 , -121.98774]
  },
  {
    name: "Vallejo",
    state: "California",
    country: "US",
    location: [38.10409 , -122.25664]
  },
  {
    name: "Windsor",
    state: "California",
    country: "US",
    location: [38.54713 , -122.81638]
  },
  {
    name: "Bellwood",
    state: "Illinois",
    country: "US",
    location: [41.88142 , -87.88312]
  },
  {
    name: "Berwyn",
    state: "Illinois",
    country: "US",
    location: [41.85059 , -87.79367]
  },
  {
    name: "Blue Island",
    state: "Illinois",
    country: "US",
    location: [41.65726 , -87.68005]
  },
  {
    name: "Burbank",
    state: "Illinois",
    country: "US",
    location: [41.73392 , -87.7795]
  },
  {
    name: "Calumet City",
    state: "Illinois",
    country: "US",
    location: [41.61559 , -87.52949]
  },
  {
    name: "Chicago Heights",
    state: "Illinois",
    country: "US",
    location: [41.50615 , -87.6356]
  },
  {
    name: "Cicero",
    state: "Illinois",
    country: "US",
    location: [41.84559 , -87.75394]
  },
  {
    name: "Dolton",
    state: "Illinois",
    country: "US",
    location: [41.63892 , -87.60727]
  },
  {
    name: "Elmwood Park",
    state: "Illinois",
    country: "US",
    location: [41.92114 , -87.80923]
  },
  {
    name: "Evergreen Park",
    state: "Illinois",
    country: "US",
    location: [41.72059 , -87.70172]
  },
  {
    name: "Harvey",
    state: "Illinois",
    country: "US",
    location: [41.61003 , -87.64671]
  },
  {
    name: "Lansing",
    state: "Illinois",
    country: "US",
    location: [41.56476 , -87.53893]
  },
  {
    name: "Maywood",
    state: "Illinois",
    country: "US",
    location: [41.8792 , -87.84312]
  },
  {
    name: "Melrose Park",
    state: "Illinois",
    country: "US",
    location: [41.90059 , -87.85673]
  },
  {
    name: "Oak Forest",
    state: "Illinois",
    country: "US",
    location: [41.60281 , -87.74394]
  },
  {
    name: "Oak Lawn",
    state: "Illinois",
    country: "US",
    location: [41.71087 , -87.75811]
  },
  {
    name: "Oak Park",
    state: "Illinois",
    country: "US",
    location: [41.88503 , -87.7845]
  },
  {
    name: "Orland Park",
    state: "Illinois",
    country: "US",
    location: [41.63031 , -87.85394]
  },
  {
    name: "Park Forest",
    state: "Illinois",
    country: "US",
    location: [41.49142 , -87.67449]
  },
  {
    name: "South Holland",
    state: "Illinois",
    country: "US",
    location: [41.60087 , -87.60699]
  },
  {
    name: "Tinley Park",
    state: "Illinois",
    country: "US",
    location: [41.57337 , -87.78449]
  },
  {
    name: "Council Bluffs",
    state: "Iowa",
    country: "US",
    location: [41.26194 , -95.86083]
  },
  {
    name: "Sioux City",
    state: "Iowa",
    country: "US",
    location: [42.49999 , -96.40031]
  },
  {
    name: "Alvin",
    state: "Texas",
    country: "US",
    location: [29.42385 , -95.2441]
  },
  {
    name: "Baytown",
    state: "Texas",
    country: "US",
    location: [29.7355 , -94.97743]
  },
  {
    name: "Channelview",
    state: "Texas",
    country: "US",
    location: [29.77606 , -95.11465]
  },
  {
    name: "Cloverleaf",
    state: "Texas",
    country: "US",
    location: [29.77828 , -95.17188]
  },
  {
    name: "Deer Park",
    state: "Texas",
    country: "US",
    location: [29.70523 , -95.12382]
  },
  {
    name: "Friendswood",
    state: "Texas",
    country: "US",
    location: [29.5294 , -95.20104]
  },
  {
    name: "South Houston",
    state: "Texas",
    country: "US",
    location: [29.66301 , -95.23549]
  },
  {
    name: "La Porte",
    state: "Texas",
    country: "US",
    location: [29.66578 , -95.01937]
  },
  {
    name: "League City",
    state: "Texas",
    country: "US",
    location: [29.50745 , -95.09493]
  },
  {
    name: "Mission Bend",
    state: "Texas",
    country: "US",
    location: [29.69384 , -95.66495]
  },
  {
    name: "Missouri City",
    state: "Texas",
    country: "US",
    location: [29.61857 , -95.53772]
  },
  {
    name: "Pasadena",
    state: "Texas",
    country: "US",
    location: [29.69106 , -95.2091]
  },
  {
    name: "Pearland",
    state: "Texas",
    country: "US",
    location: [29.56357 , -95.28605]
  },
  {
    name: "Rosenberg",
    state: "Texas",
    country: "US",
    location: [29.55718 , -95.80856]
  },
  {
    name: "Spring",
    state: "Texas",
    country: "US",
    location: [30.07994 , -95.41716]
  },
  {
    name: "Sugar Land",
    state: "Texas",
    country: "US",
    location: [29.61968 , -95.63495]
  },
  {
    name: "The Woodlands",
    state: "Texas",
    country: "US",
    location: [30.15799 , -95.48938]
  },
  {
    name: "Anaheim",
    state: "California",
    country: "US",
    location: [33.83529 , -117.9145]
  },
  {
    name: "Brea",
    state: "California",
    country: "US",
    location: [33.91668 , -117.90006]
  },
  {
    name: "Buena Park",
    state: "California",
    country: "US",
    location: [33.86751 , -117.99812]
  },
  {
    name: "Cypress",
    state: "California",
    country: "US",
    location: [33.81696 , -118.03729]
  },
  {
    name: "Fountain Valley",
    state: "California",
    country: "US",
    location: [33.70918 , -117.95367]
  },
  {
    name: "Fullerton",
    state: "California",
    country: "US",
    location: [33.87029 , -117.92534]
  },
  {
    name: "Garden Grove",
    state: "California",
    country: "US",
    location: [33.77391 , -117.94145]
  },
  {
    name: "Huntington Beach",
    state: "California",
    country: "US",
    location: [33.6603 , -117.99923]
  },
  {
    name: "Orange",
    state: "California",
    country: "US",
    location: [33.78779 , -117.85311]
  },
  {
    name: "Placentia",
    state: "California",
    country: "US",
    location: [33.87224 , -117.87034]
  },
  {
    name: "Santa Ana",
    state: "California",
    country: "US",
    location: [33.74557 , -117.86783]
  },
  {
    name: "Stanton",
    state: "California",
    country: "US",
    location: [33.80252 , -117.99312]
  },
  {
    name: "North Tustin",
    state: "California",
    country: "US",
    location: [33.76446 , -117.79394]
  },
  {
    name: "Westminster",
    state: "California",
    country: "US",
    location: [33.75918 , -118.00673]
  },
  {
    name: "Yorba Linda",
    state: "California",
    country: "US",
    location: [33.88863 , -117.81311]
  },
  {
    name: "Eau Claire",
    state: "Wisconsin",
    country: "US",
    location: [44.81135 , -91.49849]
  },
  {
    name: "Stevens Point",
    state: "Wisconsin",
    country: "US",
    location: [44.52358 , -89.57456]
  },
  {
    name: "Superior",
    state: "Wisconsin",
    country: "US",
    location: [46.72077 , -92.10408]
  },
  {
    name: "Wausau",
    state: "Wisconsin",
    country: "US",
    location: [44.95914 , -89.63012]
  },
  {
    name: "Buffalo",
    state: "New York",
    country: "US",
    location: [42.88645 , -78.87837]
  },
  {
    name: "Cheektowaga",
    state: "New York",
    country: "US",
    location: [42.90339 , -78.75475]
  },
  {
    name: "Jamestown",
    state: "New York",
    country: "US",
    location: [42.097 , -79.23533]
  },
  {
    name: "South Lockport",
    state: "New York",
    country: "US",
    location: [43.15006 , -78.6967]
  },
  {
    name: "Niagara Falls",
    state: "New York",
    country: "US",
    location: [43.0945 , -79.05671]
  },
  {
    name: "North Tonawanda",
    state: "New York",
    country: "US",
    location: [43.03867 , -78.8642]
  },
  {
    name: "Tonawanda",
    state: "New York",
    country: "US",
    location: [42.98499 , -78.87798]
  },
  {
    name: "West Seneca",
    state: "New York",
    country: "US",
    location: [42.85006 , -78.79975]
  },
  {
    name: "Harrisburg",
    state: "Pennsylvania",
    country: "US",
    location: [40.2737 , -76.88442]
  },
  {
    name: "Lancaster",
    state: "Pennsylvania",
    country: "US",
    location: [40.03788 , -76.30551]
  },
  {
    name: "Lebanon",
    state: "Pennsylvania",
    country: "US",
    location: [40.34093 , -76.41135]
  },
  {
    name: "York",
    state: "Pennsylvania",
    country: "US",
    location: [39.9626 , -76.72774]
  },
  {
    name: "The Bronx",
    state: "New York",
    country: "US",
    location: [40.84985 , -73.86641]
  },
  {
    name: "Brooklyn",
    state: "New York",
    country: "US",
    location: [40.6501 , -73.94958]
  },
  {
    name: "New York City",
    state: "New York",
    country: "US",
    location: [40.71427 , -74.00597]
  },
  {
    name: "Borough of Queens",
    state: "New York",
    country: "US",
    location: [40.68149 , -73.83652]
  },
  {
    name: "Staten Island",
    state: "New York",
    country: "US",
    location: [40.56233 , -74.13986]
  },
  {
    name: "Colorado Springs",
    state: "Colorado",
    country: "US",
    location: [38.83388 , -104.82136]
  },
  {
    name: "Pueblo West",
    state: "Colorado",
    country: "US",
    location: [38.35 , -104.72275]
  },
  {
    name: "Security-Widefield",
    state: "Colorado",
    country: "US",
    location: [38.74728 , -104.71439]
  },
  {
    name: "Arvada",
    state: "Colorado",
    country: "US",
    location: [39.80276 , -105.08748]
  },
  {
    name: "Aurora",
    state: "Colorado",
    country: "US",
    location: [39.72943 , -104.83192]
  },
  {
    name: "Boulder",
    state: "Colorado",
    country: "US",
    location: [40.01499 , -105.27055]
  },
  {
    name: "Brighton",
    state: "Colorado",
    country: "US",
    location: [39.98526 , -104.82053]
  },
  {
    name: "Broomfield",
    state: "Colorado",
    country: "US",
    location: [39.92054 , -105.08665]
  },
  {
    name: "Castle Rock",
    state: "Colorado",
    country: "US",
    location: [39.37221 , -104.85609]
  },
  {
    name: "Castlewood",
    state: "Colorado",
    country: "US",
    location: [39.58471 , -104.90109]
  },
  {
    name: "Columbine",
    state: "Colorado",
    country: "US",
    location: [39.58777 , -105.06943]
  },
  {
    name: "Commerce City",
    state: "Colorado",
    country: "US",
    location: [39.80832 , -104.93387]
  },
  {
    name: "Denver",
    state: "Colorado",
    country: "US",
    location: [39.73915 , -104.9847]
  },
  {
    name: "Englewood",
    state: "Colorado",
    country: "US",
    location: [39.64777 , -104.98776]
  },
  {
    name: "Highlands Ranch",
    state: "Colorado",
    country: "US",
    location: [39.55388 , -104.96943]
  },
  {
    name: "Ken Caryl",
    state: "Colorado",
    country: "US",
    location: [39.57582 , -105.11221]
  },
  {
    name: "Lafayette",
    state: "Colorado",
    country: "US",
    location: [39.9936 , -105.08971]
  },
  {
    name: "Lakewood",
    state: "Colorado",
    country: "US",
    location: [39.70471 , -105.08137]
  },
  {
    name: "Littleton",
    state: "Colorado",
    country: "US",
    location: [39.61332 , -105.01665]
  },
  {
    name: "Longmont",
    state: "Colorado",
    country: "US",
    location: [40.16721 , -105.10193]
  },
  {
    name: "Loveland",
    state: "Colorado",
    country: "US",
    location: [40.39776 , -105.07498]
  },
  {
    name: "Northglenn",
    state: "Colorado",
    country: "US",
    location: [39.88554 , -104.9872]
  },
  {
    name: "Parker",
    state: "Colorado",
    country: "US",
    location: [39.5186 , -104.76136]
  },
  {
    name: "Southglenn",
    state: "Colorado",
    country: "US",
    location: [39.58721 , -104.95276]
  },
  {
    name: "Thornton",
    state: "Colorado",
    country: "US",
    location: [39.86804 , -104.97192]
  },
  {
    name: "Westminster",
    state: "Colorado",
    country: "US",
    location: [39.83665 , -105.0372]
  },
  {
    name: "Wheat Ridge",
    state: "Colorado",
    country: "US",
    location: [39.7661 , -105.07721]
  },
  {
    name: "Monroeville",
    state: "Pennsylvania",
    country: "US",
    location: [40.42118 , -79.7881]
  },
  {
    name: "New Castle",
    state: "Pennsylvania",
    country: "US",
    location: [41.00367 , -80.34701]
  },
  {
    name: "Plum",
    state: "Pennsylvania",
    country: "US",
    location: [40.50035 , -79.74949]
  },
  {
    name: "Upper Saint Clair",
    state: "Pennsylvania",
    country: "US",
    location: [40.3359 , -80.08339]
  },
  {
    name: "Henderson",
    state: "Nevada",
    country: "US",
    location: [36.0397 , -114.98194]
  },
  {
    name: "North Las Vegas",
    state: "Nevada",
    country: "US",
    location: [36.19886 , -115.1175]
  },
  {
    name: "North Las Vegas",
    state: "Nevada",
    country: "US",
    location: [36.19886 , -115.1175]
  },
  {
    name: "Paradise",
    state: "Nevada",
    country: "US",
    location: [36.09719 , -115.14666]
  },
  {
    name: "Spring Valley",
    state: "Nevada",
    country: "US",
    location: [36.10803 , -115.245]
  },
  {
    name: "Sunrise Manor",
    state: "Nevada",
    country: "US",
    location: [36.21108 , -115.07306]
  },
  {
    name: "Winchester",
    state: "Nevada",
    country: "US",
    location: [36.12997 , -115.11889]
  },
  {
    name: "Bayonet Point",
    state: "Florida",
    country: "US",
    location: [28.32667 , -82.68343]
  },
  {
    name: "Clearwater",
    state: "Florida",
    country: "US",
    location: [27.96585 , -82.8001]
  },
  {
    name: "Dunedin",
    state: "Florida",
    country: "US",
    location: [28.0199 , -82.77323]
  },
  {
    name: "Holiday",
    state: "Florida",
    country: "US",
    location: [28.18779 , -82.73955]
  },
  {
    name: "Largo",
    state: "Florida",
    country: "US",
    location: [27.90979 , -82.78842]
  },
  {
    name: "Lealman",
    state: "Florida",
    country: "US",
    location: [27.82114 , -82.67927]
  },
  {
    name: "Palm Harbor",
    state: "Florida",
    country: "US",
    location: [28.07807 , -82.76371]
  },
  {
    name: "Pinellas Park",
    state: "Florida",
    country: "US",
    location: [27.8428 , -82.69954]
  },
  {
    name: "Saint Petersburg",
    state: "Florida",
    country: "US",
    location: [27.77086 , -82.67927]
  },
  {
    name: "Tarpon Springs",
    state: "Florida",
    country: "US",
    location: [28.14612 , -82.75677]
  },
  {
    name: "Jackson",
    state: "Tennessee",
    country: "US",
    location: [35.61452 , -88.81395]
  },
  {
    name: "Carteret",
    state: "New Jersey",
    country: "US",
    location: [40.57733 , -74.2282]
  },
  {
    name: "East Brunswick",
    state: "New Jersey",
    country: "US",
    location: [40.42788 , -74.41598]
  },
  {
    name: "Edison",
    state: "New Jersey",
    country: "US",
    location: [40.51872 , -74.4121]
  },
  {
    name: "Lakewood",
    state: "New Jersey",
    country: "US",
    location: [40.09789 , -74.21764]
  },
  {
    name: "West Long Branch",
    state: "New Jersey",
    country: "US",
    location: [40.29039 , -74.01764]
  },
  {
    name: "New Brunswick",
    state: "New Jersey",
    country: "US",
    location: [40.48622 , -74.45182]
  },
  {
    name: "East Brunswick",
    state: "New Jersey",
    country: "US",
    location: [40.42788 , -74.41598]
  },
  {
    name: "North Plainfield",
    state: "New Jersey",
    country: "US",
    location: [40.6301 , -74.42737]
  },
  {
    name: "South Old Bridge",
    state: "New Jersey",
    country: "US",
    location: [40.40816 , -74.35432]
  },
  {
    name: "Perth Amboy",
    state: "New Jersey",
    country: "US",
    location: [40.50677 , -74.26542]
  },
  {
    name: "Rahway",
    state: "New Jersey",
    country: "US",
    location: [40.60816 , -74.27765]
  },
  {
    name: "Sayreville",
    state: "New Jersey",
    country: "US",
    location: [40.45927 , -74.36098]
  },
  {
    name: "Somerset",
    state: "New Jersey",
    country: "US",
    location: [40.4976 , -74.48849]
  },
  {
    name: "Toms River",
    state: "New Jersey",
    country: "US",
    location: [39.95373 , -74.19792]
  },
  {
    name: "Ann Arbor",
    state: "Michigan",
    country: "US",
    location: [42.27756 , -83.74088]
  },
  {
    name: "Canton",
    state: "Michigan",
    country: "US",
    location: [42.30865 , -83.48216]
  },
  {
    name: "Garden City",
    state: "Michigan",
    country: "US",
    location: [42.32559 , -83.33104]
  },
  {
    name: "Livonia",
    state: "Michigan",
    country: "US",
    location: [42.36837 , -83.35271]
  },
  {
    name: "South Monroe",
    state: "Michigan",
    country: "US",
    location: [41.89588 , -83.41771]
  },
  {
    name: "Plymouth",
    state: "Michigan",
    country: "US",
    location: [42.37143 , -83.47021]
  },
  {
    name: "Romulus",
    state: "Michigan",
    country: "US",
    location: [42.22226 , -83.3966]
  },
  {
    name: "Southgate",
    state: "Michigan",
    country: "US",
    location: [42.21393 , -83.19381]
  },
  {
    name: "Westland",
    state: "Michigan",
    country: "US",
    location: [42.3242 , -83.40021]
  },
  {
    name: "Wyandotte",
    state: "Michigan",
    country: "US",
    location: [42.21421 , -83.14992]
  },
  {
    name: "Ypsilanti",
    state: "Michigan",
    country: "US",
    location: [42.24115 , -83.61299]
  },
  {
    name: "Austin",
    state: "Texas",
    country: "US",
    location: [30.26715 , -97.74306]
  },
  {
    name: "Cedar Park",
    state: "Texas",
    country: "US",
    location: [30.5052 , -97.82029]
  },
  {
    name: "Georgetown",
    state: "Texas",
    country: "US",
    location: [30.63269 , -97.67723]
  },
  {
    name: "Round Rock",
    state: "Texas",
    country: "US",
    location: [30.50826 , -97.6789]
  },
  {
    name: "San Marcos",
    state: "Texas",
    country: "US",
    location: [29.88327 , -97.94139]
  },
  {
    name: "Athens",
    state: "Ohio",
    country: "US",
    location: [39.32924 , -82.10126]
  },
  {
    name: "Chillicothe",
    state: "Ohio",
    country: "US",
    location: [39.33312 , -82.9824]
  },
  {
    name: "Delaware",
    state: "Ohio",
    country: "US",
    location: [40.29867 , -83.06797]
  },
  {
    name: "Lancaster",
    state: "Ohio",
    country: "US",
    location: [39.71368 , -82.59933]
  },
  {
    name: "Marion",
    state: "Ohio",
    country: "US",
    location: [40.58867 , -83.12852]
  },
  {
    name: "Newark",
    state: "Ohio",
    country: "US",
    location: [40.05812 , -82.40126]
  },
  {
    name: "Portsmouth",
    state: "Ohio",
    country: "US",
    location: [38.73174 , -82.99767]
  },
  {
    name: "Zanesville",
    state: "Ohio",
    country: "US",
    location: [39.94035 , -82.01319]
  },
  {
    name: "Asheboro",
    state: "North Carolina",
    country: "US",
    location: [35.70791 , -79.81364]
  },
  {
    name: "Burlington",
    state: "North Carolina",
    country: "US",
    location: [36.09569 , -79.4378]
  },
  {
    name: "Greensboro",
    state: "North Carolina",
    country: "US",
    location: [36.07264 , -79.79198]
  },
  {
    name: "High Point",
    state: "North Carolina",
    country: "US",
    location: [35.95569 , -80.00532]
  },
  {
    name: "Winston-Salem",
    state: "North Carolina",
    country: "US",
    location: [36.09986 , -80.24422]
  },
  {
    name: "Agoura Hills",
    state: "California",
    country: "US",
    location: [34.13639 , -118.77453]
  },
  {
    name: "Burbank",
    state: "California",
    country: "US",
    location: [34.18084 , -118.30897]
  },
  {
    name: "Calabasas",
    state: "California",
    country: "US",
    location: [34.15778 , -118.63842]
  },
  {
    name: "North Glendale",
    state: "California",
    country: "US",
    location: [34.16056 , -118.26452]
  },
  {
    name: "La Cañada Flintridge",
    state: "California",
    country: "US",
    location: [34.19917 , -118.18785]
  },
  {
    name: "San Fernando",
    state: "California",
    country: "US",
    location: [34.28195 , -118.43897]
  },
  {
    name: "Coconut Creek",
    state: "Florida",
    country: "US",
    location: [26.25175 , -80.17894]
  },
  {
    name: "Cooper City",
    state: "Florida",
    country: "US",
    location: [26.05731 , -80.27172]
  },
  {
    name: "Coral Springs",
    state: "Florida",
    country: "US",
    location: [26.27119 , -80.2706]
  },
  {
    name: "Dania Beach",
    state: "Florida",
    country: "US",
    location: [26.05231 , -80.14393]
  },
  {
    name: "Davie",
    state: "Florida",
    country: "US",
    location: [26.06287 , -80.2331]
  },
  {
    name: "Deerfield Beach",
    state: "Florida",
    country: "US",
    location: [26.31841 , -80.09977]
  },
  {
    name: "Fort Lauderdale",
    state: "Florida",
    country: "US",
    location: [26.12231 , -80.14338]
  },
  {
    name: "Hallandale Beach",
    state: "Florida",
    country: "US",
    location: [25.9812 , -80.14838]
  },
  {
    name: "Hollywood",
    state: "Florida",
    country: "US",
    location: [26.0112 , -80.14949]
  },
  {
    name: "Lauderdale Lakes",
    state: "Florida",
    country: "US",
    location: [26.16647 , -80.20838]
  },
  {
    name: "Lauderhill",
    state: "Florida",
    country: "US",
    location: [26.14036 , -80.21338]
  },
  {
    name: "Margate",
    state: "Florida",
    country: "US",
    location: [26.24453 , -80.20644]
  },
  {
    name: "North Lauderdale",
    state: "Florida",
    country: "US",
    location: [26.2173 , -80.22588]
  },
  {
    name: "Pembroke Pines",
    state: "Florida",
    country: "US",
    location: [26.00315 , -80.22394]
  },
  {
    name: "Plantation",
    state: "Florida",
    country: "US",
    location: [26.13421 , -80.23184]
  },
  {
    name: "Pompano Beach",
    state: "Florida",
    country: "US",
    location: [26.23786 , -80.12477]
  },
  {
    name: "Sunrise",
    state: "Florida",
    country: "US",
    location: [26.13397 , -80.1131]
  },
  {
    name: "Tamarac",
    state: "Florida",
    country: "US",
    location: [26.21286 , -80.24977]
  },
  {
    name: "Weston",
    state: "Florida",
    country: "US",
    location: [26.10037 , -80.39977]
  },
  {
    name: "Chesapeake",
    state: "Virginia",
    country: "US",
    location: [36.81904 , -76.27494]
  },
  {
    name: "Hampton",
    state: "Virginia",
    country: "US",
    location: [37.02987 , -76.34522]
  },
  {
    name: "Newport News",
    state: "Virginia",
    country: "US",
    location: [36.97876 , -76.428]
  },
  {
    name: "Norfolk",
    state: "Virginia",
    country: "US",
    location: [36.84681 , -76.28522]
  },
  {
    name: "Portsmouth",
    state: "Virginia",
    country: "US",
    location: [36.83543 , -76.29827]
  },
  {
    name: "Suffolk",
    state: "Virginia",
    country: "US",
    location: [36.72836 , -76.58496]
  },
  {
    name: "Virginia Beach",
    state: "Virginia",
    country: "US",
    location: [36.85293 , -75.97799]
  },
  {
    name: "Apple Valley",
    state: "California",
    country: "US",
    location: [34.50083 , -117.18588]
  },
  {
    name: "Barstow",
    state: "California",
    country: "US",
    location: [34.89859 , -117.02282]
  },
  {
    name: "Brawley",
    state: "California",
    country: "US",
    location: [32.97866 , -115.53027]
  },
  {
    name: "Calexico",
    state: "California",
    country: "US",
    location: [32.67895 , -115.49888]
  },
  {
    name: "Carlsbad",
    state: "California",
    country: "US",
    location: [33.15809 , -117.35059]
  },
  {
    name: "Cathedral City",
    state: "California",
    country: "US",
    location: [33.77974 , -116.46529]
  },
  {
    name: "Coachella",
    state: "California",
    country: "US",
    location: [33.6803 , -116.17389]
  },
  {
    name: "El Centro",
    state: "California",
    country: "US",
    location: [32.792 , -115.56305]
  },
  {
    name: "Encinitas",
    state: "California",
    country: "US",
    location: [33.03699 , -117.29198]
  },
  {
    name: "Escondido",
    state: "California",
    country: "US",
    location: [33.11921 , -117.08642]
  },
  {
    name: "Fallbrook",
    state: "California",
    country: "US",
    location: [33.37642 , -117.25115]
  },
  {
    name: "Hesperia",
    state: "California",
    country: "US",
    location: [34.42639 , -117.30088]
  },
  {
    name: "Indio",
    state: "California",
    country: "US",
    location: [33.7207 , -116.21677]
  },
  {
    name: "La Quinta",
    state: "California",
    country: "US",
    location: [33.66336 , -116.31001]
  },
  {
    name: "Oceanside",
    state: "California",
    country: "US",
    location: [33.19587 , -117.37948]
  },
  {
    name: "Palm Desert",
    state: "California",
    country: "US",
    location: [33.72255 , -116.37697]
  },
  {
    name: "Palm Springs",
    state: "California",
    country: "US",
    location: [33.8303 , -116.54529]
  },
  {
    name: "Ridgecrest",
    state: "California",
    country: "US",
    location: [35.62246 , -117.6709]
  },
  {
    name: "San Marcos",
    state: "California",
    country: "US",
    location: [33.14337 , -117.16614]
  },
  {
    name: "Victorville",
    state: "California",
    country: "US",
    location: [34.53611 , -117.29116]
  },
  {
    name: "Vista",
    state: "California",
    country: "US",
    location: [33.20004 , -117.24254]
  },
  {
    name: "Athens",
    state: "Georgia",
    country: "US",
    location: [33.96095 , -83.37794]
  },
  {
    name: "Augusta",
    state: "Georgia",
    country: "US",
    location: [33.47097 , -81.97484]
  },
  {
    name: "Columbus",
    state: "Georgia",
    country: "US",
    location: [32.46098 , -84.98771]
  },
  {
    name: "Dalton",
    state: "Georgia",
    country: "US",
    location: [34.7698 , -84.97022]
  },
  {
    name: "La Grange",
    state: "Georgia",
    country: "US",
    location: [33.03929 , -85.03133]
  },
  {
    name: "Martinez",
    state: "Georgia",
    country: "US",
    location: [33.51736 , -82.07567]
  },
  {
    name: "Rome",
    state: "Georgia",
    country: "US",
    location: [34.25704 , -85.16467]
  },
  {
    name: "Blaine",
    state: "Minnesota",
    country: "US",
    location: [45.1608 , -93.23495]
  },
  {
    name: "Brooklyn Center",
    state: "Minnesota",
    country: "US",
    location: [45.07608 , -93.33273]
  },
  {
    name: "Brooklyn Park",
    state: "Minnesota",
    country: "US",
    location: [45.09413 , -93.35634]
  },
  {
    name: "Champlin",
    state: "Minnesota",
    country: "US",
    location: [45.18885 , -93.39745]
  },
  {
    name: "West Coon Rapids",
    state: "Minnesota",
    country: "US",
    location: [45.15969 , -93.34967]
  },
  {
    name: "Fridley",
    state: "Minnesota",
    country: "US",
    location: [45.08608 , -93.26328]
  },
  {
    name: "Maple Grove",
    state: "Minnesota",
    country: "US",
    location: [45.07246 , -93.45579]
  },
  {
    name: "New Hope",
    state: "Minnesota",
    country: "US",
    location: [45.03802 , -93.38662]
  },
  {
    name: "Plymouth",
    state: "Minnesota",
    country: "US",
    location: [45.01052 , -93.45551]
  },
  {
    name: "Anderson",
    state: "Indiana",
    country: "US",
    location: [40.10532 , -85.68025]
  },
  {
    name: "Kokomo",
    state: "Indiana",
    country: "US",
    location: [40.48643 , -86.1336]
  },
  {
    name: "West Lafayette",
    state: "Indiana",
    country: "US",
    location: [40.42587 , -86.90807]
  },
  {
    name: "Marion",
    state: "Indiana",
    country: "US",
    location: [40.55837 , -85.65914]
  },
  {
    name: "Muncie",
    state: "Indiana",
    country: "US",
    location: [40.19338 , -85.38636]
  },
  {
    name: "Richmond",
    state: "Indiana",
    country: "US",
    location: [39.82894 , -84.89024]
  },
  {
    name: "West Lafayette",
    state: "Indiana",
    country: "US",
    location: [40.42587 , -86.90807]
  },
  {
    name: "Clinton",
    state: "Mississippi",
    country: "US",
    location: [32.34153 , -90.32176]
  },
  {
    name: "West Hattiesburg",
    state: "Mississippi",
    country: "US",
    location: [31.31906 , -89.37506]
  },
  {
    name: "Jackson",
    state: "Mississippi",
    country: "US",
    location: [32.29876 , -90.18481]
  },
  {
    name: "Meridian",
    state: "Mississippi",
    country: "US",
    location: [32.36431 , -88.70366]
  },
  {
    name: "Pearl",
    state: "Mississippi",
    country: "US",
    location: [32.27459 , -90.13203]
  },
  {
    name: "Ridgeland",
    state: "Mississippi",
    country: "US",
    location: [32.42848 , -90.13231]
  },
  {
    name: "Vicksburg",
    state: "Mississippi",
    country: "US",
    location: [32.35265 , -90.87788]
  },
  {
    name: "Alpharetta",
    state: "Georgia",
    country: "US",
    location: [34.07538 , -84.29409]
  },
  {
    name: "Atlanta",
    state: "Georgia",
    country: "US",
    location: [33.749 , -84.38798]
  },
  {
    name: "College Park",
    state: "Georgia",
    country: "US",
    location: [33.65344 , -84.44937]
  },
  {
    name: "Douglasville",
    state: "Georgia",
    country: "US",
    location: [33.7515 , -84.74771]
  },
  {
    name: "Duluth",
    state: "Georgia",
    country: "US",
    location: [34.00288 , -84.14464]
  },
  {
    name: "Dunwoody",
    state: "Georgia",
    country: "US",
    location: [33.94621 , -84.33465]
  },
  {
    name: "Forest Park",
    state: "Georgia",
    country: "US",
    location: [33.62205 , -84.36909]
  },
  {
    name: "Gainesville",
    state: "Georgia",
    country: "US",
    location: [34.29788 , -83.82407]
  },
  {
    name: "Griffin",
    state: "Georgia",
    country: "US",
    location: [33.24678 , -84.26409]
  },
  {
    name: "Kennesaw",
    state: "Georgia",
    country: "US",
    location: [34.02343 , -84.61549]
  },
  {
    name: "Lawrenceville",
    state: "Georgia",
    country: "US",
    location: [33.95621 , -83.98796]
  },
  {
    name: "Mableton",
    state: "Georgia",
    country: "US",
    location: [33.81872 , -84.58243]
  },
  {
    name: "Marietta",
    state: "Georgia",
    country: "US",
    location: [33.9526 , -84.54993]
  },
  {
    name: "Atlanta",
    state: "Georgia",
    country: "US",
    location: [33.749 , -84.38798]
  },
  {
    name: "Peachtree City",
    state: "Georgia",
    country: "US",
    location: [33.39678 , -84.59576]
  },
  {
    name: "Redan",
    state: "Georgia",
    country: "US",
    location: [33.74538 , -84.13158]
  },
  {
    name: "Roswell",
    state: "Georgia",
    country: "US",
    location: [34.02316 , -84.36159]
  },
  {
    name: "Sandy Springs",
    state: "Georgia",
    country: "US",
    location: [33.92427 , -84.37854]
  },
  {
    name: "Smyrna",
    state: "Georgia",
    country: "US",
    location: [33.88399 , -84.51438]
  },
  {
    name: "Tucker",
    state: "Georgia",
    country: "US",
    location: [33.85455 , -84.21714]
  },
  {
    name: "Fort Pierce South",
    state: "Florida",
    country: "US",
    location: [27.40962 , -80.35483]
  },
  {
    name: "Palm City",
    state: "Florida",
    country: "US",
    location: [27.16783 , -80.26616]
  },
  {
    name: "Port Saint Lucie",
    state: "Florida",
    country: "US",
    location: [27.29393 , -80.35033]
  },
  {
    name: "Vero Beach South",
    state: "Florida",
    country: "US",
    location: [27.61638 , -80.41308]
  },
  {
    name: "West Chicago",
    state: "Illinois",
    country: "US",
    location: [41.88475 , -88.20396]
  },
  {
    name: "Attleboro",
    state: "Massachusetts",
    country: "US",
    location: [41.94454 , -71.28561]
  },
  {
    name: "Barnstable",
    state: "Massachusetts",
    country: "US",
    location: [41.70011 , -70.29947]
  },
  {
    name: "Brockton",
    state: "Massachusetts",
    country: "US",
    location: [42.08343 , -71.01838]
  },
  {
    name: "Fall River",
    state: "Massachusetts",
    country: "US",
    location: [41.70149 , -71.15505]
  },
  {
    name: "Framingham",
    state: "Massachusetts",
    country: "US",
    location: [42.27926 , -71.41617]
  },
  {
    name: "Franklin",
    state: "Massachusetts",
    country: "US",
    location: [42.08343 , -71.39673]
  },
  {
    name: "Marlborough",
    state: "Massachusetts",
    country: "US",
    location: [42.34593 , -71.55229]
  },
  {
    name: "Milford",
    state: "Massachusetts",
    country: "US",
    location: [42.13982 , -71.51617]
  },
  {
    name: "New Bedford",
    state: "Massachusetts",
    country: "US",
    location: [41.63622 , -70.93421]
  },
  {
    name: "Taunton",
    state: "Massachusetts",
    country: "US",
    location: [41.9001 , -71.08977]
  },
  {
    name: "Worcester",
    state: "Massachusetts",
    country: "US",
    location: [42.26259 , -71.80229]
  },
  {
    name: "Carson City",
    state: "Nevada",
    country: "US",
    location: [39.1638 , -119.7674]
  },
  {
    name: "Pahrump",
    state: "Nevada",
    country: "US",
    location: [36.20829 , -115.98391]
  },
  {
    name: "Reno",
    state: "Nevada",
    country: "US",
    location: [39.52963 , -119.8138]
  },
  {
    name: "Sparks",
    state: "Nevada",
    country: "US",
    location: [39.53491 , -119.75269]
  },
  {
    name: "Belvidere",
    state: "Illinois",
    country: "US",
    location: [42.26391 , -88.84427]
  },
  {
    name: "Crystal Lake",
    state: "Illinois",
    country: "US",
    location: [42.24113 , -88.3162]
  },
  {
    name: "DeKalb",
    state: "Illinois",
    country: "US",
    location: [41.92947 , -88.75036]
  },
  {
    name: "Freeport",
    state: "Illinois",
    country: "US",
    location: [42.29669 , -89.62123]
  },
  {
    name: "Joliet",
    state: "Illinois",
    country: "US",
    location: [41.52519 , -88.0834]
  },
  {
    name: "Kankakee",
    state: "Illinois",
    country: "US",
    location: [41.12003 , -87.86115]
  },
  {
    name: "Loves Park",
    state: "Illinois",
    country: "US",
    location: [42.32002 , -89.05816]
  },
  {
    name: "Machesney Park",
    state: "Illinois",
    country: "US",
    location: [42.34724 , -89.039]
  },
  {
    name: "McHenry",
    state: "Illinois",
    country: "US",
    location: [42.33335 , -88.26675]
  },
  {
    name: "Rockford",
    state: "Illinois",
    country: "US",
    location: [42.27113 , -89.094]
  },
  {
    name: "Romeoville",
    state: "Illinois",
    country: "US",
    location: [41.64753 , -88.08951]
  },
  {
    name: "Woodstock",
    state: "Illinois",
    country: "US",
    location: [42.31474 , -88.4487]
  },
  {
    name: "Arlington",
    state: "Massachusetts",
    country: "US",
    location: [42.41537 , -71.15644]
  },
  {
    name: "Braintree",
    state: "Massachusetts",
    country: "US",
    location: [42.22232 , -70.99949]
  },
  {
    name: "Burlington",
    state: "Massachusetts",
    country: "US",
    location: [42.50482 , -71.19561]
  },
  {
    name: "Dedham",
    state: "Massachusetts",
    country: "US",
    location: [42.24177 , -71.16616]
  },
  {
    name: "Lexington",
    state: "Massachusetts",
    country: "US",
    location: [42.44732 , -71.2245]
  },
  {
    name: "Lynn",
    state: "Massachusetts",
    country: "US",
    location: [42.46676 , -70.94949]
  },
  {
    name: "Malden",
    state: "Massachusetts",
    country: "US",
    location: [42.4251 , -71.06616]
  },
  {
    name: "Marblehead",
    state: "Massachusetts",
    country: "US",
    location: [42.5001 , -70.85783]
  },
  {
    name: "Medford",
    state: "Massachusetts",
    country: "US",
    location: [42.41843 , -71.10616]
  },
  {
    name: "Melrose",
    state: "Massachusetts",
    country: "US",
    location: [42.45843 , -71.06616]
  },
  {
    name: "Needham",
    state: "Massachusetts",
    country: "US",
    location: [42.28343 , -71.23283]
  },
  {
    name: "Norwood",
    state: "Massachusetts",
    country: "US",
    location: [42.19454 , -71.1995]
  },
  {
    name: "Randolph",
    state: "Massachusetts",
    country: "US",
    location: [42.1626 , -71.04116]
  },
  {
    name: "Reading",
    state: "Massachusetts",
    country: "US",
    location: [42.52565 , -71.09533]
  },
  {
    name: "Revere",
    state: "Massachusetts",
    country: "US",
    location: [42.40843 , -71.01199]
  },
  {
    name: "Saugus",
    state: "Massachusetts",
    country: "US",
    location: [42.46482 , -71.01005]
  },
  {
    name: "Stoneham",
    state: "Massachusetts",
    country: "US",
    location: [42.4801 , -71.0995]
  },
  {
    name: "Wakefield",
    state: "Massachusetts",
    country: "US",
    location: [42.50648 , -71.07283]
  },
  {
    name: "Waltham",
    state: "Massachusetts",
    country: "US",
    location: [42.37649 , -71.23561]
  },
  {
    name: "Wellesley",
    state: "Massachusetts",
    country: "US",
    location: [42.29649 , -71.29256]
  },
  {
    name: "Weymouth",
    state: "Massachusetts",
    country: "US",
    location: [42.22093 , -70.93977]
  },
  {
    name: "Winchester",
    state: "Massachusetts",
    country: "US",
    location: [42.45232 , -71.137]
  },
  {
    name: "Woburn",
    state: "Massachusetts",
    country: "US",
    location: [42.47926 , -71.15228]
  },
  {
    name: "Hays",
    state: "Kansas",
    country: "US",
    location: [38.87918 , -99.32677]
  },
  {
    name: "Lawrence",
    state: "Kansas",
    country: "US",
    location: [38.97167 , -95.23525]
  },
  {
    name: "Manhattan",
    state: "Kansas",
    country: "US",
    location: [39.18361 , -96.57167]
  },
  {
    name: "Salina",
    state: "Kansas",
    country: "US",
    location: [38.84028 , -97.61142]
  },
  {
    name: "Topeka",
    state: "Kansas",
    country: "US",
    location: [39.04833 , -95.67804]
  },
  {
    name: "Aventura",
    state: "Florida",
    country: "US",
    location: [25.95648 , -80.13921]
  },
  {
    name: "Carol City",
    state: "Florida",
    country: "US",
    location: [25.94065 , -80.2456]
  },
  {
    name: "Coral Gables",
    state: "Florida",
    country: "US",
    location: [25.72149 , -80.26838]
  },
  {
    name: "Coral Terrace",
    state: "Florida",
    country: "US",
    location: [25.74593 , -80.3045]
  },
  {
    name: "Country Club",
    state: "Florida",
    country: "US",
    location: [25.94815 , -80.317]
  },
  {
    name: "Cutler Ridge",
    state: "Florida",
    country: "US",
    location: [25.58066 , -80.34672]
  },
  {
    name: "Doral",
    state: "Florida",
    country: "US",
    location: [25.81954 , -80.35533]
  },
  {
    name: "Golden Glades",
    state: "Florida",
    country: "US",
    location: [25.91176 , -80.20033]
  },
  {
    name: "Hialeah",
    state: "Florida",
    country: "US",
    location: [25.8576 , -80.27811]
  },
  {
    name: "Homestead",
    state: "Florida",
    country: "US",
    location: [25.46872 , -80.47756]
  },
  {
    name: "Kendale Lakes",
    state: "Florida",
    country: "US",
    location: [25.70816 , -80.407]
  },
  {
    name: "Kendall West",
    state: "Florida",
    country: "US",
    location: [25.7065 , -80.4388]
  },
  {
    name: "Key West",
    state: "Florida",
    country: "US",
    location: [24.55524 , -81.78163]
  },
  {
    name: "Leisure City",
    state: "Florida",
    country: "US",
    location: [25.49539 , -80.42922]
  },
  {
    name: "West Miami",
    state: "Florida",
    country: "US",
    location: [25.76343 , -80.29616]
  },
  {
    name: "North Miami Beach",
    state: "Florida",
    country: "US",
    location: [25.93315 , -80.16255]
  },
  {
    name: "Miami Lakes",
    state: "Florida",
    country: "US",
    location: [25.90871 , -80.30866]
  },
  {
    name: "Miramar",
    state: "Florida",
    country: "US",
    location: [25.98731 , -80.23227]
  },
  {
    name: "Norland",
    state: "Florida",
    country: "US",
    location: [25.94898 , -80.21227]
  },
  {
    name: "North Miami",
    state: "Florida",
    country: "US",
    location: [25.89009 , -80.18671]
  },
  {
    name: "North Miami Beach",
    state: "Florida",
    country: "US",
    location: [25.93315 , -80.16255]
  },
  {
    name: "Richmond West",
    state: "Florida",
    country: "US",
    location: [25.6105 , -80.42971]
  },
  {
    name: "Richmond Heights",
    state: "Florida",
    country: "US",
    location: [25.63149 , -80.36894]
  },
  {
    name: "South Miami Heights",
    state: "Florida",
    country: "US",
    location: [25.59761 , -80.38061]
  },
  {
    name: "Tamiami",
    state: "Florida",
    country: "US",
    location: [25.75871 , -80.39839]
  },
  {
    name: "West Little River",
    state: "Florida",
    country: "US",
    location: [25.85704 , -80.23699]
  },
  {
    name: "Westchester",
    state: "Florida",
    country: "US",
    location: [25.75482 , -80.32727]
  },
  {
    name: "American Fork",
    state: "Utah",
    country: "US",
    location: [40.3769 , -111.79576]
  },
  {
    name: "West Bountiful",
    state: "Utah",
    country: "US",
    location: [40.89383 , -111.90188]
  },
  {
    name: "Clearfield",
    state: "Utah",
    country: "US",
    location: [41.11078 , -112.02605]
  },
  {
    name: "Cottonwood Heights",
    state: "Utah",
    country: "US",
    location: [40.61967 , -111.81021]
  },
  {
    name: "Draper",
    state: "Utah",
    country: "US",
    location: [40.52467 , -111.86382]
  },
  {
    name: "East Millcreek",
    state: "Utah",
    country: "US",
    location: [40.69995 , -111.81049]
  },
  {
    name: "Kaysville",
    state: "Utah",
    country: "US",
    location: [41.03522 , -111.93855]
  },
  {
    name: "Kearns",
    state: "Utah",
    country: "US",
    location: [40.65995 , -111.99633]
  },
  {
    name: "Layton",
    state: "Utah",
    country: "US",
    location: [41.06022 , -111.97105]
  },
  {
    name: "Magna",
    state: "Utah",
    country: "US",
    location: [40.70911 , -112.10161]
  },
  {
    name: "Midvale",
    state: "Utah",
    country: "US",
    location: [40.61106 , -111.89994]
  },
  {
    name: "Millcreek",
    state: "Utah",
    country: "US",
    location: [40.68689 , -111.87549]
  },
  {
    name: "Murray",
    state: "Utah",
    country: "US",
    location: [40.66689 , -111.88799]
  },
  {
    name: "South Ogden",
    state: "Utah",
    country: "US",
    location: [41.19189 , -111.97133]
  },
  {
    name: "Orem",
    state: "Utah",
    country: "US",
    location: [40.2969 , -111.69465]
  },
  {
    name: "Pleasant Grove",
    state: "Utah",
    country: "US",
    location: [40.36412 , -111.73854]
  },
  {
    name: "Provo",
    state: "Utah",
    country: "US",
    location: [40.23384 , -111.65853]
  },
  {
    name: "Riverton",
    state: "Utah",
    country: "US",
    location: [40.52189 , -111.9391]
  },
  {
    name: "Roy",
    state: "Utah",
    country: "US",
    location: [41.16161 , -112.02633]
  },
  {
    name: "Salt Lake City",
    state: "Utah",
    country: "US",
    location: [40.76078 , -111.89105]
  },
  {
    name: "Sandy City",
    state: "Utah",
    country: "US",
    location: [40.59161 , -111.8841]
  },
  {
    name: "South Jordan",
    state: "Utah",
    country: "US",
    location: [40.56217 , -111.92966]
  },
  {
    name: "South Salt Lake",
    state: "Utah",
    country: "US",
    location: [40.71884 , -111.88827]
  },
  {
    name: "Spanish Fork",
    state: "Utah",
    country: "US",
    location: [40.11496 , -111.65492]
  },
  {
    name: "Springville",
    state: "Utah",
    country: "US",
    location: [40.16523 , -111.61075]
  },
  {
    name: "Taylorsville",
    state: "Utah",
    country: "US",
    location: [40.66772 , -111.93883]
  },
  {
    name: "West Jordan",
    state: "Utah",
    country: "US",
    location: [40.60967 , -111.9391]
  },
  {
    name: "West Valley City",
    state: "Utah",
    country: "US",
    location: [40.69161 , -112.00105]
  },
  {
    name: "South Burlington",
    state: "Vermont",
    country: "US",
    location: [44.46699 , -73.17096]
  },
  {
    name: "Montpelier",
    state: "Vermont",
    country: "US",
    location: [44.26006 , -72.57539]
  },
  {
    name: "Aiken",
    state: "South Carolina",
    country: "US",
    location: [33.56042 , -81.71955]
  },
  {
    name: "West Columbia",
    state: "South Carolina",
    country: "US",
    location: [33.99349 , -81.07398]
  },
  {
    name: "Rock Hill",
    state: "South Carolina",
    country: "US",
    location: [34.92487 , -81.02508]
  },
  {
    name: "Saint Andrews",
    state: "South Carolina",
    country: "US",
    location: [34.04543 , -81.12926]
  },
  {
    name: "Sumter",
    state: "South Carolina",
    country: "US",
    location: [33.92044 , -80.34147]
  },
  {
    name: "Hopewell",
    state: "Virginia",
    country: "US",
    location: [37.30432 , -77.2872]
  },
  {
    name: "Mechanicsville",
    state: "Virginia",
    country: "US",
    location: [37.60876 , -77.37331]
  },
  {
    name: "Petersburg",
    state: "Virginia",
    country: "US",
    location: [37.22793 , -77.40193]
  },
  {
    name: "Richmond",
    state: "Virginia",
    country: "US",
    location: [37.55376 , -77.46026]
  },
  {
    name: "Tuckahoe",
    state: "Virginia",
    country: "US",
    location: [37.59015 , -77.55638]
  },
  {
    name: "Atascadero",
    state: "California",
    country: "US",
    location: [35.48942 , -120.67073]
  },
  {
    name: "Camarillo",
    state: "California",
    country: "US",
    location: [34.21639 , -119.0376]
  },
  {
    name: "Paso Robles",
    state: "California",
    country: "US",
    location: [35.62664 , -120.691]
  },
  {
    name: "Goleta",
    state: "California",
    country: "US",
    location: [34.43583 , -119.82764]
  },
  {
    name: "Lompoc",
    state: "California",
    country: "US",
    location: [34.63915 , -120.45794]
  },
  {
    name: "Moorpark",
    state: "California",
    country: "US",
    location: [34.28556 , -118.88204]
  },
  {
    name: "Orcutt",
    state: "California",
    country: "US",
    location: [34.86526 , -120.436]
  },
  {
    name: "Oxnard",
    state: "California",
    country: "US",
    location: [34.1975 , -119.17705]
  },
  {
    name: "Port Hueneme",
    state: "California",
    country: "US",
    location: [34.14778 , -119.19511]
  },
  {
    name: "Ventura",
    state: "California",
    country: "US",
    location: [34.27834 , -119.29317]
  },
  {
    name: "San Luis Obispo",
    state: "California",
    country: "US",
    location: [35.28275 , -120.65962]
  },
  {
    name: "Santa Barbara",
    state: "California",
    country: "US",
    location: [34.42083 , -119.69819]
  },
  {
    name: "Santa Maria",
    state: "California",
    country: "US",
    location: [34.95303 , -120.43572]
  },
  {
    name: "Santa Paula",
    state: "California",
    country: "US",
    location: [34.35417 , -119.05927]
  },
  {
    name: "Simi Valley",
    state: "California",
    country: "US",
    location: [34.26945 , -118.78148]
  },
  {
    name: "Thousand Oaks",
    state: "California",
    country: "US",
    location: [34.17056 , -118.83759]
  },
  {
    name: "Amarillo",
    state: "Texas",
    country: "US",
    location: [35.222 , -101.8313]
  },
  {
    name: "Lubbock",
    state: "Texas",
    country: "US",
    location: [33.57786 , -101.85517]
  },
  {
    name: "Plainview",
    state: "Texas",
    country: "US",
    location: [34.18479 , -101.70684]
  },
  {
    name: "Hilo",
    state: "Hawaii",
    country: "US",
    location: [19.72991 , -155.09073]
  },
  {
    name: "Honolulu",
    state: "Hawaii",
    country: "US",
    location: [21.30694 , -157.85833]
  },
  {
    name: "Kahului",
    state: "Hawaii",
    country: "US",
    location: [20.88953 , -156.47432]
  },
  {
    name: "Kailua-Kona",
    state: "Hawaii",
    country: "US",
    location: [19.63927 , -155.99024]
  },
  {
    name: "Kāne‘ohe",
    state: "Hawaii",
    country: "US",
    location: [21.39994 , -157.79895]
  },
  {
    name: "Mililani Town",
    state: "Hawaii",
    country: "US",
    location: [21.45 , -158.00111]
  },
  {
    name: "Pearl City",
    state: "Hawaii",
    country: "US",
    location: [21.39734 , -157.97516]
  },
  {
    name: "Waimalu",
    state: "Hawaii",
    country: "US",
    location: [21.40472 , -157.94333]
  },
  {
    name: "Waipahu",
    state: "Hawaii",
    country: "US",
    location: [21.38667 , -158.00917]
  },
  {
    name: "Burton",
    state: "Michigan",
    country: "US",
    location: [42.99947 , -83.61634]
  },
  {
    name: "Flint",
    state: "Michigan",
    country: "US",
    location: [43.01253 , -83.68746]
  },
  {
    name: "Port Huron",
    state: "Michigan",
    country: "US",
    location: [42.97086 , -82.42491]
  },
  {
    name: "Bloomington",
    state: "Indiana",
    country: "US",
    location: [39.16533 , -86.52639]
  },
  {
    name: "Clarksville",
    state: "Indiana",
    country: "US",
    location: [38.29674 , -85.75996]
  },
  {
    name: "Columbus",
    state: "Indiana",
    country: "US",
    location: [39.20144 , -85.92138]
  },
  {
    name: "Evansville",
    state: "Indiana",
    country: "US",
    location: [37.97476 , -87.55585]
  },
  {
    name: "Jeffersonville",
    state: "Indiana",
    country: "US",
    location: [38.27757 , -85.73718]
  },
  {
    name: "New Albany",
    state: "Indiana",
    country: "US",
    location: [38.28562 , -85.82413]
  },
  {
    name: "Terre Haute",
    state: "Indiana",
    country: "US",
    location: [39.4667 , -87.41391]
  },
  {
    name: "Brandon",
    state: "Florida",
    country: "US",
    location: [27.9378 , -82.28592]
  },
  {
    name: "Citrus Park",
    state: "Florida",
    country: "US",
    location: [28.07835 , -82.56982]
  },
  {
    name: "Greater Northdale",
    state: "Florida",
    country: "US",
    location: [28.10545 , -82.52594]
  },
  {
    name: "Lake Magdalene",
    state: "Florida",
    country: "US",
    location: [28.07418 , -82.47176]
  },
  {
    name: "Land O'' Lakes",
    state: "Florida",
    country: "US",
    location: [28.2189 , -82.45759]
  },
  {
    name: "Plant City",
    state: "Florida",
    country: "US",
    location: [28.01888 , -82.11469]
  },
  {
    name: "Tampa",
    state: "Florida",
    country: "US",
    location: [27.94752 , -82.45843]
  },
  {
    name: "Temple Terrace",
    state: "Florida",
    country: "US",
    location: [28.0353 , -82.38926]
  },
  {
    name: "Town ''n'' Country",
    state: "Florida",
    country: "US",
    location: [28.01057 , -82.57732]
  },
  {
    name: "Altoona",
    state: "Pennsylvania",
    country: "US",
    location: [40.51868 , -78.39474]
  },
  {
    name: "Erie",
    state: "Pennsylvania",
    country: "US",
    location: [42.12922 , -80.08506]
  },
  {
    name: "Johnstown",
    state: "Pennsylvania",
    country: "US",
    location: [40.32674 , -78.92197]
  },
  {
    name: "State College",
    state: "Pennsylvania",
    country: "US",
    location: [40.79339 , -77.86]
  },
  {
    name: "Belvidere",
    state: "Illinois",
    country: "US",
    location: [42.26391 , -88.84427]
  },
  {
    name: "Crystal Lake",
    state: "Illinois",
    country: "US",
    location: [42.24113 , -88.3162]
  },
  {
    name: "DeKalb",
    state: "Illinois",
    country: "US",
    location: [41.92947 , -88.75036]
  },
  {
    name: "Freeport",
    state: "Illinois",
    country: "US",
    location: [42.29669 , -89.62123]
  },
  {
    name: "Joliet",
    state: "Illinois",
    country: "US",
    location: [41.52519 , -88.0834]
  },
  {
    name: "Kankakee",
    state: "Illinois",
    country: "US",
    location: [41.12003 , -87.86115]
  },
  {
    name: "Loves Park",
    state: "Illinois",
    country: "US",
    location: [42.32002 , -89.05816]
  },
  {
    name: "Machesney Park",
    state: "Illinois",
    country: "US",
    location: [42.34724 , -89.039]
  },
  {
    name: "McHenry",
    state: "Illinois",
    country: "US",
    location: [42.33335 , -88.26675]
  },
  {
    name: "Rockford",
    state: "Illinois",
    country: "US",
    location: [42.27113 , -89.094]
  },
  {
    name: "Romeoville",
    state: "Illinois",
    country: "US",
    location: [41.64753 , -88.08951]
  },
  {
    name: "Woodstock",
    state: "Illinois",
    country: "US",
    location: [42.31474 , -88.4487]
  },
  {
    name: "Belton",
    state: "Missouri",
    country: "US",
    location: [38.81195 , -94.5319]
  },
  {
    name: "Blue Springs",
    state: "Missouri",
    country: "US",
    location: [39.01695 , -94.28161]
  },
  {
    name: "Gladstone",
    state: "Missouri",
    country: "US",
    location: [39.20389 , -94.55468]
  },
  {
    name: "Grandview",
    state: "Missouri",
    country: "US",
    location: [38.88584 , -94.53301]
  },
  {
    name: "Independence",
    state: "Missouri",
    country: "US",
    location: [39.09112 , -94.41551]
  },
  {
    name: "Kansas City",
    state: "Missouri",
    country: "US",
    location: [39.09973 , -94.57857]
  },
  {
    name: "Lee''s Summit",
    state: "Missouri",
    country: "US",
    location: [38.91084 , -94.38217]
  },
  {
    name: "Liberty",
    state: "Missouri",
    country: "US",
    location: [39.24611 , -94.41912]
  },
  {
    name: "Raytown",
    state: "Missouri",
    country: "US",
    location: [39.00862 , -94.46356]
  },
  {
    name: "Saint Joseph",
    state: "Missouri",
    country: "US",
    location: [39.76861 , -94.84663]
  },
  {
    name: "Arlington",
    state: "Texas",
    country: "US",
    location: [32.73569 , -97.10807]
  },
  {
    name: "Bedford",
    state: "Texas",
    country: "US",
    location: [32.84402 , -97.14307]
  },
  {
    name: "Benbrook",
    state: "Texas",
    country: "US",
    location: [32.67319 , -97.46058]
  },
  {
    name: "Burleson",
    state: "Texas",
    country: "US",
    location: [32.54208 , -97.32085]
  },
  {
    name: "Cleburne",
    state: "Texas",
    country: "US",
    location: [32.34764 , -97.38668]
  },
  {
    name: "Euless",
    state: "Texas",
    country: "US",
    location: [32.83707 , -97.08195]
  },
  {
    name: "Fort Worth",
    state: "Texas",
    country: "US",
    location: [32.72541 , -97.32085]
  },
  {
    name: "Grapevine",
    state: "Texas",
    country: "US",
    location: [32.93429 , -97.07807]
  },
  {
    name: "Haltom City",
    state: "Texas",
    country: "US",
    location: [32.79957 , -97.26918]
  },
  {
    name: "Hurst",
    state: "Texas",
    country: "US",
    location: [32.82346 , -97.17057]
  },
  {
    name: "Keller",
    state: "Texas",
    country: "US",
    location: [32.93457 , -97.25168]
  },
  {
    name: "Mansfield",
    state: "Texas",
    country: "US",
    location: [32.56319 , -97.14168]
  },
  {
    name: "North Richland Hills",
    state: "Texas",
    country: "US",
    location: [32.8343 , -97.2289]
  },
  {
    name: "Southlake",
    state: "Texas",
    country: "US",
    location: [32.94124 , -97.13418]
  },
  {
    name: "Watauga",
    state: "Texas",
    country: "US",
    location: [32.85791 , -97.25474]
  },
  {
    name: "Agoura Hills",
    state: "California",
    country: "US",
    location: [34.13639 , -118.77453]
  },
  {
    name: "Burbank",
    state: "California",
    country: "US",
    location: [34.18084 , -118.30897]
  },
  {
    name: "Calabasas",
    state: "California",
    country: "US",
    location: [34.15778 , -118.63842]
  },
  {
    name: "North Glendale",
    state: "California",
    country: "US",
    location: [34.16056 , -118.26452]
  },
  {
    name: "La Cañada Flintridge",
    state: "California",
    country: "US",
    location: [34.19917 , -118.18785]
  },
  {
    name: "San Fernando",
    state: "California",
    country: "US",
    location: [34.28195 , -118.43897]
  },
  {
    name: "Asheville",
    state: "North Carolina",
    country: "US",
    location: [35.60095 , -82.55402]
  },
  {
    name: "Hickory",
    state: "North Carolina",
    country: "US",
    location: [35.73319 , -81.3412]
  },
  {
    name: "Del Rio",
    state: "Texas",
    country: "US",
    location: [29.36273 , -100.89676]
  },
  {
    name: "Eagle Pass",
    state: "Texas",
    country: "US",
    location: [28.70914 , -100.49952]
  },
  {
    name: "Kerrville",
    state: "Texas",
    country: "US",
    location: [30.04743 , -99.14032]
  },
  {
    name: "New Braunfels",
    state: "Texas",
    country: "US",
    location: [29.703 , -98.12445]
  },
  {
    name: "Seguin",
    state: "Texas",
    country: "US",
    location: [29.56884 , -97.96473]
  },
  {
    name: "Hollister",
    state: "California",
    country: "US",
    location: [36.85245 , -121.4016]
  },
  {
    name: "Marina",
    state: "California",
    country: "US",
    location: [36.6844 , -121.80217]
  },
  {
    name: "Monterey",
    state: "California",
    country: "US",
    location: [36.60024 , -121.89468]
  },
  {
    name: "Salinas",
    state: "California",
    country: "US",
    location: [36.67774 , -121.6555]
  },
  {
    name: "Santa Cruz",
    state: "California",
    country: "US",
    location: [36.97412 , -122.0308]
  },
  {
    name: "Seaside",
    state: "California",
    country: "US",
    location: [36.61107 , -121.85162]
  },
  {
    name: "Watsonville",
    state: "California",
    country: "US",
    location: [36.91023 , -121.75689]
  },
  {
    name: "Alvin",
    state: "Texas",
    country: "US",
    location: [29.42385 , -95.2441]
  },
  {
    name: "Atascocita",
    state: "Texas",
    country: "US",
    location: [29.99883 , -95.1766]
  },
  {
    name: "Baytown",
    state: "Texas",
    country: "US",
    location: [29.7355 , -94.97743]
  },
  {
    name: "Channelview",
    state: "Texas",
    country: "US",
    location: [29.77606 , -95.11465]
  },
  {
    name: "Cloverleaf",
    state: "Texas",
    country: "US",
    location: [29.77828 , -95.17188]
  },
  {
    name: "Deer Park",
    state: "Texas",
    country: "US",
    location: [29.70523 , -95.12382]
  },
  {
    name: "Friendswood",
    state: "Texas",
    country: "US",
    location: [29.5294 , -95.20104]
  },
  {
    name: "South Houston",
    state: "Texas",
    country: "US",
    location: [29.66301 , -95.23549]
  },
  {
    name: "La Porte",
    state: "Texas",
    country: "US",
    location: [29.66578 , -95.01937]
  },
  {
    name: "League City",
    state: "Texas",
    country: "US",
    location: [29.50745 , -95.09493]
  },
  {
    name: "Mission Bend",
    state: "Texas",
    country: "US",
    location: [29.69384 , -95.66495]
  },
  {
    name: "Missouri City",
    state: "Texas",
    country: "US",
    location: [29.61857 , -95.53772]
  },
  {
    name: "Pasadena",
    state: "Texas",
    country: "US",
    location: [29.69106 , -95.2091]
  },
  {
    name: "Pearland",
    state: "Texas",
    country: "US",
    location: [29.56357 , -95.28605]
  },
  {
    name: "Rosenberg",
    state: "Texas",
    country: "US",
    location: [29.55718 , -95.80856]
  },
  {
    name: "Spring",
    state: "Texas",
    country: "US",
    location: [30.07994 , -95.41716]
  },
  {
    name: "Sugar Land",
    state: "Texas",
    country: "US",
    location: [29.61968 , -95.63495]
  },
  {
    name: "The Woodlands",
    state: "Texas",
    country: "US",
    location: [30.15799 , -95.48938]
  },
  {
    name: "North Charleston",
    state: "South Carolina",
    country: "US",
    location: [32.85462 , -79.97481]
  },
  {
    name: "Florence",
    state: "South Carolina",
    country: "US",
    location: [34.19543 , -79.76256]
  },
  {
    name: "Goose Creek",
    state: "South Carolina",
    country: "US",
    location: [32.98101 , -80.03259]
  },
  {
    name: "Hilton Head Island",
    state: "South Carolina",
    country: "US",
    location: [32.21632 , -80.75261]
  },
  {
    name: "Mount Pleasant",
    state: "South Carolina",
    country: "US",
    location: [32.79407 , -79.86259]
  },
  {
    name: "North Myrtle Beach",
    state: "South Carolina",
    country: "US",
    location: [33.81601 , -78.68002]
  },
  {
    name: "North Charleston",
    state: "South Carolina",
    country: "US",
    location: [32.85462 , -79.97481]
  },
  {
    name: "Summerville",
    state: "South Carolina",
    country: "US",
    location: [33.0185 , -80.17565]
  },
  {
    name: "Kingston",
    state: "New York",
    country: "US",
    location: [41.92704 , -73.99736]
  },
  {
    name: "Middletown",
    state: "New York",
    country: "US",
    location: [41.44593 , -74.42293]
  },
  {
    name: "New City",
    state: "New York",
    country: "US",
    location: [41.1476 , -73.98931]
  },
  {
    name: "Newburgh",
    state: "New York",
    country: "US",
    location: [41.50343 , -74.01042]
  },
  {
    name: "Poughkeepsie",
    state: "New York",
    country: "US",
    location: [41.70037 , -73.92097]
  },
  {
    name: "Spring Valley",
    state: "New York",
    country: "US",
    location: [41.11315 , -74.04375]
  },
  {
    name: "Algonquin",
    state: "Illinois",
    country: "US",
    location: [42.16558 , -88.29425]
  },
  {
    name: "Arlington Heights",
    state: "Illinois",
    country: "US",
    location: [42.08836 , -87.98063]
  },
  {
    name: "Buffalo Grove",
    state: "Illinois",
    country: "US",
    location: [42.15141 , -87.95979]
  },
  {
    name: "Carpentersville",
    state: "Illinois",
    country: "US",
    location: [42.12114 , -88.25786]
  },
  {
    name: "Des Plaines",
    state: "Illinois",
    country: "US",
    location: [42.03336 , -87.8834]
  },
  {
    name: "South Elgin",
    state: "Illinois",
    country: "US",
    location: [41.99419 , -88.2923]
  },
  {
    name: "Elk Grove Village",
    state: "Illinois",
    country: "US",
    location: [42.00392 , -87.97035]
  },
  {
    name: "Evanston",
    state: "Illinois",
    country: "US",
    location: [42.04114 , -87.69006]
  },
  {
    name: "Glenview",
    state: "Illinois",
    country: "US",
    location: [42.06975 , -87.78784]
  },
  {
    name: "Gurnee",
    state: "Illinois",
    country: "US",
    location: [42.3703 , -87.90202]
  },
  {
    name: "Highland Park",
    state: "Illinois",
    country: "US",
    location: [42.18169 , -87.80034]
  },
  {
    name: "Hoffman Estates",
    state: "Illinois",
    country: "US",
    location: [42.04281 , -88.0798]
  },
  {
    name: "Lake Forest",
    state: "Illinois",
    country: "US",
    location: [42.25863 , -87.84063]
  },
  {
    name: "Lake in the Hills",
    state: "Illinois",
    country: "US",
    location: [42.18169 , -88.33036]
  },
  {
    name: "Libertyville",
    state: "Illinois",
    country: "US",
    location: [42.28308 , -87.95313]
  },
  {
    name: "Morton Grove",
    state: "Illinois",
    country: "US",
    location: [42.04059 , -87.78256]
  },
  {
    name: "Mount Prospect",
    state: "Illinois",
    country: "US",
    location: [42.06642 , -87.93729]
  },
  {
    name: "Mundelein",
    state: "Illinois",
    country: "US",
    location: [42.26308 , -88.00397]
  },
  {
    name: "Niles",
    state: "Illinois",
    country: "US",
    location: [42.01892 , -87.80284]
  },
  {
    name: "North Chicago",
    state: "Illinois",
    country: "US",
    location: [42.32558 , -87.84118]
  },
  {
    name: "Northbrook",
    state: "Illinois",
    country: "US",
    location: [42.12753 , -87.82895]
  },
  {
    name: "Palatine",
    state: "Illinois",
    country: "US",
    location: [42.1103 , -88.03424]
  },
  {
    name: "Park Ridge",
    state: "Illinois",
    country: "US",
    location: [42.01114 , -87.84062]
  },
  {
    name: "Rolling Meadows",
    state: "Illinois",
    country: "US",
    location: [42.08419 , -88.01313]
  },
  {
    name: "Round Lake Beach",
    state: "Illinois",
    country: "US",
    location: [42.37169 , -88.09008]
  },
  {
    name: "Schaumburg",
    state: "Illinois",
    country: "US",
    location: [42.03336 , -88.08341]
  },
  {
    name: "Skokie",
    state: "Illinois",
    country: "US",
    location: [42.03336 , -87.73339]
  },
  {
    name: "Vernon Hills",
    state: "Illinois",
    country: "US",
    location: [42.21947 , -87.97952]
  },
  {
    name: "Waukegan",
    state: "Illinois",
    country: "US",
    location: [42.36363 , -87.84479]
  },
  {
    name: "Wheeling",
    state: "Illinois",
    country: "US",
    location: [42.13919 , -87.92896]
  },
  {
    name: "Wilmette",
    state: "Illinois",
    country: "US",
    location: [42.07225 , -87.72284]
  },
  {
    name: "Zion",
    state: "Illinois",
    country: "US",
    location: [42.44613 , -87.83285]
  },
  {
    name: "Carteret",
    state: "New Jersey",
    country: "US",
    location: [40.57733 , -74.2282]
  },
  {
    name: "East Brunswick",
    state: "New Jersey",
    country: "US",
    location: [40.42788 , -74.41598]
  },
  {
    name: "Edison",
    state: "New Jersey",
    country: "US",
    location: [40.51872 , -74.4121]
  },
  {
    name: "Lakewood",
    state: "New Jersey",
    country: "US",
    location: [40.09789 , -74.21764]
  },
  {
    name: "West Long Branch",
    state: "New Jersey",
    country: "US",
    location: [40.29039 , -74.01764]
  },
  {
    name: "New Brunswick",
    state: "New Jersey",
    country: "US",
    location: [40.48622 , -74.45182]
  },
  {
    name: "East Brunswick",
    state: "New Jersey",
    country: "US",
    location: [40.42788 , -74.41598]
  },
  {
    name: "North Plainfield",
    state: "New Jersey",
    country: "US",
    location: [40.6301 , -74.42737]
  },
  {
    name: "South Old Bridge",
    state: "New Jersey",
    country: "US",
    location: [40.40816 , -74.35432]
  },
  {
    name: "Perth Amboy",
    state: "New Jersey",
    country: "US",
    location: [40.50677 , -74.26542]
  },
  {
    name: "Rahway",
    state: "New Jersey",
    country: "US",
    location: [40.60816 , -74.27765]
  },
  {
    name: "Sayreville",
    state: "New Jersey",
    country: "US",
    location: [40.45927 , -74.36098]
  },
  {
    name: "Somerset",
    state: "New Jersey",
    country: "US",
    location: [40.4976 , -74.48849]
  },
  {
    name: "Toms River",
    state: "New Jersey",
    country: "US",
    location: [39.95373 , -74.19792]
  },
  {
    name: "Bellview",
    state: "Florida",
    country: "US",
    location: [30.46159 , -87.31497]
  },
  {
    name: "Brent",
    state: "Florida",
    country: "US",
    location: [30.46881 , -87.23608]
  },
  {
    name: "Ferry Pass",
    state: "Florida",
    country: "US",
    location: [30.5102 , -87.21247]
  },
  {
    name: "Fort Walton Beach",
    state: "Florida",
    country: "US",
    location: [30.42077 , -86.61939]
  },
  {
    name: "Panama City",
    state: "Florida",
    country: "US",
    location: [30.15946 , -85.65983]
  },
  {
    name: "West Pensacola",
    state: "Florida",
    country: "US",
    location: [30.42659 , -87.27969]
  },
  {
    name: "Tallahassee",
    state: "Florida",
    country: "US",
    location: [30.43826 , -84.28073]
  },
  {
    name: "West Pensacola",
    state: "Florida",
    country: "US",
    location: [30.42659 , -87.27969]
  },
  {
    name: "Wright",
    state: "Florida",
    country: "US",
    location: [30.45575 , -86.63829]
  },
  {
    name: "Bridgeton",
    state: "New Jersey",
    country: "US",
    location: [39.42734 , -75.23408]
  },
  {
    name: "Camden",
    state: "New Jersey",
    country: "US",
    location: [39.92595 , -75.11962]
  },
  {
    name: "Cherry Hill",
    state: "New Jersey",
    country: "US",
    location: [39.93484 , -75.03073]
  },
  {
    name: "Millville",
    state: "New Jersey",
    country: "US",
    location: [39.40206 , -75.03934]
  },
  {
    name: "Pennsauken",
    state: "New Jersey",
    country: "US",
    location: [39.95622 , -75.05795]
  },
  {
    name: "Vineland",
    state: "New Jersey",
    country: "US",
    location: [39.48623 , -75.02573]
  },
  {
    name: "Willingboro",
    state: "New Jersey",
    country: "US",
    location: [40.02789 , -74.86905]
  },
  {
    name: "Belmont",
    state: "Massachusetts",
    country: "US",
    location: [42.39593 , -71.17867]
  },
  {
    name: "South Boston",
    state: "Massachusetts",
    country: "US",
    location: [42.33343 , -71.04949]
  },
  {
    name: "Brookline",
    state: "Massachusetts",
    country: "US",
    location: [42.33176 , -71.12116]
  },
  {
    name: "Cambridge",
    state: "Massachusetts",
    country: "US",
    location: [42.3751 , -71.10561]
  },
  {
    name: "Chelsea",
    state: "Massachusetts",
    country: "US",
    location: [42.39176 , -71.03283]
  },
  {
    name: "Everett",
    state: "Massachusetts",
    country: "US",
    location: [42.40843 , -71.05366]
  },
  {
    name: "Milton",
    state: "Massachusetts",
    country: "US",
    location: [42.24954 , -71.06616]
  },
  {
    name: "Newton",
    state: "Massachusetts",
    country: "US",
    location: [42.33704 , -71.20922]
  },
  {
    name: "Quincy",
    state: "Massachusetts",
    country: "US",
    location: [42.25288 , -71.00227]
  },
  {
    name: "Somerville",
    state: "Massachusetts",
    country: "US",
    location: [42.3876 , -71.0995]
  },
  {
    name: "Watertown",
    state: "Massachusetts",
    country: "US",
    location: [42.37093 , -71.18283]
  },
  {
    name: "Poway",
    state: "California",
    country: "US",
    location: [32.96282 , -117.03586]
  },
  {
    name: "Covington",
    state: "Kentucky",
    country: "US",
    location: [39.08367 , -84.50855]
  },
  {
    name: "Florence",
    state: "Kentucky",
    country: "US",
    location: [38.99895 , -84.62661]
  },
  {
    name: "Lexington",
    state: "Kentucky",
    country: "US",
    location: [37.98869 , -84.47772]
  },
  {
    name: "Richmond",
    state: "Kentucky",
    country: "US",
    location: [37.74786 , -84.29465]
  },
  {
    name: "Bristol",
    state: "Connecticut",
    country: "US",
    location: [41.67176 , -72.94927]
  },
  {
    name: "Manchester",
    state: "Connecticut",
    country: "US",
    location: [41.77593 , -72.52148]
  },
  {
    name: "East Hartford",
    state: "Connecticut",
    country: "US",
    location: [41.78232 , -72.61203]
  },
  {
    name: "West Hartford",
    state: "Connecticut",
    country: "US",
    location: [41.76204 , -72.74204]
  },
  {
    name: "Middletown",
    state: "Connecticut",
    country: "US",
    location: [41.56232 , -72.65065]
  },
  {
    name: "New Britain",
    state: "Connecticut",
    country: "US",
    location: [41.66121 , -72.77954]
  },
  {
    name: "New London",
    state: "Connecticut",
    country: "US",
    location: [41.35565 , -72.09952]
  },
  {
    name: "Newington",
    state: "Connecticut",
    country: "US",
    location: [41.69788 , -72.72371]
  },
  {
    name: "Norwich",
    state: "Connecticut",
    country: "US",
    location: [41.52426 , -72.07591]
  },
  {
    name: "West Torrington",
    state: "Connecticut",
    country: "US",
    location: [41.81843 , -73.14372]
  },
  {
    name: "West Hartford",
    state: "Connecticut",
    country: "US",
    location: [41.76204 , -72.74204]
  },
  {
    name: "Wethersfield",
    state: "Connecticut",
    country: "US",
    location: [41.71427 , -72.65259]
  },
  {
    name: "Belleville",
    state: "New Jersey",
    country: "US",
    location: [40.79371 , -74.15014]
  },
  {
    name: "Bloomfield",
    state: "New Jersey",
    country: "US",
    location: [40.80677 , -74.18542]
  },
  {
    name: "Clifton",
    state: "New Jersey",
    country: "US",
    location: [40.85843 , -74.16376]
  },
  {
    name: "East Orange",
    state: "New Jersey",
    country: "US",
    location: [40.76732 , -74.20487]
  },
  {
    name: "Garfield",
    state: "New Jersey",
    country: "US",
    location: [40.88149 , -74.1132]
  },
  {
    name: "Hillside",
    state: "New Jersey",
    country: "US",
    location: [40.70121 , -74.23015]
  },
  {
    name: "Irvington",
    state: "New Jersey",
    country: "US",
    location: [40.73232 , -74.23487]
  },
  {
    name: "Kearny",
    state: "New Jersey",
    country: "US",
    location: [40.76843 , -74.14542]
  },
  {
    name: "Livingston",
    state: "New Jersey",
    country: "US",
    location: [40.79593 , -74.31487]
  },
  {
    name: "Lodi",
    state: "New Jersey",
    country: "US",
    location: [40.88232 , -74.0832]
  },
  {
    name: "Maplewood",
    state: "New Jersey",
    country: "US",
    location: [40.73121 , -74.27348]
  },
  {
    name: "Montclair",
    state: "New Jersey",
    country: "US",
    location: [40.82593 , -74.20903]
  },
  {
    name: "Morristown",
    state: "New Jersey",
    country: "US",
    location: [40.79677 , -74.48154]
  },
  {
    name: "Newark",
    state: "New Jersey",
    country: "US",
    location: [40.73566 , -74.17237]
  },
  {
    name: "Nutley",
    state: "New Jersey",
    country: "US",
    location: [40.82232 , -74.15987]
  },
  {
    name: "West Orange",
    state: "New Jersey",
    country: "US",
    location: [40.79871 , -74.23904]
  },
  {
    name: "Passaic",
    state: "New Jersey",
    country: "US",
    location: [40.85677 , -74.12848]
  },
  {
    name: "Paterson",
    state: "New Jersey",
    country: "US",
    location: [40.91677 , -74.17181]
  },
  {
    name: "Wayne",
    state: "New Jersey",
    country: "US",
    location: [40.92538 , -74.27654]
  },
  {
    name: "West Milford",
    state: "New Jersey",
    country: "US",
    location: [41.13121 , -74.36737]
  },
  {
    name: "West Orange",
    state: "New Jersey",
    country: "US",
    location: [40.79871 , -74.23904]
  },
  {
    name: "Lakeland",
    state: "Florida",
    country: "US",
    location: [28.03947 , -81.9498]
  },
  {
    name: "Winter Haven",
    state: "Florida",
    country: "US",
    location: [28.02224 , -81.73286]
  },
  {
    name: "Anderson",
    state: "South Carolina",
    country: "US",
    location: [34.50344 , -82.65013]
  },
  {
    name: "Greenville",
    state: "South Carolina",
    country: "US",
    location: [34.85262 , -82.39401]
  },
  {
    name: "Greenwood",
    state: "South Carolina",
    country: "US",
    location: [34.1954 , -82.16179]
  },
  {
    name: "Spartanburg",
    state: "South Carolina",
    country: "US",
    location: [34.94957 , -81.93205]
  },
  {
    name: "Taylors",
    state: "South Carolina",
    country: "US",
    location: [34.92039 , -82.29623]
  },
  {
    name: "Wade Hampton",
    state: "South Carolina",
    country: "US",
    location: [34.90373 , -82.33317]
  },
  {
    name: "Knoxville",
    state: "Tennessee",
    country: "US",
    location: [35.96064 , -83.92074]
  },
  {
    name: "Maryville",
    state: "Tennessee",
    country: "US",
    location: [35.75647 , -83.97046]
  },
  {
    name: "Oak Ridge",
    state: "Tennessee",
    country: "US",
    location: [36.01036 , -84.26964]
  },
  {
    name: "Oak Ridge",
    state: "Tennessee",
    country: "US",
    location: [36.01036 , -84.26964]
  },
  {
    name: "El Dorado",
    state: "Arkansas",
    country: "US",
    location: [33.20763 , -92.66627]
  },
  {
    name: "Jonesboro",
    state: "Arkansas",
    country: "US",
    location: [35.8423 , -90.70428]
  },
  {
    name: "Paragould",
    state: "Arkansas",
    country: "US",
    location: [36.0584 , -90.49733]
  },
  {
    name: "Pine Bluff",
    state: "Arkansas",
    country: "US",
    location: [34.22843 , -92.0032]
  },
  {
    name: "Texarkana",
    state: "Arkansas",
    country: "US",
    location: [33.44179 , -94.03769]
  },
  {
    name: "West Memphis",
    state: "Arkansas",
    country: "US",
    location: [35.14648 , -90.18454]
  },
  {
    name: "Bethel Park",
    state: "Pennsylvania",
    country: "US",
    location: [40.32757 , -80.0395]
  },
  {
    name: "McKeesport",
    state: "Pennsylvania",
    country: "US",
    location: [40.34785 , -79.86422]
  },
  {
    name: "Mount Lebanon",
    state: "Pennsylvania",
    country: "US",
    location: [40.35535 , -80.0495]
  },
  {
    name: "Monroeville",
    state: "Pennsylvania",
    country: "US",
    location: [40.42118 , -79.7881]
  },
  {
    name: "New Castle",
    state: "Pennsylvania",
    country: "US",
    location: [41.00367 , -80.34701]
  },
  {
    name: "Penn Hills",
    state: "Pennsylvania",
    country: "US",
    location: [40.50118 , -79.83922]
  },
  {
    name: "Pittsburgh",
    state: "Pennsylvania",
    country: "US",
    location: [40.44062 , -79.99589]
  },
  {
    name: "Plum",
    state: "Pennsylvania",
    country: "US",
    location: [40.50035 , -79.74949]
  },
  {
    name: "Upper Saint Clair",
    state: "Pennsylvania",
    country: "US",
    location: [40.3359 , -80.08339]
  },
  {
    name: "West Mifflin",
    state: "Pennsylvania",
    country: "US",
    location: [40.3634 , -79.86644]
  },
  {
    name: "Bartlett",
    state: "Tennessee",
    country: "US",
    location: [35.20453 , -89.87398]
  },
  {
    name: "Collierville",
    state: "Tennessee",
    country: "US",
    location: [35.04204 , -89.66453]
  },
  {
    name: "Germantown",
    state: "Tennessee",
    country: "US",
    location: [35.08676 , -89.81009]
  },
  {
    name: "Memphis",
    state: "Tennessee",
    country: "US",
    location: [35.14953 , -90.04898]
  },
  {
    name: "Corsicana",
    state: "Texas",
    country: "US",
    location: [32.09543 , -96.46887]
  },
  {
    name: "Denison",
    state: "Texas",
    country: "US",
    location: [33.75566 , -96.53666]
  },
  {
    name: "Greenville",
    state: "Texas",
    country: "US",
    location: [33.13845 , -96.11081]
  },
  {
    name: "Longview",
    state: "Texas",
    country: "US",
    location: [32.5007 , -94.74049]
  },
  {
    name: "Marshall",
    state: "Texas",
    country: "US",
    location: [32.54487 , -94.36742]
  },
  {
    name: "Paris",
    state: "Texas",
    country: "US",
    location: [33.66094 , -95.55551]
  },
  {
    name: "Sherman",
    state: "Texas",
    country: "US",
    location: [33.63566 , -96.60888]
  },
  {
    name: "Texarkana",
    state: "Texas",
    country: "US",
    location: [33.42513 , -94.04769]
  },
  {
    name: "Tyler",
    state: "Texas",
    country: "US",
    location: [32.35126 , -95.30106]
  },
  {
    name: "Jacksonville",
    state: "Florida",
    country: "US",
    location: [30.33218 , -81.65565]
  },
  {
    name: "Jacksonville Beach",
    state: "Florida",
    country: "US",
    location: [30.29469 , -81.39314]
  },
  {
    name: "Lakeside",
    state: "Florida",
    country: "US",
    location: [30.12996 , -81.76815]
  },
  {
    name: "Anchorage",
    state: "Alaska",
    country: "US",
    location: [61.21806 , -149.90028]
  },
  {
    name: "College",
    state: "Alaska",
    country: "US",
    location: [64.85694 , -147.80278]
  },
  {
    name: "Fairbanks",
    state: "Alaska",
    country: "US",
    location: [64.83778 , -147.71639]
  },
  {
    name: "Juneau",
    state: "Alaska",
    country: "US",
    location: [58.30194 , -134.41972]
  },
  {
    name: "Ketchikan",
    state: "Alaska",
    country: "US",
    location: [55.34225 , -131.64784]
  },
  {
    name: "Sitka",
    state: "Alaska",
    country: "US",
    location: [57.05315 , -135.33088]
  },
  {
    name: "Cranford",
    state: "New Jersey",
    country: "US",
    location: [40.65844 , -74.29959]
  },
  {
    name: "Elizabeth",
    state: "New Jersey",
    country: "US",
    location: [40.66399 , -74.2107]
  },
  {
    name: "Hillside",
    state: "New Jersey",
    country: "US",
    location: [40.70121 , -74.23015]
  },
  {
    name: "Linden",
    state: "New Jersey",
    country: "US",
    location: [40.62205 , -74.24459]
  },
  {
    name: "South Plainfield",
    state: "New Jersey",
    country: "US",
    location: [40.57927 , -74.41154]
  },
  {
    name: "Roselle",
    state: "New Jersey",
    country: "US",
    location: [40.65223 , -74.25882]
  },
  {
    name: "Scotch Plains",
    state: "New Jersey",
    country: "US",
    location: [40.65538 , -74.38987]
  },
  {
    name: "South Plainfield",
    state: "New Jersey",
    country: "US",
    location: [40.57927 , -74.41154]
  },
  {
    name: "Summit",
    state: "New Jersey",
    country: "US",
    location: [40.74149 , -74.35959]
  },
  {
    name: "Union City",
    state: "New Jersey",
    country: "US",
    location: [40.77955 , -74.02375]
  },
  {
    name: "Westfield",
    state: "New Jersey",
    country: "US",
    location: [40.65899 , -74.34737]
  },
  {
    name: "Chino",
    state: "California",
    country: "US",
    location: [34.01223 , -117.68894]
  },
  {
    name: "Chino Hills",
    state: "California",
    country: "US",
    location: [33.9938 , -117.75888]
  },
  {
    name: "Claremont",
    state: "California",
    country: "US",
    location: [34.09668 , -117.71978]
  },
  {
    name: "Colton",
    state: "California",
    country: "US",
    location: [34.0739 , -117.31365]
  },
  {
    name: "Diamond Bar",
    state: "California",
    country: "US",
    location: [34.02862 , -117.81034]
  },
  {
    name: "Fontana",
    state: "California",
    country: "US",
    location: [34.09223 , -117.43505]
  },
  {
    name: "Highland",
    state: "California",
    country: "US",
    location: [34.12834 , -117.20865]
  },
  {
    name: "La Verne",
    state: "California",
    country: "US",
    location: [34.10084 , -117.76784]
  },
  {
    name: "Montclair",
    state: "California",
    country: "US",
    location: [34.07751 , -117.68978]
  },
  {
    name: "Ontario",
    state: "California",
    country: "US",
    location: [34.06334 , -117.65089]
  },
  {
    name: "Pomona",
    state: "California",
    country: "US",
    location: [34.05529 , -117.75228]
  },
  {
    name: "Rancho Cucamonga",
    state: "California",
    country: "US",
    location: [34.1064 , -117.59311]
  },
  {
    name: "Redlands",
    state: "California",
    country: "US",
    location: [34.05557 , -117.18254]
  },
  {
    name: "Rialto",
    state: "California",
    country: "US",
    location: [34.1064 , -117.37032]
  },
  {
    name: "San Bernardino",
    state: "California",
    country: "US",
    location: [34.10834 , -117.28977]
  },
  {
    name: "San Dimas",
    state: "California",
    country: "US",
    location: [34.10668 , -117.80673]
  },
  {
    name: "Upland",
    state: "California",
    country: "US",
    location: [34.09751 , -117.64839]
  },
  {
    name: "Yucaipa",
    state: "California",
    country: "US",
    location: [34.03363 , -117.04309]
  },
  {
    name: "Fayetteville",
    state: "North Carolina",
    country: "US",
    location: [35.05266 , -78.87836]
  },
  {
    name: "Fort Bragg",
    state: "North Carolina",
    country: "US",
    location: [35.139 , -79.00603]
  },
  {
    name: "Jacksonville",
    state: "North Carolina",
    country: "US",
    location: [34.75405 , -77.43024]
  },
  {
    name: "Lumberton",
    state: "North Carolina",
    country: "US",
    location: [34.61834 , -79.01045]
  },
  {
    name: "Wilmington",
    state: "North Carolina",
    country: "US",
    location: [34.22573 , -77.94471]
  },
  {
    name: "Hinesville",
    state: "Georgia",
    country: "US",
    location: [31.84688 , -81.59595]
  },
  {
    name: "Savannah",
    state: "Georgia",
    country: "US",
    location: [32.08354 , -81.09983]
  },
  {
    name: "Statesboro",
    state: "Georgia",
    country: "US",
    location: [32.44879 , -81.78317]
  },
  {
    name: "Kansas City",
    state: "Kansas",
    country: "US",
    location: [39.11417 , -94.62746]
  },
  {
    name: "Leavenworth",
    state: "Kansas",
    country: "US",
    location: [39.31111 , -94.92246]
  },
  {
    name: "Leawood",
    state: "Kansas",
    country: "US",
    location: [38.96667 , -94.6169]
  },
  {
    name: "Lenexa",
    state: "Kansas",
    country: "US",
    location: [38.95362 , -94.73357]
  },
  {
    name: "Olathe",
    state: "Kansas",
    country: "US",
    location: [38.8814 , -94.81913]
  },
  {
    name: "Overland Park",
    state: "Kansas",
    country: "US",
    location: [38.98223 , -94.67079]
  },
  {
    name: "Prairie Village",
    state: "Kansas",
    country: "US",
    location: [38.99167 , -94.63357]
  },
  {
    name: "Shawnee",
    state: "Kansas",
    country: "US",
    location: [39.04167 , -94.72024]
  },
  {
    name: "Harrison",
    state: "New York",
    country: "US",
    location: [40.96899 , -73.71263]
  },
  {
    name: "Mount Vernon",
    state: "New York",
    country: "US",
    location: [40.9126 , -73.83708]
  },
  {
    name: "New Rochelle",
    state: "New York",
    country: "US",
    location: [40.91149 , -73.78235]
  },
  {
    name: "Ossining",
    state: "New York",
    country: "US",
    location: [41.16287 , -73.86152]
  },
  {
    name: "Peekskill",
    state: "New York",
    country: "US",
    location: [41.29009 , -73.92042]
  },
  {
    name: "Port Chester",
    state: "New York",
    country: "US",
    location: [41.00176 , -73.66568]
  },
  {
    name: "White Plains",
    state: "New York",
    country: "US",
    location: [41.03399 , -73.76291]
  },
  {
    name: "Yonkers",
    state: "New York",
    country: "US",
    location: [40.93121 , -73.89875]
  },
  {
    name: "El Paso",
    state: "Texas",
    country: "US",
    location: [31.75872 , -106.48693]
  },
  {
    name: "Socorro",
    state: "Texas",
    country: "US",
    location: [31.65456 , -106.30331]
  },
  {
    name: "Arden-Arcade",
    state: "California",
    country: "US",
    location: [38.6025 , -121.37854]
  },
  {
    name: "Carmichael",
    state: "California",
    country: "US",
    location: [38.61713 , -121.32828]
  },
  {
    name: "Citrus Heights",
    state: "California",
    country: "US",
    location: [38.70712 , -121.28106]
  },
  {
    name: "Elk Grove",
    state: "California",
    country: "US",
    location: [38.4088 , -121.37162]
  },
  {
    name: "North Fair Oaks",
    state: "California",
    country: "US",
    location: [37.47438 , -122.19663]
  },
  {
    name: "Florin",
    state: "California",
    country: "US",
    location: [38.49602 , -121.40884]
  },
  {
    name: "Folsom",
    state: "California",
    country: "US",
    location: [38.67796 , -121.17606]
  },
  {
    name: "La Riviera",
    state: "California",
    country: "US",
    location: [38.56685 , -121.3569]
  },
  {
    name: "Laguna",
    state: "California",
    country: "US",
    location: [38.42102 , -121.42384]
  },
  {
    name: "North Highlands",
    state: "California",
    country: "US",
    location: [38.68574 , -121.37217]
  },
  {
    name: "Orangevale",
    state: "California",
    country: "US",
    location: [38.67851 , -121.22578]
  },
  {
    name: "Rancho Cordova",
    state: "California",
    country: "US",
    location: [38.58907 , -121.30273]
  },
  {
    name: "Rocklin",
    state: "California",
    country: "US",
    location: [38.79073 , -121.23578]
  },
  {
    name: "Rosemont",
    state: "California",
    country: "US",
    location: [38.55185 , -121.36467]
  },
  {
    name: "Roseville",
    state: "California",
    country: "US",
    location: [38.75212 , -121.28801]
  },
  {
    name: "West Sacramento",
    state: "California",
    country: "US",
    location: [38.58046 , -121.53023]
  },
  {
    name: "West Sacramento",
    state: "California",
    country: "US",
    location: [38.58046 , -121.53023]
  },
  {
    name: "The Bronx",
    state: "New York",
    country: "US",
    location: [40.84985 , -73.86641]
  },
  {
    name: "Brooklyn",
    state: "New York",
    country: "US",
    location: [40.6501 , -73.94958]
  },
  {
    name: "New York City",
    state: "New York",
    country: "US",
    location: [40.71427 , -74.00597]
  },
  {
    name: "New York City",
    state: "New York",
    country: "US",
    location: [40.71427 , -74.00597]
  },
  {
    name: "Borough of Queens",
    state: "New York",
    country: "US",
    location: [40.68149 , -73.83652]
  },
  {
    name: "Staten Island",
    state: "New York",
    country: "US",
    location: [40.56233 , -74.13986]
  },
  {
    name: "Bartlesville",
    state: "Oklahoma",
    country: "US",
    location: [36.74731 , -95.98082]
  },
  {
    name: "Broken Arrow",
    state: "Oklahoma",
    country: "US",
    location: [36.0526 , -95.79082]
  },
  {
    name: "Muskogee",
    state: "Oklahoma",
    country: "US",
    location: [35.74788 , -95.36969]
  },
  {
    name: "Tulsa",
    state: "Oklahoma",
    country: "US",
    location: [36.15398 , -95.99277]
  },
  {
    name: "Apex",
    state: "North Carolina",
    country: "US",
    location: [35.73265 , -78.85029]
  },
  {
    name: "Cary",
    state: "North Carolina",
    country: "US",
    location: [35.79154 , -78.78112]
  },
  {
    name: "Chapel Hill",
    state: "North Carolina",
    country: "US",
    location: [35.9132 , -79.05584]
  },
  {
    name: "Durham",
    state: "North Carolina",
    country: "US",
    location: [35.99403 , -78.89862]
  },
  {
    name: "Goldsboro",
    state: "North Carolina",
    country: "US",
    location: [35.38488 , -77.99277]
  },
  {
    name: "West Raleigh",
    state: "North Carolina",
    country: "US",
    location: [35.78682 , -78.66389]
  },
  {
    name: "Sanford",
    state: "North Carolina",
    country: "US",
    location: [35.47988 , -79.1803]
  },
  {
    name: "Appleton",
    state: "Wisconsin",
    country: "US",
    location: [44.26193 , -88.41538]
  },
  {
    name: "De Pere",
    state: "Wisconsin",
    country: "US",
    location: [44.44888 , -88.06038]
  },
  {
    name: "North Fond du Lac",
    state: "Wisconsin",
    country: "US",
    location: [43.81138 , -88.48344]
  },
  {
    name: "Green Bay",
    state: "Wisconsin",
    country: "US",
    location: [44.51916 , -88.01983]
  },
  {
    name: "Manitowoc",
    state: "Wisconsin",
    country: "US",
    location: [44.08861 , -87.65758]
  },
  {
    name: "Neenah",
    state: "Wisconsin",
    country: "US",
    location: [44.18582 , -88.46261]
  },
  {
    name: "Oshkosh",
    state: "Wisconsin",
    country: "US",
    location: [44.02471 , -88.54261]
  },
  {
    name: "Sheboygan",
    state: "Wisconsin",
    country: "US",
    location: [43.75083 , -87.71453]
  },
  {
    name: "Watertown",
    state: "Wisconsin",
    country: "US",
    location: [43.19472 , -88.72899]
  },
  {
    name: "Watertown",
    state: "Wisconsin",
    country: "US",
    location: [43.19472 , -88.72899]
  },
  {
    name: "Antioch",
    state: "California",
    country: "US",
    location: [38.00492 , -121.80579]
  },
  {
    name: "Bay Point",
    state: "California",
    country: "US",
    location: [38.02909 , -121.96163]
  },
  {
    name: "Brentwood",
    state: "California",
    country: "US",
    location: [37.93187 , -121.69579]
  },
  {
    name: "Concord",
    state: "California",
    country: "US",
    location: [37.97798 , -122.03107]
  },
  {
    name: "Danville",
    state: "California",
    country: "US",
    location: [37.82159 , -121.99996]
  },
  {
    name: "Dublin",
    state: "California",
    country: "US",
    location: [37.70215 , -121.93579]
  },
  {
    name: "Lafayette",
    state: "California",
    country: "US",
    location: [37.88576 , -122.11802]
  },
  {
    name: "Livermore",
    state: "California",
    country: "US",
    location: [37.68187 , -121.76801]
  },
  {
    name: "Martinez",
    state: "California",
    country: "US",
    location: [38.01937 , -122.13413]
  },
  {
    name: "Oakley",
    state: "California",
    country: "US",
    location: [37.99742 , -121.71245]
  },
  {
    name: "Pittsburg",
    state: "California",
    country: "US",
    location: [38.02798 , -121.88468]
  },
  {
    name: "Pleasant Hill",
    state: "California",
    country: "US",
    location: [37.94798 , -122.0608]
  },
  {
    name: "Pleasanton",
    state: "California",
    country: "US",
    location: [37.66243 , -121.87468]
  },
  {
    name: "San Ramon",
    state: "California",
    country: "US",
    location: [37.77993 , -121.97802]
  },
  {
    name: "Walnut Creek",
    state: "California",
    country: "US",
    location: [37.90631 , -122.06496]
  },
  {
    name: "Bullhead City",
    state: "Arizona",
    country: "US",
    location: [35.14778 , -114.5683]
  },
  {
    name: "Flagstaff",
    state: "Arizona",
    country: "US",
    location: [35.19807 , -111.65127]
  },
  {
    name: "Fortuna Foothills",
    state: "Arizona",
    country: "US",
    location: [32.65783 , -114.41189]
  },
  {
    name: "Kingman",
    state: "Arizona",
    country: "US",
    location: [35.18944 , -114.05301]
  },
  {
    name: "Lake Havasu City",
    state: "Arizona",
    country: "US",
    location: [34.4839 , -114.32245]
  },
  {
    name: "Prescott",
    state: "Arizona",
    country: "US",
    location: [34.54002 , -112.4685]
  },
  {
    name: "Prescott Valley",
    state: "Arizona",
    country: "US",
    location: [34.61002 , -112.31572]
  },
  {
    name: "Yuma",
    state: "Arizona",
    country: "US",
    location: [32.72532 , -114.6244]
  },
  {
    name: "The Bronx",
    state: "New York",
    country: "US",
    location: [40.84985 , -73.86641]
  },
  {
    name: "Brooklyn",
    state: "New York",
    country: "US",
    location: [40.6501 , -73.94958]
  },
  {
    name: "New York City",
    state: "New York",
    country: "US",
    location: [40.71427 , -74.00597]
  },
  {
    name: "Borough of Queens",
    state: "New York",
    country: "US",
    location: [40.68149 , -73.83652]
  },
  {
    name: "Staten Island",
    state: "New York",
    country: "US",
    location: [40.56233 , -74.13986]
  },
  {
    name: "Bloomington",
    state: "Indiana",
    country: "US",
    location: [39.16533 , -86.52639]
  },
  {
    name: "Clarksville",
    state: "Indiana",
    country: "US",
    location: [38.29674 , -85.75996]
  },
  {
    name: "Columbus",
    state: "Indiana",
    country: "US",
    location: [39.20144 , -85.92138]
  },
  {
    name: "Evansville",
    state: "Indiana",
    country: "US",
    location: [37.97476 , -87.55585]
  },
  {
    name: "Jeffersonville",
    state: "Indiana",
    country: "US",
    location: [38.27757 , -85.73718]
  },
  {
    name: "New Albany",
    state: "Indiana",
    country: "US",
    location: [38.28562 , -85.82413]
  },
  {
    name: "Terre Haute",
    state: "Indiana",
    country: "US",
    location: [39.4667 , -87.41391]
  },
  {
    name: "Clarksville",
    state: "Tennessee",
    country: "US",
    location: [36.52977 , -87.35945]
  },
  {
    name: "Columbia",
    state: "Tennessee",
    country: "US",
    location: [35.61507 , -87.03528]
  },
  {
    name: "Cookeville",
    state: "Tennessee",
    country: "US",
    location: [36.16284 , -85.50164]
  },
  {
    name: "Conroe",
    state: "Texas",
    country: "US",
    location: [30.31188 , -95.45605]
  },
  {
    name: "Huntsville",
    state: "Texas",
    country: "US",
    location: [30.72353 , -95.55078]
  },
  {
    name: "Lufkin",
    state: "Texas",
    country: "US",
    location: [31.33824 , -94.7291]
  },
  {
    name: "Nacogdoches",
    state: "Texas",
    country: "US",
    location: [31.60351 , -94.65549]
  },
  {
    name: "Beavercreek",
    state: "Ohio",
    country: "US",
    location: [39.70923 , -84.06327]
  },
  {
    name: "Centerville",
    state: "Ohio",
    country: "US",
    location: [39.62839 , -84.15938]
  },
  {
    name: "Dayton",
    state: "Ohio",
    country: "US",
    location: [39.75895 , -84.19161]
  },
  {
    name: "Fairborn",
    state: "Ohio",
    country: "US",
    location: [39.82089 , -84.01938]
  },
  {
    name: "Huber Heights",
    state: "Ohio",
    country: "US",
    location: [39.84395 , -84.12466]
  },
  {
    name: "Kettering",
    state: "Ohio",
    country: "US",
    location: [39.6895 , -84.16883]
  },
  {
    name: "Piqua",
    state: "Ohio",
    country: "US",
    location: [40.14477 , -84.24244]
  },
  {
    name: "Riverside",
    state: "Ohio",
    country: "US",
    location: [39.77978 , -84.1241]
  },
  {
    name: "Sidney",
    state: "Ohio",
    country: "US",
    location: [40.28422 , -84.1555]
  },
  {
    name: "Springfield",
    state: "Ohio",
    country: "US",
    location: [39.92423 , -83.80882]
  },
  {
    name: "Trotwood",
    state: "Ohio",
    country: "US",
    location: [39.79728 , -84.31133]
  },
  {
    name: "Troy",
    state: "Ohio",
    country: "US",
    location: [40.0395 , -84.20328]
  },
  {
    name: "Xenia",
    state: "Ohio",
    country: "US",
    location: [39.68478 , -83.92965]
  },
  {
    name: "Denton",
    state: "Texas",
    country: "US",
    location: [33.21484 , -97.13307]
  },
  {
    name: "Lewisville",
    state: "Texas",
    country: "US",
    location: [33.04623 , -96.99417]
  },
  {
    name: "Wichita Falls",
    state: "Texas",
    country: "US",
    location: [33.91371 , -98.49339]
  },
  {
    name: "South Bradenton",
    state: "Florida",
    country: "US",
    location: [27.4631 , -82.58176]
  },
  {
    name: "North Port",
    state: "Florida",
    country: "US",
    location: [27.04422 , -82.23593]
  },
  {
    name: "Port Charlotte",
    state: "Florida",
    country: "US",
    location: [26.97617 , -82.09064]
  },
  {
    name: "Punta Gorda",
    state: "Florida",
    country: "US",
    location: [26.92978 , -82.04537]
  },
  {
    name: "Sarasota",
    state: "Florida",
    country: "US",
    location: [27.33643 , -82.53065]
  },
  {
    name: "South Bradenton",
    state: "Florida",
    country: "US",
    location: [27.4631 , -82.58176]
  },
  {
    name: "West Bloomfield Township",
    state: "Michigan",
    country: "US",
    location: [42.56891 , -83.38356]
  },
  {
    name: "Farmington Hills",
    state: "Michigan",
    country: "US",
    location: [42.48531 , -83.37716]
  },
  {
    name: "Ferndale",
    state: "Michigan",
    country: "US",
    location: [42.46059 , -83.13465]
  },
  {
    name: "Madison Heights",
    state: "Michigan",
    country: "US",
    location: [42.48587 , -83.1052]
  },
  {
    name: "Novi",
    state: "Michigan",
    country: "US",
    location: [42.48059 , -83.47549]
  },
  {
    name: "Oak Park",
    state: "Michigan",
    country: "US",
    location: [42.45948 , -83.18271]
  },
  {
    name: "Pontiac",
    state: "Michigan",
    country: "US",
    location: [42.63892 , -83.29105]
  },
  {
    name: "Rochester Hills",
    state: "Michigan",
    country: "US",
    location: [42.65837 , -83.14993]
  },
  {
    name: "Royal Oak",
    state: "Michigan",
    country: "US",
    location: [42.48948 , -83.14465]
  },
  {
    name: "Southfield",
    state: "Michigan",
    country: "US",
    location: [42.47337 , -83.22187]
  },
  {
    name: "Troy",
    state: "Michigan",
    country: "US",
    location: [42.60559 , -83.14993]
  },
  {
    name: "Waterford",
    state: "Michigan",
    country: "US",
    location: [42.69303 , -83.41181]
  },
  {
    name: "West Bloomfield Township",
    state: "Michigan",
    country: "US",
    location: [42.56891 , -83.38356]
  },
  {
    name: "Aliso Viejo",
    state: "California",
    country: "US",
    location: [33.56504 , -117.72712]
  },
  {
    name: "Costa Mesa",
    state: "California",
    country: "US",
    location: [33.64113 , -117.91867]
  },
  {
    name: "Dana Point",
    state: "California",
    country: "US",
    location: [33.46697 , -117.69811]
  },
  {
    name: "Irvine",
    state: "California",
    country: "US",
    location: [33.66946 , -117.82311]
  },
  {
    name: "Laguna Beach",
    state: "California",
    country: "US",
    location: [33.54225 , -117.78311]
  },
  {
    name: "Laguna Hills",
    state: "California",
    country: "US",
    location: [33.61252 , -117.71283]
  },
  {
    name: "Laguna Niguel",
    state: "California",
    country: "US",
    location: [33.52253 , -117.70755]
  },
  {
    name: "Lake Forest",
    state: "California",
    country: "US",
    location: [33.64697 , -117.68922]
  },
  {
    name: "Mission Viejo",
    state: "California",
    country: "US",
    location: [33.60002 , -117.672]
  },
  {
    name: "Newport Beach",
    state: "California",
    country: "US",
    location: [33.61891 , -117.92895]
  },
  {
    name: "Rancho Santa Margarita",
    state: "California",
    country: "US",
    location: [33.64086 , -117.6031]
  },
  {
    name: "San Clemente",
    state: "California",
    country: "US",
    location: [33.42697 , -117.61199]
  },
  {
    name: "San Juan Capistrano",
    state: "California",
    country: "US",
    location: [33.50169 , -117.66255]
  },
  {
    name: "Banning",
    state: "California",
    country: "US",
    location: [33.92557 , -116.87641]
  },
  {
    name: "Corona",
    state: "California",
    country: "US",
    location: [33.87529 , -117.56644]
  },
  {
    name: "Hemet",
    state: "California",
    country: "US",
    location: [33.74761 , -116.97307]
  },
  {
    name: "Moreno Valley",
    state: "California",
    country: "US",
    location: [33.93752 , -117.23059]
  },
  {
    name: "Murrieta",
    state: "California",
    country: "US",
    location: [33.55391 , -117.21392]
  },
  {
    name: "Norco",
    state: "California",
    country: "US",
    location: [33.93113 , -117.54866]
  },
  {
    name: "Perris",
    state: "California",
    country: "US",
    location: [33.78252 , -117.22865]
  },
  {
    name: "Riverside",
    state: "California",
    country: "US",
    location: [33.95335 , -117.39616]
  },
  {
    name: "Rubidoux",
    state: "California",
    country: "US",
    location: [33.99613 , -117.4056]
  },
  {
    name: "Temecula",
    state: "California",
    country: "US",
    location: [33.49364 , -117.14836]
  },
  {
    name: "Bloomington",
    state: "Minnesota",
    country: "US",
    location: [44.8408 , -93.29828]
  },
  {
    name: "Burnsville",
    state: "Minnesota",
    country: "US",
    location: [44.76774 , -93.27772]
  },
  {
    name: "Chanhassen",
    state: "Minnesota",
    country: "US",
    location: [44.86219 , -93.53079]
  },
  {
    name: "Eden Prairie",
    state: "Minnesota",
    country: "US",
    location: [44.85469 , -93.47079]
  },
  {
    name: "Edina",
    state: "Minnesota",
    country: "US",
    location: [44.88969 , -93.34995]
  },
  {
    name: "Minnetonka",
    state: "Minnesota",
    country: "US",
    location: [44.9133 , -93.50329]
  },
  {
    name: "Savage",
    state: "Minnesota",
    country: "US",
    location: [44.77913 , -93.33634]
  },
  {
    name: "Shakopee",
    state: "Minnesota",
    country: "US",
    location: [44.79802 , -93.5269]
  },
  {
    name: "Coconut Creek",
    state: "Florida",
    country: "US",
    location: [26.25175 , -80.17894]
  },
  {
    name: "Cooper City",
    state: "Florida",
    country: "US",
    location: [26.05731 , -80.27172]
  },
  {
    name: "Coral Springs",
    state: "Florida",
    country: "US",
    location: [26.27119 , -80.2706]
  },
  {
    name: "Dania Beach",
    state: "Florida",
    country: "US",
    location: [26.05231 , -80.14393]
  },
  {
    name: "Davie",
    state: "Florida",
    country: "US",
    location: [26.06287 , -80.2331]
  },
  {
    name: "Deerfield Beach",
    state: "Florida",
    country: "US",
    location: [26.31841 , -80.09977]
  },
  {
    name: "Fort Lauderdale",
    state: "Florida",
    country: "US",
    location: [26.12231 , -80.14338]
  },
  {
    name: "Hallandale Beach",
    state: "Florida",
    country: "US",
    location: [25.9812 , -80.14838]
  },
  {
    name: "Hollywood",
    state: "Florida",
    country: "US",
    location: [26.0112 , -80.14949]
  },
  {
    name: "Lauderdale Lakes",
    state: "Florida",
    country: "US",
    location: [26.16647 , -80.20838]
  },
  {
    name: "Lauderhill",
    state: "Florida",
    country: "US",
    location: [26.14036 , -80.21338]
  },
  {
    name: "Margate",
    state: "Florida",
    country: "US",
    location: [26.24453 , -80.20644]
  },
  {
    name: "North Lauderdale",
    state: "Florida",
    country: "US",
    location: [26.2173 , -80.22588]
  },
  {
    name: "Pembroke Pines",
    state: "Florida",
    country: "US",
    location: [26.00315 , -80.22394]
  },
  {
    name: "Plantation",
    state: "Florida",
    country: "US",
    location: [26.13421 , -80.23184]
  },
  {
    name: "Pompano Beach",
    state: "Florida",
    country: "US",
    location: [26.23786 , -80.12477]
  },
  {
    name: "Sunrise",
    state: "Florida",
    country: "US",
    location: [26.13397 , -80.1131]
  },
  {
    name: "Tamarac",
    state: "Florida",
    country: "US",
    location: [26.21286 , -80.24977]
  },
  {
    name: "Weston",
    state: "Florida",
    country: "US",
    location: [26.10037 , -80.39977]
  },
  {
    name: "Brownsville",
    state: "Texas",
    country: "US",
    location: [25.90175 , -97.49748]
  },
  {
    name: "Edinburg",
    state: "Texas",
    country: "US",
    location: [26.30174 , -98.16334]
  },
  {
    name: "Harlingen",
    state: "Texas",
    country: "US",
    location: [26.19063 , -97.6961]
  },
  {
    name: "Laredo",
    state: "Texas",
    country: "US",
    location: [27.50641 , -99.50754]
  },
  {
    name: "McAllen",
    state: "Texas",
    country: "US",
    location: [26.20341 , -98.23001]
  },
  {
    name: "Mission",
    state: "Texas",
    country: "US",
    location: [26.21591 , -98.32529]
  },
  {
    name: "Pharr",
    state: "Texas",
    country: "US",
    location: [26.1948 , -98.18362]
  },
  {
    name: "San Benito",
    state: "Texas",
    country: "US",
    location: [26.13258 , -97.6311]
  },
  {
    name: "San Juan",
    state: "Texas",
    country: "US",
    location: [26.18924 , -98.15529]
  },
  {
    name: "Weslaco",
    state: "Texas",
    country: "US",
    location: [26.15952 , -97.99084]
  },
  {
    name: "Bristol",
    state: "Connecticut",
    country: "US",
    location: [41.67176 , -72.94927]
  },
  {
    name: "Manchester",
    state: "Connecticut",
    country: "US",
    location: [41.77593 , -72.52148]
  },
  {
    name: "East Hartford",
    state: "Connecticut",
    country: "US",
    location: [41.78232 , -72.61203]
  },
  {
    name: "West Hartford",
    state: "Connecticut",
    country: "US",
    location: [41.76204 , -72.74204]
  },
  {
    name: "Middletown",
    state: "Connecticut",
    country: "US",
    location: [41.56232 , -72.65065]
  },
  {
    name: "New Britain",
    state: "Connecticut",
    country: "US",
    location: [41.66121 , -72.77954]
  },
  {
    name: "New London",
    state: "Connecticut",
    country: "US",
    location: [41.35565 , -72.09952]
  },
  {
    name: "Newington",
    state: "Connecticut",
    country: "US",
    location: [41.69788 , -72.72371]
  },
  {
    name: "Norwich",
    state: "Connecticut",
    country: "US",
    location: [41.52426 , -72.07591]
  },
  {
    name: "West Torrington",
    state: "Connecticut",
    country: "US",
    location: [41.81843 , -73.14372]
  },
  {
    name: "West Hartford",
    state: "Connecticut",
    country: "US",
    location: [41.76204 , -72.74204]
  },
  {
    name: "Wethersfield",
    state: "Connecticut",
    country: "US",
    location: [41.71427 , -72.65259]
  },
  {
    name: "Fort Collins",
    state: "Colorado",
    country: "US",
    location: [40.58526 , -105.08442]
  },
  {
    name: "Grand Junction",
    state: "Colorado",
    country: "US",
    location: [39.06387 , -108.55065]
  },
  {
    name: "Greeley",
    state: "Colorado",
    country: "US",
    location: [40.42331 , -104.70913]
  },
  {
    name: "Loveland",
    state: "Colorado",
    country: "US",
    location: [40.39776 , -105.07498]
  },
  {
    name: "Aloha",
    state: "Oregon",
    country: "US",
    location: [45.49428 , -122.86705]
  },
  {
    name: "Beaverton",
    state: "Oregon",
    country: "US",
    location: [45.48706 , -122.80371]
  },
  {
    name: "Gresham",
    state: "Oregon",
    country: "US",
    location: [45.49818 , -122.43148]
  },
  {
    name: "Hillsboro",
    state: "Oregon",
    country: "US",
    location: [45.52289 , -122.98983]
  },
  {
    name: "Keizer",
    state: "Oregon",
    country: "US",
    location: [44.99012 , -123.02621]
  },
  {
    name: "Lake Oswego",
    state: "Oregon",
    country: "US",
    location: [45.42067 , -122.67065]
  },
  {
    name: "McMinnville",
    state: "Oregon",
    country: "US",
    location: [45.21012 , -123.19872]
  },
  {
    name: "Milwaukie",
    state: "Oregon",
    country: "US",
    location: [45.44623 , -122.63926]
  },
  {
    name: "Oregon City",
    state: "Oregon",
    country: "US",
    location: [45.35734 , -122.60676]
  },
  {
    name: "Portland",
    state: "Oregon",
    country: "US",
    location: [45.52345 , -122.67621]
  },
  {
    name: "Salem",
    state: "Oregon",
    country: "US",
    location: [44.9429 , -123.0351]
  },
  {
    name: "Tigard",
    state: "Oregon",
    country: "US",
    location: [45.43123 , -122.77149]
  },
  {
    name: "Tualatin",
    state: "Oregon",
    country: "US",
    location: [45.38401 , -122.76399]
  },
  {
    name: "West Linn",
    state: "Oregon",
    country: "US",
    location: [45.36568 , -122.61231]
  },
  {
    name: "Woodburn",
    state: "Oregon",
    country: "US",
    location: [45.14373 , -122.85537]
  },
  {
    name: "Allen",
    state: "Texas",
    country: "US",
    location: [33.10317 , -96.67055]
  },
  {
    name: "Carrollton",
    state: "Texas",
    country: "US",
    location: [32.95373 , -96.89028]
  },
  {
    name: "Cedar Hill",
    state: "Texas",
    country: "US",
    location: [32.58847 , -96.95612]
  },
  {
    name: "Coppell",
    state: "Texas",
    country: "US",
    location: [32.95457 , -97.01501]
  },
  {
    name: "Dallas",
    state: "Texas",
    country: "US",
    location: [32.78306 , -96.80667]
  },
  {
    name: "DeSoto",
    state: "Texas",
    country: "US",
    location: [32.58986 , -96.85695]
  },
  {
    name: "Duncanville",
    state: "Texas",
    country: "US",
    location: [32.6518 , -96.90834]
  },
  {
    name: "Farmers Branch",
    state: "Texas",
    country: "US",
    location: [32.92651 , -96.89612]
  },
  {
    name: "Flower Mound",
    state: "Texas",
    country: "US",
    location: [33.01457 , -97.09696]
  },
  {
    name: "Frisco",
    state: "Texas",
    country: "US",
    location: [33.15067 , -96.82361]
  },
  {
    name: "Garland",
    state: "Texas",
    country: "US",
    location: [32.91262 , -96.63888]
  },
  {
    name: "Grand Prairie",
    state: "Texas",
    country: "US",
    location: [32.74596 , -96.99778]
  },
  {
    name: "Irving",
    state: "Texas",
    country: "US",
    location: [32.81402 , -96.94889]
  },
  {
    name: "Lancaster",
    state: "Texas",
    country: "US",
    location: [32.59208 , -96.75611]
  },
  {
    name: "Lewisville",
    state: "Texas",
    country: "US",
    location: [33.04623 , -96.99417]
  },
  {
    name: "McKinney",
    state: "Texas",
    country: "US",
    location: [33.19762 , -96.61527]
  },
  {
    name: "Mesquite",
    state: "Texas",
    country: "US",
    location: [32.7668 , -96.59916]
  },
  {
    name: "Plano",
    state: "Texas",
    country: "US",
    location: [33.01984 , -96.69889]
  },
  {
    name: "Richardson",
    state: "Texas",
    country: "US",
    location: [32.94818 , -96.72972]
  },
  {
    name: "Rowlett",
    state: "Texas",
    country: "US",
    location: [32.9029 , -96.56388]
  },
  {
    name: "The Colony",
    state: "Texas",
    country: "US",
    location: [33.08901 , -96.88639]
  },
  {
    name: "University Park",
    state: "Texas",
    country: "US",
    location: [32.85013 , -96.80028]
  },
  {
    name: "Waxahachie",
    state: "Texas",
    country: "US",
    location: [32.38653 , -96.84833]
  },
  {
    name: "Belleville",
    state: "New Jersey",
    country: "US",
    location: [40.79371 , -74.15014]
  },
  {
    name: "Bloomfield",
    state: "New Jersey",
    country: "US",
    location: [40.80677 , -74.18542]
  },
  {
    name: "Clifton",
    state: "New Jersey",
    country: "US",
    location: [40.85843 , -74.16376]
  },
  {
    name: "East Orange",
    state: "New Jersey",
    country: "US",
    location: [40.76732 , -74.20487]
  },
  {
    name: "Garfield",
    state: "New Jersey",
    country: "US",
    location: [40.88149 , -74.1132]
  },
  {
    name: "Irvington",
    state: "New Jersey",
    country: "US",
    location: [40.73232 , -74.23487]
  },
  {
    name: "Livingston",
    state: "New Jersey",
    country: "US",
    location: [40.79593 , -74.31487]
  },
  {
    name: "Lodi",
    state: "New Jersey",
    country: "US",
    location: [40.88232 , -74.0832]
  },
  {
    name: "Maplewood",
    state: "New Jersey",
    country: "US",
    location: [40.73121 , -74.27348]
  },
  {
    name: "Montclair",
    state: "New Jersey",
    country: "US",
    location: [40.82593 , -74.20903]
  },
  {
    name: "Morristown",
    state: "New Jersey",
    country: "US",
    location: [40.79677 , -74.48154]
  },
  {
    name: "Newark",
    state: "New Jersey",
    country: "US",
    location: [40.73566 , -74.17237]
  },
  {
    name: "Nutley",
    state: "New Jersey",
    country: "US",
    location: [40.82232 , -74.15987]
  },
  {
    name: "West Orange",
    state: "New Jersey",
    country: "US",
    location: [40.79871 , -74.23904]
  },
  {
    name: "Passaic",
    state: "New Jersey",
    country: "US",
    location: [40.85677 , -74.12848]
  },
  {
    name: "Paterson",
    state: "New Jersey",
    country: "US",
    location: [40.91677 , -74.17181]
  },
  {
    name: "Wayne",
    state: "New Jersey",
    country: "US",
    location: [40.92538 , -74.27654]
  },
  {
    name: "West Milford",
    state: "New Jersey",
    country: "US",
    location: [41.13121 , -74.36737]
  },
  {
    name: "West Orange",
    state: "New Jersey",
    country: "US",
    location: [40.79871 , -74.23904]
  },
  {
    name: "Beverly",
    state: "Massachusetts",
    country: "US",
    location: [42.55843 , -70.88005]
  },
  {
    name: "Chelmsford",
    state: "Massachusetts",
    country: "US",
    location: [42.59981 , -71.36728]
  },
  {
    name: "Danvers",
    state: "Massachusetts",
    country: "US",
    location: [42.57509 , -70.93005]
  },
  {
    name: "Fitchburg",
    state: "Massachusetts",
    country: "US",
    location: [42.58342 , -71.8023]
  },
  {
    name: "Gardner",
    state: "Massachusetts",
    country: "US",
    location: [42.57509 , -71.99813]
  },
  {
    name: "Gloucester",
    state: "Massachusetts",
    country: "US",
    location: [42.61593 , -70.66199]
  },
  {
    name: "Haverhill",
    state: "Massachusetts",
    country: "US",
    location: [42.7762 , -71.07728]
  },
  {
    name: "Lawrence",
    state: "Massachusetts",
    country: "US",
    location: [42.70704 , -71.16311]
  },
  {
    name: "Leominster",
    state: "Massachusetts",
    country: "US",
    location: [42.52509 , -71.75979]
  },
  {
    name: "Lowell",
    state: "Massachusetts",
    country: "US",
    location: [42.63342 , -71.31617]
  },
  {
    name: "Methuen",
    state: "Massachusetts",
    country: "US",
    location: [42.7262 , -71.19089]
  },
  {
    name: "South Peabody",
    state: "Massachusetts",
    country: "US",
    location: [42.50982 , -70.94949]
  },
  {
    name: "Salem",
    state: "Massachusetts",
    country: "US",
    location: [42.51954 , -70.89672]
  },
  {
    name: "Wilmington",
    state: "Massachusetts",
    country: "US",
    location: [42.54648 , -71.17367]
  },
  {
    name: "Bryan",
    state: "Texas",
    country: "US",
    location: [30.67436 , -96.36996]
  },
  {
    name: "College Station",
    state: "Texas",
    country: "US",
    location: [30.62798 , -96.33441]
  },
  {
    name: "Lake Jackson",
    state: "Texas",
    country: "US",
    location: [29.03386 , -95.43439]
  },
  {
    name: "Charlotte",
    state: "North Carolina",
    country: "US",
    location: [35.22709 , -80.84313]
  },
  {
    name: "Concord",
    state: "North Carolina",
    country: "US",
    location: [35.40888 , -80.58158]
  },
  {
    name: "South Gastonia",
    state: "North Carolina",
    country: "US",
    location: [35.2193 , -81.20563]
  },
  {
    name: "Huntersville",
    state: "North Carolina",
    country: "US",
    location: [35.41069 , -80.84285]
  },
  {
    name: "Kannapolis",
    state: "North Carolina",
    country: "US",
    location: [35.48736 , -80.62173]
  },
  {
    name: "Matthews",
    state: "North Carolina",
    country: "US",
    location: [35.11681 , -80.72368]
  },
  {
    name: "Monroe",
    state: "North Carolina",
    country: "US",
    location: [34.98543 , -80.54951]
  },
  {
    name: "Salisbury",
    state: "North Carolina",
    country: "US",
    location: [35.67097 , -80.47423]
  },
  {
    name: "Statesville",
    state: "North Carolina",
    country: "US",
    location: [35.78264 , -80.8873]
  },
  {
    name: "Apex",
    state: "North Carolina",
    country: "US",
    location: [35.73265 , -78.85029]
  },
  {
    name: "Cary",
    state: "North Carolina",
    country: "US",
    location: [35.79154 , -78.78112]
  },
  {
    name: "Chapel Hill",
    state: "North Carolina",
    country: "US",
    location: [35.9132 , -79.05584]
  },
  {
    name: "Durham",
    state: "North Carolina",
    country: "US",
    location: [35.99403 , -78.89862]
  },
  {
    name: "Goldsboro",
    state: "North Carolina",
    country: "US",
    location: [35.38488 , -77.99277]
  },
  {
    name: "West Raleigh",
    state: "North Carolina",
    country: "US",
    location: [35.78682 , -78.66389]
  },
  {
    name: "Sanford",
    state: "North Carolina",
    country: "US",
    location: [35.47988 , -79.1803]
  },
  {
    name: "Houma",
    state: "Louisiana",
    country: "US",
    location: [29.59577 , -90.71953]
  },
  {
    name: "Laplace",
    state: "Louisiana",
    country: "US",
    location: [30.06698 , -90.48147]
  },
  {
    name: "Slidell",
    state: "Louisiana",
    country: "US",
    location: [30.27519 , -89.78117]
  },
  {
    name: "Bay City",
    state: "Michigan",
    country: "US",
    location: [43.59447 , -83.88886]
  },
  {
    name: "Midland",
    state: "Michigan",
    country: "US",
    location: [43.61558 , -84.24721]
  },
  {
    name: "Mount Pleasant",
    state: "Michigan",
    country: "US",
    location: [43.59781 , -84.76751]
  },
  {
    name: "Saginaw",
    state: "Michigan",
    country: "US",
    location: [43.41947 , -83.95081]
  },
  {
    name: "Saginaw",
    state: "Michigan",
    country: "US",
    location: [43.41947 , -83.95081]
  },
  {
    name: "North Charleston",
    state: "South Carolina",
    country: "US",
    location: [32.85462 , -79.97481]
  },
  {
    name: "Florence",
    state: "South Carolina",
    country: "US",
    location: [34.19543 , -79.76256]
  },
  {
    name: "Goose Creek",
    state: "South Carolina",
    country: "US",
    location: [32.98101 , -80.03259]
  },
  {
    name: "Hilton Head Island",
    state: "South Carolina",
    country: "US",
    location: [32.21632 , -80.75261]
  },
  {
    name: "Mount Pleasant",
    state: "South Carolina",
    country: "US",
    location: [32.79407 , -79.86259]
  },
  {
    name: "North Myrtle Beach",
    state: "South Carolina",
    country: "US",
    location: [33.81601 , -78.68002]
  },
  {
    name: "North Charleston",
    state: "South Carolina",
    country: "US",
    location: [32.85462 , -79.97481]
  },
  {
    name: "Summerville",
    state: "South Carolina",
    country: "US",
    location: [33.0185 , -80.17565]
  }
];

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

// Overlays that can be toggled on or off
var overlayMaps = {
  Cities: cityLayer
};

// Create a map object, and set the default layers.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4,
  layers: [street, cityLayer]
});

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
