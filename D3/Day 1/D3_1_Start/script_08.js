var pointData = [
    {
        'x': 205,
        'y': 110
    },
    {
        'x': 125,
        'y': 160
    },
    {
        'x': 125,
        'y': 250
    },
    {
        'x': 205,
        'y': 290
    },
    {
        'x': 275,
        'y': 250
    },
    {
        'x': 275,
        'y': 160
    },
    {
        'x': 205,
        'y': 110
    }
];
var svg = d3.select('#plot')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 1000);



var line = d3.line()
    .x(function (d) { return d.x; })
    .y(function (d) { return d.y; });

var path = svg.append('path')
    .attr('d', line(pointData))
    .attr('stroke-width', 25)
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke', 'rgb(255,255,255)')
    .attr('fill', 'none');

// var totalLength = path.node().getTotalLength();

// function forwards() {
//     path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
//         .attr('stroke-dashoffset', totalLength)
//         .transition()
//         .duration(4000)
//         .attr('stroke-dashoffset', 0)
//         .on('end', backwards);
// }
// function backwards() {
//     path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
//         .attr('stroke-dashoffset', 0)
//         .transition()
//         .duration(4000)
//         .attr('stroke-dashoffset', totalLength)
//         .on('end', forwards);
// }
// forwards();

