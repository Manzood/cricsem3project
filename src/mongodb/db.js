// import {exportval} from '../App.js'
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3000/";

var matches;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var cricketdatabase = db.db("cricdatabase")

    matches = exportval;
    if (matches) insertintodatabase (cricketdatabase, matches, db);


  // the following is a search function, so you can potentially filter matches by team name?
  // perhaps?
//   dbo.collection("customers").find({}).toArray( function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
});

function insertintodatabase(cricketdatabase, matches, db) {
    cricketdatabase.collection("matches").insertOne(matches, function (err, res) {
        if (err)
            throw err;
        console.log("The matches have been inserted");
        db.close();
    });
}