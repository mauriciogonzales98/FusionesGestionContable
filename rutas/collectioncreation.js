var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/fusiones';


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("fusiones");
    var myobj = [
        { seccion: "Verduleria" },
        { seccion: "Carniceria" },
    ];
    dbo.collection("Categoria").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });