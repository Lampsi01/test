

const express = require("express")
const path = require("path")
const bodyParser = require('body-parser');
const { name } = require("ejs");



let app = express(); 
let port = 3000; 


app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

 


app.use(express.static("../public"));
 

app.get("/" , function(req , res){
   console.log("get req triggred")
   res.render("index.ejs" ); 
         
    
})
app.get("/home" , function(req , res){
    
   res.render("index.ejs" ); 
         
    
})

app.get("/about" , function(req , res){
   
   res.render("about.ejs" ); 
         
    
})

app.get("/Contact" , function(req , res){
  
   res.render("contactMe.ejs" ); 
         
    
})

 

  






app.listen(port , "0.0.0.0" , function(){
    console.log(`server on : http://localhost:${port}`)
 
    
})