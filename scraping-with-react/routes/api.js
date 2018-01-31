'use strict'

const express = require('express');
const router = express.Router();

var Article = require('../models/ArticleSchema.js');

// API GET- Will display React app
router.get("/api/saved", function (req, res) {
    Article.find({}, function(err, docs) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(docs);
        }
    });
});

// API POST-the components will use this to save the article to the db
router.post("/api/saved", function (req, res) {
    var entry = new Article (req.body);

    entry.save(function(err, doc) {
        if(err) {
            console.log(err);
            res.sendStatus(400);
        }
        else {
            console.log(doc);
            res.sendStatus(200);
        }
    });
});

// API DELETE-the component will use this to delete a saved article from the db
router.post("/api/delete/:articleMongoId", function(req, res) {
    console.log(req.params.articleMongoId);
    Article.findByIdAndRemove(req.params.articleMongoId, function(err, todo) {
        if(err) {
            console.log(err);
            res.sendStatus(400);
        }
        else {
            res.sendStatus(200);
        }
    });
});

// Catch - redirects user to '/' for any unknown errors
router.get('*', function(req, res) {
    res.redirect('/');
});

//Export to the App.js 
module.exports = router;
