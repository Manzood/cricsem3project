import {exportval} from '../App.js'
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var matches;

// export const transfermatchesintofile = (data, err) => {
//     if (err) throw err;
//     matches = data;
//     console.log(matches);
// };

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
//   var dbo = db.db("mydb");
  var cricketdatabase = db.db("cricdatabase")

  // this object should later be replaced with a simple function call
  var myobj = { name: "Company Inc", address: "Highway 37" };


  // this function inerts a required object into the given collection
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });

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