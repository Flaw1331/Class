// Starting with the census data below, use the parameters as shown in script_09.js to 
// display the zip code, address and poverty rate rounded to two decimal places.

// Bonus. 'USA' in the Address column is redundant. 
//Find a way to take off the USA field.

// json
let parameters = {
    columns : [
      {
        title: 'Zip Code',
        html: function (row) { return row.Zipcode; }
      },
      {
        title: 'Address',
        html: function (row) { return row.Address; }
      },
      {
        title: 'Poverty Rate',
        html: function (row) { return d3.format('.2f')(row['Poverty Rate']); }
      }
    ],
    data: null
  };

  d3.json('data/census.json', function (error, censusData) {
    let table = d3.select('#my-d3').append('table').attr('class', 'table');
  
    table.append('thead').append('tr')
      .selectAll('th')
      .data(parameters['columns'])
      .enter()
      .append('th')
      .text(function (data) { return data.title; });
  
    table.append('tbody')
      .selectAll('tr') // create row for each row of data
      .data(censusData)
      .enter()
      .append('tr')
      .selectAll('td')
      .data(function (row) {
        // evaluate column objects against the current row
        return parameters.columns.map(function (column) {
          var cell = {};
          // console.log(row);
          d3.keys(column).forEach(function (k) {
            if (typeof (column[k]) === 'function') {
              cell[k] = column[k](row);
            }
          });
          return cell;
        });
      }).enter()
      .append('td')
      .text(function (data) { return data.html; });
  
  });