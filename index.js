const express = require('express');
const app = express();
const path = require ('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs');

app.get("/", function(req,res){
    res.render("index");
});
app.get("/profile/:username", function(req,res){ // colon means this part is dynamic
    res.send("index");
});
app.listen(3000,function(){
    console.log("ohooo running");
}) 