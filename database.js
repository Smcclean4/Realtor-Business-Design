var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/CarlosGamboa';
// using express to display info from MongoDB
var express = require('express');
var app = express();

    MongoClient.connect( url , function (err, client) {
        var db = client.db('CarlosGamboa');
        var cursor = db.collection('myCollection').find();
        var collection = db.collection('myCollection');
    
       cursor.each((err, items) => {
           console.log(items);
       });
    });

