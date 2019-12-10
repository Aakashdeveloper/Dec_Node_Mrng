var express = require('express');
var app = express();
var port = 9800;
var morgan = require('morgan');
var chalk = require('chalk');
var moviesRouter = require('./src/routes/moviesRoute');
var artistRouter = require('./src/routes/artistRoute');

app.use(morgan('tiny'));

//Path of staticfile(css,js)
app.use(express.static(__dirname+'/public'))
//Path of view/html
app.set('views','./src/views')
//Template Engine
app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.send("This is default route")
});

app.use('/movies', moviesRouter);
app.use('/artist', artistRouter)

// Server with express 
app.listen(port, function(err){
    if(err){throw err}
    else{
        console.log(`${chalk.cyan(`Server is running on port ${port}`)}`)
    }
});