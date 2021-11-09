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
    "$oid": "618870a2f8e3c4669ee64556"
  },
  "Location": {
    "State": "Alabama",
    "City": "Ashland",
    "Long": -85.84,
    "Lat": 33.27
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
    "$oid": "618870a5f8e3c4669ee64557"
  },
  "Location": {
    "State": "Alabama",
    "City": "Jackson",
    "Long": -87.89,
    "Lat": 31.51
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
    "$oid": "618870a8f8e3c4669ee64558"
  },
  "Location": {
    "State": "Arizona",
    "City": "Maricopa",
    "Long": -112.16,
    "Lat": 33.09
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
    "$oid": "618870acf8e3c4669ee64559"
  },
  "Location": {
    "State": "Arizona",
    "City": "Scottsdale",
    "Long": -111.93,
    "Lat": 33.49
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
    "$oid": "618870aef8e3c4669ee6455a"
  },
  "Location": {
    "State": "Arizona",
    "City": "Sedona",
    "Long": -111.76,
    "Lat": 34.87
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
    "$oid": "618870b2f8e3c4669ee6455b"
  },
  "Location": {
    "State": "Arkansas",
    "City": "Harrison",
    "Long": -93.11,
    "Lat": 36.23
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
    "$oid": "618870b5f8e3c4669ee6455c"
  },
  "Location": {
    "State": "Arkansas",
    "City": "Newport",
    "Long": -91.17,
    "Lat": 35.63
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
    "$oid": "618870b9f8e3c4669ee6455d"
  },
  "Location": {
    "State": "Arkansas",
    "City": "Portland",
    "Long": -91.51,
    "Lat": 33.24
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
    "$oid": "618870bbf8e3c4669ee6455e"
  },
  "Location": {
    "State": "California",
    "City": "Avalon",
    "Long": -118.42,
    "Lat": 33.41
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
    "$oid": "618870bef8e3c4669ee6455f"
  },
  "Location": {
    "State": "California",
    "City": "Jackson",
    "Long": -120.77,
    "Lat": 38.35
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
    "$oid": "618870c1f8e3c4669ee64560"
  },
  "Location": {
    "State": "California",
    "City": "Laguna Beach",
    "Long": -117.78,
    "Lat": 33.55
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
    "$oid": "618870c5f8e3c4669ee64561"
  },
  "Location": {
    "State": "California",
    "City": "Los Angeles",
    "Long": -118.24,
    "Lat": 34.05
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
    "$oid": "618870c7f8e3c4669ee64562"
  },
  "Location": {
    "State": "California",
    "City": "Maricopa",
    "Long": -119.4,
    "Lat": 35.06
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
    "$oid": "618870cbf8e3c4669ee64563"
  },
  "Location": {
    "State": "California",
    "City": "Paso Robles",
    "Long": -120.66,
    "Lat": 35.63
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
    "$oid": "618870cff8e3c4669ee64564"
  },
  "Location": {
    "State": "California",
    "City": "Riverside",
    "Long": -117.4,
    "Lat": 33.95
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
    "$oid": "618870d2f8e3c4669ee64565"
  },
  "Location": {
    "State": "California",
    "City": "San Diego",
    "Long": -117.16,
    "Lat": 32.72
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
    "$oid": "618870d5f8e3c4669ee64566"
  },
  "Location": {
    "State": "California",
    "City": "San Luis Obispo",
    "Long": -120.66,
    "Lat": 35.28
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
    "$oid": "618870d9f8e3c4669ee64567"
  },
  "Location": {
    "State": "California",
    "City": "Santa Barbara",
    "Long": -119.7,
    "Lat": 34.42
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
},{
  "_id": {
    "$oid": "618870dcf8e3c4669ee64568"
  },
  "Location": {
    "State": "Colorado",
    "City": "Durango",
    "Long": -107.88,
    "Lat": 37.28
  },
  "Climate": {
    "Jan": {
      "Avg High": 41,
      "Avg Low": 13,
      "Avg Precipitation": "NaN"
    },
    "Feb": {
      "Avg High": 47,
      "Avg Low": 19,
      "Avg Precipitation": "NaN"
    },
    "Mar": {
      "Avg High": 55,
      "Avg Low": 24,
      "Avg Precipitation": "NaN"
    },
    "Apr": {
      "Avg High": 62,
      "Avg Low": 31,
      "Avg Precipitation": "NaN"
    },
    "May": {
      "Avg High": 73,
      "Avg Low": 37,
      "Avg Precipitation": "NaN"
    },
    "Jun": {
      "Avg High": 86,
      "Avg Low": 44,
      "Avg Precipitation": "NaN"
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 51,
      "Avg Precipitation": "NaN"
    },
    "Sep": {
      "Avg High": 79,
      "Avg Low": 42,
      "Avg Precipitation": "NaN"
    },
    "Oct": {
      "Avg High": 66,
      "Avg Low": 32,
      "Avg Precipitation": "NaN"
    },
    "Nov": {
      "Avg High": 52,
      "Avg Low": 23,
      "Avg Precipitation": "NaN"
    },
    "Dec": {
      "Avg High": 42,
      "Avg Low": 15,
      "Avg Precipitation": "NaN"
    }
  }
},{
  "_id": {
    "$oid": "618870dff8e3c4669ee64569"
  },
  "Location": {
    "State": "Colorado",
    "City": "Estes Park",
    "Long": -105.52,
    "Lat": 40.38
  },
  "Climate": {
    "Jan": {
      "Avg High": 39,
      "Avg Low": 18,
      "Avg Precipitation": 0.31
    },
    "Feb": {
      "Avg High": 41,
      "Avg Low": 19,
      "Avg Precipitation": 0.47
    },
    "Mar": {
      "Avg High": 47,
      "Avg Low": 23,
      "Avg Precipitation": 0.91
    },
    "Apr": {
      "Avg High": 53,
      "Avg Low": 27,
      "Avg Precipitation": 1.42
    },
    "May": {
      "Avg High": 62,
      "Avg Low": 35,
      "Avg Precipitation": 2.13
    },
    "Jun": {
      "Avg High": 73,
      "Avg Low": 42,
      "Avg Precipitation": 1.42
    },
    "Jul": {
      "Avg High": 79,
      "Avg Low": 47,
      "Avg Precipitation": 2.17
    },
    "Sep": {
      "Avg High": 70,
      "Avg Low": 39,
      "Avg Precipitation": 1.22
    },
    "Oct": {
      "Avg High": 59,
      "Avg Low": 31,
      "Avg Precipitation": 0.94
    },
    "Nov": {
      "Avg High": 46,
      "Avg Low": 24,
      "Avg Precipitation": 0.63
    },
    "Dec": {
      "Avg High": 40,
      "Avg Low": 18,
      "Avg Precipitation": 0.35
    }
  }
},{
  "_id": {
    "$oid": "618870e1f8e3c4669ee6456a"
  },
  "Location": {
    "State": "District of Columbia",
    "City": "Washington",
    "Long": -77.04,
    "Lat": 38.85
  },
  "Climate": {
    "Jan": {
      "Avg High": 42,
      "Avg Low": 27,
      "Avg Precipitation": 3.03
    },
    "Feb": {
      "Avg High": 44,
      "Avg Low": 28,
      "Avg Precipitation": 2.48
    },
    "Mar": {
      "Avg High": 53,
      "Avg Low": 35,
      "Avg Precipitation": 3.23
    },
    "Apr": {
      "Avg High": 64,
      "Avg Low": 44,
      "Avg Precipitation": 3.15
    },
    "May": {
      "Avg High": 75,
      "Avg Low": 54,
      "Avg Precipitation": 4.13
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 63,
      "Avg Precipitation": 3.23
    },
    "Jul": {
      "Avg High": 87,
      "Avg Low": 68,
      "Avg Precipitation": 4.13
    },
    "Sep": {
      "Avg High": 78,
      "Avg Low": 59,
      "Avg Precipitation": 3.82
    },
    "Oct": {
      "Avg High": 67,
      "Avg Low": 48,
      "Avg Precipitation": 3.07
    },
    "Nov": {
      "Avg High": 55,
      "Avg Low": 38,
      "Avg Precipitation": 2.83
    },
    "Dec": {
      "Avg High": 45,
      "Avg Low": 29,
      "Avg Precipitation": 2.8
    }
  }
},{
  "_id": {
    "$oid": "618870e5f8e3c4669ee6456b"
  },
  "Location": {
    "State": "Florida",
    "City": "Key West",
    "Long": -81.76,
    "Lat": 24.56
  },
  "Climate": {
    "Jan": {
      "Avg High": 74,
      "Avg Low": 64,
      "Avg Precipitation": 2.04
    },
    "Feb": {
      "Avg High": 76,
      "Avg Low": 66,
      "Avg Precipitation": 1.49
    },
    "Mar": {
      "Avg High": 78,
      "Avg Low": 68,
      "Avg Precipitation": 2.05
    },
    "Apr": {
      "Avg High": 81,
      "Avg Low": 72,
      "Avg Precipitation": 2.05
    },
    "May": {
      "Avg High": 85,
      "Avg Low": 76,
      "Avg Precipitation": 3
    },
    "Jun": {
      "Avg High": 88,
      "Avg Low": 79,
      "Avg Precipitation": 4.11
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 80,
      "Avg Precipitation": 3.55
    },
    "Sep": {
      "Avg High": 88,
      "Avg Low": 78,
      "Avg Precipitation": 6.71
    },
    "Oct": {
      "Avg High": 85,
      "Avg Low": 76,
      "Avg Precipitation": 4.93
    },
    "Nov": {
      "Avg High": 80,
      "Avg Low": 72,
      "Avg Precipitation": 2.3
    },
    "Dec": {
      "Avg High": 76,
      "Avg Low": 67,
      "Avg Precipitation": 2.22
    }
  }
},{
  "_id": {
    "$oid": "618870e9f8e3c4669ee6456c"
  },
  "Location": {
    "State": "Georgia",
    "City": "Cleveland",
    "Long": -83.76,
    "Lat": 34.6
  },
  "Climate": {
    "Jan": {
      "Avg High": 50,
      "Avg Low": 24,
      "Avg Precipitation": 5.89
    },
    "Feb": {
      "Avg High": 53,
      "Avg Low": 28,
      "Avg Precipitation": 5.74
    },
    "Mar": {
      "Avg High": 61,
      "Avg Low": 34,
      "Avg Precipitation": 5.63
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 41,
      "Avg Precipitation": 4.39
    },
    "May": {
      "Avg High": 76,
      "Avg Low": 49,
      "Avg Precipitation": 4.63
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 59,
      "Avg Precipitation": 4.62
    },
    "Jul": {
      "Avg High": 86,
      "Avg Low": 63,
      "Avg Precipitation": 4.96
    },
    "Sep": {
      "Avg High": 79,
      "Avg Low": 56,
      "Avg Precipitation": 5.12
    },
    "Oct": {
      "Avg High": 71,
      "Avg Low": 44,
      "Avg Precipitation": 4.93
    },
    "Nov": {
      "Avg High": 62,
      "Avg Low": 35,
      "Avg Precipitation": 5.1
    },
    "Dec": {
      "Avg High": 52,
      "Avg Low": 28,
      "Avg Precipitation": 5.74
    }
  }
},{
  "_id": {
    "$oid": "618870ecf8e3c4669ee6456d"
  },
  "Location": {
    "State": "Georgia",
    "City": "Fargo",
    "Long": -82.57,
    "Lat": 30.68
  },
  "Climate": {
    "Jan": {
      "Avg High": 63,
      "Avg Low": 39,
      "Avg Precipitation": 4
    },
    "Feb": {
      "Avg High": 68,
      "Avg Low": 43,
      "Avg Precipitation": 3.74
    },
    "Mar": {
      "Avg High": 74,
      "Avg Low": 48,
      "Avg Precipitation": 4.47
    },
    "Apr": {
      "Avg High": 80,
      "Avg Low": 54,
      "Avg Precipitation": 2.92
    },
    "May": {
      "Avg High": 87,
      "Avg Low": 61,
      "Avg Precipitation": 2.18
    },
    "Jun": {
      "Avg High": 92,
      "Avg Low": 68,
      "Avg Precipitation": 5.79
    },
    "Jul": {
      "Avg High": 93,
      "Avg Low": 71,
      "Avg Precipitation": 6.57
    },
    "Sep": {
      "Avg High": 88,
      "Avg Low": 67,
      "Avg Precipitation": 4.23
    },
    "Oct": {
      "Avg High": 81,
      "Avg Low": 57,
      "Avg Precipitation": 3.4
    },
    "Nov": {
      "Avg High": 73,
      "Avg Low": 49,
      "Avg Precipitation": 2.18
    },
    "Dec": {
      "Avg High": 65,
      "Avg Low": 41,
      "Avg Precipitation": 2.83
    }
  }
},{
  "_id": {
    "$oid": "618870f0f8e3c4669ee6456e"
  },
  "Location": {
    "State": "Georgia",
    "City": "Washington",
    "Long": -82.82,
    "Lat": 33.78
  },
  "Climate": {
    "Jan": {
      "Avg High": 53,
      "Avg Low": 31,
      "Avg Precipitation": 0
    },
    "Feb": {
      "Avg High": 58,
      "Avg Low": 35,
      "Avg Precipitation": 4.34
    },
    "Mar": {
      "Avg High": 66,
      "Avg Low": 41,
      "Avg Precipitation": 4.37
    },
    "Apr": {
      "Avg High": 74,
      "Avg Low": 48,
      "Avg Precipitation": 3.09
    },
    "May": {
      "Avg High": 81,
      "Avg Low": 57,
      "Avg Precipitation": 3.09
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 65,
      "Avg Precipitation": 3.55
    },
    "Jul": {
      "Avg High": 90,
      "Avg Low": 69,
      "Avg Precipitation": 3.99
    },
    "Sep": {
      "Avg High": 83,
      "Avg Low": 62,
      "Avg Precipitation": 3.49
    },
    "Oct": {
      "Avg High": 74,
      "Avg Low": 51,
      "Avg Precipitation": 3.38
    },
    "Nov": {
      "Avg High": 65,
      "Avg Low": 42,
      "Avg Precipitation": 3.21
    },
    "Dec": {
      "Avg High": 55,
      "Avg Low": 34,
      "Avg Precipitation": 3.59
    }
  }
},{
  "_id": {
    "$oid": "618870f2f8e3c4669ee6456f"
  },
  "Location": {
    "State": "Hawaii",
    "City": "Lahaina",
    "Long": -156.67,
    "Lat": 20.88
  },
  "Climate": {
    "Jan": {
      "Avg High": 82,
      "Avg Low": 64,
      "Avg Precipitation": 2.99
    },
    "Feb": {
      "Avg High": 82,
      "Avg Low": 64,
      "Avg Precipitation": 2.2
    },
    "Mar": {
      "Avg High": 83,
      "Avg Low": 65,
      "Avg Precipitation": 1.5
    },
    "Apr": {
      "Avg High": 84,
      "Avg Low": 66,
      "Avg Precipitation": 0.83
    },
    "May": {
      "Avg High": 85,
      "Avg Low": 67,
      "Avg Precipitation": 0.43
    },
    "Jun": {
      "Avg High": 86,
      "Avg Low": 69,
      "Avg Precipitation": 0.08
    },
    "Jul": {
      "Avg High": 87,
      "Avg Low": 70,
      "Avg Precipitation": 0.08
    },
    "Sep": {
      "Avg High": 88,
      "Avg Low": 71,
      "Avg Precipitation": 0.31
    },
    "Oct": {
      "Avg High": 87,
      "Avg Low": 70,
      "Avg Precipitation": 0.98
    },
    "Nov": {
      "Avg High": 85,
      "Avg Low": 68,
      "Avg Precipitation": 1.46
    },
    "Dec": {
      "Avg High": 83,
      "Avg Low": 66,
      "Avg Precipitation": 2.52
    }
  }
},{
  "_id": {
    "$oid": "618870f8f8e3c4669ee64570"
  },
  "Location": {
    "State": "Hawaii",
    "City": "Lihue",
    "Long": -159.34,
    "Lat": 21.98
  },
  "Climate": {
    "Jan": {
      "Avg High": 78,
      "Avg Low": 65,
      "Avg Precipitation": 3.75
    },
    "Feb": {
      "Avg High": 78,
      "Avg Low": 65,
      "Avg Precipitation": 3.16
    },
    "Mar": {
      "Avg High": 78,
      "Avg Low": 67,
      "Avg Precipitation": 4.61
    },
    "Apr": {
      "Avg High": 79,
      "Avg Low": 69,
      "Avg Precipitation": 2.25
    },
    "May": {
      "Avg High": 81,
      "Avg Low": 70,
      "Avg Precipitation": 2.07
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 73,
      "Avg Precipitation": 1.61
    },
    "Jul": {
      "Avg High": 84,
      "Avg Low": 74,
      "Avg Precipitation": 1.87
    },
    "Sep": {
      "Avg High": 85,
      "Avg Low": 74,
      "Avg Precipitation": 2.12
    },
    "Oct": {
      "Avg High": 83,
      "Avg Low": 73,
      "Avg Precipitation": 3.82
    },
    "Nov": {
      "Avg High": 81,
      "Avg Low": 71,
      "Avg Precipitation": 4.46
    },
    "Dec": {
      "Avg High": 79,
      "Avg Low": 68,
      "Avg Precipitation": 5.2
    }
  }
},{
  "_id": {
    "$oid": "618870fcf8e3c4669ee64571"
  },
  "Location": {
    "State": "Idaho",
    "City": "Cambridge",
    "Long": -116.68,
    "Lat": 44.57
  },
  "Climate": {
    "Jan": {
      "Avg High": 31,
      "Avg Low": 16,
      "Avg Precipitation": 2.89
    },
    "Feb": {
      "Avg High": 38,
      "Avg Low": 19,
      "Avg Precipitation": 2.34
    },
    "Mar": {
      "Avg High": 52,
      "Avg Low": 29,
      "Avg Precipitation": 2.1
    },
    "Apr": {
      "Avg High": 63,
      "Avg Low": 35,
      "Avg Precipitation": 1.43
    },
    "May": {
      "Avg High": 73,
      "Avg Low": 42,
      "Avg Precipitation": 1.7
    },
    "Jun": {
      "Avg High": 82,
      "Avg Low": 49,
      "Avg Precipitation": 1.19
    },
    "Jul": {
      "Avg High": 93,
      "Avg Low": 55,
      "Avg Precipitation": 0.39
    },
    "Sep": {
      "Avg High": 81,
      "Avg Low": 44,
      "Avg Precipitation": 0.7
    },
    "Oct": {
      "Avg High": 65,
      "Avg Low": 34,
      "Avg Precipitation": 1.28
    },
    "Nov": {
      "Avg High": 45,
      "Avg Low": 26,
      "Avg Precipitation": 2.73
    },
    "Dec": {
      "Avg High": 32,
      "Avg Low": 17,
      "Avg Precipitation": 3.81
    }
  }
},{
  "_id": {
    "$oid": "618870fff8e3c4669ee64572"
  },
  "Location": {
    "State": "Illinois",
    "City": "Charleston",
    "Long": -88.18,
    "Lat": 39.5
  },
  "Climate": {
    "Jan": {
      "Avg High": 36,
      "Avg Low": 20,
      "Avg Precipitation": 2.49
    },
    "Feb": {
      "Avg High": 42,
      "Avg Low": 24,
      "Avg Precipitation": 2.51
    },
    "Mar": {
      "Avg High": 53,
      "Avg Low": 33,
      "Avg Precipitation": 2.89
    },
    "Apr": {
      "Avg High": 66,
      "Avg Low": 44,
      "Avg Precipitation": 4.29
    },
    "May": {
      "Avg High": 75,
      "Avg Low": 53,
      "Avg Precipitation": 4.62
    },
    "Jun": {
      "Avg High": 84,
      "Avg Low": 62,
      "Avg Precipitation": 4.35
    },
    "Jul": {
      "Avg High": 86,
      "Avg Low": 66,
      "Avg Precipitation": 4.47
    },
    "Sep": {
      "Avg High": 79,
      "Avg Low": 56,
      "Avg Precipitation": 3.24
    },
    "Oct": {
      "Avg High": 67,
      "Avg Low": 46,
      "Avg Precipitation": 3.76
    },
    "Nov": {
      "Avg High": 53,
      "Avg Low": 36,
      "Avg Precipitation": 3.97
    },
    "Dec": {
      "Avg High": 40,
      "Avg Low": 24,
      "Avg Precipitation": 3.15
    }
  }
},{
  "_id": {
    "$oid": "61887102f8e3c4669ee64573"
  },
  "Location": {
    "State": "Illinois",
    "City": "Chicago",
    "Long": -87.63,
    "Lat": 41.88
  },
  "Climate": {
    "Jan": {
      "Avg High": 32,
      "Avg Low": 18,
      "Avg Precipitation": 2.05
    },
    "Feb": {
      "Avg High": 36,
      "Avg Low": 21,
      "Avg Precipitation": 1.93
    },
    "Mar": {
      "Avg High": 46,
      "Avg Low": 30,
      "Avg Precipitation": 2.72
    },
    "Apr": {
      "Avg High": 59,
      "Avg Low": 41,
      "Avg Precipitation": 3.62
    },
    "May": {
      "Avg High": 70,
      "Avg Low": 52,
      "Avg Precipitation": 4.13
    },
    "Jun": {
      "Avg High": 81,
      "Avg Low": 63,
      "Avg Precipitation": 4.06
    },
    "Jul": {
      "Avg High": 84,
      "Avg Low": 68,
      "Avg Precipitation": 4.02
    },
    "Sep": {
      "Avg High": 75,
      "Avg Low": 57,
      "Avg Precipitation": 3.31
    },
    "Oct": {
      "Avg High": 63,
      "Avg Low": 46,
      "Avg Precipitation": 3.23
    },
    "Nov": {
      "Avg High": 48,
      "Avg Low": 34,
      "Avg Precipitation": 3.43
    },
    "Dec": {
      "Avg High": 36,
      "Avg Low": 23,
      "Avg Precipitation": 2.56
    }
  }
},{
  "_id": {
    "$oid": "61887105f8e3c4669ee64574"
  },
  "Location": {
    "State": "Illinois",
    "City": "Chicago",
    "Long": -87.63,
    "Lat": 41.88
  },
  "Climate": {
    "Jan": {
      "Avg High": 32,
      "Avg Low": 18,
      "Avg Precipitation": 1.85
    },
    "Feb": {
      "Avg High": 34,
      "Avg Low": 20,
      "Avg Precipitation": 1.61
    },
    "Mar": {
      "Avg High": 43,
      "Avg Low": 29,
      "Avg Precipitation": 2.76
    },
    "Apr": {
      "Avg High": 55,
      "Avg Low": 40,
      "Avg Precipitation": 3.03
    },
    "May": {
      "Avg High": 65,
      "Avg Low": 50,
      "Avg Precipitation": 3.74
    },
    "Jun": {
      "Avg High": 75,
      "Avg Low": 60,
      "Avg Precipitation": 4.06
    },
    "Jul": {
      "Avg High": 81,
      "Avg Low": 66,
      "Avg Precipitation": 3.39
    },
    "Sep": {
      "Avg High": 73,
      "Avg Low": 58,
      "Avg Precipitation": 2.72
    },
    "Oct": {
      "Avg High": 61,
      "Avg Low": 47,
      "Avg Precipitation": 2.8
    },
    "Nov": {
      "Avg High": 47,
      "Avg Low": 34,
      "Avg Precipitation": 2.2
    },
    "Dec": {
      "Avg High": 36,
      "Avg Low": 23,
      "Avg Precipitation": 1.89
    }
  }
},{
  "_id": {
    "$oid": "61887108f8e3c4669ee64575"
  },
  "Location": {
    "State": "Illinois",
    "City": "Hennepin",
    "Long": -89.34,
    "Lat": 41.25
  },
  "Climate": {
    "Jan": {
      "Avg High": 30,
      "Avg Low": 13,
      "Avg Precipitation": 1.14
    },
    "Feb": {
      "Avg High": 36,
      "Avg Low": 19,
      "Avg Precipitation": 1.14
    },
    "Mar": {
      "Avg High": 48,
      "Avg Low": 29,
      "Avg Precipitation": 2.17
    },
    "Apr": {
      "Avg High": 62,
      "Avg Low": 39,
      "Avg Precipitation": 3.23
    },
    "May": {
      "Avg High": 73,
      "Avg Low": 50,
      "Avg Precipitation": 3.62
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 59,
      "Avg Precipitation": 4.21
    },
    "Jul": {
      "Avg High": 86,
      "Avg Low": 64,
      "Avg Precipitation": 3.78
    },
    "Sep": {
      "Avg High": 77,
      "Avg Low": 53,
      "Avg Precipitation": 3.62
    },
    "Oct": {
      "Avg High": 65,
      "Avg Low": 41,
      "Avg Precipitation": 2.72
    },
    "Nov": {
      "Avg High": 49,
      "Avg Low": 31,
      "Avg Precipitation": 2.48
    },
    "Dec": {
      "Avg High": 36,
      "Avg Low": 19,
      "Avg Precipitation": 2.05
    }
  }
},{
  "_id": {
    "$oid": "6188710bf8e3c4669ee64576"
  },
  "Location": {
    "State": "Indiana",
    "City": "Portland",
    "Long": -84.99,
    "Lat": 40.45
  },
  "Climate": {
    "Jan": {
      "Avg High": 33,
      "Avg Low": 17,
      "Avg Precipitation": 2.2
    },
    "Feb": {
      "Avg High": 37,
      "Avg Low": 19,
      "Avg Precipitation": 1.95
    },
    "Mar": {
      "Avg High": 48,
      "Avg Low": 28,
      "Avg Precipitation": 2.51
    },
    "Apr": {
      "Avg High": 61,
      "Avg Low": 38,
      "Avg Precipitation": 3.44
    },
    "May": {
      "Avg High": 71,
      "Avg Low": 49,
      "Avg Precipitation": 4.25
    },
    "Jun": {
      "Avg High": 80,
      "Avg Low": 59,
      "Avg Precipitation": 3.99
    },
    "Jul": {
      "Avg High": 84,
      "Avg Low": 62,
      "Avg Precipitation": 4.71
    },
    "Sep": {
      "Avg High": 76,
      "Avg Low": 52,
      "Avg Precipitation": 2.58
    },
    "Oct": {
      "Avg High": 64,
      "Avg Low": 41,
      "Avg Precipitation": 2.8
    },
    "Nov": {
      "Avg High": 51,
      "Avg Low": 32,
      "Avg Precipitation": 3.14
    },
    "Dec": {
      "Avg High": 37,
      "Avg Low": 22,
      "Avg Precipitation": 2.41
    }
  }
},{
  "_id": {
    "$oid": "6188710ff8e3c4669ee64577"
  },
  "Location": {
    "State": "Indiana",
    "City": "Washington",
    "Long": -87.13,
    "Lat": 38.7
  },
  "Climate": {
    "Jan": {
      "Avg High": 40,
      "Avg Low": 24,
      "Avg Precipitation": 3.22
    },
    "Feb": {
      "Avg High": 45,
      "Avg Low": 28,
      "Avg Precipitation": 2.9
    },
    "Mar": {
      "Avg High": 57,
      "Avg Low": 37,
      "Avg Precipitation": 4.06
    },
    "Apr": {
      "Avg High": 68,
      "Avg Low": 45,
      "Avg Precipitation": 4.36
    },
    "May": {
      "Avg High": 77,
      "Avg Low": 55,
      "Avg Precipitation": 5.87
    },
    "Jun": {
      "Avg High": 85,
      "Avg Low": 64,
      "Avg Precipitation": 4.52
    },
    "Jul": {
      "Avg High": 87,
      "Avg Low": 67,
      "Avg Precipitation": 4.56
    },
    "Sep": {
      "Avg High": 81,
      "Avg Low": 58,
      "Avg Precipitation": 3.36
    },
    "Oct": {
      "Avg High": 69,
      "Avg Low": 47,
      "Avg Precipitation": 3.65
    },
    "Nov": {
      "Avg High": 56,
      "Avg Low": 38,
      "Avg Precipitation": 4.43
    },
    "Dec": {
      "Avg High": 43,
      "Avg Low": 27,
      "Avg Precipitation": 3.69
    }
  }
},{
  "_id": {
    "$oid": "61887113f8e3c4669ee64578"
  },
  "Location": {
    "State": "Iowa",
    "City": "Washington",
    "Long": -91.68,
    "Lat": 41.28
  },
  "Climate": {
    "Jan": {
      "Avg High": 31,
      "Avg Low": 11,
      "Avg Precipitation": 1.31
    },
    "Feb": {
      "Avg High": 35,
      "Avg Low": 15,
      "Avg Precipitation": 1.27
    },
    "Mar": {
      "Avg High": 49,
      "Avg Low": 26,
      "Avg Precipitation": 2.34
    },
    "Apr": {
      "Avg High": 63,
      "Avg Low": 38,
      "Avg Precipitation": 3.26
    },
    "May": {
      "Avg High": 73,
      "Avg Low": 49,
      "Avg Precipitation": 4.58
    },
    "Jun": {
      "Avg High": 82,
      "Avg Low": 59,
      "Avg Precipitation": 4.7
    },
    "Jul": {
      "Avg High": 86,
      "Avg Low": 63,
      "Avg Precipitation": 4.31
    },
    "Sep": {
      "Avg High": 77,
      "Avg Low": 51,
      "Avg Precipitation": 3.6
    },
    "Oct": {
      "Avg High": 65,
      "Avg Low": 40,
      "Avg Precipitation": 2.91
    },
    "Nov": {
      "Avg High": 49,
      "Avg Low": 28,
      "Avg Precipitation": 2.35
    },
    "Dec": {
      "Avg High": 34,
      "Avg Low": 16,
      "Avg Precipitation": 1.69
    }
  }
},{
  "_id": {
    "$oid": "61887117f8e3c4669ee64579"
  },
  "Location": {
    "State": "Kansas",
    "City": "Ashland",
    "Long": -99.78,
    "Lat": 37.17
  },
  "Climate": {
    "Jan": {
      "Avg High": 47,
      "Avg Low": 17,
      "Avg Precipitation": 0.55
    },
    "Feb": {
      "Avg High": 51,
      "Avg Low": 21,
      "Avg Precipitation": 0.73
    },
    "Mar": {
      "Avg High": 60,
      "Avg Low": 30,
      "Avg Precipitation": 1.57
    },
    "Apr": {
      "Avg High": 70,
      "Avg Low": 40,
      "Avg Precipitation": 1.89
    },
    "May": {
      "Avg High": 79,
      "Avg Low": 52,
      "Avg Precipitation": 3.29
    },
    "Jun": {
      "Avg High": 88,
      "Avg Low": 62,
      "Avg Precipitation": 3.94
    },
    "Jul": {
      "Avg High": 94,
      "Avg Low": 66,
      "Avg Precipitation": 2.62
    },
    "Sep": {
      "Avg High": 85,
      "Avg Low": 55,
      "Avg Precipitation": 1.76
    },
    "Oct": {
      "Avg High": 72,
      "Avg Low": 41,
      "Avg Precipitation": 1.85
    },
    "Nov": {
      "Avg High": 59,
      "Avg Low": 28,
      "Avg Precipitation": 0.96
    },
    "Dec": {
      "Avg High": 47,
      "Avg Low": 18,
      "Avg Precipitation": 0.93
    }
  }
},{
  "_id": {
    "$oid": "6188711bf8e3c4669ee6457a"
  },
  "Location": {
    "State": "Kansas",
    "City": "Minneapolis",
    "Long": -97.72,
    "Lat": 39.09
  },
  "Climate": {
    "Jan": {
      "Avg High": 41,
      "Avg Low": 18,
      "Avg Precipitation": 0.81
    },
    "Feb": {
      "Avg High": 46,
      "Avg Low": 22,
      "Avg Precipitation": 1.11
    },
    "Mar": {
      "Avg High": 57,
      "Avg Low": 31,
      "Avg Precipitation": 2.31
    },
    "Apr": {
      "Avg High": 67,
      "Avg Low": 41,
      "Avg Precipitation": 2.45
    },
    "May": {
      "Avg High": 77,
      "Avg Low": 51,
      "Avg Precipitation": 4.64
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 61,
      "Avg Precipitation": 4.13
    },
    "Jul": {
      "Avg High": 93,
      "Avg Low": 67,
      "Avg Precipitation": 4.36
    },
    "Sep": {
      "Avg High": 82,
      "Avg Low": 56,
      "Avg Precipitation": 2.49
    },
    "Oct": {
      "Avg High": 69,
      "Avg Low": 43,
      "Avg Precipitation": 2.33
    },
    "Nov": {
      "Avg High": 54,
      "Avg Low": 30,
      "Avg Precipitation": 1.24
    },
    "Dec": {
      "Avg High": 41,
      "Avg Low": 20,
      "Avg Precipitation": 1.15
    }
  }
},{
  "_id": {
    "$oid": "6188711ff8e3c4669ee6457b"
  },
  "Location": {
    "State": "Kansas",
    "City": "Washington",
    "Long": -97.05,
    "Lat": 39.73
  },
  "Climate": {
    "Jan": {
      "Avg High": 38,
      "Avg Low": 15,
      "Avg Precipitation": 0.73
    },
    "Feb": {
      "Avg High": 44,
      "Avg Low": 19,
      "Avg Precipitation": 1.06
    },
    "Mar": {
      "Avg High": 55,
      "Avg Low": 28,
      "Avg Precipitation": 2.17
    },
    "Apr": {
      "Avg High": 66,
      "Avg Low": 40,
      "Avg Precipitation": 3.12
    },
    "May": {
      "Avg High": 76,
      "Avg Low": 52,
      "Avg Precipitation": 4.37
    },
    "Jun": {
      "Avg High": 85,
      "Avg Low": 62,
      "Avg Precipitation": 5.17
    },
    "Jul": {
      "Avg High": 91,
      "Avg Low": 67,
      "Avg Precipitation": 4.18
    },
    "Sep": {
      "Avg High": 80,
      "Avg Low": 55,
      "Avg Precipitation": 3.37
    },
    "Oct": {
      "Avg High": 68,
      "Avg Low": 42,
      "Avg Precipitation": 2.15
    },
    "Nov": {
      "Avg High": 53,
      "Avg Low": 29,
      "Avg Precipitation": 1.59
    },
    "Dec": {
      "Avg High": 40,
      "Avg Low": 18,
      "Avg Precipitation": 1.09
    }
  }
},{
  "_id": {
    "$oid": "61887124f8e3c4669ee6457c"
  },
  "Location": {
    "State": "Kentucky",
    "City": "Ashland",
    "Long": -82.64,
    "Lat": 38.48
  },
  "Climate": {
    "Jan": {
      "Avg High": 39,
      "Avg Low": 22,
      "Avg Precipitation": 3.11
    },
    "Feb": {
      "Avg High": 44,
      "Avg Low": 24,
      "Avg Precipitation": 3.25
    },
    "Mar": {
      "Avg High": 54,
      "Avg Low": 31,
      "Avg Precipitation": 3.91
    },
    "Apr": {
      "Avg High": 66,
      "Avg Low": 40,
      "Avg Precipitation": 3.58
    },
    "May": {
      "Avg High": 74,
      "Avg Low": 50,
      "Avg Precipitation": 4.84
    },
    "Jun": {
      "Avg High": 82,
      "Avg Low": 60,
      "Avg Precipitation": 4.12
    },
    "Jul": {
      "Avg High": 85,
      "Avg Low": 64,
      "Avg Precipitation": 4.85
    },
    "Sep": {
      "Avg High": 77,
      "Avg Low": 55,
      "Avg Precipitation": 2.84
    },
    "Oct": {
      "Avg High": 66,
      "Avg Low": 42,
      "Avg Precipitation": 2.88
    },
    "Nov": {
      "Avg High": 54,
      "Avg Low": 33,
      "Avg Precipitation": 3.37
    },
    "Dec": {
      "Avg High": 42,
      "Avg Low": 26,
      "Avg Precipitation": 3.68
    }
  }
},{
  "_id": {
    "$oid": "61887128f8e3c4669ee6457d"
  },
  "Location": {
    "State": "Kentucky",
    "City": "Henderson",
    "Long": -87.59,
    "Lat": 37.84
  },
  "Climate": {
    "Jan": {
      "Avg High": 42,
      "Avg Low": 26,
      "Avg Precipitation": 3.13
    },
    "Feb": {
      "Avg High": 47,
      "Avg Low": 29,
      "Avg Precipitation": 3.18
    },
    "Mar": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": 4.35
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 47,
      "Avg Precipitation": 4.43
    },
    "May": {
      "Avg High": 77,
      "Avg Low": 56,
      "Avg Precipitation": 5.26
    },
    "Jun": {
      "Avg High": 84,
      "Avg Low": 64,
      "Avg Precipitation": 3.65
    },
    "Jul": {
      "Avg High": 87,
      "Avg Low": 67,
      "Avg Precipitation": 3.59
    },
    "Sep": {
      "Avg High": 81,
      "Avg Low": 58,
      "Avg Precipitation": 3.03
    },
    "Oct": {
      "Avg High": 70,
      "Avg Low": 47,
      "Avg Precipitation": 3.41
    },
    "Nov": {
      "Avg High": 57,
      "Avg Low": 39,
      "Avg Precipitation": 4.2
    },
    "Dec": {
      "Avg High": 44,
      "Avg Low": 29,
      "Avg Precipitation": 3.73
    }
  }
},{
  "_id": {
    "$oid": "6188712cf8e3c4669ee6457e"
  },
  "Location": {
    "State": "Kentucky",
    "City": "Jackson",
    "Long": -83.32,
    "Lat": 37.59
  },
  "Climate": {
    "Jan": {
      "Avg High": 43,
      "Avg Low": 27,
      "Avg Precipitation": 3.61
    },
    "Feb": {
      "Avg High": 48,
      "Avg Low": 30,
      "Avg Precipitation": 3.75
    },
    "Mar": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": 4.12
    },
    "Apr": {
      "Avg High": 68,
      "Avg Low": 47,
      "Avg Precipitation": 3.83
    },
    "May": {
      "Avg High": 75,
      "Avg Low": 55,
      "Avg Precipitation": 5.2
    },
    "Jun": {
      "Avg High": 82,
      "Avg Low": 62,
      "Avg Precipitation": 4.7
    },
    "Jul": {
      "Avg High": 85,
      "Avg Low": 66,
      "Avg Precipitation": 4.65
    },
    "Sep": {
      "Avg High": 78,
      "Avg Low": 58,
      "Avg Precipitation": 3.46
    },
    "Oct": {
      "Avg High": 68,
      "Avg Low": 48,
      "Avg Precipitation": 3.19
    },
    "Nov": {
      "Avg High": 57,
      "Avg Low": 39,
      "Avg Precipitation": 3.96
    },
    "Dec": {
      "Avg High": 46,
      "Avg Low": 30,
      "Avg Precipitation": 4.18
    }
  }
},{
  "_id": {
    "$oid": "6188712ff8e3c4669ee6457f"
  },
  "Location": {
    "State": "Louisiana",
    "City": "Ashland",
    "Long": -93.1,
    "Lat": 32.14
  },
  "Climate": {
    "Jan": {
      "Avg High": 56,
      "Avg Low": 33,
      "Avg Precipitation": 5.47
    },
    "Feb": {
      "Avg High": 61,
      "Avg Low": 36,
      "Avg Precipitation": 5.04
    },
    "Mar": {
      "Avg High": 69,
      "Avg Low": 44,
      "Avg Precipitation": 5.24
    },
    "Apr": {
      "Avg High": 76,
      "Avg Low": 50,
      "Avg Precipitation": 4.49
    },
    "May": {
      "Avg High": 82,
      "Avg Low": 59,
      "Avg Precipitation": 5.47
    },
    "Jun": {
      "Avg High": 89,
      "Avg Low": 67,
      "Avg Precipitation": 4.45
    },
    "Jul": {
      "Avg High": 93,
      "Avg Low": 70,
      "Avg Precipitation": 4.13
    },
    "Sep": {
      "Avg High": 88,
      "Avg Low": 63,
      "Avg Precipitation": 3.43
    },
    "Oct": {
      "Avg High": 78,
      "Avg Low": 51,
      "Avg Precipitation": 3.98
    },
    "Nov": {
      "Avg High": 67,
      "Avg Low": 42,
      "Avg Precipitation": 4.61
    },
    "Dec": {
      "Avg High": 58,
      "Avg Low": 35,
      "Avg Precipitation": 5.43
    }
  }
},{
  "_id": {
    "$oid": "61887133f8e3c4669ee64580"
  },
  "Location": {
    "State": "Louisiana",
    "City": "Monroe",
    "Long": -92.04,
    "Lat": 32.51
  },
  "Climate": {
    "Jan": {
      "Avg High": 57,
      "Avg Low": 36,
      "Avg Precipitation": 5.01
    },
    "Feb": {
      "Avg High": 62,
      "Avg Low": 39,
      "Avg Precipitation": 4.63
    },
    "Mar": {
      "Avg High": 70,
      "Avg Low": 46,
      "Avg Precipitation": 4.72
    },
    "Apr": {
      "Avg High": 78,
      "Avg Low": 54,
      "Avg Precipitation": 4.5
    },
    "May": {
      "Avg High": 85,
      "Avg Low": 63,
      "Avg Precipitation": 5.19
    },
    "Jun": {
      "Avg High": 92,
      "Avg Low": 70,
      "Avg Precipitation": 4.68
    },
    "Jul": {
      "Avg High": 94,
      "Avg Low": 72,
      "Avg Precipitation": 3.57
    },
    "Sep": {
      "Avg High": 89,
      "Avg Low": 64,
      "Avg Precipitation": 3.63
    },
    "Oct": {
      "Avg High": 79,
      "Avg Low": 53,
      "Avg Precipitation": 4.78
    },
    "Nov": {
      "Avg High": 69,
      "Avg Low": 44,
      "Avg Precipitation": 4.84
    },
    "Dec": {
      "Avg High": 59,
      "Avg Low": 37,
      "Avg Precipitation": 5.29
    }
  }
},{
  "_id": {
    "$oid": "61887136f8e3c4669ee64581"
  },
  "Location": {
    "State": "Louisiana",
    "City": "New Orleans",
    "Long": -90.07,
    "Lat": 29.95
  },
  "Climate": {
    "Jan": {
      "Avg High": 62,
      "Avg Low": 45,
      "Avg Precipitation": 5.12
    },
    "Feb": {
      "Avg High": 65,
      "Avg Low": 48,
      "Avg Precipitation": 5.28
    },
    "Mar": {
      "Avg High": 72,
      "Avg Low": 53,
      "Avg Precipitation": 4.49
    },
    "Apr": {
      "Avg High": 78,
      "Avg Low": 60,
      "Avg Precipitation": 4.57
    },
    "May": {
      "Avg High": 85,
      "Avg Low": 68,
      "Avg Precipitation": 4.57
    },
    "Jun": {
      "Avg High": 89,
      "Avg Low": 74,
      "Avg Precipitation": 7.91
    },
    "Jul": {
      "Avg High": 91,
      "Avg Low": 75,
      "Avg Precipitation": 5.98
    },
    "Sep": {
      "Avg High": 87,
      "Avg Low": 72,
      "Avg Precipitation": 5.12
    },
    "Oct": {
      "Avg High": 80,
      "Avg Low": 63,
      "Avg Precipitation": 3.54
    },
    "Nov": {
      "Avg High": 72,
      "Avg Low": 53,
      "Avg Precipitation": 4.49
    },
    "Dec": {
      "Avg High": 64,
      "Avg Low": 47,
      "Avg Precipitation": 5.28
    }
  }
},{
  "_id": {
    "$oid": "61887138f8e3c4669ee64582"
  },
  "Location": {
    "State": "Louisiana",
    "City": "New Orleans",
    "Long": -90.07,
    "Lat": 29.95
  },
  "Climate": {
    "Jan": {
      "Avg High": 79,
      "Avg Low": 64,
      "Avg Precipitation": 3.66
    },
    "Feb": {
      "Avg High": 86,
      "Avg Low": 73,
      "Avg Precipitation": 5.83
    },
    "Mar": {
      "Avg High": 90,
      "Avg Low": 76,
      "Avg Precipitation": 6.42
    },
    "Apr": {
      "Avg High": 90,
      "Avg Low": 76,
      "Avg Precipitation": 7.09
    },
    "May": {
      "Avg High": 88,
      "Avg Low": 74,
      "Avg Precipitation": 5.55
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 68,
      "Avg Precipitation": 5.43
    },
    "Jul": {
      "Avg High": 77,
      "Avg Low": 61,
      "Avg Precipitation": 5.43
    },
    "Sep": {
      "Avg High": 71,
      "Avg Low": 55,
      "Avg Precipitation": 6.57
    },
    "Oct": {
      "Avg High": 62,
      "Avg Low": 47,
      "Avg Precipitation": 4.76
    },
    "Nov": {
      "Avg High": 70,
      "Avg Low": 55,
      "Avg Precipitation": 4.02
    },
    "Dec": {
      "Avg High": 64,
      "Avg Low": 48,
      "Avg Precipitation": 4.57
    }
  }
},{
  "_id": {
    "$oid": "6188713cf8e3c4669ee64583"
  },
  "Location": {
    "State": "Maine",
    "City": "Bar Harbor",
    "Long": -68.2,
    "Lat": 44.39
  },
  "Climate": {
    "Jan": {
      "Avg High": 31,
      "Avg Low": 14,
      "Avg Precipitation": 4.91
    },
    "Feb": {
      "Avg High": 35,
      "Avg Low": 17,
      "Avg Precipitation": 4.35
    },
    "Mar": {
      "Avg High": 42,
      "Avg Low": 25,
      "Avg Precipitation": 5.39
    },
    "Apr": {
      "Avg High": 53,
      "Avg Low": 35,
      "Avg Precipitation": 4.78
    },
    "May": {
      "Avg High": 65,
      "Avg Low": 44,
      "Avg Precipitation": 4.64
    },
    "Jun": {
      "Avg High": 74,
      "Avg Low": 54,
      "Avg Precipitation": 4.12
    },
    "Jul": {
      "Avg High": 79,
      "Avg Low": 59,
      "Avg Precipitation": 3.5
    },
    "Sep": {
      "Avg High": 71,
      "Avg Low": 52,
      "Avg Precipitation": 4.45
    },
    "Oct": {
      "Avg High": 59,
      "Avg Low": 42,
      "Avg Precipitation": 5.31
    },
    "Nov": {
      "Avg High": 48,
      "Avg Low": 33,
      "Avg Precipitation": 6.47
    },
    "Dec": {
      "Avg High": 37,
      "Avg Low": 21,
      "Avg Precipitation": 5.49
    }
  }
},{
  "_id": {
    "$oid": "61887140f8e3c4669ee64584"
  },
  "Location": {
    "State": "Maine",
    "City": "Portland",
    "Long": -70.26,
    "Lat": 43.66
  },
  "Climate": {
    "Jan": {
      "Avg High": 31,
      "Avg Low": 13,
      "Avg Precipitation": 3.38
    },
    "Feb": {
      "Avg High": 35,
      "Avg Low": 16,
      "Avg Precipitation": 3.25
    },
    "Mar": {
      "Avg High": 42,
      "Avg Low": 25,
      "Avg Precipitation": 4.24
    },
    "Apr": {
      "Avg High": 53,
      "Avg Low": 35,
      "Avg Precipitation": 4.32
    },
    "May": {
      "Avg High": 64,
      "Avg Low": 44,
      "Avg Precipitation": 4.01
    },
    "Jun": {
      "Avg High": 73,
      "Avg Low": 54,
      "Avg Precipitation": 3.79
    },
    "Jul": {
      "Avg High": 79,
      "Avg Low": 59,
      "Avg Precipitation": 3.61
    },
    "Sep": {
      "Avg High": 70,
      "Avg Low": 50,
      "Avg Precipitation": 3.69
    },
    "Oct": {
      "Avg High": 59,
      "Avg Low": 39,
      "Avg Precipitation": 4.87
    },
    "Nov": {
      "Avg High": 48,
      "Avg Low": 31,
      "Avg Precipitation": 4.93
    },
    "Dec": {
      "Avg High": 37,
      "Avg Low": 20,
      "Avg Precipitation": 4.02
    }
  }
},{
  "_id": {
    "$oid": "61887143f8e3c4669ee64585"
  },
  "Location": {
    "State": "Maryland",
    "City": "Cambridge",
    "Long": -76.08,
    "Lat": 38.56
  },
  "Climate": {
    "Jan": {
      "Avg High": 46,
      "Avg Low": 28,
      "Avg Precipitation": "NaN"
    },
    "Feb": {
      "Avg High": 50,
      "Avg Low": 30,
      "Avg Precipitation": "NaN"
    },
    "Mar": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": "NaN"
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 46,
      "Avg Precipitation": "NaN"
    },
    "May": {
      "Avg High": 77,
      "Avg Low": 55,
      "Avg Precipitation": "NaN"
    },
    "Jun": {
      "Avg High": 85,
      "Avg Low": 64,
      "Avg Precipitation": "NaN"
    },
    "Jul": {
      "Avg High": 90,
      "Avg Low": 69,
      "Avg Precipitation": "NaN"
    },
    "Sep": {
      "Avg High": 82,
      "Avg Low": 61,
      "Avg Precipitation": "NaN"
    },
    "Oct": {
      "Avg High": 71,
      "Avg Low": 50,
      "Avg Precipitation": "NaN"
    },
    "Nov": {
      "Avg High": 61,
      "Avg Low": 41,
      "Avg Precipitation": "NaN"
    },
    "Dec": {
      "Avg High": 49,
      "Avg Low": 33,
      "Avg Precipitation": "NaN"
    }
  }
},{
  "_id": {
    "$oid": "61887147f8e3c4669ee64586"
  },
  "Location": {
    "State": "Maryland",
    "City": "Cumberland",
    "Long": -78.76,
    "Lat": 39.62
  },
  "Climate": {
    "Jan": {
      "Avg High": 41,
      "Avg Low": 22,
      "Avg Precipitation": 2.66
    },
    "Feb": {
      "Avg High": 46,
      "Avg Low": 24,
      "Avg Precipitation": 2.37
    },
    "Mar": {
      "Avg High": 56,
      "Avg Low": 32,
      "Avg Precipitation": 3.37
    },
    "Apr": {
      "Avg High": 68,
      "Avg Low": 41,
      "Avg Precipitation": 3.3
    },
    "May": {
      "Avg High": 76,
      "Avg Low": 51,
      "Avg Precipitation": 4.02
    },
    "Jun": {
      "Avg High": 85,
      "Avg Low": 60,
      "Avg Precipitation": 3.28
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 65,
      "Avg Precipitation": 3.56
    },
    "Sep": {
      "Avg High": 80,
      "Avg Low": 55,
      "Avg Precipitation": 3.23
    },
    "Oct": {
      "Avg High": 69,
      "Avg Low": 43,
      "Avg Precipitation": 2.57
    },
    "Nov": {
      "Avg High": 57,
      "Avg Low": 34,
      "Avg Precipitation": 2.98
    },
    "Dec": {
      "Avg High": 45,
      "Avg Low": 26,
      "Avg Precipitation": 2.85
    }
  }
},{
  "_id": {
    "$oid": "6188714af8e3c4669ee64587"
  },
  "Location": {
    "State": "Maryland",
    "City": "Hancock",
    "Long": -78.17,
    "Lat": 39.69
  },
  "Climate": {
    "Jan": {
      "Avg High": 40,
      "Avg Low": 20,
      "Avg Precipitation": 2.72
    },
    "Feb": {
      "Avg High": 43,
      "Avg Low": 22,
      "Avg Precipitation": 2.24
    },
    "Mar": {
      "Avg High": 53,
      "Avg Low": 30,
      "Avg Precipitation": 3.19
    },
    "Apr": {
      "Avg High": 65,
      "Avg Low": 38,
      "Avg Precipitation": 3.19
    },
    "May": {
      "Avg High": 74,
      "Avg Low": 48,
      "Avg Precipitation": 4.02
    },
    "Jun": {
      "Avg High": 82,
      "Avg Low": 57,
      "Avg Precipitation": 3.39
    },
    "Jul": {
      "Avg High": 86,
      "Avg Low": 62,
      "Avg Precipitation": 3.82
    },
    "Sep": {
      "Avg High": 78,
      "Avg Low": 53,
      "Avg Precipitation": 3.23
    },
    "Oct": {
      "Avg High": 67,
      "Avg Low": 40,
      "Avg Precipitation": 3.23
    },
    "Nov": {
      "Avg High": 55,
      "Avg Low": 32,
      "Avg Precipitation": 3.07
    },
    "Dec": {
      "Avg High": 44,
      "Avg Low": 25,
      "Avg Precipitation": 2.68
    }
  }
},{
  "_id": {
    "$oid": "6188714df8e3c4669ee64588"
  },
  "Location": {
    "State": "Maryland",
    "City": "La Plata",
    "Long": -76.97,
    "Lat": 38.53
  },
  "Climate": {
    "Jan": {
      "Avg High": 44,
      "Avg Low": 26,
      "Avg Precipitation": 3.43
    },
    "Feb": {
      "Avg High": 49,
      "Avg Low": 28,
      "Avg Precipitation": 2.83
    },
    "Mar": {
      "Avg High": 58,
      "Avg Low": 35,
      "Avg Precipitation": 3.98
    },
    "Apr": {
      "Avg High": 68,
      "Avg Low": 43,
      "Avg Precipitation": 3.11
    },
    "May": {
      "Avg High": 75,
      "Avg Low": 53,
      "Avg Precipitation": 4.13
    },
    "Jun": {
      "Avg High": 81,
      "Avg Low": 62,
      "Avg Precipitation": 3.82
    },
    "Jul": {
      "Avg High": 85,
      "Avg Low": 67,
      "Avg Precipitation": 4.13
    },
    "Sep": {
      "Avg High": 78,
      "Avg Low": 59,
      "Avg Precipitation": 4.29
    },
    "Oct": {
      "Avg High": 68,
      "Avg Low": 47,
      "Avg Precipitation": 3.35
    },
    "Nov": {
      "Avg High": 59,
      "Avg Low": 38,
      "Avg Precipitation": 3.23
    },
    "Dec": {
      "Avg High": 48,
      "Avg Low": 30,
      "Avg Precipitation": 3.15
    }
  }
},{
  "_id": {
    "$oid": "61887150f8e3c4669ee64589"
  },
  "Location": {
    "State": "Massachusetts",
    "City": "Boston",
    "Long": -71.06,
    "Lat": 42.36
  },
  "Climate": {
    "Jan": {
      "Avg High": 36,
      "Avg Low": 22,
      "Avg Precipitation": 3.36
    },
    "Feb": {
      "Avg High": 39,
      "Avg Low": 25,
      "Avg Precipitation": 3.25
    },
    "Mar": {
      "Avg High": 45,
      "Avg Low": 31,
      "Avg Precipitation": 4.32
    },
    "Apr": {
      "Avg High": 56,
      "Avg Low": 41,
      "Avg Precipitation": 3.74
    },
    "May": {
      "Avg High": 66,
      "Avg Low": 50,
      "Avg Precipitation": 3.49
    },
    "Jun": {
      "Avg High": 76,
      "Avg Low": 60,
      "Avg Precipitation": 3.68
    },
    "Jul": {
      "Avg High": 81,
      "Avg Low": 65,
      "Avg Precipitation": 3.43
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 57,
      "Avg Precipitation": 3.44
    },
    "Oct": {
      "Avg High": 61,
      "Avg Low": 47,
      "Avg Precipitation": 3.94
    },
    "Nov": {
      "Avg High": 51,
      "Avg Low": 38,
      "Avg Precipitation": 3.99
    },
    "Dec": {
      "Avg High": 41,
      "Avg Low": 28,
      "Avg Precipitation": 3.78
    }
  }
},{
  "_id": {
    "$oid": "61887153f8e3c4669ee6458a"
  },
  "Location": {
    "State": "Massachusetts",
    "City": "Boston",
    "Long": -71.06,
    "Lat": 42.36
  },
  "Climate": {
    "Jan": {
      "Avg High": 36,
      "Avg Low": 22,
      "Avg Precipitation": 3.35
    },
    "Feb": {
      "Avg High": 39,
      "Avg Low": 25,
      "Avg Precipitation": 3.23
    },
    "Mar": {
      "Avg High": 45,
      "Avg Low": 31,
      "Avg Precipitation": 4.29
    },
    "Apr": {
      "Avg High": 56,
      "Avg Low": 41,
      "Avg Precipitation": 3.74
    },
    "May": {
      "Avg High": 66,
      "Avg Low": 50,
      "Avg Precipitation": 3.46
    },
    "Jun": {
      "Avg High": 76,
      "Avg Low": 60,
      "Avg Precipitation": 3.66
    },
    "Jul": {
      "Avg High": 81,
      "Avg Low": 65,
      "Avg Precipitation": 3.43
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 57,
      "Avg Precipitation": 3.43
    },
    "Oct": {
      "Avg High": 61,
      "Avg Low": 47,
      "Avg Precipitation": 3.94
    },
    "Nov": {
      "Avg High": 51,
      "Avg Low": 38,
      "Avg Precipitation": 3.98
    },
    "Dec": {
      "Avg High": 41,
      "Avg Low": 28,
      "Avg Precipitation": 3.78
    }
  }
},{
  "_id": {
    "$oid": "61887158f8e3c4669ee6458b"
  },
  "Location": {
    "State": "Massachusetts",
    "City": "Orange",
    "Long": -72.31,
    "Lat": 42.59
  },
  "Climate": {
    "Jan": {
      "Avg High": 31,
      "Avg Low": 11,
      "Avg Precipitation": 2.72
    },
    "Feb": {
      "Avg High": 35,
      "Avg Low": 13,
      "Avg Precipitation": 2.65
    },
    "Mar": {
      "Avg High": 44,
      "Avg Low": 23,
      "Avg Precipitation": 3.48
    },
    "Apr": {
      "Avg High": 57,
      "Avg Low": 33,
      "Avg Precipitation": 3.32
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 43,
      "Avg Precipitation": 3.84
    },
    "Jun": {
      "Avg High": 76,
      "Avg Low": 53,
      "Avg Precipitation": 4.43
    },
    "Jul": {
      "Avg High": 81,
      "Avg Low": 58,
      "Avg Precipitation": 4.13
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 48,
      "Avg Precipitation": 3.55
    },
    "Oct": {
      "Avg High": 60,
      "Avg Low": 36,
      "Avg Precipitation": 3.79
    },
    "Nov": {
      "Avg High": 48,
      "Avg Low": 28,
      "Avg Precipitation": 3.88
    },
    "Dec": {
      "Avg High": 36,
      "Avg Low": 18,
      "Avg Precipitation": 3.21
    }
  }
},{
  "_id": {
    "$oid": "6188715cf8e3c4669ee6458c"
  },
  "Location": {
    "State": "Michigan",
    "City": "Hancock",
    "Long": -88.58,
    "Lat": 47.13
  },
  "Climate": {
    "Jan": {
      "Avg High": 22,
      "Avg Low": 9,
      "Avg Precipitation": 2.58
    },
    "Feb": {
      "Avg High": 25,
      "Avg Low": 9,
      "Avg Precipitation": 1.37
    },
    "Mar": {
      "Avg High": 33,
      "Avg Low": 17,
      "Avg Precipitation": 1.56
    },
    "Apr": {
      "Avg High": 47,
      "Avg Low": 29,
      "Avg Precipitation": 1.84
    },
    "May": {
      "Avg High": 61,
      "Avg Low": 39,
      "Avg Precipitation": 2.5
    },
    "Jun": {
      "Avg High": 70,
      "Avg Low": 48,
      "Avg Precipitation": 2.58
    },
    "Jul": {
      "Avg High": 75,
      "Avg Low": 54,
      "Avg Precipitation": 2.49
    },
    "Sep": {
      "Avg High": 65,
      "Avg Low": 46,
      "Avg Precipitation": 3.45
    },
    "Oct": {
      "Avg High": 51,
      "Avg Low": 36,
      "Avg Precipitation": 2.99
    },
    "Nov": {
      "Avg High": 38,
      "Avg Low": 25,
      "Avg Precipitation": 2.13
    },
    "Dec": {
      "Avg High": 26,
      "Avg Low": 14,
      "Avg Precipitation": 1.89
    }
  }
},{
  "_id": {
    "$oid": "61887160f8e3c4669ee6458d"
  },
  "Location": {
    "State": "Michigan",
    "City": "Jackson",
    "Long": -84.4,
    "Lat": 42.25
  },
  "Climate": {
    "Jan": {
      "Avg High": 31,
      "Avg Low": 16,
      "Avg Precipitation": 1.49
    },
    "Feb": {
      "Avg High": 34,
      "Avg Low": 18,
      "Avg Precipitation": 1.29
    },
    "Mar": {
      "Avg High": 45,
      "Avg Low": 26,
      "Avg Precipitation": 1.9
    },
    "Apr": {
      "Avg High": 59,
      "Avg Low": 37,
      "Avg Precipitation": 2.61
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 46,
      "Avg Precipitation": 3.31
    },
    "Jun": {
      "Avg High": 79,
      "Avg Low": 56,
      "Avg Precipitation": 3.27
    },
    "Jul": {
      "Avg High": 82,
      "Avg Low": 60,
      "Avg Precipitation": 3.58
    },
    "Sep": {
      "Avg High": 73,
      "Avg Low": 51,
      "Avg Precipitation": 3.48
    },
    "Oct": {
      "Avg High": 60,
      "Avg Low": 40,
      "Avg Precipitation": 2.63
    },
    "Nov": {
      "Avg High": 48,
      "Avg Low": 32,
      "Avg Precipitation": 2.6
    },
    "Dec": {
      "Avg High": 35,
      "Avg Low": 22,
      "Avg Precipitation": 1.87
    }
  }
},{
  "_id": {
    "$oid": "61887162f8e3c4669ee6458e"
  },
  "Location": {
    "State": "Michigan",
    "City": "Monroe",
    "Long": -83.43,
    "Lat": 41.94
  },
  "Climate": {
    "Jan": {
      "Avg High": 31,
      "Avg Low": 17,
      "Avg Precipitation": 1.81
    },
    "Feb": {
      "Avg High": 34,
      "Avg Low": 18,
      "Avg Precipitation": 1.73
    },
    "Mar": {
      "Avg High": 43,
      "Avg Low": 27,
      "Avg Precipitation": 2.68
    },
    "Apr": {
      "Avg High": 56,
      "Avg Low": 37,
      "Avg Precipitation": 3.27
    },
    "May": {
      "Avg High": 68,
      "Avg Low": 49,
      "Avg Precipitation": 3.15
    },
    "Jun": {
      "Avg High": 78,
      "Avg Low": 59,
      "Avg Precipitation": 3.62
    },
    "Jul": {
      "Avg High": 82,
      "Avg Low": 64,
      "Avg Precipitation": 2.99
    },
    "Sep": {
      "Avg High": 73,
      "Avg Low": 54,
      "Avg Precipitation": 2.99
    },
    "Oct": {
      "Avg High": 61,
      "Avg Low": 42,
      "Avg Precipitation": 2.36
    },
    "Nov": {
      "Avg High": 47,
      "Avg Low": 33,
      "Avg Precipitation": 2.83
    },
    "Dec": {
      "Avg High": 36,
      "Avg Low": 24,
      "Avg Precipitation": 2.52
    }
  }
},{
  "_id": {
    "$oid": "61887167f8e3c4669ee6458f"
  },
  "Location": {
    "State": "Minnesota",
    "City": "Cambridge",
    "Long": -93.26,
    "Lat": 45.56
  },
  "Climate": {
    "Jan": {
      "Avg High": 20,
      "Avg Low": 0,
      "Avg Precipitation": 0.94
    },
    "Feb": {
      "Avg High": 27,
      "Avg Low": 7,
      "Avg Precipitation": 0.63
    },
    "Mar": {
      "Avg High": 38,
      "Avg Low": 20,
      "Avg Precipitation": 1.42
    },
    "Apr": {
      "Avg High": 55,
      "Avg Low": 33,
      "Avg Precipitation": 2.09
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 45,
      "Avg Precipitation": 3.19
    },
    "Jun": {
      "Avg High": 77,
      "Avg Low": 54,
      "Avg Precipitation": 4.41
    },
    "Jul": {
      "Avg High": 81,
      "Avg Low": 59,
      "Avg Precipitation": 4.29
    },
    "Sep": {
      "Avg High": 68,
      "Avg Low": 47,
      "Avg Precipitation": 2.95
    },
    "Oct": {
      "Avg High": 56,
      "Avg Low": 35,
      "Avg Precipitation": 2.36
    },
    "Nov": {
      "Avg High": 38,
      "Avg Low": 21,
      "Avg Precipitation": 1.89
    },
    "Dec": {
      "Avg High": 24,
      "Avg Low": 7,
      "Avg Precipitation": 0.87
    }
  }
},{
  "_id": {
    "$oid": "6188716af8e3c4669ee64590"
  },
  "Location": {
    "State": "Minnesota",
    "City": "Cook",
    "Long": -92.69,
    "Lat": 47.85
  },
  "Climate": {
    "Jan": {
      "Avg High": 16,
      "Avg Low": -6,
      "Avg Precipitation": 0.86
    },
    "Feb": {
      "Avg High": 23,
      "Avg Low": -1,
      "Avg Precipitation": 0.63
    },
    "Mar": {
      "Avg High": 35,
      "Avg Low": 12,
      "Avg Precipitation": 1.09
    },
    "Apr": {
      "Avg High": 50,
      "Avg Low": 28,
      "Avg Precipitation": 1.98
    },
    "May": {
      "Avg High": 64,
      "Avg Low": 41,
      "Avg Precipitation": 2.71
    },
    "Jun": {
      "Avg High": 72,
      "Avg Low": 51,
      "Avg Precipitation": 3.97
    },
    "Jul": {
      "Avg High": 77,
      "Avg Low": 56,
      "Avg Precipitation": 3.66
    },
    "Sep": {
      "Avg High": 65,
      "Avg Low": 45,
      "Avg Precipitation": 3.77
    },
    "Oct": {
      "Avg High": 52,
      "Avg Low": 33,
      "Avg Precipitation": 2.61
    },
    "Nov": {
      "Avg High": 35,
      "Avg Low": 20,
      "Avg Precipitation": 1.49
    },
    "Dec": {
      "Avg High": 20,
      "Avg Low": 3,
      "Avg Precipitation": 0.96
    }
  }
},{
  "_id": {
    "$oid": "6188716df8e3c4669ee64591"
  },
  "Location": {
    "State": "Minnesota",
    "City": "Minneapolis",
    "Long": -93.27,
    "Lat": 44.98
  },
  "Climate": {
    "Jan": {
      "Avg High": 24,
      "Avg Low": 8,
      "Avg Precipitation": 0.87
    },
    "Feb": {
      "Avg High": 29,
      "Avg Low": 13,
      "Avg Precipitation": 0.75
    },
    "Mar": {
      "Avg High": 41,
      "Avg Low": 24,
      "Avg Precipitation": 1.89
    },
    "Apr": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": 2.64
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 49,
      "Avg Precipitation": 3.35
    },
    "Jun": {
      "Avg High": 79,
      "Avg Low": 59,
      "Avg Precipitation": 4.25
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 64,
      "Avg Precipitation": 4.02
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 52,
      "Avg Precipitation": 3.07
    },
    "Oct": {
      "Avg High": 58,
      "Avg Low": 40,
      "Avg Precipitation": 2.4
    },
    "Nov": {
      "Avg High": 41,
      "Avg Low": 26,
      "Avg Precipitation": 1.73
    },
    "Dec": {
      "Avg High": 27,
      "Avg Low": 12,
      "Avg Precipitation": 1.14
    }
  }
},{
  "_id": {
    "$oid": "61887171f8e3c4669ee64592"
  },
  "Location": {
    "State": "Minnesota",
    "City": "Minneapolis",
    "Long": -93.27,
    "Lat": 44.98
  },
  "Climate": {
    "Jan": {
      "Avg High": 24,
      "Avg Low": 8,
      "Avg Precipitation": 0.9
    },
    "Feb": {
      "Avg High": 29,
      "Avg Low": 13,
      "Avg Precipitation": 0.77
    },
    "Mar": {
      "Avg High": 41,
      "Avg Low": 24,
      "Avg Precipitation": 1.89
    },
    "Apr": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": 2.66
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 49,
      "Avg Precipitation": 3.36
    },
    "Jun": {
      "Avg High": 79,
      "Avg Low": 59,
      "Avg Precipitation": 4.25
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 64,
      "Avg Precipitation": 4.04
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 52,
      "Avg Precipitation": 3.08
    },
    "Oct": {
      "Avg High": 58,
      "Avg Low": 40,
      "Avg Precipitation": 2.43
    },
    "Nov": {
      "Avg High": 41,
      "Avg Low": 26,
      "Avg Precipitation": 1.77
    },
    "Dec": {
      "Avg High": 27,
      "Avg Low": 12,
      "Avg Precipitation": 1.16
    }
  }
},{
  "_id": {
    "$oid": "61887175f8e3c4669ee64593"
  },
  "Location": {
    "State": "Mississippi",
    "City": "Biloxi",
    "Long": -88.89,
    "Lat": 30.4
  },
  "Climate": {
    "Jan": {
      "Avg High": 60,
      "Avg Low": 43,
      "Avg Precipitation": 5.07
    },
    "Feb": {
      "Avg High": 63,
      "Avg Low": 46,
      "Avg Precipitation": 5.26
    },
    "Mar": {
      "Avg High": 69,
      "Avg Low": 52,
      "Avg Precipitation": 6.11
    },
    "Apr": {
      "Avg High": 76,
      "Avg Low": 60,
      "Avg Precipitation": 4.48
    },
    "May": {
      "Avg High": 83,
      "Avg Low": 68,
      "Avg Precipitation": 4.57
    },
    "Jun": {
      "Avg High": 88,
      "Avg Low": 74,
      "Avg Precipitation": 7.07
    },
    "Jul": {
      "Avg High": 90,
      "Avg Low": 75,
      "Avg Precipitation": 7.13
    },
    "Sep": {
      "Avg High": 87,
      "Avg Low": 71,
      "Avg Precipitation": 5.58
    },
    "Oct": {
      "Avg High": 79,
      "Avg Low": 61,
      "Avg Precipitation": 3.82
    },
    "Nov": {
      "Avg High": 70,
      "Avg Low": 52,
      "Avg Precipitation": 4.75
    },
    "Dec": {
      "Avg High": 62,
      "Avg Low": 45,
      "Avg Precipitation": 4.76
    }
  }
},{
  "_id": {
    "$oid": "61887179f8e3c4669ee64594"
  },
  "Location": {
    "State": "Mississippi",
    "City": "Charleston",
    "Long": -90.08,
    "Lat": 33.99
  },
  "Climate": {
    "Jan": {
      "Avg High": 51,
      "Avg Low": 31,
      "Avg Precipitation": 4.71
    },
    "Feb": {
      "Avg High": 57,
      "Avg Low": 35,
      "Avg Precipitation": 5.14
    },
    "Mar": {
      "Avg High": 65,
      "Avg Low": 42,
      "Avg Precipitation": 4.34
    },
    "Apr": {
      "Avg High": 73,
      "Avg Low": 50,
      "Avg Precipitation": 5.42
    },
    "May": {
      "Avg High": 81,
      "Avg Low": 59,
      "Avg Precipitation": 5.53
    },
    "Jun": {
      "Avg High": 88,
      "Avg Low": 67,
      "Avg Precipitation": 4.51
    },
    "Jul": {
      "Avg High": 91,
      "Avg Low": 71,
      "Avg Precipitation": 4.82
    },
    "Sep": {
      "Avg High": 85,
      "Avg Low": 62,
      "Avg Precipitation": 3.39
    },
    "Oct": {
      "Avg High": 75,
      "Avg Low": 50,
      "Avg Precipitation": 3.64
    },
    "Nov": {
      "Avg High": 65,
      "Avg Low": 41,
      "Avg Precipitation": 5.7
    },
    "Dec": {
      "Avg High": 54,
      "Avg Low": 32,
      "Avg Precipitation": 5.55
    }
  }
},{
  "_id": {
    "$oid": "6188717df8e3c4669ee64595"
  },
  "Location": {
    "State": "Mississippi",
    "City": "Cleveland",
    "Long": -90.76,
    "Lat": 33.76
  },
  "Climate": {
    "Jan": {
      "Avg High": 51,
      "Avg Low": 31,
      "Avg Precipitation": 4.4
    },
    "Feb": {
      "Avg High": 55,
      "Avg Low": 35,
      "Avg Precipitation": 4.78
    },
    "Mar": {
      "Avg High": 65,
      "Avg Low": 43,
      "Avg Precipitation": 4.38
    },
    "Apr": {
      "Avg High": 74,
      "Avg Low": 52,
      "Avg Precipitation": 4.92
    },
    "May": {
      "Avg High": 83,
      "Avg Low": 61,
      "Avg Precipitation": 6.03
    },
    "Jun": {
      "Avg High": 89,
      "Avg Low": 69,
      "Avg Precipitation": 4.48
    },
    "Jul": {
      "Avg High": 93,
      "Avg Low": 72,
      "Avg Precipitation": 3.65
    },
    "Sep": {
      "Avg High": 87,
      "Avg Low": 65,
      "Avg Precipitation": 4.03
    },
    "Oct": {
      "Avg High": 76,
      "Avg Low": 53,
      "Avg Precipitation": 4.09
    },
    "Nov": {
      "Avg High": 64,
      "Avg Low": 43,
      "Avg Precipitation": 5.05
    },
    "Dec": {
      "Avg High": 53,
      "Avg Low": 35,
      "Avg Precipitation": 5.81
    }
  }
},{
  "_id": {
    "$oid": "61887181f8e3c4669ee64596"
  },
  "Location": {
    "State": "Mississippi",
    "City": "Jackson",
    "Long": -90.08,
    "Lat": 32.31
  },
  "Climate": {
    "Jan": {
      "Avg High": 56,
      "Avg Low": 35,
      "Avg Precipitation": 4.97
    },
    "Feb": {
      "Avg High": 60,
      "Avg Low": 38,
      "Avg Precipitation": 4.76
    },
    "Mar": {
      "Avg High": 69,
      "Avg Low": 45,
      "Avg Precipitation": 5.04
    },
    "Apr": {
      "Avg High": 76,
      "Avg Low": 52,
      "Avg Precipitation": 4.96
    },
    "May": {
      "Avg High": 83,
      "Avg Low": 62,
      "Avg Precipitation": 4.38
    },
    "Jun": {
      "Avg High": 89,
      "Avg Low": 69,
      "Avg Precipitation": 4.12
    },
    "Jul": {
      "Avg High": 92,
      "Avg Low": 72,
      "Avg Precipitation": 4.81
    },
    "Sep": {
      "Avg High": 87,
      "Avg Low": 65,
      "Avg Precipitation": 3.03
    },
    "Oct": {
      "Avg High": 77,
      "Avg Low": 53,
      "Avg Precipitation": 3.92
    },
    "Nov": {
      "Avg High": 67,
      "Avg Low": 44,
      "Avg Precipitation": 4.76
    },
    "Dec": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": 5.15
    }
  }
},{
  "_id": {
    "$oid": "61887184f8e3c4669ee64597"
  },
  "Location": {
    "State": "Missouri",
    "City": "Charleston",
    "Long": -89.36,
    "Lat": 36.84
  },
  "Climate": {
    "Jan": {
      "Avg High": 41,
      "Avg Low": 24,
      "Avg Precipitation": 3.19
    },
    "Feb": {
      "Avg High": 48,
      "Avg Low": 28,
      "Avg Precipitation": 3.82
    },
    "Mar": {
      "Avg High": 58,
      "Avg Low": 36,
      "Avg Precipitation": 4.8
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 45,
      "Avg Precipitation": 4.72
    },
    "May": {
      "Avg High": 79,
      "Avg Low": 55,
      "Avg Precipitation": 4.76
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 65,
      "Avg Precipitation": 3.98
    },
    "Jul": {
      "Avg High": 91,
      "Avg Low": 69,
      "Avg Precipitation": 4.57
    },
    "Sep": {
      "Avg High": 83,
      "Avg Low": 58,
      "Avg Precipitation": 2.72
    },
    "Oct": {
      "Avg High": 72,
      "Avg Low": 45,
      "Avg Precipitation": 3.19
    },
    "Nov": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": 4.37
    },
    "Dec": {
      "Avg High": 46,
      "Avg Low": 28,
      "Avg Precipitation": 4.49
    }
  }
},{
  "_id": {
    "$oid": "61887187f8e3c4669ee64598"
  },
  "Location": {
    "State": "Missouri",
    "City": "Gallatin",
    "Long": -93.96,
    "Lat": 39.91
  },
  "Climate": {
    "Jan": {
      "Avg High": 33,
      "Avg Low": 15,
      "Avg Precipitation": 0.79
    },
    "Feb": {
      "Avg High": 40,
      "Avg Low": 20,
      "Avg Precipitation": 0.98
    },
    "Mar": {
      "Avg High": 51,
      "Avg Low": 30,
      "Avg Precipitation": 2.76
    },
    "Apr": {
      "Avg High": 63,
      "Avg Low": 41,
      "Avg Precipitation": 3.54
    },
    "May": {
      "Avg High": 73,
      "Avg Low": 52,
      "Avg Precipitation": 5.24
    },
    "Jun": {
      "Avg High": 82,
      "Avg Low": 61,
      "Avg Precipitation": 4.09
    },
    "Jul": {
      "Avg High": 87,
      "Avg Low": 66,
      "Avg Precipitation": 4.06
    },
    "Sep": {
      "Avg High": 77,
      "Avg Low": 55,
      "Avg Precipitation": 5.2
    },
    "Oct": {
      "Avg High": 65,
      "Avg Low": 43,
      "Avg Precipitation": 3.27
    },
    "Nov": {
      "Avg High": 50,
      "Avg Low": 31,
      "Avg Precipitation": 1.89
    },
    "Dec": {
      "Avg High": 37,
      "Avg Low": 19,
      "Avg Precipitation": 1.34
    }
  }
},{
  "_id": {
    "$oid": "6188718bf8e3c4669ee64599"
  },
  "Location": {
    "State": "Missouri",
    "City": "Jackson",
    "Long": -89.67,
    "Lat": 37.38
  },
  "Climate": {
    "Jan": {
      "Avg High": 41,
      "Avg Low": 23,
      "Avg Precipitation": 3.47
    },
    "Feb": {
      "Avg High": 47,
      "Avg Low": 26,
      "Avg Precipitation": 3.68
    },
    "Mar": {
      "Avg High": 58,
      "Avg Low": 35,
      "Avg Precipitation": 4.74
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 46,
      "Avg Precipitation": 4.66
    },
    "May": {
      "Avg High": 78,
      "Avg Low": 56,
      "Avg Precipitation": 5.27
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 65,
      "Avg Precipitation": 4.11
    },
    "Jul": {
      "Avg High": 90,
      "Avg Low": 69,
      "Avg Precipitation": 4.05
    },
    "Sep": {
      "Avg High": 82,
      "Avg Low": 58,
      "Avg Precipitation": 3.35
    },
    "Oct": {
      "Avg High": 70,
      "Avg Low": 46,
      "Avg Precipitation": 4
    },
    "Nov": {
      "Avg High": 56,
      "Avg Low": 36,
      "Avg Precipitation": 4.8
    },
    "Dec": {
      "Avg High": 44,
      "Avg Low": 26,
      "Avg Precipitation": 4.3
    }
  }
},{
  "_id": {
    "$oid": "6188718ff8e3c4669ee6459a"
  },
  "Location": {
    "State": "Montana",
    "City": "Bozeman",
    "Long": -111.05,
    "Lat": 45.68
  },
  "Climate": {
    "Jan": {
      "Avg High": 35,
      "Avg Low": 14,
      "Avg Precipitation": 0.55
    },
    "Feb": {
      "Avg High": 38,
      "Avg Low": 17,
      "Avg Precipitation": 0.54
    },
    "Mar": {
      "Avg High": 47,
      "Avg Low": 24,
      "Avg Precipitation": 1.03
    },
    "Apr": {
      "Avg High": 56,
      "Avg Low": 30,
      "Avg Precipitation": 1.78
    },
    "May": {
      "Avg High": 65,
      "Avg Low": 38,
      "Avg Precipitation": 2.81
    },
    "Jun": {
      "Avg High": 73,
      "Avg Low": 44,
      "Avg Precipitation": 2.78
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 50,
      "Avg Precipitation": 1.41
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 40,
      "Avg Precipitation": 1.26
    },
    "Oct": {
      "Avg High": 58,
      "Avg Low": 32,
      "Avg Precipitation": 1.38
    },
    "Nov": {
      "Avg High": 43,
      "Avg Low": 21,
      "Avg Precipitation": 0.9
    },
    "Dec": {
      "Avg High": 33,
      "Avg Low": 12,
      "Avg Precipitation": 0.54
    }
  }
},{
  "_id": {
    "$oid": "61887191f8e3c4669ee6459b"
  },
  "Location": {
    "State": "Montana",
    "City": "Jackson",
    "Long": -113.41,
    "Lat": 45.37
  },
  "Climate": {
    "Jan": {
      "Avg High": 28,
      "Avg Low": 6,
      "Avg Precipitation": 0.59
    },
    "Feb": {
      "Avg High": 33,
      "Avg Low": 8,
      "Avg Precipitation": 0.47
    },
    "Mar": {
      "Avg High": 40,
      "Avg Low": 14,
      "Avg Precipitation": 0.75
    },
    "Apr": {
      "Avg High": 48,
      "Avg Low": 21,
      "Avg Precipitation": 1.02
    },
    "May": {
      "Avg High": 57,
      "Avg Low": 29,
      "Avg Precipitation": 1.69
    },
    "Jun": {
      "Avg High": 67,
      "Avg Low": 35,
      "Avg Precipitation": 1.73
    },
    "Jul": {
      "Avg High": 75,
      "Avg Low": 39,
      "Avg Precipitation": 1.18
    },
    "Sep": {
      "Avg High": 65,
      "Avg Low": 30,
      "Avg Precipitation": 1.02
    },
    "Oct": {
      "Avg High": 53,
      "Avg Low": 24,
      "Avg Precipitation": 0.87
    },
    "Nov": {
      "Avg High": 37,
      "Avg Low": 14,
      "Avg Precipitation": 0.71
    },
    "Dec": {
      "Avg High": 28,
      "Avg Low": 7,
      "Avg Precipitation": 0.55
    }
  }
},{
  "_id": {
    "$oid": "61887195f8e3c4669ee6459c"
  },
  "Location": {
    "State": "Montana",
    "City": "Park City",
    "Long": -108.92,
    "Lat": 45.63
  },
  "Climate": {
    "Jan": {
      "Avg High": 36,
      "Avg Low": 16,
      "Avg Precipitation": "NaN"
    },
    "Feb": {
      "Avg High": 38,
      "Avg Low": 19,
      "Avg Precipitation": "NaN"
    },
    "Mar": {
      "Avg High": 47,
      "Avg Low": 25,
      "Avg Precipitation": "NaN"
    },
    "Apr": {
      "Avg High": 59,
      "Avg Low": 33,
      "Avg Precipitation": "NaN"
    },
    "May": {
      "Avg High": 63,
      "Avg Low": 42,
      "Avg Precipitation": "NaN"
    },
    "Jun": {
      "Avg High": 69,
      "Avg Low": 50,
      "Avg Precipitation": "NaN"
    },
    "Jul": {
      "Avg High": 84,
      "Avg Low": 56,
      "Avg Precipitation": "NaN"
    },
    "Sep": {
      "Avg High": 68,
      "Avg Low": 45,
      "Avg Precipitation": "NaN"
    },
    "Oct": {
      "Avg High": 54,
      "Avg Low": 34,
      "Avg Precipitation": "NaN"
    },
    "Nov": {
      "Avg High": 42,
      "Avg Low": 24,
      "Avg Precipitation": "NaN"
    },
    "Dec": {
      "Avg High": 34,
      "Avg Low": 16,
      "Avg Precipitation": "NaN"
    }
  }
},{
  "_id": {
    "$oid": "61887199f8e3c4669ee6459d"
  },
  "Location": {
    "State": "Nebraska",
    "City": "Ashland",
    "Long": -96.37,
    "Lat": 41.04
  },
  "Climate": {
    "Jan": {
      "Avg High": 35,
      "Avg Low": 13,
      "Avg Precipitation": 0.78
    },
    "Feb": {
      "Avg High": 40,
      "Avg Low": 17,
      "Avg Precipitation": 0.84
    },
    "Mar": {
      "Avg High": 52,
      "Avg Low": 27,
      "Avg Precipitation": 1.89
    },
    "Apr": {
      "Avg High": 65,
      "Avg Low": 38,
      "Avg Precipitation": 2.98
    },
    "May": {
      "Avg High": 75,
      "Avg Low": 50,
      "Avg Precipitation": 4.82
    },
    "Jun": {
      "Avg High": 85,
      "Avg Low": 61,
      "Avg Precipitation": 4.27
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 65,
      "Avg Precipitation": 3.73
    },
    "Sep": {
      "Avg High": 80,
      "Avg Low": 53,
      "Avg Precipitation": 2.77
    },
    "Oct": {
      "Avg High": 67,
      "Avg Low": 40,
      "Avg Precipitation": 2.24
    },
    "Nov": {
      "Avg High": 51,
      "Avg Low": 28,
      "Avg Precipitation": 1.56
    },
    "Dec": {
      "Avg High": 37,
      "Avg Low": 16,
      "Avg Precipitation": 1.06
    }
  }
},{
  "_id": {
    "$oid": "6188719df8e3c4669ee6459e"
  },
  "Location": {
    "State": "Nebraska",
    "City": "Cambridge",
    "Long": -100.16,
    "Lat": 40.31
  },
  "Climate": {
    "Jan": {
      "Avg High": 41,
      "Avg Low": 11,
      "Avg Precipitation": 0.44
    },
    "Feb": {
      "Avg High": 44,
      "Avg Low": 15,
      "Avg Precipitation": 0.55
    },
    "Mar": {
      "Avg High": 54,
      "Avg Low": 25,
      "Avg Precipitation": 1.42
    },
    "Apr": {
      "Avg High": 65,
      "Avg Low": 35,
      "Avg Precipitation": 2.12
    },
    "May": {
      "Avg High": 74,
      "Avg Low": 46,
      "Avg Precipitation": 3.41
    },
    "Jun": {
      "Avg High": 84,
      "Avg Low": 57,
      "Avg Precipitation": 3.62
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 62,
      "Avg Precipitation": 3.29
    },
    "Sep": {
      "Avg High": 80,
      "Avg Low": 49,
      "Avg Precipitation": 1.61
    },
    "Oct": {
      "Avg High": 67,
      "Avg Low": 35,
      "Avg Precipitation": 1.72
    },
    "Nov": {
      "Avg High": 53,
      "Avg Low": 23,
      "Avg Precipitation": 0.99
    },
    "Dec": {
      "Avg High": 41,
      "Avg Low": 13,
      "Avg Precipitation": 0.6
    }
  }
},{
  "_id": {
    "$oid": "618871a1f8e3c4669ee6459f"
  },
  "Location": {
    "State": "Nebraska",
    "City": "Harrison",
    "Long": -103.88,
    "Lat": 42.69
  },
  "Climate": {
    "Jan": {
      "Avg High": 35,
      "Avg Low": 12,
      "Avg Precipitation": 0.32
    },
    "Feb": {
      "Avg High": 37,
      "Avg Low": 14,
      "Avg Precipitation": 0.38
    },
    "Mar": {
      "Avg High": 46,
      "Avg Low": 22,
      "Avg Precipitation": 0.98
    },
    "Apr": {
      "Avg High": 55,
      "Avg Low": 29,
      "Avg Precipitation": 2.2
    },
    "May": {
      "Avg High": 65,
      "Avg Low": 39,
      "Avg Precipitation": 3.31
    },
    "Jun": {
      "Avg High": 76,
      "Avg Low": 49,
      "Avg Precipitation": 2.71
    },
    "Jul": {
      "Avg High": 85,
      "Avg Low": 55,
      "Avg Precipitation": 1.89
    },
    "Sep": {
      "Avg High": 73,
      "Avg Low": 43,
      "Avg Precipitation": 1.46
    },
    "Oct": {
      "Avg High": 59,
      "Avg Low": 31,
      "Avg Precipitation": 1.36
    },
    "Nov": {
      "Avg High": 44,
      "Avg Low": 20,
      "Avg Precipitation": 0.63
    },
    "Dec": {
      "Avg High": 35,
      "Avg Low": 11,
      "Avg Precipitation": 0.4
    }
  }
},{
  "_id": {
    "$oid": "618871a5f8e3c4669ee645a0"
  },
  "Location": {
    "State": "Nebraska",
    "City": "Newport",
    "Long": -99.33,
    "Lat": 42.6
  },
  "Climate": {
    "Jan": {
      "Avg High": 32,
      "Avg Low": 10,
      "Avg Precipitation": 0.54
    },
    "Feb": {
      "Avg High": 36,
      "Avg Low": 14,
      "Avg Precipitation": 0.69
    },
    "Mar": {
      "Avg High": 46,
      "Avg Low": 23,
      "Avg Precipitation": 1.52
    },
    "Apr": {
      "Avg High": 58,
      "Avg Low": 34,
      "Avg Precipitation": 2.8
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 46,
      "Avg Precipitation": 3.95
    },
    "Jun": {
      "Avg High": 79,
      "Avg Low": 55,
      "Avg Precipitation": 3.95
    },
    "Jul": {
      "Avg High": 85,
      "Avg Low": 61,
      "Avg Precipitation": 3.24
    },
    "Sep": {
      "Avg High": 74,
      "Avg Low": 48,
      "Avg Precipitation": 2.66
    },
    "Oct": {
      "Avg High": 61,
      "Avg Low": 35,
      "Avg Precipitation": 2.23
    },
    "Nov": {
      "Avg High": 45,
      "Avg Low": 22,
      "Avg Precipitation": 0.99
    },
    "Dec": {
      "Avg High": 33,
      "Avg Low": 12,
      "Avg Precipitation": 0.66
    }
  }
},{
  "_id": {
    "$oid": "618871aaf8e3c4669ee645a1"
  },
  "Location": {
    "State": "Nevada",
    "City": "Henderson",
    "Long": -114.98,
    "Lat": 36.04
  },
  "Climate": {
    "Jan": {
      "Avg High": 55,
      "Avg Low": 31,
      "Avg Precipitation": 0.94
    },
    "Feb": {
      "Avg High": 59,
      "Avg Low": 35,
      "Avg Precipitation": 1.14
    },
    "Mar": {
      "Avg High": 67,
      "Avg Low": 39,
      "Avg Precipitation": 0.78
    },
    "Apr": {
      "Avg High": 75,
      "Avg Low": 44,
      "Avg Precipitation": 0.34
    },
    "May": {
      "Avg High": 88,
      "Avg Low": 53,
      "Avg Precipitation": 0.15
    },
    "Jun": {
      "Avg High": 98,
      "Avg Low": 62,
      "Avg Precipitation": 0.1
    },
    "Jul": {
      "Avg High": 103,
      "Avg Low": 69,
      "Avg Precipitation": 0.7
    },
    "Sep": {
      "Avg High": 91,
      "Avg Low": 60,
      "Avg Precipitation": 0.47
    },
    "Oct": {
      "Avg High": 77,
      "Avg Low": 49,
      "Avg Precipitation": 0.45
    },
    "Nov": {
      "Avg High": 63,
      "Avg Low": 38,
      "Avg Precipitation": 0.46
    },
    "Dec": {
      "Avg High": 53,
      "Avg Low": 31,
      "Avg Precipitation": 0.73
    }
  }
},{
  "_id": {
    "$oid": "618871adf8e3c4669ee645a2"
  },
  "Location": {
    "State": "New Hampshire",
    "City": "Monroe",
    "Long": -72.05,
    "Lat": 44.26
  },
  "Climate": {
    "Jan": {
      "Avg High": 25,
      "Avg Low": 2,
      "Avg Precipitation": 2.48
    },
    "Feb": {
      "Avg High": 29,
      "Avg Low": 3,
      "Avg Precipitation": 1.85
    },
    "Mar": {
      "Avg High": 39,
      "Avg Low": 16,
      "Avg Precipitation": 2.36
    },
    "Apr": {
      "Avg High": 52,
      "Avg Low": 29,
      "Avg Precipitation": 2.52
    },
    "May": {
      "Avg High": 66,
      "Avg Low": 41,
      "Avg Precipitation": 2.99
    },
    "Jun": {
      "Avg High": 75,
      "Avg Low": 51,
      "Avg Precipitation": 3.9
    },
    "Jul": {
      "Avg High": 80,
      "Avg Low": 56,
      "Avg Precipitation": 3.66
    },
    "Sep": {
      "Avg High": 68,
      "Avg Low": 46,
      "Avg Precipitation": 3.39
    },
    "Oct": {
      "Avg High": 56,
      "Avg Low": 35,
      "Avg Precipitation": 3.23
    },
    "Nov": {
      "Avg High": 42,
      "Avg Low": 26,
      "Avg Precipitation": 3.11
    },
    "Dec": {
      "Avg High": 30,
      "Avg Low": 11,
      "Avg Precipitation": 2.64
    }
  }
},{
  "_id": {
    "$oid": "618871b3f8e3c4669ee645a3"
  },
  "Location": {
    "State": "New Hampshire",
    "City": "Newport",
    "Long": -72.17,
    "Lat": 43.37
  },
  "Climate": {
    "Jan": {
      "Avg High": 29,
      "Avg Low": 6,
      "Avg Precipitation": 2.66
    },
    "Feb": {
      "Avg High": 33,
      "Avg Low": 7,
      "Avg Precipitation": 2.51
    },
    "Mar": {
      "Avg High": 41,
      "Avg Low": 17,
      "Avg Precipitation": 3.18
    },
    "Apr": {
      "Avg High": 54,
      "Avg Low": 29,
      "Avg Precipitation": 3.29
    },
    "May": {
      "Avg High": 66,
      "Avg Low": 40,
      "Avg Precipitation": 3.53
    },
    "Jun": {
      "Avg High": 75,
      "Avg Low": 50,
      "Avg Precipitation": 3.99
    },
    "Jul": {
      "Avg High": 79,
      "Avg Low": 54,
      "Avg Precipitation": 4.1
    },
    "Sep": {
      "Avg High": 70,
      "Avg Low": 44,
      "Avg Precipitation": 3.59
    },
    "Oct": {
      "Avg High": 58,
      "Avg Low": 32,
      "Avg Precipitation": 4.34
    },
    "Nov": {
      "Avg High": 46,
      "Avg Low": 25,
      "Avg Precipitation": 3.49
    },
    "Dec": {
      "Avg High": 34,
      "Avg Low": 14,
      "Avg Precipitation": 3.08
    }
  }
},{
  "_id": {
    "$oid": "618871bef8e3c4669ee645a4"
  },
  "Location": {
    "State": "New Mexico",
    "City": "Santa Fe",
    "Long": -106.09,
    "Lat": 35.62
  },
  "Climate": {
    "Jan": {
      "Avg High": 44,
      "Avg Low": 17,
      "Avg Precipitation": 0.6
    },
    "Feb": {
      "Avg High": 48,
      "Avg Low": 22,
      "Avg Precipitation": 0.53
    },
    "Mar": {
      "Avg High": 56,
      "Avg Low": 26,
      "Avg Precipitation": 0.94
    },
    "Apr": {
      "Avg High": 65,
      "Avg Low": 32,
      "Avg Precipitation": 0.77
    },
    "May": {
      "Avg High": 74,
      "Avg Low": 41,
      "Avg Precipitation": 0.94
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 49,
      "Avg Precipitation": 1.29
    },
    "Jul": {
      "Avg High": 86,
      "Avg Low": 54,
      "Avg Precipitation": 2.33
    },
    "Sep": {
      "Avg High": 78,
      "Avg Low": 47,
      "Avg Precipitation": 1.54
    },
    "Oct": {
      "Avg High": 67,
      "Avg Low": 35,
      "Avg Precipitation": 1.33
    },
    "Nov": {
      "Avg High": 53,
      "Avg Low": 25,
      "Avg Precipitation": 0.85
    },
    "Dec": {
      "Avg High": 43,
      "Avg Low": 17,
      "Avg Precipitation": 0.83
    }
  }
},{
  "_id": {
    "$oid": "618871c2f8e3c4669ee645a5"
  },
  "Location": {
    "State": "North Carolina",
    "City": "Asheville",
    "Long": -82.54,
    "Lat": 35.44
  },
  "Climate": {
    "Jan": {
      "Avg High": 47,
      "Avg Low": 28,
      "Avg Precipitation": 2.89
    },
    "Feb": {
      "Avg High": 50,
      "Avg Low": 31,
      "Avg Precipitation": 3.22
    },
    "Mar": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": 3.36
    },
    "Apr": {
      "Avg High": 67,
      "Avg Low": 45,
      "Avg Precipitation": 3.04
    },
    "May": {
      "Avg High": 75,
      "Avg Low": 53,
      "Avg Precipitation": 3.25
    },
    "Jun": {
      "Avg High": 82,
      "Avg Low": 61,
      "Avg Precipitation": 3.4
    },
    "Jul": {
      "Avg High": 85,
      "Avg Low": 65,
      "Avg Precipitation": 3.33
    },
    "Sep": {
      "Avg High": 77,
      "Avg Low": 57,
      "Avg Precipitation": 3.24
    },
    "Oct": {
      "Avg High": 68,
      "Avg Low": 46,
      "Avg Precipitation": 2.14
    },
    "Nov": {
      "Avg High": 58,
      "Avg Low": 38,
      "Avg Precipitation": 2.93
    },
    "Dec": {
      "Avg High": 49,
      "Avg Low": 30,
      "Avg Precipitation": 2.75
    }
  }
},{
  "_id": {
    "$oid": "618871c6f8e3c4669ee645a6"
  },
  "Location": {
    "State": "North Carolina",
    "City": "Henderson",
    "Long": -78.4,
    "Lat": 36.33
  },
  "Climate": {
    "Jan": {
      "Avg High": 49,
      "Avg Low": 24,
      "Avg Precipitation": 3.49
    },
    "Feb": {
      "Avg High": 53,
      "Avg Low": 26,
      "Avg Precipitation": 2.98
    },
    "Mar": {
      "Avg High": 61,
      "Avg Low": 33,
      "Avg Precipitation": 4.04
    },
    "Apr": {
      "Avg High": 71,
      "Avg Low": 41,
      "Avg Precipitation": 3.41
    },
    "May": {
      "Avg High": 78,
      "Avg Low": 51,
      "Avg Precipitation": 3.44
    },
    "Jun": {
      "Avg High": 86,
      "Avg Low": 61,
      "Avg Precipitation": 4.05
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 65,
      "Avg Precipitation": 4.62
    },
    "Sep": {
      "Avg High": 81,
      "Avg Low": 56,
      "Avg Precipitation": 4.17
    },
    "Oct": {
      "Avg High": 71,
      "Avg Low": 43,
      "Avg Precipitation": 3.29
    },
    "Nov": {
      "Avg High": 62,
      "Avg Low": 35,
      "Avg Precipitation": 3.4
    },
    "Dec": {
      "Avg High": 52,
      "Avg Low": 27,
      "Avg Precipitation": 3.5
    }
  }
},{
  "_id": {
    "$oid": "618871caf8e3c4669ee645a7"
  },
  "Location": {
    "State": "North Carolina",
    "City": "Jackson",
    "Long": -77.42,
    "Lat": 36.39
  },
  "Climate": {
    "Jan": {
      "Avg High": 49,
      "Avg Low": 28,
      "Avg Precipitation": 3.61
    },
    "Feb": {
      "Avg High": 54,
      "Avg Low": 30,
      "Avg Precipitation": 3.11
    },
    "Mar": {
      "Avg High": 62,
      "Avg Low": 35,
      "Avg Precipitation": 4.14
    },
    "Apr": {
      "Avg High": 71,
      "Avg Low": 44,
      "Avg Precipitation": 3.43
    },
    "May": {
      "Avg High": 78,
      "Avg Low": 53,
      "Avg Precipitation": 3.57
    },
    "Jun": {
      "Avg High": 86,
      "Avg Low": 63,
      "Avg Precipitation": 4.03
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 68,
      "Avg Precipitation": 5.36
    },
    "Sep": {
      "Avg High": 82,
      "Avg Low": 59,
      "Avg Precipitation": 4.68
    },
    "Oct": {
      "Avg High": 72,
      "Avg Low": 47,
      "Avg Precipitation": 3.3
    },
    "Nov": {
      "Avg High": 63,
      "Avg Low": 38,
      "Avg Precipitation": 3.26
    },
    "Dec": {
      "Avg High": 53,
      "Avg Low": 31,
      "Avg Precipitation": 3.42
    }
  }
},{
  "_id": {
    "$oid": "618871cef8e3c4669ee645a8"
  },
  "Location": {
    "State": "North Carolina",
    "City": "Monroe",
    "Long": -80.62,
    "Lat": 35.02
  },
  "Climate": {
    "Jan": {
      "Avg High": 53,
      "Avg Low": 30,
      "Avg Precipitation": 3.99
    },
    "Feb": {
      "Avg High": 57,
      "Avg Low": 33,
      "Avg Precipitation": 0
    },
    "Mar": {
      "Avg High": 64,
      "Avg Low": 38,
      "Avg Precipitation": 4.29
    },
    "Apr": {
      "Avg High": 73,
      "Avg Low": 47,
      "Avg Precipitation": 3.09
    },
    "May": {
      "Avg High": 81,
      "Avg Low": 56,
      "Avg Precipitation": 3.04
    },
    "Jun": {
      "Avg High": 88,
      "Avg Low": 65,
      "Avg Precipitation": 4.35
    },
    "Jul": {
      "Avg High": 91,
      "Avg Low": 69,
      "Avg Precipitation": 4.22
    },
    "Sep": {
      "Avg High": 83,
      "Avg Low": 60,
      "Avg Precipitation": 3.99
    },
    "Oct": {
      "Avg High": 74,
      "Avg Low": 49,
      "Avg Precipitation": 4
    },
    "Nov": {
      "Avg High": 65,
      "Avg Low": 39,
      "Avg Precipitation": 3.31
    },
    "Dec": {
      "Avg High": 55,
      "Avg Low": 32,
      "Avg Precipitation": 3.73
    }
  }
},{
  "_id": {
    "$oid": "618871d2f8e3c4669ee645a9"
  },
  "Location": {
    "State": "North Carolina",
    "City": "Newport",
    "Long": -76.86,
    "Lat": 34.79
  },
  "Climate": {
    "Jan": {
      "Avg High": 54,
      "Avg Low": 35,
      "Avg Precipitation": "NaN"
    },
    "Feb": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": "NaN"
    },
    "Mar": {
      "Avg High": 62,
      "Avg Low": 44,
      "Avg Precipitation": "NaN"
    },
    "Apr": {
      "Avg High": 71,
      "Avg Low": 53,
      "Avg Precipitation": "NaN"
    },
    "May": {
      "Avg High": 77,
      "Avg Low": 60,
      "Avg Precipitation": "NaN"
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 69,
      "Avg Precipitation": "NaN"
    },
    "Jul": {
      "Avg High": 84,
      "Avg Low": 71,
      "Avg Precipitation": "NaN"
    },
    "Sep": {
      "Avg High": 80,
      "Avg Low": 65,
      "Avg Precipitation": "NaN"
    },
    "Oct": {
      "Avg High": 73,
      "Avg Low": 55,
      "Avg Precipitation": "NaN"
    },
    "Nov": {
      "Avg High": 66,
      "Avg Low": 45,
      "Avg Precipitation": "NaN"
    },
    "Dec": {
      "Avg High": 57,
      "Avg Low": 38,
      "Avg Precipitation": "NaN"
    }
  }
},{
  "_id": {
    "$oid": "618871d6f8e3c4669ee645aa"
  },
  "Location": {
    "State": "North Carolina",
    "City": "Washington",
    "Long": -77.05,
    "Lat": 35.55
  },
  "Climate": {
    "Jan": {
      "Avg High": 54,
      "Avg Low": 34,
      "Avg Precipitation": 3.85
    },
    "Feb": {
      "Avg High": 57,
      "Avg Low": 36,
      "Avg Precipitation": 3.32
    },
    "Mar": {
      "Avg High": 64,
      "Avg Low": 42,
      "Avg Precipitation": 4.22
    },
    "Apr": {
      "Avg High": 73,
      "Avg Low": 50,
      "Avg Precipitation": 3.14
    },
    "May": {
      "Avg High": 80,
      "Avg Low": 59,
      "Avg Precipitation": 4.11
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 69,
      "Avg Precipitation": 4.44
    },
    "Jul": {
      "Avg High": 90,
      "Avg Low": 73,
      "Avg Precipitation": 5.45
    },
    "Sep": {
      "Avg High": 83,
      "Avg Low": 65,
      "Avg Precipitation": 5.81
    },
    "Oct": {
      "Avg High": 74,
      "Avg Low": 53,
      "Avg Precipitation": 3.28
    },
    "Nov": {
      "Avg High": 66,
      "Avg Low": 44,
      "Avg Precipitation": 3.2
    },
    "Dec": {
      "Avg High": 57,
      "Avg Low": 36,
      "Avg Precipitation": 3.26
    }
  }
},{
  "_id": {
    "$oid": "618871daf8e3c4669ee645ab"
  },
  "Location": {
    "State": "North Dakota",
    "City": "Fargo",
    "Long": -96.82,
    "Lat": 46.92
  },
  "Climate": {
    "Jan": {
      "Avg High": 18,
      "Avg Low": 0,
      "Avg Precipitation": 0.7
    },
    "Feb": {
      "Avg High": 24,
      "Avg Low": 6,
      "Avg Precipitation": 0.61
    },
    "Mar": {
      "Avg High": 36,
      "Avg Low": 19,
      "Avg Precipitation": 1.3
    },
    "Apr": {
      "Avg High": 56,
      "Avg Low": 33,
      "Avg Precipitation": 1.36
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 45,
      "Avg Precipitation": 2.81
    },
    "Jun": {
      "Avg High": 77,
      "Avg Low": 55,
      "Avg Precipitation": 3.9
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 60,
      "Avg Precipitation": 2.79
    },
    "Sep": {
      "Avg High": 71,
      "Avg Low": 47,
      "Avg Precipitation": 2.57
    },
    "Oct": {
      "Avg High": 56,
      "Avg Low": 35,
      "Avg Precipitation": 2.15
    },
    "Nov": {
      "Avg High": 37,
      "Avg Low": 20,
      "Avg Precipitation": 1
    },
    "Dec": {
      "Avg High": 22,
      "Avg Low": 6,
      "Avg Precipitation": 0.83
    }
  }
},{
  "_id": {
    "$oid": "618871ddf8e3c4669ee645ac"
  },
  "Location": {
    "State": "Ohio",
    "City": "Ashland",
    "Long": -82.26,
    "Lat": 40.9
  },
  "Climate": {
    "Jan": {
      "Avg High": 32,
      "Avg Low": 15,
      "Avg Precipitation": 2.4
    },
    "Feb": {
      "Avg High": 36,
      "Avg Low": 17,
      "Avg Precipitation": 2.13
    },
    "Mar": {
      "Avg High": 47,
      "Avg Low": 26,
      "Avg Precipitation": 2.83
    },
    "Apr": {
      "Avg High": 59,
      "Avg Low": 35,
      "Avg Precipitation": 3.54
    },
    "May": {
      "Avg High": 70,
      "Avg Low": 46,
      "Avg Precipitation": 4.09
    },
    "Jun": {
      "Avg High": 79,
      "Avg Low": 56,
      "Avg Precipitation": 4.02
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 60,
      "Avg Precipitation": 4.09
    },
    "Sep": {
      "Avg High": 74,
      "Avg Low": 50,
      "Avg Precipitation": 3.31
    },
    "Oct": {
      "Avg High": 62,
      "Avg Low": 39,
      "Avg Precipitation": 2.52
    },
    "Nov": {
      "Avg High": 49,
      "Avg Low": 31,
      "Avg Precipitation": 3.15
    },
    "Dec": {
      "Avg High": 37,
      "Avg Low": 21,
      "Avg Precipitation": 2.68
    }
  }
},{
  "_id": {
    "$oid": "618871e1f8e3c4669ee645ad"
  },
  "Location": {
    "State": "Ohio",
    "City": "Cambridge",
    "Long": -81.58,
    "Lat": 39.98
  },
  "Climate": {
    "Jan": {
      "Avg High": 38,
      "Avg Low": 22,
      "Avg Precipitation": 2.98
    },
    "Feb": {
      "Avg High": 43,
      "Avg Low": 24,
      "Avg Precipitation": 2.28
    },
    "Mar": {
      "Avg High": 53,
      "Avg Low": 31,
      "Avg Precipitation": 2.99
    },
    "Apr": {
      "Avg High": 66,
      "Avg Low": 41,
      "Avg Precipitation": 3.49
    },
    "May": {
      "Avg High": 74,
      "Avg Low": 50,
      "Avg Precipitation": 4.25
    },
    "Jun": {
      "Avg High": 82,
      "Avg Low": 59,
      "Avg Precipitation": 4.05
    },
    "Jul": {
      "Avg High": 85,
      "Avg Low": 63,
      "Avg Precipitation": 4.05
    },
    "Sep": {
      "Avg High": 78,
      "Avg Low": 54,
      "Avg Precipitation": 3.29
    },
    "Oct": {
      "Avg High": 66,
      "Avg Low": 43,
      "Avg Precipitation": 2.81
    },
    "Nov": {
      "Avg High": 54,
      "Avg Low": 35,
      "Avg Precipitation": 3.3
    },
    "Dec": {
      "Avg High": 42,
      "Avg Low": 26,
      "Avg Precipitation": 2.82
    }
  }
},{
  "_id": {
    "$oid": "618871e5f8e3c4669ee645ae"
  },
  "Location": {
    "State": "Ohio",
    "City": "Cleveland",
    "Long": -81.69,
    "Lat": 41.5
  },
  "Climate": {
    "Jan": {
      "Avg High": 34,
      "Avg Low": 22,
      "Avg Precipitation": 2.72
    },
    "Feb": {
      "Avg High": 38,
      "Avg Low": 24,
      "Avg Precipitation": 2.34
    },
    "Mar": {
      "Avg High": 47,
      "Avg Low": 30,
      "Avg Precipitation": 2.93
    },
    "Apr": {
      "Avg High": 59,
      "Avg Low": 40,
      "Avg Precipitation": 3.49
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 50,
      "Avg Precipitation": 3.66
    },
    "Jun": {
      "Avg High": 79,
      "Avg Low": 60,
      "Avg Precipitation": 3.43
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 64,
      "Avg Precipitation": 3.46
    },
    "Sep": {
      "Avg High": 74,
      "Avg Low": 56,
      "Avg Precipitation": 3.81
    },
    "Oct": {
      "Avg High": 62,
      "Avg Low": 45,
      "Avg Precipitation": 3.07
    },
    "Nov": {
      "Avg High": 51,
      "Avg Low": 37,
      "Avg Precipitation": 3.62
    },
    "Dec": {
      "Avg High": 38,
      "Avg Low": 26,
      "Avg Precipitation": 3.1
    }
  }
},{
  "_id": {
    "$oid": "618871e9f8e3c4669ee645af"
  },
  "Location": {
    "State": "Ohio",
    "City": "Jackson",
    "Long": -82.58,
    "Lat": 38.98
  },
  "Climate": {
    "Jan": {
      "Avg High": 38,
      "Avg Low": 21,
      "Avg Precipitation": 2.98
    },
    "Feb": {
      "Avg High": 42,
      "Avg Low": 22,
      "Avg Precipitation": 2.97
    },
    "Mar": {
      "Avg High": 53,
      "Avg Low": 30,
      "Avg Precipitation": 3.92
    },
    "Apr": {
      "Avg High": 65,
      "Avg Low": 40,
      "Avg Precipitation": 3.47
    },
    "May": {
      "Avg High": 74,
      "Avg Low": 49,
      "Avg Precipitation": 4.77
    },
    "Jun": {
      "Avg High": 81,
      "Avg Low": 59,
      "Avg Precipitation": 4.01
    },
    "Jul": {
      "Avg High": 84,
      "Avg Low": 63,
      "Avg Precipitation": 4.39
    },
    "Sep": {
      "Avg High": 77,
      "Avg Low": 53,
      "Avg Precipitation": 2.85
    },
    "Oct": {
      "Avg High": 65,
      "Avg Low": 41,
      "Avg Precipitation": 2.82
    },
    "Nov": {
      "Avg High": 54,
      "Avg Low": 33,
      "Avg Precipitation": 3.37
    },
    "Dec": {
      "Avg High": 42,
      "Avg Low": 25,
      "Avg Precipitation": 3.22
    }
  }
},{
  "_id": {
    "$oid": "618871edf8e3c4669ee645b0"
  },
  "Location": {
    "State": "Ohio",
    "City": "Newport",
    "Long": -81.23,
    "Lat": 39.39
  },
  "Climate": {
    "Jan": {
      "Avg High": 39,
      "Avg Low": 21,
      "Avg Precipitation": 3.08
    },
    "Feb": {
      "Avg High": 43,
      "Avg Low": 23,
      "Avg Precipitation": 2.89
    },
    "Mar": {
      "Avg High": 53,
      "Avg Low": 29,
      "Avg Precipitation": 3.87
    },
    "Apr": {
      "Avg High": 65,
      "Avg Low": 39,
      "Avg Precipitation": 3.35
    },
    "May": {
      "Avg High": 74,
      "Avg Low": 49,
      "Avg Precipitation": 4.64
    },
    "Jun": {
      "Avg High": 81,
      "Avg Low": 58,
      "Avg Precipitation": 4.06
    },
    "Jul": {
      "Avg High": 84,
      "Avg Low": 63,
      "Avg Precipitation": 4.59
    },
    "Sep": {
      "Avg High": 77,
      "Avg Low": 54,
      "Avg Precipitation": 3.11
    },
    "Oct": {
      "Avg High": 66,
      "Avg Low": 42,
      "Avg Precipitation": 2.89
    },
    "Nov": {
      "Avg High": 55,
      "Avg Low": 33,
      "Avg Precipitation": 3.31
    },
    "Dec": {
      "Avg High": 43,
      "Avg Low": 25,
      "Avg Precipitation": 3.36
    }
  }
},{
  "_id": {
    "$oid": "618871f1f8e3c4669ee645b1"
  },
  "Location": {
    "State": "Oklahoma",
    "City": "Chandler",
    "Long": -96.82,
    "Lat": 35.72
  },
  "Climate": {
    "Jan": {
      "Avg High": 51,
      "Avg Low": 24,
      "Avg Precipitation": 1.29
    },
    "Feb": {
      "Avg High": 56,
      "Avg Low": 28,
      "Avg Precipitation": 1.82
    },
    "Mar": {
      "Avg High": 65,
      "Avg Low": 36,
      "Avg Precipitation": 3.21
    },
    "Apr": {
      "Avg High": 74,
      "Avg Low": 46,
      "Avg Precipitation": 3.35
    },
    "May": {
      "Avg High": 81,
      "Avg Low": 56,
      "Avg Precipitation": 5.09
    },
    "Jun": {
      "Avg High": 89,
      "Avg Low": 65,
      "Avg Precipitation": 4.87
    },
    "Jul": {
      "Avg High": 94,
      "Avg Low": 70,
      "Avg Precipitation": 2.71
    },
    "Sep": {
      "Avg High": 86,
      "Avg Low": 59,
      "Avg Precipitation": 3.8
    },
    "Oct": {
      "Avg High": 75,
      "Avg Low": 48,
      "Avg Precipitation": 3.69
    },
    "Nov": {
      "Avg High": 64,
      "Avg Low": 37,
      "Avg Precipitation": 2.58
    },
    "Dec": {
      "Avg High": 52,
      "Avg Low": 26,
      "Avg Precipitation": 1.95
    }
  }
},{
  "_id": {
    "$oid": "618871f4f8e3c4669ee645b2"
  },
  "Location": {
    "State": "Oklahoma",
    "City": "Cleveland",
    "Long": -96.46,
    "Lat": 36.28
  },
  "Climate": {
    "Jan": {
      "Avg High": 47,
      "Avg Low": 25,
      "Avg Precipitation": 1.34
    },
    "Feb": {
      "Avg High": 54,
      "Avg Low": 30,
      "Avg Precipitation": 1.97
    },
    "Mar": {
      "Avg High": 63,
      "Avg Low": 39,
      "Avg Precipitation": 3.54
    },
    "Apr": {
      "Avg High": 73,
      "Avg Low": 48,
      "Avg Precipitation": 4.02
    },
    "May": {
      "Avg High": 79,
      "Avg Low": 57,
      "Avg Precipitation": 5.55
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 66,
      "Avg Precipitation": 4.02
    },
    "Jul": {
      "Avg High": 93,
      "Avg Low": 70,
      "Avg Precipitation": 2.95
    },
    "Sep": {
      "Avg High": 84,
      "Avg Low": 61,
      "Avg Precipitation": 4.21
    },
    "Oct": {
      "Avg High": 74,
      "Avg Low": 50,
      "Avg Precipitation": 3.07
    },
    "Nov": {
      "Avg High": 60,
      "Avg Low": 38,
      "Avg Precipitation": 3.31
    },
    "Dec": {
      "Avg High": 50,
      "Avg Low": 29,
      "Avg Precipitation": 1.93
    }
  }
},{
  "_id": {
    "$oid": "618871f9f8e3c4669ee645b3"
  },
  "Location": {
    "State": "Oregon",
    "City": "Arlington",
    "Long": -120.18,
    "Lat": 45.72
  },
  "Climate": {
    "Jan": {
      "Avg High": 40,
      "Avg Low": 30,
      "Avg Precipitation": 1.39
    },
    "Feb": {
      "Avg High": 46,
      "Avg Low": 31,
      "Avg Precipitation": 0.98
    },
    "Mar": {
      "Avg High": 56,
      "Avg Low": 36,
      "Avg Precipitation": 0.79
    },
    "Apr": {
      "Avg High": 64,
      "Avg Low": 42,
      "Avg Precipitation": 0.65
    },
    "May": {
      "Avg High": 73,
      "Avg Low": 50,
      "Avg Precipitation": 0.69
    },
    "Jun": {
      "Avg High": 80,
      "Avg Low": 56,
      "Avg Precipitation": 0.48
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 62,
      "Avg Precipitation": 0.12
    },
    "Sep": {
      "Avg High": 79,
      "Avg Low": 52,
      "Avg Precipitation": 0.44
    },
    "Oct": {
      "Avg High": 65,
      "Avg Low": 42,
      "Avg Precipitation": 0.68
    },
    "Nov": {
      "Avg High": 49,
      "Avg Low": 35,
      "Avg Precipitation": 1.2
    },
    "Dec": {
      "Avg High": 39,
      "Avg Low": 29,
      "Avg Precipitation": 1.61
    }
  }
},{
  "_id": {
    "$oid": "618871fef8e3c4669ee645b4"
  },
  "Location": {
    "State": "Oregon",
    "City": "Ashland",
    "Long": -122.66,
    "Lat": 42.19
  },
  "Climate": {
    "Jan": {
      "Avg High": 49,
      "Avg Low": 29,
      "Avg Precipitation": 2.26
    },
    "Feb": {
      "Avg High": 54,
      "Avg Low": 30,
      "Avg Precipitation": 1.89
    },
    "Mar": {
      "Avg High": 58,
      "Avg Low": 32,
      "Avg Precipitation": 2.03
    },
    "Apr": {
      "Avg High": 64,
      "Avg Low": 35,
      "Avg Precipitation": 1.77
    },
    "May": {
      "Avg High": 71,
      "Avg Low": 41,
      "Avg Precipitation": 1.68
    },
    "Jun": {
      "Avg High": 79,
      "Avg Low": 46,
      "Avg Precipitation": 0.84
    },
    "Jul": {
      "Avg High": 88,
      "Avg Low": 50,
      "Avg Precipitation": 0.49
    },
    "Sep": {
      "Avg High": 80,
      "Avg Low": 43,
      "Avg Precipitation": 0.67
    },
    "Oct": {
      "Avg High": 68,
      "Avg Low": 36,
      "Avg Precipitation": 1.41
    },
    "Nov": {
      "Avg High": 53,
      "Avg Low": 32,
      "Avg Precipitation": 3
    },
    "Dec": {
      "Avg High": 48,
      "Avg Low": 29,
      "Avg Precipitation": 3.44
    }
  }
},{
  "_id": {
    "$oid": "61887200f8e3c4669ee645b5"
  },
  "Location": {
    "State": "Oregon",
    "City": "Newport",
    "Long": -124.05,
    "Lat": 44.64
  },
  "Climate": {
    "Jan": {
      "Avg High": 51,
      "Avg Low": 39,
      "Avg Precipitation": 10.24
    },
    "Feb": {
      "Avg High": 53,
      "Avg Low": 39,
      "Avg Precipitation": 8.7
    },
    "Mar": {
      "Avg High": 55,
      "Avg Low": 40,
      "Avg Precipitation": 7.76
    },
    "Apr": {
      "Avg High": 57,
      "Avg Low": 41,
      "Avg Precipitation": 4.88
    },
    "May": {
      "Avg High": 60,
      "Avg Low": 45,
      "Avg Precipitation": 3.66
    },
    "Jun": {
      "Avg High": 63,
      "Avg Low": 48,
      "Avg Precipitation": 2.72
    },
    "Jul": {
      "Avg High": 65,
      "Avg Low": 51,
      "Avg Precipitation": 1.02
    },
    "Sep": {
      "Avg High": 65,
      "Avg Low": 49,
      "Avg Precipitation": 2.4
    },
    "Oct": {
      "Avg High": 61,
      "Avg Low": 45,
      "Avg Precipitation": 5.12
    },
    "Nov": {
      "Avg High": 55,
      "Avg Low": 42,
      "Avg Precipitation": 10.67
    },
    "Dec": {
      "Avg High": 51,
      "Avg Low": 39,
      "Avg Precipitation": 11.38
    }
  }
},{
  "_id": {
    "$oid": "61887204f8e3c4669ee645b6"
  },
  "Location": {
    "State": "Oregon",
    "City": "Portland",
    "Long": -122.68,
    "Lat": 45.52
  },
  "Climate": {
    "Jan": {
      "Avg High": 47,
      "Avg Low": 36,
      "Avg Precipitation": 4.88
    },
    "Feb": {
      "Avg High": 51,
      "Avg Low": 36,
      "Avg Precipitation": 3.66
    },
    "Mar": {
      "Avg High": 57,
      "Avg Low": 40,
      "Avg Precipitation": 3.68
    },
    "Apr": {
      "Avg High": 61,
      "Avg Low": 43,
      "Avg Precipitation": 2.73
    },
    "May": {
      "Avg High": 68,
      "Avg Low": 49,
      "Avg Precipitation": 2.47
    },
    "Jun": {
      "Avg High": 74,
      "Avg Low": 54,
      "Avg Precipitation": 1.7
    },
    "Jul": {
      "Avg High": 81,
      "Avg Low": 58,
      "Avg Precipitation": 0.65
    },
    "Sep": {
      "Avg High": 76,
      "Avg Low": 53,
      "Avg Precipitation": 1.47
    },
    "Oct": {
      "Avg High": 64,
      "Avg Low": 46,
      "Avg Precipitation": 3
    },
    "Nov": {
      "Avg High": 53,
      "Avg Low": 40,
      "Avg Precipitation": 5.63
    },
    "Dec": {
      "Avg High": 46,
      "Avg Low": 35,
      "Avg Precipitation": 5.49
    }
  }
},{
  "_id": {
    "$oid": "61887208f8e3c4669ee645b7"
  },
  "Location": {
    "State": "Oregon",
    "City": "Riverside",
    "Long": -118.16,
    "Lat": 43.54
  },
  "Climate": {
    "Jan": {
      "Avg High": 38,
      "Avg Low": 20,
      "Avg Precipitation": 1.06
    },
    "Feb": {
      "Avg High": 45,
      "Avg Low": 24,
      "Avg Precipitation": 0.91
    },
    "Mar": {
      "Avg High": 55,
      "Avg Low": 28,
      "Avg Precipitation": 1.06
    },
    "Apr": {
      "Avg High": 63,
      "Avg Low": 32,
      "Avg Precipitation": 0.83
    },
    "May": {
      "Avg High": 71,
      "Avg Low": 39,
      "Avg Precipitation": 1.06
    },
    "Jun": {
      "Avg High": 81,
      "Avg Low": 46,
      "Avg Precipitation": 0.87
    },
    "Jul": {
      "Avg High": 90,
      "Avg Low": 51,
      "Avg Precipitation": 0.51
    },
    "Sep": {
      "Avg High": 79,
      "Avg Low": 40,
      "Avg Precipitation": 0.47
    },
    "Oct": {
      "Avg High": 66,
      "Avg Low": 31,
      "Avg Precipitation": 0.63
    },
    "Nov": {
      "Avg High": 48,
      "Avg Low": 25,
      "Avg Precipitation": 1.02
    },
    "Dec": {
      "Avg High": 38,
      "Avg Low": 19,
      "Avg Precipitation": 1.1
    }
  }
},{
  "_id": {
    "$oid": "6188720bf8e3c4669ee645b8"
  },
  "Location": {
    "State": "Pennsylvania",
    "City": "Newport",
    "Long": -77.13,
    "Lat": 40.48
  },
  "Climate": {
    "Jan": {
      "Avg High": 38,
      "Avg Low": 20,
      "Avg Precipitation": 2.28
    },
    "Feb": {
      "Avg High": 42,
      "Avg Low": 22,
      "Avg Precipitation": 2.86
    },
    "Mar": {
      "Avg High": 51,
      "Avg Low": 29,
      "Avg Precipitation": 3.19
    },
    "Apr": {
      "Avg High": 64,
      "Avg Low": 38,
      "Avg Precipitation": 3.15
    },
    "May": {
      "Avg High": 72,
      "Avg Low": 48,
      "Avg Precipitation": 4.13
    },
    "Jun": {
      "Avg High": 81,
      "Avg Low": 57,
      "Avg Precipitation": 3.72
    },
    "Jul": {
      "Avg High": 84,
      "Avg Low": 63,
      "Avg Precipitation": 3.34
    },
    "Sep": {
      "Avg High": 76,
      "Avg Low": 55,
      "Avg Precipitation": 3.12
    },
    "Oct": {
      "Avg High": 64,
      "Avg Low": 41,
      "Avg Precipitation": 3.24
    },
    "Nov": {
      "Avg High": 54,
      "Avg Low": 33,
      "Avg Precipitation": 3.6
    },
    "Dec": {
      "Avg High": 41,
      "Avg Low": 24,
      "Avg Precipitation": 3.2
    }
  }
},{
  "_id": {
    "$oid": "61887210f8e3c4669ee645b9"
  },
  "Location": {
    "State": "Pennsylvania",
    "City": "Pittsburgh",
    "Long": -80,
    "Lat": 40.44
  },
  "Climate": {
    "Jan": {
      "Avg High": 37,
      "Avg Low": 21,
      "Avg Precipitation": 2.89
    },
    "Feb": {
      "Avg High": 40,
      "Avg Low": 22,
      "Avg Precipitation": 2.26
    },
    "Mar": {
      "Avg High": 50,
      "Avg Low": 30,
      "Avg Precipitation": 3.03
    },
    "Apr": {
      "Avg High": 62,
      "Avg Low": 39,
      "Avg Precipitation": 3
    },
    "May": {
      "Avg High": 71,
      "Avg Low": 51,
      "Avg Precipitation": 3.28
    },
    "Jun": {
      "Avg High": 79,
      "Avg Low": 61,
      "Avg Precipitation": 2.99
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 66,
      "Avg Precipitation": 3.35
    },
    "Sep": {
      "Avg High": 75,
      "Avg Low": 55,
      "Avg Precipitation": 3.02
    },
    "Oct": {
      "Avg High": 64,
      "Avg Low": 44,
      "Avg Precipitation": 2.17
    },
    "Nov": {
      "Avg High": 53,
      "Avg Low": 34,
      "Avg Precipitation": 3.13
    },
    "Dec": {
      "Avg High": 41,
      "Avg Low": 25,
      "Avg Precipitation": 2.71
    }
  }
},{
  "_id": {
    "$oid": "61887214f8e3c4669ee645ba"
  },
  "Location": {
    "State": "Pennsylvania",
    "City": "Washington",
    "Long": -80.29,
    "Lat": 40.14
  },
  "Climate": {
    "Jan": {
      "Avg High": 35,
      "Avg Low": 17,
      "Avg Precipitation": 2.87
    },
    "Feb": {
      "Avg High": 38,
      "Avg Low": 19,
      "Avg Precipitation": 2.37
    },
    "Mar": {
      "Avg High": 49,
      "Avg Low": 26,
      "Avg Precipitation": 3.24
    },
    "Apr": {
      "Avg High": 61,
      "Avg Low": 37,
      "Avg Precipitation": 3.11
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 46,
      "Avg Precipitation": 4.16
    },
    "Jun": {
      "Avg High": 78,
      "Avg Low": 54,
      "Avg Precipitation": 3.91
    },
    "Jul": {
      "Avg High": 82,
      "Avg Low": 58,
      "Avg Precipitation": 3.94
    },
    "Sep": {
      "Avg High": 74,
      "Avg Low": 50,
      "Avg Precipitation": 3.28
    },
    "Oct": {
      "Avg High": 62,
      "Avg Low": 39,
      "Avg Precipitation": 2.46
    },
    "Nov": {
      "Avg High": 51,
      "Avg Low": 31,
      "Avg Precipitation": 3.37
    },
    "Dec": {
      "Avg High": 39,
      "Avg Low": 22,
      "Avg Precipitation": 2.97
    }
  }
},{
  "_id": {
    "$oid": "61887217f8e3c4669ee645bb"
  },
  "Location": {
    "State": "Rhode Island",
    "City": "Newport",
    "Long": -71.28,
    "Lat": 41.53
  },
  "Climate": {
    "Jan": {
      "Avg High": 38,
      "Avg Low": 23,
      "Avg Precipitation": 4.21
    },
    "Feb": {
      "Avg High": 39,
      "Avg Low": 23,
      "Avg Precipitation": 3.54
    },
    "Mar": {
      "Avg High": 46,
      "Avg Low": 31,
      "Avg Precipitation": 4.53
    },
    "Apr": {
      "Avg High": 54,
      "Avg Low": 39,
      "Avg Precipitation": 4.29
    },
    "May": {
      "Avg High": 64,
      "Avg Low": 48,
      "Avg Precipitation": 3.5
    },
    "Jun": {
      "Avg High": 72,
      "Avg Low": 58,
      "Avg Precipitation": 3.11
    },
    "Jul": {
      "Avg High": 78,
      "Avg Low": 64,
      "Avg Precipitation": 2.99
    },
    "Sep": {
      "Avg High": 71,
      "Avg Low": 58,
      "Avg Precipitation": 3.58
    },
    "Oct": {
      "Avg High": 62,
      "Avg Low": 48,
      "Avg Precipitation": 3.7
    },
    "Nov": {
      "Avg High": 52,
      "Avg Low": 38,
      "Avg Precipitation": 4.49
    },
    "Dec": {
      "Avg High": 43,
      "Avg Low": 29,
      "Avg Precipitation": 4.33
    }
  }
},{
  "_id": {
    "$oid": "6188721cf8e3c4669ee645bc"
  },
  "Location": {
    "State": "South Carolina",
    "City": "Cleveland",
    "Long": -82.52,
    "Lat": 35.07
  },
  "Climate": {
    "Jan": {
      "Avg High": 44,
      "Avg Low": 26,
      "Avg Precipitation": 5.86
    },
    "Feb": {
      "Avg High": 47,
      "Avg Low": 28,
      "Avg Precipitation": 4.93
    },
    "Mar": {
      "Avg High": 56,
      "Avg Low": 35,
      "Avg Precipitation": 5.8
    },
    "Apr": {
      "Avg High": 64,
      "Avg Low": 42,
      "Avg Precipitation": 4.99
    },
    "May": {
      "Avg High": 71,
      "Avg Low": 51,
      "Avg Precipitation": 5.62
    },
    "Jun": {
      "Avg High": 76,
      "Avg Low": 59,
      "Avg Precipitation": 6.51
    },
    "Jul": {
      "Avg High": 79,
      "Avg Low": 62,
      "Avg Precipitation": 6.53
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 55,
      "Avg Precipitation": 5.91
    },
    "Oct": {
      "Avg High": 63,
      "Avg Low": 46,
      "Avg Precipitation": 5.28
    },
    "Nov": {
      "Avg High": 55,
      "Avg Low": 37,
      "Avg Precipitation": 6.3
    },
    "Dec": {
      "Avg High": 46,
      "Avg Low": 29,
      "Avg Precipitation": 6.38
    }
  }
},{
  "_id": {
    "$oid": "61887220f8e3c4669ee645bd"
  },
  "Location": {
    "State": "South Dakota",
    "City": "Arlington",
    "Long": -97.13,
    "Lat": 44.36
  },
  "Climate": {
    "Jan": {
      "Avg High": 24,
      "Avg Low": 5,
      "Avg Precipitation": 0.64
    },
    "Feb": {
      "Avg High": 30,
      "Avg Low": 11,
      "Avg Precipitation": 0.6
    },
    "Mar": {
      "Avg High": 42,
      "Avg Low": 22,
      "Avg Precipitation": 1.63
    },
    "Apr": {
      "Avg High": 58,
      "Avg Low": 34,
      "Avg Precipitation": 2.57
    },
    "May": {
      "Avg High": 70,
      "Avg Low": 46,
      "Avg Precipitation": 3.46
    },
    "Jun": {
      "Avg High": 78,
      "Avg Low": 56,
      "Avg Precipitation": 4.3
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 61,
      "Avg Precipitation": 3.55
    },
    "Sep": {
      "Avg High": 73,
      "Avg Low": 50,
      "Avg Precipitation": 2.94
    },
    "Oct": {
      "Avg High": 58,
      "Avg Low": 36,
      "Avg Precipitation": 2.2
    },
    "Nov": {
      "Avg High": 41,
      "Avg Low": 22,
      "Avg Precipitation": 1.23
    },
    "Dec": {
      "Avg High": 27,
      "Avg Low": 9,
      "Avg Precipitation": 0.68
    }
  }
},{
  "_id": {
    "$oid": "61887224f8e3c4669ee645be"
  },
  "Location": {
    "State": "South Dakota",
    "City": "Clark",
    "Long": -97.71,
    "Lat": 44.89
  },
  "Climate": {
    "Jan": {
      "Avg High": 20,
      "Avg Low": 1,
      "Avg Precipitation": 0.67
    },
    "Feb": {
      "Avg High": 27,
      "Avg Low": 8,
      "Avg Precipitation": 0.59
    },
    "Mar": {
      "Avg High": 39,
      "Avg Low": 19,
      "Avg Precipitation": 1.3
    },
    "Apr": {
      "Avg High": 55,
      "Avg Low": 32,
      "Avg Precipitation": 1.97
    },
    "May": {
      "Avg High": 68,
      "Avg Low": 45,
      "Avg Precipitation": 2.87
    },
    "Jun": {
      "Avg High": 77,
      "Avg Low": 55,
      "Avg Precipitation": 3.74
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 60,
      "Avg Precipitation": 3.15
    },
    "Sep": {
      "Avg High": 71,
      "Avg Low": 47,
      "Avg Precipitation": 2.01
    },
    "Oct": {
      "Avg High": 58,
      "Avg Low": 34,
      "Avg Precipitation": 1.77
    },
    "Nov": {
      "Avg High": 38,
      "Avg Low": 20,
      "Avg Precipitation": 1.02
    },
    "Dec": {
      "Avg High": 25,
      "Avg Low": 6,
      "Avg Precipitation": 0.47
    }
  }
},{
  "_id": {
    "$oid": "61887228f8e3c4669ee645bf"
  },
  "Location": {
    "State": "South Dakota",
    "City": "Summit",
    "Long": -97.04,
    "Lat": 45.3
  },
  "Climate": {
    "Jan": {
      "Avg High": 21,
      "Avg Low": 2,
      "Avg Precipitation": 0.56
    },
    "Feb": {
      "Avg High": 26,
      "Avg Low": 7,
      "Avg Precipitation": 0.65
    },
    "Mar": {
      "Avg High": 38,
      "Avg Low": 19,
      "Avg Precipitation": 1.18
    },
    "Apr": {
      "Avg High": 56,
      "Avg Low": 31,
      "Avg Precipitation": 2.33
    },
    "May": {
      "Avg High": 68,
      "Avg Low": 43,
      "Avg Precipitation": 2.82
    },
    "Jun": {
      "Avg High": 76,
      "Avg Low": 53,
      "Avg Precipitation": 3.98
    },
    "Jul": {
      "Avg High": 82,
      "Avg Low": 58,
      "Avg Precipitation": 3.76
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 47,
      "Avg Precipitation": 3.02
    },
    "Oct": {
      "Avg High": 57,
      "Avg Low": 34,
      "Avg Precipitation": 2.3
    },
    "Nov": {
      "Avg High": 39,
      "Avg Low": 20,
      "Avg Precipitation": 0.97
    },
    "Dec": {
      "Avg High": 24,
      "Avg Low": 6,
      "Avg Precipitation": 0.53
    }
  }
},{
  "_id": {
    "$oid": "6188722df8e3c4669ee645c0"
  },
  "Location": {
    "State": "Tennessee",
    "City": "Cleveland",
    "Long": -84.83,
    "Lat": 35.22
  },
  "Climate": {
    "Jan": {
      "Avg High": 49,
      "Avg Low": 28,
      "Avg Precipitation": 4.98
    },
    "Feb": {
      "Avg High": 54,
      "Avg Low": 31,
      "Avg Precipitation": 4.66
    },
    "Mar": {
      "Avg High": 63,
      "Avg Low": 38,
      "Avg Precipitation": 4.96
    },
    "Apr": {
      "Avg High": 72,
      "Avg Low": 45,
      "Avg Precipitation": 4.2
    },
    "May": {
      "Avg High": 79,
      "Avg Low": 54,
      "Avg Precipitation": 4.83
    },
    "Jun": {
      "Avg High": 86,
      "Avg Low": 63,
      "Avg Precipitation": 4.54
    },
    "Jul": {
      "Avg High": 89,
      "Avg Low": 67,
      "Avg Precipitation": 4.71
    },
    "Sep": {
      "Avg High": 82,
      "Avg Low": 58,
      "Avg Precipitation": 4.12
    },
    "Oct": {
      "Avg High": 72,
      "Avg Low": 46,
      "Avg Precipitation": 3.32
    },
    "Nov": {
      "Avg High": 62,
      "Avg Low": 37,
      "Avg Precipitation": 4.97
    },
    "Dec": {
      "Avg High": 51,
      "Avg Low": 30,
      "Avg Precipitation": 5
    }
  }
},{
  "_id": {
    "$oid": "61887231f8e3c4669ee645c1"
  },
  "Location": {
    "State": "Tennessee",
    "City": "Jackson",
    "Long": -88.82,
    "Lat": 35.61
  },
  "Climate": {
    "Jan": {
      "Avg High": 47,
      "Avg Low": 28,
      "Avg Precipitation": 4.13
    },
    "Feb": {
      "Avg High": 52,
      "Avg Low": 31,
      "Avg Precipitation": 4.19
    },
    "Mar": {
      "Avg High": 62,
      "Avg Low": 40,
      "Avg Precipitation": 4.91
    },
    "Apr": {
      "Avg High": 72,
      "Avg Low": 49,
      "Avg Precipitation": 4.71
    },
    "May": {
      "Avg High": 80,
      "Avg Low": 58,
      "Avg Precipitation": 5.55
    },
    "Jun": {
      "Avg High": 87,
      "Avg Low": 67,
      "Avg Precipitation": 4.87
    },
    "Jul": {
      "Avg High": 90,
      "Avg Low": 70,
      "Avg Precipitation": 4.82
    },
    "Sep": {
      "Avg High": 84,
      "Avg Low": 60,
      "Avg Precipitation": 3.52
    },
    "Oct": {
      "Avg High": 74,
      "Avg Low": 49,
      "Avg Precipitation": 3.99
    },
    "Nov": {
      "Avg High": 62,
      "Avg Low": 39,
      "Avg Precipitation": 4.96
    },
    "Dec": {
      "Avg High": 51,
      "Avg Low": 31,
      "Avg Precipitation": 5.42
    }
  }
},{
  "_id": {
    "$oid": "61887236f8e3c4669ee645c2"
  },
  "Location": {
    "State": "Tennessee",
    "City": "Newport",
    "Long": -83.18,
    "Lat": 35.97
  },
  "Climate": {
    "Jan": {
      "Avg High": 48,
      "Avg Low": 27,
      "Avg Precipitation": 3.54
    },
    "Feb": {
      "Avg High": 53,
      "Avg Low": 30,
      "Avg Precipitation": 3.89
    },
    "Mar": {
      "Avg High": 61,
      "Avg Low": 36,
      "Avg Precipitation": 3.77
    },
    "Apr": {
      "Avg High": 70,
      "Avg Low": 44,
      "Avg Precipitation": 3.68
    },
    "May": {
      "Avg High": 78,
      "Avg Low": 53,
      "Avg Precipitation": 4.43
    },
    "Jun": {
      "Avg High": 85,
      "Avg Low": 62,
      "Avg Precipitation": 3.82
    },
    "Jul": {
      "Avg High": 88,
      "Avg Low": 66,
      "Avg Precipitation": 4.88
    },
    "Sep": {
      "Avg High": 81,
      "Avg Low": 57,
      "Avg Precipitation": 2.94
    },
    "Oct": {
      "Avg High": 71,
      "Avg Low": 45,
      "Avg Precipitation": 2.13
    },
    "Nov": {
      "Avg High": 61,
      "Avg Low": 36,
      "Avg Precipitation": 3.39
    },
    "Dec": {
      "Avg High": 51,
      "Avg Low": 29,
      "Avg Precipitation": 3.75
    }
  }
},{
  "_id": {
    "$oid": "6188723af8e3c4669ee645c3"
  },
  "Location": {
    "State": "Tennessee",
    "City": "Portland",
    "Long": -86.48,
    "Lat": 36.59
  },
  "Climate": {
    "Jan": {
      "Avg High": 45,
      "Avg Low": 27,
      "Avg Precipitation": 4.41
    },
    "Feb": {
      "Avg High": 49,
      "Avg Low": 30,
      "Avg Precipitation": 4.77
    },
    "Mar": {
      "Avg High": 59,
      "Avg Low": 38,
      "Avg Precipitation": 4.79
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 47,
      "Avg Precipitation": 4.41
    },
    "May": {
      "Avg High": 77,
      "Avg Low": 56,
      "Avg Precipitation": 5.89
    },
    "Jun": {
      "Avg High": 85,
      "Avg Low": 65,
      "Avg Precipitation": 4.15
    },
    "Jul": {
      "Avg High": 88,
      "Avg Low": 68,
      "Avg Precipitation": 4.21
    },
    "Sep": {
      "Avg High": 81,
      "Avg Low": 59,
      "Avg Precipitation": 3.59
    },
    "Oct": {
      "Avg High": 70,
      "Avg Low": 48,
      "Avg Precipitation": 3.7
    },
    "Nov": {
      "Avg High": 59,
      "Avg Low": 39,
      "Avg Precipitation": 4.35
    },
    "Dec": {
      "Avg High": 47,
      "Avg Low": 29,
      "Avg Precipitation": 5
    }
  }
},{
  "_id": {
    "$oid": "6188723ff8e3c4669ee645c4"
  },
  "Location": {
    "State": "Texas",
    "City": "Arlington",
    "Long": -97.11,
    "Lat": 32.74
  },
  "Climate": {
    "Jan": {
      "Avg High": 58,
      "Avg Low": 35,
      "Avg Precipitation": 2.05
    },
    "Feb": {
      "Avg High": 61,
      "Avg Low": 40,
      "Avg Precipitation": 2.68
    },
    "Mar": {
      "Avg High": 69,
      "Avg Low": 47,
      "Avg Precipitation": 3.65
    },
    "Apr": {
      "Avg High": 77,
      "Avg Low": 54,
      "Avg Precipitation": 3.16
    },
    "May": {
      "Avg High": 84,
      "Avg Low": 63,
      "Avg Precipitation": 4.52
    },
    "Jun": {
      "Avg High": 91,
      "Avg Low": 70,
      "Avg Precipitation": 4.22
    },
    "Jul": {
      "Avg High": 95,
      "Avg Low": 73,
      "Avg Precipitation": 2.35
    },
    "Sep": {
      "Avg High": 89,
      "Avg Low": 67,
      "Avg Precipitation": 3.76
    },
    "Oct": {
      "Avg High": 79,
      "Avg Low": 56,
      "Avg Precipitation": 4.59
    },
    "Nov": {
      "Avg High": 68,
      "Avg Low": 46,
      "Avg Precipitation": 2.59
    },
    "Dec": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": 2.76
    }
  }
},{
  "_id": {
    "$oid": "61887244f8e3c4669ee645c5"
  },
  "Location": {
    "State": "Texas",
    "City": "Cleveland",
    "Long": -95.01,
    "Lat": 30.36
  },
  "Climate": {
    "Jan": {
      "Avg High": 60,
      "Avg Low": 38,
      "Avg Precipitation": 4.11
    },
    "Feb": {
      "Avg High": 64,
      "Avg Low": 42,
      "Avg Precipitation": 4.17
    },
    "Mar": {
      "Avg High": 71,
      "Avg Low": 48,
      "Avg Precipitation": 3.81
    },
    "Apr": {
      "Avg High": 77,
      "Avg Low": 55,
      "Avg Precipitation": 3.31
    },
    "May": {
      "Avg High": 83,
      "Avg Low": 64,
      "Avg Precipitation": 5.37
    },
    "Jun": {
      "Avg High": 89,
      "Avg Low": 70,
      "Avg Precipitation": 5.76
    },
    "Jul": {
      "Avg High": 92,
      "Avg Low": 72,
      "Avg Precipitation": 3.42
    },
    "Sep": {
      "Avg High": 88,
      "Avg Low": 66,
      "Avg Precipitation": 4.62
    },
    "Oct": {
      "Avg High": 79,
      "Avg Low": 57,
      "Avg Precipitation": 6.17
    },
    "Nov": {
      "Avg High": 69,
      "Avg Low": 48,
      "Avg Precipitation": 5.68
    },
    "Dec": {
      "Avg High": 61,
      "Avg Low": 40,
      "Avg Precipitation": 4.47
    }
  }
},{
  "_id": {
    "$oid": "61887249f8e3c4669ee645c6"
  },
  "Location": {
    "State": "Texas",
    "City": "Henderson",
    "Long": -94.8,
    "Lat": 32.15
  },
  "Climate": {
    "Jan": {
      "Avg High": 57,
      "Avg Low": 35,
      "Avg Precipitation": 3.68
    },
    "Feb": {
      "Avg High": 61,
      "Avg Low": 38,
      "Avg Precipitation": 4.22
    },
    "Mar": {
      "Avg High": 68,
      "Avg Low": 44,
      "Avg Precipitation": 4.4
    },
    "Apr": {
      "Avg High": 76,
      "Avg Low": 52,
      "Avg Precipitation": 3.65
    },
    "May": {
      "Avg High": 83,
      "Avg Low": 61,
      "Avg Precipitation": 4.7
    },
    "Jun": {
      "Avg High": 89,
      "Avg Low": 68,
      "Avg Precipitation": 5.22
    },
    "Jul": {
      "Avg High": 93,
      "Avg Low": 72,
      "Avg Precipitation": 3.06
    },
    "Sep": {
      "Avg High": 87,
      "Avg Low": 64,
      "Avg Precipitation": 3.48
    },
    "Oct": {
      "Avg High": 78,
      "Avg Low": 53,
      "Avg Precipitation": 4.84
    },
    "Nov": {
      "Avg High": 67,
      "Avg Low": 44,
      "Avg Precipitation": 4.78
    },
    "Dec": {
      "Avg High": 58,
      "Avg Low": 36,
      "Avg Precipitation": 4.47
    }
  }
},{
  "_id": {
    "$oid": "6188724df8e3c4669ee645c7"
  },
  "Location": {
    "State": "Texas",
    "City": "Orange",
    "Long": -93.8,
    "Lat": 30.07
  },
  "Climate": {
    "Jan": {
      "Avg High": 60,
      "Avg Low": 40,
      "Avg Precipitation": 6.02
    },
    "Feb": {
      "Avg High": 64,
      "Avg Low": 43,
      "Avg Precipitation": 3.62
    },
    "Mar": {
      "Avg High": 71,
      "Avg Low": 49,
      "Avg Precipitation": 3.9
    },
    "Apr": {
      "Avg High": 77,
      "Avg Low": 56,
      "Avg Precipitation": 3.62
    },
    "May": {
      "Avg High": 84,
      "Avg Low": 65,
      "Avg Precipitation": 5.71
    },
    "Jun": {
      "Avg High": 89,
      "Avg Low": 70,
      "Avg Precipitation": 6.22
    },
    "Jul": {
      "Avg High": 91,
      "Avg Low": 72,
      "Avg Precipitation": 5.35
    },
    "Sep": {
      "Avg High": 87,
      "Avg Low": 67,
      "Avg Precipitation": 5.59
    },
    "Oct": {
      "Avg High": 80,
      "Avg Low": 57,
      "Avg Precipitation": 4.57
    },
    "Nov": {
      "Avg High": 70,
      "Avg Low": 48,
      "Avg Precipitation": 4.61
    },
    "Dec": {
      "Avg High": 63,
      "Avg Low": 42,
      "Avg Precipitation": 5.24
    }
  }
},{
  "_id": {
    "$oid": "61887252f8e3c4669ee645c8"
  },
  "Location": {
    "State": "Texas",
    "City": "Victoria",
    "Long": -97.01,
    "Lat": 28.77
  },
  "Climate": {
    "Jan": {
      "Avg High": 65,
      "Avg Low": 43,
      "Avg Precipitation": 2.52
    },
    "Feb": {
      "Avg High": 68,
      "Avg Low": 46,
      "Avg Precipitation": 2.08
    },
    "Mar": {
      "Avg High": 74,
      "Avg Low": 53,
      "Avg Precipitation": 2.77
    },
    "Apr": {
      "Avg High": 80,
      "Avg Low": 59,
      "Avg Precipitation": 2.82
    },
    "May": {
      "Avg High": 87,
      "Avg Low": 67,
      "Avg Precipitation": 5.19
    },
    "Jun": {
      "Avg High": 92,
      "Avg Low": 72,
      "Avg Precipitation": 4.46
    },
    "Jul": {
      "Avg High": 94,
      "Avg Low": 74,
      "Avg Precipitation": 4.18
    },
    "Sep": {
      "Avg High": 90,
      "Avg Low": 69,
      "Avg Precipitation": 4.16
    },
    "Oct": {
      "Avg High": 83,
      "Avg Low": 61,
      "Avg Precipitation": 4.64
    },
    "Nov": {
      "Avg High": 74,
      "Avg Low": 52,
      "Avg Precipitation": 3.24
    },
    "Dec": {
      "Avg High": 66,
      "Avg Low": 44,
      "Avg Precipitation": 2.31
    }
  }
},{
  "_id": {
    "$oid": "61887256f8e3c4669ee645c9"
  },
  "Location": {
    "State": "Texas",
    "City": "Washington",
    "Long": -96.16,
    "Lat": 30.33
  },
  "Climate": {
    "Jan": {
      "Avg High": 62,
      "Avg Low": 36,
      "Avg Precipitation": 3.54
    },
    "Feb": {
      "Avg High": 65,
      "Avg Low": 40,
      "Avg Precipitation": 2.83
    },
    "Mar": {
      "Avg High": 72,
      "Avg Low": 47,
      "Avg Precipitation": 3.52
    },
    "Apr": {
      "Avg High": 80,
      "Avg Low": 54,
      "Avg Precipitation": 2.8
    },
    "May": {
      "Avg High": 86,
      "Avg Low": 62,
      "Avg Precipitation": 3.9
    },
    "Jun": {
      "Avg High": 92,
      "Avg Low": 69,
      "Avg Precipitation": 4.76
    },
    "Jul": {
      "Avg High": 95,
      "Avg Low": 71,
      "Avg Precipitation": 2.37
    },
    "Sep": {
      "Avg High": 91,
      "Avg Low": 64,
      "Avg Precipitation": 3.36
    },
    "Oct": {
      "Avg High": 82,
      "Avg Low": 55,
      "Avg Precipitation": 4.63
    },
    "Nov": {
      "Avg High": 72,
      "Avg Low": 47,
      "Avg Precipitation": 3.8
    },
    "Dec": {
      "Avg High": 63,
      "Avg Low": 38,
      "Avg Precipitation": 3.38
    }
  }
},{
  "_id": {
    "$oid": "6188725bf8e3c4669ee645ca"
  },
  "Location": {
    "State": "Utah",
    "City": "Moab",
    "Long": -109.76,
    "Lat": 38.76
  },
  "Climate": {
    "Jan": {
      "Avg High": 43,
      "Avg Low": 20,
      "Avg Precipitation": 0.63
    },
    "Feb": {
      "Avg High": 51,
      "Avg Low": 26,
      "Avg Precipitation": 0.63
    },
    "Mar": {
      "Avg High": 63,
      "Avg Low": 35,
      "Avg Precipitation": 0.83
    },
    "Apr": {
      "Avg High": 72,
      "Avg Low": 42,
      "Avg Precipitation": 0.83
    },
    "May": {
      "Avg High": 83,
      "Avg Low": 50,
      "Avg Precipitation": 0.7
    },
    "Jun": {
      "Avg High": 93,
      "Avg Low": 58,
      "Avg Precipitation": 0.41
    },
    "Jul": {
      "Avg High": 99,
      "Avg Low": 65,
      "Avg Precipitation": 0.97
    },
    "Sep": {
      "Avg High": 87,
      "Avg Low": 53,
      "Avg Precipitation": 0.86
    },
    "Oct": {
      "Avg High": 73,
      "Avg Low": 41,
      "Avg Precipitation": 1.17
    },
    "Nov": {
      "Avg High": 56,
      "Avg Low": 30,
      "Avg Precipitation": 0.76
    },
    "Dec": {
      "Avg High": 44,
      "Avg Low": 21,
      "Avg Precipitation": 0.69
    }
  }
},{
  "_id": {
    "$oid": "61887260f8e3c4669ee645cb"
  },
  "Location": {
    "State": "Utah",
    "City": "Park City",
    "Long": -111.5,
    "Lat": 40.65
  },
  "Climate": {
    "Jan": {
      "Avg High": 35,
      "Avg Low": 9,
      "Avg Precipitation": "NaN"
    },
    "Feb": {
      "Avg High": 37,
      "Avg Low": 12,
      "Avg Precipitation": "NaN"
    },
    "Mar": {
      "Avg High": 46,
      "Avg Low": 19,
      "Avg Precipitation": "NaN"
    },
    "Apr": {
      "Avg High": 55,
      "Avg Low": 25,
      "Avg Precipitation": "NaN"
    },
    "May": {
      "Avg High": 65,
      "Avg Low": 32,
      "Avg Precipitation": "NaN"
    },
    "Jun": {
      "Avg High": 75,
      "Avg Low": 40,
      "Avg Precipitation": "NaN"
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 47,
      "Avg Precipitation": "NaN"
    },
    "Sep": {
      "Avg High": 73,
      "Avg Low": 37,
      "Avg Precipitation": "NaN"
    },
    "Oct": {
      "Avg High": 59,
      "Avg Low": 27,
      "Avg Precipitation": "NaN"
    },
    "Nov": {
      "Avg High": 44,
      "Avg Low": 17,
      "Avg Precipitation": "NaN"
    },
    "Dec": {
      "Avg High": 35,
      "Avg Low": 11,
      "Avg Precipitation": "NaN"
    }
  }
},{
  "_id": {
    "$oid": "61887265f8e3c4669ee645cc"
  },
  "Location": {
    "State": "Vermont",
    "City": "Newport",
    "Long": -72.23,
    "Lat": 44.89
  },
  "Climate": {
    "Jan": {
      "Avg High": 23,
      "Avg Low": 3,
      "Avg Precipitation": 2.65
    },
    "Feb": {
      "Avg High": 28,
      "Avg Low": 5,
      "Avg Precipitation": 2.29
    },
    "Mar": {
      "Avg High": 38,
      "Avg Low": 16,
      "Avg Precipitation": 2.8
    },
    "Apr": {
      "Avg High": 52,
      "Avg Low": 31,
      "Avg Precipitation": 2.81
    },
    "May": {
      "Avg High": 65,
      "Avg Low": 42,
      "Avg Precipitation": 3.67
    },
    "Jun": {
      "Avg High": 73,
      "Avg Low": 52,
      "Avg Precipitation": 4.06
    },
    "Jul": {
      "Avg High": 78,
      "Avg Low": 57,
      "Avg Precipitation": 4.43
    },
    "Sep": {
      "Avg High": 68,
      "Avg Low": 47,
      "Avg Precipitation": 3.44
    },
    "Oct": {
      "Avg High": 54,
      "Avg Low": 35,
      "Avg Precipitation": 4.02
    },
    "Nov": {
      "Avg High": 41,
      "Avg Low": 26,
      "Avg Precipitation": 3.53
    },
    "Dec": {
      "Avg High": 29,
      "Avg Low": 12,
      "Avg Precipitation": 3.23
    }
  }
},{
  "_id": {
    "$oid": "61887269f8e3c4669ee645cd"
  },
  "Location": {
    "State": "Virginia",
    "City": "Arlington",
    "Long": -77.11,
    "Lat": 38.88
  },
  "Climate": {
    "Jan": {
      "Avg High": 43,
      "Avg Low": 29,
      "Avg Precipitation": 2.81
    },
    "Feb": {
      "Avg High": 47,
      "Avg Low": 31,
      "Avg Precipitation": 2.62
    },
    "Mar": {
      "Avg High": 56,
      "Avg Low": 38,
      "Avg Precipitation": 3.48
    },
    "Apr": {
      "Avg High": 67,
      "Avg Low": 47,
      "Avg Precipitation": 3.06
    },
    "May": {
      "Avg High": 75,
      "Avg Low": 56,
      "Avg Precipitation": 3.99
    },
    "Jun": {
      "Avg High": 84,
      "Avg Low": 66,
      "Avg Precipitation": 3.78
    },
    "Jul": {
      "Avg High": 88,
      "Avg Low": 71,
      "Avg Precipitation": 3.73
    },
    "Sep": {
      "Avg High": 80,
      "Avg Low": 62,
      "Avg Precipitation": 3.72
    },
    "Oct": {
      "Avg High": 68,
      "Avg Low": 51,
      "Avg Precipitation": 3.4
    },
    "Nov": {
      "Avg High": 58,
      "Avg Low": 41,
      "Avg Precipitation": 3.17
    },
    "Dec": {
      "Avg High": 47,
      "Avg Low": 33,
      "Avg Precipitation": 3.05
    }
  }
},{
  "_id": {
    "$oid": "6188726df8e3c4669ee645ce"
  },
  "Location": {
    "State": "Virginia",
    "City": "Ashland",
    "Long": -77.48,
    "Lat": 37.76
  },
  "Climate": {
    "Jan": {
      "Avg High": 46,
      "Avg Low": 27,
      "Avg Precipitation": 3.25
    },
    "Feb": {
      "Avg High": 50,
      "Avg Low": 29,
      "Avg Precipitation": 3
    },
    "Mar": {
      "Avg High": 59,
      "Avg Low": 36,
      "Avg Precipitation": 3.95
    },
    "Apr": {
      "Avg High": 70,
      "Avg Low": 45,
      "Avg Precipitation": 3.33
    },
    "May": {
      "Avg High": 76,
      "Avg Low": 54,
      "Avg Precipitation": 4.03
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 63,
      "Avg Precipitation": 3.62
    },
    "Jul": {
      "Avg High": 87,
      "Avg Low": 67,
      "Avg Precipitation": 4.57
    },
    "Sep": {
      "Avg High": 79,
      "Avg Low": 59,
      "Avg Precipitation": 3.76
    },
    "Oct": {
      "Avg High": 68,
      "Avg Low": 47,
      "Avg Precipitation": 3.27
    },
    "Nov": {
      "Avg High": 59,
      "Avg Low": 38,
      "Avg Precipitation": 3.58
    },
    "Dec": {
      "Avg High": 48,
      "Avg Low": 30,
      "Avg Precipitation": 3.53
    }
  }
},{
  "_id": {
    "$oid": "61887271f8e3c4669ee645cf"
  },
  "Location": {
    "State": "Virginia",
    "City": "Boston",
    "Long": -78.13,
    "Lat": 38.54
  },
  "Climate": {
    "Jan": {
      "Avg High": 43,
      "Avg Low": 22,
      "Avg Precipitation": 2.7
    },
    "Feb": {
      "Avg High": 47,
      "Avg Low": 24,
      "Avg Precipitation": 2.58
    },
    "Mar": {
      "Avg High": 55,
      "Avg Low": 31,
      "Avg Precipitation": 3.7
    },
    "Apr": {
      "Avg High": 66,
      "Avg Low": 40,
      "Avg Precipitation": 3.44
    },
    "May": {
      "Avg High": 74,
      "Avg Low": 49,
      "Avg Precipitation": 4.35
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 59,
      "Avg Precipitation": 4.25
    },
    "Jul": {
      "Avg High": 86,
      "Avg Low": 63,
      "Avg Precipitation": 5.2
    },
    "Sep": {
      "Avg High": 77,
      "Avg Low": 53,
      "Avg Precipitation": 4.35
    },
    "Oct": {
      "Avg High": 67,
      "Avg Low": 41,
      "Avg Precipitation": 3.48
    },
    "Nov": {
      "Avg High": 57,
      "Avg Low": 33,
      "Avg Precipitation": 3.97
    },
    "Dec": {
      "Avg High": 46,
      "Avg Low": 25,
      "Avg Precipitation": 2.98
    }
  }
},{
  "_id": {
    "$oid": "61887275f8e3c4669ee645d0"
  },
  "Location": {
    "State": "Virginia",
    "City": "Orange",
    "Long": -78.11,
    "Lat": 38.25
  },
  "Climate": {
    "Jan": {
      "Avg High": 44,
      "Avg Low": 25,
      "Avg Precipitation": 2.76
    },
    "Feb": {
      "Avg High": 47,
      "Avg Low": 27,
      "Avg Precipitation": 2.75
    },
    "Mar": {
      "Avg High": 56,
      "Avg Low": 34,
      "Avg Precipitation": 3.51
    },
    "Apr": {
      "Avg High": 67,
      "Avg Low": 44,
      "Avg Precipitation": 3.4
    },
    "May": {
      "Avg High": 74,
      "Avg Low": 53,
      "Avg Precipitation": 4.14
    },
    "Jun": {
      "Avg High": 83,
      "Avg Low": 62,
      "Avg Precipitation": 4.17
    },
    "Jul": {
      "Avg High": 86,
      "Avg Low": 67,
      "Avg Precipitation": 4.7
    },
    "Sep": {
      "Avg High": 78,
      "Avg Low": 58,
      "Avg Precipitation": 4.03
    },
    "Oct": {
      "Avg High": 68,
      "Avg Low": 45,
      "Avg Precipitation": 3.42
    },
    "Nov": {
      "Avg High": 58,
      "Avg Low": 37,
      "Avg Precipitation": 3.82
    },
    "Dec": {
      "Avg High": 47,
      "Avg Low": 28,
      "Avg Precipitation": 3.07
    }
  }
},{
  "_id": {
    "$oid": "61887279f8e3c4669ee645d1"
  },
  "Location": {
    "State": "Virginia",
    "City": "Suffolk",
    "Long": -76.6,
    "Lat": 36.68
  },
  "Climate": {
    "Jan": {
      "Avg High": 49,
      "Avg Low": 31,
      "Avg Precipitation": 3.63
    },
    "Feb": {
      "Avg High": 52,
      "Avg Low": 33,
      "Avg Precipitation": 3.23
    },
    "Mar": {
      "Avg High": 60,
      "Avg Low": 40,
      "Avg Precipitation": 4.05
    },
    "Apr": {
      "Avg High": 69,
      "Avg Low": 48,
      "Avg Precipitation": 3.55
    },
    "May": {
      "Avg High": 76,
      "Avg Low": 57,
      "Avg Precipitation": 3.83
    },
    "Jun": {
      "Avg High": 84,
      "Avg Low": 66,
      "Avg Precipitation": 4.37
    },
    "Jul": {
      "Avg High": 87,
      "Avg Low": 70,
      "Avg Precipitation": 5.14
    },
    "Sep": {
      "Avg High": 80,
      "Avg Low": 63,
      "Avg Precipitation": 5.32
    },
    "Oct": {
      "Avg High": 71,
      "Avg Low": 52,
      "Avg Precipitation": 3.63
    },
    "Nov": {
      "Avg High": 62,
      "Avg Low": 42,
      "Avg Precipitation": 3.54
    },
    "Dec": {
      "Avg High": 52,
      "Avg Low": 34,
      "Avg Precipitation": 3.49
    }
  }
},{
  "_id": {
    "$oid": "6188727ef8e3c4669ee645d2"
  },
  "Location": {
    "State": "Washington",
    "City": "Monroe",
    "Long": -122,
    "Lat": 47.87
  },
  "Climate": {
    "Jan": {
      "Avg High": 47,
      "Avg Low": 34,
      "Avg Precipitation": 6.24
    },
    "Feb": {
      "Avg High": 50,
      "Avg Low": 34,
      "Avg Precipitation": 4.12
    },
    "Mar": {
      "Avg High": 55,
      "Avg Low": 37,
      "Avg Precipitation": 4.81
    },
    "Apr": {
      "Avg High": 60,
      "Avg Low": 41,
      "Avg Precipitation": 3.77
    },
    "May": {
      "Avg High": 66,
      "Avg Low": 46,
      "Avg Precipitation": 3.39
    },
    "Jun": {
      "Avg High": 70,
      "Avg Low": 50,
      "Avg Precipitation": 2.55
    },
    "Jul": {
      "Avg High": 76,
      "Avg Low": 53,
      "Avg Precipitation": 1.33
    },
    "Sep": {
      "Avg High": 71,
      "Avg Low": 49,
      "Avg Precipitation": 2.6
    },
    "Oct": {
      "Avg High": 60,
      "Avg Low": 43,
      "Avg Precipitation": 4.78
    },
    "Nov": {
      "Avg High": 50,
      "Avg Low": 38,
      "Avg Precipitation": 7.45
    },
    "Dec": {
      "Avg High": 44,
      "Avg Low": 33,
      "Avg Precipitation": 6.42
    }
  }
},{
  "_id": {
    "$oid": "61887282f8e3c4669ee645d3"
  },
  "Location": {
    "State": "Washington",
    "City": "Newport",
    "Long": -117.04,
    "Lat": 48.18
  },
  "Climate": {
    "Jan": {
      "Avg High": 31,
      "Avg Low": 20,
      "Avg Precipitation": 2.91
    },
    "Feb": {
      "Avg High": 37,
      "Avg Low": 21,
      "Avg Precipitation": 2.14
    },
    "Mar": {
      "Avg High": 47,
      "Avg Low": 27,
      "Avg Precipitation": 2.36
    },
    "Apr": {
      "Avg High": 60,
      "Avg Low": 31,
      "Avg Precipitation": 0
    },
    "May": {
      "Avg High": 67,
      "Avg Low": 40,
      "Avg Precipitation": 2.27
    },
    "Jun": {
      "Avg High": 74,
      "Avg Low": 46,
      "Avg Precipitation": 2.14
    },
    "Jul": {
      "Avg High": 83,
      "Avg Low": 49,
      "Avg Precipitation": 1.18
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 40,
      "Avg Precipitation": 1.18
    },
    "Oct": {
      "Avg High": 55,
      "Avg Low": 32,
      "Avg Precipitation": 2.12
    },
    "Nov": {
      "Avg High": 39,
      "Avg Low": 27,
      "Avg Precipitation": 3.52
    },
    "Dec": {
      "Avg High": 30,
      "Avg Low": 20,
      "Avg Precipitation": 3.95
    }
  }
},{
  "_id": {
    "$oid": "61887285f8e3c4669ee645d4"
  },
  "Location": {
    "State": "Washington",
    "City": "Seattle",
    "Long": -122.33,
    "Lat": 47.61
  },
  "Climate": {
    "Jan": {
      "Avg High": 47,
      "Avg Low": 37,
      "Avg Precipitation": 5.55
    },
    "Feb": {
      "Avg High": 50,
      "Avg Low": 37,
      "Avg Precipitation": 3.46
    },
    "Mar": {
      "Avg High": 54,
      "Avg Low": 39,
      "Avg Precipitation": 3.7
    },
    "Apr": {
      "Avg High": 58,
      "Avg Low": 42,
      "Avg Precipitation": 2.68
    },
    "May": {
      "Avg High": 65,
      "Avg Low": 47,
      "Avg Precipitation": 1.93
    },
    "Jun": {
      "Avg High": 70,
      "Avg Low": 52,
      "Avg Precipitation": 1.54
    },
    "Jul": {
      "Avg High": 76,
      "Avg Low": 56,
      "Avg Precipitation": 0.67
    },
    "Sep": {
      "Avg High": 71,
      "Avg Low": 52,
      "Avg Precipitation": 1.42
    },
    "Oct": {
      "Avg High": 60,
      "Avg Low": 46,
      "Avg Precipitation": 3.46
    },
    "Nov": {
      "Avg High": 51,
      "Avg Low": 40,
      "Avg Precipitation": 6.54
    },
    "Dec": {
      "Avg High": 46,
      "Avg Low": 36,
      "Avg Precipitation": 5.31
    }
  }
},{
  "_id": {
    "$oid": "61887288f8e3c4669ee645d5"
  },
  "Location": {
    "State": "Washington",
    "City": "Seattle",
    "Long": -122.33,
    "Lat": 47.61
  },
  "Climate": {
    "Jan": {
      "Avg High": 45,
      "Avg Low": 36,
      "Avg Precipitation": 5.2
    },
    "Feb": {
      "Avg High": 48,
      "Avg Low": 37,
      "Avg Precipitation": 3.9
    },
    "Mar": {
      "Avg High": 52,
      "Avg Low": 39,
      "Avg Precipitation": 3.31
    },
    "Apr": {
      "Avg High": 58,
      "Avg Low": 43,
      "Avg Precipitation": 1.97
    },
    "May": {
      "Avg High": 64,
      "Avg Low": 47,
      "Avg Precipitation": 1.57
    },
    "Jun": {
      "Avg High": 69,
      "Avg Low": 52,
      "Avg Precipitation": 1.42
    },
    "Jul": {
      "Avg High": 72,
      "Avg Low": 54,
      "Avg Precipitation": 0.63
    },
    "Sep": {
      "Avg High": 67,
      "Avg Low": 52,
      "Avg Precipitation": 1.65
    },
    "Oct": {
      "Avg High": 59,
      "Avg Low": 47,
      "Avg Precipitation": 3.27
    },
    "Nov": {
      "Avg High": 51,
      "Avg Low": 41,
      "Avg Precipitation": 5
    },
    "Dec": {
      "Avg High": 47,
      "Avg Low": 38,
      "Avg Precipitation": 5.43
    }
  }
},{
  "_id": {
    "$oid": "6188728cf8e3c4669ee645d6"
  },
  "Location": {
    "State": "Washington",
    "City": "Vancouver",
    "Long": -122.66,
    "Lat": 45.64
  },
  "Climate": {
    "Jan": {
      "Avg High": 47,
      "Avg Low": 33,
      "Avg Precipitation": 5.92
    },
    "Feb": {
      "Avg High": 51,
      "Avg Low": 33,
      "Avg Precipitation": 4.35
    },
    "Mar": {
      "Avg High": 56,
      "Avg Low": 37,
      "Avg Precipitation": 4.21
    },
    "Apr": {
      "Avg High": 60,
      "Avg Low": 40,
      "Avg Precipitation": 3.2
    },
    "May": {
      "Avg High": 67,
      "Avg Low": 45,
      "Avg Precipitation": 2.71
    },
    "Jun": {
      "Avg High": 72,
      "Avg Low": 50,
      "Avg Precipitation": 1.91
    },
    "Jul": {
      "Avg High": 78,
      "Avg Low": 53,
      "Avg Precipitation": 0.69
    },
    "Sep": {
      "Avg High": 74,
      "Avg Low": 48,
      "Avg Precipitation": 1.61
    },
    "Oct": {
      "Avg High": 63,
      "Avg Low": 41,
      "Avg Precipitation": 3.38
    },
    "Nov": {
      "Avg High": 52,
      "Avg Low": 37,
      "Avg Precipitation": 6.51
    },
    "Dec": {
      "Avg High": 46,
      "Avg Low": 32,
      "Avg Precipitation": 6.4
    }
  }
},{
  "_id": {
    "$oid": "6188728ff8e3c4669ee645d7"
  },
  "Location": {
    "State": "West Virginia",
    "City": "Charleston",
    "Long": -81.59,
    "Lat": 38.37
  },
  "Climate": {
    "Jan": {
      "Avg High": 42,
      "Avg Low": 26,
      "Avg Precipitation": 3
    },
    "Feb": {
      "Avg High": 47,
      "Avg Low": 29,
      "Avg Precipitation": 3.19
    },
    "Mar": {
      "Avg High": 56,
      "Avg Low": 35,
      "Avg Precipitation": 3.91
    },
    "Apr": {
      "Avg High": 68,
      "Avg Low": 44,
      "Avg Precipitation": 3.24
    },
    "May": {
      "Avg High": 75,
      "Avg Low": 53,
      "Avg Precipitation": 4.8
    },
    "Jun": {
      "Avg High": 82,
      "Avg Low": 62,
      "Avg Precipitation": 4.29
    },
    "Jul": {
      "Avg High": 85,
      "Avg Low": 66,
      "Avg Precipitation": 4.94
    },
    "Sep": {
      "Avg High": 78,
      "Avg Low": 57,
      "Avg Precipitation": 3.25
    },
    "Oct": {
      "Avg High": 68,
      "Avg Low": 45,
      "Avg Precipitation": 2.67
    },
    "Nov": {
      "Avg High": 57,
      "Avg Low": 37,
      "Avg Precipitation": 3.73
    },
    "Dec": {
      "Avg High": 46,
      "Avg Low": 29,
      "Avg Precipitation": 3.27
    }
  }
},{
  "_id": {
    "$oid": "61887293f8e3c4669ee645d8"
  },
  "Location": {
    "State": "Wisconsin",
    "City": "Arlington",
    "Long": -89.38,
    "Lat": 43.34
  },
  "Climate": {
    "Jan": {
      "Avg High": 26,
      "Avg Low": 6,
      "Avg Precipitation": 1.14
    },
    "Feb": {
      "Avg High": 30,
      "Avg Low": 10,
      "Avg Precipitation": 1.31
    },
    "Mar": {
      "Avg High": 42,
      "Avg Low": 20,
      "Avg Precipitation": 1.88
    },
    "Apr": {
      "Avg High": 57,
      "Avg Low": 32,
      "Avg Precipitation": 3.5
    },
    "May": {
      "Avg High": 69,
      "Avg Low": 43,
      "Avg Precipitation": 3.69
    },
    "Jun": {
      "Avg High": 78,
      "Avg Low": 53,
      "Avg Precipitation": 4.68
    },
    "Jul": {
      "Avg High": 82,
      "Avg Low": 57,
      "Avg Precipitation": 4.16
    },
    "Sep": {
      "Avg High": 72,
      "Avg Low": 47,
      "Avg Precipitation": 3.54
    },
    "Oct": {
      "Avg High": 60,
      "Avg Low": 35,
      "Avg Precipitation": 2.55
    },
    "Nov": {
      "Avg High": 44,
      "Avg Low": 24,
      "Avg Precipitation": 2.4
    },
    "Dec": {
      "Avg High": 30,
      "Avg Low": 11,
      "Avg Precipitation": 1.47
    }
  }
},{
  "_id": {
    "$oid": "61887296f8e3c4669ee645d9"
  },
  "Location": {
    "State": "Wisconsin",
    "City": "Ashland",
    "Long": -90.92,
    "Lat": 46.55
  },
  "Climate": {
    "Jan": {
      "Avg High": 22,
      "Avg Low": 1,
      "Avg Precipitation": 1.32
    },
    "Feb": {
      "Avg High": 28,
      "Avg Low": 4,
      "Avg Precipitation": 0.73
    },
    "Mar": {
      "Avg High": 37,
      "Avg Low": 16,
      "Avg Precipitation": 1.55
    },
    "Apr": {
      "Avg High": 51,
      "Avg Low": 28,
      "Avg Precipitation": 2.29
    },
    "May": {
      "Avg High": 65,
      "Avg Low": 38,
      "Avg Precipitation": 3.14
    },
    "Jun": {
      "Avg High": 74,
      "Avg Low": 49,
      "Avg Precipitation": 3.53
    },
    "Jul": {
      "Avg High": 80,
      "Avg Low": 55,
      "Avg Precipitation": 4.51
    },
    "Sep": {
      "Avg High": 69,
      "Avg Low": 46,
      "Avg Precipitation": 4.07
    },
    "Oct": {
      "Avg High": 56,
      "Avg Low": 34,
      "Avg Precipitation": 3.23
    },
    "Nov": {
      "Avg High": 40,
      "Avg Low": 23,
      "Avg Precipitation": 1.83
    },
    "Dec": {
      "Avg High": 26,
      "Avg Low": 8,
      "Avg Precipitation": 1.22
    }
  }
},{
  "_id": {
    "$oid": "6188729af8e3c4669ee645da"
  },
  "Location": {
    "State": "Wisconsin",
    "City": "Cumberland",
    "Long": -91.98,
    "Lat": 45.51
  },
  "Climate": {
    "Jan": {
      "Avg High": 20,
      "Avg Low": 0,
      "Avg Precipitation": 0.94
    },
    "Feb": {
      "Avg High": 26,
      "Avg Low": 4,
      "Avg Precipitation": 0.98
    },
    "Mar": {
      "Avg High": 38,
      "Avg Low": 17,
      "Avg Precipitation": 1.71
    },
    "Apr": {
      "Avg High": 54,
      "Avg Low": 32,
      "Avg Precipitation": 2.81
    },
    "May": {
      "Avg High": 66,
      "Avg Low": 44,
      "Avg Precipitation": 3.57
    },
    "Jun": {
      "Avg High": 76,
      "Avg Low": 55,
      "Avg Precipitation": 4.43
    },
    "Jul": {
      "Avg High": 80,
      "Avg Low": 60,
      "Avg Precipitation": 4.37
    },
    "Sep": {
      "Avg High": 68,
      "Avg Low": 48,
      "Avg Precipitation": 3.98
    },
    "Oct": {
      "Avg High": 55,
      "Avg Low": 35,
      "Avg Precipitation": 3.26
    },
    "Nov": {
      "Avg High": 38,
      "Avg Low": 22,
      "Avg Precipitation": 1.99
    },
    "Dec": {
      "Avg High": 23,
      "Avg Low": 7,
      "Avg Precipitation": 1.22
    }
  }
},{
  "_id": {
    "$oid": "6188729df8e3c4669ee645db"
  },
  "Location": {
    "State": "Wisconsin",
    "City": "Hancock",
    "Long": -89.52,
    "Lat": 44.13
  },
  "Climate": {
    "Jan": {
      "Avg High": 24,
      "Avg Low": 6,
      "Avg Precipitation": 0.99
    },
    "Feb": {
      "Avg High": 30,
      "Avg Low": 10,
      "Avg Precipitation": 1
    },
    "Mar": {
      "Avg High": 41,
      "Avg Low": 22,
      "Avg Precipitation": 1.73
    },
    "Apr": {
      "Avg High": 57,
      "Avg Low": 34,
      "Avg Precipitation": 3.15
    },
    "May": {
      "Avg High": 68,
      "Avg Low": 46,
      "Avg Precipitation": 3.73
    },
    "Jun": {
      "Avg High": 77,
      "Avg Low": 56,
      "Avg Precipitation": 4.53
    },
    "Jul": {
      "Avg High": 81,
      "Avg Low": 60,
      "Avg Precipitation": 4.4
    },
    "Sep": {
      "Avg High": 71,
      "Avg Low": 49,
      "Avg Precipitation": 3.39
    },
    "Oct": {
      "Avg High": 58,
      "Avg Low": 38,
      "Avg Precipitation": 2.47
    },
    "Nov": {
      "Avg High": 42,
      "Avg Low": 25,
      "Avg Precipitation": 2.14
    },
    "Dec": {
      "Avg High": 28,
      "Avg Low": 11,
      "Avg Precipitation": 1.07
    }
  }
},{
  "_id": {
    "$oid": "618872a2f8e3c4669ee645dc"
  },
  "Location": {
    "State": "Wisconsin",
    "City": "Monroe",
    "Long": -89.64,
    "Lat": 42.6
  },
  "Climate": {
    "Jan": {
      "Avg High": 28,
      "Avg Low": 10,
      "Avg Precipitation": 1.31
    },
    "Feb": {
      "Avg High": 33,
      "Avg Low": 14,
      "Avg Precipitation": 1.47
    },
    "Mar": {
      "Avg High": 45,
      "Avg Low": 25,
      "Avg Precipitation": 2.12
    },
    "Apr": {
      "Avg High": 60,
      "Avg Low": 37,
      "Avg Precipitation": 3.7
    },
    "May": {
      "Avg High": 71,
      "Avg Low": 48,
      "Avg Precipitation": 3.86
    },
    "Jun": {
      "Avg High": 81,
      "Avg Low": 59,
      "Avg Precipitation": 5.53
    },
    "Jul": {
      "Avg High": 85,
      "Avg Low": 62,
      "Avg Precipitation": 4.08
    },
    "Sep": {
      "Avg High": 74,
      "Avg Low": 51,
      "Avg Precipitation": 3.81
    },
    "Oct": {
      "Avg High": 61,
      "Avg Low": 39,
      "Avg Precipitation": 3.02
    },
    "Nov": {
      "Avg High": 47,
      "Avg Low": 28,
      "Avg Precipitation": 2.54
    },
    "Dec": {
      "Avg High": 32,
      "Avg Low": 15,
      "Avg Precipitation": 1.91
    }
  }
},{
  "_id": {
    "$oid": "618872a6f8e3c4669ee645dd"
  },
  "Location": {
    "State": "Wyoming",
    "City": "Jackson",
    "Long": -110.74,
    "Lat": 43.61
  },
  "Climate": {
    "Jan": {
      "Avg High": 29,
      "Avg Low": 6,
      "Avg Precipitation": 1.23
    },
    "Feb": {
      "Avg High": 33,
      "Avg Low": 8,
      "Avg Precipitation": 0.98
    },
    "Mar": {
      "Avg High": 44,
      "Avg Low": 19,
      "Avg Precipitation": 1.24
    },
    "Apr": {
      "Avg High": 54,
      "Avg Low": 26,
      "Avg Precipitation": 1.28
    },
    "May": {
      "Avg High": 64,
      "Avg Low": 31,
      "Avg Precipitation": 1.98
    },
    "Jun": {
      "Avg High": 74,
      "Avg Low": 37,
      "Avg Precipitation": 1.53
    },
    "Jul": {
      "Avg High": 82,
      "Avg Low": 42,
      "Avg Precipitation": 1.26
    },
    "Sep": {
      "Avg High": 71,
      "Avg Low": 32,
      "Avg Precipitation": 1.51
    },
    "Oct": {
      "Avg High": 58,
      "Avg Low": 25,
      "Avg Precipitation": 1.28
    },
    "Nov": {
      "Avg High": 39,
      "Avg Low": 17,
      "Avg Precipitation": 1.62
    },
    "Dec": {
      "Avg High": 28,
      "Avg Low": 7,
      "Avg Precipitation": 1.53
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

// Add all the cityMarkers to a new layer group.
// Now, we can handle them as one group instead of referencing each one individually.
var cityLayer = L.layerGroup(cityMarkers);

// Overlays that can be toggled on or off
var overlayMaps = [
  {Cities: cityLayer}
  // ,JanHeat: JanHeatmapLayer,
  //  JunHeat: JunHeatmapLayer
];
// heat layer 

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

let monthlyArrays = [January,February, March, April, May, June, July,August, September, October, November, December]

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

for (var i = 0; i < monthlyArrays.length; i++) {

  var Layer = {
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
  var i = new HeatmapOverlay(Layer) ;
  i.setData({min: 10, max: 110, data: i});

  overlayMaps.push({"i" : i})
}
console.log(overlayMaps)

/* var JunLayer = {
    "radius": 1,
    "maxOpacity": .8, 
    // scales the radius based on map zoom
    "scaleRadius": true, 
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries 
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": false,
    gradient: {.45: "blue", .65: "lime", .85: "orange", .90: "red"},
    // which field name in your data represents the latitude - default "lat"
    latField: 'lat',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'lng',
    // which field name in your data represents the data value - default "value"
    valueField: 'temp'
};
// var JanHeatmapLayer = new HeatmapOverlay(JanLayer) ;
// JanHeatmapLayer.setData({min: 10, max: 110, data: janHeatArray});

var JunHeatmapLayer = new HeatmapOverlay(JunLayer) ;
JunHeatmapLayer.setData({min: 10, max: 110, data: junHeatArray}); */

// function heatmapPop (LatLng) {
//     if LatLng === (junHeatArray.lat,junHeatArray.lng){
//         var popup = L.popup()
//         .setLatLng(junHeatArray.lat,junHeatArray.lng)
//         .setContent('<p> Avg High temp: <p>' junHeatArray.temp)
//    }   };
// JunHeatmapLayer.on('mouseover',heatmapPop (LatLng));

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

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps).addTo(myMap);

//Trying to add a scale to the map(it worked)
L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomright'
}).addTo(myMap)



