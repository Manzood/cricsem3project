// import express from 'express';
import mongo from 'mongodb';
import assert from 'assert';
// if (express === undefined) {
    // console.log("WHAT");
// }
// var router = express.Router();

// router.get('/', function(req, res, next) {
//     res.render('index');
// });

// var url = 'mongodb://localhost:27017/test';

// router.get('/get-data', function(req, res, next) {
//     var resultArray = [];
//     mongo.connect(url, function(err, db) {
//         assert(null, err);
//         var cursor = db.collection('Match-Scores').find();
//         cursor.forEach(function(doc, err) {
//             assert(null, err);
//             resultArray.push(doc);
//         }, function() {
//             db.close();
//             res.render('index', {items: resultArray});
//         });
//     });
// });

// router.post('/insert', function (req, res, next) {
//     var item = {
//         description: req.body.description,
//         score: req.body.score,
//         stat: req.body.stat,
//         team1: req.body.team-1,
//         team2: req.body.team-2,
//     }

//     mongo.connect(url, function(err, db) {
//         db.collection ('Match-Scores').insertOne(item, function(err, result) {
//             assert(err, null);
//             console.log("Item has been inserted\n");
//             db.close();
//         });
//     });

//     res.redirect('/');
// });

// router.post('/update', function (req, res, next) {

// });

// router.post('/delete', function (req, res, next) {

// });
