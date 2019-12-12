var express = require('express');
var artistRouter = express.Router();

var artist = [
        { 
            "id": 1,
            "name": "Jimi Hendrix",
            "cover":"https://i.ibb.co/JxwnpbT/download.jpg",
            "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "genre":"rock, blues"
        },
        { 
            "id": 2,
            "name": "Madonna",
            "cover":"madonna", 
            "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "genre":"pop"
        },
        { 
            "id": 3,
            "name": "Johnny Cash", 
            "cover":"johnny_cash",
            "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 
            "genre":"pop"
        },
        { 
            "id": 4,
            "name": "Pink Floyd", 
            "cover":"pink_floyd", 
            "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "genre":"Rock"
        }
]
   

function routes(menu){
    artistRouter.route('/')
    .get((req,res)=>{
        //res.send(artist)
        res.render('artists',{title:'Artists Page',menu})
    });
    
    artistRouter.route('/details/:id')
    .get((req,res)=>{
        res.send('artist details Page')
    });

    return artistRouter
}


module.exports=routes;