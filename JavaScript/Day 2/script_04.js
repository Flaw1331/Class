  
// d3.select('#my-d3').append('p').text('New paragraph!');

// d3.select('body').append('p').text('and more.')

// d3.selectAll('dev').style('background-color', function(d,i){
//     console.log(i);
//     console.log(d);
//     return (i%2 == 0) ? 'lightblue' : 'lightgray';
// });

// d3.selectAll('dev').style('width', function(d,i){
//     return(10+10 * i) + 'px';
// })
// .style('background-color', function(d,i){
//     return (i%2 == 0) ? 'lightblue':'lightgray'
// });

// let selector = d3.select('#my4divs')
//     .selectAll('div')
//     .data(10, 20, 30, 40)
//     .style('background-color', function(d,i){
//         console.log(d);
//         reutrn (i%2 == 0) ? 'lightblue':'lightgray';
//     })
//     .style('width', function(d,i){
//         return (10 + d) + 'px';
//     });s

d2.select('#my-d3')
  .selectAll('div')
  .data([10,20,30,40])
  .enter()
  .append('div')
  .text(function(d) { return d;});