var express = require('express');
var app = express();
var port = 7800
var request = require('request');

app.use(express.static(__dirname+'/public'))
app.set('views', './src/views');
app.set('view engine','ejs')

const ApiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Boston&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29';

app.get('/weather',(req,res) => {
    request(ApiUrl,(err,response,body) => {
        if(err){
            res.status(404).send('Api is not running')
        }else{
            var out = JSON.parse(body)
            res.render('weather',{title:'Weather App',result:out})
        }
    })
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Api call is running on port ${port}`)
})