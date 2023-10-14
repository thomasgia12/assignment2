var constructorteam = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "url": "https://raw.githubusercontent.com/thomasgia12/assignment2/main/data/combinedexcels.csv"
    },
    "transform": [
        {
            "filter": {
                "field": "ConstructorTeam",
                "oneOf": [
                    "Alfa Romeo", "AlphaTauri", "Alpine F1 Team", "Aston Martin",
                    "Caterham", "Ferrari", "Force India", "Haas F1 Team", "Jaguar",
                    "Honda", "Larrousse", "Lotus", "McLaren",
                    "Mercedes", "Minardi", "Racing Point", "Red Bull", "Renault",
                    "Toro Rosso", "Toyota", "Williams"
                ]
            }
        },
        {
            "filter": {
                "field": "circuitname",
                "oneOf": [
                    "Autodromo Enzo e Dino Ferrari",
                    "Autodromo Nazionale di Monza",
                    "Autódromo José Carlos Pace",
                    "Bahrain International Circuit",
                    "Baku City Circuit",
                    "Circuit de Barcelona-Catalunya",
                    "Circuit de Monaco",
                    "Circuit de Nevers Magny-Cours",
                    "Circuit de Spa-Francorchamps",
                    "Hungaroring",
                    "Indianapolis Motor Speedway",
                    "Istanbul Park",
                    "Marina Bay Street Circuit",
                    "Nürburgring",
                    "Red Bull Ring",
                    "Sepang International Circuit",
                    "Shanghai International Circuit",
                    "Silverstone Circuit",
                    "Sochi Autodrom",
                    "Suzuka Circuit",
                    "Valencia Street Circuit",
                    "Yas Marina Circuit"
                ]
            }
        },
        {
            "aggregate": [{"op": "mean", "field": "positionOrder", "as": "avgPosition"}],
            "groupby": ["ConstructorTeam", "circuitname"]
        }
    ],
    "mark": "rect",
    "encoding": {
        "x": {
            "field": "circuitname",
            "type": "ordinal",
            "title": "Circuit Name",
            "axis": {"labelAngle": -45}
        },
        "y": {
            "field": "ConstructorTeam",
            "type": "ordinal",
            "title": "Constructor Team"
        },
        "color": {
            "field": "avgPosition",
            "type": "quantitative",
            "title": "Average Position",
            "scale": {"domain": [1, 22], "scheme": "redyellowblue", "reverse": true},
            "legend": {"title": "Average Position"}
        },
        "tooltip": [
            {"field": "ConstructorTeam", "type": "nominal", "title": "Constructor Team"},
            {"field": "circuitname", "type": "nominal", "title": "Circuit Name"},
            {"field": "avgPosition", "type": "quantitative", "title": "Average Position", "format": ".2f"},
        ]
    },
    "title": "Average Race Performance by Constructor at Specific Circuits",
    "config": {}
};

document.addEventListener("DOMContentLoaded", function() {
    vegaEmbed('#constructorteam', constructorteam, {actions: false});
  });
  
  // Use the chartData object in your application
  console.log(constructorteam.description);  // Outputs: "Number of wins of the top 10 drivers from 1950 to 2023"
  