var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Import data from the mojoData.csv file
d3.csv("./data/mojoData.csv", function(error, mojoData) {
  if (error) throw error;
  console.log(mojoData);
  console.log([mojoData]);
  // Create a function to parse date and time
  var parseTime = d3.timeParse("%d-%b");

  // Format the data
  mojoData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.morning = +data.morning;
    data.evening = +data.evening;
  });

  // Set the ranges with scaling functions

  // Create axis functions

  // Line generators for each line

  // Append a path for line1

  // Append a path for line2

  // Add bottomAxis

  // Add leftAxis to the left side of the display

  // Add rightAxis to the right side of the display
});


// # Activity 5 - Add a Legend and Color the Y-axes

// * In this activity, you will add a legend, and you will color 
//   both y-axes to differentiate them.

// ## Bonus
// * Bonus points for adding axis labels to the y-axes!

// ## Hints

// * See [Mozilla's Doc for SVG text-anchor](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor) which can be used to center SVG text.

// * See this [example of appending text with D3](http://bl.ocks.org/ChrisJamesC/4474971).
