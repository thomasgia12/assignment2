const fastestLapTimesChart = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Fastest lap times at Autodromo Nazionale di Monza per year",
    "data": {
      "url": "https://raw.githubusercontent.com/thomasgia12/assignment2/main/data/combinedexcels.csv",
      "format": {"type": "csv"}
    },
    "transform": [
      {"filter": "datum.circuitname === 'Autodromo Nazionale di Monza'"},
      {"filter": "datum.milliseconds > 0"},
      {"calculate": "datum.milliseconds / 60000", "as": "minutes"},
      {
        "window": [{"op": "row_number", "as": "rank"}],
        "sort": [{"field": "minutes", "order": "ascending"}],
        "groupby": ["Year"]
      },
      {"filter": "datum.rank === 1"}
    ],
    "mark": "point",
    "encoding": {
      "x": {
        "field": "Year",
        "type": "quantitative",
        "axis": {"title": "Year"},
        "scale": {"domain": [1950, 2023]}
      },
      "y": {
        "field": "minutes",
        "type": "quantitative",
        "axis": {"title": "Time to finish in Monza (in minutes)"}
      },
      "tooltip": [
        {"field": "Year", "type": "quantitative", "title": "Year"},
        {
          "field": "minutes",
          "type": "quantitative",
          "title": "Fastest Time (minutes)"
        },
        {"field": "First", "type": "nominal", "title": "Driver First Name"},
        {"field": "Last", "type": "nominal", "title": "Driver Last Name"},
        {
          "field": "ConstructorTeam",
          "type": "nominal",
          "title": "Constructor Team"
        }
      ]
    },
    "config": {}
  };
  
  // Later in the code, you can use the variable 'fastestLapTimesChart' wherever required.
  window.onload = function() {
    vegaEmbed('#scatterplot', fastestLapTimesChart).then(function(result) {
      // Visualization successfully embedded
    }).catch(console.error); // Log any embedding errors to the console
  };