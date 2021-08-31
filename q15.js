var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var query = {$or :[{ name:"Kala"},{ name:"Aruli" }]};
  dbo.collection("studentmarks").find(query, { projection:
    { _id: 0, name: 1, maths_marks:1, science_marks:1 } }).
    toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
