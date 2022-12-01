const express = require('express');
const cors = require('cors');

const newUsers = require('./src/routes/user.router'); 
const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', newUsers);

module.exports = app;