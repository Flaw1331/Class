// Part 1

var svg = d3.select("#plot").append("svg");

svg.attr("width", "150px")
  .attr("height", "150px")

svg.append("circle")
    .attr("cx", 50)
    .attr("cy", 30)
    .attr("r", 25)
    .attr("stroke", "gray")
    .attr("stroke-width", "5")
    .attr("fill", "none");

// Part 2
// Show how to bind the svg to data

var svg = d3.select("#plot").append("svg");

svg.attr("width", "200px")
  .attr("height", "200px");

circles = svg.selectAll("circle");

var r_values = [60, 40, 25, 10];

circles.data(r_values)
    .enter()
    .append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", function(d) {
        return d;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "red");
