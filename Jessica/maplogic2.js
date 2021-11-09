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

var stations = [{
  "_id": {
    "$oid": "618477d8274b6bc63aaffc73"
  },
  "Location": {
    "State": "Alabama",
    "City": "Ashland",
    "Long": "-85.84",
    "Lat": "33.27",
    "Alt": "1063ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 52,
      "Avg Low": 33,
      "Avg Precipitation": 6.18
    },
    "Feb": {
      "Avg High": 57,
      "Avg Low": 36,
      "Avg Precipitation": 5.75
    },
    "Mar": {
      "Avg High": 65,
      "Avg Low": 43,
      "Avg Precipitation": 7.24
    },
    "Apr": {
      "Avg High": 73,
      "Avg Low": 49,
      "Avg Precipitation": 4.96
    },
    "May": {
      "Avg High": 79,
      "Avg Low": 58,
      "Avg Precipitation": 4.53
    },
    "Jun": {
      "Avg High": 85,
      "Avg Low": 65,
      "Avg Precipitation": 4.49
    },
    "Jul": {
      "Avg High": 88,
      "Avg Low": 69,
      "Avg Precipitation": 5.28
    },
    "Sep": {
      "Avg High": 82,
      "Avg Low": 63,
      "Avg Precipitation": 3.98
    },
    "Oct": {
      "Avg High": 73,
      "Avg Low": 52,
      "Avg Precipitation": 3.39
    },
    "Nov": {
      "Avg High": 64,
      "Avg Low": 44,
      "Avg Precipitation": 4.76
    },
    "Dec": {
      "Avg High": 55,
      "Avg Low": 37,
      "Avg Precipitation": 5
    }
  }
},{
  "_id": {
    "$oid": "618477dc274b6bc63aaffc74"
  },
  "Location": {
    "State": "Alabama",
    "City": "Jackson",
    "Long": "-87.89",
    "Lat": "31.51",
    "Alt": "226ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 59,
      "Avg Low": 35,
      "Avg Precipitation": 5.26
    },
    "Feb": {
      "Avg High": 63,
      "Avg Low": 39,
      "Avg Precipitation": 5.56
    },
    "Mar": {
      "Avg High": 71,
      "Avg Low": 44,
      "Avg Precipitation": 6.03
    },
    "Apr": {
      "Avg High": 77,
      "Avg Low": 51,
      "Avg Precipitation": 4.02
    },
    "May": {
      "Avg High": 84,
      "Avg Low": 60,
      "Avg Precipitation": 4.87
    },
    "Jun": {
      "Avg High": 89,
      "Avg Low": 67,
      "Avg Precipitation": 5.17
    },
    "Jul": {
      "Avg High": 91,
      "Avg Low": 70,
      "Avg Precipitation": 5.68
    },
    "Sep": {
      "Avg High": 87,
      "Avg Low": 64,
      "Avg Precipitation": 4.17
    },
    "Oct": {
      "Avg High": 78,
      "Avg Low": 53,
      "Avg Precipitation": 3.49
    },
    "Nov": {
      "Avg High": 69,
      "Avg Low": 43,
      "Avg Precipitation": 5.42
    },
    "Dec": {
      "Avg High": 61,
      "Avg Low": 38,
      "Avg Precipitation": 5.5
    }
  }
},{
  "_id": {
    "$oid": "618477df274b6bc63aaffc75"
  },
  "Location": {
    "State": "Arizona",
    "City": "Maricopa",
    "Long": "-112.16",
    "Lat": "33.09",
    "Alt": "1270ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 68,
      "Avg Low": 36,
      "Avg Precipitation": 0.83
    },
    "Feb": {
      "Avg High": 72,
      "Avg Low": 39,
      "Avg Precipitation": 0.88
    },
    "Mar": {
      "Avg High": 79,
      "Avg Low": 44,
      "Avg Precipitation": 1
    },
    "Apr": {
      "Avg High": 88,
      "Avg Low": 50,
      "Avg Precipitation": 0.28
    },
    "May": {
      "Avg High": 98,
      "Avg Low": 59,
      "Avg Precipitation": 0.17
    },
    "Jun": {
      "Avg High": 107,
      "Avg Low": 68,
      "Avg Precipitation": 0.08
    },
    "Jul": {
      "Avg High": 108,
      "Avg Low": 77,
      "Avg Precipitation": 0.98
    },
    "Sep": {
      "Avg High": 102,
      "Avg Low": 68,
      "Avg Precipitation": 0.72
    },
    "Oct": {
      "Avg High": 90,
      "Avg Low": 54,
      "Avg Precipitation": 0.47
    },
    "Nov": {
      "Avg High": 77,
      "Avg Low": 42,
      "Avg Precipitation": 0.58
    },
    "Dec": {
      "Avg High": 67,
      "Avg Low": 35,
      "Avg Precipitation": 0.97
    }
  }
},{
  "_id": {
    "$oid": "618477e3274b6bc63aaffc76"
  },
  "Location": {
    "State": "Arizona",
    "City": "Scottsdale",
    "Long": "-111.93",
    "Lat": "33.49",
    "Alt": "1260ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 66,
      "Avg Low": 43,
      "Avg Precipitation": 1.26
    },
    "Feb": {
      "Avg High": 69,
      "Avg Low": 46,
      "Avg Precipitation": 1.21
    },
    "Mar": {
      "Avg High": 75,
      "Avg Low": 50,
      "Avg Precipitation": 1.23
    },
    "Apr": {
      "Avg High": 83,
      "Avg Low": 57,
      "Avg Precipitation": 0.45
    },
    "May": {
      "Avg High": 92,
      "Avg Low": 66,
      "Avg Precipitation": 0.19
    },
    "Jun": {
      "Avg High": 101,
      "Avg Low": 75,
      "Avg Precipitation": 0.07
    },
    "Jul": {
      "Avg High": 104,
      "Avg Low": 81,
      "Avg Precipitation": 1.04
    },
    "Sep": {
      "Avg High": 98,
      "Avg Low": 74,
      "Avg Precipitation": 0.9
    },
    "Oct": {
      "Avg High": 87,
      "Avg Low": 62,
      "Avg Precipitation": 0.77
    },
    "Nov": {
      "Avg High": 74,
      "Avg Low": 49,
      "Avg Precipitation": 0.85
    },
    "Dec": {
      "Avg High": 65,
      "Avg Low": 42,
      "Avg Precipitation": 1.13
    }
  }
},{
  "_id": {
    "$oid": "618477e6274b6bc63aaffc77"
  },
  "Location": {
    "State": "Arizona",
    "City": "Sedona",
    "Long": "-111.76",
    "Lat": "34.87",
    "Alt": "4344ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 56,
      "Avg Low": 31,
      "Avg Precipitation": 2.09
    },
    "Feb": {
      "Avg High": 61,
      "Avg Low": 33,
      "Avg Precipitation": 2.17
    },
    "Mar": {
      "Avg High": 65,
      "Avg Low": 37,
      "Avg Precipitation": 2.48
    },
    "Apr": {
      "Avg High": 73,
      "Avg Low": 42,
      "Avg Precipitation": 1.14
    },
    "May": {
      "Avg High": 82,
      "Avg Low": 49,
      "Avg Precipitation": 0.71
    },
    "Jun": {
      "Avg High": 93,
      "Avg Low": 58,
      "Avg Precipitation": 0.35
    },
    "Jul": {
      "Avg High": 97,
      "Avg Low": 64,
      "Avg Precipitation": 1.65
    },
    "Sep": {
      "Avg High": 88,
      "Avg Low": 58,
      "Avg Precipitation": 1.93
    },
    "Oct": {
      "Avg High": 77,
      "Avg Low": 48,
      "Avg Precipitation": 1.65
    },
    "Nov": {
      "Avg High": 64,
      "Avg Low": 36,
      "Avg Precipitation": 1.38
    },
    "Dec": {
      "Avg High": 57,
      "Avg Low": 31,
      "Avg Precipitation": 1.5
    }
  }
},{
  "_id": {
    "$oid": "618477eb274b6bc63aaffc78"
  },
  "Location": {
    "State": "Arkansas",
    "City": "Harrison",
    "Long": "-93.11",
    "Lat": "36.23",
    "Alt": "1040ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 47,
      "Avg Low": 26,
      "Avg Precipitation": 2.56
    },
    "Feb": {
      "Avg High": 51,
      "Avg Low": 30,
      "Avg Precipitation": 2.64
    },
    "Mar": {
      "Avg High": 60,
      "Avg Low": 38,
      "Avg Precipitation": 3.79
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 47,
      "Avg Precipitation": 4.32
    },
    "May": {
      "Avg High": 76,
      "Avg Low": 55,
      "Avg Precipitation": 4.69
    },
    "Jun": {
      "Avg High": 84,
      "Avg Low": 63,
      "Avg Precipitation": 4.24
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 68,
      "Avg Precipitation": 3.14
    },
    "Sep": {
      "Avg High": 81,
      "Avg Low": 58,
      "Avg Precipitation": 4.2
    },
    "Oct": {
      "Avg High": 70,
      "Avg Low": 48,
      "Avg Precipitation": 3.55
    },
    "Nov": {
      "Avg High": 59,
      "Avg Low": 38,
      "Avg Precipitation": 4.23
    },
    "Dec": {
      "Avg High": 48,
      "Avg Low": 28,
      "Avg Precipitation": 3.2
    }
  }
},{
  "_id": {
    "$oid": "618477ef274b6bc63aaffc79"
  },
  "Location": {
    "State": "Arkansas",
    "City": "Newport",
    "Long": "-91.17",
    "Lat": "35.63",
    "Alt": "233ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 45,
      "Avg Low": 29,
      "Avg Precipitation": 3.56
    },
    "Feb": {
      "Avg High": 50,
      "Avg Low": 33,
      "Avg Precipitation": 3.67
    },
    "Mar": {
      "Avg High": 60,
      "Avg Low": 42,
      "Avg Precipitation": 4.56
    },
    "Apr": {
      "Avg High": 70,
      "Avg Low": 51,
      "Avg Precipitation": 4.85
    },
    "May": {
      "Avg High": 79,
      "Avg Low": 60,
      "Avg Precipitation": 4.95
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 69,
      "Avg Precipitation": 3.5
    },
    "Jul": {
      "Avg High": 90,
      "Avg Low": 72,
      "Avg Precipitation": 3.88
    },
    "Sep": {
      "Avg High": 83,
      "Avg Low": 62,
      "Avg Precipitation": 3.06
    },
    "Oct": {
      "Avg High": 72,
      "Avg Low": 50,
      "Avg Precipitation": 4.18
    },
    "Nov": {
      "Avg High": 59,
      "Avg Low": 41,
      "Avg Precipitation": 5.35
    },
    "Dec": {
      "Avg High": 48,
      "Avg Low": 32,
      "Avg Precipitation": 5.21
    }
  }
},{
  "_id": {
    "$oid": "618477f2274b6bc63aaffc7a"
  },
  "Location": {
    "State": "Arkansas",
    "City": "Portland",
    "Long": "-91.51",
    "Lat": "33.24",
    "Alt": "125ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 52,
      "Avg Low": 32,
      "Avg Precipitation": 5.17
    },
    "Feb": {
      "Avg High": 56,
      "Avg Low": 35,
      "Avg Precipitation": 5.72
    },
    "Mar": {
      "Avg High": 65,
      "Avg Low": 44,
      "Avg Precipitation": 4.72
    },
    "Apr": {
      "Avg High": 74,
      "Avg Low": 52,
      "Avg Precipitation": 4.63
    },
    "May": {
      "Avg High": 82,
      "Avg Low": 62,
      "Avg Precipitation": 4.87
    },
    "Jun": {
      "Avg High": 88,
      "Avg Low": 69,
      "Avg Precipitation": 3.83
    },
    "Jul": {
      "Avg High": 91,
      "Avg Low": 72,
      "Avg Precipitation": 4.25
    },
    "Sep": {
      "Avg High": 86,
      "Avg Low": 64,
      "Avg Precipitation": 3.13
    },
    "Oct": {
      "Avg High": 76,
      "Avg Low": 52,
      "Avg Precipitation": 4.7
    },
    "Nov": {
      "Avg High": 65,
      "Avg Low": 42,
      "Avg Precipitation": 4.94
    },
    "Dec": {
      "Avg High": 54,
      "Avg Low": 34,
      "Avg Precipitation": 5.76
    }
  }
},{
  "_id": {
    "$oid": "618477f5274b6bc63aaffc7b"
  },
  "Location": {
    "State": "California",
    "City": "Avalon",
    "Long": "-118.42",
    "Lat": "33.41",
    "Alt": "1585ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 65,
      "Avg Low": 49,
      "Avg Precipitation": 2.76
    },
    "Feb": {
      "Avg High": 64,
      "Avg Low": 50,
      "Avg Precipitation": 2.52
    },
    "Mar": {
      "Avg High": 65,
      "Avg Low": 52,
      "Avg Precipitation": 2.36
    },
    "Apr": {
      "Avg High": 68,
      "Avg Low": 54,
      "Avg Precipitation": 0.59
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 57,
      "Avg Precipitation": 0.12
    },
    "Jun": {
      "Avg High": 71,
      "Avg Low": 60,
      "Avg Precipitation": 0
    },
    "Jul": {
      "Avg High": 74,
      "Avg Low": 62,
      "Avg Precipitation": 0
    },
    "Sep": {
      "Avg High": 75,
      "Avg Low": 63,
      "Avg Precipitation": 0.28
    },
    "Oct": {
      "Avg High": 73,
      "Avg Low": 59,
      "Avg Precipitation": 0.24
    },
    "Nov": {
      "Avg High": 68,
      "Avg Low": 53,
      "Avg Precipitation": 1.1
    },
    "Dec": {
      "Avg High": 65,
      "Avg Low": 49,
      "Avg Precipitation": 1.81
    }
  }
},{
  "_id": {
    "$oid": "618477f8274b6bc63aaffc7c"
  },
  "Location": {
    "State": "California",
    "City": "Jackson",
    "Long": "-120.77",
    "Lat": "38.35",
    "Alt": "1217ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 58,
      "Avg Low": 33,
      "Avg Precipitation": 6.06
    },
    "Feb": {
      "Avg High": 62,
      "Avg Low": 35,
      "Avg Precipitation": 5.57
    },
    "Mar": {
      "Avg High": 67,
      "Avg Low": 38,
      "Avg Precipitation": 5.12
    },
    "Apr": {
      "Avg High": 73,
      "Avg Low": 40,
      "Avg Precipitation": 2.54
    },
    "May": {
      "Avg High": 82,
      "Avg Low": 46,
      "Avg Precipitation": 1.25
    },
    "Jun": {
      "Avg High": 90,
      "Avg Low": 50,
      "Avg Precipitation": 0.37
    },
    "Jul": {
      "Avg High": 97,
      "Avg Low": 56,
      "Avg Precipitation": 0.01
    },
    "Sep": {
      "Avg High": 90,
      "Avg Low": 50,
      "Avg Precipitation": 0.47
    },
    "Oct": {
      "Avg High": 79,
      "Avg Low": 45,
      "Avg Precipitation": 1.73
    },
    "Nov": {
      "Avg High": 66,
      "Avg Low": 38,
      "Avg Precipitation": 3.75
    },
    "Dec": {
      "Avg High": 57,
      "Avg Low": 33,
      "Avg Precipitation": 5.41
    }
  }
},{
  "_id": {
    "$oid": "618477fb274b6bc63aaffc7d"
  },
  "Location": {
    "State": "California",
    "City": "Laguna Beach",
    "Long": "-117.78",
    "Lat": "33.55",
    "Alt": "72ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 67,
      "Avg Low": 44,
      "Avg Precipitation": 2.76
    },
    "Feb": {
      "Avg High": 67,
      "Avg Low": 44,
      "Avg Precipitation": 2.95
    },
    "Mar": {
      "Avg High": 68,
      "Avg Low": 46,
      "Avg Precipitation": 2.6
    },
    "Apr": {
      "Avg High": 71,
      "Avg Low": 49,
      "Avg Precipitation": 0.83
    },
    "May": {
      "Avg High": 71,
      "Avg Low": 54,
      "Avg Precipitation": 0.24
    },
    "Jun": {
      "Avg High": 74,
      "Avg Low": 57,
      "Avg Precipitation": 0.12
    },
    "Jul": {
      "Avg High": 77,
      "Avg Low": 60,
      "Avg Precipitation": 0.04
    },
    "Sep": {
      "Avg High": 79,
      "Avg Low": 60,
      "Avg Precipitation": 0.35
    },
    "Oct": {
      "Avg High": 76,
      "Avg Low": 55,
      "Avg Precipitation": 0.47
    },
    "Nov": {
      "Avg High": 71,
      "Avg Low": 48,
      "Avg Precipitation": 1.22
    },
    "Dec": {
      "Avg High": 67,
      "Avg Low": 44,
      "Avg Precipitation": 1.85
    }
  }
},{
  "_id": {
    "$oid": "61847800274b6bc63aaffc7e"
  },
  "Location": {
    "State": "California",
    "City": "Los Angeles",
    "Long": "-118.24",
    "Lat": "34.05",
    "Alt": "285ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 67,
      "Avg Low": 51,
      "Avg Precipitation": 3.99
    },
    "Feb": {
      "Avg High": 67,
      "Avg Low": 51,
      "Avg Precipitation": 5.07
    },
    "Mar": {
      "Avg High": 67,
      "Avg Low": 51,
      "Avg Precipitation": 2.84
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 53,
      "Avg Precipitation": 0.97
    },
    "May": {
      "Avg High": 70,
      "Avg Low": 56,
      "Avg Precipitation": 0.31
    },
    "Jun": {
      "Avg High": 73,
      "Avg Low": 58,
      "Avg Precipitation": 0.11
    },
    "Jul": {
      "Avg High": 77,
      "Avg Low": 62,
      "Avg Precipitation": 0.02
    },
    "Sep": {
      "Avg High": 78,
      "Avg Low": 62,
      "Avg Precipitation": 0.25
    },
    "Oct": {
      "Avg High": 75,
      "Avg Low": 59,
      "Avg Precipitation": 0.91
    },
    "Nov": {
      "Avg High": 71,
      "Avg Low": 55,
      "Avg Precipitation": 1.36
    },
    "Dec": {
      "Avg High": 67,
      "Avg Low": 51,
      "Avg Precipitation": 2.75
    }
  }
},{
  "_id": {
    "$oid": "61847803274b6bc63aaffc7f"
  },
  "Location": {
    "State": "California",
    "City": "Maricopa",
    "Long": "-119.4",
    "Lat": "35.06",
    "Alt": "869ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 57,
      "Avg Low": 39,
      "Avg Precipitation": 1.14
    },
    "Feb": {
      "Avg High": 64,
      "Avg Low": 43,
      "Avg Precipitation": 1.14
    },
    "Mar": {
      "Avg High": 69,
      "Avg Low": 46,
      "Avg Precipitation": 1.42
    },
    "Apr": {
      "Avg High": 76,
      "Avg Low": 49,
      "Avg Precipitation": 0.51
    },
    "May": {
      "Avg High": 84,
      "Avg Low": 57,
      "Avg Precipitation": 0.2
    },
    "Jun": {
      "Avg High": 92,
      "Avg Low": 64,
      "Avg Precipitation": 0.04
    },
    "Jul": {
      "Avg High": 97,
      "Avg Low": 70,
      "Avg Precipitation": 0
    },
    "Sep": {
      "Avg High": 90,
      "Avg Low": 65,
      "Avg Precipitation": 0.28
    },
    "Oct": {
      "Avg High": 80,
      "Avg Low": 57,
      "Avg Precipitation": 0.2
    },
    "Nov": {
      "Avg High": 66,
      "Avg Low": 45,
      "Avg Precipitation": 0.63
    },
    "Dec": {
      "Avg High": 57,
      "Avg Low": 38,
      "Avg Precipitation": 0.71
    }
  }
},{
  "_id": {
    "$oid": "61847806274b6bc63aaffc80"
  },
  "Location": {
    "State": "California",
    "City": "Paso Robles",
    "Long": "-120.66",
    "Lat": "35.63",
    "Alt": "928ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 60,
      "Avg Low": 35,
      "Avg Precipitation": 2.75
    },
    "Feb": {
      "Avg High": 62,
      "Avg Low": 38,
      "Avg Precipitation": 2.59
    },
    "Mar": {
      "Avg High": 66,
      "Avg Low": 40,
      "Avg Precipitation": 2.49
    },
    "Apr": {
      "Avg High": 73,
      "Avg Low": 41,
      "Avg Precipitation": 0.68
    },
    "May": {
      "Avg High": 81,
      "Avg Low": 46,
      "Avg Precipitation": 0.26
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 50,
      "Avg Precipitation": 0.02
    },
    "Jul": {
      "Avg High": 93,
      "Avg Low": 54,
      "Avg Precipitation": 0
    },
    "Sep": {
      "Avg High": 88,
      "Avg Low": 51,
      "Avg Precipitation": 0.22
    },
    "Oct": {
      "Avg High": 79,
      "Avg Low": 44,
      "Avg Precipitation": 0.62
    },
    "Nov": {
      "Avg High": 67,
      "Avg Low": 38,
      "Avg Precipitation": 1.03
    },
    "Dec": {
      "Avg High": 59,
      "Avg Low": 34,
      "Avg Precipitation": 2.01
    }
  }
},{
  "_id": {
    "$oid": "6184780a274b6bc63aaffc81"
  },
  "Location": {
    "State": "California",
    "City": "Riverside",
    "Long": "-117.4",
    "Lat": "33.95",
    "Alt": "830ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 68,
      "Avg Low": 43,
      "Avg Precipitation": 2.33
    },
    "Feb": {
      "Avg High": 68,
      "Avg Low": 44,
      "Avg Precipitation": 2.42
    },
    "Mar": {
      "Avg High": 71,
      "Avg Low": 46,
      "Avg Precipitation": 1.69
    },
    "Apr": {
      "Avg High": 76,
      "Avg Low": 49,
      "Avg Precipitation": 0.68
    },
    "May": {
      "Avg High": 80,
      "Avg Low": 54,
      "Avg Precipitation": 0.2
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 57,
      "Avg Precipitation": 0.09
    },
    "Jul": {
      "Avg High": 94,
      "Avg Low": 62,
      "Avg Precipitation": 0.04
    },
    "Sep": {
      "Avg High": 91,
      "Avg Low": 59,
      "Avg Precipitation": 0.16
    },
    "Oct": {
      "Avg High": 83,
      "Avg Low": 53,
      "Avg Precipitation": 0.46
    },
    "Nov": {
      "Avg High": 74,
      "Avg Low": 46,
      "Avg Precipitation": 0.81
    },
    "Dec": {
      "Avg High": 67,
      "Avg Low": 42,
      "Avg Precipitation": 1.37
    }
  }
},{
  "_id": {
    "$oid": "6184780d274b6bc63aaffc82"
  },
  "Location": {
    "State": "California",
    "City": "San Diego",
    "Long": "-117.16",
    "Lat": "32.72",
    "Alt": "62ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 65,
      "Avg Low": 48,
      "Avg Precipitation": 1.53
    },
    "Feb": {
      "Avg High": 76,
      "Avg Low": 65,
      "Avg Precipitation": 0.15
    },
    "Mar": {
      "Avg High": 73,
      "Avg Low": 61,
      "Avg Precipitation": 0.57
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 54,
      "Avg Precipitation": 1.01
    },
    "May": {
      "Avg High": 76,
      "Avg Low": 67,
      "Avg Precipitation": 0.02
    },
    "Jun": {
      "Avg High": 75,
      "Avg Low": 65,
      "Avg Precipitation": 0.03
    },
    "Jul": {
      "Avg High": 71,
      "Avg Low": 62,
      "Avg Precipitation": 0.07
    },
    "Sep": {
      "Avg High": 67,
      "Avg Low": 56,
      "Avg Precipitation": 0.78
    },
    "Oct": {
      "Avg High": 66,
      "Avg Low": 53,
      "Avg Precipitation": 1.81
    },
    "Nov": {
      "Avg High": 65,
      "Avg Low": 51,
      "Avg Precipitation": 2.27
    },
    "Dec": {
      "Avg High": 65,
      "Avg Low": 49,
      "Avg Precipitation": 1.98
    }
  }
},{
  "_id": {
    "$oid": "61847811274b6bc63aaffc83"
  },
  "Location": {
    "State": "California",
    "City": "San Luis Obispo",
    "Long": "-120.66",
    "Lat": "35.28",
    "Alt": "236ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 64,
      "Avg Low": 41,
      "Avg Precipitation": 3.66
    },
    "Feb": {
      "Avg High": 64,
      "Avg Low": 42,
      "Avg Precipitation": 3.65
    },
    "Mar": {
      "Avg High": 65,
      "Avg Low": 44,
      "Avg Precipitation": 3.2
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 45,
      "Avg Precipitation": 1.11
    },
    "May": {
      "Avg High": 72,
      "Avg Low": 48,
      "Avg Precipitation": 0.38
    },
    "Jun": {
      "Avg High": 75,
      "Avg Low": 51,
      "Avg Precipitation": 0.07
    },
    "Jul": {
      "Avg High": 77,
      "Avg Low": 54,
      "Avg Precipitation": 0.02
    },
    "Sep": {
      "Avg High": 79,
      "Avg Low": 54,
      "Avg Precipitation": 0.21
    },
    "Oct": {
      "Avg High": 76,
      "Avg Low": 49,
      "Avg Precipitation": 0.88
    },
    "Nov": {
      "Avg High": 70,
      "Avg Low": 44,
      "Avg Precipitation": 1.75
    },
    "Dec": {
      "Avg High": 64,
      "Avg Low": 40,
      "Avg Precipitation": 4.04
    }
  }
},{
  "_id": {
    "$oid": "61847814274b6bc63aaffc84"
  },
  "Location": {
    "State": "California",
    "City": "Santa Barbara",
    "Long": "-119.7",
    "Lat": "34.42",
    "Alt": "39ft"
  },
  "Climate": {
    "Jan": {
      "Avg High": 65,
      "Avg Low": 46,
      "Avg Precipitation": 4.36
    },
    "Feb": {
      "Avg High": 65,
      "Avg Low": 48,
      "Avg Precipitation": 4.55
    },
    "Mar": {
      "Avg High": 66,
      "Avg Low": 50,
      "Avg Precipitation": 2.92
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 52,
      "Avg Precipitation": 1.24
    },
    "May": {
      "Avg High": 70,
      "Avg Low": 55,
      "Avg Precipitation": 0.33
    },
    "Jun": {
      "Avg High": 71,
      "Avg Low": 58,
      "Avg Precipitation": 0.09
    },
    "Jul": {
      "Avg High": 75,
      "Avg Low": 60,
      "Avg Precipitation": 0.02
    },
    "Sep": {
      "Avg High": 75,
      "Avg Low": 60,
      "Avg Precipitation": 0.14
    },
    "Oct": {
      "Avg High": 73,
      "Avg Low": 56,
      "Avg Precipitation": 0.9
    },
    "Nov": {
      "Avg High": 69,
      "Avg Low": 50,
      "Avg Precipitation": 1.79
    },
    "Dec": {
      "Avg High": 65,
      "Avg Low": 47,
      "Avg Precipitation": 3.04
    }
  }
}]
 
 // An array that will store the created cityMarkers
var cityMarkers = [];

for (var i = 0; i < cities.length; i++) {
  // loop through the cities array, create a new marker, and push it to the cityMarkers array
  cityMarkers.push(
    L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
  );
}

// const stations = require('../climate.json');
// console.log(stations);

// fetch('../climate.json')
// .then(response => {
//    return response.json();
// })
// .then(stations => console.log(stations));

// const stations = $.getJSON( '../climate.json', function(data){
//   console.log(stations)});

// var climateHeatArray = [];

// for (var i = 0; i < stations.length; i++) {
//   var location = (stations[i].lat, stations[i].lon);

//   if (location) {
//     climateHeatArray.push(location['Climate']['Jan']["Avg High"]);
//     }
//   };

// var heat = L.heatLayer(climateHeatArray, {
//   radius: 20,
//   blur: 35
// }).addTo(myMap);

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

//Trying to add a scale to the map(it worked)
L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomright'
}).addTo(myMap)
