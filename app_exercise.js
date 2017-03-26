const express = require( "express" );

const app = express();

app.set( "views", __dirname + "/views" );
app.engine( "html", require("ejs").renderFile );
app.set( "view engine", "ejs" );

app.use( express.static("img") );
app.use( express.static("css") );
app.use( express.static("amcharts") );

app.get( "/", (req, res) => {
  res.send( "<h1>Welcome</h1>" );
} );

app.get( "/index", (req, res) => {
  res.render( "index.html" );
} );

app.get( "/w3css", (req, res) => {
  res.render( "w3css.html" );
} );

app.get( "/amchart", (req, res) => {
  res.render( "samples/radarSimple.html" );
} );

app.listen( 3000, () => {
  console.log( "Listen port 3000..." );
} );
