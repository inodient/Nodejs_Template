const express = require( "express" );
const app = express();

app.set( "views", __dirname + "/views" );
app.set( "view engine", "ejs" );

app.engine( "html", require("ejs").renderFile );

app.use( express.static("amcharts") );
app.use( express.static("css") );
app.use( express.static("img") );




app.get( "/", function(req, res){
  res.send( "<h1>Welcome</h1>" );
} );

app.get( "/index", function(req, res){
  res.render( "index.html" );
} );

app.get( "/w3css", function(req, res){
  res.render( "w3css.html" );
} );

app.get( "/amchart", function(req, res){
  res.render( "samples/radarSimple.html" );
} );

app.get( "/exercise", function(req, res){
  res.render( "170313_03.html" );
} );

app.get( "/company", function(req, res){
  res.render( "company_template.html" );
});

app.listen( 3000, function(){
  console.log( "Listen port 3000..." );
} );
