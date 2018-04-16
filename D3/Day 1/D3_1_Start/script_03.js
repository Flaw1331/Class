var austin_weather = [{
  date: "2018-02-01",
  low: 51,
  high: 76
},
{
  date: "2018-02-02",
  low: 47,
  high: 59
},
{
  date: "2018-02-03",
  low: 44,
  high: 59
},
{
  date: "2018-02-04",
  low: 52,
  high: 73
},
{
  date: "2018-02-05",
  low: 47,
  high: 71
},
]
// # D3_Table

// **Instructions:**

//   * This activity requires you to 
//     build a table using D3 data binding.

//   * Use `austin_weather` variable given 
//     to you is the javascript file and the 
//     starter html file to create a table 
//     using D3 data binding.

// **Hint:**

//   * Use the `.html()` method to add 
//     several `td` elements inside each table row.

// // YOUR CODE HERE

d3.select("tbody")
    .selectAll("tr")
    .data(austin_weather)
    .enter()
    .append('tr')
    .html(function(d){
      return '<td>' + d.date + '</td><td>' + d.low + '</td><td>' + d.high
    });