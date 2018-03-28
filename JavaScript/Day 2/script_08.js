d3.json('data/tweets.json', createSpreadsheet);

function createSpreadsheet(data) {
  let tweetData = data.tweets;
  let keyValues = d3.keys(tweetData[0]);
  console.log(keyValues);
  
  console.log(d3.entries(tweetData));
  d3.select('#my-d3')
    .append('table')
    .attr('class', 'table');

  d3.select('table')
    .append('thead')
    .append('tr')
    .selectAll('td')
    .data(keyValues)
    .enter()
    .append('td')
    .html(function (d) { return d; });

  d3.select('table')
    .append('tbody')
    .selectAll('tr')
    .data(tweetData)
    .enter()
    .append('tr');

  d3.select('table')
    .select('tbody')
    .selectAll('tr')
    .selectAll('td')
    .data(function (d) { return d3.entries(d); })
    .enter()
    .append('td')
    .html(function (d) { return d.value; });
}

