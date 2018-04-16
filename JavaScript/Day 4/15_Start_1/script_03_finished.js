var eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
                "Brown", "Brown", "Brown", "Green", "Green",
                "Green", "Green", "Green", "Blue", "Blue",
                "Blue", "Blue", "Blue", "Blue"];
var eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
                  25.7, 24.5, 26.4, 24.2, 28, 26.9,
                  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];


// # A Flicker of the Eye
// ## Instructions

// * In this activity, you will create your first Plotly bar chart.

// * Use Plotly to create a bar chart of eye color 
//   vs the frequency of eye flickers.

// * What happens? What is Plotly doing?

// ## Bonus
// * How would you make this plot more meaningful? 
//   Try to create a more meaningful plot.
                  


// @TODO: Complete the Following Steps
var eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
                "Brown", "Brown", "Brown", "Green", "Green",
                "Green", "Green", "Green", "Blue", "Blue",
                "Blue", "Blue", "Blue", "Blue"];
var eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
                  25.7, 24.5, 26.4, 24.2, 28, 26.9,
                  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];

// Create the Trace
var trace1 = {
  x: eyeColor,
  y: eyeFlicker,
  type: "bar"
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "Eye Color vs Flicker",
  xaxis: { title: "Eye Color" },
  yaxis: { title: "Flicker Frequency" }
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);

