var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  var myquery = { name:"John"};
  var newvalues = {$set: {maths_marks:87, english_marks:23}};
  dbo.collection("studentmarks").updateOne(myquery, newvalues,{upsert:true}, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});
