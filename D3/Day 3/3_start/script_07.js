var margin = { top: 10, right: 10, bottom: 100, left: 40 };
width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.timeParse('%m/%d/%Y %H:%M');
var dateFormat = d3.timeFormat("%m/%d %I %p");
var formatPower = d3.format(".0f");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function (d) { return x(d.date); })
    .y(function (d) { return y(d.value); });
var div = d3.select("body").append("div")
    .attr("class", "tooltip");
div.style("opacity", 0);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

d3.json('./data/ac_load.json', function (error, jsonData) {
    //console.log(jsonData);
    var data = jsonData.data;
    data.forEach(function (d) {
        d.date = parseDate(d.date_);
        d.value = +d.value;
    });
    // Scale the range of the data
    x.domain(d3.extent(data, function (d) { return d.date; }));
    y.domain([0, d3.max(data, function (d) { return d.value; })]);

    var toolTip = d3
      .tip()
      .attr("class", "tooltip")
      .offset([30, -40])
      .html(function(data) {
        return dateFormat(data.date) + '<br>' + formatPower(data.value) + ' kW';
      });

    svg.call(toolTip);

    svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueline);
    svg.selectAll("line-circle")
        .data(data)
        .enter().append("circle")
        .attr("class", "data-circle")
        .attr("r", 5)
        .attr("cx", function (d) { return x(d.date); })
        .attr("cy", function (d) { return y(d.value); })
        .on("mouseover", function (data, index) {
            toolTip.show(data);
        })
        .on("mouseout", function (data, index) {
            toolTip.hide(data);
        });

    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
});