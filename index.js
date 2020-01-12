const express = require('express')
const app = express();
const Joi = require('joi');
app.use(express.json());
const courses = require('./routes/courses')
const homepage = require('./routes/homepage');
app.use('/api/courses',courses);
app.use('/',homepage);

//Debugger
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
//lets assume that we have database issue
dbDebugger('we have database issue!!!!');

// creating custom middleware function
const logger = require('./logger');
app.use(logger);

//built in middleware functions
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//Third party middleware function
const helmet = require('helmet');
const morgan = require('morgan');
app.use(helmet());

//environment variables
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);
if(app.get('env')==='development')
    {
        app.use(morgan('tiny'));
        startupDebugger('morgan is enabled !!!')
    }

//configuration
const config = require('config');
console.log(`Application Name: ${config.get('name')}`);
console.log(`Application mail server: ${config.get('mail.host')}`);
console.log(`Application mail server: ${config.get('mail.password')}`);

//Template Engines
app.set('view engine','pug');


const port = process.env.PORT||3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));

