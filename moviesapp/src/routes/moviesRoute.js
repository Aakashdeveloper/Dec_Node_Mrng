var express = require('express');
var moviesRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function routes(menu){
  moviesRouter.route('/')
  .get((req,res)=>{
      mongodb.connect(url,(err,dc)=>{
        if(err){
          res.status(401).send('Error Connecting')
        }else{
          const dbo = dc.db('classdatabase');
          dbo.collection('movies').find({}).toArray((err,data)=>{
            if(err){
              res.status(401).send('Error getting data')
            }else{
              res.render('movies',{
                title:'Movies Page',
                data:data,
                menu
              })
            }
          })
        }
      })      
});

  moviesRouter.route('/details/:id')
    .get((req,res)=>{
        //var id = req.params.id
        var {id} = req.params
        mongodb.connect(url,(err,dc) => {
          if(err){
            res.status(401).send('Error Connecting')
          }else{
            const dbo = dc.db('classdatabase');
            dbo.collection('movies').findOne({_id:id},(err,data) => {
              if(err){
                res.status(401).send('Error getting data')
              }else{
                res.render('moviesDetails',{
                  title:'Movies Details Page',
                  data:data,
                  menu:menu
                })
              }
            })
          }
        })
        
});

return moviesRouter
}

module.exports = routes;