// # Dynamic Pie Chart with Dropdown

// In this activity, you will use a dropdown selector 
// to choose from one of three datasets to update the 
// pie chart.

// ## Instructions
// * Review the drowndown select element in the `index.html`
//  file to see what options will be sent to the 
// `getData` function.

// * Complete the `getData` function to choose a 
// new data array depeneding on which dataset was 
// selected. You can choose the new data values. 
// Write a switch statement to choose between the 
// datasets based on the value selected from the 
// html dropdown select element.

// * Complete the `updatePlotly` function to use 
// `Plotly.restyle` to update the chart data with 
// a new data array.

// ## Hints
// * Remember that `Plotly.restyle` requires an 
// extra set of square brackets around the data arrays.


function init() {
    var data = [{
      values: [19, 26, 55, 88],
      labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
      type: "pie"
    }];
  
    var layout = {
      height: 600,
      width: 800
    };
  
    Plotly.plot("pie", data, layout);
  }
  
  function updatePlotly(newdata) {

    Plotly.restyle('pie', "values", [newdata]);
  }
  
  function getData(dataset) {
    // YOUR CODE HERE
    // create a select statement to select different data arrays (YOUR CHOICE)
    // whenever the dataset parameter changes. This function will get called
    // from the dropdown event handler.
    // Initialize empty arrays to contain our axes
    var values = [];

    // Fill the x and y arrays as a function of the selected dataset
    switch (dataset) {
        case "dataset1":
          values: [10, 20, 30, 40];
          break;
        case "dataset2":
          values: [5, 25, 50, 20];
          break;
        case "dataset3":
          values: [15, 15, 15, 55];
          break;
        default:
          values: [20, 10, 55, 15];
          break;
        }

    updatePlotly(data);
  }

init();  