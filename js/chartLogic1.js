// Vega-Lite specification
var spec = {
    "background": "#E5E5E5", 
    "layer": [
        {
            "data": {
                "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/7_others/oceans.topojson",
                "format": { "type": "topojson", "feature": "oceans" }
            },
            "mark": { "type": "geoshape", "fill": "#2D2D2D" }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/thomasgia12/assignment2/main/data/longdata1.csv",
                "format": { "type": "csv" }
            },
            "transform": [
                {
                    "filter": "datum.AllYears == selectedYear"
                }
            ],
            "mark": { "type": "circle", "color": "red" },
            "encoding": {
                "longitude": { "field": "lng", "type": "quantitative" },
                "latitude": { "field": "lat", "type": "quantitative" },
                "tooltip": [
                    { "field": "name", "type": "nominal", "title": "Circuit Name" },
                    { "field": "location", "type": "nominal", "title": "Location" },
                    { "field": "country", "type": "nominal", "title": "Country" },
                    { "field": "AllYears", "type": "quantitative", "title": "Year" }
                ],
                "size": { "value": 100 }
            }
        }
    ],
    "data": {
        "url": "https://raw.githubusercontent.com/thomasgia12/assignment2/main/js/ne_110m.topojson",
        "format": {
            "type": "topojson",
            "feature": "countries"
        }
    }
};

// Function to load and render the chart
function renderChart(selectedYear) {
    spec.layer[1].transform[0].filter = `datum.AllYears == ${selectedYear}`;

    // Embed the Vega-Lite spec
    vegaEmbed('#vis', spec, { actions: false }).catch(error => {
        console.error('Error embedding the visualization:', error);
    });
}

// Initial render for 1950
renderChart('1950');

// Update visualization when year selection changes
document.getElementById('yearSelection').addEventListener('input', function () {
    document.getElementById('yearDisplay').textContent = this.value;
    renderChart(this.value);  // Re-render the chart with selected year's data
});

