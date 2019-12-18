var express = require('express');
var axios = require('axios');
var redis = require('redis');
var port = 7700;
var app = express();
var client = redis.createClient();
client.on('error',(err) => {
    console.log(err)
})

app.get('/details',(req,res) => {
    var userinput = req.query.country;
    var url = `https://en.m.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userinput}`

    return client.get(`wiki:${userinput}`,(err,result) => {
        if(result){
            const output = JSON.parse(result);
            return res.send(output)
        }else{
            return axios.get(url)
                    .then(response => {
                        const output = response.data;
                        client.setex(`wiki:${userinput}`,3600,JSON.stringify({
                            source:'Redis Cache',...output
                        }))
                        return res.status(200).json({source:'API',...output})
                    })
                    .catch(err =>{
                        return res.send(err)
                    })
        }
    })
})

app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})