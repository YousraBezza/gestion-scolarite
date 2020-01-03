const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());


const notes = require('./api/notes');
app.use('/api/notes',notes);
module.exports=app