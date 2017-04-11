const express = require( "express" );
const request = require( "request" );

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

app.get( "/main", (req, res) => {
  res.render( "samples/radarSimple.html" );
} );

app.get( "/loginCheck", (req, res) => {
  request( "https://graph.facebook.com/debug_token?input_token=EAAChJVAVxPQBAA8Pgj1tD2LLcfiGc1IW5ewGrQQq1h8tPe3gbuY8R7CmPV2xkvzt61wfYZCzCCVIjLORIGsGZAgGnxgUNBcOi4VY1xe3lVNXCO1OxryNrIBROoeFXTr9ao9eZBhbNjeg49tek8PeFon948yL9QZD&access_token=177181629465844|bhNmrOsAnpSNAMKrhn57WKYbEhQ", function(error, response, body) {
    if( !error && response.statusCode == 200 ){
      console.log( body );
    }
  } );


  res.render( "170313.html" );
} );

app.listen( 3000, () => {
  console.log( "Listen port 3000..." );
} );
