
var dataArr = [0, 2, 3, 5, 7.5, 9, 10];

var myScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, 600]);

console.log(myScale(0));
console.log(myScale(2));
console.log(myScale(10));

myScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, 800]);


console.log(myScale(10));
// using a linear function
// y = m*x + b
// to interpolate across domain and range.
myScale = d3.scaleLinear()
.domain([0, d3.max(dataArr)])
.range([0, 800]);
console.log(myScale(10));


// use scaleLinear to:
// convert data values into lengths for a bar chart.
// convert data values into positions for a line chart
// change data into a continuous range of colors
// arrange dates into positions on x-axis

var linearScale = d3.scaleLinear()
  .domain([0, 10])
  .range(['yellow', 'red']);

console.log(linearScale(10));

var scaleTime = d3.scaleTime()
  .domain([new Date(2017, 0, 1),
  new Date(2018, 0, 1)])
  .range([0, 700]);

console.log(scaleTime(new Date(2017, 3, 3)));

var quantizeScale = d3.scaleQuantize()
    .domain([0,100])
    .range(['lightblue', 'orange', 'lightgreen', 'pink']);
  
console.log(quantizeScale(30));



var weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
var bandScale = d3.scaleBand()
  .domain(weekDays)
  .range([0, 200]);

console.log(bandScale('Mon'));
console.log(bandScale('Fri'));

console.log(bandScale.bandwidth());

// paddingInner which specifies (as a percentage of the band width) 
//   the amount of padding between each band
// paddingOuter which specifies (as a percentage of the band width) 
//   the amount of padding before the first band and after the last band

bandScale.paddingInner(0.05);
console.log(bandScale.bandwidth());
console.log(bandScale('Fri'));
