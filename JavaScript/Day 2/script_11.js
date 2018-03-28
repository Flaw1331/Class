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
  data: null,
  filtered_data: null
};
let myD3 = d3.select('#my-d3');
let continentDropDown = d3.select('#continent');

function loadDropDown() {
  let dropDownOptions = new Set();
  dropDownOptions.add('All');
  for (let row of parameters.data) {
    let optionValue = row['continent'];
    dropDownOptions.add(optionValue);
  }
  continentDropDown.on('change', onchange);
  
  let options =continentDropDown
    .selectAll('option')
    .data([...dropDownOptions])
    .enter()
    .append('option')
    .attr('value', function(d) { return d;})
    .text(function(d) {return d;});

}

function onchange() {
  let selectValue = d3.select('#continent')
    .property('value');
  console.log(selectValue);
  // d3.select('#my-text')
  //   .append('p')
  //   .text(selectValue + ' is the last selected option.');
  parameters.filtered_data = [];
  for (let row of parameters.data) {
    if (selectValue === 'All') {
      parameters.filtered_data.push(row);
    }
    else if (row['continent'] === selectValue) {
      parameters.filtered_data.push(row);
    }
  }
  console.log(parameters.filtered_data);
  createTables();
}

d3.json('data/world.json', init);

function init(worldData) {
  parameters.data = worldData;
  parameters.filtered_data = worldData;
  createTables();
  loadDropDown();
}

function createTables() {
  myD3.html('');
  let table = myD3.append('table')
    .attr('class', 'table');
  
  table.append('thead').append('tr')
    .selectAll('th')
    .data(parameters['columns'])
    .enter()
    .append('th')
    .text(function (data) { return data.title; });

  table.append('tbody')
    .selectAll('tr') // create row for each row of data
    .data(parameters.filtered_data)
    .enter()
    .append('tr')
    .selectAll('td')
    .data(function (row) {
      // evaluate column objects against the current row
      return parameters.columns.map(function (column) {
        var cell = {};
        d3.keys(column).forEach(function (k) {
          if (typeof (column[k]) === 'function') {
            cell[k] = column[k](row);
          }
        });
        return cell;
      });
    })
    .enter()
    .append('td')
    .text(function (data) { return data.html; });

}