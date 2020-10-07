var express = require("express");

// var catMe = require("cat-me");

var app = express();


app.get("/", function(req,res){
    res.send("Hi there!, welcome to my assignment");
});

app.get("/speak/:animal", function(req,res){
    var newAnimal = req.params.animal
    if (newAnimal === "pig"){
        res.send("The pig says 'oink'");
    }else if (newAnimal ==="cow"){
        res.send("The cow says 'moo'");
    }else if (newAnimal ==="dog"){
        res.send("The dog says 'woof woof!'");
    }
    
});

app.get("/repeat/:word/:num", function(req,res){
    var repeatedWord = req.params.word
    var text = req.params.num
    var numRepeat = parseInt(text, 10);
    var r='';
    for (i = 0; i <numRepeat; i++){
        r+= repeatedWord+' ';
    }

    res.send(r)
});

app.get("*", function(req,res){
    res.send('sorry, page not found. what are you doing with your life?')
});

app.listen(4000, function(){
    console.log('test')
});