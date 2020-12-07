var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://localhost:27017/mydb', function (err, database) {
  if (err) throw err
  db = database.db('testdatabase');
  console.log('Connected to MongoDB');
  app.listen(5000, () => {
      console.log("Listening on port 5000");
  });
});

app.use(bodyParser.json())

// function dropdatabases () {
//   var dbs = db.getMongo().getDBNames()
//   for(var i in dbs){
//     db = db.getMongo().getDB( dbs[i] );
//     print( "dropping db " + db.getName() );
//     db.dropDatabase();
//   }
// }

app.get('/', (req, res) => {
    res.send('Hello World!')
    db.collection('matches').find().toArray(function(err, docs) {
      if (err) throw err;
      res = JSON.stringify(docs[0]);
    })
})

app.post('/', function(req, res) {
  db.collection('matches').insertOne(req.body, function (err, result) {
      if (err) res.send('Error');
      else {
        console.log("It has been inserted successfully");
        res.send('Success');
      }
  });
});
