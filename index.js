const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT);
