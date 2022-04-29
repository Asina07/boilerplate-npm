var express = require('express');
var app = express();
// import env
require ('dotenv').config();

//01
app.get('/',function(req,res){
  res.send("Hello Express");
});

//02
absolutePath = __dirname + '/views/index.html' 
app.get('/',function(req,res){
  res.sendFile(absolutePath);
});

//03
app.use(express.static(__dirname+ '/public/style.css'))
app.use('/public',express.static(__dirname + "/public"))

//04
let message = app.get('/json', function(req,res){
  res.json({"message": "Hello JSON"})
});

//env
const mySecret = process.env['MESSAGE_STYLE']
app.get('/json', function(req,res){
  if(mySecret==='uppercase'){
    res.json({"message": "HELLO JSON"})
  }else{
    res.json(message)
  }
});
































 module.exports = app;
