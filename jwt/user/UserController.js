const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('./User');

module.exports = router