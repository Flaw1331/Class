
// Define the chart's margins as an object
var margin = {
  top: 10,
  right: 30,
  bottom: 30,
  left: 30
};
// Define SVG area dimensions
var svgWidth = 500;
var svgHeight = 400;
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var scaleBandX = d3.scaleBand().rangeRound([0, width]).padding(0.1);
var scaleLinearY = d3.scaleLinear().rangeRound([height, 0]);

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("#plot")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth)

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "margin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("./data/hours-of-tv-watched.csv", function (error, tvData) {

  // Log an error if one exists
  if (error) return console.warn(error);

  // Print the tvData
  console.log(tvData);

  // Cast the hours value to a number for each piece of tvData
  tvData.forEach(function (data) {
    data.hours = +data.hours;
  });

  scaleBandX.domain(tvData.map(function(d) { return d.name; }));
  scaleLinearY.domain([0, d3.max(tvData, function(d) { return d.hours; })]);

  // Create code to build the bar chart using the tvData.
  chartGroup.selectAll(".bar")
    .data(tvData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", scaleBandX.bandwidth())
    .attr("height", d => height - scaleLinearY(d.hours))
    .attr("x", d => scaleBandX(d.name))
    .attr("y", d => scaleLinearY(d.hours))
});
