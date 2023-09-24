var express = require('express')
var router = express.Router();  //i wn to take the only default router

var Employees = require('../models/employees');
var employeesController = require('../controllers/employeesController');


//http://localhost: 3000/employees
/*router.get('/', (req, res) => {
    //res.send('Employees List Here...');
    Employees.find(('/', (err, employees) => {
        if (err) throw err;
        res.send(employees);
    }));
})*/

router.get('/', employeesController.listEmployees);

/*router.get('/', async (req, res) => {
    try {
      const employees = await Employees.find();
      res.send(employees);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });*/

router.get('/show/:id', async (req, res) => {
    try {
        const employees = await Employees.findById(req.params.id);
            if (!employees) throw err;
            res.send(employees);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

//Access API Url: http://localhost:3000/employees/save  
router.post('/save', async (req, res) => {
    try {
        const employees = await Employees.create();
        res.send('Employees Saved Successfully to DB!!');
    } catch (err) {
        res.status(500).send('Server Error');
    }
});
//Access API Url: http://localhost:3000/employees/update/id
router.put('/update/:id', async (req, res) => {
    try {
        const employees = await Employees.findByIdAndUpdate(req.params.id);
        res.send('Employees was updated');
    } catch (err) {
        res.status(500).send('Server Error');
    }
})
//Access API Url: http://localhost:3000/employees/delete/650d521c7973a4f2d4601f56
router.delete('/delete/:id', async (req, res) => {
    try {
        const employees = await Employees.findByIdAndRemove(req.params.id);
        if (!employees) throw err;
        res.send('Employees was deleted Successfully');
    } catch (err) {
        res.status(500).send('Server Error');
    }
})

//Access API Url: http://localhost:3000/employees/show/650d524a7973a4f2d4601f57 
/*router.get('/show', (req, res) => {
    try {
        res.send('Getting Details of specific employee here..')
    } catch (err) {
        res.status(500).send('Server Error');
    }
})*/

/*router.get('/show', (req, res) => {
    res.send('Getting Details of specific employees')
})*/

module.exports = router;