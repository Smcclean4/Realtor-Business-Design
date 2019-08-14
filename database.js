var MongoClient = require('mongodb').MongoClient;
// using express to display info from MongoDB
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3002, () => {
    console.log('listening on 3002');
})

 app.get('/', (req, res) => {
     res.sendFile(__dirname + '/project/');
 });

 MongoClient.connect("mongodb+srv://slm:onbasedgod1@cgdb-egygy.mongodb.net/CarlosGamboa", {useNewUrlParser: true} , function (err, client) {
    var db = client.db('CarlosGamboa');
    var cursor = db.collection('myCollection').find();
    var collection = db.collection('myCollection');

   cursor.forEach((err, items) => {
       if (err) {
           return console.log(err);
       }

   });
});