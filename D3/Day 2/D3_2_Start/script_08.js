var svgWidth = 600;
var svgHeight = 400;

// create an SVG element
var svg = d3.select("#plot")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)

// Load csv data
d3.csv("./data/NCHS_life_expectancy_at_birth.csv", function (error, lifeData) {

  if (error) return console.warn(error);

  console.log(lifeData);

  //cast the data from the csv as numbers
  lifeData.forEach(function (data) {
    data.year = +data.year
    data.lifeExpectancy = +data.lifeExpectancy
  })

  //Create a scale for your independent (x) coordinates


  //Create a scale for your dependent (y) coordinates


  // create a line generator function and store as a variable
  // use the scale functions for x and y data


  // Append a path element to the svg, make sure to set the stroke, stroke-width, and fill attributes.


});


// # Complete Bar Chart

// In this activity, we will utilize the data retrieved from a csv 
// on life expectancy over time to generate a line.

// ## Instructions

// * First, take a few minutes to review the code.

// * Note that we cast `year` as a number here.  This is for 
//   demonstration purposes and will normally be cast as a date 
//   object.  You will see this in the next activity.

// * Create scales for x and y so that your line fits the SVG properly.

// * Create and store a line generator function using the scale functions 
//   for x and y.

// * Append a path element to the SVG using the line generator and add   
//   styling attributes.

// * Test your code by running a server and viewing in the browser.  
//   Refine as needed.

// ## Hints

// * Check out [D3 in Depth - Line Generator](http://d3indepth.com/shapes/#line-generator).
