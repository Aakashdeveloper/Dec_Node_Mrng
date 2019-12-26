const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
const User = require('../user/User');

router.get('/',(req,res) => {
    res.render('signup')
});

router.get('/profile', (req,res) => {
    var token = localStorage.getItem('authtoken');
    if(!token) {
        const string = encodeURIComponent('Please login first')
       //res.send('Registration Successfull')
       res.redirect('/signin?msg='+string)
    }
    jwt.verify(token, config.secert, (err,decoded) => {
        if(err) res.status(401).send({auth:false, message:'Token not valid'})
        User.findById(decoded.id,{password:0},(err,user) => {
            if(err) { res.redirect('/signin')}
            if(!user) { res.redirect('/signup')}
            res.render('profile',{user});
        })
    })
})

router.get('/logout',(req,res) => {
    localStorage.removeItem('authtoken')
    res.redirect('/signin')
})

module.exports = router