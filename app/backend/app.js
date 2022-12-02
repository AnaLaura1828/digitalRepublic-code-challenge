const express = require('express');
const cors = require('cors');

const newUsers = require('./src/routes/user.router'); 
const transactions = require('./src/routes/transactions.router')
const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', newUsers);
app.use('/transaction', transactions);

module.exports = app;