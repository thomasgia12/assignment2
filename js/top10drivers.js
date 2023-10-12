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
      {"field": "Wins", "type": "quantitative", "title": "Total Wins"},
      {"field": "ConstructorTeam", "type": "nominal", "title": "Constructor Team"}
    ],
    "color": {
      "condition": [
        {
          "test": "datum.rank === 1",
          "value": "lightblue"
        },
        {
          "test": "datum.rank === 2",
          "value": "red"
        },
        {
          "test": "datum.rank === 3",
          "value": "blue"
        },
        {
          "test": "datum.rank === 4",
          "value": "orange"
        },
        {
          "test": "datum.rank === 5",
          "value": "blue"
        },
                {
          "test": "datum.rank === 6",
          "value": "orange"
        },
        {
          "test": "datum.rank === 9",
          "value": "red"
        }
      ],
      "value": "darkgrey"
    }
  },
  "config": {}
};

document.addEventListener("DOMContentLoaded", function() {
  vegaEmbed('#top10drivers', top10drivers, { actions: false });
});

// Use the chartData object in your application
console.log(top10drivers.description);  // Outputs: "Number of wins of the top 10 drivers from 1950 to 2023"
