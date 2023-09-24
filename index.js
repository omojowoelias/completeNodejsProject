const express = require('express')
const app = express();

const dbConfig = require('./config/dbConfig');
const mongoose = require('mongoose');


//var indexRoutes = require('./routes/indexRoutes');
var userRoutes = require('./routes/userRoutes');
var employeesRoutes = require('./routes/employeesRoutes');

//app.use('/', indexRoutes);
app.use(express.json());
app.use('/user', userRoutes);
app.use('/employees', employeesRoutes);


app.listen(3000, () => {
    console.log('The Server is running at port 3000!!')
});