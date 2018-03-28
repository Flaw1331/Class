// json
let parameters = {
  columns : [
    {
      title: 'Name',
      html: function (row) { return row.name; }
    },
    {
      title: 'Longitude',
      html: function (row) { return d3.format('.2f')(row.longitude); }
    },
    {
      title: 'Latitude',
      html: function (row) { return d3.format('.2f')(row.latitude); }
    }
  ],
  data: null
};


d3.json('data/world.json', function (error, worldData) {
  let table = d3.select('#my-d3').append('table').attr('class', 'table');

  table.append('thead').append('tr')
    .selectAll('th')
    .data(parameters['columns'])
    .enter()
    .append('th')
    .text(function (data) { return data.title; });

  table.append('tbody')
    .selectAll('tr') // create row for each row of data
    .data(worldData)
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


// This is complicated.
// 

// let csvData = [ {country:'Morocco', city:'Marrakesh'}, {country:'France', city:'Paris'}];
// d3.select('body').selectAll('myDiv').data(csvData).enter().append('myDiv');
// console.log(document.querySelector('myDiv').__data__);

// later we do 
// d3.selectAll('myDiv').data(function(d) {
// // stuff here.
// });

// That (d) will be the same as our __data__ property