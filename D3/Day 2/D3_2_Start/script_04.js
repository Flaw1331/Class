
  // Part 1: Max, Min, Extent
  var dataArr = [10, 20, 2000];


  // Part 2: scaleLinear
  // Imagine you have test scores with possible scores 
  // from 0 to 100, and you want to graph them in an 
  // SVG that is 1000 pixels high.

  testScores = [50, 90, 95, 75, 85];

  // a. use scale linear
  var myScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 1000]);


  // b. max and min
  var myScale = d3.scaleLinear()
  .domain([d3.min(testScores), d3.max(testScores)])
  .range([0, 1000]);


  // c. extent
  console.log(d3.extent(dataArr));

  // Part 3: scaleBand
  // Imagine you want to visualize 
  // student grade information on a 
  // bar chart.
  svgHeight = 600;
  svgWidth = 1000;

  testScores = [90, 85, 75, 90];
  students = ["Han", "Sarah", "Matt", "Ruchi"];

  // use scaleBand to find the x-values of Matt
  // and height of Han's bar

