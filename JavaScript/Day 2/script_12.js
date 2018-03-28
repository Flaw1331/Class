// json
let parameters = {
  columns : [
    {
      title: 'Zip Code',
      html: function (row) { return row.Zipcode; }
    },
    {
      title: 'Household Income',
      html: function (row) { return `$${row['Household Income']}`; }
    },
    {
      title: 'Address',
      html: function (row) { 
        let address = row.Address.split(',');
        let addressString = '';
        for (let i = 0; i < address.length; ++i) {
          if (address[i] != ' USA') {
            addressString += address[i];
          }
        }
        return addressString; }
    },
    {
      title: 'Poverty Rate',
      html: function (row) { return d3.format('.2f')(parseFloat(row['Poverty Rate'])); }
    }
  ],
  data: null
}


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
    .data(function (row, i) {
      // evaluate column objects against the current row
      return parameters.columns.map(function (column) {
        var cell = {};
        d3.keys(column).forEach(function (k) {
          if (typeof (column[k]) === 'function') {
            cell[k] = column[k](row, i)
          }
        });
        return cell;
      });
    }).enter()
    .append('td')
    .text(function (data) { return data.html; });

});