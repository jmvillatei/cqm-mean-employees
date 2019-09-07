const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const os = require("os");
const network = os.networkInterfaces();
const urlHost = 'http://'+network['lo'][0]['address']+':4200';


//const localhost = window.location.host;

const app = express();

const { mongoose } = require('./database')

// Settings
app.set('port', process.env.PORT || 5000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


// Routes
app.use('/api',require('./routes/employees.routes'));
app.use('/api',require('./routes/users.routes'));

//Static files

app.use(express.static(path.join(__dirname , '../frontend/dist/frontend')))

// Initialization server

app.listen(app.get('port'), () => {
    console.log(network);
    console.log(urlHost);
    console.log('Server on Port ' + app.get('port'));
});