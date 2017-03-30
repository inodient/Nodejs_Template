const express = require( "express" );
const app = express();

app.set( "views", __dirname + "/views" );
app.set( "view engine", "ejs" );
app.engine( "html", require("ejs").renderFile );

app.use( express.static("img") );
app.use( express.static("css") );
app.use( express.static("js") );
app.use( express.static("amcharts") );


app.get( "/", (req, res) => {
  res.render( "index.ejs" );
} );

app.get( "/index", (req, res) => {
  res.render( "index.ejs" );
} );

app.get( "/login", (req, res) => {
  res.render( "login.ejs" );
});

app.get( "/facebookLogin", (req,res) => {
  res.render( "facebookLogin.html" );
});

app.get( "/history", (req, res) => {
  res.render( "history.ejs" );
});

app.get( "/overview", (req, res) => {

  console.log( "projectNo : " + req.query.projectNo );
  console.log( req.params );

  var data = [
    {
      text: "Basic Skills",
      description: "BBB Skills",
      nodes: [
        {
          text: "Algorithm"
        },
        {
          text: "Data Structure"
        }
      ]
    },
    {
      text: "Software Development / Running Environment",
      nodes: [
        {
          text: "Languages",
          nodes : [
            {
              text: "Common"
            },
            {
              text: "Web Specifics"
            },
          ]
        },
        {
          text: "OS",
          nodes : [
            {
              text: "Fedora"
            },
            {
              text: "Windows"
            },
          ]
        },
        {
          text: "Design (UML)"
        }
      ]
    },
    {
      text: "Network / System Architecture",
      nodes: [
        {
          text: "Architecture Overview"
        },
        {
          text: "Monitoring",
          nodes : [
            {
              text: "WireShark(Packet)"
            },
            {
              text: "TraceRoute (Port)"
            }
          ]
        }
      ]
    },
    {
      text: "Web Application Development",
      nodes: [
        {
          text: "Architecture Overview"
        },
        {
          text: "Framework (Both C/S)"
        },
        {
          text: "WAS (Web Application Server)"
        }
      ]
    },
    {
      text: "Advanced Study & Share Abilities",
      nodes: [
        {
          text: "Machine Learning / Bigdata"
        },
        {
          text: "Search Engine"
        },
        {
          text: "Open Source Project"
        }
      ]
    }
  ];

  var chartOptions = {
    "type": "radar",
    "categoryField": "category",
    "addClassNames": true,
    "fontSize": 15,
    "graphs": [
      {
        "valueField": "value"
      }
    ],
    "valueAxes": [
      {
        "axisTitleOffset": 20,
        "minimum": 0,
        "axisAlpha": 0.5,
        "dashLength": 3
      }
    ],
    "legend": {
      "useGraphSettings": true,
      "font-size": 15
    },
    "dataProvider": [
      {
        "category": "Category 1",
        "value": 5,
      },
      {
        "category": "Category 2",
        "value": 4.5
      },
      {
        "category": "Category 3",
        "value": 3.7
      },
      {
        "category": "Category 4",
        "value": 5.0
      },
      {
        "category": "Category 5",
        "value": 5.8
      },
      {
        "category": "Category 6",
        "value": 1
      },
    ]
  };

  res.render( "overview.ejs", {
    data: data,
    chartOptions: chartOptions
  });
});

app.get( "/overview_partials", (req, res) =>{
  res.render( "partials/overview_partial.ejs" );
});

app.get( "/main", (req, res) => {

  var projects = [
    {
      "name": "Web Application Development",
      "id": "id_01"
    },
    {
      "name": "English",
      "id": "id_02"
    },
    {
      "name": "Machine Learning",
      "id": "id_03"
    },
    {
      "name": "Algorithm",
      "id": "id_04"
    },
    {
      "name": "Languages",
      "id": "id_05"
    }
  ];

  var history = [
    {
      "date": "2017-03-01",
      "title": "Project Initializing",
      "content": "Create Web Application Development Project"
    },
    {
      "date": "2017-03-01",
      "title": "Project Initializing",
      "content": "Create Web Application Development Project"
    },
    {
      "date": "2017-03-01",
      "title": "Project Initializing",
      "content": "Create Web Application Development Project"
    }
  ];

  res.render( "main.ejs", {
    projects: projects,
    history: history
  });

} );

app.get( "/w3css", (req, res) => {
  res.render( "w3css.html" );
} );

app.get( "/amchart", (req, res) => {
  res.render( "samples/radarSimple.html" );
} );

app.get( "/pat", function(req, res){
  res.render( "radarTemplate.html" );
});

app.get( "/performanceView/:id", function(req, res){
  // 1. Get Data (json)
  var chartOptions = {
    "type": "radar",
    "categoryField": "category",
    "addClassNames": true,
    "fontSize": 15,
    "graphs": [
      {
        "valueField": "value"
      }
    ],
    "valueAxes": [
      {
        "axisTitleOffset": 20,
        "minimum": 0,
        "axisAlpha": 0.5,
        "dashLength": 3
      }
    ],
    "legend": {
      "useGraphSettings": true,
      "font-size": 15
    },
    "dataProvider": [
      {
        "category": "Category 1",
        "value": 5,
      },
      {
        "category": "Category 2",
        "value": 4.5
      },
      {
        "category": "Category 3",
        "value": 3.7
      },
      {
        "category": "Category 4",
        "value": 5.0
      },
      {
        "category": "Category 5",
        "value": 5.8
      },
      {
        "category": "Category 6",
        "value": 1
      },
    ]
  };

  var chartContent = [
    {
      "category": "Category 1",
      "maxLevel": 5,
      "currentLevel": 3,
      "description": "1. Add an icon (or the company's logo) to each container 2. Separate the icon and the \"about text\" by creating two columns (.col-sm-8 and .col-sm-4 3. Add media queries to center the \"logo column\" on screens smaller than 768 pixels wide.",
      "value": 5
    },
    {
      "category": "Category 2",
      "maxLevel": 5,
      "currentLevel": 3,
      "description": "1. Add an icon (or the company's logo) to each container 2. Separate the icon and the \"about text\" by creating two columns (.col-sm-8 and .col-sm-4 3. Add media queries to center the \"logo column\" on screens smaller than 768 pixels wide.",
      "value": 4.5
    },
    {
      "category": "Category 3",
      "maxLevel": 5,
      "currentLevel": 3,
      "description": "1. Add an icon (or the company's logo) to each container 2. Separate the icon and the \"about text\" by creating two columns (.col-sm-8 and .col-sm-4 3. Add media queries to center the \"logo column\" on screens smaller than 768 pixels wide.",
      "value": 3.7
    },
    {
      "category": "Category 4",
      "maxLevel": 5,
      "currentLevel": 3,
      "description": "1. Add an icon (or the company's logo) to each container 2. Separate the icon and the \"about text\" by creating two columns (.col-sm-8 and .col-sm-4 3. Add media queries to center the \"logo column\" on screens smaller than 768 pixels wide.",
      "value": 5.0
    },
    {
      "category": "Category 5",
      "maxLevel": 5,
      "currentLevel": 3,
      "description": "1. Add an icon (or the company's logo) to each container 2. Separate the icon and the \"about text\" by creating two columns (.col-sm-8 and .col-sm-4 3. Add media queries to center the \"logo column\" on screens smaller than 768 pixels wide.",
      "value": 5.8
    },
    {
      "category": "Category 6",
      "maxLevel": 5,
      "currentLevel": 3,
      "description": "1. Add an icon (or the company's logo) to each container 2. Separate the icon and the \"about text\" by creating two columns (.col-sm-8 and .col-sm-4 3. Add media queries to center the \"logo column\" on screens smaller than 768 pixels wide.",
      "value": 1
    }
  ]

  var hierarchy = [
      {
        "name": "Web Application Development",
        "id": "id_0001"
      },
      {
        "name": "JavaScript",
        "id": "id_0002"
      },
      {
        "name": "jQuery",
        "id": "id_0003"
      }
  ];

  // 2. Set HTML
  res.render( "performanceView.ejs", {
    chartOptions: chartOptions,
    chartContent: chartContent,
    hierarchy: hierarchy
  });
});

app.listen( 3000, () => {
  console.log( "Listen port 3000..." );
} );
