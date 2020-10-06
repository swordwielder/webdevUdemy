var express = require("express");

// var catMe = require("cat-me");

var app = express();


app.get("/", function(req,res){
    res.send("Hi there!");
});

app.get("/bye", function(req,res){
    res.send('goodbye for now!');
})

app.get("/r/:subredditName", function(req,res){
    
    var name = req.params.subredditName;
    res.send('This the '+name.toUpperCase()+' subreddit!');
    console.log(req.params)
    // console.log(res)
})

app.get("*", function(req,res){
    res.send("This page doesn't exist")
    
});

app.listen(3000, function(){
    console.log('test')
});