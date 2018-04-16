var data = {
  survival: [
    124,
    42,
    25,
    45,
    412,
    51,
    1112,
    46,
    103,
    876,
    146,
    340,
    396,
    81,
    461,
    20,
    450,
    246,
    166,
    63,
    64,
    155,
    859,
    151,
    166,
    37,
    223,
    138,
    72,
    245,
    248,
    377,
    189,
    1843,
    180,
    537,
    519,
    455,
    406,
    365,
    942,
    776,
    372,
    163,
    101,
    20,
    283,
    1234,
    89,
    201,
    356,
    2970,
    456,
    1235,
    24,
    1581,
    1166,
    40,
    727,
    3808,
    791,
    1804,
    3460,
    719
  ],
  organ: [
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Stomach",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Bronchus",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Colon",
    "Ovary",
    "Ovary",
    "Ovary",
    "Ovary",
    "Ovary",
    "Ovary",
    "Breast",
    "Breast",
    "Breast",
    "Breast",
    "Breast",
    "Breast",
    "Breast",
    "Breast",
    "Breast",
    "Breast",
    "Breast"
  ]
};

// # Cancer Survival

// In this activity, you will create a box plot of 
// cancer survival rates for patients treated with 
// ascorbate. The purpose of this study was to 
// determine if the survival times differ with 
// respect to the organ affected by the cancer.

// Note: This study found that the square root 
// transformation appears to make the residuals 
// more symmetric, so use the square root of 
// survival as the dependent variable.

// ## Instructions

// * Create a box plot for each of the organ types.

// * Calculate the square root of the survival 
// as the depended variable.

//   * Use `map` to apply the square root.

// ## BONUS

// * Plot all of the data points next to each box plot using attributes available in the plotly documentation for [box plots](https://plot.ly/javascript/reference/#box-boxpoints)

// Create a trace object with the data in `y0`
var trace1 = {
  y: data.survival,
  x: data.organ,
  type: "box"
};

// Create a data array with the above two traces
var data = [trace1];

// Use `layout` to define a title
var layout = {
  title: "Cancer Yo, it sucks!"
};

// Render the plot to the `plot1` div
Plotly.newPlot("plot1", data, layout);
