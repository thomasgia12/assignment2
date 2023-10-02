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
                    "BMW Sauber", "Brabham", "Caterham", "Coloni", "Cooper", "Dallara",
                    "Ensign", "Ferrari", "Force India", "Haas F1 Team", "Jaguar",
                    "Honda", "Larrousse", "Leyton House", "Lotus", "McLaren",
                    "Mercedes", "Minardi", "Racing Point", "Red Bull", "Renault",
                    "Toro Rosso", "Toyota", "Williams"
                ]
            }
        },
        {
            "filter": {
                "field": "circuitname",
                "oneOf": [
                    "Albert Park Grand Prix",
                    "Autodromo Enzo e Dino Ferrari",
                    "Autodromo Internazionale del Mugello",
                    "Autodromo Nazionale di Monza",
                    "Autódromo Hermanos Rodríguez",
                    "Autódromo José Carlos Pace",
                    "Autódromo Juan y Oscar Gálvez",
                    "Autódromo do Estoril",
                    "Bahrain International Circuit",
                    "Baku City Circuit",
                    "Buddh International Circuit",
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
            "scale": {"domain": [1, 20], "scheme": "redyellowblue", "reverse": true},
            "legend": {"title": "Average Position (Lower is Better)"}
        },
        "tooltip": [
            {"field": "ConstructorTeam", "type": "nominal", "title": "Constructor Team"},
            {"field": "circuitname", "type": "nominal", "title": "Circuit Name"},
            {"field": "avgPosition", "type": "quantitative", "title": "Average Position", "format": ".2f"}
        ]
    },
    "title": "Average Race Performance by Constructor at Each Circuit (Selected Teams)",
    "config": {}
};

document.addEventListener("DOMContentLoaded", function() {
    vegaEmbed('#constructorteam', constructorteam);
  });
  
  // Use the chartData object in your application
  console.log(constructorteam.description);  // Outputs: "Number of wins of the top 10 drivers from 1950 to 2023"
  