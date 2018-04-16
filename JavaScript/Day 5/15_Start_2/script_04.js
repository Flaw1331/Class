
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
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// Submit Button handler
function handleSubmit() {
  // @TODO: YOUR CODE HERE
  // Prevent the page from refreshing
  Plotly.d3.event.preventDefault();

  // Select the input value from the form

  // clear the input value

  // Build the plot with the new stock
}

function buildPlot(stock) {
  var apiKey = "YOUR KEY HERE";

  var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2017-03-30&end_date=2018-03-30&api_key=${apiKey}`;

  Plotly.d3.json(url, function(error, response) {

    if (error) return console.warn(error);

    // Grab values from the response json object to build the plots
    var name = response.dataset.name;
    var stock = response.dataset.dataset_code;
    var startDate = response.dataset.start_date;
    var endDate = response.dataset.end_date;
    var dates = unpack(response.dataset.data, 0);
    var closingPrices = unpack(response.dataset.data, 4);

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

    var data = [trace1];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);

  });
}

// @TODO: YOUR CODE HERE
// # Stock Time Series Dynamic

// In this activity, we expand on our previous time 
// series plot with a dynamic plot that reads 
// the stock from the user form.

// ## Instructions

// * Use the starter code provided and complete the 
// function `handleSubmit`

// * Add an event listener to the submit 
// button that will take the input value and 
// search quandl for a particular stock.

// ## Hints

// * To select the input value from the form, 
 // select the input element containing the user's 
 // desired stock; use the 
 // [node](https://github.com/d3/d3-selection#selection_node) 
 // function on your selection; and use dot notation 
 // to retrieve the//
 // [value](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) 
 // attribute from the result.

// * To clear the input value, set the above `value` 
// equal to the empty string.

// - - -

// ### Copyright

// Trilogy Education Services © 2017. All Rights Reserved.
