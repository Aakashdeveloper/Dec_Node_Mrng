const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
const User = require('../user/User');

router.post('/register', (req,res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8)

    User.create({
        name:req.body.name,
        password:hashedPassword,
        email:req.body.email,
        role:req.body.role
   },(err,user) => {
       if(err) return res.status(500).send('There was a problem registering user')
       const string = encodeURIComponent('SucessFull Reegiter Please login now')
       //res.send('Registration Successfull')
       res.redirect('/signin?msg='+string)
   })
});

router.post('/login', (req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err)  res.redirect('/signin')
        if(!user) res.redirect('/signiup')
        else{
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            const string = encodeURIComponent('Please enter correct password')
            if(!passwordIsValid) res.redirect('/signin?msg='+string)
            var token = jwt.sign({id:user._id},config.secert,{
                expiresIn:86400 //24 hours
            });
            console.log('Login success');
            localStorage.setItem('authtoken', token)
            // res.send({auth:true,token:token})
            res.redirect('/user/profile');
        }
    })
});

router.get('/getUser',(req,res) => {
    var token = req.headers['x-access-token'];
    if(!token) res.status(401).send({auth:false, message:'No Token Provided'})

    jwt.verify(token, config.secert, (err,decoded) => {
        if(err) res.status(401).send({auth:false, message:'Token not valid'})
        User.findById(decoded.id,{password:0},(err,user) => {
            if(err) res.status(500).send('Problem finding user');
            if(!user) res.status(401).send('No User found')
            res.send(user)
        })
    })
})



module.exports = router;