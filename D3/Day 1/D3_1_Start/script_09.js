
//   * Use the given javascript file and D3 to accomplish this following.

//   1. Append an `SVG` element to the div provided in the 
//     starter html file.  The SVG element should have a width of 
//     600px and a height of 400 px.  Create a variable to reference this element.

//   2. Bind the data from the given `booksReadThisYear` array, 
// and append a rectangle with a height ten times the value of 
// the the item in the array.

// ## Bonus

// * Add a style to the html file to change your javascript so that 
// when you hover over the rectangle it changes color.


// Data which we will be using to build our rectangle
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3.select("#plot").append("svg")
    .attr('height', 400)
    .attr('width', 600);

// svg.append('rect')
//     .attr('height', booksReadThisYear*10)
//     .attr('width', 100)
//     .attr('x', 50)
//     .attr('y', 10);




// Append a rectangle and set its height in relation to the booksReadThisYear value

svg.append('rect')
    .classed('bar', true)
    .data(booksReadThisYear)
    .attr('height', function(d,i) {
        return d*10;
    })
    .attr('width', 200)
    .attr('x', function(d,i){
        return i+10;
    })
    .attr('y', 10)


