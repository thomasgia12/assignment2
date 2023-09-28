// mapVisualizer.js

const embedOptions = { mode: "vega-lite", actions: false };

const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Circuits on World Map",
    "width": 800,
    "height": 400,
    "data": {
        "url": "https://raw.githubusercontent.com/thomasgia12/assignment2/main/js/ne_110m.topojson",
        "format": {
            "type": "topojson",
            "feature": "countries"
        }
    },
    "projection": { "type": "equalEarth" },
    "layer": [
        {
            "mark": { "type": "geoshape", "fill": "lightgray", "stroke": "white" }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/FIT3179/Vega-Lite/main/7_others/oceans.topojson",
                "format": { "type": "topojson", "feature": "oceans" }
            },
            "mark": { "type": "geoshape", "fill": "skyblue" }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/thomasgia12/assignment2/main/data/longdata1.csv",
                "format": { "type": "csv" }
            },
            "transform": [{
                "filter": `datum.AllYears == (datum.AllYears == null ? true : document.getElementById('yearSelection').value)`
            }],
            "mark": {
                "type": "circle",
                "color": "red"
            },
            "encoding": {
                "longitude": { "field": "lng", "type": "quantitative" },
                "latitude": { "field": "lat", "type": "quantitative" },
                "tooltip": [
                    { "field": "name", "type": "nominal", "title": "Circuit Name" },
                    { "field": "location", "type": "nominal", "title": "Location" },
                    { "field": "country", "type": "nominal", "title": "Country" }
                ]
            }
        }
    ],
    "config": {}
};

function renderChart() {
    const selectedYear = document.getElementById('yearSelection').value;
    if (selectedYear === "all") {
        spec.layer[2].transform[0].filter = "true";
    } else {
        spec.layer[2].transform[0].filter = `datum.AllYears == ${selectedYear}`;
    }
    vegaEmbed("#vis", spec, embedOptions).then(console.log).catch(console.warn);
}

// Initial render
renderChart();

// Re-render on selection change
document.getElementById('yearSelection').addEventListener('input', function() {
    document.getElementById('yearDisplay').textContent = this.value;
    renderChart();
});
