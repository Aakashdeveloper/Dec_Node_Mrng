const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
var dbname ="classpractice"

const maincall= (myObj) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var dbo= db.db(dbname);
        dbo.collection('myproduct').insertMany(myObj, (err) =>{
            if(err) throw err;
            console.log('Data Inserted');
            db.close();
        })
    })
}

//Getting Data
var out;
maincall.prototype.getData = (colName) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var dbo= db.db(dbname);
        dbo.collection(colName).find({}).toArray((err,result) =>{
            if(err) throw err;
            console.log('Data fetched');
           out = result;
        })
    })

    return out;
}

// Insert Data
maincall.prototype.postData = (colName,myObj) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var dbo= db.db(dbname);
        dbo.collection(colName).insertOne(myObj, (err,result) =>{
            if(err) throw err;
            db.close();
        })
    })
    let out = "Data inserted"
    return out;
}

//Update Data
maincall.prototype.updateData = (colName,query,myObj) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var dbo= db.db(dbname);
        dbo.collection(colName).update(query,myObj, (err,result) =>{
            if(err) throw err;
            db.close();
        })
    })
    let out = "Data updated"
    return out;
}

//Delete Data
maincall.prototype.updateData = (colName,query) => {
    MongoClient.connect(url,(err,db) => {
        if(err) throw err;
        var dbo= db.db(dbname);
        dbo.collection(colName).deleteOne(query, (err,result) =>{
            if(err) throw err;
            db.close();
        })
    })
    let out = "Data Deleted"
    return out;
}

module.exports = maincall;
