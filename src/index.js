const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/prueba',{
     useUnifiedTopology: true 
}).then(db => console.log('db is connected')).catch(err => console.log(err));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index.js'));

//Start server
app.listen(3000, () =>{
    console.log(`Server on port ${app.get('port')}`);
})