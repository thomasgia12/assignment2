const top10drivers = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Number of wins of the top 10 drivers from 1950 to 2023",
  "data": {
    "url": "https://raw.githubusercontent.com/thomasgia12/assignment2/main/data/combinedexcels.csv",
    "format": {"type": "csv"}
  },
  "transform": [
    {"filter": "datum.FinalPosition === '1'"},
    {
      "aggregate": [{"op": "count", "field": "FinalPosition", "as": "Wins"}],
      "groupby": ["First", "Last"]
    },
    {
      "window": [{"op": "rank", "as": "rank"}],
      "sort": [{"field": "Wins", "order": "descending"}]
    },
    {"filter": "datum.rank <= 10"},
    {"calculate": "datum.First + ' ' + datum.Last", "as": "FullName"}
  ],
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "Wins",
      "type": "quantitative",
      "axis": {"title": "Number of Wins"}
    },
    "y": {
      "field": "FullName",
      "type": "nominal",
      "axis": {"title": "Driver", "labelAngle": 0},
      "sort": "-x"
    },
    "tooltip": [
      {"field": "First", "type": "nominal", "title": "Driver"},
      {"field": "Last", "type": "nominal", "title": "Surname"},
      {"field": "Wins", "type": "quantitative", "title": "Total Wins"}
    ]
  },
  "config": {}
};

document.addEventListener("DOMContentLoaded", function() {
  vegaEmbed('#top10drivers', top10drivers);
});

// Use the chartData object in your application
console.log(top10drivers.description);  // Outputs: "Number of wins of the top 10 drivers from 1950 to 2023"
