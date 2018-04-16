var apiKey = "yYnzcE1xqiN_UBcwSKke";

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function getMonthlData() {

  var queryUrl = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&collapse=monthly&api_key=${apiKey}`;
    Plotly.d3.json(queryUrl, function(error, response) {
      var dates = unpack(response.dataset.data, 0);
      var openPrices = unpack(response.dataset.data, 1);
      var highPrices = unpack(response.dataset.data, 2);
      var lowPrices = unpack(response.dataset.data, 3);
      var closingPrices = unpack(response.dataset.data, 4);
      var volume = unpack(response.dataset.data, 5);
      buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume);
    });
}

function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume) {
  // YOUR CODE HERE
  var table = Plotly.d3.select('#summary_table');
  var tbody = table.select('tbody');
  var trow;
  console.log(dates);
  for (var month = 0; month <= 12; month++){
    trow = tbody.append("tr");
    trow.append('td').text(dates[month]);
    trow.append('td').text(openPrices[month]);
    trow.append('td').text(highPrices[month]);
    trow.append('td').text(lowPrices[month]);
    trow.append('td').text(dates[month]);
    trow.append('td').text(closingPrices[month]);
    trow.append('td').text(volume[month]);

  }
}

function buildPlot() {
  var url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2017-1-01&end_date=2018-1-01&api_key=${apiKey}`;

  Plotly.d3.json(url, function(error, response) {

    if (error) return console.warn(error);

    // Grab values from the response json object to build the plots
    var name = response.dataset.name;
    var stock = response.dataset.dataset_code;
    var startDate = response.dataset.start_date;
    var endDate = response.dataset.end_date;
    var dates = unpack(response.dataset.data, 0);
    var openingPrices = unpack(response.dataset.data, 1);
    var highPrices = unpack(response.dataset.data, 2);
    var lowPrices = unpack(response.dataset.data, 3);
    var closingPrices = unpack(response.dataset.data, 4);

    getMonthlData();

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    // Candlestick Trace
    var trace2 = {
      type: "candlestick",
      x: dates,
      high: highPrices,
      low: lowPrices,
      open: openingPrices,
      close: closingPrices
    };

    var data = [trace1, trace2];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      },
      showlegend: false
    };

    Plotly.newPlot("plot", data, layout);

  });
}

buildPlot();

// # Stock Time Series HTML Report

// In this activity, we will complete our financial time 
// series project by building an HTML report page for our 
// visualizations.

// ## Instructions

// * Use Bootstrap to build a financial report HTML page.

//   * This page should include the following:

//     1. A Plotly time series plot of the stock.

//     2. A Table of the 12 month stock data

//     3. A company summary panel

// * Complete the missing code in `plots.js` to 
// dynamically build a table of the monthly stock 
// data using `Plotly.d3`.

// BONUS - Dynamically add the current date 
//to the report header

// - - -

// ### Copyright

// Trilogy Education Services © 2017. All Rights Reserved.
