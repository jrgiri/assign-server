var express = require('express');
var api = express();
var Employee = require('../Models/EmployeeModel');

api.post('/employee', (req, res) => {
  var employee = new Employee(req.body);

  // console.log(user_data);
  employee.save((err, data) => {
    if (err) {
      res.status(500).send({'message':'unsuccess'});
    } else {
      res.send({'message':'success'});
    }
  });

})

api.get('/employee', function(req, res){
  Employee.find().exec(function (emp_err, emp_data) {
    if (emp_err) {
      res.status(500).send({'message':'error'});
    }
    res.send(emp_data)
  })
})

api.put('/employee/:id', function(req, res){
  Employee.findOneAndUpdate({"employeeId":req.params.id}, {$set: Object.assign({}, req.body)}, {upset: true}, function(err, emp_data){
    if(err){
      res.status(500).send({'message':'unsuccess'});
    }else{
      res.send({'message':'success'});
    }
  });
});

api.delete('/employee/:id', function(req, res){
  Employee.deleteOne({"employeeId":req.params.id}, function(err, emp_data){
    if(err){
      res.status(500).send({'message':'unsuccess'});
    }else{
      res.send({'message':'success'});
    }
  })
})

module.exports = api;
