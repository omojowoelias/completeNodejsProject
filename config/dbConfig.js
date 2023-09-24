const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/trainingdb',
{ useNewUrlParser: true, 
useUnifiedTopology: true }
)
.then(() => console.log('Successfully Connected to DB!!'))
.catch((err) => console.log('There is some error : ' + err))