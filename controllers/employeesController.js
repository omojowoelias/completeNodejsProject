var mongoose = require('mongoose');
var Employees = require('../models/employees');

var employeesController = {};

employeesController.listEmployees = async function(req, res) {
    try {
      const employees = await Employees.find();
      res.send(employees);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };
  
employeesController.showemployeesById = async function(req, res) {
    try {
        const employees = await Employees.findById(req.params.id);
            if (!employees) throw err;
            res.send(employees);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
  module.exports = employeesController;