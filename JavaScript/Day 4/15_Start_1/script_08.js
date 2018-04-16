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
// In this activity, you will analyze trends in 
// olympic gold medal performances over the years 
// to see if there are any relationship between 
// time and performance.

// ## Instructions

// * Create a scatter plot to plot the `high_jump`, 
// `discus_throw`, and `long_jump` vs the `year`.

// * Use three separate traces for this data.

// ## Bonus

// * Customize the marker colors and symbol for each trace.

var trace1 = {
  x: data.year,
  y: data.high_jump,
  name: "High Jump",
  mode: 'markers',
  type: "scatter"
};

var trace2 = {
  x: data.year,
  y: data.long_jump,
  name: "Long Jump",
  mode: 'markers',
  type: "scatter"
};

var trace3 = {
  x: data.year,
  y: data.discus_throw,
  name: "Discus",
  mode: 'markers',
  type: "scatter"
};

var data = [trace1, trace2, trace3];

// Apply the group bar mode to the layout
var layout = {
  title: "Olympic Results",
  xaxis: { title: "Years" },
  yaxis: { title: "Distance (cm)"}
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
