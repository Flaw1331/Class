var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Import data from an external CSV file
d3.csv("./data/data.csv", function(error, mojoData) {
  if (error) throw error;

  // Create a function to parse date and time
  // var parseTime = d3.timeParse( ...

  // Format the data
  mojoData.forEach(function(data) {

  });

  // Set the ranges with scaling functions
  var xTimeScale = d3.scaleTime()
    .range([0, width]);

  var yLinearScale1 = d3.scaleLinear()
    .range([height, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .range([height, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xTimeScale);
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);

  // Scale the domain
  // x.domain( ...
  // y.domain( ...
  // y1.domain( ...

  // Line generators for each line
  var line1 = d3.line()
     .x(function(d){(function(data) {
      return xTimeScale(data.date);
    })
    .y(function(data) {
      return yLinearScale(data.morning);
    })

  var line2 = d3.line();
    // .x(function(d){ ...
    // .y(function(d){ ...

  // Append a path for line1
  svg.append("path")
    .data([mojoData])
    .attr("d", line1)
    .attr("class", "line green");

  // Append a path for line2
  svg.append("path")
    .data([mojoData])
    .attr("d", line2)
    .attr("class", "line orange");

  // Add x-axis
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(bottomAxis);

  // Add y-axis to the left side of the display
  svg.append("g")
    // Define the color of the axis text
    // .attr("stroke", ....
    .call(leftAxis);

  // Add y1-axis to the right side of the display
  svg.append("g")
    // ....
    // .attr("transform", "translate(...
    .call(rightAxis);

  svg.append("text")
    // Position the text
    .attr("transform", "translate(" + (width / 2) + "," + (height + margin.top + 20) + ")")
    // Center the text (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px");
    // .attr("fill", "your color here")
    // .text("your label text here")

});


// # Activity 6 - Create a Multiline Chart with Multiple Axes

// * Your task is to graph two data trends on a single chart: 

//   * The performance of the Dow index
//   * The number of Smurf sightings in North America during 
//     the period from January 1, 2016 to July 1, 2017. 

// * Is there a correlation between the two phenomena? 
//   * Create a multi-line chart with two y-axes. 
//   * Use the solution to the last activity to help you with this activty. 
//   * Instead of using inline methods to define attributes such as `font-size` and `fill`, try to use CSS.
