var MongoClient = require('mongodb').MongoClient;
// using express to display info from MongoDB
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(__dirname + '/project/');
});  

 MongoClient.connect("mongodb+srv://slm:onbasedgod1@cgdb-egygy.mongodb.net/CarlosGamboa", {useNewUrlParser: true} , function (err, client) {
    var db = client.db('CarlosGamboa');
    var cursor = db.collection('EventInformation').find();
    var collection = db.collection('EventInformation'); 
    var port = 3002;

    app.listen(port, () => {
        console.log("listening on " + port + "");
    })

   cursor.forEach((err, items) => {
        if (!err) {
            return console.log(items);
        }

       if (err) {
           return console.log(err);
       }
   });
});