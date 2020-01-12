const express = require('express');
const app = express();
app.use(express.json());
const joi =require('joi');

const genres = require('./routes/genres');
app.use('/api/genres',genres);

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}....`));




