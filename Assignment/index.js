var express = require('express');
var app = express();
var config = require('config');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dbConfig = require('./config/database');
var jwt = require('jsonwebtoken');

var employeeRouter = require('./Controller/EmployeeController');

mongoose.connect(dbConfig.db).then(() => {
  console.log('DB connected');
});
mongoose.set('debug', true);

app.use(bodyParser.json());

app.use('/api', employeeRouter);

var server = app.listen(8080, function(req, res){
  console.log('server started at 8080');
})
