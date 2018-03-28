
let dataset = [2, 4, 6, 8];
let numbers = d3.select('#my-d3')
.selectAll('p')
.data(dataset)
.enter()
.append('p')
.text (function(d){ return d;})
.attr('color', function(d,i) { 
    if (d < 4) {
        return 'red';
    }
    else {
        return 'white';
    }
});