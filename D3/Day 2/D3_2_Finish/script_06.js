//
//   # Instructions


// * Load the data from the data/ac_load.json using `d3.json`.

// Inside of the `d3.json` function do the following:


//   * Create scale functions for your x and y values.

//   * Create functions to generate your x and y axes.

//   * Render your axes to the page.

// ## Hints

// * Use prior activities for reference.

// * Checkout this reference material on [D3 Scales](http://d3indepth.com/scales/).

// * See this example of create [D3 Band Scales & Bottom Axes](https://bl.ocks.org/biovisualize/9c0d30d0539914ecdb15). Remember that the domain and range must both be arrays.

// * For assistance with axis creation with D3, see the [d3-axis documentation](https://github.com/d3/d3-axis).


// Define SVG area dimensions
var svgWidth = 850;
var svgHeight = 300;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("#plot")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from d3.json("./data/ac_load.json", 
// YOUR CODE HERE




  // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)


  // Create a linear scale for the vertical axis.


  // Create two new axes functions passing our scales in as arguments



  // Append two SVG group elements to the chartGroup area,
  // and create the bottom and left axes inside of them

  // Create one SVG rectangle per piece of tvData
  // Use the linear and band scales to position each rectangle within the chart






