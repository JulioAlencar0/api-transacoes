const express = require('express');
const app = express();
const pool = require('./config/db.js');
const rotasTransacao = require('./routes/rotasTransacao.js')

app.use(express.json());

app.use('/transacao', rotasTransacao)
module.exports = app;