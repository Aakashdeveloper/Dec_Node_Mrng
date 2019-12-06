var fs = require('fs');

/*fs.writeFile('myText.txt','This is from node',function(err){
    if(err) throw err;
    console.log('Data added')
})*/

/*var text = "this is append"+ '\n' 

fs.appendFile('myText.txt',text, function(err){
    if(err) throw err;
    console.log('data addeedd')
} )
*/
fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})

/*fs.rename('myText.txt','myCode.txt', function(err){
    if(err) throw err;
    console.log('file rename')
} )

fs.unlink('myCode.txt',function(err){
    if(err) throw err;
    console.log('file deleted')
})*/