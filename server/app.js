/*jshint esversion: 6 */
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoConnection = require('./modules/mongo-connection');
const hoods = require('./routes/hoods');

const portDecision = process.env.PORT || 5000;

app.get('/', function(req, res){
  res.sendFile(path.resolve('./public/views/index.html'));
});

mongoConnection.connect();

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/hoods', hoods);

app.listen(portDecision, function(){
  console.log("Listening on port: ", portDecision);
});
