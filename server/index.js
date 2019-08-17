const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

const { mongoose } = require('./database')

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


// Routes
app.use('/api',require('./routes/employees.routes'));
app.use('/api',require('./routes/users.routes'));


// Initialization server

app.listen(app.get('port'), () => {
    console.log('Server on Port ' + app.get('port'));
});