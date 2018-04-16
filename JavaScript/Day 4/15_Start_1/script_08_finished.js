var data = {
  long_jump: [
    249.75,
    282.875,
    289,
    294.5,
    299.25,
    281.5,
    293.125,
    304.75,
    300.75,
    317.3125,
    308,
    298,
    308.25,
    319.75,
    317.75,
    350.5,
    324.5,
    328.5,
    336.25,
    336.25
  ],
  high_jump: [
    71.25,
    74.8,
    71,
    75,
    76,
    76.25,
    78,
    76.375,
    77.625,
    79.9375,
    78,
    80.32,
    83.25,
    85,
    85.75,
    88.25,
    87.75,
    88.5,
    92.75,
    92.5
  ],
  discus_throw: [
    1147.5,
    1418.9,
    1546.5,
    1610,
    1780,
    1759.25,
    1817.125,
    1863,
    1948.875,
    1987.375,
    2078,
    2166.85,
    2218.5,
    2330,
    2401.5,
    2550.5,
    2535,
    2657.4,
    2624,
    2622
  ],
  year: [
    -4,
    0,
    4,
    8,
    12,
    20,
    24,
    28,
    32,
    36,
    48,
    52,
    56,
    60,
    64,
    68,
    72,
    76,
    80,
    84
  ]
};

// # Olympic Trends

// Create the Traces
var trace1 = {
  x: data.year,
  y: data.high_jump,
  mode: "markers",
  type: "scatter",
  name: "high jump",
  marker: {
    color: "#2077b4",
    symbol: "hexagram"
  }
};

var trace2 = {
  x: data.year,
  y: data.discus_throw,
  mode: "markers",
  type: "scatter",
  name: "discus throw",
  marker: {
    color: "orange",
    symbol: "diamond-x"
  }
};

var trace3 = {
  x: data.year,
  y: data.long_jump,
  mode: "markers",
  type: "scatter",
  name: "long jump",
  marker: {
    color: "rgba(156, 165, 196, 1.0)",
    symbol: "cross"
  }
};

// Create the data array for the plot
var data = [trace1, trace2, trace3];

// Define the plot layout
var layout = {
  title: "Olympic trends over the years",
  xaxis: { title: "Year" },
  yaxis: { title: "Olympic Event" }
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
