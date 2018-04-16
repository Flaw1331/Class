//# The Upside Down Bar Chart (With Data-Binding!)

// ## Instructions

// * Add code in order to complete a bar chart using data binding.

// * Position and style each bar based on the data it represents.

// ## Bonus

// * So far we have been making vertical bar charts exclusively... 
//   But we could also apply what we have learned thus far to 
//   making horizontal bar charts! Using your newfound 
// knowledge of data-binding and graphing using D3, 
// see if you can create a horizontal bar chart!

// * Since the next step in creating bar 
//   charts is to flip them right-side-up, 
//   experiment with your code a little bit and 
//    see if you can figure out how to manage this.

// ## Hints

// * Look at the previous activities for reference!

// * See this (https://bost.ocks.org/mik/join/), written by D3 creator, Mike Bostock.

var bar_data = [90, 70, 80, 50, 40, 75]


var svg = d3.select("#plot").append("svg")
    .attr('height', 400)
    .attr('width', 600);

// Append a rectangle and set its height in relation to the booksReadThisYear value

svg.data(bar_data)
    .append('rect')
    .classed('bar', true)
    .attr('height', function(d,i) {
        return d;
    })
    .attr('width', 50)
    .attr('x', function(d,i){
        return i+10;
    })
    .attr('y', function(d,i) {
        return d/2;
    })
