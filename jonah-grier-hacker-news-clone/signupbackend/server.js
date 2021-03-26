const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Database Connected'))

app.set('port', process.env.PORT || 8000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', routesUrls);
app.listen(4000, () => console.log("server is up and running"));