import express from 'express';
import database from './database'
const app = express();
const port = 8778;

app.get('/',(req,res) => {
    res.status(200).send("hiii")
});

app.get('/getProduct',(req,res) => {
    let output = database.prototype.getData('myproduct');
    res.send(output)
});

app.post('/postProduct',(req,res) => {
    var mydata = {'name':'john','class':'node'}
    let output = database.prototype.postData('myproduct',mydata);
    res.send(output)
});

app.listen(port,(err) => {
    console.log(`Serveris running on port ${port}`)
});

