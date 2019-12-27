const express = require('express')
const app = express();
const port = 8900;
const Pool = require('pg').Pool;

const pool = new Pool({
    user:'',
    host:'',
    database:'',
    password:'',
    port:5432
})

app.get((req,res) => {
    pool.query('SELECT * from students',(err,result) => {
        if(err){
            throw err
        }else{
            res.json(result.rows)
        }
    })
})



app.listen(port,(err)=>{
    console.log(`Server is running on port ${port}`)
})