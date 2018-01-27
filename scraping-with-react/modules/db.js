'use strict'

const db = require('../models');

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/scrapedb", {});

module.exports = db;